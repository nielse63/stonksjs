export const success = `<html lang="en" class="dark"><head>
<title>Top Gainers - Stock Screener - Overview </title>
<meta charset="UTF-8"><meta name="viewport" content="width=1024"><meta name="description" content="Stock screener for investors and traders, financial visualizations.">

            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-regular.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-700.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-900.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/inter-latin.woff2" as="font" crossorigin="">

            <script async="" type="text/javascript" src="https://cmp.quantcast.com/choice/c2W8esUZ6Q8oA/finviz.com/choice.js?tag_version=V2"></script><script>
                window.notificationsArray = [];
                window.renderScriptNotLoaded = function () {};
                window.handleScriptNotLoaded = function (element) {
                    window.notificationsArray.push(element);
                    window.sentryDisabled = true;
                    window.handleScriptNotLoaded = function () {};
                };
            </script>
        <link rel="stylesheet" href="/assets/dist/finviz.6b32d3c0.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="stylesheet" href="/assets/dist/main.28c8d53a.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="icon" type="image/png" href="/favicon_2x.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon.png" sizes="16x16">

          <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
          <script type="text/javascript" async="true">
          (function() {
            var host = 'finviz.com';
            var element = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            var url = 'https://cmp.quantcast.com'
              .concat('/choice/', 'c2W8esUZ6Q8oA', '/', host, '/choice.js?tag_version=V2');
            var uspTries = 0;
            var uspTriesLimit = 3;
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;

            firstScript.parentNode.insertBefore(element, firstScript);

            function makeStub() {
              var TCF_LOCATOR_NAME = '__tcfapiLocator';
              var queue = [];
              var win = window;
              var cmpFrame;

              function addFrame() {
                var doc = win.document;
                var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                if (!otherCMP) {
                  if (doc.body) {
                    var iframe = doc.createElement('iframe');

                    iframe.style.cssText = 'display:none';
                    iframe.name = TCF_LOCATOR_NAME;
                    doc.body.appendChild(iframe);
                  } else {
                    setTimeout(addFrame, 5);
                  }
                }
                return !otherCMP;
              }

              function tcfAPIHandler() {
                var gdprApplies;
                var args = arguments;

                if (!args.length) {
                  return queue;
                } else if (args[0] === 'setGdprApplies') {
                  if (
                    args.length > 3 &&
                    args[2] === 2 &&
                    typeof args[3] === 'boolean'
                  ) {
                    gdprApplies = args[3];
                    if (typeof args[2] === 'function') {
                      args[2]('set', true);
                    }
                  }
                } else if (args[0] === 'ping') {
                  var retr = {
                    gdprApplies: gdprApplies,
                    cmpLoaded: false,
                    cmpStatus: 'stub'
                  };

                  if (typeof args[2] === 'function') {
                    args[2](retr);
                  }
                } else {
                  if(args[0] === 'init' && typeof args[3] === 'object') {
                    args[3] = Object.assign(args[3], { tag_version: 'V2' });
                  }
                  queue.push(args);
                }
              }

              function postMessageEventHandler(event) {
                var msgIsString = typeof event.data === 'string';
                var json = {};

                try {
                  if (msgIsString) {
                    json = JSON.parse(event.data);
                  } else {
                    json = event.data;
                  }
                } catch (ignore) {}

                var payload = json.__tcfapiCall;

                if (payload) {
                  window.__tcfapi(
                    payload.command,
                    payload.version,
                    function(retValue, success) {
                      var returnMsg = {
                        __tcfapiReturn: {
                          returnValue: retValue,
                          success: success,
                          callId: payload.callId
                        }
                      };
                      if (msgIsString) {
                        returnMsg = JSON.stringify(returnMsg);
                      }
                      if (event && event.source && event.source.postMessage) {
                        event.source.postMessage(returnMsg, '*');
                      }
                    },
                    payload.parameter
                  );
                }
              }

              while (win) {
                try {
                  if (win.frames[TCF_LOCATOR_NAME]) {
                    cmpFrame = win;
                    break;
                  }
                } catch (ignore) {}

                if (win === window.top) {
                  break;
                }
                win = win.parent;
              }
              if (!cmpFrame) {
                addFrame();
                win.__tcfapi = tcfAPIHandler;
                win.addEventListener('message', postMessageEventHandler, false);
              }
            };

            makeStub();

            var uspStubFunction = function() {
              var arg = arguments;
              if (typeof window.__uspapi !== uspStubFunction) {
                setTimeout(function() {
                  if (typeof window.__uspapi !== 'undefined') {
                    window.__uspapi.apply(window.__uspapi, arg);
                  }
                }, 500);
              }
            };

            var checkIfUspIsReady = function() {
              uspTries++;
              if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                console.warn('USP is not accessible');
              } else {
                clearInterval(uspInterval);
              }
            };

            if (typeof window.__uspapi === 'undefined') {
              window.__uspapi = uspStubFunction;
              var uspInterval = setInterval(checkIfUspIsReady, 6000);
            }
          })();
          </script>
          <!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
        <script>
            FinvizSettings = {
                hasUserPremium: false,
                name: "",
                email: "",
                nodeChartsDomain: "https://charts2-node.finviz.com",
                hasUserRetinaNodeCharts: false,
                hasUserStickyHeader: true,
                adsProvider: 1,
                hasRedesignEnabled: true,
                hasForexFuturesCryptoNodeCharts: true,
            };
        </script><script src="/script/browser_check.js?rev=333"></script><script src="/script/vendor/boxover.js?rev=333"></script>
<script src="/assets/dist/runtime.89ea6735.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/148.e0c7a2d7.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/87.433d0f2a.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/libs_init.f516bc3b.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/372.0b206385.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/header.2c02935d.js" onerror="window.handleScriptNotLoaded(this)"></script><script type="text/javascript">
            var portfolioRowsLimit=50;
            function ScreenerSelectOnChange() {}
        </script><script src="script/screener.js?rev=333" type="text/javascript" onerror="window.handleScriptNotLoaded(this)"></script>
<script src="script/screener_free.js?rev=333" type="text/javascript" onerror="window.handleScriptNotLoaded(this)"></script><link href="/assets/dist/redesign.6368ab98.css" rel="stylesheet" type="text/css"><script>
            const channelIdToLabel = {
                '1': 'MarketWatch',
                '2': 'WSJ',
                '3': 'Reuters',
                '4': 'Yahoo Finance',
                '5': 'CNN',
                '6': 'The New York Times',
                '7': 'Bloomberg',
                '9': 'BBC',
                '10': 'CNBC',
                '11': 'Fox Business',
                '102': 'Mish\'s Global Economic Trend Analysis',
                '105': 'Trader Feed',
                '113': 'Howard Lindzon',
                '114': 'Seeking Alpha',
                '123': 'Fallond Stock Picks',
                '132': 'Zero Hedge',
                '133': 'market folly',
                '136': 'Daily Reckoning',
                '141': 'Abnormal Returns',
                '142': 'Calculated Risk',
            }
            function trackAndOpenNews(event, channel, url) {
              event.preventDefault()
              window.open(url, '_blank')

              let channelLabel
              if (typeof channel === 'string') {
                channelLabel = channel
              } else {
                const label = channelIdToLabel[channel]
                channelLabel = label !== undefined ? label : channel
              }
              window.gtag && window.gtag('event', 'click', {
                send_to: 'G-ZT9VQEWD4N',
                non_interaction: true,
                event_category: 'news',
                event_label: channelLabel,
                value: 1 });
            }
          </script><script type="text/javascript" async="" src="https://u5.investingchannel.com/static/uat.js"></script><script type="text/javascript" async="" src="/script/finviz_b.js?rev=333"></script></head>


          <body class="m-0 yellow-tooltip is-screener">
            <script>
                var cookieName = 'fv_block';
                var selector = '[ic_placementid]';
                var selectorFrame = selector + ' iframe, ' + selector + ' [id*=aax]';
                var cookieExpiry = 5 * 60 * 1000; // 5min
                var checkTimeout = 20 * 1000; // 20sec

                function getCookie(value) {
                    var expiration = +new Date() + cookieExpiry;
                    return cookieName + '=' + value + '; expires=' + (new Date(expiration)).toUTCString() + '; path=/';
                }

                var finvizBannersLoaded = false;
                function loadFinvizBanners(setCookie) {
                    if (setCookie) document.cookie = getCookie('block');
                    finvizBannersLoaded = true;
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = '/script/finviz_b.js?rev=333';
                    document.head.appendChild(s);
                }

                function checkBannersLoaded() {
                    var checkEnd = +new Date() + checkTimeout;
                    function asyncCheckIfExists(selector, resolve) {
                        var now = +new Date();
                        var container = document.querySelector(selector);
                        if (!container && checkEnd > now) return setTimeout(function () { asyncCheckIfExists(selector, resolve) }, 1000)
                        resolve(!!container);
                    }

                    asyncCheckIfExists(selector, function (exists) {
                        if (!exists) return loadFinvizBanners(true);

                        asyncCheckIfExists(selectorFrame, function (hasIframe) {
                            if (!hasIframe) return loadFinvizBanners(true);
                        })
                    })
                }

                if (document.cookie.indexOf(cookieName) >= 0) {
                    loadFinvizBanners(false);
                } else {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.onerror = loadFinvizBanners;
                    s.onload = checkBannersLoaded;
                    s.src = 'https://u5.investingchannel.com/static/uat.js';
                    document.head.appendChild(s);

                    InvestingChannelQueue = window.InvestingChannelQueue || [];
                    var ic_page;

                    function refreshAd(container, refreshes) {
                        var placementTag, adslot;
                        window.InvestingChannelQueue.push(function () {
                            var pubTags = ic_page.getPubTag.call(ic_page, container.id);
                            if (!pubTags) return;
                            var pubTag = pubTags[0];
                            placementTag = pubTag.mPlacements[0].mTagToRender;
                            adslot = pubTag.mPlacements[0].mPublisherKval.adslot[0];
                            // Update div ID
                            var id = container.id.split('_');
                            var numberOfDivs = document.querySelectorAll('[id*=' + id.slice(0, id.length - 1).join('_') + ']').length;
                            var newDivNumber = Number(id.pop()) + numberOfDivs * refreshes;
                            container.setAttribute('id', id.join('_') + '_' + newDivNumber);
                            // Destroy previous pubtag & reset container html (loading span)
                            pubTag.destroy();
                            container.innerHTML = '';
                        });
                        window.InvestingChannelQueue.push(function () {
                            if (!placementTag || !adslot) return
                            // Create new pub tag
                            var newTag;
                            var layoutId = placementTag.mNativeLayout ? placementTag.mNativeLayout.nativelayoutid : null;
                            if (layoutId) {
                                newTag = ic_page.defineNativeTag('finviz/' + placementTag.mTarget.dfpkeyname, placementTag.mAdSize, container.id, layoutId);
                                var nativeLayout, layoutData

                                try {
                                  nativeLayout = newTag.mPlacements[0].mTags[0].mNativeLayout;
                                } catch (e) {
                                    console.log(e.message)
                                }

                                try {
                                  layoutData = newTag.mTemplate.mNativeLayout[layoutId].Data
                                  if (layoutData && nativeLayout && !nativeLayout.layout) {
                                    newTag.mPlacements[0].mTags[0].mNativeLayout = layoutData
                                  }
                                } catch (e) {
                                    console.log(e.message)
                                }
                            } else {
                                newTag = ic_page.defineTag('finviz/' + placementTag.mTarget.dfpkeyname, placementTag.mAdSize, container.id);
                            }
                            // Set adslot param
                            newTag.setKval({ adslot: adslot });
                            newTag.setKval({ kw: 'ajax' });
                            newTag.render();
                        });
                    }

                    var refreshCount = 1;
                    function refreshAds(selectors) {
                        if (window.ic_page) {
                            document.querySelectorAll(selectors).forEach(function (element) {
                                try {
                                    refreshAd(element, refreshCount);
                                } catch (e) {
                                    console.log('Ad refresh error for:', element, e);
                                }
                            });
                            refreshCount++;
                        }
                    }


                    InvestingChannelQueue.push(function() {
                        ic_page = InvestingChannel.UAT.Run('df0d0d52-cc7f-11e8-82a5-0abbb61c4a6a');
                    });

                    var hash = null;
                    if (typeof hash === 'string') {
                      InvestingChannelQueue.push(function() {
                          if (ic_page) {
                              ic_page.setUserId('email', hash, true);
                          }
                      });
                    }
                }
            </script>
          <script>
            function checkMediaQuery(matches) {
              if (matches) {
                FinvizSettings.hasUserStickyHeader = true;
                document.body.classList.add('is-header-sticky');
              } else {
                FinvizSettings.hasUserStickyHeader = false;
                document.body.classList.remove('is-header-sticky');
              }
            }
            var mediaMatch = window.matchMedia('(min-width: 1025px) and (min-height: 650px)');
            checkMediaQuery(mediaMatch.matches);
            mediaMatch.addListener(function (ev) { checkMediaQuery(ev.matches) });
          </script>
          <div id="notifications-container"></div>
                <table class="header">
                    <tbody><tr class="align-top">
                        <td>
                            <table class="header-container">
                                <tbody><tr>
                                    <td class="w-[30%]">
                                        <table class="w-full">
                                            <tbody><tr>
                                                <td class="h-[50px] align-middle">
                                                    <a href="/" class="logo">
                                                      <svg width="225" height="32" class="block">
                                                        <use href="/img/logo.svg#free" class="dark:hidden"></use>
                                                        <use href="/img/logo.svg#free-dark" class="hidden dark:block"></use>
                                                      </svg></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="search" id="search" style="padding-top: 4px"><div><form><input placeholder="Search ticker, company or profile" type="text" class="" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" value=""><span class="fa fa-search"></span></form><table class="suggestions-box" cellpadding="0" cellspacing="0" border="0" style="display: none;"><tbody></tbody></table></div></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                    <td class="align-bottom pb-1">
                                        <div id="microbar_position" class="hidden xl:flex items-center h-[37px] pl-2"><div><div id="IC_D_88x31_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:88px;height:31px;max-height:31px" data-fv-banner="true"></div></div></div>
                                    </td>
                                    <td class="relative w-[730px] text-right">
                                        <div id="banner_position" class="overflow-hidden absolute top-0 right-0 w-full h-24"><div id="IC_D_728x90_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:728px;height:90px;max-height:90px" data-fv-banner="true"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=explore-market-trends-2"><picture><source srcset="/img/a/explore-market-trends-2.webp 1x,/img/a/explore-market-trends-2@2x.webp 2x" type="image/webp"><img width="728" height="90" src="/img/a/explore-market-trends-2.png" srcset="/img/a/explore-market-trends-2.png 1x,/img/a/explore-market-trends-2@2x.png 2x"></picture></a></div></div>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td class="w-[994px]" style="font-size:0">
                            <img src="/gfx/nic2x2.gif" class="w-[994px] h-px" alt="">
                        </td>
                    </tr>
                </tbody></table>
            <table class="navbar">
                <tbody><tr>
                    <td class="h-[30px]">
                        <table class="header-container">
                            <tbody><tr><td><a class="nav-link  is-first" href="/">Home</a></td><td><a class="nav-link " href="/news.ashx">News</a></td><td><a class="nav-link is-active" href="/screener.ashx">Screener</a></td><td><a class="nav-link " href="/map.ashx">Maps</a></td><td><a class="nav-link " href="/groups.ashx">Groups</a></td><td><a class="nav-link " href="/portfolio.ashx">Portfolio</a></td><td><a class="nav-link " href="/insidertrading.ashx">Insider</a></td><td><a class="nav-link " href="/futures.ashx">Futures</a></td><td><a class="nav-link " href="/forex.ashx">Forex</a></td><td><a class="nav-link " href="/crypto.ashx">Crypto</a></td><td><a class="nav-link " href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=main-navbar-backtests">Backtests</a></td><td><a class="nav-link  is-elite" href="/elite.ashx">Elite</a></td><td class="w-full relative"><div class="absolute inset-0"><div id="time" class="pr-1"><div class="w-full text-[11px] text-white"><div class="flex items-center justify-end overflow-hidden whitespace-nowrap"><span>Mon JUL 03 2023 11:44 AM ET</span></div></div></div></div></td>
                    <td class="nav relative">
        <a data-testid="chart-layout-theme" href="#" class="!flex !bg-transparent !border-b-0 mt-1 !py-0 !px-1" style="border-left: 1px solid #444a57" title="Toggle Light/Dark mode" onclick="setChartThemeCookie('light', true)">
            <div class="relative box-content flex rounded-full w-10 h-5 border border-gray-750 bg-gray-800 text-white justify-end">
                <div class="box-border w-1/2 rounded-full p-px border border-gray-800 bg-[#4c5261] flex justify-center items-center">
                    <svg width="16" height="16" class="fill-current text-white inline-block -ml-px">
    <use href="/assets/icons.svg?rev=3#moonOutlined"></use>
</svg>
                </div>
            </div>
            <span class="ml-1 select-none font-medium text-xs text-white">Theme</span>
        </a>
    </td>

                <td>
                    <a href="/help/screener.ashx" class="nav-link is-help" style="border-left: 1px solid #444a57"><span class="fa fa-question-circle"></span>Help</a>
                </td>
                <td><a href="/login.ashx" class="nav-link sign-in">Login</a></td>
                <td><a href="/register.ashx" class="nav-link sign-up">Register</a></td>

                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>

          <script>
            function reloadPage () { location.reload() }
            function setChartThemeCookie(chartsTheme) {
              fetch('/api/set_cookie.ashx?cookie=chartsTheme&value=' + chartsTheme ).catch(function(){}).then(function(){
                window.gtag && window.gtag('event', 'click', { event_category: 'theme', event_label: 'toggle', value: chartsTheme, event_callback: reloadPage });
                setTimeout(reloadPage,1000);
              })
            }
          </script><div class="content "><table cellpadding="0" class="fv-container"><tbody><tr>
<td>
<div id="screener-react"></div>
<table id="filter-table-top" width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody><tr>
<td><img src="gfx/nic2x2.gif" style="width:6px;height:6px" alt="" border="0"></td>
<td align="center" width="15%">
<select id="screenerPresetsSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="ScreenerPresetsChange(value,&quot;v=111&amp;s=ta_topgainers&quot;)">
<option>My Presets</option>
<option value="__save_screen">-Save Screen</option>
<option value="__edit_screens">-Edit Screens</option>
</select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Order by] body=[<table width=300><tr><td class='tooltip_tab'>Select the criteria by which the output information will be sorted. The order settings apply to all views. Use the <b>ascending</b> and <b>descending</b> option to invert the current order.<br><br> TIP: In table views you can click on top of a column to sort the table by the underlying values.</td></tr></table>] delay=[500]">Order by</span></td>
<td align="left" width="20%" class="pl-1">
<select id="orderSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="window.location=document.getElementById(&quot;orderSelect&quot;).value">
<option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sigrow">Signal</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ticker">Ticker</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=company">Company</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sector">Sector</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=industry">Industry</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=country">Country</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=index">Index</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=marketcap">Market Cap.</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pe">Price/Earnings</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=forwardpe">Forward Price/Earnings</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=peg">PEG (Price/Earnings/Growth)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ps">Price/Sales</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pb">Price/Book</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pc">Price/Cash</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pfcf">Price/Free Cash Flow</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=dividendyield">Dividend Yield</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=payoutratio">Payout Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=eps">EPS (ttm)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsyoy">EPS growth this year</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsyoy1">EPS growth next year</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=eps5years">EPS growth past 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=estltgrowth">EPS growth next 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sales5years">Sales growth past 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsqoq">EPS growth qtr over qtr</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=salesqoq">Sales growth qtr over qtr</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sharesoutstanding2">Shares Outstanding</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sharesfloat">Shares Float</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=floatoutstandingpct">Float/Outstanding</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insiderown">Insider Ownership</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insidertrans">Insider Transactions</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=instown">Institutional Ownership</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insttrans">Institutional Transactions</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortinterestshare">Short Interest Share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortinterestratio">Short Interest Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortInterest">Short Interest</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=earningsdate">Earnings Date</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roa">Return on Assets</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roe">Return on Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roi">Return on Investment</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=curratio">Current Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=quickratio">Quick Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ltdebteq">LT Debt/Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=debteq">Total Debt/Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=grossmargin">Gross Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=opermargin">Operating Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=netmargin">Net Profit Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=recom">Analyst Recommendation</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf1w">Performance (Week)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf4w">Performance (Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf13w">Performance (Quarter)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf26w">Performance (Half Year)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf52w">Performance (Year)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perfytd">Performance (Year To Date)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=beta">Beta</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=averagetruerange">Average True Range</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volatility1w">Volatility (Week)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volatility4w">Volatility (Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma20">20-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma50">50-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma200">200-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=high50d">50-Day High (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=low50d">50-Day Low (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=high52w">52-Week High (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=low52w">52-Week Low (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=rsi">Relative Strength Index (14)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=averagevolume">Average Volume (3 Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=relativevolume">Relative Volume</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=change">Change</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=changeopen">Change from Open</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=gap">Gap</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volume">Volume</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=price">Price</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=targetprice">Target Price</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ipodate">IPO Date</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=book">Book value per share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=cashPerShare">Cash per share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=dividend">Dividend</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=employees">Employees</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=estQ1">EPS estimate next quarter</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=income">Income</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=prevClose">Previous Close</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sales">Sales</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=optionable">Optionable</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortable">Shortable</option></select>
</td>
<td align="left" width="6%" class="pl-1">
<select id="orderDirSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="window.location=document.getElementById(&quot;orderDirSelect&quot;).value">
<option selected="selected" value="screener.ashx?v=111&amp;s=ta_topgainers">Asc</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=-">Desc</option></select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Signal] body=[<table width=300><tr><td class='tooltip_tab'>You can screen the stocks by signal - an event, by which traders usually enter or exit positions.<br><br><b>Top Gainers: </b>Stocks with the highest price gain today.</td></tr></table>] delay=[500]">Signal</span></td>
<td align="left" width="15%" class="pl-1">
<select id="signalSelect" style="width: 100%; visibility: visible;" class="body-combo-text-h" onchange="window.location=document.getElementById(&quot;signalSelect&quot;).value">
<option value="screener.ashx?v=111">None (all stocks)</option><option selected="selected" value="screener.ashx?v=111&amp;s=ta_topgainers">Top Gainers</option><option value="screener.ashx?v=111&amp;s=ta_toplosers">Top Losers</option><option value="screener.ashx?v=111&amp;s=ta_newhigh">New High</option><option value="screener.ashx?v=111&amp;s=ta_newlow">New Low</option><option value="screener.ashx?v=111&amp;s=ta_mostvolatile">Most Volatile</option><option value="screener.ashx?v=111&amp;s=ta_mostactive">Most Active</option><option value="screener.ashx?v=111&amp;s=ta_unusualvolume">Unusual Volume</option><option value="screener.ashx?v=111&amp;s=ta_overbought">Overbought</option><option value="screener.ashx?v=111&amp;s=ta_oversold">Oversold</option><option value="screener.ashx?v=111&amp;s=n_downgrades">Downgrades</option><option value="screener.ashx?v=111&amp;s=n_upgrades">Upgrades</option><option value="screener.ashx?v=111&amp;s=n_earningsbefore">Earnings Before</option><option value="screener.ashx?v=111&amp;s=n_earningsafter">Earnings After</option><option value="screener.ashx?v=111&amp;s=it_latestbuys">Recent Insider Buying</option><option value="screener.ashx?v=111&amp;s=it_latestsales">Recent Insider Selling</option><option value="screener.ashx?v=111&amp;s=n_majornews">Major News</option><option value="screener.ashx?v=111&amp;s=ta_p_horizontal">Horizontal S/R</option><option value="screener.ashx?v=111&amp;s=ta_p_tlresistance">TL Resistance</option><option value="screener.ashx?v=111&amp;s=ta_p_tlsupport">TL Support</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgeup">Wedge Up</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgedown">Wedge Down</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgeresistance">Triangle Ascending</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgesupport">Triangle Descending</option><option value="screener.ashx?v=111&amp;s=ta_p_wedge">Wedge</option><option value="screener.ashx?v=111&amp;s=ta_p_channelup">Channel Up</option><option value="screener.ashx?v=111&amp;s=ta_p_channeldown">Channel Down</option><option value="screener.ashx?v=111&amp;s=ta_p_channel">Channel</option><option value="screener.ashx?v=111&amp;s=ta_p_doubletop">Double Top</option><option value="screener.ashx?v=111&amp;s=ta_p_doublebottom">Double Bottom</option><option value="screener.ashx?v=111&amp;s=ta_p_multipletop">Multiple Top</option><option value="screener.ashx?v=111&amp;s=ta_p_multiplebottom">Multiple Bottom</option><option value="screener.ashx?v=111&amp;s=ta_p_headandshoulders">Head &amp; Shoulders</option><option value="screener.ashx?v=111&amp;s=ta_p_headandshouldersinv">Head &amp; Shoulders Inverse</option></select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Tickers] body=[<table width=300><tr><td class='tooltip_tab'>To screen through a selected set of stocks, you can enter one or more tickers directly, such as 'MSFT,GOOG,AAPL'. The screening process will run only on the specified stocks. No input ticker(s) equals all stocks. The <b>open in screener</b> option in the <b>Search</b>, will copy the listed tickers to the screener's ticker box automatically.</td></tr></table>] offsetx=[-100] delay=[500]">Tickers</span></td>
<td align="left" width="24%" class="pl-1">
<table width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed;">
<tbody><tr>
<td align="left" width="100%">
<input id="tickersInput" class="body-combo-text" style="width:100%" value="" type="text" onkeypress="if(event.keyCode==13){window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;t=' + window.FLibs.getSanitizedTicker(document.getElementById('tickersInput').value, true)}">
</td>
</tr>
</tbody></table>
</td>
<td class="pl-1">
<button data-boxover="Submit tickers" class="screener-combo-button block w-6 h-6 align-middle" style="cursor:pointer" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;t=' +tickersInput.value">
    <svg width="16" height="16" class="-mx-1">
    <use href="/assets/icons.svg?rev=3#chevronRight"></use>
</svg>
</button></td>
<td align="left" valign="center" class="pl-2"><a href="screener.ashx?v=110&amp;s=ta_topgainers" class="screener-combo-button block is-open" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Filters] body=[<table width=300><tr><td class='tooltip_tab'>To optimize the screening by various stock-related criteria, you can use one or more <b>Filters</b>.</td></tr></table>] offsetx=[-305] delay=[500]">Filters <svg width="20" height="20" class="-mr-1">
    <use href="/assets/icons.svg?rev=3#caretUp"></use>
</svg></a></td>
<td width="1%"></td></tr>
</tbody></table>
</td>
</tr>
<tr><td colspan="30">
<table id="filter-table-tabs" width="100%" cellpadding="0" cellspacing="0" height="21" border="0">

                <tbody><tr class="screener-tabs-top-row">
                    <td width="50%" rowspan="2">
                        <img src="gfx/nic2x2.gif" alt="" border="0" style="width:6px;height:2px">
                        <b>0</b> Filters
                        <img src="gfx/nic2x2.gif" alt="" border="0" style="width:5px;height:2px">
                        <button class="screener-combo-button hide" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">Reset Filters</button>
                    </td>
                    <td height="10" colspan="9">
                        <img src="gfx/nic2x2.gif" alt=" border=" 0"="" style="display:block;width:10px;height:10px">
                    </td>
                    <td width="50%" rowspan="2">
                    </td>
                </tr>
            <tr class="screener-tabs-body-row">
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-selected" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">&nbsp;&nbsp; Descriptive &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=2'">&nbsp;&nbsp; Fundamental &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=3'">&nbsp;&nbsp; Technical &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=4'">&nbsp;&nbsp; All &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:6px;height:6px" alt="" border="0"></td>
</tr>
</tbody></table>
</td>
</tr>
<tr>
<td colspan="30" valign="middle" align="center" class="filters-border">
<div class="filter-table-filters-wrapper">
<form autocomplete="off">
<table id="filter-table-filters" width="100%" cellpadding="1" cellspacing="1" style="table-layout:fixed;">
<tbody><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Exchange] body=[<table width=300><tr><td class='tooltip_tab'>Stock Exchange at which a stock is listed.</td></tr></table>] delay=[500]">Exchange</span></td>
<td width="10%" "="">

                <div id="fsm_exch" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_exch" class="js-custom-modal-edit screener-input-text h" data-filter="exch" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="exch">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="exch">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_exch" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="exch" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=exch_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="amex">AMEX</option><option value="nasd">NASDAQ</option><option value="nyse">NYSE</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Index] body=[<table width=300><tr><td class='tooltip_tab'>A major index membership of a stock.</td></tr></table>] delay=[500]">Index</span></td>
<td width="10%" "="">

                <div id="fsm_idx" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_idx" class="js-custom-modal-edit screener-input-text h" data-filter="idx" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="idx">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="idx">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_idx" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="idx" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=idx_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="sp500">S&amp;P 500</option><option value="ndx">NASDAQ 100</option><option value="dji">DJIA</option><option value="rut">RUSSELL 2000</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Sector] body=[<table width=300><tr><td class='tooltip_tab'>The sector which a stock belongs to.</td></tr></table>] delay=[500]">Sector</span></td>
<td width="10%" "="">

                <div id="fsm_sec" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_sec" class="js-custom-modal-edit screener-input-text h" data-filter="sec" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="sec">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="sec">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_sec" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sec" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sec_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="basicmaterials">Basic Materials</option><option value="communicationservices">Communication Services</option><option value="consumercyclical">Consumer Cyclical</option><option value="consumerdefensive">Consumer Defensive</option><option value="energy">Energy</option><option value="financial">Financial</option><option value="healthcare">Healthcare</option><option value="industrials">Industrials</option><option value="realestate">Real Estate</option><option value="technology">Technology</option><option value="utilities">Utilities</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Industry] body=[<table width=300><tr><td class='tooltip_tab'>The industry which a stock belongs to.</td></tr></table>] delay=[500]">Industry</span></td>
<td width="10%" "="">

                <div id="fsm_ind" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_ind" class="js-custom-modal-edit screener-input-text h" data-filter="ind" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="ind">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="ind">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_ind" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="ind" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=ind_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="stocksonly">Stocks only (ex-Funds)</option><option value="exchangetradedfund">Exchange Traded Fund</option><option value="advertisingagencies">Advertising Agencies</option><option value="aerospacedefense">Aerospace &amp; Defense</option><option value="agriculturalinputs">Agricultural Inputs</option><option value="airlines">Airlines</option><option value="airportsairservices">Airports &amp; Air Services</option><option value="aluminum">Aluminum</option><option value="apparelmanufacturing">Apparel Manufacturing</option><option value="apparelretail">Apparel Retail</option><option value="assetmanagement">Asset Management</option><option value="automanufacturers">Auto Manufacturers</option><option value="autoparts">Auto Parts</option><option value="autotruckdealerships">Auto &amp; Truck Dealerships</option><option value="banksdiversified">Banks - Diversified</option><option value="banksregional">Banks - Regional</option><option value="beveragesbrewers">Beverages - Brewers</option><option value="beveragesnonalcoholic">Beverages - Non-Alcoholic</option><option value="beverageswineriesdistilleries">Beverages - Wineries &amp; Distilleries</option><option value="biotechnology">Biotechnology</option><option value="broadcasting">Broadcasting</option><option value="buildingmaterials">Building Materials</option><option value="buildingproductsequipment">Building Products &amp; Equipment</option><option value="businessequipmentsupplies">Business Equipment &amp; Supplies</option><option value="capitalmarkets">Capital Markets</option><option value="chemicals">Chemicals</option><option value="closedendfunddebt">Closed-End Fund - Debt</option><option value="closedendfundequity">Closed-End Fund - Equity</option><option value="closedendfundforeign">Closed-End Fund - Foreign</option><option value="cokingcoal">Coking Coal</option><option value="communicationequipment">Communication Equipment</option><option value="computerhardware">Computer Hardware</option><option value="confectioners">Confectioners</option><option value="conglomerates">Conglomerates</option><option value="consultingservices">Consulting Services</option><option value="consumerelectronics">Consumer Electronics</option><option value="copper">Copper</option><option value="creditservices">Credit Services</option><option value="departmentstores">Department Stores</option><option value="diagnosticsresearch">Diagnostics &amp; Research</option><option value="discountstores">Discount Stores</option><option value="drugmanufacturersgeneral">Drug Manufacturers - General</option><option value="drugmanufacturersspecialtygeneric">Drug Manufacturers - Specialty &amp; Generic</option><option value="educationtrainingservices">Education &amp; Training Services</option><option value="electricalequipmentparts">Electrical Equipment &amp; Parts</option><option value="electroniccomponents">Electronic Components</option><option value="electronicgamingmultimedia">Electronic Gaming &amp; Multimedia</option><option value="electronicscomputerdistribution">Electronics &amp; Computer Distribution</option><option value="engineeringconstruction">Engineering &amp; Construction</option><option value="entertainment">Entertainment</option><option value="exchangetradedfund">Exchange Traded Fund</option><option value="farmheavyconstructionmachinery">Farm &amp; Heavy Construction Machinery</option><option value="farmproducts">Farm Products</option><option value="financialconglomerates">Financial Conglomerates</option><option value="financialdatastockexchanges">Financial Data &amp; Stock Exchanges</option><option value="fooddistribution">Food Distribution</option><option value="footwearaccessories">Footwear &amp; Accessories</option><option value="furnishingsfixturesappliances">Furnishings, Fixtures &amp; Appliances</option><option value="gambling">Gambling</option><option value="gold">Gold</option><option value="grocerystores">Grocery Stores</option><option value="healthcareplans">Healthcare Plans</option><option value="healthinformationservices">Health Information Services</option><option value="homeimprovementretail">Home Improvement Retail</option><option value="householdpersonalproducts">Household &amp; Personal Products</option><option value="industrialdistribution">Industrial Distribution</option><option value="informationtechnologyservices">Information Technology Services</option><option value="infrastructureoperations">Infrastructure Operations</option><option value="insurancebrokers">Insurance Brokers</option><option value="insurancediversified">Insurance - Diversified</option><option value="insurancelife">Insurance - Life</option><option value="insurancepropertycasualty">Insurance - Property &amp; Casualty</option><option value="insurancereinsurance">Insurance - Reinsurance</option><option value="insurancespecialty">Insurance - Specialty</option><option value="integratedfreightlogistics">Integrated Freight &amp; Logistics</option><option value="internetcontentinformation">Internet Content &amp; Information</option><option value="internetretail">Internet Retail</option><option value="leisure">Leisure</option><option value="lodging">Lodging</option><option value="lumberwoodproduction">Lumber &amp; Wood Production</option><option value="luxurygoods">Luxury Goods</option><option value="marineshipping">Marine Shipping</option><option value="medicalcarefacilities">Medical Care Facilities</option><option value="medicaldevices">Medical Devices</option><option value="medicaldistribution">Medical Distribution</option><option value="medicalinstrumentssupplies">Medical Instruments &amp; Supplies</option><option value="metalfabrication">Metal Fabrication</option><option value="mortgagefinance">Mortgage Finance</option><option value="oilgasdrilling">Oil &amp; Gas Drilling</option><option value="oilgasep">Oil &amp; Gas E&amp;P</option><option value="oilgasequipmentservices">Oil &amp; Gas Equipment &amp; Services</option><option value="oilgasintegrated">Oil &amp; Gas Integrated</option><option value="oilgasmidstream">Oil &amp; Gas Midstream</option><option value="oilgasrefiningmarketing">Oil &amp; Gas Refining &amp; Marketing</option><option value="otherindustrialmetalsmining">Other Industrial Metals &amp; Mining</option><option value="otherpreciousmetalsmining">Other Precious Metals &amp; Mining</option><option value="packagedfoods">Packaged Foods</option><option value="packagingcontainers">Packaging &amp; Containers</option><option value="paperpaperproducts">Paper &amp; Paper Products</option><option value="personalservices">Personal Services</option><option value="pharmaceuticalretailers">Pharmaceutical Retailers</option><option value="pollutiontreatmentcontrols">Pollution &amp; Treatment Controls</option><option value="publishing">Publishing</option><option value="railroads">Railroads</option><option value="realestatedevelopment">Real Estate - Development</option><option value="realestatediversified">Real Estate - Diversified</option><option value="realestateservices">Real Estate Services</option><option value="recreationalvehicles">Recreational Vehicles</option><option value="reitdiversified">REIT - Diversified</option><option value="reithealthcarefacilities">REIT - Healthcare Facilities</option><option value="reithotelmotel">REIT - Hotel &amp; Motel</option><option value="reitindustrial">REIT - Industrial</option><option value="reitmortgage">REIT - Mortgage</option><option value="reitoffice">REIT - Office</option><option value="reitresidential">REIT - Residential</option><option value="reitretail">REIT - Retail</option><option value="reitspecialty">REIT - Specialty</option><option value="rentalleasingservices">Rental &amp; Leasing Services</option><option value="residentialconstruction">Residential Construction</option><option value="resortscasinos">Resorts &amp; Casinos</option><option value="restaurants">Restaurants</option><option value="scientifictechnicalinstruments">Scientific &amp; Technical Instruments</option><option value="securityprotectionservices">Security &amp; Protection Services</option><option value="semiconductorequipmentmaterials">Semiconductor Equipment &amp; Materials</option><option value="semiconductors">Semiconductors</option><option value="shellcompanies">Shell Companies</option><option value="silver">Silver</option><option value="softwareapplication">Software - Application</option><option value="softwareinfrastructure">Software - Infrastructure</option><option value="solar">Solar</option><option value="specialtybusinessservices">Specialty Business Services</option><option value="specialtychemicals">Specialty Chemicals</option><option value="specialtyindustrialmachinery">Specialty Industrial Machinery</option><option value="specialtyretail">Specialty Retail</option><option value="staffingemploymentservices">Staffing &amp; Employment Services</option><option value="steel">Steel</option><option value="telecomservices">Telecom Services</option><option value="textilemanufacturing">Textile Manufacturing</option><option value="thermalcoal">Thermal Coal</option><option value="tobacco">Tobacco</option><option value="toolsaccessories">Tools &amp; Accessories</option><option value="travelservices">Travel Services</option><option value="trucking">Trucking</option><option value="uranium">Uranium</option><option value="utilitiesdiversified">Utilities - Diversified</option><option value="utilitiesindependentpowerproducers">Utilities - Independent Power Producers</option><option value="utilitiesregulatedelectric">Utilities - Regulated Electric</option><option value="utilitiesregulatedgas">Utilities - Regulated Gas</option><option value="utilitiesregulatedwater">Utilities - Regulated Water</option><option value="utilitiesrenewable">Utilities - Renewable</option><option value="wastemanagement">Waste Management</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Country] body=[<table width=300><tr><td class='tooltip_tab'>The country where company of selected stock is based.</td></tr></table>] offsetx=[-305] delay=[500]">Country</span></td>
<td width="10%" "="">

                <div id="fsm_geo" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_geo" class="js-custom-modal-edit screener-input-text h" data-filter="geo" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="geo">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="geo">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_geo" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="geo" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=geo_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="usa">USA</option><option value="notusa">Foreign (ex-USA)</option><option value="asia">Asia</option><option value="europe">Europe</option><option value="latinamerica">Latin America</option><option value="bric">BRIC</option><option value="argentina">Argentina</option><option value="australia">Australia</option><option value="bahamas">Bahamas</option><option value="belgium">Belgium</option><option value="benelux">BeNeLux</option><option value="bermuda">Bermuda</option><option value="brazil">Brazil</option><option value="canada">Canada</option><option value="caymanislands">Cayman Islands</option><option value="chile">Chile</option><option value="china">China</option><option value="chinahongkong">China &amp; Hong Kong</option><option value="colombia">Colombia</option><option value="cyprus">Cyprus</option><option value="denmark">Denmark</option><option value="finland">Finland</option><option value="france">France</option><option value="germany">Germany</option><option value="greece">Greece</option><option value="hongkong">Hong Kong</option><option value="hungary">Hungary</option><option value="iceland">Iceland</option><option value="india">India</option><option value="indonesia">Indonesia</option><option value="ireland">Ireland</option><option value="israel">Israel</option><option value="italy">Italy</option><option value="japan">Japan</option><option value="kazakhstan">Kazakhstan</option><option value="luxembourg">Luxembourg</option><option value="malaysia">Malaysia</option><option value="malta">Malta</option><option value="mexico">Mexico</option><option value="monaco">Monaco</option><option value="netherlands">Netherlands</option><option value="newzealand">New Zealand</option><option value="norway">Norway</option><option value="panama">Panama</option><option value="peru">Peru</option><option value="philippines">Philippines</option><option value="portugal">Portugal</option><option value="russia">Russia</option><option value="singapore">Singapore</option><option value="southafrica">South Africa</option><option value="southkorea">South Korea</option><option value="spain">Spain</option><option value="sweden">Sweden</option><option value="switzerland">Switzerland</option><option value="taiwan">Taiwan</option><option value="turkey">Turkey</option><option value="unitedarabemirates">United Arab Emirates</option><option value="unitedkingdom">United Kingdom</option><option value="uruguay">Uruguay</option><option value="modal">Custom (Elite only)</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Market Capitalization] body=[<table width=300><tr><td class='tooltip_tab'>Equals The total dollar market value of all of a company's outstanding shares.</td></tr></table>] delay=[500]">Market Cap.</span></td>
<td width="10%" "="">
<select id="fs_cap" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="cap" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=cap_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="mega">Mega ($200bln and more)</option><option value="large">Large ($10bln to $200bln)</option><option value="mid">Mid ($2bln to $10bln)</option><option value="small">Small ($300mln to $2bln)</option><option value="micro">Micro ($50mln to $300mln)</option><option value="nano">Nano (under $50mln)</option><option value="largeover">+Large (over $10bln)</option><option value="midover">+Mid (over $2bln)</option><option value="smallover">+Small (over $300mln)</option><option value="microover">+Micro (over $50mln)</option><option value="largeunder">-Large (under $200bln)</option><option value="midunder">-Mid (under $10bln)</option><option value="smallunder">-Small (under $2bln)</option><option value="microunder">-Micro (under $300mln)</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Dividend Yield] body=[<table width=300><tr><td class='tooltip_tab'>The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends.</td></tr></table>] delay=[500]">Dividend Yield</span></td>
<td width="10%" "="">
<select id="fs_fa_div" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="fa_div" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=fa_div_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="none">None (0%)</option><option value="pos">Positive (&gt;0%)</option><option value="high">High (&gt;5%)</option><option value="veryhigh">Very High (&gt;10%)</option><option value="o1">Over 1%</option><option value="o2">Over 2%</option><option value="o3">Over 3%</option><option value="o4">Over 4%</option><option value="o5">Over 5%</option><option value="o6">Over 6%</option><option value="o7">Over 7%</option><option value="o8">Over 8%</option><option value="o9">Over 9%</option><option value="o10">Over 10%</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Short Selling] body=[<table width=300><tr><td class='tooltip_tab'>The amount of short-selling transactions of given stock.</td></tr></table>] delay=[500]">Float Short</span></td>
<td width="10%" "="">
<select id="fs_sh_short" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_short" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_short_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="low">Low (&lt;5%)</option><option value="high">High (&gt;20%)</option><option value="u5">Under 5%</option><option value="u10">Under 10%</option><option value="u15">Under 15%</option><option value="u20">Under 20%</option><option value="u25">Under 25%</option><option value="u30">Under 30%</option><option value="o5">Over 5%</option><option value="o10">Over 10%</option><option value="o15">Over 15%</option><option value="o20">Over 20%</option><option value="o25">Over 25%</option><option value="o30">Over 30%</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Analyst Recommendation] body=[<table width=300><tr><td class='tooltip_tab'>An outlook of a stock-market analyst on a stock.</td></tr></table>] delay=[500]">Analyst Recom.</span></td>
<td width="10%" "="">

                <div id="fsm_an_recom" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_an_recom" class="js-custom-modal-edit screener-input-text h" data-filter="an_recom" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="an_recom">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="an_recom">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_an_recom" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="an_recom" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=an_recom_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="strongbuy">Strong Buy (1)</option><option value="buybetter">Buy or better</option><option value="buy">Buy</option><option value="holdbetter">Hold or better</option><option value="hold">Hold</option><option value="holdworse">Hold or worse</option><option value="sell">Sell</option><option value="sellworse">Sell or worse</option><option value="strongsell">Strong Sell (5)</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Optionable/Shortable] body=[<table width=300><tr><td class='tooltip_tab'>Stocks with options and/or available to sell short.</td></tr></table>] delay=[500]">Option/Short</span></td>
<td width="10%" "="">
<select id="fs_sh_opt" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_opt" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_opt_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="option">Optionable</option><option value="short">Shortable</option><option value="optionshort">Optionable and shortable</option><option value="optionnotshort">Optionable and not shortable</option><option value="notoptionshort">Not optionable and shortable</option><option value="notoptionnotshort">Not optionable and not shortable</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Earnings Date] body=[<table width=300><tr><td class='tooltip_tab'>Date when company reports earnings</td></tr></table>] delay=[500]">Earnings Date</span></td>
<td width="10%" "="">

                <div id="fsm_earningsdate" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_earningsdate" class="js-custom-modal-edit screener-input-text h" data-filter="earningsdate" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="earningsdate">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="earningsdate">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_earningsdate" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="earningsdate" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=earningsdate_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="today">Today</option><option value="todaybefore">Today Before Market Open</option><option value="todayafter">Today After Market Close</option><option value="tomorrow">Tomorrow</option><option value="tomorrowbefore">Tomorrow Before Market Open</option><option value="tomorrowafter">Tomorrow After Market Close</option><option value="yesterday">Yesterday</option><option value="yesterdaybefore">Yesterday Before Market Open</option><option value="yesterdayafter">Yesterday After Market Close</option><option value="nextdays5">Next 5 Days</option><option value="prevdays5">Previous 5 Days</option><option value="thisweek">This Week</option><option value="nextweek">Next Week</option><option value="prevweek">Previous Week</option><option value="thismonth">This Month</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Average Volume] body=[<table width=300><tr><td class='tooltip_tab'>The average number of shares traded in a security per day.</td></tr></table>] offsetx=[-305] delay=[500]">Average Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_avgvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_avgvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_avgvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u50">Under 50K</option><option value="u100">Under 100K</option><option value="u500">Under 500K</option><option value="u750">Under 750K</option><option value="u1000">Under 1M</option><option value="o50">Over 50K</option><option value="o100">Over 100K</option><option value="o200">Over 200K</option><option value="o300">Over 300K</option><option value="o400">Over 400K</option><option value="o500">Over 500K</option><option value="o750">Over 750K</option><option value="o1000">Over 1M</option><option value="o2000">Over 2M</option><option value="100to500">100K to 500K</option><option value="100to1000">100K to 1M</option><option value="500to1000">500K to 1M</option><option value="500to10000">500K to 10M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Relative Volume] body=[<table width=300><tr><td class='tooltip_tab'>Ratio between current volume and 3-month average, intraday adjusted.</td></tr></table>] offsetx=[-305] delay=[500]">Relative Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_relvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_relvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_relvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="o10">Over 10</option><option value="o5">Over 5</option><option value="o3">Over 3</option><option value="o2">Over 2</option><option value="o1.5">Over 1.5</option><option value="o1">Over 1</option><option value="o0.75">Over 0.75</option><option value="o0.5">Over 0.5</option><option value="o0.25">Over 0.25</option><option value="u2">Under 2</option><option value="u1.5">Under 1.5</option><option value="u1">Under 1</option><option value="u0.75">Under 0.75</option><option value="u0.5">Under 0.5</option><option value="u0.25">Under 0.25</option><option value="u0.1">Under 0.1</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Current Volume] body=[<table width=300><tr><td class='tooltip_tab'>Number of shares traded today.</td></tr></table>] offsetx=[-305] delay=[500]">Current Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_curvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_curvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_curvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u50">Under 50K</option><option value="u100">Under 100K</option><option value="u500">Under 500K</option><option value="u750">Under 750K</option><option value="u1000">Under 1M</option><option value="o0">Over 0</option><option value="o50">Over 50K</option><option value="o100">Over 100K</option><option value="o200">Over 200K</option><option value="o300">Over 300K</option><option value="o400">Over 400K</option><option value="o500">Over 500K</option><option value="o750">Over 750K</option><option value="o1000">Over 1M</option><option value="o2000">Over 2M</option><option value="o5000">Over 5M</option><option value="o10000">Over 10M</option><option value="o20000">Over 20M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Price] body=[<table width=300><tr><td class='tooltip_tab'>The current stock price.</td></tr></table>] delay=[500]">Price</span></td>
<td width="10%" "="">
<select id="fs_sh_price" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_price" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_price_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under $1</option><option value="u2">Under $2</option><option value="u3">Under $3</option><option value="u4">Under $4</option><option value="u5">Under $5</option><option value="u7">Under $7</option><option value="u10">Under $10</option><option value="u15">Under $15</option><option value="u20">Under $20</option><option value="u30">Under $30</option><option value="u40">Under $40</option><option value="u50">Under $50</option><option value="o1">Over $1</option><option value="o2">Over $2</option><option value="o3">Over $3</option><option value="o4">Over $4</option><option value="o5">Over $5</option><option value="o7">Over $7</option><option value="o10">Over $10</option><option value="o15">Over $15</option><option value="o20">Over $20</option><option value="o30">Over $30</option><option value="o40">Over $40</option><option value="o50">Over $50</option><option value="o60">Over $60</option><option value="o70">Over $70</option><option value="o80">Over $80</option><option value="o90">Over $90</option><option value="o100">Over $100</option><option value="1to5">$1 to $5</option><option value="1to10">$1 to $10</option><option value="1to20">$1 to $20</option><option value="5to10">$5 to $10</option><option value="5to20">$5 to $20</option><option value="5to50">$5 to $50</option><option value="10to20">$10 to $20</option><option value="10to50">$10 to $50</option><option value="20to50">$20 to $50</option><option value="50to100">$50 to $100</option><option value="frange">Custom (Elite only)</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Target Price] body=[<table width=300><tr><td class='tooltip_tab'>Analysts' mean target price.</td></tr></table>] delay=[500]">Target Price</span></td>
<td width="10%" "="">
<select id="fs_targetprice" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="targetprice" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=targetprice_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="a50">50% Above Price</option><option value="a40">40% Above Price</option><option value="a30">30% Above Price</option><option value="a20">20% Above Price</option><option value="a10">10% Above Price</option><option value="a5">5% Above Price</option><option value="above">Above Price</option><option value="below">Below Price</option><option value="b5">5% Below Price</option><option value="b10">10% Below Price</option><option value="b20">20% Below Price</option><option value="b30">30% Below Price</option><option value="b40">40% Below Price</option><option value="b50">50% Below Price</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[IPO Date] body=[<table width=300><tr><td class='tooltip_tab'>Date when company had an IPO.</td></tr></table>] delay=[500]">IPO Date</span></td>
<td width="10%" "="">
<select id="fs_ipodate" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="ipodate" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=ipodate_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="today">Today</option><option value="yesterday">Yesterday</option><option value="prevweek">In the last week</option><option value="prevmonth">In the last month</option><option value="prevquarter">In the last quarter</option><option value="prevyear">In the last year</option><option value="prev2yrs">In the last 2 years</option><option value="prev3yrs">In the last 3 years</option><option value="prev5yrs">In the last 5 years</option><option value="more1">More than a year ago</option><option value="more5">More than 5 years ago</option><option value="more10">More than 10 years ago</option><option value="more15">More than 15 years ago</option><option value="more20">More than 20 years ago</option><option value="more25">More than 25 years ago</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Shares Outstanding] body=[<table width=300><tr><td class='tooltip_tab'>Shares outstanding represent the total number of shares issued by a corporation and held by its shareholders.</td></tr></table>] delay=[500]">Shares Outstanding</span></td>
<td width="10%" "="">
<select id="fs_sh_outstanding" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_outstanding" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_outstanding_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under 1M</option><option value="u5">Under 5M</option><option value="u10">Under 10M</option><option value="u20">Under 20M</option><option value="u50">Under 50M</option><option value="u100">Under 100M</option><option value="o1">Over 1M</option><option value="o2">Over 2M</option><option value="o5">Over 5M</option><option value="o10">Over 10M</option><option value="o20">Over 20M</option><option value="o50">Over 50M</option><option value="o100">Over 100M</option><option value="o200">Over 200M</option><option value="o500">Over 500M</option><option value="o1000">Over 1000M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Float] body=[<table width=300><tr><td class='tooltip_tab'>Float is the number of stock shares that are available for trading to the public. This doesn't include shares held by insiders.</td></tr></table>] delay=[500]">Float</span></td>
<td width="10%" "="">
<select id="fs_sh_float" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_float" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_float_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under 1M</option><option value="u5">Under 5M</option><option value="u10">Under 10M</option><option value="u20">Under 20M</option><option value="u50">Under 50M</option><option value="u100">Under 100M</option><option value="o1">Over 1M</option><option value="o2">Over 2M</option><option value="o5">Over 5M</option><option value="o10">Over 10M</option><option value="o20">Over 20M</option><option value="o50">Over 50M</option><option value="o100">Over 100M</option><option value="o200">Over 200M</option><option value="o500">Over 500M</option><option value="o1000">Over 1000M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center"></td>
<td width="10%" align="center"></td>
</tr>
</tbody></table>
</form>
</div>
</td>
</tr>
<tr><td>
<div id="screener-content">
<table id="screener-views-table" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td width="100%">
<table width="100%" cellpadding="0" cellspacing="0" class="screener-view-table">
<tbody><tr>
<td width="6.6%" align="center" class="screener-view-button is-active" style="cursor:pointer;"><a href="screener.ashx?v=111&amp;s=ta_topgainers">Overview</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=121&amp;s=ta_topgainers">Valuation</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=161&amp;s=ta_topgainers">Financial</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=131&amp;s=ta_topgainers">Ownership</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=141&amp;s=ta_topgainers">Performance</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=171&amp;s=ta_topgainers">Technical</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=151&amp;s=ta_topgainers">Custom</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=211&amp;s=ta_topgainers">Charts</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=411&amp;s=ta_topgainers">Tickers</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=311&amp;s=ta_topgainers">Basic</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=351&amp;s=ta_topgainers">TA</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=321&amp;s=ta_topgainers">News</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=341&amp;s=ta_topgainers">Snapshot</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=711&amp;s=ta_topgainers">Maps</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=screener-menu-stats">Stats</a></td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td width="100%"><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:9px" alt="" border="0"></td></tr>
<tr>
<td width="100%">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody><tr>
<td width="128" align="left" valign="middle" class="count-text">#1 / 146 Total</td>
<td align="center" valign="middle" class="fullview-links px-2">
<a href="javascript:SavePortfolio(146,'v=111&amp;s=ta_topgainers')" class="tab-link">save as portfolio</a> |
<a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=screener-create-alert" class="tab-link">create alert</a>&nbsp;<img src="/gfx/nic2x2.gif" style="width:20px;height:2px" border="0">
<span style="white-space: nowrap"><span class="count-text"><b>Refresh:</b></span> <a href="/screener.ashx?v=111&amp;s=ta_topgainers&amp;ar=180" class="tab-link ">3min</a> | <a href="/screener.ashx?v=111&amp;s=ta_topgainers" class="tab-link active">off</a></span></td><td width="18" align="center"><span class="screener-combo-button align-middle is-arrow is-disabled"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowBackward"></use>
</svg></span></td>
<td width="10" valign="middle" class="count-text px-1">
<select id="pageSelect" class="pages-combo" onchange="url=&quot;screener.ashx?v=111&amp;s=ta_topgainers&amp;r=123456&quot;;row=&quot;r=&quot; + document.getElementById(&quot;pageSelect&quot;).value;url=url.replace(/r=123456/,row);window.location=url;" style="visibility: visible;">
<option selected="selected" value="1">Page 1 / 8</option><option value="21">Page 2 / 8</option><option value="41">Page 3 / 8</option><option value="61">Page 4 / 8</option><option value="81">Page 5 / 8</option><option value="101">Page 6 / 8</option><option value="121">Page 7 / 8</option><option value="141">Page 8 / 8</option></select>
</td>
<td width="18" align="center"><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="screener-combo-button align-middle is-arrow"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowForward"></use>
</svg></a></td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td width="100%" colspan="30"><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:9px" alt="" border="0"></td></tr>
<tr>
<td>
<table class="table-light is-new">
<tbody><tr align="center" valign="middle">
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">No.</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=-ticker'">Ticker</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=company'">Company</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sector'">Sector</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=industry'">Industry</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=country'">Country</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=marketcap'">Market Cap</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pe'">P/E</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=price'">Price</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=change'">Change</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volume'">Volume</td>
</tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=AHI&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Advanced Health Intelligence Ltd.</b>Software - Application <span>•</span> Australia <span>•</span> 30.41M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">AHI</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Advanced Health Intelligence Ltd.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Technology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Software - Application</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Australia</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">30.41M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=AHI&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Advanced Health Intelligence Ltd.</b>Software - Application <span>•</span> Australia <span>•</span> 30.41M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">5.95</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">55.35%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">10,986,208</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">2</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ENSC&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Ensysce Biosciences, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 3.04M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">ENSC</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Ensysce Biosciences, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">3.04M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ENSC&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Ensysce Biosciences, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 3.04M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">2.31</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">28.33%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">6,605,289</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">3</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=IREN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Iris Energy Limited</b>Capital Markets <span>•</span> Australia <span>•</span> 235.75M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">IREN</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Iris Energy Limited</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Financial</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Capital Markets</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Australia</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">235.75M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=IREN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Iris Energy Limited</b>Capital Markets <span>•</span> Australia <span>•</span> 235.75M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">5.67</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">21.67%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1,519,263</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">4</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=VTYX&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Ventyx Biosciences, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 1.95B</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">VTYX</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Ventyx Biosciences, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1.95B</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=VTYX&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Ventyx Biosciences, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 1.95B</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">39.81</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">21.37%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1,905,367</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">5</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BNED&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Barnes &amp; Noble Education, Inc.</b>Specialty Retail <span>•</span> USA <span>•</span> 61.98M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">BNED</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Barnes &amp; Noble Education, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Consumer Cyclical</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Specialty Retail</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">61.98M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BNED&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Barnes &amp; Noble Education, Inc.</b>Specialty Retail <span>•</span> USA <span>•</span> 61.98M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">1.51</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">19.86%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">844,524</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">6</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTCM&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>BIT Mining Limited</b>Information Technology Services <span>•</span> USA <span>•</span> 28.03M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">BTCM</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">BIT Mining Limited</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Technology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Information Technology Services</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">28.03M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTCM&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>BIT Mining Limited</b>Information Technology Services <span>•</span> USA <span>•</span> 28.03M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">3.20</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">18.70%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">186,945</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">7</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=DERM&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Journey Medical Corporation</b>Drug Manufacturers - Specialty &amp; Generic <span>•</span> USA <span>•</span> 20.10M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">DERM</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Journey Medical Corporation</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Drug Manufacturers - Specialty &amp; Generic</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">20.10M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=DERM&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Journey Medical Corporation</b>Drug Manufacturers - Specialty &amp; Generic <span>•</span> USA <span>•</span> 20.10M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">1.87</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">17.75%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">413,431</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">8</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=GREE&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Greenidge Generation Holdings Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 17.94M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">GREE</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Greenidge Generation Holdings Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Financial</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Capital Markets</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">17.94M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=GREE&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Greenidge Generation Holdings Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 17.94M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">3.32</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">17.73%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">449,593</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">9</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=DLPN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Dolphin Entertainment, Inc.</b>Advertising Agencies <span>•</span> USA <span>•</span> 22.67M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">DLPN</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Dolphin Entertainment, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Communication Services</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Advertising Agencies</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">22.67M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=DLPN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Dolphin Entertainment, Inc.</b>Advertising Agencies <span>•</span> USA <span>•</span> 22.67M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">2.02</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">17.42%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">140,847</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">10</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=MICS&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>The Singing Machine Company, Inc.</b>Consumer Electronics <span>•</span> USA <span>•</span> 4.15M</div>] offsetx=[100] offsety=[0] delay=[0]"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">MICS</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">The Singing Machine Company, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Technology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Consumer Electronics</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">4.15M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=MICS&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>The Singing Machine Company, Inc.</b>Consumer Electronics <span>•</span> USA <span>•</span> 4.15M</div>] offsetx=[-324] offsety=[20] delay=[0]"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">1.56</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">17.29%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">190,581</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">11</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ABEO&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Abeona Therapeutics Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 81.69M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">ABEO</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Abeona Therapeutics Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">81.69M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ABEO&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Abeona Therapeutics Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 81.69M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">4.72</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">17.12%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">161,234</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">12</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=SDIG&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Stronghold Digital Mining, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 23.03M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">SDIG</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Stronghold Digital Mining, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Financial</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Capital Markets</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">23.03M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=SDIG&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Stronghold Digital Mining, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 23.03M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">4.88</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">16.84%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">241,322</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">13</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTAI&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>BioXcel Therapeutics, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 537.06M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">BTAI</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">BioXcel Therapeutics, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">537.06M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTAI&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>BioXcel Therapeutics, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 537.06M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">7.75</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">16.37%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">7,155,169</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">14</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=NTRB&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Nutriband Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 21.54M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">NTRB</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Nutriband Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">21.54M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=NTRB&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Nutriband Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 21.54M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">3.48</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">15.94%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">16,047</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">15</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=REKR&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Rekor Systems, Inc.</b>Software - Infrastructure <span>•</span> USA <span>•</span> 105.52M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">REKR</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Rekor Systems, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Technology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Software - Infrastructure</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">105.52M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=REKR&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Rekor Systems, Inc.</b>Software - Infrastructure <span>•</span> USA <span>•</span> 105.52M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">2.05</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">15.17%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">368,707</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">16</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=NLSP&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>NLS Pharmaceutics AG</b>Biotechnology <span>•</span> Switzerland <span>•</span> 37.54M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">NLSP</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">NLS Pharmaceutics AG</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Healthcare</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Biotechnology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Switzerland</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">37.54M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=NLSP&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>NLS Pharmaceutics AG</b>Biotechnology <span>•</span> Switzerland <span>•</span> 37.54M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">1.26</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">14.55%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1,684,160</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">17</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=CLSK&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>CleanSpark, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 480.05M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">CLSK</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">CleanSpark, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Financial</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Capital Markets</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">480.05M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=CLSK&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>CleanSpark, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 480.05M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">4.89</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">13.99%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">7,344,361</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">18</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=RIVN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Rivian Automotive, Inc.</b>Auto Manufacturers <span>•</span> USA <span>•</span> 14.31B</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">RIVN</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Rivian Automotive, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Consumer Cyclical</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Auto Manufacturers</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">14.31B</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=RIVN&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Rivian Automotive, Inc.</b>Auto Manufacturers <span>•</span> USA <span>•</span> 14.31B</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">18.92</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">13.58%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">54,152,470</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">19</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ACMR&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>ACM Research, Inc.</b>Semiconductor Equipment &amp; Materials <span>•</span> USA <span>•</span> 752.10M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">ACMR</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">ACM Research, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Technology</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Semiconductor Equipment &amp; Materials</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">752.10M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">16.35</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=ACMR&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>ACM Research, Inc.</b>Semiconductor Equipment &amp; Materials <span>•</span> USA <span>•</span> 752.10M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">14.78</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">12.99%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1,197,237</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">20</a></td><td height="10" align="left" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTBT&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Bit Digital, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 343.52M</div>] offsetx=[100] offsety=[-220] delay=[0]"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link-primary">BTBT</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Bit Digital, Inc.</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Financial</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">Capital Markets</a></td><td height="10" align="left" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">USA</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">343.52M</a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">-</a></td><td height="10" align="right" class="screener-body-table-nw" data-boxover="cssbody=[hoverchart] cssheader=[tabchrthdr] body=[<img src='https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=BTBT&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d' width='324' height='180' alt='' referrerPolicy='no-referrer-when-downgrade' loading='lazy'><div><b>Bit Digital, Inc.</b>Capital Markets <span>•</span> USA <span>•</span> 343.52M</div>] offsetx=[-324] offsety=[-230] delay=[0]"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">4.58</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link"><span class="is-green">12.79%</span></a></td><td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">4,586,710</a></td></tr></tbody></table>
</td>
</tr>
<tr>
<td>
<table width="100%" cellpadding="0" cellspacing="0" class="body-table" border="0">
<tbody><tr>
<td align="left" style="color:#888888"><b>Signal:</b> ta_topgainers</td><td align="right" style="color:#1E6DC0"><a href="elite.ashx" class="tab-link">export</a></td></tr>
</tbody></table>
</td>
</tr>
<tr><td><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:8px" alt="" border="0"></td></tr>
<tr>
<td width="100%" align="center" valign="top" class="body-table screener_pagination">
<a href="screener.ashx?v=111&amp;s=ta_topgainers" class="tab-link is-selected"><b>1</b></a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="screener-pages">2</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=41" class="screener-pages">3</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=61" class="screener-pages">4</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=81" class="screener-pages">5</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=101" class="screener-pages">6</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=121" class="screener-pages">7</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=141" class="screener-pages">8</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="tab-link is-next"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowForward"></use>
</svg></a>
</td>
</tr>
<tr><td><img src="gfx/nic2x2.gif" style="width:2px;height:10px" alt="" border="0"></td></tr>
</tbody></table>
<div id="IC_D_3x6_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:970px;height:315px;max-height:315px" data-fv-banner="true"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=real-time-quotes-3"><picture><source srcset="/img/a/real-time-quotes-3.webp 1x,/img/a/real-time-quotes-3@2x.webp 2x" type="image/webp"><img width="728" height="90" src="/img/a/real-time-quotes-3.png" srcset="/img/a/real-time-quotes-3.png 1x,/img/a/real-time-quotes-3@2x.png 2x"></picture></a></div></div>
</td></tr><!-- TS
AHI|5.95|10986208
ENSC|2.31|6605289
IREN|5.67|1519263
VTYX|39.81|1905367
BNED|1.51|844524
BTCM|3.20|186945
DERM|1.87|413431
GREE|3.32|449593
DLPN|2.02|140847
MICS|1.56|190581
ABEO|4.72|161234
SDIG|4.88|241322
BTAI|7.75|7155169
NTRB|3.48|16047
REKR|2.05|368707
NLSP|1.26|1684160
CLSK|4.89|7344361
RIVN|18.92|54152470
ACMR|14.78|1197237
BTBT|4.58|4586710
TE -->

            <script type="text/javascript">
                ScreenerRefreshInit(0);
            </script>
        </tbody></table></div>
            <div class="footer" style="margin-top: 20px;padding-bottom: 115px">
                <div class="footer_links">
                    <a class="tab-link" href="/affiliate.ashx">affiliate</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/advertise.ashx">advertise</a>

                    <span class="footer_dot"> • </span><a class="tab-link" href="#" onclick="setChartThemeCookie('light')">toggle light mode</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/contact.ashx">contact</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/privacy.ashx">privacy</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/help/screener.ashx">help</a>
                <br>
                <a class="tab-link" href="javascript:void(0)" onclick="window.__uspapi &amp;&amp; window.__uspapi('displayUspUi');">do not sell my data</a>
                <span class="footer_dot"> • </span>
                <a class="tab-link" href="javascript:void(0)" onclick="window.__tcfapi &amp;&amp; window.__tcfapi('displayConsentUi', 2, function() {})">privacy settings</a>

                </div>
                Quotes delayed 15 minutes for NASDAQ, and 20 minutes for NYSE and AMEX.
                <br>
                Copyright © 2007-2023 FINVIZ.com. All Rights Reserved.
            </div>
            <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-3261808-1"></script>
            <script>
              function getSystemTheme() {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  return 'Dark';
                }
                else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                  return 'Light';
                }
                return 'No Preference';
              }

              var systemTheme = getSystemTheme()

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('set', {'dimension1': 'NotLoggedIn'});
              gtag('set', {'dimension3': window.devicePixelRatio + ''});
              gtag('set', {'layoutTheme': 'dark'});
              gtag('set', {'systemTheme': systemTheme });
              gtag('set', {'bundle': 'modern' });

              gtag('config', 'UA-3261808-1', { sample_rate: 10 });
              gtag('config', 'G-ZT9VQEWD4N', {'dimension1': 'NotLoggedIn', 'dimension3': window.devicePixelRatio + '', 'layoutTheme': 'dark', 'systemTheme': systemTheme });

            </script>
        <div id="IC_D_1x1_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" data-fv-banner="true"></div><div id="modal-elite-ad" class="modal-elite-ad">
                            <div id="modal-elite-ad_content" class="modal-elite-ad_content">
			                    <button id="modal-elite-ad-close" type="button" class="modal-elite-ad_close">×</button>

                                <!--<div id="modal-elite-ad-content-0" style="display: none">
			                        <h2>Ever heard of Finviz*Elite?</h2>
                                    <p>
                                        Our premium service offers you real-time quotes, advanced visualizations, technical studies, and much more.<br>
                                        Become Elite and make informed financial decisions.
                                    </p>
                                    <a href="/elite.ashx?utm_source=finviz&utm_medium=banner&utm_campaign=modal-0" id="modal-elite-ad-btn-0" class="" target="_blank">Find out more</a>
                                </div>-->

                                <div id="modal-elite-ad-content-1" style="display: block">
			                        <h2>Upgrade your FINVIZ experience</h2>
                                    <p>
                                        Join thousands of traders who make more informed decisions with&nbsp;our&nbsp;premium features.
                                        Real-time quotes, advanced&nbsp;visualizations, backtesting, and much more.
                                    </p>
                                    <a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=modal-1" id="modal-elite-ad-btn-1" class="modal-elite_button" target="_blank">Learn more about FINVIZ*Elite</a>
                                </div>
                            </div>
                         </div><script src="/script/pv.js?rev=333" async=""></script><script defer="">window.renderScriptNotLoaded();</script>
<script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon="{&quot;rayId&quot;:&quot;7e103e01ede68720&quot;,&quot;token&quot;:&quot;e53f08f6c9e04bfd9760701085ec93b4&quot;,&quot;version&quot;:&quot;2023.4.0&quot;,&quot;si&quot;:100}" crossorigin="anonymous"></script>


<iframe name="__tcfapiLocator" style="display: none;"></iframe><div style="position: absolute; visibility: hidden; z-index: 10000; transform: translate3d(0px, 0px, 0px); left: 0px; top: 0px;"><div></div><div></div><div class="hoverchart" style="opacity: 1;"><img src="https://charts2-node.finviz.com/chart.ashx?cs=m&amp;t=VTYX&amp;tf=d&amp;s=linear&amp;ct=candle_stick&amp;tm=d" width="324" height="180" alt="" referrerpolicy="no-referrer-when-downgrade" loading="lazy"><div><b>Ventyx Biosciences, Inc.</b>Biotechnology <span>•</span> USA <span>•</span> 1.95B</div></div></div><iframe src="javascript:false;" frameborder="0" scrolling="no" style="visibility: hidden; opacity: 0; left: 0px; top: 0px; width: 342px; height: 246px; position: absolute; z-index: 10;"></iframe></body></html>`;

