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

assets =  [
  'AOA',
  # 'BYND',
  'SCHD',
  'IVV',
  'IJH',
  'GURU',
  'MILN',
  'AMZN',
  'AIEQ',
  'VCIT',
  'JNK',
  'AOK',
  'VWO',
]
# Assign weights to the stocks. Sum of values must be 1
weights = np.array([
  0.3,
  # 0.14,
  0.14,
  0.1,
  0.07,
  0.07,
  0.07,
  0.05,
  0.05,
  0.04,
  0.04,
  0.03,
  0.02,
])
# #Get the stock starting date
stockStartDate = '2018-01-01'
# # Get the stocks ending date aka todays date and format it in the form YYYY-MM-DD
today = datetime.today().strftime('%Y-%m-%d')

#Create a dataframe to store the adjusted close price of the stocks
df = pd.DataFrame()
#Store the adjusted close price of stock into the data frame
for stock in assets:
  df[stock] = web.DataReader(stock, data_source='yahoo', start=stockStartDate, end=today)['Adj Close']

# print(df.head())

returns = df.pct_change()
cov_matrix_annual = returns.cov() * 252
port_variance = np.dot(weights.T, np.dot(cov_matrix_annual, weights))
port_volatility = np.sqrt(port_variance)
portfolioSimpleAnnualReturn = np.sum(returns.mean()*weights) * 252

# print('=====================================')
# percent_var = str(round(port_variance, 2) * 100) + '%'
# percent_vols = str(round(port_volatility, 2) * 100) + '%'
# percent_ret = str(round(portfolioSimpleAnnualReturn, 2)*100)+'%'
# print("Expected annual return : "+ percent_ret)
# print('Annual volatility/standard deviation/risk : '+percent_vols)
# print('Annual variance : '+percent_var)
# print('=====================================')

mu = expected_returns.mean_historical_return(df) #returns.mean() * 252
S = risk_models.sample_cov(df) #Get the sample covariance matrix
ef = EfficientFrontier(mu, S)
weights = ef.max_sharpe() #Maximize the Sharpe ratio, and get the raw weights
cleaned_weights = ef.clean_weights()
ef.portfolio_performance(verbose=True)

latest_prices = get_latest_prices(df)
weights = cleaned_weights
da = DiscreteAllocation(weights, latest_prices, total_portfolio_value=10000)
allocation, leftover = da.lp_portfolio()
print("Discrete allocation:", allocation)
print("Leftover:", leftover)
