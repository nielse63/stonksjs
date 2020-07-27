const ScreenersURLs = {
  Default: 'https://finviz.com/screener.ashx?v=112&f=an_recom_buybetter,exch_nyse,fa_epsyoy_high,fa_pe_u20,fa_peg_low,geo_usa&ft=4&o=-change',
  Breakout: 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_highlow52w_b0to10h,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change',
  HighYieldDividends: 'https://finviz.com/screener.ashx?v=111&f=an_recom_buybetter,fa_div_high,ta_sma20_pa&ft=4&o=-dividendyield',
  SwingTrending: 'https://finviz.com/screener.ashx?v=111&s=ta_topgainers&f=an_recom_buybetter,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&ft=4&o=-change',
};

module.exports = {
  ScreenersURLs,
};
