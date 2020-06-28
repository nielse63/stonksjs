#!/usr/bin/env python3.7
from finviz.screener import Screener

# https://finviz.com/screener.ashx?v=112&f=an_recom_buybetter,exch_nyse,fa_epsyoy_high,fa_pe_u20,fa_peg_low,geo_usa&ft=4&o=-change
filters = [
    'an_recom_buybetter',
    'exch_nyse',
    'fa_epsyoy_high',
    'fa_pe_u20',
    'fa_peg_low',
    'geo_usa'
]  # Shows companies in NASDAQ which are in the S&P500
stock_list = Screener(filters=filters, table='Performance', order='-change')  # Get the performance table and sort it by price ascending

# Export the screener results to .csv
stock_list.to_csv('scripts/data/screener_results.csv')

# Print the table into the console
print(stock_list)
