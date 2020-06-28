#!/usr/bin/env python3
import requests
import os
import pandas_datareader as pdr
from pandas_datareader import data as web
import pandas as pd
# from pandas.util.testing import assert_frame_equa
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
from pypfopt.efficient_frontier import EfficientFrontier
from pypfopt import risk_models
from pypfopt import expected_returns
from pypfopt.discrete_allocation import DiscreteAllocation, get_latest_prices
from urllib.request import urlopen, Request

# https://medium.com/datadriveninvestor/maximize-your-stock-market-earnings-with-machine-learning-87709494b1e3

plt.style.use('fivethirtyeight')

r = requests.get('http://localhost:3000/api/portfolio')
portfolio_assets = r.json()['data']
assets = []
weights_array = []
total_qty = 0
for obj in portfolio_assets:
  total_qty += obj['quantity']
for obj in portfolio_assets:
  assets.append(obj['symbol'])
  weight = obj['quantity'] / total_qty
  weights_array.append(weight)
weights = np.array(weights_array)
# print(assets)
# assets =  ["FB", "AMZN", "AAPL", "NFLX", "GOOG"]
# # Assign weights to the stocks. Weights must = 1 so 0.2 for each
# weights = np.array([0.2, 0.2, 0.2, 0.2, 0.2])
# #Get the stock starting date
stockStartDate = '2018-01-01'
# # Get the stocks ending date aka todays date and format it in the form YYYY-MM-DD
today = datetime.today().strftime('%Y-%m-%d')
# tiingo_data = pdr.get_data_tiingo('GOOG', api_key=os.getenv('TIINGO_API_KEY'))['close']
# print(tiingo_data)
# print(web.get_data_tiingo('SPY', api_key=os.getenv('TIINGO_API_KEY'))
asset_data = web.DataReader('SPY', "av-daily", start=stockStartDate , end=today, api_key=os.getenv('ALPHA_VANTAGE_API_KEY'));
print(asset_data['close'])
exit

#Create a dataframe to store the adjusted close price of the stocks
df = pd.DataFrame()
#Store the adjusted close price of stock into the data frame
for stock in assets:
  df[stock] = web.DataReader(stock, "av-daily", start=stockStartDate , end=today, api_key=os.getenv('ALPHA_VANTAGE_API_KEY'))['close']
  # df[stock] = web.DataReader(stock,data_source='yahoo',start=stockStartDate , end=today)['Adj Close']

# # Create the title 'Portfolio Adj Close Price History
# title = 'Portfolio Adj. Close Price History    '
# #Get the stocks
# my_stocks = df
# #Create and plot the graph
# plt.figure(figsize=(12.2,4.5)) #width = 12.2in, height = 4.5
# # Loop through each stock and plot the Adj Close for each day
# for c in my_stocks.columns.values:
#   plt.plot(my_stocks[c], label=c)#plt.plot( X-Axis , Y-Axis, line_width, alpha_for_blending,  label)
# plt.title(title)
# plt.xlabel('Date',fontsize=18)
# plt.ylabel('Adj. Price USD ($)',fontsize=18)
# plt.legend(my_stocks.columns.values, loc='upper left')
# plt.show()

# Show the daily simple returns, NOTE: Formula = new_price/old_price - 1
returns = df.pct_change()
cov_matrix_annual = returns.cov() * 252
port_variance = np.dot(weights.T, np.dot(cov_matrix_annual, weights))
port_volatility = np.sqrt(port_variance)
portfolioSimpleAnnualReturn = np.sum(returns.mean()*weights) * 252

print('=====================================')
percent_var = str(round(port_variance, 2) * 100) + '%'
percent_vols = str(round(port_volatility, 2) * 100) + '%'
percent_ret = str(round(portfolioSimpleAnnualReturn, 2)*100)+'%'
print("Expected annual return : "+ percent_ret)
print('Annual volatility/standard deviation/risk : '+percent_vols)
print('Annual variance : '+percent_var)
print('=====================================')

mu = expected_returns.mean_historical_return(df) # returns.mean() * 252
S = risk_models.sample_cov(df) # Get the sample covariance matrix
ef = EfficientFrontier(mu, S)
weights = ef.max_sharpe() # Maximize the Sharpe ratio, and get the raw weights
cleaned_weights = ef.clean_weights()
# print(cleaned_weights) #Note the weights may have some rounding error, meaning they may not add up exactly to 1 but should be close
ef.portfolio_performance(verbose=True)
S
latest_prices = get_latest_prices(df)
weights = cleaned_weights
da = DiscreteAllocation(weights, latest_prices, total_portfolio_value=10000)
allocation, leftover = da.lp_portfolio()
print("Discrete allocation:", allocation)
# print("Funds remaining: ${:.2f}".format(leftover))