export const error = `<html lang="en" class="dark"><head>
<title>Top Gainers - Stock Screener - Overview </title>
<meta charset="UTF-8"><meta name="viewport" content="width=1024"><meta name="description" content="Stock screener for investors and traders, financial visualizations.">

            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-regular.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-700.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-900.woff2" as="font" crossorigin="">
            <link rel="preload" href="/fonts/inter-latin.woff2" as="font" crossorigin="">

            <script async="" type="text/javascript" src="https://cmp.quantcast.com/choice/c2W8esUZ6Q8oA/finviz.com/choice.js?tag_version=V2"></script><script>
                window.notificationsArray = [];
                window.renderScriptNotLoaded = function () {};
                window.handleScriptNotLoaded = function (element) {
                    window.notificationsArray.push(element);
                    window.sentryDisabled = true;
                    window.handleScriptNotLoaded = function () {};
                };
            </script>
        <link rel="stylesheet" href="/assets/dist/finviz.6b32d3c0.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="stylesheet" href="/assets/dist/main.28c8d53a.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="icon" type="image/png" href="/favicon_2x.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon.png" sizes="16x16">

          <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
          <script type="text/javascript" async="true">
          (function() {
            var host = 'finviz.com';
            var element = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            var url = 'https://cmp.quantcast.com'
              .concat('/choice/', 'c2W8esUZ6Q8oA', '/', host, '/choice.js?tag_version=V2');
            var uspTries = 0;
            var uspTriesLimit = 3;
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;

            firstScript.parentNode.insertBefore(element, firstScript);

            function makeStub() {
              var TCF_LOCATOR_NAME = '__tcfapiLocator';
              var queue = [];
              var win = window;
              var cmpFrame;

              function addFrame() {
                var doc = win.document;
                var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                if (!otherCMP) {
                  if (doc.body) {
                    var iframe = doc.createElement('iframe');

                    iframe.style.cssText = 'display:none';
                    iframe.name = TCF_LOCATOR_NAME;
                    doc.body.appendChild(iframe);
                  } else {
                    setTimeout(addFrame, 5);
                  }
                }
                return !otherCMP;
              }

              function tcfAPIHandler() {
                var gdprApplies;
                var args = arguments;

                if (!args.length) {
                  return queue;
                } else if (args[0] === 'setGdprApplies') {
                  if (
                    args.length > 3 &&
                    args[2] === 2 &&
                    typeof args[3] === 'boolean'
                  ) {
                    gdprApplies = args[3];
                    if (typeof args[2] === 'function') {
                      args[2]('set', true);
                    }
                  }
                } else if (args[0] === 'ping') {
                  var retr = {
                    gdprApplies: gdprApplies,
                    cmpLoaded: false,
                    cmpStatus: 'stub'
                  };

                  if (typeof args[2] === 'function') {
                    args[2](retr);
                  }
                } else {
                  if(args[0] === 'init' && typeof args[3] === 'object') {
                    args[3] = Object.assign(args[3], { tag_version: 'V2' });
                  }
                  queue.push(args);
                }
              }

              function postMessageEventHandler(event) {
                var msgIsString = typeof event.data === 'string';
                var json = {};

                try {
                  if (msgIsString) {
                    json = JSON.parse(event.data);
                  } else {
                    json = event.data;
                  }
                } catch (ignore) {}

                var payload = json.__tcfapiCall;

                if (payload) {
                  window.__tcfapi(
                    payload.command,
                    payload.version,
                    function(retValue, success) {
                      var returnMsg = {
                        __tcfapiReturn: {
                          returnValue: retValue,
                          success: success,
                          callId: payload.callId
                        }
                      };
                      if (msgIsString) {
                        returnMsg = JSON.stringify(returnMsg);
                      }
                      if (event && event.source && event.source.postMessage) {
                        event.source.postMessage(returnMsg, '*');
                      }
                    },
                    payload.parameter
                  );
                }
              }

              while (win) {
                try {
                  if (win.frames[TCF_LOCATOR_NAME]) {
                    cmpFrame = win;
                    break;
                  }
                } catch (ignore) {}

                if (win === window.top) {
                  break;
                }
                win = win.parent;
              }
              if (!cmpFrame) {
                addFrame();
                win.__tcfapi = tcfAPIHandler;
                win.addEventListener('message', postMessageEventHandler, false);
              }
            };

            makeStub();

            var uspStubFunction = function() {
              var arg = arguments;
              if (typeof window.__uspapi !== uspStubFunction) {
                setTimeout(function() {
                  if (typeof window.__uspapi !== 'undefined') {
                    window.__uspapi.apply(window.__uspapi, arg);
                  }
                }, 500);
              }
            };

            var checkIfUspIsReady = function() {
              uspTries++;
              if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                console.warn('USP is not accessible');
              } else {
                clearInterval(uspInterval);
              }
            };

            if (typeof window.__uspapi === 'undefined') {
              window.__uspapi = uspStubFunction;
              var uspInterval = setInterval(checkIfUspIsReady, 6000);
            }
          })();
          </script>
          <!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
        <script>
            FinvizSettings = {
                hasUserPremium: false,
                name: "",
                email: "",
                nodeChartsDomain: "https://charts2-node.finviz.com",
                hasUserRetinaNodeCharts: false,
                hasUserStickyHeader: true,
                adsProvider: 1,
                hasRedesignEnabled: true,
                hasForexFuturesCryptoNodeCharts: true,
            };
        </script><script src="/script/browser_check.js?rev=333"></script><script src="/script/vendor/boxover.js?rev=333"></script>
<script src="/assets/dist/runtime.89ea6735.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/148.e0c7a2d7.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/87.433d0f2a.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/libs_init.f516bc3b.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/372.0b206385.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist/header.2c02935d.js" onerror="window.handleScriptNotLoaded(this)"></script><script type="text/javascript">
            var portfolioRowsLimit=50;
            function ScreenerSelectOnChange() {}
        </script><script src="script/screener.js?rev=333" type="text/javascript" onerror="window.handleScriptNotLoaded(this)"></script>
<script src="script/screener_free.js?rev=333" type="text/javascript" onerror="window.handleScriptNotLoaded(this)"></script><link href="/assets/dist/redesign.6368ab98.css" rel="stylesheet" type="text/css"><script>
            const channelIdToLabel = {
                '1': 'MarketWatch',
                '2': 'WSJ',
                '3': 'Reuters',
                '4': 'Yahoo Finance',
                '5': 'CNN',
                '6': 'The New York Times',
                '7': 'Bloomberg',
                '9': 'BBC',
                '10': 'CNBC',
                '11': 'Fox Business',
                '102': 'Mish\'s Global Economic Trend Analysis',
                '105': 'Trader Feed',
                '113': 'Howard Lindzon',
                '114': 'Seeking Alpha',
                '123': 'Fallond Stock Picks',
                '132': 'Zero Hedge',
                '133': 'market folly',
                '136': 'Daily Reckoning',
                '141': 'Abnormal Returns',
                '142': 'Calculated Risk',
            }
            function trackAndOpenNews(event, channel, url) {
              event.preventDefault()
              window.open(url, '_blank')

              let channelLabel
              if (typeof channel === 'string') {
                channelLabel = channel
              } else {
                const label = channelIdToLabel[channel]
                channelLabel = label !== undefined ? label : channel
              }
              window.gtag && window.gtag('event', 'click', {
                send_to: 'G-ZT9VQEWD4N',
                non_interaction: true,
                event_category: 'news',
                event_label: channelLabel,
                value: 1 });
            }
          </script><script type="text/javascript" async="" src="https://u5.investingchannel.com/static/uat.js"></script><script type="text/javascript" async="" src="/script/finviz_b.js?rev=333"></script></head>


          <body class="m-0 yellow-tooltip is-screener">
            <script>
                var cookieName = 'fv_block';
                var selector = '[ic_placementid]';
                var selectorFrame = selector + ' iframe, ' + selector + ' [id*=aax]';
                var cookieExpiry = 5 * 60 * 1000; // 5min
                var checkTimeout = 20 * 1000; // 20sec

                function getCookie(value) {
                    var expiration = +new Date() + cookieExpiry;
                    return cookieName + '=' + value + '; expires=' + (new Date(expiration)).toUTCString() + '; path=/';
                }

                var finvizBannersLoaded = false;
                function loadFinvizBanners(setCookie) {
                    if (setCookie) document.cookie = getCookie('block');
                    finvizBannersLoaded = true;
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = '/script/finviz_b.js?rev=333';
                    document.head.appendChild(s);
                }

                function checkBannersLoaded() {
                    var checkEnd = +new Date() + checkTimeout;
                    function asyncCheckIfExists(selector, resolve) {
                        var now = +new Date();
                        var container = document.querySelector(selector);
                        if (!container && checkEnd > now) return setTimeout(function () { asyncCheckIfExists(selector, resolve) }, 1000)
                        resolve(!!container);
                    }

                    asyncCheckIfExists(selector, function (exists) {
                        if (!exists) return loadFinvizBanners(true);

                        asyncCheckIfExists(selectorFrame, function (hasIframe) {
                            if (!hasIframe) return loadFinvizBanners(true);
                        })
                    })
                }

                if (document.cookie.indexOf(cookieName) >= 0) {
                    loadFinvizBanners(false);
                } else {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.onerror = loadFinvizBanners;
                    s.onload = checkBannersLoaded;
                    s.src = 'https://u5.investingchannel.com/static/uat.js';
                    document.head.appendChild(s);

                    InvestingChannelQueue = window.InvestingChannelQueue || [];
                    var ic_page;

                    function refreshAd(container, refreshes) {
                        var placementTag, adslot;
                        window.InvestingChannelQueue.push(function () {
                            var pubTags = ic_page.getPubTag.call(ic_page, container.id);
                            if (!pubTags) return;
                            var pubTag = pubTags[0];
                            placementTag = pubTag.mPlacements[0].mTagToRender;
                            adslot = pubTag.mPlacements[0].mPublisherKval.adslot[0];
                            // Update div ID
                            var id = container.id.split('_');
                            var numberOfDivs = document.querySelectorAll('[id*=' + id.slice(0, id.length - 1).join('_') + ']').length;
                            var newDivNumber = Number(id.pop()) + numberOfDivs * refreshes;
                            container.setAttribute('id', id.join('_') + '_' + newDivNumber);
                            // Destroy previous pubtag & reset container html (loading span)
                            pubTag.destroy();
                            container.innerHTML = '';
                        });
                        window.InvestingChannelQueue.push(function () {
                            if (!placementTag || !adslot) return
                            // Create new pub tag
                            var newTag;
                            var layoutId = placementTag.mNativeLayout ? placementTag.mNativeLayout.nativelayoutid : null;
                            if (layoutId) {
                                newTag = ic_page.defineNativeTag('finviz/' + placementTag.mTarget.dfpkeyname, placementTag.mAdSize, container.id, layoutId);
                                var nativeLayout, layoutData

                                try {
                                  nativeLayout = newTag.mPlacements[0].mTags[0].mNativeLayout;
                                } catch (e) {
                                    console.log(e.message)
                                }

                                try {
                                  layoutData = newTag.mTemplate.mNativeLayout[layoutId].Data
                                  if (layoutData && nativeLayout && !nativeLayout.layout) {
                                    newTag.mPlacements[0].mTags[0].mNativeLayout = layoutData
                                  }
                                } catch (e) {
                                    console.log(e.message)
                                }
                            } else {
                                newTag = ic_page.defineTag('finviz/' + placementTag.mTarget.dfpkeyname, placementTag.mAdSize, container.id);
                            }
                            // Set adslot param
                            newTag.setKval({ adslot: adslot });
                            newTag.setKval({ kw: 'ajax' });
                            newTag.render();
                        });
                    }

                    var refreshCount = 1;
                    function refreshAds(selectors) {
                        if (window.ic_page) {
                            document.querySelectorAll(selectors).forEach(function (element) {
                                try {
                                    refreshAd(element, refreshCount);
                                } catch (e) {
                                    console.log('Ad refresh error for:', element, e);
                                }
                            });
                            refreshCount++;
                        }
                    }


                    InvestingChannelQueue.push(function() {
                        ic_page = InvestingChannel.UAT.Run('df0d0d52-cc7f-11e8-82a5-0abbb61c4a6a');
                    });

                    var hash = null;
                    if (typeof hash === 'string') {
                      InvestingChannelQueue.push(function() {
                          if (ic_page) {
                              ic_page.setUserId('email', hash, true);
                          }
                      });
                    }
                }
            </script>
          <script>
            function checkMediaQuery(matches) {
              if (matches) {
                FinvizSettings.hasUserStickyHeader = true;
                document.body.classList.add('is-header-sticky');
              } else {
                FinvizSettings.hasUserStickyHeader = false;
                document.body.classList.remove('is-header-sticky');
              }
            }
            var mediaMatch = window.matchMedia('(min-width: 1025px) and (min-height: 650px)');
            checkMediaQuery(mediaMatch.matches);
            mediaMatch.addListener(function (ev) { checkMediaQuery(ev.matches) });
          </script>
          <div id="notifications-container"></div>
                <table class="header">
                    <tbody><tr class="align-top">
                        <td>
                            <table class="header-container">
                                <tbody><tr>
                                    <td class="w-[30%]">
                                        <table class="w-full">
                                            <tbody><tr>
                                                <td class="h-[50px] align-middle">
                                                    <a href="/" class="logo">
                                                      <svg width="225" height="32" class="block">
                                                        <use href="/img/logo.svg#free" class="dark:hidden"></use>
                                                        <use href="/img/logo.svg#free-dark" class="hidden dark:block"></use>
                                                      </svg></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="search" id="search" style="padding-top: 4px"><div><form><input placeholder="Search ticker, company or profile" type="text" class="" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" value=""><span class="fa fa-search"></span></form><table class="suggestions-box" cellpadding="0" cellspacing="0" border="0" style="display: none;"><tbody></tbody></table></div></td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                    <td class="align-bottom pb-1">
                                        <div id="microbar_position" class="hidden xl:flex items-center h-[37px] pl-2"><div><div id="IC_D_88x31_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:88px;height:31px;max-height:31px" data-fv-banner="true"></div></div></div>
                                    </td>
                                    <td class="relative w-[730px] text-right">
                                        <div id="banner_position" class="overflow-hidden absolute top-0 right-0 w-full h-24"><div id="IC_D_728x90_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:728px;height:90px;max-height:90px" data-fv-banner="true"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=explore-market-trends-2"><picture><source srcset="/img/a/explore-market-trends-2.webp 1x,/img/a/explore-market-trends-2@2x.webp 2x" type="image/webp"><img width="728" height="90" src="/img/a/explore-market-trends-2.png" srcset="/img/a/explore-market-trends-2.png 1x,/img/a/explore-market-trends-2@2x.png 2x"></picture></a></div></div>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td class="w-[994px]" style="font-size:0">
                            <img src="/gfx/nic2x2.gif" class="w-[994px] h-px" alt="">
                        </td>
                    </tr>
                </tbody></table>
            <table class="navbar">
                <tbody><tr>
                    <td class="h-[30px]">
                        <table class="header-container">
                            <tbody><tr><td><a class="nav-link  is-first" href="/">Home</a></td><td><a class="nav-link " href="/news.ashx">News</a></td><td><a class="nav-link is-active" href="/screener.ashx">Screener</a></td><td><a class="nav-link " href="/map.ashx">Maps</a></td><td><a class="nav-link " href="/groups.ashx">Groups</a></td><td><a class="nav-link " href="/portfolio.ashx">Portfolio</a></td><td><a class="nav-link " href="/insidertrading.ashx">Insider</a></td><td><a class="nav-link " href="/futures.ashx">Futures</a></td><td><a class="nav-link " href="/forex.ashx">Forex</a></td><td><a class="nav-link " href="/crypto.ashx">Crypto</a></td><td><a class="nav-link " href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=main-navbar-backtests">Backtests</a></td><td><a class="nav-link  is-elite" href="/elite.ashx">Elite</a></td><td class="w-full relative"><div class="absolute inset-0"><div id="time" class="pr-1"><div class="w-full text-[11px] text-white"><div class="flex items-center justify-end overflow-hidden whitespace-nowrap"><span>Mon JUL 03 2023 11:54 AM ET</span></div></div></div></div></td>
                    <td class="nav relative">
        <a data-testid="chart-layout-theme" href="#" class="!flex !bg-transparent !border-b-0 mt-1 !py-0 !px-1" style="border-left: 1px solid #444a57" title="Toggle Light/Dark mode" onclick="setChartThemeCookie('light', true)">
            <div class="relative box-content flex rounded-full w-10 h-5 border border-gray-750 bg-gray-800 text-white justify-end">
                <div class="box-border w-1/2 rounded-full p-px border border-gray-800 bg-[#4c5261] flex justify-center items-center">
                    <svg width="16" height="16" class="fill-current text-white inline-block -ml-px">
    <use href="/assets/icons.svg?rev=3#moonOutlined"></use>
</svg>
                </div>
            </div>
            <span class="ml-1 select-none font-medium text-xs text-white">Theme</span>
        </a>
    </td>

                <td>
                    <a href="/help/screener.ashx" class="nav-link is-help" style="border-left: 1px solid #444a57"><span class="fa fa-question-circle"></span>Help</a>
                </td>
                <td><a href="/login.ashx" class="nav-link sign-in">Login</a></td>
                <td><a href="/register.ashx" class="nav-link sign-up">Register</a></td>

                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>

          <script>
            function reloadPage () { location.reload() }
            function setChartThemeCookie(chartsTheme) {
              fetch('/api/set_cookie.ashx?cookie=chartsTheme&value=' + chartsTheme ).catch(function(){}).then(function(){
                window.gtag && window.gtag('event', 'click', { event_category: 'theme', event_label: 'toggle', value: chartsTheme, event_callback: reloadPage });
                setTimeout(reloadPage,1000);
              })
            }
          </script><div class="content "><table cellpadding="0" class="fv-container"><tbody><tr>
<td>
<div id="screener-react"></div>
<table id="filter-table-top" width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody><tr>
<td><img src="gfx/nic2x2.gif" style="width:6px;height:6px" alt="" border="0"></td>
<td align="center" width="15%">
<select id="screenerPresetsSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="ScreenerPresetsChange(value,&quot;v=111&amp;s=ta_topgainers&quot;)">
<option>My Presets</option>
<option value="__save_screen">-Save Screen</option>
<option value="__edit_screens">-Edit Screens</option>
</select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Order by] body=[<table width=300><tr><td class='tooltip_tab'>Select the criteria by which the output information will be sorted. The order settings apply to all views. Use the <b>ascending</b> and <b>descending</b> option to invert the current order.<br><br> TIP: In table views you can click on top of a column to sort the table by the underlying values.</td></tr></table>] delay=[500]">Order by</span></td>
<td align="left" width="20%" class="pl-1">
<select id="orderSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="window.location=document.getElementById(&quot;orderSelect&quot;).value">
<option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sigrow">Signal</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ticker">Ticker</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=company">Company</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sector">Sector</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=industry">Industry</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=country">Country</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=index">Index</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=marketcap">Market Cap.</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pe">Price/Earnings</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=forwardpe">Forward Price/Earnings</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=peg">PEG (Price/Earnings/Growth)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ps">Price/Sales</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pb">Price/Book</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pc">Price/Cash</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pfcf">Price/Free Cash Flow</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=dividendyield">Dividend Yield</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=payoutratio">Payout Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=eps">EPS (ttm)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsyoy">EPS growth this year</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsyoy1">EPS growth next year</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=eps5years">EPS growth past 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=estltgrowth">EPS growth next 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sales5years">Sales growth past 5 years</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=epsqoq">EPS growth qtr over qtr</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=salesqoq">Sales growth qtr over qtr</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sharesoutstanding2">Shares Outstanding</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sharesfloat">Shares Float</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=floatoutstandingpct">Float/Outstanding</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insiderown">Insider Ownership</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insidertrans">Insider Transactions</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=instown">Institutional Ownership</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=insttrans">Institutional Transactions</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortinterestshare">Short Interest Share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortinterestratio">Short Interest Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortInterest">Short Interest</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=earningsdate">Earnings Date</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roa">Return on Assets</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roe">Return on Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=roi">Return on Investment</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=curratio">Current Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=quickratio">Quick Ratio</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ltdebteq">LT Debt/Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=debteq">Total Debt/Equity</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=grossmargin">Gross Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=opermargin">Operating Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=netmargin">Net Profit Margin</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=recom">Analyst Recommendation</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf1w">Performance (Week)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf4w">Performance (Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf13w">Performance (Quarter)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf26w">Performance (Half Year)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perf52w">Performance (Year)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=perfytd">Performance (Year To Date)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=beta">Beta</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=averagetruerange">Average True Range</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volatility1w">Volatility (Week)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volatility4w">Volatility (Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma20">20-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma50">50-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sma200">200-Day SMA (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=high50d">50-Day High (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=low50d">50-Day Low (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=high52w">52-Week High (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=low52w">52-Week Low (Relative)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=rsi">Relative Strength Index (14)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=averagevolume">Average Volume (3 Month)</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=relativevolume">Relative Volume</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=change">Change</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=changeopen">Change from Open</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=gap">Gap</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volume">Volume</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=price">Price</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=targetprice">Target Price</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=ipodate">IPO Date</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=book">Book value per share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=cashPerShare">Cash per share</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=dividend">Dividend</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=employees">Employees</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=estQ1">EPS estimate next quarter</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=income">Income</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=prevClose">Previous Close</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sales">Sales</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=optionable">Optionable</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=shortable">Shortable</option></select>
</td>
<td align="left" width="6%" class="pl-1">
<select id="orderDirSelect" style="width: 100%; visibility: visible;" class="body-combo-text" onchange="window.location=document.getElementById(&quot;orderDirSelect&quot;).value">
<option selected="selected" value="screener.ashx?v=111&amp;s=ta_topgainers">Asc</option><option value="screener.ashx?v=111&amp;s=ta_topgainers&amp;o=-">Desc</option></select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Signal] body=[<table width=300><tr><td class='tooltip_tab'>You can screen the stocks by signal - an event, by which traders usually enter or exit positions.<br><br><b>Top Gainers: </b>Stocks with the highest price gain today.</td></tr></table>] delay=[500]">Signal</span></td>
<td align="left" width="15%" class="pl-1">
<select id="signalSelect" style="width: 100%; visibility: visible;" class="body-combo-text-h" onchange="window.location=document.getElementById(&quot;signalSelect&quot;).value">
<option value="screener.ashx?v=111">None (all stocks)</option><option selected="selected" value="screener.ashx?v=111&amp;s=ta_topgainers">Top Gainers</option><option value="screener.ashx?v=111&amp;s=ta_toplosers">Top Losers</option><option value="screener.ashx?v=111&amp;s=ta_newhigh">New High</option><option value="screener.ashx?v=111&amp;s=ta_newlow">New Low</option><option value="screener.ashx?v=111&amp;s=ta_mostvolatile">Most Volatile</option><option value="screener.ashx?v=111&amp;s=ta_mostactive">Most Active</option><option value="screener.ashx?v=111&amp;s=ta_unusualvolume">Unusual Volume</option><option value="screener.ashx?v=111&amp;s=ta_overbought">Overbought</option><option value="screener.ashx?v=111&amp;s=ta_oversold">Oversold</option><option value="screener.ashx?v=111&amp;s=n_downgrades">Downgrades</option><option value="screener.ashx?v=111&amp;s=n_upgrades">Upgrades</option><option value="screener.ashx?v=111&amp;s=n_earningsbefore">Earnings Before</option><option value="screener.ashx?v=111&amp;s=n_earningsafter">Earnings After</option><option value="screener.ashx?v=111&amp;s=it_latestbuys">Recent Insider Buying</option><option value="screener.ashx?v=111&amp;s=it_latestsales">Recent Insider Selling</option><option value="screener.ashx?v=111&amp;s=n_majornews">Major News</option><option value="screener.ashx?v=111&amp;s=ta_p_horizontal">Horizontal S/R</option><option value="screener.ashx?v=111&amp;s=ta_p_tlresistance">TL Resistance</option><option value="screener.ashx?v=111&amp;s=ta_p_tlsupport">TL Support</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgeup">Wedge Up</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgedown">Wedge Down</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgeresistance">Triangle Ascending</option><option value="screener.ashx?v=111&amp;s=ta_p_wedgesupport">Triangle Descending</option><option value="screener.ashx?v=111&amp;s=ta_p_wedge">Wedge</option><option value="screener.ashx?v=111&amp;s=ta_p_channelup">Channel Up</option><option value="screener.ashx?v=111&amp;s=ta_p_channeldown">Channel Down</option><option value="screener.ashx?v=111&amp;s=ta_p_channel">Channel</option><option value="screener.ashx?v=111&amp;s=ta_p_doubletop">Double Top</option><option value="screener.ashx?v=111&amp;s=ta_p_doublebottom">Double Bottom</option><option value="screener.ashx?v=111&amp;s=ta_p_multipletop">Multiple Top</option><option value="screener.ashx?v=111&amp;s=ta_p_multiplebottom">Multiple Bottom</option><option value="screener.ashx?v=111&amp;s=ta_p_headandshoulders">Head &amp; Shoulders</option><option value="screener.ashx?v=111&amp;s=ta_p_headandshouldersinv">Head &amp; Shoulders Inverse</option></select>
</td>
<td align="right" width="6%">
<span class="body-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Tickers] body=[<table width=300><tr><td class='tooltip_tab'>To screen through a selected set of stocks, you can enter one or more tickers directly, such as 'MSFT,GOOG,AAPL'. The screening process will run only on the specified stocks. No input ticker(s) equals all stocks. The <b>open in screener</b> option in the <b>Search</b>, will copy the listed tickers to the screener's ticker box automatically.</td></tr></table>] offsetx=[-100] delay=[500]">Tickers</span></td>
<td align="left" width="24%" class="pl-1">
<table width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed;">
<tbody><tr>
<td align="left" width="100%">
<input id="tickersInput" class="body-combo-text" style="width:100%" value="" type="text" onkeypress="if(event.keyCode==13){window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;t=' + window.FLibs.getSanitizedTicker(document.getElementById('tickersInput').value, true)}">
</td>
</tr>
</tbody></table>
</td>
<td class="pl-1">
<button data-boxover="Submit tickers" class="screener-combo-button block w-6 h-6 align-middle" style="cursor:pointer" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;t=' +tickersInput.value">
    <svg width="16" height="16" class="-mx-1">
    <use href="/assets/icons.svg?rev=3#chevronRight"></use>
</svg>
</button></td>
<td align="left" valign="center" class="pl-2"><a href="screener.ashx?v=110&amp;s=ta_topgainers" class="screener-combo-button block is-open" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Filters] body=[<table width=300><tr><td class='tooltip_tab'>To optimize the screening by various stock-related criteria, you can use one or more <b>Filters</b>.</td></tr></table>] offsetx=[-305] delay=[500]">Filters <svg width="20" height="20" class="-mr-1">
    <use href="/assets/icons.svg?rev=3#caretUp"></use>
</svg></a></td>
<td width="1%"></td></tr>
</tbody></table>
</td>
</tr>
<tr><td colspan="30">
<table id="filter-table-tabs" width="100%" cellpadding="0" cellspacing="0" height="21" border="0">

                <tbody><tr class="screener-tabs-top-row">
                    <td width="50%" rowspan="2">
                        <img src="gfx/nic2x2.gif" alt="" border="0" style="width:6px;height:2px">
                        <b>0</b> Filters
                        <img src="gfx/nic2x2.gif" alt="" border="0" style="width:5px;height:2px">
                        <button class="screener-combo-button hide" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">Reset Filters</button>
                    </td>
                    <td height="10" colspan="9">
                        <img src="gfx/nic2x2.gif" alt=" border=" 0"="" style="display:block;width:10px;height:10px">
                    </td>
                    <td width="50%" rowspan="2">
                    </td>
                </tr>
            <tr class="screener-tabs-body-row">
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-selected" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">&nbsp;&nbsp; Descriptive &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=2'">&nbsp;&nbsp; Fundamental &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=3'">&nbsp;&nbsp; Technical &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:2px;height:2px" alt="" border="0"></td>
<td class="screener-tabs is-gray" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;ft=4'">&nbsp;&nbsp; All &nbsp;&nbsp;</td>
<td><img src="gfx/nic2x2.gif" style="width:6px;height:6px" alt="" border="0"></td>
</tr>
</tbody></table>
</td>
</tr>
<tr>
<td colspan="30" valign="middle" align="center" class="filters-border">
<div class="filter-table-filters-wrapper">
<form autocomplete="off">
<table id="filter-table-filters" width="100%" cellpadding="1" cellspacing="1" style="table-layout:fixed;">
<tbody><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Exchange] body=[<table width=300><tr><td class='tooltip_tab'>Stock Exchange at which a stock is listed.</td></tr></table>] delay=[500]">Exchange</span></td>
<td width="10%" "="">

                <div id="fsm_exch" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_exch" class="js-custom-modal-edit screener-input-text h" data-filter="exch" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="exch">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="exch">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_exch" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="exch" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=exch_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="amex">AMEX</option><option value="nasd">NASDAQ</option><option value="nyse">NYSE</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Index] body=[<table width=300><tr><td class='tooltip_tab'>A major index membership of a stock.</td></tr></table>] delay=[500]">Index</span></td>
<td width="10%" "="">

                <div id="fsm_idx" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_idx" class="js-custom-modal-edit screener-input-text h" data-filter="idx" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="idx">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="idx">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_idx" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="idx" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=idx_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="sp500">S&amp;P 500</option><option value="ndx">NASDAQ 100</option><option value="dji">DJIA</option><option value="rut">RUSSELL 2000</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Sector] body=[<table width=300><tr><td class='tooltip_tab'>The sector which a stock belongs to.</td></tr></table>] delay=[500]">Sector</span></td>
<td width="10%" "="">

                <div id="fsm_sec" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_sec" class="js-custom-modal-edit screener-input-text h" data-filter="sec" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="sec">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="sec">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_sec" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sec" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sec_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="basicmaterials">Basic Materials</option><option value="communicationservices">Communication Services</option><option value="consumercyclical">Consumer Cyclical</option><option value="consumerdefensive">Consumer Defensive</option><option value="energy">Energy</option><option value="financial">Financial</option><option value="healthcare">Healthcare</option><option value="industrials">Industrials</option><option value="realestate">Real Estate</option><option value="technology">Technology</option><option value="utilities">Utilities</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Industry] body=[<table width=300><tr><td class='tooltip_tab'>The industry which a stock belongs to.</td></tr></table>] delay=[500]">Industry</span></td>
<td width="10%" "="">

                <div id="fsm_ind" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_ind" class="js-custom-modal-edit screener-input-text h" data-filter="ind" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="ind">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="ind">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_ind" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="ind" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=ind_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="stocksonly">Stocks only (ex-Funds)</option><option value="exchangetradedfund">Exchange Traded Fund</option><option value="advertisingagencies">Advertising Agencies</option><option value="aerospacedefense">Aerospace &amp; Defense</option><option value="agriculturalinputs">Agricultural Inputs</option><option value="airlines">Airlines</option><option value="airportsairservices">Airports &amp; Air Services</option><option value="aluminum">Aluminum</option><option value="apparelmanufacturing">Apparel Manufacturing</option><option value="apparelretail">Apparel Retail</option><option value="assetmanagement">Asset Management</option><option value="automanufacturers">Auto Manufacturers</option><option value="autoparts">Auto Parts</option><option value="autotruckdealerships">Auto &amp; Truck Dealerships</option><option value="banksdiversified">Banks - Diversified</option><option value="banksregional">Banks - Regional</option><option value="beveragesbrewers">Beverages - Brewers</option><option value="beveragesnonalcoholic">Beverages - Non-Alcoholic</option><option value="beverageswineriesdistilleries">Beverages - Wineries &amp; Distilleries</option><option value="biotechnology">Biotechnology</option><option value="broadcasting">Broadcasting</option><option value="buildingmaterials">Building Materials</option><option value="buildingproductsequipment">Building Products &amp; Equipment</option><option value="businessequipmentsupplies">Business Equipment &amp; Supplies</option><option value="capitalmarkets">Capital Markets</option><option value="chemicals">Chemicals</option><option value="closedendfunddebt">Closed-End Fund - Debt</option><option value="closedendfundequity">Closed-End Fund - Equity</option><option value="closedendfundforeign">Closed-End Fund - Foreign</option><option value="cokingcoal">Coking Coal</option><option value="communicationequipment">Communication Equipment</option><option value="computerhardware">Computer Hardware</option><option value="confectioners">Confectioners</option><option value="conglomerates">Conglomerates</option><option value="consultingservices">Consulting Services</option><option value="consumerelectronics">Consumer Electronics</option><option value="copper">Copper</option><option value="creditservices">Credit Services</option><option value="departmentstores">Department Stores</option><option value="diagnosticsresearch">Diagnostics &amp; Research</option><option value="discountstores">Discount Stores</option><option value="drugmanufacturersgeneral">Drug Manufacturers - General</option><option value="drugmanufacturersspecialtygeneric">Drug Manufacturers - Specialty &amp; Generic</option><option value="educationtrainingservices">Education &amp; Training Services</option><option value="electricalequipmentparts">Electrical Equipment &amp; Parts</option><option value="electroniccomponents">Electronic Components</option><option value="electronicgamingmultimedia">Electronic Gaming &amp; Multimedia</option><option value="electronicscomputerdistribution">Electronics &amp; Computer Distribution</option><option value="engineeringconstruction">Engineering &amp; Construction</option><option value="entertainment">Entertainment</option><option value="exchangetradedfund">Exchange Traded Fund</option><option value="farmheavyconstructionmachinery">Farm &amp; Heavy Construction Machinery</option><option value="farmproducts">Farm Products</option><option value="financialconglomerates">Financial Conglomerates</option><option value="financialdatastockexchanges">Financial Data &amp; Stock Exchanges</option><option value="fooddistribution">Food Distribution</option><option value="footwearaccessories">Footwear &amp; Accessories</option><option value="furnishingsfixturesappliances">Furnishings, Fixtures &amp; Appliances</option><option value="gambling">Gambling</option><option value="gold">Gold</option><option value="grocerystores">Grocery Stores</option><option value="healthcareplans">Healthcare Plans</option><option value="healthinformationservices">Health Information Services</option><option value="homeimprovementretail">Home Improvement Retail</option><option value="householdpersonalproducts">Household &amp; Personal Products</option><option value="industrialdistribution">Industrial Distribution</option><option value="informationtechnologyservices">Information Technology Services</option><option value="infrastructureoperations">Infrastructure Operations</option><option value="insurancebrokers">Insurance Brokers</option><option value="insurancediversified">Insurance - Diversified</option><option value="insurancelife">Insurance - Life</option><option value="insurancepropertycasualty">Insurance - Property &amp; Casualty</option><option value="insurancereinsurance">Insurance - Reinsurance</option><option value="insurancespecialty">Insurance - Specialty</option><option value="integratedfreightlogistics">Integrated Freight &amp; Logistics</option><option value="internetcontentinformation">Internet Content &amp; Information</option><option value="internetretail">Internet Retail</option><option value="leisure">Leisure</option><option value="lodging">Lodging</option><option value="lumberwoodproduction">Lumber &amp; Wood Production</option><option value="luxurygoods">Luxury Goods</option><option value="marineshipping">Marine Shipping</option><option value="medicalcarefacilities">Medical Care Facilities</option><option value="medicaldevices">Medical Devices</option><option value="medicaldistribution">Medical Distribution</option><option value="medicalinstrumentssupplies">Medical Instruments &amp; Supplies</option><option value="metalfabrication">Metal Fabrication</option><option value="mortgagefinance">Mortgage Finance</option><option value="oilgasdrilling">Oil &amp; Gas Drilling</option><option value="oilgasep">Oil &amp; Gas E&amp;P</option><option value="oilgasequipmentservices">Oil &amp; Gas Equipment &amp; Services</option><option value="oilgasintegrated">Oil &amp; Gas Integrated</option><option value="oilgasmidstream">Oil &amp; Gas Midstream</option><option value="oilgasrefiningmarketing">Oil &amp; Gas Refining &amp; Marketing</option><option value="otherindustrialmetalsmining">Other Industrial Metals &amp; Mining</option><option value="otherpreciousmetalsmining">Other Precious Metals &amp; Mining</option><option value="packagedfoods">Packaged Foods</option><option value="packagingcontainers">Packaging &amp; Containers</option><option value="paperpaperproducts">Paper &amp; Paper Products</option><option value="personalservices">Personal Services</option><option value="pharmaceuticalretailers">Pharmaceutical Retailers</option><option value="pollutiontreatmentcontrols">Pollution &amp; Treatment Controls</option><option value="publishing">Publishing</option><option value="railroads">Railroads</option><option value="realestatedevelopment">Real Estate - Development</option><option value="realestatediversified">Real Estate - Diversified</option><option value="realestateservices">Real Estate Services</option><option value="recreationalvehicles">Recreational Vehicles</option><option value="reitdiversified">REIT - Diversified</option><option value="reithealthcarefacilities">REIT - Healthcare Facilities</option><option value="reithotelmotel">REIT - Hotel &amp; Motel</option><option value="reitindustrial">REIT - Industrial</option><option value="reitmortgage">REIT - Mortgage</option><option value="reitoffice">REIT - Office</option><option value="reitresidential">REIT - Residential</option><option value="reitretail">REIT - Retail</option><option value="reitspecialty">REIT - Specialty</option><option value="rentalleasingservices">Rental &amp; Leasing Services</option><option value="residentialconstruction">Residential Construction</option><option value="resortscasinos">Resorts &amp; Casinos</option><option value="restaurants">Restaurants</option><option value="scientifictechnicalinstruments">Scientific &amp; Technical Instruments</option><option value="securityprotectionservices">Security &amp; Protection Services</option><option value="semiconductorequipmentmaterials">Semiconductor Equipment &amp; Materials</option><option value="semiconductors">Semiconductors</option><option value="shellcompanies">Shell Companies</option><option value="silver">Silver</option><option value="softwareapplication">Software - Application</option><option value="softwareinfrastructure">Software - Infrastructure</option><option value="solar">Solar</option><option value="specialtybusinessservices">Specialty Business Services</option><option value="specialtychemicals">Specialty Chemicals</option><option value="specialtyindustrialmachinery">Specialty Industrial Machinery</option><option value="specialtyretail">Specialty Retail</option><option value="staffingemploymentservices">Staffing &amp; Employment Services</option><option value="steel">Steel</option><option value="telecomservices">Telecom Services</option><option value="textilemanufacturing">Textile Manufacturing</option><option value="thermalcoal">Thermal Coal</option><option value="tobacco">Tobacco</option><option value="toolsaccessories">Tools &amp; Accessories</option><option value="travelservices">Travel Services</option><option value="trucking">Trucking</option><option value="uranium">Uranium</option><option value="utilitiesdiversified">Utilities - Diversified</option><option value="utilitiesindependentpowerproducers">Utilities - Independent Power Producers</option><option value="utilitiesregulatedelectric">Utilities - Regulated Electric</option><option value="utilitiesregulatedgas">Utilities - Regulated Gas</option><option value="utilitiesregulatedwater">Utilities - Regulated Water</option><option value="utilitiesrenewable">Utilities - Renewable</option><option value="wastemanagement">Waste Management</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Country] body=[<table width=300><tr><td class='tooltip_tab'>The country where company of selected stock is based.</td></tr></table>] offsetx=[-305] delay=[500]">Country</span></td>
<td width="10%" "="">

                <div id="fsm_geo" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_geo" class="js-custom-modal-edit screener-input-text h" data-filter="geo" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="geo">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="geo">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_geo" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="geo" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=geo_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="usa">USA</option><option value="notusa">Foreign (ex-USA)</option><option value="asia">Asia</option><option value="europe">Europe</option><option value="latinamerica">Latin America</option><option value="bric">BRIC</option><option value="argentina">Argentina</option><option value="australia">Australia</option><option value="bahamas">Bahamas</option><option value="belgium">Belgium</option><option value="benelux">BeNeLux</option><option value="bermuda">Bermuda</option><option value="brazil">Brazil</option><option value="canada">Canada</option><option value="caymanislands">Cayman Islands</option><option value="chile">Chile</option><option value="china">China</option><option value="chinahongkong">China &amp; Hong Kong</option><option value="colombia">Colombia</option><option value="cyprus">Cyprus</option><option value="denmark">Denmark</option><option value="finland">Finland</option><option value="france">France</option><option value="germany">Germany</option><option value="greece">Greece</option><option value="hongkong">Hong Kong</option><option value="hungary">Hungary</option><option value="iceland">Iceland</option><option value="india">India</option><option value="indonesia">Indonesia</option><option value="ireland">Ireland</option><option value="israel">Israel</option><option value="italy">Italy</option><option value="japan">Japan</option><option value="kazakhstan">Kazakhstan</option><option value="luxembourg">Luxembourg</option><option value="malaysia">Malaysia</option><option value="malta">Malta</option><option value="mexico">Mexico</option><option value="monaco">Monaco</option><option value="netherlands">Netherlands</option><option value="newzealand">New Zealand</option><option value="norway">Norway</option><option value="panama">Panama</option><option value="peru">Peru</option><option value="philippines">Philippines</option><option value="portugal">Portugal</option><option value="russia">Russia</option><option value="singapore">Singapore</option><option value="southafrica">South Africa</option><option value="southkorea">South Korea</option><option value="spain">Spain</option><option value="sweden">Sweden</option><option value="switzerland">Switzerland</option><option value="taiwan">Taiwan</option><option value="turkey">Turkey</option><option value="unitedarabemirates">United Arab Emirates</option><option value="unitedkingdom">United Kingdom</option><option value="uruguay">Uruguay</option><option value="modal">Custom (Elite only)</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Market Capitalization] body=[<table width=300><tr><td class='tooltip_tab'>Equals The total dollar market value of all of a company's outstanding shares.</td></tr></table>] delay=[500]">Market Cap.</span></td>
<td width="10%" "="">
<select id="fs_cap" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="cap" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=cap_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="mega">Mega ($200bln and more)</option><option value="large">Large ($10bln to $200bln)</option><option value="mid">Mid ($2bln to $10bln)</option><option value="small">Small ($300mln to $2bln)</option><option value="micro">Micro ($50mln to $300mln)</option><option value="nano">Nano (under $50mln)</option><option value="largeover">+Large (over $10bln)</option><option value="midover">+Mid (over $2bln)</option><option value="smallover">+Small (over $300mln)</option><option value="microover">+Micro (over $50mln)</option><option value="largeunder">-Large (under $200bln)</option><option value="midunder">-Mid (under $10bln)</option><option value="smallunder">-Small (under $2bln)</option><option value="microunder">-Micro (under $300mln)</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Dividend Yield] body=[<table width=300><tr><td class='tooltip_tab'>The dividend yield equals the annual dividend per share divided by the stock’s price. This measurement tells what percentage return a company pays out to shareholders in the form of dividends.</td></tr></table>] delay=[500]">Dividend Yield</span></td>
<td width="10%" "="">
<select id="fs_fa_div" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="fa_div" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=fa_div_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="none">None (0%)</option><option value="pos">Positive (&gt;0%)</option><option value="high">High (&gt;5%)</option><option value="veryhigh">Very High (&gt;10%)</option><option value="o1">Over 1%</option><option value="o2">Over 2%</option><option value="o3">Over 3%</option><option value="o4">Over 4%</option><option value="o5">Over 5%</option><option value="o6">Over 6%</option><option value="o7">Over 7%</option><option value="o8">Over 8%</option><option value="o9">Over 9%</option><option value="o10">Over 10%</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Short Selling] body=[<table width=300><tr><td class='tooltip_tab'>The amount of short-selling transactions of given stock.</td></tr></table>] delay=[500]">Float Short</span></td>
<td width="10%" "="">
<select id="fs_sh_short" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_short" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_short_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="low">Low (&lt;5%)</option><option value="high">High (&gt;20%)</option><option value="u5">Under 5%</option><option value="u10">Under 10%</option><option value="u15">Under 15%</option><option value="u20">Under 20%</option><option value="u25">Under 25%</option><option value="u30">Under 30%</option><option value="o5">Over 5%</option><option value="o10">Over 10%</option><option value="o15">Over 15%</option><option value="o20">Over 20%</option><option value="o25">Over 25%</option><option value="o30">Over 30%</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Analyst Recommendation] body=[<table width=300><tr><td class='tooltip_tab'>An outlook of a stock-market analyst on a stock.</td></tr></table>] delay=[500]">Analyst Recom.</span></td>
<td width="10%" "="">

                <div id="fsm_an_recom" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_an_recom" class="js-custom-modal-edit screener-input-text h" data-filter="an_recom" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="an_recom">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="an_recom">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_an_recom" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="an_recom" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=an_recom_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="strongbuy">Strong Buy (1)</option><option value="buybetter">Buy or better</option><option value="buy">Buy</option><option value="holdbetter">Hold or better</option><option value="hold">Hold</option><option value="holdworse">Hold or worse</option><option value="sell">Sell</option><option value="sellworse">Sell or worse</option><option value="strongsell">Strong Sell (5)</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Optionable/Shortable] body=[<table width=300><tr><td class='tooltip_tab'>Stocks with options and/or available to sell short.</td></tr></table>] delay=[500]">Option/Short</span></td>
<td width="10%" "="">
<select id="fs_sh_opt" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_opt" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_opt_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="option">Optionable</option><option value="short">Shortable</option><option value="optionshort">Optionable and shortable</option><option value="optionnotshort">Optionable and not shortable</option><option value="notoptionshort">Not optionable and shortable</option><option value="notoptionnotshort">Not optionable and not shortable</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Earnings Date] body=[<table width=300><tr><td class='tooltip_tab'>Date when company reports earnings</td></tr></table>] delay=[500]">Earnings Date</span></td>
<td width="10%" "="">

                <div id="fsm_earningsdate" class="js-custom-modal" style="display: none">
                    <table class="custom-input-table" style="border-collapse: collapse; table-layout: fixed;" cellpadding="0">
                        <tbody><tr>
                            <td style="position: relative">
                                <input id="fsmi_earningsdate" class="js-custom-modal-edit screener-input-text h" data-filter="earningsdate" type="text" value="" style="width: 100%; padding-left: 2px; padding-right: 15px; cursor: pointer" readonly="">
                                <a href="#" class="edit-custom-modal-button js-custom-modal-edit absolute top-1/2 -mt-[8px] right-[6px]" data-filter="earningsdate">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#add"></use>
</svg>
                                </a>
                            </td>
                            <td width="13" style="padding-left: 3px">
                                <a href="#" class="js-custom-modal-hide screener-input-hide relative -top-px" data-filter="earningsdate">
                                    <svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#clear"></use>
</svg>
                                </a>
                            </td>
                        </tr>
                    </tbody></table>
                </div><select id="fs_earningsdate" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="earningsdate" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=earningsdate_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="today">Today</option><option value="todaybefore">Today Before Market Open</option><option value="todayafter">Today After Market Close</option><option value="tomorrow">Tomorrow</option><option value="tomorrowbefore">Tomorrow Before Market Open</option><option value="tomorrowafter">Tomorrow After Market Close</option><option value="yesterday">Yesterday</option><option value="yesterdaybefore">Yesterday Before Market Open</option><option value="yesterdayafter">Yesterday After Market Close</option><option value="nextdays5">Next 5 Days</option><option value="prevdays5">Previous 5 Days</option><option value="thisweek">This Week</option><option value="nextweek">Next Week</option><option value="prevweek">Previous Week</option><option value="thismonth">This Month</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Average Volume] body=[<table width=300><tr><td class='tooltip_tab'>The average number of shares traded in a security per day.</td></tr></table>] offsetx=[-305] delay=[500]">Average Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_avgvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_avgvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_avgvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u50">Under 50K</option><option value="u100">Under 100K</option><option value="u500">Under 500K</option><option value="u750">Under 750K</option><option value="u1000">Under 1M</option><option value="o50">Over 50K</option><option value="o100">Over 100K</option><option value="o200">Over 200K</option><option value="o300">Over 300K</option><option value="o400">Over 400K</option><option value="o500">Over 500K</option><option value="o750">Over 750K</option><option value="o1000">Over 1M</option><option value="o2000">Over 2M</option><option value="100to500">100K to 500K</option><option value="100to1000">100K to 1M</option><option value="500to1000">500K to 1M</option><option value="500to10000">500K to 10M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Relative Volume] body=[<table width=300><tr><td class='tooltip_tab'>Ratio between current volume and 3-month average, intraday adjusted.</td></tr></table>] offsetx=[-305] delay=[500]">Relative Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_relvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_relvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_relvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="o10">Over 10</option><option value="o5">Over 5</option><option value="o3">Over 3</option><option value="o2">Over 2</option><option value="o1.5">Over 1.5</option><option value="o1">Over 1</option><option value="o0.75">Over 0.75</option><option value="o0.5">Over 0.5</option><option value="o0.25">Over 0.25</option><option value="u2">Under 2</option><option value="u1.5">Under 1.5</option><option value="u1">Under 1</option><option value="u0.75">Under 0.75</option><option value="u0.5">Under 0.5</option><option value="u0.25">Under 0.25</option><option value="u0.1">Under 0.1</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Current Volume] body=[<table width=300><tr><td class='tooltip_tab'>Number of shares traded today.</td></tr></table>] offsetx=[-305] delay=[500]">Current Volume</span></td>
<td width="10%" "="">
<select id="fs_sh_curvol" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_curvol" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_curvol_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u50">Under 50K</option><option value="u100">Under 100K</option><option value="u500">Under 500K</option><option value="u750">Under 750K</option><option value="u1000">Under 1M</option><option value="o0">Over 0</option><option value="o50">Over 50K</option><option value="o100">Over 100K</option><option value="o200">Over 200K</option><option value="o300">Over 300K</option><option value="o400">Over 400K</option><option value="o500">Over 500K</option><option value="o750">Over 750K</option><option value="o1000">Over 1M</option><option value="o2000">Over 2M</option><option value="o5000">Over 5M</option><option value="o10000">Over 10M</option><option value="o20000">Over 20M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Price] body=[<table width=300><tr><td class='tooltip_tab'>The current stock price.</td></tr></table>] delay=[500]">Price</span></td>
<td width="10%" "="">
<select id="fs_sh_price" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_price" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_price_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under $1</option><option value="u2">Under $2</option><option value="u3">Under $3</option><option value="u4">Under $4</option><option value="u5">Under $5</option><option value="u7">Under $7</option><option value="u10">Under $10</option><option value="u15">Under $15</option><option value="u20">Under $20</option><option value="u30">Under $30</option><option value="u40">Under $40</option><option value="u50">Under $50</option><option value="o1">Over $1</option><option value="o2">Over $2</option><option value="o3">Over $3</option><option value="o4">Over $4</option><option value="o5">Over $5</option><option value="o7">Over $7</option><option value="o10">Over $10</option><option value="o15">Over $15</option><option value="o20">Over $20</option><option value="o30">Over $30</option><option value="o40">Over $40</option><option value="o50">Over $50</option><option value="o60">Over $60</option><option value="o70">Over $70</option><option value="o80">Over $80</option><option value="o90">Over $90</option><option value="o100">Over $100</option><option value="1to5">$1 to $5</option><option value="1to10">$1 to $10</option><option value="1to20">$1 to $20</option><option value="5to10">$5 to $10</option><option value="5to20">$5 to $20</option><option value="5to50">$5 to $50</option><option value="10to20">$10 to $20</option><option value="10to50">$10 to $50</option><option value="20to50">$20 to $50</option><option value="50to100">$50 to $100</option><option value="frange">Custom (Elite only)</option></select>
</td>
</tr><tr>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Target Price] body=[<table width=300><tr><td class='tooltip_tab'>Analysts' mean target price.</td></tr></table>] delay=[500]">Target Price</span></td>
<td width="10%" "="">
<select id="fs_targetprice" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="targetprice" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=targetprice_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="a50">50% Above Price</option><option value="a40">40% Above Price</option><option value="a30">30% Above Price</option><option value="a20">20% Above Price</option><option value="a10">10% Above Price</option><option value="a5">5% Above Price</option><option value="above">Above Price</option><option value="below">Below Price</option><option value="b5">5% Below Price</option><option value="b10">10% Below Price</option><option value="b20">20% Below Price</option><option value="b30">30% Below Price</option><option value="b40">40% Below Price</option><option value="b50">50% Below Price</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[IPO Date] body=[<table width=300><tr><td class='tooltip_tab'>Date when company had an IPO.</td></tr></table>] delay=[500]">IPO Date</span></td>
<td width="10%" "="">
<select id="fs_ipodate" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="ipodate" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=ipodate_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="today">Today</option><option value="yesterday">Yesterday</option><option value="prevweek">In the last week</option><option value="prevmonth">In the last month</option><option value="prevquarter">In the last quarter</option><option value="prevyear">In the last year</option><option value="prev2yrs">In the last 2 years</option><option value="prev3yrs">In the last 3 years</option><option value="prev5yrs">In the last 5 years</option><option value="more1">More than a year ago</option><option value="more5">More than 5 years ago</option><option value="more10">More than 10 years ago</option><option value="more15">More than 15 years ago</option><option value="more20">More than 20 years ago</option><option value="more25">More than 25 years ago</option><option value="modal">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Shares Outstanding] body=[<table width=300><tr><td class='tooltip_tab'>Shares outstanding represent the total number of shares issued by a corporation and held by its shareholders.</td></tr></table>] delay=[500]">Shares Outstanding</span></td>
<td width="10%" "="">
<select id="fs_sh_outstanding" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_outstanding" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_outstanding_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under 1M</option><option value="u5">Under 5M</option><option value="u10">Under 10M</option><option value="u20">Under 20M</option><option value="u50">Under 50M</option><option value="u100">Under 100M</option><option value="o1">Over 1M</option><option value="o2">Over 2M</option><option value="o5">Over 5M</option><option value="o10">Over 10M</option><option value="o20">Over 20M</option><option value="o50">Over 50M</option><option value="o100">Over 100M</option><option value="o200">Over 200M</option><option value="o500">Over 500M</option><option value="o1000">Over 1000M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center">
<span class="screener-combo-title" style="cursor:pointer;" data-boxover="cssbody=[tooltip_bdy] cssheader=[tooltip_hdr] header=[Float] body=[<table width=300><tr><td class='tooltip_tab'>Float is the number of stock shares that are available for trading to the public. This doesn't include shares held by insiders.</td></tr></table>] delay=[500]">Float</span></td>
<td width="10%" "="">
<select id="fs_sh_float" style="width: 100%; visibility: visible;" class="screener-combo-text" onchange="ScreenerSelectOnChange(this)" data-filter="sh_float" data-url="v=111&amp;s=ta_topgainers" data-url-selected="v=111&amp;s=ta_topgainers&amp;f=sh_float_selected_filter" data-selected="">
<option selected="selected" value="">Any</option><option value="u1">Under 1M</option><option value="u5">Under 5M</option><option value="u10">Under 10M</option><option value="u20">Under 20M</option><option value="u50">Under 50M</option><option value="u100">Under 100M</option><option value="o1">Over 1M</option><option value="o2">Over 2M</option><option value="o5">Over 5M</option><option value="o10">Over 10M</option><option value="o20">Over 20M</option><option value="o50">Over 50M</option><option value="o100">Over 100M</option><option value="o200">Over 200M</option><option value="o500">Over 500M</option><option value="o1000">Over 1000M</option><option value="frange">Custom (Elite only)</option></select>
</td>
<td width="10%" align="center"></td>
<td width="10%" align="center"></td>
</tr>
</tbody></table>
</form>
</div>
</td>
</tr>
<tr><td>
<div id="screener-content">
<table id="screener-views-table" width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td width="100%">
<table width="100%" cellpadding="0" cellspacing="0" class="screener-view-table">
<tbody><tr>
<td width="6.6%" align="center" class="screener-view-button is-active" style="cursor:pointer;"><a href="screener.ashx?v=111&amp;s=ta_topgainers">Overview</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=121&amp;s=ta_topgainers">Valuation</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=161&amp;s=ta_topgainers">Financial</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=131&amp;s=ta_topgainers">Ownership</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=141&amp;s=ta_topgainers">Performance</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=171&amp;s=ta_topgainers">Technical</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=151&amp;s=ta_topgainers">Custom</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=211&amp;s=ta_topgainers">Charts</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=411&amp;s=ta_topgainers">Tickers</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=311&amp;s=ta_topgainers">Basic</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=351&amp;s=ta_topgainers">TA</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=321&amp;s=ta_topgainers">News</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=341&amp;s=ta_topgainers">Snapshot</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="screener.ashx?v=711&amp;s=ta_topgainers">Maps</a></td>
<td width="6.6%" align="center" class="screener-view-button" style="cursor:pointer;"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=screener-menu-stats">Stats</a></td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td width="100%"><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:9px" alt="" border="0"></td></tr>
<tr>
<td width="100%">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody><tr>
<td width="128" align="left" valign="middle" class="count-text">#1 / 146 Total</td>
<td align="center" valign="middle" class="fullview-links px-2">
<a href="javascript:SavePortfolio(146,'v=111&amp;s=ta_topgainers')" class="tab-link">save as portfolio</a> |
<a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=screener-create-alert" class="tab-link">create alert</a>&nbsp;<img src="/gfx/nic2x2.gif" style="width:20px;height:2px" border="0">
<span style="white-space: nowrap"><span class="count-text"><b>Refresh:</b></span> <a href="/screener.ashx?v=111&amp;s=ta_topgainers&amp;ar=180" class="tab-link ">3min</a> | <a href="/screener.ashx?v=111&amp;s=ta_topgainers" class="tab-link active">off</a></span></td><td width="18" align="center"><span class="screener-combo-button align-middle is-arrow is-disabled"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowBackward"></use>
</svg></span></td>
<td width="10" valign="middle" class="count-text px-1">
<select id="pageSelect" class="pages-combo" onchange="url=&quot;screener.ashx?v=111&amp;s=ta_topgainers&amp;r=123456&quot;;row=&quot;r=&quot; + document.getElementById(&quot;pageSelect&quot;).value;url=url.replace(/r=123456/,row);window.location=url;" style="visibility: visible;">
<option selected="selected" value="1">Page 1 / 8</option><option value="21">Page 2 / 8</option><option value="41">Page 3 / 8</option><option value="61">Page 4 / 8</option><option value="81">Page 5 / 8</option><option value="101">Page 6 / 8</option><option value="121">Page 7 / 8</option><option value="141">Page 8 / 8</option></select>
</td>
<td width="18" align="center"><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="screener-combo-button align-middle is-arrow"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowForward"></use>
</svg></a></td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td width="100%" colspan="30"><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:9px" alt="" border="0"></td></tr>
<tr>
<td>
<table class="table-light is-new">
<tbody><tr align="center" valign="middle">
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers'">No.</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=-ticker'">Ticker</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=company'">Company</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=sector'">Sector</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=industry'">Industry</td>
<td class="table-top cursor-pointer" align="left" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=country'">Country</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=marketcap'">Market Cap</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=pe'">P/E</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=price'">Price</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=change'">Change</td>
<td class="table-top cursor-pointer" align="right" onclick="window.location='screener.ashx?v=111&amp;s=ta_topgainers&amp;o=volume'">Volume</td>
</tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=AHI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">1</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ENSC&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">2</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=IREN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">3</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=VTYX&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">4</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BNED&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">5</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTCM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">6</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DERM&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">7</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=GREE&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">8</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=DLPN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">9</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=MICS&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">10</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ABEO&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">11</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=SDIG&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">12</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTAI&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">13</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NTRB&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">14</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=REKR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">15</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=NLSP&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">16</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=CLSK&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">17</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=RIVN&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">18</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=ACMR&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">19</a></td></tr><tr valign="top">
<td height="10" align="right" class="screener-body-table-nw"><a href="quote.ashx?t=BTBT&amp;ty=c&amp;p=d&amp;b=1" class="screener-link">20</a></td></tr></tbody></table>
</td>
</tr>
<tr>
<td>
<table width="100%" cellpadding="0" cellspacing="0" class="body-table" border="0">
<tbody><tr>
<td align="left" style="color:#888888"><b>Signal:</b> ta_topgainers</td><td align="right" style="color:#1E6DC0"><a href="elite.ashx" class="tab-link">export</a></td></tr>
</tbody></table>
</td>
</tr>
<tr><td><img src="gfx/nic2x2.gif" style="display:block;width:2px;height:8px" alt="" border="0"></td></tr>
<tr>
<td width="100%" align="center" valign="top" class="body-table screener_pagination">
<a href="screener.ashx?v=111&amp;s=ta_topgainers" class="tab-link is-selected"><b>1</b></a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="screener-pages">2</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=41" class="screener-pages">3</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=61" class="screener-pages">4</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=81" class="screener-pages">5</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=101" class="screener-pages">6</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=121" class="screener-pages">7</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=141" class="screener-pages">8</a><a href="screener.ashx?v=111&amp;s=ta_topgainers&amp;r=21" class="tab-link is-next"><svg width="16" height="16">
    <use href="/assets/icons.svg?rev=3#arrowForward"></use>
</svg></a>
</td>
</tr>
<tr><td><img src="gfx/nic2x2.gif" style="width:2px;height:10px" alt="" border="0"></td></tr>
</tbody></table>
<div id="IC_D_3x6_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:970px;height:315px;max-height:315px" data-fv-banner="true"><a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=real-time-quotes-3"><picture><source srcset="/img/a/real-time-quotes-3.webp 1x,/img/a/real-time-quotes-3@2x.webp 2x" type="image/webp"><img width="728" height="90" src="/img/a/real-time-quotes-3.png" srcset="/img/a/real-time-quotes-3.png 1x,/img/a/real-time-quotes-3@2x.png 2x"></picture></a></div></div>
</td></tr><!-- TS
AHI|5.95|10986208
ENSC|2.31|6605289
IREN|5.67|1519263
VTYX|39.81|1905367
BNED|1.51|844524
BTCM|3.20|186945
DERM|1.87|413431
GREE|3.32|449593
DLPN|2.02|140847
MICS|1.56|190581
ABEO|4.72|161234
SDIG|4.88|241322
BTAI|7.75|7155169
NTRB|3.48|16047
REKR|2.05|368707
NLSP|1.26|1684160
CLSK|4.89|7344361
RIVN|18.92|54152470
ACMR|14.78|1197237
BTBT|4.58|4586710
TE -->

            <script type="text/javascript">
                ScreenerRefreshInit(0);
            </script>
        </tbody></table></div>
            <div class="footer" style="margin-top: 20px;padding-bottom: 115px">
                <div class="footer_links">
                    <a class="tab-link" href="/affiliate.ashx">affiliate</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/advertise.ashx">advertise</a>

                    <span class="footer_dot"> • </span><a class="tab-link" href="#" onclick="setChartThemeCookie('light')">toggle light mode</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/contact.ashx">contact</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/privacy.ashx">privacy</a>
                    <span class="footer_dot"> • </span>
                    <a class="tab-link" href="/help/screener.ashx">help</a>
                <br>
                <a class="tab-link" href="javascript:void(0)" onclick="window.__uspapi &amp;&amp; window.__uspapi('displayUspUi');">do not sell my data</a>
                <span class="footer_dot"> • </span>
                <a class="tab-link" href="javascript:void(0)" onclick="window.__tcfapi &amp;&amp; window.__tcfapi('displayConsentUi', 2, function() {})">privacy settings</a>

                </div>
                Quotes delayed 15 minutes for NASDAQ, and 20 minutes for NYSE and AMEX.
                <br>
                Copyright © 2007-2023 FINVIZ.com. All Rights Reserved.
            </div>
            <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-3261808-1"></script>
            <script>
              function getSystemTheme() {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  return 'Dark';
                }
                else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                  return 'Light';
                }
                return 'No Preference';
              }

              var systemTheme = getSystemTheme()

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('set', {'dimension1': 'NotLoggedIn'});
              gtag('set', {'dimension3': window.devicePixelRatio + ''});
              gtag('set', {'layoutTheme': 'dark'});
              gtag('set', {'systemTheme': systemTheme });
              gtag('set', {'bundle': 'modern' });

              gtag('config', 'UA-3261808-1', { sample_rate: 10 });
              gtag('config', 'G-ZT9VQEWD4N', {'dimension1': 'NotLoggedIn', 'dimension3': window.devicePixelRatio + '', 'layoutTheme': 'dark', 'systemTheme': systemTheme });

            </script>
        <div id="IC_D_1x1_1" class="relative overflow-hidden flex items-center justify-center w-full mx-auto" data-fv-banner="true"></div><div id="modal-elite-ad" class="modal-elite-ad">
                            <div id="modal-elite-ad_content" class="modal-elite-ad_content">
			                    <button id="modal-elite-ad-close" type="button" class="modal-elite-ad_close">×</button>

                                <!--<div id="modal-elite-ad-content-0" style="display: none">
			                        <h2>Ever heard of Finviz*Elite?</h2>
                                    <p>
                                        Our premium service offers you real-time quotes, advanced visualizations, technical studies, and much more.<br>
                                        Become Elite and make informed financial decisions.
                                    </p>
                                    <a href="/elite.ashx?utm_source=finviz&utm_medium=banner&utm_campaign=modal-0" id="modal-elite-ad-btn-0" class="" target="_blank">Find out more</a>
                                </div>-->

                                <div id="modal-elite-ad-content-1" style="display: block">
			                        <h2>Upgrade your FINVIZ experience</h2>
                                    <p>
                                        Join thousands of traders who make more informed decisions with&nbsp;our&nbsp;premium features.
                                        Real-time quotes, advanced&nbsp;visualizations, backtesting, and much more.
                                    </p>
                                    <a href="/elite.ashx?utm_source=finviz&amp;utm_medium=banner&amp;utm_campaign=modal-1" id="modal-elite-ad-btn-1" class="modal-elite_button" target="_blank">Learn more about FINVIZ*Elite</a>
                                </div>
                            </div>
                         </div><script src="/script/pv.js?rev=333" async=""></script><script defer="">window.renderScriptNotLoaded();</script>
<script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon="{&quot;rayId&quot;:&quot;7e103e01ede68720&quot;,&quot;token&quot;:&quot;e53f08f6c9e04bfd9760701085ec93b4&quot;,&quot;version&quot;:&quot;2023.4.0&quot;,&quot;si&quot;:100}" crossorigin="anonymous"></script>


<iframe name="__tcfapiLocator" style="display: none;"></iframe><div style="position: absolute; visibility: hidden; z-index: 10000; transform: translate3d(0px, 0px, 0px); left: 0px; top: 0px;"><div></div><div></div><div class="tooltip_hdr" style="opacity: 1;">Tickers</div><div class="tooltip_bdy" style="opacity: 1;"><table width="300"><tbody><tr><td class="tooltip_tab">To screen through a selected set of stocks, you can enter one or more tickers directly, such as 'MSFT,GOOG,AAPL'. The screening process will run only on the specified stocks. No input ticker(s) equals all stocks. The <b>open in screener</b> option in the <b>Search</b>, will copy the listed tickers to the screener's ticker box automatically.</td></tr></tbody></table></div></div><iframe src="javascript:false;" frameborder="0" scrolling="no" style="visibility: hidden; opacity: 0; left: 0px; top: 0px; width: 316px; height: 162px; position: absolute; z-index: 10;"></iframe></body></html>`;
