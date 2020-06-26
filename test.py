#!/usr/bin/env python3
import requests
import pandas as pd
from yahoo_fin import stock_info as si
from pandas_datareader import DataReader
import numpy as np

from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import os
import pandas as pd
import matplotlib.pyplot as plt
# %matplotlib inline
from nltk.sentiment.vader import SentimentIntensityAnalyzer

tickers = si.tickers_sp500()
recommendations = []
print(tickers)

# for ticker in tickers:
#     lhs_url = 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/'
#     rhs_url = '?formatted=true&crumb=swg7qs5y9UP&lang=en-US&region=US&' \
#               'modules=upgradeDowngradeHistory,recommendationTrend,' \
#               'financialData,earningsHistory,earningsTrend,industryTrend&' \
#               'corsDomain=finance.yahoo.com'

#     url =  lhs_url + ticker + rhs_url
#     r = requests.get(url)
#     if not r.ok:
#         recommendation = 6
#     try:
#         result = r.json()['quoteSummary']['result'][0]
#         recommendation =result['financialData']['recommendationMean']['fmt']
#     except:
#         recommendation = 6

#     recommendations.append(recommendation)
