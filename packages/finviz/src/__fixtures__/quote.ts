export default `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
<title>AAPL - Apple Inc. Stock Price and Quote</title>
<meta charset="UTF-8"><meta name="viewport" content="width=1024"><meta name="description" content="AAPL - Apple Inc. - Stock screener for investors and traders, financial visualizations.">

            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-regular.woff2" as="font" crossorigin>
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-700.woff2" as="font" crossorigin>
            <link rel="preload" href="/fonts/lato-v17-latin-ext_latin-900.woff2" as="font" crossorigin>
            <link rel="preload" href="/fonts/inter-latin.woff2" as="font" crossorigin>

            <script>
                window.notificationsArray = [];
                window.renderScriptNotLoaded = function () {};
                window.handleScriptNotLoaded = function (element) {
                    window.notificationsArray.push(element);
                    window.sentryDisabled = true;
                    window.handleScriptNotLoaded = function () {};
                };
            </script>
        <link rel="stylesheet" href="/assets/dist-legacy/finviz.6b32d3c0.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="stylesheet" href="/assets/dist-legacy/main.28c8d53a.css" type="text/css" onerror="window.handleScriptNotLoaded(this)">
<link rel="icon" type="image/png" href="/favicon_2x.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon.png" sizes="16x16">
<link rel="canonical" href="/quote.ashx?t=AAPL">

          <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
          <script type="text/javascript" async=true>
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
<script src="/assets/dist-legacy/runtime.6b60fecb.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/368.e88e3b40.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/806.05a8f611.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/libs_init.7ea9da75.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/372.b7ad6ed3.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/header.16ab1572.js" onerror="window.handleScriptNotLoaded(this)"></script><link href="/assets/dist-legacy/redesign.6368ab98.css" rel="stylesheet" type="text/css"></head>

          <script>
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
          </script>
          <body class="m-0 yellow-tooltip is-quote min-w-[1009px] table w-full">
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
                    <tr class="align-top">
                        <td>
                            <table class="header-container">
                                <tr>
                                    <td class="w-[30%]">
                                        <table class="w-full">
                                            <tr>
                                                <td class="h-[50px] align-middle">
                                                    <a href="/" class="logo">
                                                      <svg width="225" height="32" class="block">
                                                        <use href="/img/logo.svg#free" class="dark:hidden" />
                                                        <use href="/img/logo.svg#free-dark" class="hidden dark:block" />
                                                      </svg></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="search" id="search" style="padding-top: 4px">
                                                    <form style="margin: 0">
                                                        <input placeholder="Search ticker, company or profile" type="text" value="">
                                                        <span class="fa fa-search"></span>
                                                    </form>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="align-bottom pb-1">
                                        <div id="microbar_position" class="hidden xl:flex items-center h-[37px] pl-2"><div><div id="IC_D_88x31_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:88px;height:31px;max-height:31px"></div></div></div>
                                    </td>
                                    <td class="relative w-[730px] text-right">
                                        <div id="banner_position" class="overflow-hidden absolute top-0 right-0 w-full h-24"><div id="IC_D_728x90_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:728px;height:90px;max-height:90px"></div></div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="w-[994px]" style="font-size:0">
                            <img src="/gfx/nic2x2.gif" class="w-[994px] h-px" alt="">
                        </td>
                    </tr>
                </table>
            <table class="navbar">
                <tr>
                    <td class="h-[30px]">
                        <table class="header-container">
                            <tr><td><a class="nav-link  is-first" href="/">Home</a></td><td><a class="nav-link " href="/news.ashx">News</a></td><td><a class="nav-link " href="/screener.ashx">Screener</a></td><td><a class="nav-link " href="/map.ashx">Maps</a></td><td><a class="nav-link " href="/groups.ashx">Groups</a></td><td><a class="nav-link " href="/portfolio.ashx">Portfolio</a></td><td><a class="nav-link " href="/insidertrading.ashx">Insider</a></td><td><a class="nav-link " href="/futures.ashx">Futures</a></td><td><a class="nav-link " href="/forex.ashx">Forex</a></td><td><a class="nav-link " href="/crypto.ashx">Crypto</a></td><td><a class="nav-link " href="/elite.ashx?utm_source=finviz&utm_medium=banner&utm_campaign=main-navbar-backtests">Backtests</a></td><td><a class="nav-link  is-elite" href="/elite.ashx">Elite</a></td><td class="w-full relative"><div class="absolute inset-0"><div id="time" class="pr-1"></div></div></td>
                    <td class="nav relative">
        <a data-testid="chart-layout-theme" href="#" class="!flex !bg-transparent !border-b-0 mt-1 !py-0 !px-1" style='border-left: 1px solid #444a57' title="Toggle Light/Dark mode" onclick="setChartThemeCookie('light', true)">
            <div class='relative box-content flex rounded-full w-10 h-5 border border-gray-750 bg-gray-800 text-white justify-end'>
                <div class='box-border w-1/2 rounded-full p-px border border-gray-800 bg-[#4c5261] flex justify-center items-center'>
                    <svg width="16" height="16" class="fill-current text-white inline-block -ml-px">
    <use href="/assets/icons.svg?rev=3#moonOutlined"/>
</svg>
                </div>
            </div>
            <span class='ml-1 select-none font-medium text-xs text-white'>Theme</span>
        </a>
    </td>

                <td>
                    <a href="/help/screener.ashx" class="nav-link is-help" style="border-left: 1px solid #444a57"><span class="fa fa-question-circle"></span>Help</a>
                </td>
                <td><a href="/login.ashx" class="nav-link sign-in">Login</a></td>
                <td><a href="/register.ashx" class="nav-link sign-up">Register</a></td>

                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

          <script>
            function reloadPage () { location.reload() }
            function setChartThemeCookie(chartsTheme) {
              fetch('/api/set_cookie.ashx?cookie=chartsTheme&value=' + chartsTheme ).catch(function(){}).then(function(){
                window.gtag && window.gtag('event', 'click', { event_category: 'theme', event_label: 'toggle', value: chartsTheme, event_callback: reloadPage });
                setTimeout(reloadPage,1000);
              })
            }
          </script><div class="content ">
            <div id="quote-notice" class="justify-center items-center" style="display: none; position: relative; margin: 10px auto 10px auto; background: #fffce5; border: 1px solid #fee500; color: #363a46; font-family: Lato; font-size: 13px; line-height: 36px; text-align: center; width: 945px;">


            <p><svg width="20" height="20">
    <use href="/assets/icons.svg?rev=3#lightbulb"/>
</svg><a href="/elite.ashx?utm_source=finviz&utm_medium=banner&utm_campaign=quote" target="blank" onclick="window.gtag && window.gtag('event', 'click', { event_category: 'bannerQuote' });" style="color: #1E6DC0;">Upgrade to FINVIZ*Elite</a> to get real-time quotes, intraday charts, and advanced charting tools.</p>

                <a title="Close" class="close" onclick="Finviz.notice.stockDetailNotice.close();" href="javascript:void(0)" style="
                    position: absolute;
                    margin-right: 0;
                    right: 10px;
                    top: 0;
                    color: #363a46;
                    text-decoration: none;
                    font-weight: bold;

                "><svg width="20" height="20" class="block fill-current">
    <use href="/assets/icons.svg?rev=3#clear"/>
</svg></a>

            </div>
            <script src="/script/notice.js?rev=5" async onerror="window.handleScriptNotLoaded(this)" onload="notice('quote-notice', 'stockDetailNotice')"></script>
            <div class="ticker-wrapper gradient-fade">
<div class="quote-menu empty:py-3 empty:min-h-8" data-isscreener="1" data-ischarttas="1"></div>
<div id="react-root"></div>
<script>
            FinvizSettings.TA = {"style":"candlestick","overlays":[{"name":"sma","parameters":"20","color":"rgba(220,  50, 179, 0.39)"},{"name":"sma","parameters":"50","color":"rgba(255, 143,  51, 0.78)"},{"name":"sma","parameters":"200","color":"rgba(220, 179,  50, 0.43)"},{"name":"patterns","parameters":"","color":"rgba(135, 206, 239, 1)|rgba(220, 159, 229, 1)"}],"indicators":[]};
        </script><div style="display: flex; flex-direction: column; align-items: center">
            <link rel="stylesheet" href="/assets/dist-charts/main.1855f85e.css" onerror="window.handleScriptNotLoaded(this)">
            <div id="app" class="interactive-chart">
                <div id="chart" style="min-height: 401px; position: relative"></div>
            </div>
            <div id="js-charts-modal"><div class="overlay modal hidden has-footer"></div></div>
            <div class="context-menu hidden"></div>
            <script src="/assets/dist-charts/runtime.40efbe62.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-charts/976.76a22507.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-charts/main.1144405c.js" onerror="window.handleScriptNotLoaded(this)"></script><script>
                                    (function() {
                                        var Quote = FLibs.Charts.Quote;
                                        var data = {"ticker":"AAPL","timeframe":"d","volume":[279563488,242172656,216537680,199056448,219043488,268779136,207990592,369393984,592055872,229682768,200275216,248441456,309422560,322957728,206249488,274781568,318854688,334914496,298856160,255999600,267621104,364433536,881940608,756372416,490294528,362303776,510518432,358687328,335877568,244206944,222729104,330964544,424188864,307607008,239655088,272403424,332100992,345031872,236367760,359525376,340686688,743196224,898694720,404050304,298834048,548551232,399379488,456861664,404539264,699302016,762106880,364343328,316956992,237220976,228039152,260157888,353882976,289183904,322754336,258869776,312292736,290916320,301725152,278602240,267740016,261898432,320074720,251100304,253593600,290542560,398108192,534063552,313724800,384764768,337792864,550441024,635809088,354163136,275695424,274889504,244628384,265472544,223376832,262620656,279318464,227453440,204458816,197219904,282420640,317919360,244945136,208939040,194183392,262027712,223725152,229393840,401383328,363447712,318129184,472544000,450967392,377811040,447581696,344353760,320494464,278270720,359719136,262289536,332821472,282594080,229902832,565863808,320957792,436414176,501307840,167555104,204008352,225885488,253631136,223277712,235168064,393215872,413437024,317731392,258746992,279621088,305282976,379443744,334937824,393890880,229885552,433707200,329022496,380877728,403913792,433538176,576877184,1067335360,503771680,679051840,465346240,402483488,377094560,329288960,257989152,374554784,345804448,282689280,308508576,307840928,273872416,261225248,314217984,306116704,279029280,289460096,232989632,276525408,302229600,372298976,239138208,259539600,200262272,185692624,221661184,178765904,280795680,200782048,257742688,237198208,199544496,209647664,224756064,208398352,374449056,355699840,282293696,299769184,222030928,200564448,168668928,200758944,180419664,162592608,275250208,289850400,243887776,206171088,239651504,271900320,205780912,266490576,214932192,284427168,182675904,202658016,394941440,759913088,390275648,669487360,337379040,456884000,244209920,191514480,287067328,374565856,282864224,230297680,291598272,213298928,159738528,166403552,230847152,276367616,317756416,234836176,196999856,200875984,232210192,348866784,315687840,376474912,564021120,369351968,292926784,335482432,303804864,350484000,301659200,251108160,182724448,218995168,218101120,142245088,118905392,134056432,142110752,403592256,174777568,156144352,147474160,130517440,256115216,198356112,152893904,113860288,91567008,225871760,260886720,145745760,158742208,136072912,171240624,182784704,214009664,229192976,199950368,156316000,220786384,371670880,182915376,173876464,221270752,172572384,132040000,227370592,194045152,159832576,223730656,154233376,186844720,167460768,146339376,135181408,127665760,112462264,195805328,190289648,277597088,210796768,133912792,176735328,161080688,132607936,209476048,273839200,178380992,214257056,501682080,342872896,233828144,185426976,759385024,403478336,249598976,256387616,245266064,267632528,243705984,149197744,283609632,211153696,253608784,240687312,400367968,249482000,199065248,221056560,205965152,191031312,173878336,148204736,168376736,229618688,309506112,265326368,214333472,254754240,403734400,288618080,272718752,310069120,378495616,273052576,284298688,188215664,136750800,192243792,210751520,162619168,178557136,209130208,166297456,149743616,139873824,134766144,108782192,109769008,187769728,238091424,176254384,186986848,176895904,167476640,173582144,228717184,189803296,275361760,163327552,99257608,335256160,237395760,172253760,168623104,153275584,230659392,240832144,178261280,165886304,224112544,268872320,243162928,213647088,236024864,353719072,180670192,104113680,57918444,134883808,110395680,119525904,165613408,212818496,257141968,263188464,160423744,237458192,214798112,198603168,268367712,195826352,240055984,314053376,199599632,194303584,215185632,185859312,222459920,382275008,585908224,337745728,334981856,250956400,207662992,280598976,168984976,174826272,155559184,248034016,294247200,297897856,217088880,252609616,179566944,149449520,195793680,283896448,276912512,298846976,365150112,248059392,192386656,151265136,126665360,226068576,291368256,354113952,275426336,275755904,193450880,207309136,143497200,204092416,261083776,183237952,274780544,150838688,131369216,206620704,190291472,158184608,188398688,168362208,162485744,128880528,148775904,140049072,149316976,129935896,160751808,145460496,102098368,115881680,113475952,207828192,188217248,129740224,150618016,183083616,178103616,387816832,475695872,253544336,332781696,234050560,203953120,197085664,288564032,175763584,222201536,168143024,192640128,138776944,180813824,152832128,203531680,178532960,145819728,158921456,182383888,282790240,183332992,122933232,203537808,128451184,134670512,123934168,153800480,142507200,210699136,224301680,156348992,141563552,147544992,175955776,125976528,131672288,141628880,218867552,136157376,121075456,221123424,127752400,176267360,196645712,177482720,120955248,108843808,112241728,187787248,243046464,314380160,245417888,165762144,127072560,134596800,144889792,184658848,235600816,307025696,461802432,203997808,168649328,177822160,134472384,148046608,134513072,171539808,279903872,496554496,397250464,211612160,154681616,219806384,388331264,406742432,194143152,171718064,163538976,138242832,193146048,274006496,513101888,648825152,414406400,387098432,338464224,212657632,224917088,307383424,247555248,212935760,199985248,219374496,340043200,251571328,199661888,233453728,173364624,148693952,256450560,297141152,200887856,201384640,143026864,200877904,224607712,208436048,293461536,265892128,255716400,232079040,208258976,195427904,187062208,247918304,211064560,121868816,132197024,177849792,150693808,156930432,119036608,195871056,169307904,166616352,237467648,265335120,279537600,342205408,204909344,197461024,128813072,182075904,179544192,158210720,132169136,135485616,236511728,180871888,130102320,183249616,152426800,110467760,186698784,173183280,137148384,129930112,171212688,85553232,52185780,156721280,139409504,133546256,166278032,231107904,128336992,137237792,185445424,116850912,187544640,260014432,213292416,224953872,179091312,385813312,190362432,131157472,130629416,54386720,106816840,123724976,100855104,163649264,270597536,223163968,273829568,324377728,283192064,198957504,196616912,249758528,252680512,319335552,212350992,289337664,208645856,263201872,207178096,300308000,533478688,222715296,257666016,163774160,149428864,183857184,185886608,185672256,216085504,177324784,169374400,200298848,161405520,196231664,179452976,156083936,141496688,137123040,127770528,145022976,110330640,115964528,140865104,201628592,132678240,147822976,184220400,143663232,126247552,108806736,134054304,109632944,100304248,160270944,153213968,137682816,176820688,142010720,129777504,102813984,104531824,77645488,124760336,182404592,103553792,103495800,149424816,106314608,105616304,127207480,94326960,117630072,108929296,133029264,101895696,187755872,243285840,129539520,122444120,126210096,134732480,112126352,224064656,458408576,328970752,274125920,192640416,227325104,164101904,143562000,174799552,131745744,134747344,114876432,305258752,177571056,245039024,187667760,168249568,121768400,128103872,152074576,140560704,154568432,225324640,145364960,169228848,116693136,160766400,114019552,93170016,89637800,83392528,106405416,126851744,152081984,127727776,117780912,125307264,244032880,137647600,142185440,116876488,128960752,301245440,186488752,161779648,146124032,143345424,104106160,110820840,123796360,100558232,115648416,95179776,96669856,103568688,155675984,120547960,145975472,95119696,105103872,130808112,113254672,161531680,224959296,369379264,159479360,110934752,152671488,135266224,120810560,109634600,162213600,112148880,105260816,96034016,109938024,74641736,103472832,135177792,101423904,87938816,101472288,103280920,85030672,94700320,100344992,111065168,99881200,99455776,118649624,106806096,107209800,107521568,169457312,212008096,186227936,181171072,248704768,449361280,362452704,319547648,188092192,138057072,144012736,124295936,209924608,119477768,98429648,118564336,143547968,145516416,86807040,118947344,85812352,115117248,97433776,144943824,256164176,150347152,140769632,142608768,94499584,98213912,80138376,96503200,92770656,94154688,192515872,264536880,138248176,151446656,105677592,175303248,113326832,107730408,123347984,130240000,97016720,236705440,228538160,136575584,204702016,129058040,235362080,110528016,113715664,117058288,103862136,109705576,45903688,108775936,114115000,144649024,148347456,106111984,137298160,104781848,119994880,108273264,137610512,105497504,174935248,136127328,186098176,177404544,111117696,85699856,95132656,104343416,56997936,73187424,83623568,60158076,122345056,115127456,84472464,88774352,127007600,134247792,97848208,110354368,108344880,104447792,137759376,94851840,102389168,130391568,88200872,92844152,130346688,105350304,82251776,121510016,196803968,447940160,134841648,98029200,107383696,152735360,92016288,113399440,80261832,92141680,132904896,142492400,90338224,88792784,98028624,83347728,83152744,87106336,81029704,93931440,145658336,104843936,86284480,87000176,69785184,74828944,88623616,78451200,69686864,61236260,102767096,76927992,175539808,86168152,158119648,103440656,81385200,89582256,94300376,133499216,116759824,84829008,78646608,79942856,79565416,110871416,84596136,66688792,75733584,121517504,81400000,71291520,66328376,58790176,69313504,93278248,69283712,68537328,75486000,80164960,56985388,83441432,134411776,181408768,182788128,93487488,109310896,195009648,156521456,103222768,109020232,130108064,104038880,80193912,203070720,134272864,107843152,91865744,79675488,76876616,76942392,87710544,80507408,97804656,65616352,111082864,101326648,106499704,84278592,85003192,259530624,289229312,136661776,126124928,128661488,201444368,130165616,99600288,85063008,76425176,141757552,102769440,99047568,88329728,125997472,92096432,57111392,86278224,96515128,76806848,84362544,79127344,99537912,100797488,80528240,95173824,71475168,83691872,68974992,105010520,85972640,75415728,63123804,129905344,68854608,79383680,141474576,279747200,108389184,82239408,87481280,144823584,104526120,163217088,105028384,88490936,117861952,110686448,111762256,109712272,105474112,86418336,77596320,79275672,101920256,103863888,118067640,109078336,107140384,66364204,118145256,86606904,87714008,114446144,126323192,286856192,179629440,95042992,196458400,113077744,83242528,211805456,150046640,186581776,177549344,146640176,102016912,88021824,105199240,74795368,64921172,80655000,85135072,69630232,65051692,62468056,67622560,64500216,65576752,96485808,75989104,65496656,170336672,95896584,87937312,71028920,84828392,68001872,177816640,178803088,144187312,134551040,165573488,237594528,140105216,97445936,97638112,117930384,100582000,67928320,99129952,116632280,94549936,87598176,65049788,100525184,102355696,56106692,82867208,105715208,166665456,166108864,159037152,130169536,109400616,114240000,102693232,93420928,141095040,77636920,95273792,81906160,160677232,117684456,109745792,93902592,83799584,65397776,132742144,85992848,65920748,103999688,102223736,118071600,89738384,94640072,82271064,86335984,95839584,74670912,101672320,118263792,137547344,124773408,129700272,108434208,130756584,204420352,166116016,156572048,202561632,184192736,129915720,188923152,346375296,290954080,272975360,206434320,217562064,282690432,243278160,130196656,162579728,204588688,160704368,135722160,149886496,123967760,135249440,152648704,155712496,151128544,195207872,153815808,113605464,95154024,126813848,95096432,128740648,128828320,126774112,117473424,90975192,157618752,133787088,78597400,148219744,165963072,164115136,150164944,163690320,166674176,153594016,150347168,121112184,138421952,107732784,140021152,116070872,114456960,89726560,91557136,100497024,86313680,106421768,83018152,139235200,261964560,146061904,134768064,113528336,111852056,142623360,169709696,214277504,266157488,136272720,224805264,169805696,113611104,92844960,111957152,104848880,83115088,94780640,76732256,69176112,73190912,73603152,60962816,80233664,92935904,69843856,90056304,74762192,109931168,93770040,105064696,86263856,83734480,85388720,106627200,73233840,67644560,86553568,86440296,246876640,73939456,134313824,82514800,102847592,108801792,126652384,98276800,101141312,69460944,90950664,70925376,55819224,66416992,69940976,79026536,63756596,75325880,72164528,50079168,60172440,62138092,65573524,81147008,82824168,63957460,74791592,67305936,76303856,96095888,84118144,157492160,271742848,249616048,133789584,101701552,102349552,90101952,93970504,98444808,103563520,82992040,115230256,114001472,141707984,121150784,104639024,76072528,75532896,73905424,82100464,91107064,109019216,195175296,173360544,109560528,133331840,137159904,150479232,158065808,142996192,197114960,166825504,127997152,148780528,126286848,108495328,106435176,384987008,110773432,98217520,95938824,120724912,91717456,94403208,99152680,114619200,128168000,134321856,118655696,107564112,167962208,212497568,161351408,123164032,116735856,91541584,130325264,132314904,115168328,155071392,163700656,119423072,189033504,183742080,146639968,153435728,233292720,365314624,264654672,127531520,133697736,101450544,137463008,204542080,187531744,243203824,185915200,147713008,167683488,271300992,124496840,94495888,179994080,165549504,184250160,167079968,158126192,163192000,165377120,172393632,169126528,248103968,189126656,142510688,127591312,162814848,177151680,135366080,196189184,259091840,382977536,148676928,234330176,212468256,169165696,140013856,148158944,365248768,234428288,219111056,164101248,180396320,143122688,108092960,129756744,114841296,122278824,119284640,135004096,121575880,92522280,101766192,134191568,104768232,166348960,244439120,162958592,130672552,125982328,144406512,112958368,126966760,95279864,83973696,89134096,89960928,87342992,98507256,75891304,104457448,68998680,75652616,87493432,68280848,111341552,112861664,103544672,109744816,78949680,83241536,99185496,95997432,128044136,129870336,124130096,94318032,156171648,104879328,126585472,124140928,204136944,169630656,175381168,199202144,119393712,83121456,94255840,111447856,91062928,93087320,76457104,74106576,103526784,143072944,86781152,83603232,111042672,70146584,102785536,115627120,96783064,77758176,93291968,70162432,74172824,74596408,88818864,186139696,259309312,127985296,83569512,129772448,155054784,105358016,139634432,164834848,229722496,146118704,106178872,132125456,131516360,154449152,113459392,118994224,146118944,94858744,111792640,113924656,84873648,108174336,161584272,123871840,119093712,90105248,122737568,104883408,107731528,73012752,86698496,75045896,58676576,106204016,84496944,86055952,191202352,72881680,84281336,104270048,83598864,124442568,109266960,67740864,45448180,69062072,101354512,82312064,71588552,80767368,70380848,67789680,67467264,56429800,74328640,83717232,89111728,73420840,59966268,55638248,70475496,86693552,135742880,277125440,216071680,163448480,209571872,143299152,133457600,108038096,98478984,89927552,190159136,146189776,111533456,115254496,97727664,107678112,86258992,89071280,187531376,104264520,103589376,63830528,84030608,84650240,80238296,76867280,95787936,77449176,109237600,127111728,177158592,128906672,159053184,84632560,73545872,102572368,88751504,231908384,77678592,125737472,89924024,76353248,101445136,105274336,144748656,143069024,121410744,139022208,123557072,117130800,76117696,115851936,167960832,97653936,92161936,77146776,69091584,97508664,89469936,90736000,79730176,71665024,73477184,96572960,142839472,124522088,139162080,151125344,103271808,79897712,75864496,94940336,70081984,82029840,87388904,103270368,89582224,100374664,86803584,76278384,106439680,121395112,65325052,84118064,105339528,65544488,46617452,94774200,117509072,67241552,74645376,106189968,128730576,90529536,78893568,137748160,133731224,128324416,114303192,116098752,98507792,276130976,98711536,48478856,93336016,146371744,144238464,100990496,135647456,146535520,118578576,111510624,132363784,170486176,140869088,122086888,162613824,121923528,108829016,137816464,110843256,101832464,104471968,146537520,161940016,162233952,216599712,126743232,199588384,173985600,136616544,118826872,105425536,117684048,109348864,94323120,113730288,94747568,80113792,152762176,93983968,100565952,129705664,222195312,230673456,198713728,320605536,426884928,341397344,319475392,219178272,187572880,226176992,286744832,285290080,256379872,418474080,370732128,322423456,324055872,300233632,271857024,401693376,336752832,287531104,303602048,252560672,204216608,167976448,197002000,176218560,165933968,129880064,201820288,202887328,168895280,162116496,131022928,194994688,131154560,157125152,215249920,130015000,180991568,117057368,124814328,126508736,117087568,112004752,137280816,183063872,240616704,133567944,147751184,142333760,115215056,134047936,145946240,162301056,200622560,158929072,166348384,135372496,101729536,111504864,102688848,81803016,125521816,112945096,133796416,153598128,81018608,87642816,104491216,87560368,137250208,95654536,147712368,166651744,201662448,200146048,138808928,165428736,114406504,96820384,264475808,135445264,212155472,192623392,137522512,205256848,130646080,140223280,110737232,114041472,118655648,112424456,117091880,125642608,90257320,191649136,170989360,153197936,110577672,92186896,90317904,103645840,89001648,197004432,185438864,121214192,103625504,90329256,158130016,374295456,308151392,172792368,121991952,202428896,198045616,212403424,187902368,165944816,210082064,165565216,119561440,105633536,145538016,126907184,338054656,345937760,211495792,163022272,155552384,187629920,225702688,152470144,200118992,257599648,332607168,231366560,176940448,182274384,180860320,140150080,184642032,155026672,178010976,287104896,195713808,183055376,150718672,167743344,149981440,137672400,100060528,142675184,116120440,144711984,106243840,161498208,96848984,83477152,100506864,240226768,262330448,151062304,112559216,115393808,120639336,124423728,89945984,101987952,82572648,111850656,92276768,143937824,146129168,190573472,122866896,107624448,138235488,126387072,114457920,154515312,138023392,112294952,103350672,81688584,91183016,74270976,76322112,74112976,73604288,127959320,113874216,76499232,46691332,169410176,128166800,89004192,78967632,78260424,86711992,82225512,115089192,81312168,86939784,79075984,157572256,98208592,94359808,192541504,121251552,169351824,88223696,54930064,124486240,121047328,96452128,99116584,143301888,97664896,155087968,109578160,105158248,100620880,91951144,88636832,90221752,111598528,90757328,104319488,120529544,114459360,157611712,98390552,140843760,142621120,177523808,106239824,83305368,89880936,84183064,75693832,71297216,76774216,73046560,64280028,60145128,80576320,98085248,96856752,87668832,103916416,158273024,111039904,148199536,164560400,116307888,102260944,112966336,178154976,153766608,154376608,129525776,111943328,103026512,88105048,92590552,115227936,111932640,121469752,185549520,111912288,95467144,88530488,98844680,94071232,80819200,85671920,118323824,75089136,88651176,80171256,83466720,88844592,106686704,91419984,91266544,87222784,89347104,84922384,94264216,94812352,68847136,84566456,78756776,66905068,66015804,107760096,151100960,109839464,75135104,137564720,84000896,78128336,78973272,88071232,126142824,112172280,105861336,81917952,74244624,63342928,92611992,76857120,79295440,63092944,72009480,56575920,94625600,71311112,67637120,59278864,76229168,75169344,71057552,74403776,56877936,71186424,53522372,96906488,62746332,91815024,96721672,108953312,79663312,74783616,60214200,68711000,70783744,62111304,64556080,63261392,52485780,78945568,108181792,104911592,105575456,99890800,76299720,100827096,127050784,106820296,93251424,121434568,96350032,74993456,77338160,71447416,72434088,104818576,118931192,56699476,70440624,62879960,64786616,56368272,46397672,54126812,48908688,69023080,48493464,73779112,59375008,103558784,92229736,86325992,86960312,60549632,60131808,48606428,58991296,48597196,55802388,90956720,86453120,80313712,71171320,57866064,82278264,74420208,57305728,140893232,102404328,109296296,83281312,68034152,129868824,123478864,75833960,76404344,64838168,53477868,74150728,108972336,74602048,89056664,94639584,98322008,80861064,83221120,61732656,58773156,64452220,73035856,78762720,69907104,67940336,85589176,76378896,58418788,61420992,58883444,50720556,60893396,56094928,100077888,124953168,74588256,69121984,54511536,60394616,65463884,55020868,56787928,65187092,40999952,63804008,59222804,59256208,88807000,137827680,117305600,117467888,96041896,69463624,76959752,88748216,174048064,152423008,136739168,118023120,107496984,120405352,116998904,108923736,115402728,153237024,139380384,131063256,150185840,195923440,107499112,91185904,92135304,68356568,74919584,79144336,62348932,59773016,64062260,104701216,99310440,94537600,96903952,86709144,106765552,76138312,74805176,84505760,80440784,91168728,94814992,91420512,122848856,162706688,115798368,108275312,121954640,179935664,115541592,86213912,84914256,89418072,82465400,77251200,74829216,71285040,90865896,98670688,86185528,64286320,61177400,69589344,82772672,91162760,90009248,141147536,91974224,95056632,83474424,79724752,76678440,83819592,96418848,131148280,91454904,105342032,96970104,108732112,92964304,102300160,75615376,123511696,95811352,81532008,98062672,90131416,80546160,90371920,100589440,92633152,103049288,78751328,76545984,73401784,89058784,77594648,76575504,72246704,79265184,70618928,75329376,69023944,67723832,67929816,87227768,84882424,96046376,95623240,88063192,130216792,131747568,123055264,88966528,108256504,130525272,116124648,131577920,115366736,142689824,182602048,113990848,86643784,78336256,109742888,136095648,137426128,117726264,104132744,92482696,90601552,90978504,103718416,74286632,72348056,88570288,71598384,67808152,53950200,69472976,91566640,122207096,84784328,91532976,107961504,134520288,81000488,73409232,72433768,89116840,70207904,67315328,66242412,98964464,71051552,73429640,74064256,66253708,64547800,63305112,77588760,71185560,78140744,76259928,81420864,82982368,64823412,65086636,66675408,53623944,55138692,78620688,81378728,101786864,67829376,59907024,82507488,55474144,56696984,60362336,63135504,70170544,57149160,68039384,54091696,56377048,79542040,62290076,70346296,69026808,54147080,53841524,51218208,78960976,73313952,77906200,87991088,74229896,76957768,73714840,87449576,84923848,68081008,104955960,122656616,87965408,90481112,162278848,81474248,107689792,101696792,86652544,96029912,93339408,84442744,146691392,128138240,124925272,114311664,87830064,79470968,68402168,85925560,74899000,77033672,70433744,113223976,88597968,85250936,99136608,61758340,64521988,86548608,75981920,74732288,88436176,109180152,164762368,97943168,80379344,93604624,97918512,140814800,83374624,89908480,74917792,118854032,93979664,73374112,89868336,64218264,80389400,74829576,58724072,51804132,58301396,35195860,69346520,83763800,111380880,71250416,65447448,68826440,64727184,69721096,62128336,76097008,70462656,93886160,82291184,98931904,160156896,79592616,77432816,85927992,77852112,63814892,69007832,85438392,75703712,77034208,112117472,89113632,80962704,87754712,70790816,63896156,69458952,71379648,57809720,63646628,69672800,58280412,80223624,81760312,66435144,65799348,54105068,70555840,64015272,65874460,77663632,118338976,154357344,69858304,83322552,64120080,56007144,57450708,62199012,61707572,65669252,68167944,59144120,58867232,51011304,48394248,55469608,44998472,50547000,55478992,52279760,70732296,87558032,56182028,47204792,53833584,68572400,84457120,73695896,77167864,76254416,98944632,73641416,73938288,75701808,67622064,59256344,52390264,45992152,51305692,49501688,68749792,56976188,46278296,51511744,45390124,47716880,47644216,50133064,68445648,49386480,41516216,49923008,47720168,52456376,58337340,41949580,48714064,45498796,64902328,55275852,52472936,48425696,65136016,81235424,113453168,55962792,45326872,53724500,49514676,45533136,37266660,42110292,57951604,65496656,55809476,43570932,50747264,45143488,56058256,54834976,55964400,99625288,68901808,61996912,121946496,64848376,61944616,50214880,48899972,54754996,54929128,57462880,65433168,101256224,49799092,49515696,51245328,53116996,48088660,50730848,51216800,46347308,85213216,31456587],"date":[1373634000,1373893200,1373979600,1374066000,1374152400,1374238800,1374498000,1374584400,1374670800,1374757200,1374843600,1375102800,1375189200,1375275600,1375362000,1375448400,1375707600,1375794000,1375880400,1375966800,1376053200,1376312400,1376398800,1376485200,1376571600,1376658000,1376917200,1377003600,1377090000,1377176400,1377262800,1377522000,1377608400,1377694800,1377781200,1377867600,1378213200,1378299600,1378386000,1378472400,1378731600,1378818000,1378904400,1378990800,1379077200,1379336400,1379422800,1379509200,1379595600,1379682000,1379941200,1380027600,1380114000,1380200400,1380286800,1380546000,1380632400,1380718800,1380805200,1380891600,1381150800,1381237200,1381323600,1381410000,1381496400,1381755600,1381842000,1381928400,1382014800,1382101200,1382360400,1382446800,1382533200,1382619600,1382706000,1382965200,1383051600,1383138000,1383224400,1383310800,1383573600,1383660000,1383746400,1383832800,1383919200,1384178400,1384264800,1384351200,1384437600,1384524000,1384783200,1384869600,1384956000,1385042400,1385128800,1385388000,1385474400,1385560800,1385733600,1385992800,1386079200,1386165600,1386252000,1386338400,1386597600,1386684000,1386770400,1386856800,1386943200,1387202400,1387288800,1387375200,1387461600,1387548000,1387807200,1387893600,1388066400,1388152800,1388412000,1388498400,1388671200,1388757600,1389016800,1389103200,1389189600,1389276000,1389362400,1389621600,1389708000,1389794400,1389880800,1389967200,1390312800,1390399200,1390485600,1390572000,1390831200,1390917600,1391004000,1391090400,1391176800,1391436000,1391522400,1391608800,1391695200,1391781600,1392040800,1392127200,1392213600,1392300000,1392386400,1392732000,1392818400,1392904800,1392991200,1393250400,1393336800,1393423200,1393509600,1393596000,1393855200,1393941600,1394028000,1394114400,1394200800,1394456400,1394542800,1394629200,1394715600,1394802000,1395061200,1395147600,1395234000,1395320400,1395406800,1395666000,1395752400,1395838800,1395925200,1396011600,1396270800,1396357200,1396443600,1396530000,1396616400,1396875600,1396962000,1397048400,1397134800,1397221200,1397480400,1397566800,1397653200,1397739600,1398085200,1398171600,1398258000,1398344400,1398430800,1398690000,1398776400,1398862800,1398949200,1399035600,1399294800,1399381200,1399467600,1399554000,1399640400,1399899600,1399986000,1400072400,1400158800,1400245200,1400504400,1400590800,1400677200,1400763600,1400850000,1401195600,1401282000,1401368400,1401454800,1401714000,1401800400,1401886800,1401973200,1402059600,1402318800,1402405200,1402491600,1402578000,1402664400,1402923600,1403010000,1403096400,1403182800,1403269200,1403528400,1403614800,1403701200,1403787600,1403874000,1404133200,1404219600,1404306000,1404392400,1404738000,1404824400,1404910800,1404997200,1405083600,1405342800,1405429200,1405515600,1405602000,1405688400,1405947600,1406034000,1406120400,1406206800,1406293200,1406552400,1406638800,1406725200,1406811600,1406898000,1407157200,1407243600,1407330000,1407416400,1407502800,1407762000,1407848400,1407934800,1408021200,1408107600,1408366800,1408453200,1408539600,1408626000,1408712400,1408971600,1409058000,1409144400,1409230800,1409317200,1409662800,1409749200,1409835600,1409922000,1410181200,1410267600,1410354000,1410440400,1410526800,1410786000,1410872400,1410958800,1411045200,1411131600,1411390800,1411477200,1411563600,1411650000,1411736400,1411995600,1412082000,1412168400,1412254800,1412341200,1412600400,1412686800,1412773200,1412859600,1412946000,1413205200,1413291600,1413378000,1413464400,1413550800,1413810000,1413896400,1413982800,1414069200,1414155600,1414414800,1414501200,1414587600,1414674000,1414760400,1415023200,1415109600,1415196000,1415282400,1415368800,1415628000,1415714400,1415800800,1415887200,1415973600,1416232800,1416319200,1416405600,1416492000,1416578400,1416837600,1416924000,1417010400,1417183200,1417442400,1417528800,1417615200,1417701600,1417788000,1418047200,1418133600,1418220000,1418306400,1418392800,1418652000,1418738400,1418824800,1418911200,1418997600,1419256800,1419343200,1419429600,1419602400,1419861600,1419948000,1420034400,1420207200,1420466400,1420552800,1420639200,1420725600,1420812000,1421071200,1421157600,1421244000,1421330400,1421416800,1421762400,1421848800,1421935200,1422021600,1422280800,1422367200,1422453600,1422540000,1422626400,1422885600,1422972000,1423058400,1423144800,1423231200,1423490400,1423576800,1423663200,1423749600,1423836000,1424181600,1424268000,1424354400,1424440800,1424700000,1424786400,1424872800,1424959200,1425045600,1425304800,1425391200,1425477600,1425564000,1425650400,1425906000,1425992400,1426078800,1426165200,1426251600,1426510800,1426597200,1426683600,1426770000,1426856400,1427115600,1427202000,1427288400,1427374800,1427461200,1427720400,1427806800,1427893200,1427979600,1428325200,1428411600,1428498000,1428584400,1428670800,1428930000,1429016400,1429102800,1429189200,1429275600,1429534800,1429621200,1429707600,1429794000,1429880400,1430139600,1430226000,1430312400,1430398800,1430485200,1430744400,1430830800,1430917200,1431003600,1431090000,1431349200,1431435600,1431522000,1431608400,1431694800,1431954000,1432040400,1432126800,1432213200,1432299600,1432645200,1432731600,1432818000,1432904400,1433163600,1433250000,1433336400,1433422800,1433509200,1433768400,1433854800,1433941200,1434027600,1434114000,1434373200,1434459600,1434546000,1434632400,1434718800,1434978000,1435064400,1435150800,1435237200,1435323600,1435582800,1435669200,1435755600,1435842000,1436187600,1436274000,1436360400,1436446800,1436533200,1436792400,1436878800,1436965200,1437051600,1437138000,1437397200,1437483600,1437570000,1437656400,1437742800,1438002000,1438088400,1438174800,1438261200,1438347600,1438606800,1438693200,1438779600,1438866000,1438952400,1439211600,1439298000,1439384400,1439470800,1439557200,1439816400,1439902800,1439989200,1440075600,1440162000,1440421200,1440507600,1440594000,1440680400,1440766800,1441026000,1441112400,1441198800,1441285200,1441371600,1441717200,1441803600,1441890000,1441976400,1442235600,1442322000,1442408400,1442494800,1442581200,1442840400,1442926800,1443013200,1443099600,1443186000,1443445200,1443531600,1443618000,1443704400,1443790800,1444050000,1444136400,1444222800,1444309200,1444395600,1444654800,1444741200,1444827600,1444914000,1445000400,1445259600,1445346000,1445432400,1445518800,1445605200,1445864400,1445950800,1446037200,1446123600,1446210000,1446472800,1446559200,1446645600,1446732000,1446818400,1447077600,1447164000,1447250400,1447336800,1447423200,1447682400,1447768800,1447855200,1447941600,1448028000,1448287200,1448373600,1448460000,1448632800,1448892000,1448978400,1449064800,1449151200,1449237600,1449496800,1449583200,1449669600,1449756000,1449842400,1450101600,1450188000,1450274400,1450360800,1450447200,1450706400,1450792800,1450879200,1450965600,1451311200,1451397600,1451484000,1451570400,1451916000,1452002400,1452088800,1452175200,1452261600,1452520800,1452607200,1452693600,1452780000,1452866400,1453212000,1453298400,1453384800,1453471200,1453730400,1453816800,1453903200,1453989600,1454076000,1454335200,1454421600,1454508000,1454594400,1454680800,1454940000,1455026400,1455112800,1455199200,1455285600,1455631200,1455717600,1455804000,1455890400,1456149600,1456236000,1456322400,1456408800,1456495200,1456754400,1456840800,1456927200,1457013600,1457100000,1457359200,1457445600,1457532000,1457618400,1457704800,1457960400,1458046800,1458133200,1458219600,1458306000,1458565200,1458651600,1458738000,1458824400,1459170000,1459256400,1459342800,1459429200,1459515600,1459774800,1459861200,1459947600,1460034000,1460120400,1460379600,1460466000,1460552400,1460638800,1460725200,1460984400,1461070800,1461157200,1461243600,1461330000,1461589200,1461675600,1461762000,1461848400,1461934800,1462194000,1462280400,1462366800,1462453200,1462539600,1462798800,1462885200,1462971600,1463058000,1463144400,1463403600,1463490000,1463576400,1463662800,1463749200,1464008400,1464094800,1464181200,1464267600,1464354000,1464699600,1464786000,1464872400,1464958800,1465218000,1465304400,1465390800,1465477200,1465563600,1465822800,1465909200,1465995600,1466082000,1466168400,1466427600,1466514000,1466600400,1466686800,1466773200,1467032400,1467118800,1467205200,1467291600,1467378000,1467723600,1467810000,1467896400,1467982800,1468242000,1468328400,1468414800,1468501200,1468587600,1468846800,1468933200,1469019600,1469106000,1469192400,1469451600,1469538000,1469624400,1469710800,1469797200,1470056400,1470142800,1470229200,1470315600,1470402000,1470661200,1470747600,1470834000,1470920400,1471006800,1471266000,1471352400,1471438800,1471525200,1471611600,1471870800,1471957200,1472043600,1472130000,1472216400,1472475600,1472562000,1472648400,1472734800,1472821200,1473166800,1473253200,1473339600,1473426000,1473685200,1473771600,1473858000,1473944400,1474030800,1474290000,1474376400,1474462800,1474549200,1474635600,1474894800,1474981200,1475067600,1475154000,1475240400,1475499600,1475586000,1475672400,1475758800,1475845200,1476104400,1476190800,1476277200,1476363600,1476450000,1476709200,1476795600,1476882000,1476968400,1477054800,1477314000,1477400400,1477486800,1477573200,1477659600,1477918800,1478005200,1478091600,1478178000,1478264400,1478527200,1478613600,1478700000,1478786400,1478872800,1479132000,1479218400,1479304800,1479391200,1479477600,1479736800,1479823200,1479909600,1480082400,1480341600,1480428000,1480514400,1480600800,1480687200,1480946400,1481032800,1481119200,1481205600,1481292000,1481551200,1481637600,1481724000,1481810400,1481896800,1482156000,1482242400,1482328800,1482415200,1482501600,1482847200,1482933600,1483020000,1483106400,1483452000,1483538400,1483624800,1483711200,1483970400,1484056800,1484143200,1484229600,1484316000,1484661600,1484748000,1484834400,1484920800,1485180000,1485266400,1485352800,1485439200,1485525600,1485784800,1485871200,1485957600,1486044000,1486130400,1486389600,1486476000,1486562400,1486648800,1486735200,1486994400,1487080800,1487167200,1487253600,1487340000,1487685600,1487772000,1487858400,1487944800,1488204000,1488290400,1488376800,1488463200,1488549600,1488808800,1488895200,1488981600,1489068000,1489154400,1489410000,1489496400,1489582800,1489669200,1489755600,1490014800,1490101200,1490187600,1490274000,1490360400,1490619600,1490706000,1490792400,1490878800,1490965200,1491224400,1491310800,1491397200,1491483600,1491570000,1491829200,1491915600,1492002000,1492088400,1492434000,1492520400,1492606800,1492693200,1492779600,1493038800,1493125200,1493211600,1493298000,1493384400,1493643600,1493730000,1493816400,1493902800,1493989200,1494248400,1494334800,1494421200,1494507600,1494594000,1494853200,1494939600,1495026000,1495112400,1495198800,1495458000,1495544400,1495630800,1495717200,1495803600,1496149200,1496235600,1496322000,1496408400,1496667600,1496754000,1496840400,1496926800,1497013200,1497272400,1497358800,1497445200,1497531600,1497618000,1497877200,1497963600,1498050000,1498136400,1498222800,1498482000,1498568400,1498654800,1498741200,1498827600,1499086800,1499259600,1499346000,1499432400,1499691600,1499778000,1499864400,1499950800,1500037200,1500296400,1500382800,1500469200,1500555600,1500642000,1500901200,1500987600,1501074000,1501160400,1501246800,1501506000,1501592400,1501678800,1501765200,1501851600,1502110800,1502197200,1502283600,1502370000,1502456400,1502715600,1502802000,1502888400,1502974800,1503061200,1503320400,1503406800,1503493200,1503579600,1503666000,1503925200,1504011600,1504098000,1504184400,1504270800,1504616400,1504702800,1504789200,1504875600,1505134800,1505221200,1505307600,1505394000,1505480400,1505739600,1505826000,1505912400,1505998800,1506085200,1506344400,1506430800,1506517200,1506603600,1506690000,1506949200,1507035600,1507122000,1507208400,1507294800,1507554000,1507640400,1507726800,1507813200,1507899600,1508158800,1508245200,1508331600,1508418000,1508504400,1508763600,1508850000,1508936400,1509022800,1509109200,1509368400,1509454800,1509541200,1509627600,1509714000,1509976800,1510063200,1510149600,1510236000,1510322400,1510581600,1510668000,1510754400,1510840800,1510927200,1511186400,1511272800,1511359200,1511532000,1511791200,1511877600,1511964000,1512050400,1512136800,1512396000,1512482400,1512568800,1512655200,1512741600,1513000800,1513087200,1513173600,1513260000,1513346400,1513605600,1513692000,1513778400,1513864800,1513951200,1514296800,1514383200,1514469600,1514556000,1514901600,1514988000,1515074400,1515160800,1515420000,1515506400,1515592800,1515679200,1515765600,1516111200,1516197600,1516284000,1516370400,1516629600,1516716000,1516802400,1516888800,1516975200,1517234400,1517320800,1517407200,1517493600,1517580000,1517839200,1517925600,1518012000,1518098400,1518184800,1518444000,1518530400,1518616800,1518703200,1518789600,1519135200,1519221600,1519308000,1519394400,1519653600,1519740000,1519826400,1519912800,1519999200,1520258400,1520344800,1520431200,1520517600,1520604000,1520859600,1520946000,1521032400,1521118800,1521205200,1521464400,1521550800,1521637200,1521723600,1521810000,1522069200,1522155600,1522242000,1522328400,1522674000,1522760400,1522846800,1522933200,1523019600,1523278800,1523365200,1523451600,1523538000,1523624400,1523883600,1523970000,1524056400,1524142800,1524229200,1524488400,1524574800,1524661200,1524747600,1524834000,1525093200,1525179600,1525266000,1525352400,1525438800,1525698000,1525784400,1525870800,1525957200,1526043600,1526302800,1526389200,1526475600,1526562000,1526648400,1526907600,1526994000,1527080400,1527166800,1527253200,1527598800,1527685200,1527771600,1527858000,1528117200,1528203600,1528290000,1528376400,1528462800,1528722000,1528808400,1528894800,1528981200,1529067600,1529326800,1529413200,1529499600,1529586000,1529672400,1529931600,1530018000,1530104400,1530190800,1530277200,1530536400,1530622800,1530795600,1530882000,1531141200,1531227600,1531314000,1531400400,1531486800,1531746000,1531832400,1531918800,1532005200,1532091600,1532350800,1532437200,1532523600,1532610000,1532696400,1532955600,1533042000,1533128400,1533214800,1533301200,1533560400,1533646800,1533733200,1533819600,1533906000,1534165200,1534251600,1534338000,1534424400,1534510800,1534770000,1534856400,1534942800,1535029200,1535115600,1535374800,1535461200,1535547600,1535634000,1535720400,1536066000,1536152400,1536238800,1536325200,1536584400,1536670800,1536757200,1536843600,1536930000,1537189200,1537275600,1537362000,1537448400,1537534800,1537794000,1537880400,1537966800,1538053200,1538139600,1538398800,1538485200,1538571600,1538658000,1538744400,1539003600,1539090000,1539176400,1539262800,1539349200,1539608400,1539694800,1539781200,1539867600,1539954000,1540213200,1540299600,1540386000,1540472400,1540558800,1540818000,1540904400,1540990800,1541077200,1541163600,1541426400,1541512800,1541599200,1541685600,1541772000,1542031200,1542117600,1542204000,1542290400,1542376800,1542636000,1542722400,1542808800,1542981600,1543240800,1543327200,1543413600,1543500000,1543586400,1543845600,1543932000,1544104800,1544191200,1544450400,1544536800,1544623200,1544709600,1544796000,1545055200,1545141600,1545228000,1545314400,1545400800,1545660000,1545832800,1545919200,1546005600,1546264800,1546437600,1546524000,1546610400,1546869600,1546956000,1547042400,1547128800,1547215200,1547474400,1547560800,1547647200,1547733600,1547820000,1548165600,1548252000,1548338400,1548424800,1548684000,1548770400,1548856800,1548943200,1549029600,1549288800,1549375200,1549461600,1549548000,1549634400,1549893600,1549980000,1550066400,1550152800,1550239200,1550584800,1550671200,1550757600,1550844000,1551103200,1551189600,1551276000,1551362400,1551448800,1551708000,1551794400,1551880800,1551967200,1552053600,1552309200,1552395600,1552482000,1552568400,1552654800,1552914000,1553000400,1553086800,1553173200,1553259600,1553518800,1553605200,1553691600,1553778000,1553864400,1554123600,1554210000,1554296400,1554382800,1554469200,1554728400,1554814800,1554901200,1554987600,1555074000,1555333200,1555419600,1555506000,1555592400,1555938000,1556024400,1556110800,1556197200,1556283600,1556542800,1556629200,1556715600,1556802000,1556888400,1557147600,1557234000,1557320400,1557406800,1557493200,1557752400,1557838800,1557925200,1558011600,1558098000,1558357200,1558443600,1558530000,1558616400,1558702800,1559048400,1559134800,1559221200,1559307600,1559566800,1559653200,1559739600,1559826000,1559912400,1560171600,1560258000,1560344400,1560430800,1560517200,1560776400,1560862800,1560949200,1561035600,1561122000,1561381200,1561467600,1561554000,1561640400,1561726800,1561986000,1562072400,1562158800,1562331600,1562590800,1562677200,1562763600,1562850000,1562936400,1563195600,1563282000,1563368400,1563454800,1563541200,1563800400,1563886800,1563973200,1564059600,1564146000,1564405200,1564491600,1564578000,1564664400,1564750800,1565010000,1565096400,1565182800,1565269200,1565355600,1565614800,1565701200,1565787600,1565874000,1565960400,1566219600,1566306000,1566392400,1566478800,1566565200,1566824400,1566910800,1566997200,1567083600,1567170000,1567515600,1567602000,1567688400,1567774800,1568034000,1568120400,1568206800,1568293200,1568379600,1568638800,1568725200,1568811600,1568898000,1568984400,1569243600,1569330000,1569416400,1569502800,1569589200,1569848400,1569934800,1570021200,1570107600,1570194000,1570453200,1570539600,1570626000,1570712400,1570798800,1571058000,1571144400,1571230800,1571317200,1571403600,1571662800,1571749200,1571835600,1571922000,1572008400,1572267600,1572354000,1572440400,1572526800,1572613200,1572876000,1572962400,1573048800,1573135200,1573221600,1573480800,1573567200,1573653600,1573740000,1573826400,1574085600,1574172000,1574258400,1574344800,1574431200,1574690400,1574776800,1574863200,1575036000,1575295200,1575381600,1575468000,1575554400,1575640800,1575900000,1575986400,1576072800,1576159200,1576245600,1576504800,1576591200,1576677600,1576764000,1576850400,1577109600,1577196000,1577368800,1577455200,1577714400,1577800800,1577973600,1578060000,1578319200,1578405600,1578492000,1578578400,1578664800,1578924000,1579010400,1579096800,1579183200,1579269600,1579615200,1579701600,1579788000,1579874400,1580133600,1580220000,1580306400,1580392800,1580479200,1580738400,1580824800,1580911200,1580997600,1581084000,1581343200,1581429600,1581516000,1581602400,1581688800,1582034400,1582120800,1582207200,1582293600,1582552800,1582639200,1582725600,1582812000,1582898400,1583157600,1583244000,1583330400,1583416800,1583503200,1583758800,1583845200,1583931600,1584018000,1584104400,1584363600,1584450000,1584536400,1584622800,1584709200,1584968400,1585054800,1585141200,1585227600,1585314000,1585573200,1585659600,1585746000,1585832400,1585918800,1586178000,1586264400,1586350800,1586437200,1586782800,1586869200,1586955600,1587042000,1587128400,1587387600,1587474000,1587560400,1587646800,1587733200,1587992400,1588078800,1588165200,1588251600,1588338000,1588597200,1588683600,1588770000,1588856400,1588942800,1589202000,1589288400,1589374800,1589461200,1589547600,1589806800,1589893200,1589979600,1590066000,1590152400,1590498000,1590584400,1590670800,1590757200,1591016400,1591102800,1591189200,1591275600,1591362000,1591621200,1591707600,1591794000,1591880400,1591966800,1592226000,1592312400,1592398800,1592485200,1592571600,1592830800,1592917200,1593003600,1593090000,1593176400,1593435600,1593522000,1593608400,1593694800,1594040400,1594126800,1594213200,1594299600,1594386000,1594645200,1594731600,1594818000,1594904400,1594990800,1595250000,1595336400,1595422800,1595509200,1595595600,1595854800,1595941200,1596027600,1596114000,1596200400,1596459600,1596546000,1596632400,1596718800,1596805200,1597064400,1597150800,1597237200,1597323600,1597410000,1597669200,1597755600,1597842000,1597928400,1598014800,1598274000,1598360400,1598446800,1598533200,1598619600,1598878800,1598965200,1599051600,1599138000,1599224400,1599570000,1599656400,1599742800,1599829200,1600088400,1600174800,1600261200,1600347600,1600434000,1600693200,1600779600,1600866000,1600952400,1601038800,1601298000,1601384400,1601470800,1601557200,1601643600,1601902800,1601989200,1602075600,1602162000,1602248400,1602507600,1602594000,1602680400,1602766800,1602853200,1603112400,1603198800,1603285200,1603371600,1603458000,1603717200,1603803600,1603890000,1603976400,1604062800,1604325600,1604412000,1604498400,1604584800,1604671200,1604930400,1605016800,1605103200,1605189600,1605276000,1605535200,1605621600,1605708000,1605794400,1605880800,1606140000,1606226400,1606312800,1606485600,1606744800,1606831200,1606917600,1607004000,1607090400,1607349600,1607436000,1607522400,1607608800,1607695200,1607954400,1608040800,1608127200,1608213600,1608300000,1608559200,1608645600,1608732000,1608818400,1609164000,1609250400,1609336800,1609423200,1609768800,1609855200,1609941600,1610028000,1610114400,1610373600,1610460000,1610546400,1610632800,1610719200,1611064800,1611151200,1611237600,1611324000,1611583200,1611669600,1611756000,1611842400,1611928800,1612188000,1612274400,1612360800,1612447200,1612533600,1612792800,1612879200,1612965600,1613052000,1613138400,1613484000,1613570400,1613656800,1613743200,1614002400,1614088800,1614175200,1614261600,1614348000,1614607200,1614693600,1614780000,1614866400,1614952800,1615212000,1615298400,1615384800,1615471200,1615557600,1615813200,1615899600,1615986000,1616072400,1616158800,1616418000,1616504400,1616590800,1616677200,1616763600,1617022800,1617109200,1617195600,1617282000,1617627600,1617714000,1617800400,1617886800,1617973200,1618232400,1618318800,1618405200,1618491600,1618578000,1618837200,1618923600,1619010000,1619096400,1619182800,1619442000,1619528400,1619614800,1619701200,1619787600,1620046800,1620133200,1620219600,1620306000,1620392400,1620651600,1620738000,1620824400,1620910800,1620997200,1621256400,1621342800,1621429200,1621515600,1621602000,1621861200,1621947600,1622034000,1622120400,1622206800,1622552400,1622638800,1622725200,1622811600,1623070800,1623157200,1623243600,1623330000,1623416400,1623675600,1623762000,1623848400,1623934800,1624021200,1624280400,1624366800,1624453200,1624539600,1624626000,1624885200,1624971600,1625058000,1625144400,1625230800,1625576400,1625662800,1625749200,1625835600,1626094800,1626181200,1626267600,1626354000,1626440400,1626699600,1626786000,1626872400,1626958800,1627045200,1627304400,1627390800,1627477200,1627563600,1627650000,1627909200,1627995600,1628082000,1628168400,1628254800,1628514000,1628600400,1628686800,1628773200,1628859600,1629118800,1629205200,1629291600,1629378000,1629464400,1629723600,1629810000,1629896400,1629982800,1630069200,1630328400,1630414800,1630501200,1630587600,1630674000,1631019600,1631106000,1631192400,1631278800,1631538000,1631624400,1631710800,1631797200,1631883600,1632142800,1632229200,1632315600,1632402000,1632488400,1632747600,1632834000,1632920400,1633006800,1633093200,1633352400,1633438800,1633525200,1633611600,1633698000,1633957200,1634043600,1634130000,1634216400,1634302800,1634562000,1634648400,1634734800,1634821200,1634907600,1635166800,1635253200,1635339600,1635426000,1635512400,1635771600,1635858000,1635944400,1636030800,1636117200,1636380000,1636466400,1636552800,1636639200,1636725600,1636984800,1637071200,1637157600,1637244000,1637330400,1637589600,1637676000,1637762400,1637935200,1638194400,1638280800,1638367200,1638453600,1638540000,1638799200,1638885600,1638972000,1639058400,1639144800,1639404000,1639490400,1639576800,1639663200,1639749600,1640008800,1640095200,1640181600,1640268000,1640613600,1640700000,1640786400,1640872800,1640959200,1641218400,1641304800,1641391200,1641477600,1641564000,1641823200,1641909600,1641996000,1642082400,1642168800,1642514400,1642600800,1642687200,1642773600,1643032800,1643119200,1643205600,1643292000,1643378400,1643637600,1643724000,1643810400,1643896800,1643983200,1644242400,1644328800,1644415200,1644501600,1644588000,1644847200,1644933600,1645020000,1645106400,1645192800,1645538400,1645624800,1645711200,1645797600,1646056800,1646143200,1646229600,1646316000,1646402400,1646661600,1646748000,1646834400,1646920800,1647007200,1647262800,1647349200,1647435600,1647522000,1647608400,1647867600,1647954000,1648040400,1648126800,1648213200,1648472400,1648558800,1648645200,1648731600,1648818000,1649077200,1649163600,1649250000,1649336400,1649422800,1649682000,1649768400,1649854800,1649941200,1650286800,1650373200,1650459600,1650546000,1650632400,1650891600,1650978000,1651064400,1651150800,1651237200,1651496400,1651582800,1651669200,1651755600,1651842000,1652101200,1652187600,1652274000,1652360400,1652446800,1652706000,1652792400,1652878800,1652965200,1653051600,1653310800,1653397200,1653483600,1653570000,1653656400,1654002000,1654088400,1654174800,1654261200,1654520400,1654606800,1654693200,1654779600,1654866000,1655125200,1655211600,1655298000,1655384400,1655470800,1655816400,1655902800,1655989200,1656075600,1656334800,1656421200,1656507600,1656594000,1656680400,1657026000,1657112400,1657198800,1657285200,1657544400,1657630800,1657717200,1657803600,1657890000,1658149200,1658235600,1658322000,1658408400,1658494800,1658754000,1658840400,1658926800,1659013200,1659099600,1659358800,1659445200,1659531600,1659618000,1659704400,1659963600,1660050000,1660136400,1660222800,1660309200,1660568400,1660654800,1660741200,1660827600,1660914000,1661173200,1661259600,1661346000,1661432400,1661518800,1661778000,1661864400,1661950800,1662037200,1662123600,1662469200,1662555600,1662642000,1662728400,1662987600,1663074000,1663160400,1663246800,1663333200,1663592400,1663678800,1663765200,1663851600,1663938000,1664197200,1664283600,1664370000,1664456400,1664542800,1664802000,1664888400,1664974800,1665061200,1665147600,1665406800,1665493200,1665579600,1665666000,1665752400,1666011600,1666098000,1666184400,1666270800,1666357200,1666616400,1666702800,1666789200,1666875600,1666962000,1667221200,1667307600,1667394000,1667480400,1667566800,1667829600,1667916000,1668002400,1668088800,1668175200,1668434400,1668520800,1668607200,1668693600,1668780000,1669039200,1669125600,1669212000,1669384800,1669644000,1669730400,1669816800,1669903200,1669989600,1670248800,1670335200,1670421600,1670508000,1670594400,1670853600,1670940000,1671026400,1671112800,1671199200,1671458400,1671544800,1671631200,1671717600,1671804000,1672149600,1672236000,1672322400,1672408800,1672754400,1672840800,1672927200,1673013600,1673272800,1673359200,1673445600,1673532000,1673618400,1673964000,1674050400,1674136800,1674223200,1674482400,1674568800,1674655200,1674741600,1674828000,1675087200,1675173600,1675260000,1675346400,1675432800,1675692000,1675778400,1675864800,1675951200,1676037600,1676296800,1676383200,1676469600,1676556000,1676642400,1676988000,1677074400,1677160800,1677247200,1677506400,1677592800,1677679200,1677765600,1677852000,1678111200,1678197600,1678284000,1678370400,1678456800,1678712400,1678798800,1678885200,1678971600,1679058000,1679317200,1679403600,1679490000,1679576400,1679662800,1679922000,1680008400,1680094800,1680181200,1680267600,1680526800,1680613200,1680699600,1680786000,1681131600,1681218000,1681304400,1681390800,1681477200,1681736400,1681822800,1681909200,1681995600,1682082000,1682341200,1682427600,1682514000,1682600400,1682686800,1682946000,1683032400,1683118800,1683205200,1683291600,1683550800,1683637200,1683723600,1683810000,1683896400,1684155600,1684242000,1684328400,1684414800,1684501200,1684760400,1684846800,1684933200,1685019600,1685106000,1685451600,1685538000,1685624400,1685710800,1685970000,1686056400,1686142800,1686229200,1686315600,1686574800,1686661200,1686747600,1686834000,1686920400,1687266000,1687352400,1687438800,1687525200,1687784400,1687870800,1687957200,1688043600,1688130000,1688389200],"open":[15.273,15.179,15.233,15.346,15.478,15.468,15.338,15.214,15.676,15.739,15.546,15.743,16.07,16.25,16.277,16.357,16.596,16.715,16.564,16.566,16.38,16.316,16.819,17.781,17.729,17.862,18.012,18.204,17.985,18.035,17.974,17.884,17.786,17.357,17.559,17.571,17.611,17.841,17.866,17.801,18.036,18.079,16.679,16.732,16.762,16.464,15.999,16.542,16.811,17.071,17.718,17.674,17.471,17.357,17.278,17.045,17.087,17.344,17.518,17.281,17.377,17.498,17.309,17.547,17.392,17.494,17.768,17.885,17.856,18.071,18.277,18.8,18.536,18.75,18.976,18.894,19.152,18.557,18.75,18.715,18.611,18.735,18.72,18.556,18.378,18.571,18.488,18.5,18.672,18.806,18.75,18.537,18.544,18.486,18.554,18.608,18.719,19.154,19.624,19.929,19.939,20.196,20.452,20.207,20.032,20.128,20.25,20.076,20.102,19.822,19.85,19.632,19.625,19.48,20.286,20.353,20.289,20.136,19.909,19.792,19.846,19.745,19.195,19.44,19.243,19.529,19.28,18.925,19.222,19.769,19.818,19.696,19.321,19.676,19.641,19.786,19.645,18.17,17.998,17.948,17.685,17.95,18.066,18.091,18.216,18.621,18.524,18.95,19.177,19.095,19.374,19.5,19.455,19.035,19.028,18.684,18.906,18.7,18.469,18.896,18.694,18.964,18.961,19.028,18.967,18.87,19.123,19.09,19.194,18.885,18.846,18.782,19.009,18.925,18.997,19.229,19.339,19.519,19.286,19.226,19.258,19.206,19.371,19.335,19.279,18.858,18.757,18.666,18.953,18.536,18.639,18.581,18.502,18.571,18.762,18.868,18.895,20.293,20.162,20.457,21.205,21.166,21.143,21.155,21.076,21.493,21.259,21.009,20.876,20.982,21.143,21.158,21.239,21.022,21.352,21.59,21.565,21.664,21.687,21.996,22.358,22.423,22.785,22.641,22.445,22.766,23.079,23.211,23.175,23.683,23.532,23.51,23.05,22.878,23.077,23.067,23.073,22.962,22.83,22.688,22.552,22.593,22.705,23.025,23.38,23.466,23.417,23.535,24.067,23.86,23.44,23.84,23.965,24.2,24.243,23.757,23.405,23.747,23.67,23.855,24.259,24.212,24.455,24.833,24.61,24.29,23.725,24.093,23.84,23.688,23.733,23.565,23.817,24.01,24.038,24.333,24.475,24.622,24.853,25.11,25.142,25.073,25.448,25.355,25.255,25.397,25.715,25.765,25.775,24.712,24.7,24.825,24.77,24.503,25.103,25.302,25.702,24.95,25.317,25.483,25.573,25.45,25.15,25.54,25.128,24.632,24.663,25.202,25.147,24.817,24.86,24.987,24.858,24.69,25.385,25.173,25.333,25.097,24.493,23.888,24.375,24.579,25.755,25.71,26.02,26.295,26.212,26.35,26.663,26.74,27.003,27.055,27.34,27.275,27.15,27.188,27.255,27.175,27.345,27.95,28.288,28.567,28.485,28.86,28.728,29.378,29.212,29.767,29.485,29.817,29.702,28.375,28.938,28.942,28.997,28.525,27.548,28.603,28.065,27.615,27.675,26.593,26.78,27.968,28.065,28.04,28.308,28.145,28.025,28.448,28.41,28.205,27.847,27.073,26.635,26.8,27.308,28.167,28.15,27.858,27.26,27.5,26.757,26.96,27.237,27.565,28.075,28.435,28.105,29.406,29.08,29.6,29.513,29.625,29.625,30.005,30.005,29.638,30.042,30.692,31.515,31.82,31.872,31.906,32.12,32.155,32.505,33.235,32.89,32.196,32.5,32.312,32.24,32.275,32.145,32.1,31.99,31.603,31.188,30.577,31.1,30.97,31.475,31.75,32.188,32.062,31.78,31.808,31.635,30.69,31.142,31.013,31.522,31.205,31.257,31.118,31.91,31.462,31.462,31.487,32.092,31.75,31.603,31.57,31.388,31.392,32.025,31.747,32.075,32.623,33.077,33.614,32.54,31.875,31.525,32.375,32.037,31.64,31.192,31.67,31.847,31.4,31.538,31.853,32.268,32.095,32.673,32.5,32.518,32.9,33.15,32.585,32.965,32.807,32.8,32.465,32.665,32.395,32.375,32.225,31.675,31.98,32.295,32.046,31.525,31.757,31.93,31.808,31.927,31.872,31.87,31.802,32.215,31.917,31.365,31.392,31.725,31.608,31.235,31.472,31.12,30.962,30.485,31.257,31.51,31.43,31.935,32.27,32.743,33.213,30.497,31.55,31.33,30.772,30.845,30.788,30.58,30.65,30.375,29.355,28.237,28.993,28.645,29.132,29.452,28.132,29.01,28.58,29.01,29.108,29.025,28.52,27.608,23.718,27.778,26.771,28.058,28.042,28.007,27.538,27.558,28.122,27.243,27.913,28.44,27.567,27.948,29.145,28.983,29.062,28.915,28.052,28.417,28.345,28.407,28.312,29.11,28.462,28.208,27.542,27.267,27.003,27.47,27.657,27.935,27.548,27.5,28.183,27.705,27.823,27.733,27.945,27.7,27.835,28.5,28.583,29.175,29.52,28.85,29.233,29.675,30.247,29.968,30.198,30.782,30.462,30.278,30.24,29.225,29.093,29.065,28.8,27.845,28.73,28.94,29.41,29.8,29.817,29.333,29.802,29.573,29.497,29.688,29.263,29.138,28.823,29.745,29.38,29.41,29.01,28.798,28.045,27.985,27.767,28.005,27.228,26.82,26.85,26.817,27.25,26.897,26.74,27.145,26.753,25.653,26.438,25.14,24.67,24.638,24.743,25.138,25.08,24.49,24.05,24.603,23.775,24.265,24.657,25.38,24.983,24.01,23.448,23.698,24.118,23.855,23.75,23.965,24.13,23.282,23.573,23.98,23.448,23.548,23.755,24.167,24.71,24,24.077,24.1,23.495,24.013,24.3,24.215,24.413,25.128,25.145,25.593,25.597,25.195,25.327,25.353,25.56,25.478,25.99,26.153,26.38,26.585,26.483,26.312,26.62,26.368,26.5,26.222,27.163,27.43,27.195,27.605,27.378,27.558,27.487,27.228,27.243,27.335,27.7,27.905,28.028,27.222,26.97,26.66,26.733,26.253,26.25,25.978,24,24.403,23.497,23.491,23.55,23.8,23.5,23.343,23.25,23.333,23.37,23.18,22.5,23.097,23.638,23.54,23.66,23.66,23.968,24.305,24.667,24.92,24.86,24.9,24.755,24.4,24.448,24.497,24.812,24.755,24.625,24.632,24.673,24.33,24.455,24.112,24.155,24,23.735,24.062,23.985,23.228,23.25,23.225,23.493,23.61,23.872,23.847,23.65,23.925,24.122,24.188,24.292,24.353,24.347,24.73,24.675,24.89,25,24.958,24.815,24.562,24.205,26.066,25.708,26.048,26.103,26.513,26.202,26.395,26.567,26.88,27.058,27.177,27.13,26.945,27.035,27.407,27.275,27.308,27.192,27.215,27.147,27.141,26.847,26.853,26.655,26.45,26.415,26.535,26.925,26.975,26.958,26.812,26.16,25.663,26.878,27.183,28.465,28.78,28.798,28.263,28.462,28.587,28.605,27.91,28.25,28.423,28.29,28.115,28.177,28.265,28.35,28.425,28.577,28.755,29.425,29.337,29.198,29.47,29.333,29.545,29.312,29.215,29.202,29.275,29.487,28.577,28.847,28.468,28.413,28.365,27.85,27.745,27.132,27.52,27.577,27.47,27.772,26.78,26.927,26.642,26.675,27.452,27.43,27.53,27.987,27.84,27.782,27.858,27.695,27.9,27.591,27.292,27.5,27.375,27.315,27.715,28.077,28.323,28.46,28.76,28.845,29.118,28.95,29.185,29.2,29.087,28.897,29.13,29.38,29.112,29.163,28.95,28.962,28.98,29.195,29.487,29.692,29.685,29.724,29.778,29.585,30,29.85,30.112,30,29.888,30.105,30.417,30.535,30.233,30.288,31.757,31.994,32.077,32.283,32.635,32.838,32.912,33.115,33.27,33.368,33.88,33.917,33.775,34.057,34.107,34.345,33.978,34.285,34.27,34.472,35,34.695,34.841,34.765,34.737,34.685,34.812,34.713,34.825,34.853,35.18,35.25,35.1,35.528,34.961,35.315,35.375,34.847,35.228,35.92,36.048,35.93,35.928,35.812,36.055,36.072,35.932,35.9,35.735,35.4,35.478,35.37,35.353,35.47,35.305,35.61,35.875,35.978,36.118,35.981,36.022,36.275,36.885,36.397,36.63,36.69,37.257,38.467,38.408,38.112,38.675,39.002,38.985,38.4,37.818,38.345,38.5,38.725,38.46,38.432,38.5,38.355,38.493,38.292,38.395,38.585,38.475,38.755,38.812,38.798,36.435,36.79,36.875,35.83,35.945,35.915,36.717,36.38,36.443,36.283,36.792,36.252,36.123,36.178,36.112,36.22,35.923,35.755,35.725,36.028,36.182,36.467,36.375,36.993,37.205,37.3,37.62,37.875,37.498,37.645,37.95,38.338,38.438,37.472,37.475,37.275,39.82,39.263,39.018,39.265,39.65,39.815,39.975,39.15,39.83,40.165,40.485,40.13,39.465,39.375,39.557,39.768,40.107,39.912,40.035,40.025,40.95,40.91,41.2,40.938,40.678,40.522,40.215,40.125,40.653,39.967,39.748,39.618,40.028,39.877,39.475,38.95,38.005,37.498,37.945,38.45,38.472,38.303,38.565,38.502,38.408,38.545,38.743,38.952,39.014,38.993,39.088,39.182,39.475,39.945,40.105,39.188,39.153,39.222,39.072,39.228,39.307,39.822,40.972,41.975,42.467,41.91,43.5,43.091,43.478,43.665,43.778,43.778,43.375,43.26,42.493,42.795,42.76,42.572,42.695,43.34,43.775,43.763,43.575,43.158,42.607,42.487,43.12,42.265,41.875,42.257,42.623,42.3,43.037,43.125,43.1,43.408,43.72,43.757,43.717,43.542,43.67,42.7,42.525,42.75,42.63,42.54,43.132,43.135,43.36,43.588,43.638,43.29,43.647,44.045,44.475,44.037,44.842,44.653,44.325,44.325,44.312,43.626,43,42.54,41.381,41.717,41.791,41.5,39.775,38.708,40.771,40.072,39.268,39.625,40.487,40.761,42.447,43.09,43.013,43.208,42.95,43.417,44.088,44.775,44.815,44.635,43.2,43.803,44.478,43.735,43.87,44.49,45.072,45.647,45.08,44.625,44.662,44.33,43.81,43.76,42.5,42.097,42.018,43.42,41.812,41.951,41.97,41.91,41.22,43.145,42.743,42.47,43.25,43.057,43.353,43.695,43.758,44.123,44.452,43.737,42.649,41.709,41.417,40.655,41.03,41,40.533,41.603,43.806,43.97,44.562,46.295,46.248,46.638,46.935,47.373,47.252,46.695,46.518,47,46.798,47,47.094,46.588,47.193,47.057,46.9,46.93,46.805,46.998,47.909,48.266,48.408,48.535,47.792,47.838,47.846,48.105,47.888,47.507,46.97,46.285,46.588,46.812,46.53,45.85,45.748,46.307,46.025,46.572,45.955,46.947,46.315,46.355,47.375,47.678,47.125,47.382,47.77,47.88,47.438,47.945,47.423,47.945,47.67,48.112,48.265,48.653,48.748,47.975,47.575,49.783,50.145,51.757,52,52.33,51.513,51.82,51.84,51.925,52.539,52.305,52.938,53.36,54.525,54.2,53.525,53.662,54.15,54.287,54.752,55.037,55.812,56.627,57.103,57.248,56.557,55.463,55.237,54.502,56.235,55.88,56.438,55.537,54.447,54.625,55.06,55.195,54.205,54.938,55.25,55.955,56.197,56.987,56.812,57.513,57.695,56.99,55.553,55.91,56.365,53.63,55.105,55.29,54.732,55.575,54.465,54.515,54.947,53.958,55.65,54.428,53.975,54.798,52.787,54.22,54.763,52.388,51.075,50.48,51.493,52.495,51.388,49.75,47.908,48.475,47.097,47.625,47.5,44.592,44.932,43.735,43.56,42.877,44.182,45.665,45.072,46.115,45.237,42.94,43.373,41.25,42.915,42.6,42.623,42.25,41.362,41.345,41.5,40.1,39.215,37.037,37.075,38.96,39.375,39.632,38.722,35.995,36.132,37.175,37.39,37.822,38.125,38.22,37.713,37.568,38.27,38.55,39.375,39.103,38.537,38.528,38.87,38.947,39.062,40.812,41.528,41.74,41.853,43.215,43.662,43.1,42.248,42.763,42.525,42.847,42.428,42.812,42.428,42.798,42.95,42.895,43.54,43.428,43.303,43.58,43.57,43.923,43.985,43.667,43.467,42.58,43.873,45,45.562,45.975,46.213,46.45,47.088,46.557,47.505,48.835,47.877,47.916,47.188,47.237,47.458,47.91,47.772,48.312,48.697,49.112,49.105,50.08,49.67,50.213,49.8,49.645,49.865,49.885,50.78,50.708,51.107,51.84,51.708,51.225,51.1,50.765,52.47,52.46,52.722,51.072,51.47,50.475,50.1,49.355,46.928,46.603,46.568,47.478,46.732,45.88,46.305,46.165,44.95,45.05,44.73,44.105,44.487,44.057,43.9,43.86,46.07,45.77,46.627,47.952,48.715,48.487,48.675,47.886,48.225,49.013,49.92,50.092,49.7,49.635,49.607,49.443,50.072,49.67,50.792,50.353,50.82,50.838,50.202,49.8,50.463,50.827,50.612,51.022,51.147,51.013,51,51.447,50.912,52.115,51.917,52.222,51.87,52.115,52.19,54.105,53.475,51.382,49.498,49.077,48.853,50.05,50.325,49.905,50.255,50.79,50.865,51.07,52.655,52.72,53.248,53.298,52.357,51.465,51.965,51.025,52.125,52.54,51.607,52.097,53,53.513,53.71,53.465,54.518,56.2,55,54.432,54.99,55.265,55.502,55.345,54.737,55.257,54.638,55,55.135,55.225,56.268,55.765,54.607,56.41,56.568,56.455,56.757,56.982,58.237,58.725,59.097,58.342,58.772,58.647,59.38,60.29,60.525,61.127,60.79,61.855,62.243,61.19,61.81,62.385,64.332,64.262,64.192,64.685,64.673,64.575,65.387,65.283,65.938,65.92,66.45,66.975,66.385,65.923,65.647,65.677,66.735,66.395,66.65,66.817,64.577,65.268,65.948,66.87,67.5,67.15,67.202,66.945,67.865,69.25,69.893,69.95,69.875,70.558,70.132,71.173,71.205,72.78,72.365,72.482,74.06,74.287,73.448,74.96,74.29,76.809,77.65,77.91,79.175,77.963,78.397,79.067,79.298,79.645,79.48,80.062,77.515,78.15,81.113,80.136,80.232,76.075,78.827,80.88,80.643,80.592,78.545,80.9,80.368,81.048,81.185,78.84,80,80.658,79.655,74.315,75.238,71.632,70.275,64.315,70.57,75.918,74.11,73.88,70.5,65.938,69.285,69.348,63.985,66.223,60.487,61.877,59.943,61.846,61.795,57.02,59.09,62.688,61.63,63.188,62.685,63.9,61.625,60.085,60.7,62.725,67.7,65.685,67.175,67.077,70,70.6,71.845,71.173,69.488,69.07,68.402,68.967,69.3,70.45,71.27,71.183,72.49,71.562,72.293,73.765,75.115,75.805,76.41,77.025,79.457,78.037,76.128,75.088,78.293,78.757,79.17,79.665,78.942,80.875,79.035,79.192,79.812,79.438,80.186,81.165,81.098,80.838,82.562,83.035,86.975,87.327,86.18,83.312,87.865,88.787,87.853,88.659,87.835,91,91.25,90.175,91.103,88.312,90.02,91.28,91.963,92.5,93.853,94.18,96.262,95.335,97.265,94.84,98.99,96.562,96.988,96.416,99.173,96.692,96.998,90.988,93.71,94.368,93.75,94.188,102.884,108.2,109.132,109.378,110.405,113.205,112.6,111.969,110.497,114.43,114.829,116.062,114.353,115.983,115.75,119.262,128.697,124.698,126.179,127.143,126.012,127.58,132.76,137.59,126.91,120.07,113.95,117.26,120.36,114.57,114.72,118.33,115.23,109.72,110.4,104.54,112.68,111.62,105.17,108.43,115.01,114.55,113.79,117.64,112.89,113.91,115.7,114.62,116.25,115.28,120.06,125.27,121,118.72,121.28,119.96,116.2,116.67,117.45,116.39,114.01,115.49,115.05,112.37,111.06,109.11,109.66,114.14,117.95,118.32,120.5,115.55,117.19,119.62,119.44,118.92,119.55,118.61,117.59,118.64,117.18,113.91,115.55,116.57,116.97,121.01,122.02,123.52,122.6,122.31,124.37,124.53,120.5,122.43,122.6,124.34,127.41,128.9,128.96,125.02,131.61,132.16,131.32,133.99,138.05,135.58,134.08,133.52,128.89,127.72,128.36,132.43,129.19,128.5,128.76,130.8,128.78,127.78,128.66,133.8,136.28,143.07,143.6,143.43,139.52,135.83,133.75,135.73,135.76,136.3,137.35,136.03,136.62,136.48,135.9,134.35,135.49,131.25,129.2,130.24,128.01,123.76,124.94,124.68,122.59,123.75,128.41,124.81,121.75,120.98,120.93,119.03,121.69,122.54,120.4,121.41,125.7,124.05,122.88,119.9,120.33,123.33,122.82,119.54,120.35,121.65,120.11,121.65,123.66,123.87,126.5,125.83,128.95,129.8,132.52,132.44,134.94,133.82,134.3,133.51,135.02,132.36,133.04,132.16,134.83,135.01,134.31,136.47,131.78,132.04,131.19,129.2,127.89,130.85,129.41,123.5,123.4,124.58,126.25,126.82,126.56,123.16,125.23,127.82,126.01,127.82,126.955,126.44,125.57,125.08,124.28,124.68,124.07,126.17,126.6,127.21,127.02,126.53,127.82,129.94,130.37,129.8,130.71,130.3,132.13,133.77,134.45,133.46,133.41,134.8,136.17,136.6,137.9,140.07,143.535,141.58,142.75,146.21,144.03,148.1,149.24,148.46,143.75,143.46,145.53,145.935,147.55,148.27,149.12,144.81,144.685,144.38,146.36,145.81,147.27,146.98,146.35,146.2,146.44,146.05,146.19,148.97,148.535,150.23,149.8,145.03,147.44,148.31,149.45,149.81,148.35,147.48,149,152.66,152.83,153.87,153.76,154.97,156.98,155.49,155,150.63,150.35,148.56,148.44,148.82,143.8,143.93,144.45,146.65,145.66,145.47,143.25,142.47,143.66,141.9,141.76,139.49,139.47,143.06,144.03,142.27,143.23,141.235,142.11,143.77,143.445,147.01,148.7,148.81,149.69,148.68,149.33,149.36,149.82,147.215,148.985,148.66,150.39,151.58,151.89,151.41,150.2,150.02,148.96,148.43,150.37,149.94,150.995,153.71,157.65,161.68,161.12,160.75,159.565,159.37,159.985,167.48,158.735,164.02,164.29,169.08,172.125,174.91,175.205,181.115,175.25,175.11,179.28,169.93,168.28,171.555,173.04,175.85,177.085,180.16,179.33,179.47,178.085,177.83,182.63,179.61,172.7,172.89,169.08,172.32,176.12,175.78,171.34,171.51,170,166.98,164.415,160.02,158.98,163.5,162.45,165.71,170.16,174.01,174.745,174.48,171.68,172.86,171.73,176.05,174.14,172.33,167.37,170.97,171.85,171.03,169.82,164.98,165.54,152.58,163.84,163.06,164.695,164.39,168.47,164.49,163.36,158.82,161.475,160.2,158.93,151.45,150.9,157.05,158.61,160.51,163.51,165.51,167.99,171.06,173.88,172.17,176.69,178.55,177.84,174.03,174.57,177.5,172.36,171.16,171.78,168.71,168.02,167.39,170.62,163.92,165.02,168.76,168.91,166.46,161.12,162.25,155.91,159.25,161.84,156.71,158.15,159.67,163.85,156.01,154.925,155.52,153.5,142.77,144.59,145.55,148.86,146.85,139.88,139.09,137.79,140.805,138.43,137.39,145.39,149.07,149.9,147.83,146.9,147.03,144.345,148.58,147.08,140.28,132.87,133.13,134.29,132.08,130.065,133.42,134.79,136.82,139.9,142.695,142.13,137.46,137.25,136.04,137.77,141.355,143.29,145.265,145.67,145.76,142.99,144.08,149.78,150.74,147.92,151.12,154.5,155.39,154.01,152.265,152.58,156.98,161.24,161.01,160.1,160.84,166.005,163.21,166.37,164.02,167.68,170.06,169.82,171.52,172.78,172.77,173.75,173.03,169.69,167.08,167.32,168.78,170.57,161.145,162.13,160.305,156.64,159.75,156.47,154.825,154.64,155.47,159.59,159.9,154.785,154.65,151.21,149.31,153.4,157.34,152.38,151.19,149.66,152.74,147.64,146.1,141.28,138.21,145.03,144.075,145.81,142.54,140.42,139.9,139.13,134.99,144.31,141.065,145.49,141.69,143.02,142.87,147.185,150.09,150.96,148.07,148.2,153.155,155.08,148.945,142.06,142.09,137.11,140.41,138.5,141.24,145.82,148.97,152.215,149.13,146.43,152.305,150.16,148.13,149.45,148.305,145.14,144.29,141.395,148.21,145.96,147.77,147.075,142.19,142.36,142.34,142.7,149.5,145.35,141.11,136.685,135.11,131.39,132.98,134.352,130.92,131.38,129.67,127.99,128.41,130.28,126.89,127.13,126.01,130.465,130.26,131.25,133.88,132.03,134.83,136.815,134.08,135.28,138.12,140.305,140.89,143.17,143.155,144.955,142.7,143.97,148.9,148.03,152.575,150.64,153.88,153.775,149.46,150.952,152.12,153.11,153.51,152.35,150.2,148.87,150.09,147.11,147.71,147.05,146.83,144.38,148.045,153.785,153.7,152.81,153.559,150.21,147.805,151.28,151.19,152.16,156.08,155.07,157.32,159.3,158.83,158.86,159.94,157.97,159.37,161.53,162.44,164.27,166.595,164.74,162.43,161.42,162.35,161.22,161.63,164.59,165.09,166.1,165.8,166.09,165.05,165,165.19,163.055,165.19,168.49,169.28,170.09,169.5,164.89,170.975,172.48,173.05,173.02,173.85,173.62,173.16,171.99,171.71,173,176.39,173.98,173.13,171.09,172.41,173.32,176.96,177.325,177.7,181.03,182.63,179.965,178.44,177.895,181.5,181.27,182.8,183.37,183.96,186.73,184.41,184.9,183.74,185.55,186.83,185.89,187.93,189.08,191.63,193.83],"high":[15.35,15.409,15.382,15.436,15.531,15.499,15.348,15.249,15.878,15.764,15.751,16.071,16.327,16.334,16.314,16.53,16.81,16.853,16.679,16.575,16.445,16.737,17.666,18.009,17.943,17.962,18.348,18.235,18.112,18.057,17.977,18.221,17.947,17.707,17.732,17.605,17.879,17.937,17.881,17.835,18.14,18.123,16.917,16.979,16.851,16.486,16.418,16.655,16.994,17.091,17.747,17.695,17.487,17.449,17.31,17.202,17.469,17.564,17.584,17.307,17.595,17.523,17.421,17.585,17.637,17.771,17.929,17.947,18.028,18.188,18.725,18.873,18.774,19.017,19.044,18.964,19.259,18.84,18.839,18.743,18.815,18.889,18.745,18.685,18.612,18.631,18.711,18.652,18.903,18.896,18.828,18.692,18.586,18.615,18.649,18.781,19.148,19.5,19.94,20.155,20.228,20.328,20.541,20.241,20.342,20.281,20.392,20.191,20.103,20.094,19.98,19.695,19.643,19.7,20.383,20.424,20.339,20.157,20.003,20.046,19.894,19.775,19.529,19.499,19.484,19.531,19.314,19.375,19.526,20.007,19.887,19.717,19.645,19.903,19.875,19.844,19.814,18.393,18.12,18.089,17.912,18.133,18.195,18.403,18.339,18.676,19,19.205,19.27,19.459,19.499,19.685,19.532,19.179,19.092,18.926,18.913,18.75,18.885,19.027,18.952,19.023,19.098,19.087,18.999,19.047,19.241,19.191,19.274,18.96,18.927,18.999,19.151,19.024,19.062,19.304,19.491,19.607,19.339,19.248,19.315,19.352,19.41,19.375,19.286,18.961,18.79,18.946,19.009,18.672,18.649,18.63,18.61,18.849,19.005,18.994,18.969,20.357,20.428,21.277,21.285,21.408,21.243,21.221,21.464,21.586,21.332,21.229,20.937,21.202,21.234,21.336,21.307,21.34,21.69,21.657,21.668,21.78,21.955,22.352,22.494,22.745,23.006,22.672,22.812,23.139,23.192,23.259,23.47,23.763,23.69,23.53,23.11,23.188,23.175,23.073,23.075,23.138,22.905,22.935,22.675,22.763,23,23.431,23.517,23.515,23.525,23.997,24.2,23.987,23.888,23.972,24.222,24.212,24.275,23.82,23.685,23.75,23.722,24.47,24.33,24.46,24.81,24.86,24.675,24.362,24.155,24.145,23.92,23.87,23.987,23.705,24.02,24.22,24.31,24.392,24.548,24.843,25.17,25.272,25.235,25.368,25.542,25.375,25.642,25.695,25.725,25.935,25.8,25.022,24.847,24.827,25.77,25.278,25.36,25.548,25.763,25.315,25.45,25.587,25.587,25.535,25.735,25.712,25.177,25.188,25.109,25.385,25.173,25.055,25.052,25.163,25.03,25.278,25.595,25.507,25.445,25.13,24.788,24.43,24.75,24.99,25.755,26.028,26.263,26.372,26.37,26.685,26.843,26.837,27.01,27.575,27.372,27.325,27.198,27.33,27.333,27.438,27.858,28.362,28.548,29.32,28.923,28.935,29.215,29.392,29.692,29.938,29.775,29.85,29.812,28.938,29.087,29.3,29.02,28.662,28.575,28.712,28.45,27.968,27.9,27.54,27.46,28.163,28.31,28.372,28.333,28.177,28.63,28.692,28.48,28.282,27.86,27.163,26.858,27.05,28.038,28.312,28.157,28.2,27.622,27.515,26.895,27.217,27.765,28.118,28.438,28.591,28.12,29.53,29.798,30,29.792,29.772,30.128,30.058,30.062,29.96,30.538,31.23,31.87,31.82,32.22,32.195,32.257,32.375,33.25,33.4,32.9,32.717,32.643,32.57,32.38,32.39,32.188,32.342,32.393,31.805,31.192,31.225,31.349,31.237,31.83,32.29,32.311,32.1,31.962,32.01,31.705,31.22,31.175,31.6,31.622,31.28,31.39,31.878,32.03,31.6,31.645,31.802,32.143,31.823,31.782,31.775,31.535,32.03,32.05,32.217,32.605,32.658,33.283,33.635,32.897,31.97,32.533,32.643,32.112,31.688,31.52,31.905,31.89,31.72,31.798,32.237,32.373,32.68,32.72,32.745,32.908,33.243,33.228,33.065,32.987,32.862,32.847,32.664,32.735,32.645,32.423,32.303,32.02,32.335,32.545,32.083,31.81,31.962,31.97,32.077,31.955,32.015,31.903,32.45,32.3,31.997,31.618,31.53,31.735,31.673,31.558,31.538,31.16,31.015,30.962,31.439,31.593,31.788,32.143,32.405,33.243,33.23,31.375,31.772,31.435,30.903,30.978,30.875,30.642,30.661,30.642,29.425,29.36,29.125,29.062,29.997,29.545,28.855,29.1,29.077,29.413,29.36,29.13,28.587,27.975,27.2,27.778,27.472,28.31,28.327,28.632,27.97,28.085,28.195,27.612,28.14,28.505,28.321,28.552,29.222,29.132,29.135,29.122,28.575,28.843,28.545,28.68,28.875,29.173,28.642,28.378,27.885,27.405,27.753,27.842,27.935,27.942,27.548,28.07,28.188,28.112,27.88,28.025,28,27.938,28.542,28.895,28.875,29.807,29.532,29.135,29.825,30.173,30.305,30.34,30.872,30.955,30.673,30.452,30.452,29.517,29.355,29.205,28.892,28.56,28.763,29.372,29.938,29.98,29.933,29.837,29.808,29.603,29.853,29.702,29.528,29.198,29.812,29.965,29.65,29.423,29.235,28.847,28.17,28.2,27.997,28.062,27.38,26.843,26.93,27.212,27.25,26.923,27.358,27.175,26.757,26.342,26.462,25.593,25.032,24.778,24.765,25.173,25.298,25.12,24.427,24.663,24.547,24.47,25.365,25.382,25.22,24.157,23.63,24.335,24.177,24.01,24.21,24.333,24.23,23.925,23.985,24.087,23.68,23.625,24.212,24.552,24.722,24.19,24.225,24.125,24.095,24.19,24.506,24.558,25.192,25.222,25.427,25.938,25.708,25.44,25.395,25.56,25.57,25.728,26.295,26.577,26.618,26.625,26.913,26.823,26.767,26.562,26.548,26.948,27.605,27.475,27.5,28.048,27.683,27.745,27.605,27.442,27.653,27.625,28.085,28.097,28.075,27.237,27,27.022,26.733,26.62,26.413,26.325,24.677,24.47,23.68,23.52,23.935,23.975,23.517,23.362,23.442,23.392,23.392,23.195,22.917,23.597,23.675,23.802,23.66,23.858,24.298,24.522,24.935,25.183,25.118,25.1,24.885,24.46,24.567,25.472,24.968,24.89,24.997,24.836,24.78,24.619,24.603,24.438,24.163,24.142,24.087,24.222,24.073,23.664,23.263,23.415,23.638,23.942,24.116,23.85,23.915,24.125,24.222,24.413,24.425,24.417,24.747,24.825,25.032,25,25.115,25.25,24.825,24.71,24.493,26.087,26.112,26.138,26.538,26.517,26.46,26.5,26.913,27.093,27.235,27.225,27.233,27.11,27.385,27.558,27.343,27.4,27.423,27.275,27.33,27.188,26.97,26.987,26.86,26.625,26.642,26.7,27,27.075,27.19,26.817,26.43,26.43,27.198,28.257,28.933,29.032,29.045,28.53,28.497,28.735,28.698,28.347,28.295,28.66,28.45,28.343,28.263,28.577,28.415,28.585,28.64,29.188,29.673,29.495,29.36,29.542,29.46,29.552,29.44,29.345,29.228,29.435,29.59,28.925,28.965,28.802,28.558,28.442,28.087,27.865,27.562,27.628,27.93,27.83,27.772,27.218,26.952,26.92,27.558,27.587,27.635,27.997,28.105,27.878,27.968,28.116,28.007,28.05,27.735,27.522,27.507,27.59,27.798,28.108,28.675,28.75,28.98,29.05,29.183,29.125,29.345,29.375,29.35,29.128,29.13,29.45,29.504,29.277,29.3,29.083,29.128,29.216,29.54,29.858,29.845,29.983,29.825,29.905,30.06,30.125,30.022,30.112,30.202,30.025,30.525,30.61,30.587,30.407,30.347,32.623,32.347,32.298,32.625,33.022,33.055,33.111,33.235,33.455,33.772,34.068,33.975,33.958,34.188,34.28,34.37,34.165,34.359,34.359,35.037,35.07,34.958,34.943,34.995,34.95,34.697,34.839,34.857,34.912,35.188,35.255,35.25,35.375,35.7,35.4,35.396,35.435,35.305,36.01,36.123,36.125,36.068,36.03,36.222,36.365,36.13,36.045,35.97,35.838,35.537,35.595,35.47,35.51,35.5,35.73,35.67,35.987,36.225,36.15,36.04,36.075,36.8,37.022,36.873,36.785,37.245,38.425,38.72,38.485,38.518,39.105,39.162,39.015,38.643,38.335,38.495,38.645,38.725,38.542,38.588,38.56,38.607,38.542,38.333,38.862,38.612,38.952,38.995,38.885,38.798,36.522,36.862,36.875,36.12,36.125,36.685,36.717,36.517,36.675,36.79,37.07,36.54,36.528,36.283,36.24,36.325,36.197,35.875,36.188,36.487,36.463,36.545,37.123,37.333,37.725,37.533,37.855,37.935,37.61,38.11,38.46,38.482,38.498,37.557,37.583,37.555,39.938,39.303,39.35,39.73,40.458,40.318,40,39.643,40.053,40.549,40.627,40.178,39.875,39.472,40,40.118,40.185,40.14,40.5,40.78,40.972,41.13,41.235,41.062,40.748,40.56,40.287,40.513,40.99,39.99,39.85,40.243,40.125,39.943,39.565,38.95,38.068,37.958,38.48,38.68,38.57,38.533,38.612,38.772,38.465,38.86,38.873,39.182,39.5,39.245,39.342,39.32,40,40.217,40.178,39.27,39.438,39.423,39.355,39.388,39.457,40.9,42.018,42.412,42.485,42.125,43.565,43.748,43.812,44.06,44.024,43.845,43.625,43.37,42.58,42.967,42.847,42.64,43.425,43.75,43.875,43.77,43.717,43.23,43.035,42.917,43.155,42.88,42.551,42.61,42.75,43.222,43.097,43.385,43.283,43.542,44.3,43.847,43.855,44.005,43.856,42.868,42.695,42.963,42.647,43.075,43.638,43.368,43.842,43.903,43.765,43.575,43.872,44.34,44.847,44.812,45.025,44.895,44.445,44.86,44.325,43.737,43,42.54,41.842,42.11,42.155,41.7,40.97,40.93,40.85,40.25,39.472,40.972,41.188,41.885,43.272,43.705,43.565,43.53,43.487,43.912,44.847,45.12,45.154,44.944,44.075,44.435,44.562,43.963,44.28,45,45.597,45.875,45.13,45.06,44.78,44.368,44.2,43.772,43.17,42.48,43.275,43.787,42.505,42.938,42.235,42.186,43.002,43.558,43.12,43.272,43.5,43.481,43.75,43.96,44.048,44.734,44.705,43.847,42.805,41.73,41.583,41.355,41.432,41.083,41.815,42.3,44.438,44.375,46.062,46.917,46.555,46.85,47.592,47.515,47.382,46.768,47.115,47.228,46.953,47.318,47.22,47.125,47.21,47.412,47.188,47,47.057,47.565,48.355,48.485,48.52,48.55,48,47.993,48.153,48.22,47.893,47.54,47.305,46.583,46.8,47.088,46.537,46.23,46.632,46.82,46.553,46.798,46.825,46.987,46.603,47.109,47.67,47.82,47.445,47.853,47.96,48.162,47.967,47.95,48.138,48.107,47.99,48.415,48.713,48.99,48.798,48.05,48.035,50.44,52.095,52.185,52.312,52.375,51.952,52.445,52.275,52.738,52.64,52.685,53.453,54.487,54.795,54.298,54.09,54.263,54.225,54.685,55.135,55.873,57.065,57.217,57.295,57.417,56.838,56.342,55.463,56.075,56.25,57.088,56.71,55.737,55.463,54.905,55.57,55.34,55.315,55.705,55.938,56.61,56.46,57.355,57.5,58.368,58.088,57.103,56.2,56.818,56.588,54.875,55.72,55.458,55.748,55.66,54.935,55.315,55.84,55.812,56.057,55.345,55.048,54.923,53.795,55.112,55.59,53.412,51.097,51.18,52.515,52.53,51.502,49.963,49.295,48.62,47.993,48.742,47.675,45.368,45.068,44.149,43.737,43.693,45.322,45.7,45.083,46.235,45.597,43.695,43.623,42.522,42.947,42.98,43.143,42.27,42.088,41.882,41.862,40.528,39.54,37.888,39.307,39.193,39.63,39.84,39.713,36.43,37.137,37.208,37.955,38.632,38.493,38.425,37.818,38.347,38.97,39.415,39.47,39.182,38.785,38.62,39.533,39.083,39.533,41.537,42.25,42.245,42.914,43.77,43.893,43.485,42.665,42.803,42.75,43.12,42.815,42.925,42.86,43.33,43.092,43.25,43.967,43.825,43.75,43.728,43.787,44.438,44,43.873,43.61,43.268,44.78,45.667,45.825,46.025,46.833,47.097,47.248,47.373,49.083,49.423,47.995,48.22,47.44,47.39,47.52,47.92,48.615,49.125,49.092,49.275,50.057,50.713,50.185,50.25,50.035,49.963,50.342,50.845,51.037,51.235,51.938,52.12,51.94,51.25,51.493,50.85,53.827,53.162,52.96,52.21,51.854,51.335,50.42,49.713,47.37,47.425,47.938,48.117,47.725,46.087,47,46.428,45.135,45.535,45.147,44.838,44.807,44.498,44.48,44.958,46.248,46.368,47.98,48.842,49,48.993,49.197,48.397,48.74,50.072,49.97,50.153,50.213,50.04,49.815,50.248,50.393,49.874,51.123,50.783,51.11,51.27,50.35,50.377,50.932,51.097,51,51.467,51.528,51.273,51.47,51.625,51.807,52.228,52.287,52.31,52.432,52.66,52.54,55.342,54.507,51.607,49.662,49.517,49.89,50.882,50.69,50.513,53.035,51.61,51.285,51.79,53.183,53.338,53.412,53.609,53.013,51.798,52.138,51.43,52.33,52.612,51.745,52.37,53.493,53.605,54.11,54.195,55.928,56.605,55.197,55.033,55.205,55.713,55.94,55.64,54.96,55.623,55.375,55.235,55.24,56.145,57.055,55.895,55.24,56.873,57.482,57.015,56.947,57.61,59.41,59.534,59.412,58.81,59.037,59.395,60.248,60.55,60.81,61.2,61.682,62.312,62.438,61.325,62.292,63.982,64.461,64.548,64.372,65.088,65.11,65.618,65.698,66.195,66.22,66.445,66.857,67,66.521,66.001,65.795,66.61,66.79,66.995,67,67.062,64.882,65.827,66.473,67.75,67.7,67.518,67.775,68.14,68.825,70.198,70.442,70.475,70.295,70.662,71.062,71.223,72.495,73.493,73.173,73.42,75.15,75.145,74.99,75.225,76.11,77.607,78.168,79.268,79.393,78.875,78.925,79.685,79.755,79.997,79.89,80.832,77.942,79.6,81.963,81.022,80.67,78.372,79.91,81.19,81.305,80.85,80.387,80.975,81.805,81.555,81.495,79.938,81.143,81.162,80.113,76.045,75.632,74.47,71.5,69.603,75.36,76,75.85,74.887,72.705,69.522,71.61,70.305,67.5,69.98,64.77,64.402,62.5,63.21,62.958,57.125,61.923,64.562,64.67,63.967,63.88,65.622,62.18,61.287,61.425,65.777,67.925,66.842,67.518,68.425,72.062,71.582,72.049,71.736,70.42,69.312,69.475,70.438,70.753,71.135,71.457,72.418,73.632,74.75,73.423,75.25,75.81,76.293,77.588,79.262,79.922,78.988,77.448,76.975,79.125,79.63,79.88,80.223,79.808,81.06,79.677,80.86,80.287,80.588,80.86,81.55,81.405,82.938,83.4,86.402,88.692,87.765,86.95,86.42,88.3,88.85,88.363,89.14,89.865,93.095,92.198,91.25,91.33,90.543,91.495,91.84,92.618,93.945,94.655,95.375,96.317,95.98,99.955,97.255,99.247,97.405,97.147,98.5,99.25,97.975,97.077,92.97,94.905,94.55,95.23,96.298,106.415,111.636,110.79,110.393,114.412,113.675,113.775,112.482,113.275,116.043,115,116.088,116,117.162,118.392,124.868,128.785,125.179,126.993,127.485,126.442,131,134.8,137.98,128.84,123.7,118.99,119.14,120.5,115.23,115.93,118.829,116,112.2,110.88,110.19,112.86,112.11,110.25,112.44,115.32,115.31,117.26,117.72,115.37,116.65,116.12,115.55,116.4,117,125.18,125.39,123.03,121.2,121.548,120.419,118.98,118.705,118.04,116.55,116.55,117.28,115.43,116.93,111.99,110.68,111.49,115.59,119.62,119.2,121.99,117.59,119.63,120.53,119.672,120.99,120.674,119.82,119.06,118.77,117.62,115.85,116.75,117.49,120.97,123.469,123.37,123.78,122.861,124.57,124.98,125.95,123.87,122.76,123.35,127.9,128.37,129.58,129.1,128.31,134.405,132.43,133.46,137.34,138.789,135.99,134.74,133.612,131.74,131.05,131.63,132.63,130.17,129.69,131.45,131,130.224,128.71,132.49,139.67,139.85,145.09,144.3,144.3,141.99,136.74,135.38,136.31,135.77,137.4,137.42,136.96,137.877,136.99,136.39,135.53,136.01,132.22,129.995,130.71,129.72,126.71,125.56,126.459,124.85,127.93,128.72,125.71,123.6,121.935,121,122.06,122.17,123.21,121.17,124,127.22,125.86,123.18,121.43,123.87,124.24,122.9,121.66,121.48,122.58,120.403,123.52,124.18,126.16,127.13,127.92,130.39,133.04,132.85,134.66,135,135,134.67,135.47,135.53,133.75,134.15,135.12,135.06,135.41,135.02,137.07,133.56,134.07,131.49,130.45,129.75,131.258,129.54,126.27,124.64,126.15,127.89,126.93,126.99,124.915,127.72,128,127.94,128.32,127.39,127.64,125.8,125.35,125.24,124.85,126.16,126.32,128.46,127.75,128.19,127.44,130.54,130.6,130.89,132.55,131.51,132.41,134.08,134.32,134.64,133.89,135.245,136.49,137.41,137.33,140,143.15,144.89,144.06,145.65,146.32,147.46,149.57,150,149.76,144.07,147.1,146.13,148.195,148.718,149.83,149.21,146.97,146.55,146.33,146.95,148.045,147.79,147.84,147.11,146.7,147.71,146.72,149.05,149.444,151.19,151.68,150.72,148,148.5,150.19,150.86,150.32,149.12,148.75,153.49,152.8,154.98,154.72,154.63,157.26,157.04,156.11,155.48,151.42,151.07,149.44,148.97,148.82,144.84,144.6,146.43,147.08,147.47,145.96,144.75,144.45,144.378,142.92,142.21,142.24,142.15,144.215,144.178,144.81,143.25,141.4,143.88,144.895,146.84,149.17,149.754,149.64,150.18,149.37,150.84,149.73,153.165,149.94,149.7,151.57,151.97,152.43,152.2,151.57,151.428,150.13,149.43,150.4,151.88,151.488,155,158.67,161.02,165.7,161.8,162.14,160.45,161.19,165.52,170.3,164.2,164.96,167.88,171.58,175.96,176.75,179.63,182.13,177.74,179.5,181.14,173.47,170.58,173.2,175.86,176.85,180.42,181.33,180.63,180.57,179.23,182.88,182.94,180.17,175.3,174.14,172.5,175.18,177.18,176.62,173.78,172.54,171.08,169.68,166.33,162.3,162.76,164.389,163.84,170.35,175,174.84,175.88,176.24,174.1,173.946,175.35,176.65,175.48,173.08,169.58,172.95,173.34,171.91,170.541,166.69,166.15,162.85,165.12,165.42,166.6,167.36,168.91,165.55,165.02,162.88,163.41,160.39,159.28,154.12,155.57,160,161,164.48,166.35,169.42,172.64,174.14,175.28,175.73,179.01,179.61,178.03,174.88,178.49,178.3,173.63,173.36,171.78,169.03,169.87,171.04,171.27,166.598,167.82,168.88,171.53,167.87,163.17,162.34,159.79,164.515,166.2,158.23,160.71,166.48,164.08,159.44,155.83,156.74,155.45,146.2,148.105,147.52,149.77,147.36,141.66,140.7,143.26,141.97,141.785,144.34,149.68,150.66,151.74,151.27,147.97,148.569,149,149.87,147.95,140.76,135.2,133.89,137.34,132.39,133.079,137.06,137.76,138.59,141.91,143.49,143.422,140.67,138.37,139.04,141.61,144.12,146.55,147.55,146.64,148.45,146.45,148.95,150.86,151.57,151.23,153.72,155.57,156.28,155.04,153.085,157.33,157.64,163.63,163.59,162.41,166.59,167.19,165.85,167.81,165.82,169.34,170.99,172.17,173.39,173.71,176.15,174.9,173.74,169.86,168.71,168.11,170.14,171.05,162.9,162.56,160.58,158.42,160.362,157.09,156.67,156.36,157.82,164.26,160.54,157.1,155.24,151.35,154.56,158.08,158.74,154.47,151.47,153.77,154.72,150.641,146.72,143.1,143.07,146.22,147.38,147.54,143.1,141.89,141.35,140.36,143.59,144.52,142.9,146.7,144.949,145.89,147.848,150.23,152.49,151.99,149.046,157.5,154.24,155.45,152.17,142.8,142.67,139.145,141.43,138.55,146.87,150.01,150.28,153.59,149.87,151.48,152.7,150.37,150.42,151.83,148.88,146.64,144.81,148.72,149.13,148,150.92,147.3,143.37,143.52,145.57,144.5,149.969,146.655,141.8,137.65,135.2,133.25,136.81,134.56,132.415,131.41,131.027,130.481,129.95,130.9,128.656,127.77,130.29,133.41,131.264,133.51,134.26,134.92,137.29,138.61,136.25,138.02,143.315,143.16,142.43,144.25,147.23,145.55,144.34,146.61,151.18,157.38,153.1,155.23,154.58,154.33,151.34,154.26,153.77,155.5,156.33,153,151.3,149.95,150.34,147.19,149.17,149.08,147.229,146.71,151.11,156.3,154.03,153.47,154.535,150.94,153.14,153.4,153.245,156.46,156.74,157.82,159.4,162.14,161.55,160.34,160.77,158.49,161.05,162.47,165,166.29,166.84,165.05,164.958,162.03,162.36,162.06,165.8,166.32,165.39,167.41,168.16,167.87,166.452,165.6,166.305,165.28,168.56,169.85,170.45,170.35,170.92,167.04,174.3,173.85,173.54,174.03,174.59,174.06,173.21,173.138,172.925,175.24,176.39,174.71,173.379,172.418,173.895,175.77,178.99,179.35,180.12,181.78,184.951,180.12,181.21,180.84,182.23,183.89,184.15,184.39,186.52,186.99,186.1,185.41,187.045,187.56,188.05,188.39,189.9,190.07,194.48,193.88],"low":[15.122,15.171,15.149,15.294,15.379,15.155,15.195,14.954,15.545,15.565,15.512,15.721,16.044,16.051,16.188,16.309,16.505,16.506,16.492,16.355,16.202,16.308,16.716,17.621,17.467,17.816,18,17.886,17.9,17.793,17.834,17.875,17.368,17.357,17.54,17.375,17.405,17.724,17.63,17.498,17.981,17.482,16.6,16.643,16.596,15.972,15.982,16.452,16.759,16.643,17.236,17.422,17.194,17.282,17.169,16.943,17.085,17.277,17.169,17.093,17.334,17.162,17.081,17.394,17.327,17.477,17.697,17.83,17.846,18.061,18.269,18.144,18.536,18.659,18.754,18.686,18.376,18.465,18.617,18.423,18.529,18.679,18.507,18.299,18.307,18.372,18.464,18.463,18.638,18.732,18.507,18.499,18.369,18.345,18.519,18.607,18.714,19.05,19.565,19.672,19.917,20.029,20.229,19.985,20.032,20.043,19.989,20.001,19.774,19.822,19.763,19.243,19.419,19.458,20.099,20.215,20.121,19.982,19.726,19.786,19.715,19.301,19.057,19.212,19.239,19.12,18.968,18.924,19.202,19.702,19.703,19.282,19.301,19.565,19.457,19.455,19.491,17.931,17.808,17.739,17.627,17.832,17.956,18.08,18.136,18.478,18.5,18.911,19.044,19.079,19.329,19.486,19.084,18.893,18.736,18.658,18.607,18.414,18.43,18.647,18.672,18.849,18.897,18.861,18.787,18.869,19.021,19,18.899,18.679,18.78,18.757,18.893,18.834,18.797,19.109,19.271,19.245,19.111,19.08,19.14,19.17,19.295,19.201,18.949,18.639,18.525,18.644,18.685,18.469,18.472,18.262,18.362,18.543,18.713,18.804,18.73,20.026,20.141,20.448,21.054,21.064,20.941,21.061,21.071,21.229,20.99,20.943,20.726,20.979,21.096,21.134,21.001,20.907,21.333,21.455,21.502,21.575,21.66,21.987,22.278,22.42,22.461,22.232,22.437,22.718,22.95,23.017,22.938,23.392,23.368,22.975,22.72,22.862,22.95,22.837,22.835,22.725,22.65,22.548,22.413,22.45,22.692,23.022,23.282,23.272,23.3,23.525,23.48,23.69,23.38,23.716,23.913,23.757,23.685,23.142,23.255,23.43,23.53,23.792,24.105,24.16,24.388,24.562,24.417,23.833,23.702,23.792,23.59,23.677,23.525,23.32,23.709,23.903,24.01,24.2,24.215,24.495,24.83,24.987,25.028,25.048,25.32,25.215,25.175,25.39,25.55,25.68,24.645,24.448,24.577,24.513,24.035,24.44,24.905,25.27,25.36,24.722,25.148,25.39,25.125,25.145,25.135,25.3,24.43,24.6,24.657,25.132,24.675,24.51,24.76,24.855,24.683,24.577,25.153,25.075,24.952,24.642,23.795,23.853,24.202,24.555,25.317,25.65,25.907,26.132,26.175,26.337,26.59,26.475,26.802,27.003,26.93,27.031,26.95,27.138,27.167,27.1,27.343,27.9,28.263,28.325,28.472,28.45,28.712,29.007,29.155,29.362,29.458,29.513,27.817,28.188,28.778,28.823,28.66,27.905,27.337,27.885,27.835,27.395,26.587,26.565,26.705,27.665,27.915,27.993,28.115,28.003,28.003,28.425,28.028,27.552,26.837,26.353,26.157,26.674,27.175,27.552,27.2,27.228,27.125,26.665,26.3,26.625,27.067,27.43,27.882,28.2,27.257,28.827,28.89,29.212,29.02,29.403,29.577,29.812,29.612,29.608,30.04,30.625,31.392,31.413,31.73,31.862,32.083,32.013,32.415,32.792,32.037,31.653,32.06,32.075,32.022,32.08,31.44,31.565,31.265,30.95,30.528,30.407,30.645,30.718,31.413,31.593,31.85,31.29,31.63,31.64,30.845,30.65,30.728,31,31.089,30.775,31.048,31.083,31.495,31.243,31.165,31.315,31.653,31.478,31.503,31.528,31.115,31.292,31.667,31.58,32.035,32.307,32.787,32.393,32.075,31.145,31.325,32.065,31.445,30.84,31.005,31.528,31.406,31.205,31.468,31.79,32.053,32.09,32.41,32.335,32.458,32.85,32.28,32.513,32.775,32.475,32.513,32.33,32.475,32.228,32.09,31.708,31.405,31.962,32.119,31.778,31.427,31.593,31.685,31.805,31.6,31.77,31.72,31.78,31.875,31.628,31.12,31.215,31.497,31.442,31.212,30.942,30.635,29.805,30.302,31.08,31.26,31.395,31.837,32.077,32.675,32.58,30.497,31.265,30.975,30.53,30.638,30.567,30.427,30.228,29.38,28.312,28.025,28.529,28.625,29.132,28.333,27.407,28.635,28.503,28.875,29.003,28.67,27.907,26.411,23,25.875,26.263,27.505,27.885,28,26.84,27.283,27.51,27.128,27.58,27.442,27.475,27.94,28.715,28.605,28.86,28.429,27.968,28.415,28.13,28.325,28.093,28.505,28.11,26.965,27.183,26.827,26.888,27.267,27.441,27.353,27.052,27.372,27.86,27.67,27.39,27.622,27.632,27.528,27.705,28.425,28.525,29.083,28.73,28.497,29.015,29.567,29.862,29.903,30.175,30.405,30.045,30.155,30.013,29.015,28.802,28.913,28.067,27.75,28.33,28.875,29.19,29.712,29.335,29.28,29.48,29.4,29.438,29.215,29.02,28.555,28.778,29.452,29.215,28.77,28.878,28.213,27.448,27.587,27.2,27.245,26.452,26.392,26.613,26.8,26.987,26.545,26.715,26.795,26.205,25.5,25.603,24.968,24.108,24.19,24.335,24.71,24.325,23.935,23.84,23.875,23.355,23.735,24.593,24.802,24.517,23.335,23.097,23.587,23.85,23.57,23.52,23.798,23.423,23.26,23.483,23.525,23.147,23.253,23.653,24.038,24.023,23.95,23.98,23.638,23.33,23.812,24.145,24.163,24.355,24.91,25.112,25.343,25.24,25.1,25.067,25.038,25.375,25.445,25.962,26.147,26.24,26.298,26.285,26.302,26.475,26.222,26.265,26.22,27.15,27.22,27.05,27.567,27.355,27.3,27.03,27.042,27.208,27.165,27.7,27.833,27.433,26.735,26.558,26.515,26.38,26.155,26.128,25.978,23.92,23.562,23.128,23.1,23.42,23.455,23.17,22.962,23.147,23.028,23.115,22.368,22.5,22.913,23.253,23.472,23.392,23.63,23.917,24.21,24.528,24.66,24.811,24.705,24.583,24.157,24.362,24.388,24.74,24.67,24.615,24.62,24.275,24.188,24.257,24.017,23.825,23.757,23.669,23.837,23.812,23.163,22.875,23.035,23.407,23.575,23.833,23.615,23.593,23.905,24.013,24.183,24.28,24.21,24.33,24.625,24.65,24.835,24.934,24.782,24.577,24.23,24.105,25.688,25.705,25.92,26.103,26,26.192,26.32,26.545,26.79,27.003,26.94,26.962,26.945,27.02,27.302,27.085,27.255,27.09,26.962,27.132,26.92,26.67,26.577,26.573,26.375,26.41,26.405,26.705,26.878,26.767,26.31,25.782,25.632,26.81,27.15,28.372,28.51,28.312,28.128,28.11,28.5,27.888,27.888,28.085,28.358,27.95,27.95,28.07,28.157,28.173,28.282,28.378,28.68,29.05,29.188,28.93,29.282,29.195,29.362,28.45,29.083,29.07,29.25,29.327,28.327,28.525,28.362,28.3,27.632,27.808,27.388,27.028,27.365,27.425,27.013,26.458,26.638,26.02,26.54,26.65,27.208,27.415,27.503,27.85,27.583,27.737,27.847,27.517,27.567,27.257,27.212,27.062,27.298,27.29,27.65,28.077,28.122,28.438,28.745,28.808,28.911,28.938,29.17,29.195,28.91,28.897,29.122,29.05,29.1,28.858,28.69,28.938,28.952,29.118,29.485,29.575,29.65,29.552,29.702,29.555,29.927,29.843,29.934,29.942,29.875,30.07,30.4,30.4,30.165,30.155,31.753,31.945,32.04,32.225,32.612,32.805,32.78,33.013,33.188,33.312,33.655,33.71,33.775,33.995,34.028,34.075,33.82,34.07,34.175,34.399,34.69,34.647,34.649,34.697,34.705,34.263,34.66,34.705,34.71,34.756,35.065,34.972,35.057,34.932,34.94,35.153,35.088,34.655,35.155,35.798,35.875,35.752,35.763,35.792,35.952,35.862,35.818,35.725,35.015,35.252,35.263,35.217,35.278,35.112,35.29,35.463,35.795,35.967,35.844,35.827,35.818,36.24,36.71,36.068,36.452,36.69,37.257,38.362,38.028,38.077,38.667,38.763,38.68,37.428,37.783,38.158,38.228,38.327,38.167,38.257,38.327,38.333,38.095,38.055,38.222,38.365,38.445,38.62,38.6,36.505,35.627,36.287,35.96,35.553,35.55,35.915,36.235,36.153,36.28,36.278,36.345,35.905,35.79,35.57,35.945,35.775,35.681,35.603,35.725,35.842,36.095,36.205,36.36,36.833,37.143,37.167,37.487,37.548,37.22,37.475,37.95,38.265,36.825,37.298,37.033,37.103,39.04,38.755,38.923,39.168,39.568,39.778,38.658,39.018,39.688,40.035,40.037,39.46,39.18,38.778,39.505,39.72,39.638,39.818,39.982,40,40.653,40.87,40.908,40.14,40.13,40.09,39.632,39.972,39.693,39.478,39.522,39.5,39.499,39.61,38.458,38.188,37.64,37.29,37.923,38.385,38.175,38,38.18,38.478,38.115,38.513,38.64,38.871,38.775,38.938,38.932,39.103,39.412,39.807,39.9,38.755,38.99,38.875,39.05,38.818,39.195,39.675,40.93,41.735,41.403,41.32,42.78,42.93,43.4,43.583,43.285,43.568,43.35,42.795,42.095,42.575,42.41,42.39,42.695,43.263,43.661,43.335,42.965,41.79,42.11,42.125,42.408,42.1,41.615,42.228,42.205,42.197,42.865,43,42.912,43.115,43.715,43.522,43.312,43.525,43.625,42.42,42.428,42.62,42.305,42.315,42.99,43.02,43.263,43.482,43.353,43.25,43.623,43.912,44.035,43.768,44.562,44.353,44.15,44.205,43.3,42.632,42.515,41.768,41.175,41.625,41.69,40.025,39,38.5,39.767,38.757,37.56,39.377,40.412,40.72,42.25,42.943,42.855,42.752,42.928,43.385,44.053,44.54,44.513,43.165,43.112,43.63,44.033,43.568,43.768,44.347,45.053,44.81,44.452,44.518,44.405,43.415,43.735,42.815,42.15,41.235,41.61,41.73,41.298,41.725,41.118,41.22,41.193,43.02,42.05,42.461,42.882,42.925,43.26,43.463,43.708,44.103,44.22,43.165,41.357,41.022,40.305,40.603,40.842,40.158,40.46,41.318,43.45,43.61,44.542,46.188,45.916,46.305,46.912,46.862,46.965,46.275,46.5,46.59,46.533,46.728,46.695,46.44,46.553,46.912,46.717,46.695,46.535,46.938,47.838,48.09,47.98,48.084,47.443,47.553,47.787,47.61,47.555,47.065,46.8,45.862,46.432,46.235,46.175,45.182,45.635,46.007,45.95,45.728,45.855,45.885,46.07,46.3,47.325,47.545,46.903,47.327,47.725,47.604,47.3,47.482,47.423,47.542,47.39,48.013,48.107,48.403,47.525,47.268,47.335,49.327,50.088,51.37,51.768,51.69,51.13,51.8,51.667,51.925,52.065,52.083,52.868,53.29,53.778,53.506,53.46,53.65,53.778,54.083,54.73,54.853,55.6,56.5,56.658,56.275,55.325,55.178,54.118,54.14,54.96,55.643,55.631,54.318,54.28,53.825,54.787,54.322,54.158,54.925,54.94,55.885,56.005,56.588,56.658,57.445,56.682,55.145,55.05,55.562,54.013,53.08,54.21,54.318,54.191,54.835,53.25,54.357,54.735,53.675,53.635,54.188,53.167,51.522,52.318,54.155,54.202,51.357,49.542,50.423,51.033,51.688,50.562,48.447,47.863,46.482,46.725,47.365,46.248,43.877,44.138,43.025,42.565,42.72,43.732,44.425,44.257,45.303,44.068,42.605,42.075,40.833,41.75,42.255,42.388,41.32,40.682,41.097,39.772,38.825,37.408,36.647,36.68,37.518,38.638,39.12,38.557,35.5,35.95,36.475,37.13,37.408,37.715,37.877,37.305,37.513,38.25,38.315,38.995,38.155,37.925,37.935,38.58,38.415,38.528,40.057,41.14,41.482,41.82,43.088,43.213,42.585,42.105,42.312,42.425,42.48,42.345,42.438,42.373,42.748,42.575,42.845,43.487,43.293,43.182,43.23,43.222,43.493,43.635,43.485,43.005,42.375,43.838,44.842,45.23,45.64,45.935,46.447,46.48,46.182,47.452,47.695,46.65,46.145,46.638,46.882,47.135,47.095,47.763,48.287,48.285,48.982,49.085,49.807,49.545,49.611,49.053,49.502,49.64,49.653,50.63,50.585,50.975,51.763,51.28,50.53,50.965,49.778,52.307,52.033,52.557,50.875,50.206,50.438,49.165,48.193,45.713,46.353,46.505,47.21,46.69,45.071,46.175,45.638,44.452,44.655,44.478,44,44.167,43.748,42.568,43.63,45.285,45.537,46.443,47.905,48.4,48.346,48.4,47.575,48.042,48.803,49.327,49.507,49.537,49.542,48.822,49.338,49.893,49.263,50.162,50.34,50.673,50.725,49.603,49.702,50.39,50.428,50.55,51,50.875,50.818,50.925,50.59,50.903,51.822,51.792,51.682,51.785,52.11,51.827,52.825,51.686,50.408,48.145,48.51,48.455,49.847,49.822,49.787,50.208,50.647,49.917,50.96,52.506,52.58,52.901,52.688,50.25,51.264,50.882,50.83,51.664,51.8,51.055,51.83,52.877,53.127,52.768,52.928,54.432,55.715,54.255,54.39,54.78,54.86,55.092,54.368,54.412,54.298,54.285,54.708,54.32,55.197,56.05,54.482,53.783,55.972,56.46,56.083,56.41,56.825,58.077,58.668,58.72,58.3,58.38,58.572,59.33,59.905,60.305,60.451,60.72,61.68,60.643,60.303,59.315,62.29,63.845,64.08,63.841,64.527,64.213,64.57,65.23,65.268,65.525,65.753,66.058,66.348,65.1,65.295,65.21,65.63,65.625,66.327,66.475,65.863,64.073,65.17,65.683,66.825,66.228,66.465,67.125,66.83,67.732,69.245,69.7,69.78,69.738,69.64,70.093,70.73,71.175,72.03,71.305,72.38,73.798,74.125,73.188,74.37,74.289,76.55,77.062,77.787,78.043,77.387,78.022,78.75,79,79.327,78.912,79.38,76.22,78.048,80.345,79.688,77.073,75.555,78.409,79.738,80.066,79.5,78.463,79.677,80.368,80.838,80.713,78.652,80,79.552,77.625,72.308,71.533,71.625,68.24,64.092,69.43,71.45,73.283,72.853,70.308,65.75,67.342,67.965,62,63.237,60,59.6,59.28,60.653,57,53.153,58.575,61.075,61.59,61.763,62.35,63,59.783,59.225,59.744,62.345,64.75,65.308,66.175,66.457,69.512,70.158,70.588,69.215,69.213,66.357,68.05,68.717,69.25,69.988,69.55,70.973,72.088,71.463,71.579,73.615,74.717,75.493,76.073,76.81,77.728,75.802,75.382,75.052,77.581,78.253,79.05,78.967,78.838,79.125,78.272,78.908,79.118,79.302,79.732,80.575,80.195,80.808,81.83,83.003,86.522,83.87,83.556,83.145,86.18,87.772,87.305,86.287,87.787,90.568,89.63,89.393,88.255,87.82,90,90.978,90.91,92.467,93.058,94.09,94.673,94.705,95.257,93.878,96.49,95.905,95.84,96.062,96.743,96.603,92.01,89.145,93.48,93.247,93.713,93.768,100.825,107.893,108.387,108.897,109.798,110.293,110,109.107,110.298,113.927,113.045,113.963,114.007,115.61,115.733,119.25,123.936,123.052,125.082,123.832,124.577,126,130.53,127,120.5,110.89,112.68,115.26,112.5,110,112.8,113.61,112.04,108.71,106.09,103.1,109.16,106.77,105,107.67,112.78,113.57,113.62,115.83,112.22,113.55,112.25,114.13,114.59,114.92,119.285,119.65,119.62,118.15,118.81,115.66,115.63,116.45,114.59,114.28,112.88,114.54,111.1,112.2,107.72,107.32,108.73,112.35,116.869,116.13,116.05,114.13,116.44,118.57,117.87,118.146,118.96,118,116.81,117.29,113.75,112.59,115.17,116.22,116.81,120.01,120.89,122.21,121.52,122.25,123.09,121,120.15,120.55,121.54,124.13,126.56,128.045,126.12,123.449,129.65,130.78,131.1,133.51,134.341,133.4,131.72,126.76,128.43,126.382,127.86,130.23,128.5,126.86,128.49,128.76,127,126.938,128.55,133.59,135.02,136.54,141.37,140.41,136.7,130.21,130.93,134.61,133.61,134.59,135.86,134.92,135.85,134.4,133.77,133.692,132.79,129.47,127.41,128.8,125.6,118.39,122.23,120.54,121.2,122.79,125.01,121.84,118.62,117.57,116.21,118.79,119.45,121.26,119.16,120.42,124.715,122.336,120.32,119.675,120.26,122.14,120.065,119,118.92,120.73,118.86,121.15,122.49,123.07,125.65,125.14,128.52,129.47,130.63,131.93,131.655,133.64,133.28,133.34,131.81,131.3,131.41,132.16,133.56,134.11,133.08,132.45,131.065,131.83,126.7,127.97,127.13,129.475,126.81,122.77,122.25,124.26,125.85,125.17,124.78,122.86,125.1,125.21,125.94,126.32,126.42,125.08,124.55,123.94,124.05,123.13,123.85,124.832,126.21,126.52,125.94,126.1,127.07,129.39,128.461,129.65,130.24,129.21,131.62,133.23,132.93,132.81,133.35,134.35,135.87,135.76,137.745,140.07,142.66,140.665,142.652,144,143.63,147.68,147.09,145.88,141.67,142.96,144.63,145.81,146.92,147.7,145.55,142.54,144.58,144.11,145.25,145.18,146.28,146.17,145.63,145.52,145.3,145.53,145.84,148.27,146.47,149.09,146.15,144.5,146.78,147.89,149.15,147.8,147.51,146.83,148.61,151.29,152.34,152.4,153.09,154.39,153.975,153.95,148.7,148.75,146.91,146.37,147.221,145.76,141.27,142.78,143.7,145.64,145.56,143.82,141.69,142.03,141.28,139.11,138.27,139.36,138.37,142.72,142.56,141.81,141.04,139.2,141.51,143.51,143.16,146.55,148.12,147.87,148.64,147.621,149.01,148.49,149.72,146.413,147.8,148.65,149.82,150.64,150.06,150.16,150.06,147.85,147.681,147.48,149.43,149.34,150.99,153.05,156.533,161,159.06,159.64,156.36,158.79,159.92,164.53,157.8,159.72,164.28,168.34,170.7,173.92,174.69,175.53,172.21,172.311,170.75,169.69,167.46,169.12,172.15,175.27,177.07,178.53,178.14,178.09,177.26,177.71,179.12,174.64,171.64,171.03,168.17,170.82,174.82,171.79,171.09,169.405,165.94,164.18,162.3,154.7,157.02,157.82,158.28,162.8,169.51,172.31,173.33,172.12,170.68,170.95,171.43,174.9,171.55,168.04,166.56,170.25,170.05,168.47,166.19,162.15,159.75,152,160.874,162.43,161.97,162.95,165.55,162.1,159.04,155.8,159.41,155.98,154.5,150.1,150.38,154.46,157.63,159.76,163.015,164.91,167.65,170.21,172.75,172,176.34,176.7,174.4,171.94,174.44,174.415,170.13,169.85,169.2,165.5,166.64,166.77,165.04,163.57,163.91,166.1,165.91,161.5,158.46,156.72,155.38,158.93,157.25,153.27,156.32,159.26,154.95,154.18,151.49,152.93,145.81,138.8,143.11,144.18,146.68,139.9,136.6,132.61,137.65,137.33,138.34,137.14,145.26,146.84,147.68,146.86,144.46,144.9,144.1,147.46,142.53,137.06,131.44,131.48,132.16,129.04,129.81,133.32,133.91,135.63,139.77,140.965,137.325,136.67,133.774,135.66,136.93,141.08,143.28,145,143.78,145.05,142.12,143.25,148.2,146.7,146.91,150.37,151.94,153.41,152.28,150.8,152.16,154.41,159.5,160.89,159.63,160.75,164.43,163,164.2,163.25,166.9,168.19,169.4,171.345,171.662,172.57,173.12,171.31,167.135,166.65,166.245,168.35,163.56,159.82,157.72,157.14,154.67,154.965,153.69,153.61,152.68,154.75,159.3,153.37,153.611,151.38,148.37,149.1,153.08,153.6,150.91,148.56,149.64,149.945,144.84,140.68,138,137.685,144.26,143.01,145.22,139.445,138.573,138.22,138.16,134.37,138.19,140.27,140.61,141.5,142.65,142.649,146,149.36,148.04,144.13,147.82,151.92,149.13,145,138.75,134.38,135.671,137.49,134.593,139.5,144.37,147.43,148.561,147.29,146.15,149.97,147.715,146.925,149.34,147.12,143.38,140.355,140.55,146.61,145.65,145.77,141.92,140,141.1,140.9,141.06,144.24,141.16,136.025,133.73,131.32,129.89,132.75,130.3,129.64,128.72,125.87,127.73,127.43,124.17,125.08,124.76,124.89,129.89,128.12,130.46,131.44,131.66,134.13,135.03,133.77,134.22,137.9,140.3,138.81,141.9,143.08,142.85,142.28,141.32,148.17,147.83,150.78,150.64,151.168,150.42,149.22,150.92,150.86,152.88,153.348,150.85,148.405,147.16,147.24,145.72,147.45,146.83,145.01,143.9,147.33,153.46,151.13,151.83,150.225,147.61,147.7,150.1,149.92,151.64,154.28,154.15,156.54,157.81,157.68,157.85,157.87,155.98,159.35,161.271,161.91,164.22,165.11,161.8,162,160.08,160.51,159.78,161.42,163.82,164.03,165.65,165.54,165.56,164.49,163.89,163.73,162.8,165.19,167.88,168.64,167.54,167.16,164.31,170.76,172.11,171.6,171.9,172.17,171,171.47,171.799,170.42,172.58,174.94,173.45,171.275,170.52,171.69,173.11,176.57,176.76,176.931,179.26,178.035,177.43,177.32,177.46,180.63,180.97,182.44,182.02,183.78,184.27,184.41,182.59,183.67,185.01,185.23,185.67,187.6,188.94,191.26,191.76],"close":[15.232,15.266,15.364,15.368,15.42,15.177,15.225,14.964,15.732,15.661,15.75,15.992,16.19,16.162,16.31,16.519,16.766,16.616,16.606,16.465,16.23,16.691,17.485,17.804,17.782,17.94,18.134,17.895,17.941,17.963,17.894,17.963,17.45,17.532,17.561,17.401,17.449,17.81,17.688,17.794,18.077,17.666,16.704,16.882,16.604,16.076,16.261,16.596,16.868,16.693,17.523,17.468,17.197,17.365,17.241,17.027,17.427,17.484,17.265,17.251,17.42,17.176,17.378,17.487,17.6,17.716,17.81,17.897,18.018,18.175,18.62,18.567,18.749,18.997,18.784,18.924,18.453,18.746,18.668,18.572,18.812,18.766,18.604,18.303,18.591,18.537,18.572,18.594,18.863,18.75,18.522,18.555,18.393,18.612,18.564,18.705,19.05,19.499,19.86,19.687,20.226,20.179,20.282,20.001,20.23,20.198,20.049,20.019,19.801,19.911,19.821,19.67,19.445,19.608,20.36,20.274,20.139,20.003,19.804,20.036,19.755,19.321,19.426,19.287,19.409,19.161,19.034,19.133,19.514,19.906,19.795,19.31,19.61,19.697,19.864,19.502,19.661,18.089,17.884,17.849,17.879,17.912,18.171,18.307,18.304,18.56,18.892,19.141,19.14,19.444,19.428,19.5,19.192,18.97,18.759,18.841,18.645,18.477,18.845,18.794,18.849,18.973,19.013,18.955,18.944,18.961,19.146,19.165,18.952,18.739,18.812,18.979,18.974,18.882,19.031,19.257,19.464,19.278,19.195,19.174,19.169,19.345,19.377,19.242,18.994,18.695,18.694,18.94,18.696,18.557,18.631,18.499,18.536,18.748,18.97,18.989,18.741,20.277,20.426,21.217,21.155,21.075,21.124,21.164,21.463,21.229,21.155,21,20.912,21.172,21.206,21.21,21.029,21.34,21.592,21.597,21.654,21.688,21.933,22.344,22.286,22.692,22.607,22.452,22.769,23.029,23.12,23.056,23.425,23.562,23.465,23.073,22.82,23.05,23.02,23.045,22.965,22.728,22.708,22.57,22.59,22.725,22.995,23.233,23.38,23.37,23.507,23.992,23.837,23.847,23.759,23.805,24.112,23.83,23.695,23.272,23.608,23.485,23.68,24.298,24.257,24.418,24.755,24.595,24.538,23.9,24.032,23.897,23.78,23.74,23.62,23.685,23.997,23.993,24.31,24.375,24.495,24.79,25.132,25.142,25.145,25.33,25.385,25.222,25.532,25.562,25.625,25.825,24.735,24.53,24.743,24.59,24.497,25.25,25.358,25.415,25.407,25.215,25.395,25.448,25.24,25.265,25.66,25.438,24.468,25.188,25.028,25.188,24.795,24.975,24.905,24.905,24.688,25.2,25.255,25.183,24.952,24.688,24.385,24.065,24.417,24.94,25.618,25.747,26.208,26.305,26.278,26.685,26.835,26.745,27,27.35,27.15,27.215,27.175,27.253,27.208,27.425,27.812,28.205,28.545,28.497,28.868,28.667,29.077,29.118,29.656,29.4,29.75,29.733,28.767,28.657,28.983,28.872,28.75,28.1,28.53,27.987,27.905,27.433,27.056,26.686,27.353,28.163,27.945,28.235,28.135,28.003,28.497,28.478,28.13,27.595,27.333,26.562,26.565,26.938,27.972,28.003,27.312,27.555,27.45,26.705,26.497,27.18,27.388,28.1,28.245,28.275,27.285,28.827,29.725,29.29,29.657,29.663,29.89,29.985,29.733,29.93,30.505,31.22,31.615,31.77,31.958,32.179,32.112,32.374,33.25,33.042,32.197,32.604,32.115,32.272,32.34,32.135,31.603,31.65,31.785,31.128,30.56,31.112,30.897,31.237,31.76,32.118,31.874,31.475,31.802,31.673,30.845,31.06,30.812,31.593,31.108,31.062,31.33,31.837,31.503,31.4,31.64,31.775,31.712,31.575,31.695,31.542,31.188,31.9,31.728,32.155,32.417,32.57,33.162,32.64,32.16,31.288,32.237,32.175,31.45,31.253,31.315,31.905,31.58,31.466,31.503,32.237,32.193,32.548,32.518,32.515,32.847,33.135,32.405,33.011,32.945,32.57,32.634,32.49,32.53,32.34,32.162,31.95,31.855,32.22,32.147,31.792,31.73,31.9,31.825,31.97,31.65,31.903,31.757,32.028,31.875,31.688,31.132,31.356,31.65,31.61,31.5,31.423,30.642,30.017,30.82,31.415,31.403,31.705,32.127,32.405,33.018,32.688,31.305,31.29,31.125,30.692,30.845,30.747,30.593,30.325,29.61,28.66,28.85,28.782,28.88,29.93,28.372,28.81,28.788,28.99,29.29,29.125,28.753,28.163,26.44,25.78,25.935,27.423,28.23,28.323,28.19,26.93,28.085,27.593,27.317,28.077,27.538,28.142,28.552,28.827,29.07,29.103,28.48,28.362,28.802,28.35,28.58,28.75,28.677,28.11,27.265,27.575,27.395,27.595,27.695,27.827,27.695,27.375,28.03,27.9,27.948,27.552,27.965,27.76,27.933,28.442,28.44,28.875,29.77,28.82,28.638,29.817,30.132,29.875,30.295,30.642,30.5,30.23,30.265,30.142,29.192,29.028,28.93,28.085,28.544,28.423,29.323,29.695,29.825,29.438,29.72,29.507,29.452,29.575,29.335,29.07,28.8,29.757,29.57,29.558,28.905,29.042,28.295,28.12,27.622,27.835,27.245,26.507,26.833,26.808,27.153,27.007,26.705,27.185,26.83,26.315,26.337,25.677,25.175,24.112,24.24,24.632,24.99,24.347,24.88,24.282,24.165,24.198,24.075,25.355,24.86,24.997,23.355,23.522,24.335,24.108,23.62,24.087,24.15,23.505,23.753,23.747,23.567,23.425,23.497,24.16,24.53,24.065,24.01,24.22,23.673,24.025,24.19,24.228,24.173,25.132,25.188,25.375,25.753,25.468,25.257,25.28,25.292,25.565,25.63,26.145,26.493,26.45,26.48,26.478,26.68,26.532,26.417,26.298,26.92,27.39,27.247,27.497,27.78,27.452,27.74,27.135,27.165,27.255,27.61,28.01,28.025,27.462,26.87,26.728,26.782,26.493,26.42,26.27,26.087,24.455,23.708,23.435,23.41,23.795,23.548,23.31,23.18,23.198,23.355,23.128,22.585,22.63,23.47,23.372,23.64,23.55,23.805,24.108,24.475,24.905,25.103,25.087,24.965,24.615,24.43,24.48,24.657,24.757,24.735,24.913,24.708,24.335,24.365,24.285,24.388,23.833,23.775,23.978,23.888,24.025,23.35,23.01,23.397,23.6,23.9,23.972,23.747,23.882,23.985,24.17,24.245,24.355,24.218,24.698,24.695,24.958,24.968,24.99,24.858,24.665,24.335,24.167,25.737,26.085,26.052,26.513,26.12,26.448,26.468,26.87,27.093,27.202,27,26.983,27.045,27.37,27.345,27.305,27.27,27.34,27.128,27.212,27.007,26.892,26.735,26.705,26.5,26.525,26.683,26.933,26.925,27.09,26.38,25.782,26.36,26.987,27.942,28.892,28.73,28.395,28.392,28.388,28.655,28.177,28.22,28.272,28.487,28.045,28.263,28.13,28.25,28.263,28.472,28.515,29.013,29.075,29.335,29.245,29.407,29.388,29.368,29.28,29.265,29.15,29.413,29.562,28.897,28.62,28.43,28.385,27.872,27.897,27.458,27.21,27.603,27.765,27.72,26.948,27.108,26.427,26.778,27.497,27.487,27.515,27.933,27.95,27.808,27.948,27.892,27.865,27.63,27.372,27.475,27.278,27.487,27.757,28.03,28.487,28.325,28.798,28.798,28.955,28.993,29.16,29.237,29.265,29.073,29.13,29.315,29.19,29.183,28.955,29.038,29.005,29.153,29.478,29.747,29.778,29.938,29.812,29.76,30,29.997,29.945,30,30.02,29.993,30.47,30.485,30.487,30.407,30.337,32.188,32.132,32.27,32.572,32.882,33.01,33.105,33.03,33.322,33.755,33.877,33.836,33.93,34.175,34.278,34.132,34.165,34.232,34.248,34.947,34.74,34.945,34.835,34.88,34.75,34.67,34.785,34.8,34.748,35.115,35.173,34.998,35.365,34.96,35.355,35.23,35.16,35.22,35.95,36.03,35.982,35.915,35.925,36.193,36.005,35.915,35.835,35.792,35.408,35.45,35.263,35.458,35.3,35.17,35.61,35.568,35.91,36.132,35.92,35.947,35.912,36.645,36.877,36.765,36.632,37.24,38.252,38.498,38.315,38.487,39.025,38.925,38.868,37.562,38.135,38.265,38.498,38.45,38.335,38.467,38.403,38.417,38.19,38.295,38.862,38.482,38.612,38.842,38.748,37.245,36.355,36.647,36.29,36.072,35.568,36.585,36.252,36.467,36.408,36.57,36.455,35.932,36.458,35.92,36.005,35.875,36.022,35.682,36.045,36.265,36.382,36.435,36.943,37.26,37.39,37.52,37.755,37.585,37.568,38.022,38.185,38.365,37.64,37.375,37.182,37.513,39.285,38.893,39.097,39.702,40.02,40.265,38.83,39.37,39.963,40.4,40.237,39.465,39.375,39.303,39.945,39.995,39.818,39.965,40.368,40.728,40.838,41,41.013,40.52,40.478,40.315,39.658,40.375,40.215,39.912,39.57,39.97,39.667,39.682,39.018,38.347,37.972,37.638,38.285,38.557,38.32,38.53,38.452,38.62,38.37,38.847,38.825,38.96,38.975,39.138,39,39.248,39.97,40.118,39.94,38.995,39.062,39.042,39.275,39.103,39.353,40.763,41.68,42.26,41.722,42.028,43.125,43.562,43.702,44.06,43.97,43.667,43.493,42.835,42.27,42.775,42.537,42.495,43.285,43.74,43.743,43.522,43.268,42.37,42.963,42.763,42.45,42.41,42.252,42.33,42.342,43.167,42.925,43.068,43.055,43.493,44.105,43.635,43.588,43.752,43.752,42.643,42.65,42.77,42.307,43.065,43.057,43.257,43.75,43.588,43.583,43.572,43.82,44.272,44.048,44.775,44.815,44.615,44.25,44.26,43.555,42.778,42.877,41.99,41.743,41.857,41.945,40.125,39.123,40.757,39.885,38.787,39.103,40.678,41.085,41.842,43.248,43.107,42.963,42.768,43.125,43.875,44.743,44.597,44.53,43.75,44.053,44.205,44.167,43.757,44.235,44.995,45.43,44.993,44.61,44.662,44.505,43.825,43.81,42.818,42.213,41.235,43.193,42.085,41.62,41.945,41.67,42.097,42.903,43.2,42.095,42.513,43.312,43.11,43.535,43.682,43.955,44.56,44.46,43.2,41.43,41.31,40.735,40.912,41.055,40.58,41.315,42.275,44.143,44.222,45.958,46.29,46.513,46.84,47.51,47.147,47.037,46.61,47.045,46.748,46.577,46.908,46.79,47.09,47.037,47.145,46.975,46.875,46.717,47.56,47.958,48.327,48.495,48.365,47.925,47.807,48.07,47.675,47.7,47.21,47.185,46.423,46.625,46.365,46.23,45.542,46.107,46.04,46.375,46.278,46.795,45.98,46.35,46.993,47.645,47.588,46.97,47.757,47.833,47.728,47.862,47.6,47.97,47.86,47.903,48.25,48.705,48.553,47.745,47.478,47.572,50.375,51.847,51.998,52.268,51.778,51.812,52.22,51.882,52.217,52.438,52.56,53.33,54.395,53.865,53.76,53.763,53.873,54.04,54.485,54.925,55.745,56.257,56.908,57.09,56.717,55.775,55.325,54.583,55.963,55.268,56.603,55.96,54.47,54.56,54.592,55.007,54.415,55.197,55.548,55.105,56.237,56.435,56.815,57.32,58.018,56.998,56.072,55.943,56.717,54.09,53.612,55.528,54.34,55.537,55.298,54.005,54.827,55.162,55.682,53.772,54.95,54.075,53.06,53.325,54.715,55.555,51.87,50.397,50.943,52.487,52.123,51.118,48.542,48.057,46.7,47.853,48.382,46.465,44.245,44.195,43.072,43.655,43.56,45.235,44.888,44.645,46.205,44.173,43.68,42.123,42.4,42.158,42.275,42.737,41.37,40.985,41.518,40.222,39.208,37.682,36.708,39.292,39.037,39.057,39.435,39.48,35.548,37.065,36.982,37.688,38.327,38.45,38.072,37.5,38.268,38.735,38.965,39.205,38.325,38.48,38.175,39.44,39.075,38.67,41.312,41.61,41.63,42.812,43.545,43.56,42.735,42.603,42.357,42.722,42.545,42.7,42.605,42.732,43.007,42.765,43.243,43.557,43.583,43.717,43.287,43.743,43.963,43.882,43.63,43.125,43.228,44.725,45.228,45.428,45.932,46.53,47.005,46.632,47.04,48.772,47.763,47.185,46.697,47.118,47.18,47.487,47.81,48.505,48.838,48.923,49.25,50.025,49.875,50.155,49.737,49.717,49.807,49.812,50.783,50.965,51.132,51.87,51.79,51.32,51.075,51.153,50.167,52.63,52.287,52.938,52.12,50.715,50.725,50.18,49.295,46.43,47.165,47.73,47.52,47.25,45.772,46.65,45.695,44.915,44.743,44.557,44.345,44.575,43.768,43.325,44.91,45.635,46.305,47.537,48.145,48.702,48.548,48.537,48.185,48.472,49.612,49.467,49.865,49.695,49.645,48.893,49.95,49.935,49.48,50.388,50.682,51.103,51.057,50.005,50.31,50.807,50.438,50.825,51.303,51.125,50.838,51.415,50.647,51.805,52.21,52.167,51.755,51.935,52.42,52.195,53.26,52.107,51.005,48.335,49.25,49.76,50.857,50.248,50.12,52.243,50.688,50.435,51.625,52.588,52.59,53.16,53.115,50.66,51.623,51.04,51.382,52.252,52.185,51.425,52.298,53.32,53.315,53.542,54.175,55.897,55.771,54.688,54.975,55.175,55.693,55.24,54.432,54.68,54.42,55.257,54.972,54.705,55.993,56.147,54.74,55.205,56.752,56.765,56.1,56.757,57.522,59.053,58.967,58.83,58.592,58.82,59.103,60.127,59.99,60.795,60.895,61.645,62.263,60.822,60.815,62.19,63.955,64.375,64.283,64.31,64.857,65.035,65.55,65.49,66.118,65.66,66.44,66.775,66.573,65.798,65.503,65.445,66.592,66.073,66.96,66.812,66.04,64.863,65.435,66.395,67.677,66.73,67.12,67.692,67.865,68.787,69.965,70.103,69.935,70.005,69.86,71,71.067,72.478,72.45,72.88,73.412,75.088,74.357,74.95,74.598,75.798,77.408,77.582,79.24,78.17,77.835,78.81,79.683,79.143,79.425,79.808,79.577,77.238,79.423,81.085,80.967,77.378,77.165,79.713,80.363,81.302,80.007,80.387,79.902,81.8,81.217,81.238,79.75,80.905,80.075,78.262,74.545,72.02,73.162,68.38,68.34,74.702,72.33,75.685,73.23,72.257,66.543,71.335,68.857,62.057,69.493,60.553,63.215,61.667,61.195,57.31,56.092,61.72,61.38,64.61,61.935,63.702,63.572,60.228,61.232,60.353,65.618,64.857,66.518,66.997,68.312,71.762,71.107,71.673,70.7,69.232,67.092,69.025,68.757,70.743,70.793,69.645,71.933,73.45,72.268,73.29,74.39,75.158,75.935,77.533,78.753,77.853,76.912,77.385,76.927,78.74,78.285,79.808,79.213,79.723,79.183,79.527,79.562,79.485,80.463,80.835,81.28,80.58,82.875,83.365,85.997,88.21,83.975,84.7,85.747,88.02,87.897,87.933,87.43,89.717,91.632,90.015,91.21,88.408,90.445,91.2,91.027,91.027,93.463,93.173,95.342,95.683,95.92,95.478,97.058,97.725,96.522,96.327,98.357,97,97.272,92.845,92.615,94.81,93.253,95.04,96.19,106.26,108.938,109.665,110.062,113.902,111.113,112.728,109.375,113.01,115.01,114.908,114.607,115.562,115.707,118.275,124.37,125.857,124.825,126.522,125.01,124.808,129.04,134.18,131.4,120.88,120.96,112.82,117.32,113.49,112,115.355,115.54,112.13,110.34,106.84,110.08,111.81,107.12,108.22,112.28,114.96,114.09,115.81,116.79,113.02,116.5,113.16,115.08,114.97,116.97,124.4,121.1,121.19,120.71,119.02,115.98,117.51,116.87,115.75,115.04,115.05,116.6,111.2,115.32,108.86,108.77,110.44,114.95,119.03,118.69,116.32,115.97,119.49,119.21,119.26,120.3,119.39,118.03,118.64,117.34,113.85,115.17,116.03,116.59,119.05,122.72,123.08,122.94,122.25,123.75,124.38,121.78,123.24,122.41,121.78,127.88,127.81,128.7,126.655,128.23,131.88,130.96,131.97,136.69,134.87,133.72,132.69,129.41,131.01,126.6,130.92,132.05,128.98,128.8,130.89,128.91,127.14,127.83,132.03,136.87,139.07,142.92,143.16,142.06,137.09,131.96,134.14,134.99,133.94,137.39,136.76,136.91,136.01,135.39,135.13,135.37,133.19,130.84,129.71,129.87,126,125.86,125.35,120.99,121.26,127.79,125.12,122.06,120.13,121.42,116.36,121.085,119.98,121.96,121.03,123.99,125.57,124.76,120.53,119.99,123.39,122.54,120.09,120.59,121.21,121.39,119.9,122.15,123,125.9,126.21,127.9,130.36,132.995,131.24,134.43,132.03,134.5,134.16,134.84,133.11,133.5,131.94,134.32,134.72,134.39,133.58,133.48,131.46,132.54,127.85,128.1,129.74,130.21,126.85,125.91,122.77,124.97,127.45,126.27,124.85,124.69,127.31,125.43,127.1,126.9,126.85,125.28,124.61,124.28,125.06,123.54,125.89,125.9,126.74,127.13,126.11,127.35,130.48,129.64,130.15,131.79,130.46,132.3,133.98,133.7,133.41,133.11,134.78,136.33,136.96,137.27,139.96,142.02,144.57,143.24,145.11,144.5,145.64,149.15,148.48,146.39,142.45,146.15,145.4,146.8,148.56,148.99,146.77,144.98,145.64,145.86,145.52,147.36,146.95,147.06,146.14,146.09,145.6,145.86,148.89,149.1,151.12,150.19,146.36,146.7,148.19,149.71,149.62,148.36,147.54,148.6,153.12,151.83,152.51,153.65,154.3,156.69,155.11,154.07,148.97,149.55,148.12,149.03,148.79,146.06,142.94,143.43,145.85,146.83,146.92,145.37,141.91,142.83,141.5,142.65,139.14,141.11,142,143.29,142.9,142.81,141.51,140.91,143.76,144.84,146.55,148.76,149.26,149.48,148.69,148.64,149.32,148.85,152.57,149.8,148.96,150.02,151.49,150.96,151.28,150.44,150.81,147.92,147.87,149.99,150,151,153.49,157.87,160.55,161.02,161.41,161.94,156.81,160.24,165.3,164.77,163.76,161.84,165.32,171.18,175.08,174.56,179.45,175.74,174.33,179.3,172.26,171.14,169.75,172.99,175.64,176.28,180.33,179.29,179.38,178.2,177.57,182.01,179.7,174.92,172,172.17,172.19,175.08,175.53,172.19,173.07,169.8,166.23,164.51,162.41,161.62,159.78,159.69,159.22,170.33,174.78,174.61,175.84,172.9,172.39,171.66,174.83,176.28,172.12,168.64,168.88,172.79,172.55,168.88,167.3,164.32,160.07,162.74,164.85,165.12,163.2,166.56,166.23,163.17,159.3,157.44,162.95,158.52,154.73,150.62,155.09,159.59,160.62,163.98,165.38,168.82,170.21,174.07,174.72,175.6,178.96,177.77,174.61,174.31,178.44,175.06,171.83,172.14,170.09,165.75,167.66,170.4,165.29,165.07,167.4,167.23,166.42,161.79,162.88,156.8,156.57,163.64,157.65,157.96,159.48,166.02,156.77,157.28,152.06,154.51,146.5,142.56,147.11,145.54,149.24,140.82,137.35,137.59,143.11,140.36,140.52,143.78,149.64,148.84,148.71,151.21,145.38,146.14,148.71,147.96,142.64,137.13,131.88,132.76,135.43,130.06,131.56,135.87,135.35,138.27,141.66,141.66,137.44,139.23,136.72,138.93,141.56,142.92,146.35,147.04,144.87,145.86,145.49,148.47,150.17,147.07,151,153.04,155.35,154.09,152.95,151.6,156.79,157.35,162.51,161.51,160.01,166.13,165.81,165.35,164.87,164.92,169.24,168.49,172.1,173.19,173.03,174.55,174.15,171.52,167.57,167.23,167.53,170.03,163.62,161.38,158.91,157.22,157.96,155.81,154.53,155.96,154.46,157.37,163.43,153.84,155.31,152.37,150.7,154.48,156.9,153.72,152.74,150.43,150.77,151.76,149.84,142.48,138.2,142.45,146.1,146.4,145.43,140.09,140.42,138.98,138.34,142.99,138.38,142.41,143.75,143.86,143.39,147.27,149.45,152.34,149.35,144.8,155.74,153.34,150.65,145.03,138.88,138.38,138.92,139.5,134.87,146.87,149.7,148.28,150.04,148.79,150.72,151.29,148.01,150.18,151.07,148.11,144.22,141.17,148.03,148.31,147.81,146.63,142.91,140.94,142.65,142.16,144.49,145.47,143.21,136.5,134.51,132.37,132.3,135.45,132.23,131.86,130.03,126.04,129.61,129.93,125.07,126.36,125.02,129.62,130.15,130.73,133.49,133.41,134.76,135.94,135.21,135.27,137.87,141.11,142.53,141.86,143.96,145.93,143,144.29,145.43,150.82,154.5,151.73,154.65,151.92,150.87,151.01,153.85,153.2,155.33,153.71,152.55,148.48,148.91,149.4,146.71,147.92,147.41,145.31,145.91,151.03,153.83,151.6,152.87,150.59,148.5,150.47,152.59,152.99,155.85,155,157.4,159.28,157.83,158.93,160.25,158.28,157.65,160.77,162.36,164.9,166.17,165.63,163.76,164.66,162.03,160.8,160.1,165.56,165.21,165.23,166.47,167.63,166.65,165.02,165.33,163.77,163.76,168.41,169.68,169.59,168.54,167.45,165.79,173.57,173.5,171.77,173.555,173.75,172.57,172.07,172.07,172.69,175.05,175.16,174.2,171.56,171.84,172.99,175.43,177.3,177.25,180.09,180.95,179.58,179.21,177.82,180.57,180.96,183.79,183.31,183.95,186.01,184.92,185.01,183.96,187,186.68,185.27,188.06,189.25,189.59,193.97,192.46],"lastOpen":193.8300018310547,"lastHigh":193.8800048828125,"lastLow":191.75999450683594,"lastClose":192.4600067138672,"lastVolume":31456587,"dataId":"31456587|192.46","lastDate":20230703,"prevClose":193.97000122070312,"afterClose":null,"afterChange":null,"patterns":[{"kind":1,"strength":13869.72,"status":2,"bounces":0,"x1":0,"y1":168,"x2":600,"y2":168,"x3":0,"y3":0,"x4":0,"y4":0,"ticker":""},{"kind":2,"strength":224.614,"status":-1,"bounces":2,"x1":93,"y1":165,"x2":600,"y2":52,"x3":0,"y3":0,"x4":0,"y4":0,"ticker":""},{"kind":3,"strength":258.5354,"status":0,"bounces":3,"x1":232,"y1":281,"x2":600,"y2":36,"x3":0,"y3":0,"x4":0,"y4":0,"ticker":""}],"patternsMinRange":120,"patternsMaxRange":200};
                                        data.instrument = 'stock';
                                        data.premarket = false;
                                        data.aftermarket = false;
                                        data.hasPatterns = true;
                                        Quote.create(data);
                                    })();
                                  </script><script type="text/javascript">
                                    var chartConfig = {
          "layout":"1h1v",
          "height": 400,
          "scrollable": false,
          "colors": undefined,
          "ideas": false,
          "editable": false,
          "editors": ['tools', 'ideas', 'publish'],
          "charts":[{
                "height": 400,
                "timeframe": "d",
                "dateRange": "",
                "scale": "linear",
                "ticker": "AAPL",
                "instrument": "stock",
                "refreshData": true,
                "premarket": false,
                "aftermarket": false,
                "panes": []
              }],
        };
                                    var taConfig = JSON.parse(JSON.stringify(FinvizSettings.TA));


                                    var FinvizQuoteTypeCurrent = taConfig.style;

                                    var mergeChartAndTAConfig = FLibs.Charts.convertTa.mergeChartAndTAConfig;
                                    mergeChartAndTAConfig(chartConfig, taConfig);

                                    window.globalChartConfig = chartConfig
                                  </script></div><div class="fv-container">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" valign="top">
<div class="content" data-testid="quote-data-content"><table width="100%"><tr>
<td align="center" valign="top">
<table width="100%" cellpadding="3" cellspacing="0" class="fullview-title">
<tr class="text-blue-500"><td align="center"><h1><a href="quote.ashx?t=AAPL&ty=c&ta=1&p=d" class="tab-link" id="ticker">AAPL</a> | <span><a href="https://www.apple.com" target="_blank" class="tab-link" rel="nofollow"><b>Apple Inc.</b></a></span></h1></td></tr>
<tr><td align="center" class="fullview-links"><a href="screener.ashx?v=111&f=sec_technology" class="tab-link">Technology</a> | <a href="screener.ashx?v=111&f=ind_consumerelectronics" class="tab-link">Consumer Electronics</a> | <a href="screener.ashx?v=111&f=geo_usa" class="tab-link">USA</a> | <a href="screener.ashx?v=111&f=exch_nasd" class="tab-link">NASD</a></td></tr>
</table>
<div class="my-3"><div id="IC_D_970x91_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:970px;height:100px;max-height:100px"></div></div><table width="100%" cellpding="0" cellspacing="0" class="fullview-links">
<td class="js-quote-correlation-links-container" align="left" width="80%">
<td align="right" width="20%">
    <a class="tab-link" href="#statements">Scroll to Statements<svg width="12" height="12" class="fill-current inline-block ml-0.5">
    <use href="/assets/icons.svg?rev=3#arrowDown"/>
</svg></a></td>
</tr>
</td>
</table>
<div class="snapshot-table-wrapper"><table width="100%" cellpadding="3" cellspacing="0" border="0" class="snapshot-table2">
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Major index membership] offsetx=[10] offsety=[20] delay=[300]">Index</td><td width="8%" class="snapshot-td2" align="left"><b><small style="font-size: 75%">DJIA, NDX, S&P 500</small></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price-to-Earnings (ttm)] offsetx=[10] offsety=[20] delay=[300]">P/E</td><td width="8%" class="snapshot-td2" align="left"><b>32.70</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Diluted EPS (ttm)] offsetx=[10] offsety=[20] delay=[300]">EPS (ttm)</td><td width="8%" class="snapshot-td2" align="left"><b>5.89</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Insider ownership] offsetx=[10] offsety=[20] delay=[300]">Insider Own</td><td width="8%" class="snapshot-td2" align="left"><b>0.07%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Shares outstanding] offsetx=[10] offsety=[20] delay=[300]">Shs Outstand</td><td width="8%" class="snapshot-td2" align="left"><b>15.79B</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Week)] offsetx=[10] offsety=[20] delay=[300]">Perf Week</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">3.88%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Market capitalization] offsetx=[10] offsety=[20] delay=[300]">Market Cap</td><td width="8%" class="snapshot-td2" align="left"><b>3021.72B</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Forward Price-to-Earnings (next fiscal year)] offsetx=[10] offsety=[20] delay=[300]">Forward P/E</td><td width="8%" class="snapshot-td2" align="left"><b>29.29</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[EPS estimate for next year] offsetx=[10] offsety=[20] delay=[300]">EPS next Y</td><td width="8%" class="snapshot-td2" align="left"><b>6.57</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Insider transactions (6-Month change in Insider Ownership)] offsetx=[10] offsety=[20] delay=[300]">Insider Trans</td><td width="8%" class="snapshot-td2" align="left"><b>-4.39%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Shares float] offsetx=[10] offsety=[20] delay=[300]">Shs Float</td><td width="8%" class="snapshot-td2" align="left"><b>15.71B</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Month)] offsetx=[10] offsety=[20] delay=[300]">Perf Month</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">6.87%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Income (ttm)] offsetx=[10] offsety=[20] delay=[300]">Income</td><td width="8%" class="snapshot-td2" align="left"><b>94.32B</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price-to-Earnings-to-Growth] offsetx=[10] offsety=[20] delay=[300]">PEG</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">4.11</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[EPS estimate for next quarter] offsetx=[10] offsety=[20] delay=[300]">EPS next Q</td><td width="8%" class="snapshot-td2" align="left"><b>1.36</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Institutional ownership] offsetx=[10] offsety=[20] delay=[300]">Inst Own</td><td width="8%" class="snapshot-td2" align="left"><b>60.10%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Short interest share / ratio] offsetx=[10] offsety=[20] delay=[300]">Short Float / Ratio</td><td width="8%" class="snapshot-td2" align="left"><b>0.77% / 2.12</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Quarter)] offsetx=[10] offsety=[20] delay=[300]">Perf Quarter</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">16.71%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Revenue (ttm)] offsetx=[10] offsety=[20] delay=[300]">Sales</td><td width="8%" class="snapshot-td2" align="left"><b>385.10B</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price-to-Sales (ttm)] offsetx=[10] offsety=[20] delay=[300]">P/S</td><td width="8%" class="snapshot-td2" align="left"><b>7.85</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[EPS growth this year] offsetx=[10] offsety=[20] delay=[300]">EPS this Y</td><td width="8%" class="snapshot-td2" align="left"><b>8.90%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Institutional transactions (3-Month change in Institutional Ownership)] offsetx=[10] offsety=[20] delay=[300]">Inst Trans</td><td width="8%" class="snapshot-td2" align="left"><b>-0.47%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Short interest] offsetx=[10] offsety=[20] delay=[300]">Short Interest</td><td width="8%" class="snapshot-td2" align="left"><b>121.25M</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Half Year)] offsetx=[10] offsety=[20] delay=[300]">Perf Half Y</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">48.49%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Book value per share (mrq)] offsetx=[10] offsety=[20] delay=[300]">Book/sh</td><td width="8%" class="snapshot-td2" align="left"><b>3.94</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price-to-Book (mrq)] offsetx=[10] offsety=[20] delay=[300]">P/B</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">48.85</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[EPS growth next year] offsetx=[10] offsety=[20] delay=[300]">EPS next Y</td><td width="8%" class="snapshot-td2" align="left"><b>9.85%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Return on Assets (ttm)] offsetx=[10] offsety=[20] delay=[300]">ROA</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">27.60%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Analysts' mean target price] offsetx=[10] offsety=[20] delay=[300]">Target Price</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">188.47</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Year)] offsetx=[10] offsety=[20] delay=[300]">Perf Year</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">40.77%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Cash per share (mrq)] offsetx=[10] offsety=[20] delay=[300]">Cash/sh</td><td width="8%" class="snapshot-td2" align="left"><b>3.56</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price to cash per share (mrq)] offsetx=[10] offsety=[20] delay=[300]">P/C</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">54.08</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Long term annual growth estimate (5 years)] offsetx=[10] offsety=[20] delay=[300]">EPS next 5Y</td><td width="8%" class="snapshot-td2" align="left"><b>7.96%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Return on Equity (ttm)] offsetx=[10] offsety=[20] delay=[300]">ROE</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">165.70%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[52-Week trading range] offsetx=[10] offsety=[20] delay=[300]">52W Range</td><td width="8%" class="snapshot-td2" align="left"><b><small>124.17 - 194.48</small></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (Year To Date)] offsetx=[10] offsety=[20] delay=[300]">Perf YTD</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">48.13%</span></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Dividend (annual)] offsetx=[10] offsety=[20] delay=[300]">Dividend</td><td width="8%" class="snapshot-td2" align="left"><b>0.96</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Price to Free Cash Flow after Dividends (ttm)<br><br>Cash From Operations minus Capital Expenditures and Dividends Paid] offsetx=[10] offsety=[20] delay=[300]">P/FCF</td><td width="8%" class="snapshot-td2" align="left"><b>36.60</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Annual EPS growth past 5 years] offsetx=[10] offsety=[20] delay=[300]">EPS past 5Y</td><td width="8%" class="snapshot-td2" align="left"><b>21.60%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Return on Investment (ttm)] offsetx=[10] offsety=[20] delay=[300]">ROI</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">58.30%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Distance from 52-Week High] offsetx=[10] offsety=[20] delay=[300]">52W High</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">-1.04%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Beta] offsetx=[10] offsety=[20] delay=[300]">Beta</td><td width="8%" class="snapshot-td2" align="left"><b>1.29</b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Dividend yield (annual)] offsetx=[10] offsety=[20] delay=[300]">Dividend %</td><td width="8%" class="snapshot-td2" align="left"><b>0.50%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Quick Ratio (mrq)] offsetx=[10] offsety=[20] delay=[300]">Quick Ratio</td><td width="8%" class="snapshot-td2" align="left"><b>0.90</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Annual sales growth past 5 years] offsetx=[10] offsety=[20] delay=[300]">Sales past 5Y</td><td width="8%" class="snapshot-td2" align="left"><b>11.50%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Gross Margin (ttm)] offsetx=[10] offsety=[20] delay=[300]">Gross Margin</td><td width="8%" class="snapshot-td2" align="left"><b>43.20%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Distance from 52-Week Low] offsetx=[10] offsety=[20] delay=[300]">52W Low</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">55.00%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Average True Range (14)] offsetx=[10] offsety=[20] delay=[300]">ATR</td><td width="8%" class="snapshot-td2" align="left"><b>2.76</b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Full time employees] offsetx=[10] offsety=[20] delay=[300]">Employees</td><td width="8%" class="snapshot-td2" align="left"><b>164000</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Current Ratio (mrq)] offsetx=[10] offsety=[20] delay=[300]">Current Ratio</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">0.90</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Quarterly revenue growth (YoY)] offsetx=[10] offsety=[20] delay=[300]">Sales Q/Q</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">-2.50%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Operating Margin (ttm)] offsetx=[10] offsety=[20] delay=[300]">Oper. Margin</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">29.20%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Relative Strength Index] offsetx=[10] offsety=[20] delay=[300]">RSI (14)</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">72.19</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Volatility (Week, Month)] offsetx=[10] offsety=[20] delay=[300]">Volatility</td><td width="8%" class="snapshot-td2" align="left"><b><small>1.22% 1.52%</small></b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Stock has options trading on a market exchange] offsetx=[10] offsety=[20] delay=[300]">Optionable</td><td width="8%" class="snapshot-td2" align="left"><b>Yes</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Total Debt to Equity (mrq)] offsetx=[10] offsety=[20] delay=[300]">Debt/Eq</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">1.76</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Quarterly earnings growth (YoY)] offsetx=[10] offsety=[20] delay=[300]">EPS Q/Q</td><td width="8%" class="snapshot-td2" align="left"><b>0.00%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Net Profit Margin (ttm)] offsetx=[10] offsety=[20] delay=[300]">Profit Margin</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">24.50%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Relative volume] offsetx=[10] offsety=[20] delay=[300]">Rel Volume</td><td width="8%" class="snapshot-td2" align="left"><b>0.55</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Previous close] offsetx=[10] offsety=[20] delay=[300]">Prev Close</td><td width="8%" class="snapshot-td2" align="left"><b>193.97</b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Stock available to sell short] offsetx=[10] offsety=[20] delay=[300]">Shortable</td><td width="8%" class="snapshot-td2" align="left"><b>Yes</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Long Term Debt to Equity (mrq)] offsetx=[10] offsety=[20] delay=[300]">LT Debt/Eq</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">1.56</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Earnings date<br><br>BMO = Before Market Open<br>AMC = After Market Close] offsetx=[10] offsety=[20] delay=[300]">Earnings</td><td width="8%" class="snapshot-td2" align="left"><b>May 04 AMC</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Dividend Payout Ratio (ttm)] offsetx=[10] offsety=[20] delay=[300]">Payout</td><td width="8%" class="snapshot-td2" align="left"><b>15.60%</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Average volume (3 month)] offsetx=[10] offsety=[20] delay=[300]">Avg Volume</td><td width="8%" class="snapshot-td2" align="left"><b>57.33M</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Current stock price] offsetx=[10] offsety=[20] delay=[300]">Price</td><td width="8%" class="snapshot-td2" align="left"><b>192.46</b></td>
</tr>
<tr class="table-dark-row">
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Analysts' mean recommendation (1=Buy 5=Sell)] offsetx=[10] offsety=[20] delay=[300]">Recom</td><td width="8%" class="snapshot-td2" align="left"><b>2.00</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Distance from 20-Day Simple Moving Average] offsetx=[10] offsety=[20] delay=[300]">SMA20</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">4.32%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Distance from 50-Day Simple Moving Average] offsetx=[10] offsety=[20] delay=[300]">SMA50</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">8.98%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Distance from 200-Day Simple Moving Average] offsetx=[10] offsety=[20] delay=[300]">SMA200</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-green">24.51%</span></b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Volume] offsetx=[10] offsety=[20] delay=[300]">Volume</td><td width="8%" class="snapshot-td2" align="left"><b>31,456,587</b></td>
<td width="7%" class="snapshot-td2-cp" align="left" data-boxover="cssbody=[tooltip_short_bdy] cssheader=[tooltip_short_hdr] body=[Performance (today)] offsetx=[10] offsety=[20] delay=[300]">Change</td><td width="8%" class="snapshot-td2" align="left"><b><span class="is-red">-0.78%</span></b></td>
</tr>
</table>
</td>
</tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr><td align="center"><div id="IC_D_3x6_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:970px;height:315px;max-height:315px"></div></td></tr><tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr class="js-ratings-row">
<td>
<table width="100%" class="js-table-ratings fullview-ratings-outer" cellpadding="0" cellspacing="0" border="0">
<tr>
                <td width="140" align="left">Date</td>
                <td width="320" align="left">Action</td>
                <td width="320" align="left">Analyst</td>
                <td width="320" align="left">Rating Change</td>
                <td width="320" align="left">Price Target Change</td>
            </tr><tr class="body-table-rating-neutral"><td width="140" align="left">Jun-30-23</td><td width="320" align="left"><b>Initiated</b></td>
<td width="320" align="left">Citigroup</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$240</td>
</tr>
<tr class="body-table-rating-downgrade"><td width="140" align="left">Jun-13-23</td><td width="320" align="left"><b>Downgrade</b></td>
<td width="320" align="left">UBS</td>
<td width="320" align="left">Buy &rarr; Neutral</td>
<td width="320" align="left">$180 &rarr; $190</td>
</tr>
<tr class="body-table-rating-downgrade"><td width="140" align="left">Jun-06-23</td><td width="320" align="left"><b>Downgrade</b></td>
<td width="320" align="left">DA Davidson</td>
<td width="320" align="left">Buy &rarr; Neutral</td>
<td width="320" align="left">$193 &rarr; $185</td>
</tr>
<tr class="body-table-rating-downgrade"><td width="140" align="left">May-22-23</td><td width="320" align="left"><b>Downgrade</b></td>
<td width="320" align="left">Loop Capital</td>
<td width="320" align="left">Buy &rarr; Hold</td>
<td width="320" align="left">$180</td>
</tr>
<tr class="body-table-rating-neutral"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Rosenblatt</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$173 &rarr; $198</td>
</tr>
<tr class="body-table-rating-neutral"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Piper Sandler</td>
<td width="320" align="left">Overweight</td>
<td width="320" align="left">$195 &rarr; $180</td>
</tr>
<tr class="body-table-rating-neutral"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Needham</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$170 &rarr; $195</td>
</tr>
<tr class="body-table-rating-neutral"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Morgan Stanley</td>
<td width="320" align="left">Overweight</td>
<td width="320" align="left">$180 &rarr; $185</td>
</tr>
<tr class="body-table-rating-neutral"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Monness Crespi &amp; Hardt</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$174 &rarr; $188</td>
</tr>
<tr class="body-table-rating-neutral last-row"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">KeyBanc Capital Markets</td>
<td width="320" align="left">Overweight</td>
<td width="320" align="left">$177 &rarr; $180</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Deutsche Bank</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$170 &rarr; $180</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">DA Davidson</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$173 &rarr; $193</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Canaccord Genuity</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$180 &rarr; $185</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">BofA Securities</td>
<td width="320" align="left">Neutral</td>
<td width="320" align="left">$173 &rarr; $176</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-05-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Atlantic Equities</td>
<td width="320" align="left">Overweight</td>
<td width="320" align="left">$180 &rarr; $200</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">May-01-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">BofA Securities</td>
<td width="320" align="left">Neutral</td>
<td width="320" align="left">$168 &rarr; $173</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">Apr-26-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Deutsche Bank</td>
<td width="320" align="left">Buy</td>
<td width="320" align="left">$166 &rarr; $170</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">Apr-26-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">Barclays</td>
<td width="320" align="left">Equal Weight</td>
<td width="320" align="left">$145 &rarr; $149</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">Apr-19-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">JP Morgan</td>
<td width="320" align="left">Overweight</td>
<td width="320" align="left">$175 &rarr; $190</td>
</tr>
<tr class="body-table-rating-neutral hidden"><td width="140" align="left">Apr-06-23</td><td width="320" align="left"><b>Reiterated</b></td>
<td width="320" align="left">BofA Securities</td>
<td width="320" align="left">Neutral</td>
<td width="320" align="left">$158 &rarr; $168</td>
</tr>
</table>
</td>
</tr>
<tr class="js-reveal-ratings-button">
    <td class="fullview-links">
        <a href="" class="tab-link">
            <svg width="16" height="16" class="fill-current inline-block mb-0.5">
    <use href="/assets/icons.svg?rev=3#chevronDown"/>
</svg>
            Show Previous Ratings
        </a>
    </td>
</tr><tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr>
<td>
<table width="100%" cellpadding="0" cellspacing="0"><tr><td><div class="body-table-news-wrapper"><table width="100%" cellpadding="1" cellspacing="0" border="0" id="news-table" class="fullview-news-outer">
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/1b741c30-8e93-3477-892d-04f2d7c2ae73/3-top-warren-buffett-dividend.html');">
        <td width="130" align="right">
            Jul-04-23 01:44PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/1b741c30-8e93-3477-892d-04f2d7c2ae73/3-top-warren-buffett-dividend.html" target="_blank" rel="nofollow">3 Top Warren Buffett Dividend Stocks to Buy Now</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/apple-loses-london-appeal-4g-135105496.html');">
        <td width="130" align="right">
            09:51AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-loses-london-appeal-4g-135105496.html" target="_blank" rel="nofollow">Apple loses London appeal in 4G patent dispute with Optis</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/apple-loses-london-appeal-4g-134630480.html');">
        <td width="130" align="right">
            09:46AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-loses-london-appeal-4g-134630480.html" target="_blank" rel="nofollow">Apple loses London appeal in 4G patent dispute with Optis</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Insider Monkey', 'https://finance.yahoo.com/news/12-easiest-programming-languages-kids-130254323.html');">
        <td width="130" align="right">
            09:02AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/12-easiest-programming-languages-kids-130254323.html" target="_blank" rel="nofollow">12 Easiest Programming Languages for Kids</a>
                </div>
                <div class="news-link-right">
                    <span>(Insider Monkey)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Fortune', 'https://finance.yahoo.com/news/apple-really-worth-3-trillion-111500837.html');">
        <td width="130" align="right">
            07:15AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-really-worth-3-trillion-111500837.html" target="_blank" rel="nofollow">Is Apple really worth $3 trillion? The math suggests no.</a>
                </div>
                <div class="news-link-right">
                    <span>(Fortune)</span></div></div></td></tr>

                        <tr>
                            <td width="130" align="right">05:30AM</td>
                            <td align="left" id="IC_D_3x8_1"><span class="block text-3xs text-gray-500 leading-none">Loading…</span></td>
                        </tr>
                      <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/5ade14f1-8c57-300b-b0c4-8a80dd2554a7/meet-the-ceos-who-pull-in.html');">
        <td width="130" align="right">
            05:30AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/5ade14f1-8c57-300b-b0c4-8a80dd2554a7/meet-the-ceos-who-pull-in.html" target="_blank" rel="nofollow">Meet the CEOs Who Pull In More Than $100 Million a Year</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/0d0b38a7-052c-3853-9b1f-2fbc3c0508fd/prediction%3A-10-stocks-that.html');">
        <td width="130" align="right">
            05:21AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/0d0b38a7-052c-3853-9b1f-2fbc3c0508fd/prediction%3A-10-stocks-that.html" target="_blank" rel="nofollow">Prediction: 10 Stocks That Will Have Trillion-Dollar Valuations by 2035</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/amazon-google-apple-meta-microsoft-064729247.html');">
        <td width="130" align="right">
            02:47AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/amazon-google-apple-meta-microsoft-064729247.html" target="_blank" rel="nofollow">Apple among 7 big techs to face tougher EU rules after being rated 'gatekeeper'</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/1-amazon-google-apple-meta-063757368.html');">
        <td width="130" align="right">
            02:37AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/1-amazon-google-apple-meta-063757368.html" target="_blank" rel="nofollow">UPDATE 2-U.S. Big Tech says it meets EU gatekeeper status, TikTok criticises label</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/amazon-google-apple-meta-microsoft-061602300.html');">
        <td width="130" align="right">
            02:16AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/amazon-google-apple-meta-microsoft-061602300.html" target="_blank" rel="nofollow">Amazon, Google, Apple, Meta, Microsoft say they meet EU gatekeeper threshold</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/apple-aapl-stock-sinks-market-214522152.html');">
        <td width="130" align="right">
            Jul-03-23 05:45PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-aapl-stock-sinks-market-214522152.html" target="_blank" rel="nofollow">Apple (AAPL) Stock Sinks As Market Gains: What You Should Know</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/samsung-sues-chinese-rival-over-191142525.html');">
        <td width="130" align="right">
            03:11PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/samsung-sues-chinese-rival-over-191142525.html" target="_blank" rel="nofollow">Samsung sues Chinese rival over alleged patent violation on iPhone displays</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/apple-ask-us-supreme-court-181813519.html');">
        <td width="130" align="right">
            02:18PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-ask-us-supreme-court-181813519.html" target="_blank" rel="nofollow">Apple to ask US Supreme Court to undo App Store order in Epic Games case</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'AP Finance', 'https://finance.yahoo.com/news/tesla-rivian-rise-apple-astrazeneca-171530075.html');">
        <td width="130" align="right">
            01:15PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/tesla-rivian-rise-apple-astrazeneca-171530075.html" target="_blank" rel="nofollow">Tesla, Rivian rise; Apple, AstraZeneca fall, Monday, 7/3/2023</a>
                </div>
                <div class="news-link-right">
                    <span>(AP Finance)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/top-analyst-reports-apple-verizon-164900821.html');">
        <td width="130" align="right">
            12:49PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/top-analyst-reports-apple-verizon-164900821.html" target="_blank" rel="nofollow">Top Analyst Reports for Apple, Verizon &amp; Amgen</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>

                        <tr>
                            <td width="130" align="right">11:49AM</td>
                            <td align="left" id="IC_D_3x8_2"><span class="block text-3xs text-gray-500 leading-none">Loading…</span></td>
                        </tr>
                      <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Bloomberg', 'https://finance.yahoo.com/news/apple-sharply-cuts-vision-pro-043242449.html');">
        <td width="130" align="right">
            11:49AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-sharply-cuts-vision-pro-043242449.html" target="_blank" rel="nofollow">Apple Cuts Vision Pro Goals After Production Issues, FT Says</a>
                </div>
                <div class="news-link-right">
                    <span>(Bloomberg)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/nokia-nok-inks-long-term-144700587.html');">
        <td width="130" align="right">
            10:47AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/nokia-nok-inks-long-term-144700587.html" target="_blank" rel="nofollow">Nokia (NOK) Inks Long-Term Patent License Agreement With Apple</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/bite-etfs-historic-apples-3t-141400556.html');">
        <td width="130" align="right">
            10:14AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/bite-etfs-historic-apples-3t-141400556.html" target="_blank" rel="nofollow">Take a Bite of These ETFs on Historic Apple's $3T Valuation</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/apple-hits-3t-market-cap-131000347.html');">
        <td width="130" align="right">
            09:10AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-hits-3t-market-cap-131000347.html" target="_blank" rel="nofollow">Apple Hits $3T Market Cap: Can It Reach $4T by 2024-End?</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/7ecb352d-2bf5-3fe6-b1af-74ce6f9bfbdb/1-super-stock-that-could-join.html');">
        <td width="130" align="right">
            09:00AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/7ecb352d-2bf5-3fe6-b1af-74ce6f9bfbdb/1-super-stock-that-could-join.html" target="_blank" rel="nofollow">1 Super Stock That Could Join Apple, Microsoft, Nvidia, Alphabet, and Amazon in the $1 Trillion Club</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Telegraph', 'https://finance.yahoo.com/m/78af7f94-04ba-3a90-a539-ceda9e99ba74/apple-slashes-production-of.html');">
        <td width="130" align="right">
            08:47AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/78af7f94-04ba-3a90-a539-ceda9e99ba74/apple-slashes-production-of.html" target="_blank" rel="nofollow">Apple slashes production of flagship VR headset</a>
                </div>
                <div class="news-link-right">
                    <span>(The Telegraph)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/f3f14d89-5b11-3050-a941-d206b19dbead/how-big-tech-stocks-are.html');">
        <td width="130" align="right">
            08:24AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/f3f14d89-5b11-3050-a941-d206b19dbead/how-big-tech-stocks-are.html" target="_blank" rel="nofollow">How Big Tech Stocks Are Defying a Traditional Market Theory</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/751e58b7-aa53-3fc6-b31a-7b5e706b81aa/1-tech-stock-to-buy-and-1-to.html');">
        <td width="130" align="right">
            06:20AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/751e58b7-aa53-3fc6-b31a-7b5e706b81aa/1-tech-stock-to-buy-and-1-to.html" target="_blank" rel="nofollow">1 Tech Stock to Buy and 1 to Avoid</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/analysis-apples-growing-stock-market-100415210.html');">
        <td width="130" align="right">
            06:04AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/analysis-apples-growing-stock-market-100415210.html" target="_blank" rel="nofollow">How Apple's growing market heft poses a dilemma for stock pickers</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/65cb2cd8-b530-33d1-b71e-57e8b6a8379c/apple-cuts-vision-pro.html');">
        <td width="130" align="right">
            05:57AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/65cb2cd8-b530-33d1-b71e-57e8b6a8379c/apple-cuts-vision-pro.html" target="_blank" rel="nofollow">Apple Cuts Vision Pro Production: Report. Its a Boost for Meta.</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/b6a45ec2-ad2e-3858-ba6a-abd68965fc7b/warren-buffett-has-over-%24270.html');">
        <td width="130" align="right">
            05:50AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/b6a45ec2-ad2e-3858-ba6a-abd68965fc7b/warren-buffett-has-over-%24270.html" target="_blank" rel="nofollow">Warren Buffett Has Over $270 Billion Invested in These 5 Dividend Stocks</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/a7d21fbb-0560-38c6-8f31-c4542582f86e/2-warren-buffett-stocks-that.html');">
        <td width="130" align="right">
            05:06AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/a7d21fbb-0560-38c6-8f31-c4542582f86e/2-warren-buffett-stocks-that.html" target="_blank" rel="nofollow">2 Warren Buffett Stocks That Are Screaming Buys in July and 1 to Avoid Like the Plague</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/apple-makes-history-first-3-085543690.html');">
        <td width="130" align="right">
            04:55AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-makes-history-first-3-085543690.html" target="_blank" rel="nofollow">Apple makes history as first $3 trillion company amid tech stock surge</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Financial Times', 'https://finance.yahoo.com/m/d2e6ca6d-b3e9-3c46-8f5a-2f21f7a28651/apple-forced-to-make-major.html');">
        <td width="130" align="right">
            12:00AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/d2e6ca6d-b3e9-3c46-8f5a-2f21f7a28651/apple-forced-to-make-major.html" target="_blank" rel="nofollow">Apple forced to make major cuts to Vision Pro headset production plans</a>
                </div>
                <div class="news-link-right">
                    <span>(Financial Times)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance', 'https://finance.yahoo.com/news/3-stocks-that-could-still-light-up-2023-just-like-july-4-fireworks-192126419.html');">
        <td width="130" align="right">
            Jul-02-23 03:21PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/3-stocks-that-could-still-light-up-2023-just-like-july-4-fireworks-192126419.html" target="_blank" rel="nofollow">3 stocks that could still light up 2023 just like July 4 fireworks</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance)</span></div></div></td></tr>

                        <tr>
                            <td width="130" align="right">01:47PM</td>
                            <td align="left" id="IC_D_3x8_3"><span class="block text-3xs text-gray-500 leading-none">Loading…</span></td>
                        </tr>
                      <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/861b6419-6083-3969-82aa-e5681a70c805/heard-on-the-street-recap%3A.html');">
        <td width="130" align="right">
            01:47PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/861b6419-6083-3969-82aa-e5681a70c805/heard-on-the-street-recap%3A.html" target="_blank" rel="nofollow">Heard on the Street Recap: Fireworks Come Early</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/56f3bedc-0489-333d-8765-e3ddfdcbbf7a/3-things-about-apple-that.html');">
        <td width="130" align="right">
            11:00AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/56f3bedc-0489-333d-8765-e3ddfdcbbf7a/3-things-about-apple-that.html" target="_blank" rel="nofollow">3 Things About Apple That Smart Investors Know</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investor\u0027s Business Daily', 'https://finance.yahoo.com/m/cdd0f94e-386e-36f5-ba72-0001b77e8818/s%26p-500-rallies-back-to.html');">
        <td width="130" align="right">
            08:29AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/cdd0f94e-386e-36f5-ba72-0001b77e8818/s%26p-500-rallies-back-to.html" target="_blank" rel="nofollow">S&amp;P 500 Rallies Back To Highs, But Watch For This; Tesla Deliveries Due</a>
                </div>
                <div class="news-link-right">
                    <span>(Investor's Business Daily)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/3bd411b8-3e01-3761-b9bb-fa8d2c74dfc3/you%27ll-be-shocked-at-how-much.html');">
        <td width="130" align="right">
            06:30AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/3bd411b8-3e01-3761-b9bb-fa8d2c74dfc3/you%27ll-be-shocked-at-how-much.html" target="_blank" rel="nofollow">You'll Be Shocked at How Much Apple Stock Warren Buffett Owns</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/5b99d5d6-c814-38d3-9a6d-d3e5f190afc9/the-best-ai-stock-to-own.html');">
        <td width="130" align="right">
            05:20AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/5b99d5d6-c814-38d3-9a6d-d3e5f190afc9/the-best-ai-stock-to-own.html" target="_blank" rel="nofollow">The Best AI Stock to Own Could Be Sitting in Your Pocket</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investing.com', 'https://finance.yahoo.com/news/week-tech-ai-could-face-072123635.html');">
        <td width="130" align="right">
            03:21AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/week-tech-ai-could-face-072123635.html" target="_blank" rel="nofollow">This week in tech: AI could face fresh U.S. regulations; Apple gets past $3T</a>
                </div>
                <div class="news-link-right">
                    <span>(Investing.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Simply Wall St.', 'https://finance.yahoo.com/news/4-measures-indicate-apple-nasdaq-140026857.html');">
        <td width="130" align="right">
            Jul-01-23 10:00AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/4-measures-indicate-apple-nasdaq-140026857.html" target="_blank" rel="nofollow">These 4 Measures Indicate That Apple (NASDAQ:AAPL) Is Using Debt Reasonably Well</a>
                </div>
                <div class="news-link-right">
                    <span>(Simply Wall St.)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/99d0bf9d-359a-393f-beb8-cf4b3a537da8/goldman-mulls-exit-of-apple.html');">
        <td width="130" align="right">
            09:27AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/99d0bf9d-359a-393f-beb8-cf4b3a537da8/goldman-mulls-exit-of-apple.html" target="_blank" rel="nofollow">Goldman Mulls Exit of Apple Partnership in Further Retreat From Consumer Business</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/c4680542-7367-328e-8122-67b08857c4f1/does-meta-have-a-chance.html');">
        <td width="130" align="right">
            07:15AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/c4680542-7367-328e-8122-67b08857c4f1/does-meta-have-a-chance.html" target="_blank" rel="nofollow">Does Meta Have a Chance Against Apple in VR?</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/e7274d5f-ceac-3d1b-9583-797325995fc2/unveiling-the-dark-side-of.html');">
        <td width="130" align="right">
            06:45AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/e7274d5f-ceac-3d1b-9583-797325995fc2/unveiling-the-dark-side-of.html" target="_blank" rel="nofollow">Unveiling the Dark Side of Apple's Walled Garden</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/734eee48-7bfc-3895-acbf-de1162d94622/is-apple-the-best-warren.html');">
        <td width="130" align="right">
            06:45AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/734eee48-7bfc-3895-acbf-de1162d94622/is-apple-the-best-warren.html" target="_blank" rel="nofollow">Is Apple the Best Warren Buffett Stock to Buy Right Now?</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'TheStreet.com', 'https://finance.yahoo.com/m/b4063ac7-1d4a-3692-bafa-53f6a037ce86/weekly-roundup.html');">
        <td width="130" align="right">
            Jun-30-23 06:33PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/b4063ac7-1d4a-3692-bafa-53f6a037ce86/weekly-roundup.html" target="_blank" rel="nofollow">Weekly Roundup</a>
                </div>
                <div class="news-link-right">
                    <span>(TheStreet.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investor\u0027s Business Daily', 'https://finance.yahoo.com/m/ddc8e849-d392-35e5-978c-e434a4b86c63/these-are-the-best-dow-jones.html');">
        <td width="130" align="right">
            05:18PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/ddc8e849-d392-35e5-978c-e434a4b86c63/these-are-the-best-dow-jones.html" target="_blank" rel="nofollow">These Are The Best Dow Jones Stocks Of 2023 So Far</a>
                </div>
                <div class="news-link-right">
                    <span>(Investor's Business Daily)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investor\u0027s Business Daily', 'https://finance.yahoo.com/m/cdd0f94e-386e-36f5-ba72-0001b77e8818/s%26p-500-rallies-back-to-highs.html');">
        <td width="130" align="right">
            05:11PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/cdd0f94e-386e-36f5-ba72-0001b77e8818/s%26p-500-rallies-back-to-highs.html" target="_blank" rel="nofollow">S&amp;P 500 Rallies Back To Highs As Apple, Nvidia Lead, But Watch For This; Tesla Deliveries Due</a>
                </div>
                <div class="news-link-right">
                    <span>(Investor's Business Daily)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-rallies-210054888.html');">
        <td width="130" align="right">
            05:00PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-rallies-210054888.html" target="_blank" rel="nofollow">US STOCKS-Wall St rallies; Nasdaq hits 40-yr milestone, Apple scales $3 trillion</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/ea1c6706-207a-3743-bea4-9cb364581638/the-score%3A-apple%2C-lordstown.html');">
        <td width="130" align="right">
            04:55PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/ea1c6706-207a-3743-bea4-9cb364581638/the-score%3A-apple%2C-lordstown.html" target="_blank" rel="nofollow">The Score: Apple, Lordstown Motors, Walgreens and More Stocks That Defined the Week</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investopedia', 'https://finance.yahoo.com/m/34529a98-eed8-3de1-ac74-a19a4e7c192f/dow-jones-today%3A-index.html');">
        <td width="130" align="right">
            04:52PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/34529a98-eed8-3de1-ac74-a19a4e7c192f/dow-jones-today%3A-index.html" target="_blank" rel="nofollow">Dow Jones Today: Index Finishes First Half Higher, Led by Tech Stocks</a>
                </div>
                <div class="news-link-right">
                    <span>(Investopedia)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance Video', 'https://finance.yahoo.com/video/apple-closes-3t-market-cap-204259522.html');">
        <td width="130" align="right">
            04:42PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/video/apple-closes-3t-market-cap-204259522.html" target="_blank" rel="nofollow">Apple closes on $3T market cap, XPeng's SUV pricing, Constellation beer sales: Trending tickers</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance Video)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/0d736d73-3cb8-358d-bb45-a24803979a35/as-apple-hits-%243-trillion%2C.html');">
        <td width="130" align="right">
            04:36PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/0d736d73-3cb8-358d-bb45-a24803979a35/as-apple-hits-%243-trillion%2C.html" target="_blank" rel="nofollow">As Apple Hits $3 Trillion, UBS Warns of Soft iPhone Sales</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple%27s-market-cap-reaches-%243.html');">
        <td width="130" align="right">
            04:28PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple%27s-market-cap-reaches-%243.html" target="_blank" rel="nofollow">Apple's Market Cap Reaches $3 Trillion</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/a0bfbaaa-3914-3525-af94-e74d0269b218/apple-is-the-world%E2%80%99s-first-%243.html');">
        <td width="130" align="right">
            04:24PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/a0bfbaaa-3914-3525-af94-e74d0269b218/apple-is-the-world%E2%80%99s-first-%243.html" target="_blank" rel="nofollow">Apple Is the Worlds First $3 Trillion Company</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/bd3f9ba2-d040-31d2-8e74-cbdcf6cc0102/these-stocks-are-moving-the.html');">
        <td width="130" align="right">
            04:18PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/bd3f9ba2-d040-31d2-8e74-cbdcf6cc0102/these-stocks-are-moving-the.html" target="_blank" rel="nofollow">These Stocks Are Moving the Most Today: Apple, XPeng, Tesla, Carnival, Nvidia, and More</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Kiplinger', 'https://finance.yahoo.com/news/stock-market-today-stocks-pop-201500836.html');">
        <td width="130" align="right">
            04:15PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/stock-market-today-stocks-pop-201500836.html" target="_blank" rel="nofollow">Stock Market Today: Stocks Pop on Upbeat Inflation Data; Apple Hits $3T Market Cap</a>
                </div>
                <div class="news-link-right">
                    <span>(Kiplinger)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance', 'https://finance.yahoo.com/news/apple-hits-3-trillion-market-cap-as-2023-tech-rally-continues-133055319.html');">
        <td width="130" align="right">
            04:13PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-hits-3-trillion-market-cap-as-2023-tech-rally-continues-133055319.html" target="_blank" rel="nofollow">Apple hits $3 trillion market cap as 2023 tech rally continues</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/apple-is-now-worth-%243.html');">
        <td width="130" align="right">
            04:10PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/apple-is-now-worth-%243.html" target="_blank" rel="nofollow">Apple Is Now Worth $3 Trillion. How Its Stock Could Rise Another 30%.</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Bloomberg', 'https://finance.yahoo.com/news/apple-eyes-historic-3-trillion-081616016.html');">
        <td width="130" align="right">
            04:09PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-eyes-historic-3-trillion-081616016.html" target="_blank" rel="nofollow">Apple Hits Historic $3 Trillion Milestone</a>
                </div>
                <div class="news-link-right">
                    <span>(Bloomberg)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/76059630-b5c2-3da5-9d85-ebd6b4523201/goldman-is-looking-for-a-way.html');">
        <td width="130" align="right">
            04:07PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/76059630-b5c2-3da5-9d85-ebd6b4523201/goldman-is-looking-for-a-way.html" target="_blank" rel="nofollow">Goldman Is Looking for a Way Out of Its Partnership With Apple</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investor\u0027s Business Daily', 'https://finance.yahoo.com/m/7abf0d1a-8f78-32a7-bc67-581cdc880b3e/apple-nails-it.-shares-in.html');">
        <td width="130" align="right">
            04:04PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/7abf0d1a-8f78-32a7-bc67-581cdc880b3e/apple-nails-it.-shares-in.html" target="_blank" rel="nofollow">Apple Nails It. Shares In IPhone Maker Close Above $3 Trillion Mark</a>
                </div>
                <div class="news-link-right">
                    <span>(Investor's Business Daily)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-rallies-200039252.html');">
        <td width="130" align="right">
            04:00PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-rallies-200039252.html" target="_blank" rel="nofollow">US STOCKS-Wall St rallies as inflation cools, Apple hits $3 trillion market value</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/08ada698-1513-3c4c-85d4-97857f9094e4/apple-stock-has-a-shot-to.html');">
        <td width="130" align="right">
            03:59PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/08ada698-1513-3c4c-85d4-97857f9094e4/apple-stock-has-a-shot-to.html" target="_blank" rel="nofollow">Apple Stock Has a Shot to Make History Today. Should Investors Be Excited or Worried?</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/a8100f1a-3f55-3b64-9849-a515bc304bbf/meta-platforms-is-suddenly.html');">
        <td width="130" align="right">
            03:50PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/a8100f1a-3f55-3b64-9849-a515bc304bbf/meta-platforms-is-suddenly.html" target="_blank" rel="nofollow">Meta Platforms Is Suddenly Trying to Enter 1 of the Most Valuable Duopolies on the Planet</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance Video', 'https://finance.yahoo.com/video/apple-pace-hold-onto-3-192420385.html');">
        <td width="130" align="right">
            03:24PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/video/apple-pace-hold-onto-3-192420385.html" target="_blank" rel="nofollow">Apple on pace to hold onto $3 trillion market cap ahead of Friday's close</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance Video)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/a3ed910f-0240-36ab-8e66-194a25ffbfd9/in-photos%3A-how-apple-became-a.html');">
        <td width="130" align="right">
            03:00PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/a3ed910f-0240-36ab-8e66-194a25ffbfd9/in-photos%3A-how-apple-became-a.html" target="_blank" rel="nofollow">In Photos: How Apple Became a $3 Trillion Company</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investopedia', 'https://finance.yahoo.com/m/d0aef6fc-e108-37e2-91cd-bb8938e97911/apple%27s-market-cap-hits-%243.html');">
        <td width="130" align="right">
            02:42PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/d0aef6fc-e108-37e2-91cd-bb8938e97911/apple%27s-market-cap-hits-%243.html" target="_blank" rel="nofollow">Apple's Market Cap Hits $3 Trillion, Again</a>
                </div>
                <div class="news-link-right">
                    <span>(Investopedia)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-rallies-183844381.html');">
        <td width="130" align="right">
            02:38PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-rallies-183844381.html" target="_blank" rel="nofollow">US STOCKS-Wall St rallies as inflation cools, Apple hits $3 trillion market value</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple%27s-market-cap-touches-%243.html');">
        <td width="130" align="right">
            02:24PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple%27s-market-cap-touches-%243.html" target="_blank" rel="nofollow">Apple's Market Cap Touches $3 Trillion</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'AP Finance', 'https://finance.yahoo.com/news/apple-close-becoming-first-public-182021964.html');">
        <td width="130" align="right">
            02:20PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-close-becoming-first-public-182021964.html" target="_blank" rel="nofollow">Apple is close to becoming the first public company valued at $3 trillion</a>
                </div>
                <div class="news-link-right">
                    <span>(AP Finance)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/4a2e39d2-d4e0-3fb9-8089-8b3a0421da43/2-warren-buffett-stocks-to.html');">
        <td width="130" align="right">
            01:45PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/4a2e39d2-d4e0-3fb9-8089-8b3a0421da43/2-warren-buffett-stocks-to.html" target="_blank" rel="nofollow">2 Warren Buffett Stocks to Buy Hand Over Fist Right Now</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investor\u0027s Business Daily', 'https://finance.yahoo.com/m/7abf0d1a-8f78-32a7-bc67-581cdc880b3e/will-apple-stock-close-above.html');">
        <td width="130" align="right">
            01:32PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/7abf0d1a-8f78-32a7-bc67-581cdc880b3e/will-apple-stock-close-above.html" target="_blank" rel="nofollow">Will Apple Stock Close Above The $3 Trillion Market Cap On Friday?</a>
                </div>
                <div class="news-link-right">
                    <span>(Investor's Business Daily)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Financial Times', 'https://finance.yahoo.com/m/13b16328-fa09-3d9c-b523-db262d07800a/apple-breaks-through-%243tn.html');">
        <td width="130" align="right">
            01:07PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/13b16328-fa09-3d9c-b523-db262d07800a/apple-breaks-through-%243tn.html" target="_blank" rel="nofollow">Apple breaks through $3tn valuation as shares hit all-time high</a>
                </div>
                <div class="news-link-right">
                    <span>(Financial Times)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-rallies-165341715.html');">
        <td width="130" align="right">
            12:53PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-rallies-165341715.html" target="_blank" rel="nofollow">US STOCKS-Wall St rallies as Apple hits $3 trillion in market cap, inflation cools</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investopedia', 'https://finance.yahoo.com/m/35c7bfb1-e089-3896-b89b-659d2972a166/markets-climb-midday%2C-boosted.html');">
        <td width="130" align="right">
            12:38PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/35c7bfb1-e089-3896-b89b-659d2972a166/markets-climb-midday%2C-boosted.html" target="_blank" rel="nofollow">Markets Climb Midday, Boosted by Cooling Inflation</a>
                </div>
                <div class="news-link-right">
                    <span>(Investopedia)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/4489d50a-288d-3f15-9681-8fdb2ccc7021/apple-at-%243-trillion-is-a.html');">
        <td width="130" align="right">
            12:09PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/4489d50a-288d-3f15-9681-8fdb2ccc7021/apple-at-%243-trillion-is-a.html" target="_blank" rel="nofollow">Apple at $3 Trillion Is a Vision Quest</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/32587070-c4a1-3116-9260-fd8120d2418e/apple-is-warren-buffett%E2%80%99s.html');">
        <td width="130" align="right">
            11:57AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/32587070-c4a1-3116-9260-fd8120d2418e/apple-is-warren-buffett%E2%80%99s.html" target="_blank" rel="nofollow">Apple Is Warren Buffetts Biggest Investment Coup. How He Did It.</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance Video', 'https://finance.yahoo.com/video/nike-stock-dips-apples-3-152537064.html');">
        <td width="130" align="right">
            11:25AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/video/nike-stock-dips-apples-3-152537064.html" target="_blank" rel="nofollow">Nike stock dips, Apple's $3 trillion market cap, Savers Value Village IPO: Trending tickers</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance Video)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance', 'https://finance.yahoo.com/news/hollywood-actors-could-join-writers-in-double-whammy-strike-as-deal-deadline-looms-151137353.html');">
        <td width="130" align="right">
            11:11AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/hollywood-actors-could-join-writers-in-double-whammy-strike-as-deal-deadline-looms-151137353.html" target="_blank" rel="nofollow">Hollywood actors could join writers in 'double whammy' strike as deal deadline looms</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'TheStreet.com', 'https://finance.yahoo.com/m/d2e55b59-eaba-3fb4-9d83-138521f892e1/apple-tops-%243-trillion-in.html');">
        <td width="130" align="right">
            11:00AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/d2e55b59-eaba-3fb4-9d83-138521f892e1/apple-tops-%243-trillion-in.html" target="_blank" rel="nofollow">Apple Tops $3 Trillion in Value as Tech Extends Market Grip</a>
                </div>
                <div class="news-link-right">
                    <span>(TheStreet.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Fly', 'https://finance.yahoo.com/news/nvidia-upgraded-apple-initiated-wall-142753636.html');">
        <td width="130" align="right">
            10:27AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/nvidia-upgraded-apple-initiated-wall-142753636.html" target="_blank" rel="nofollow">Nvidia upgraded, Apple initiated: Wall Street's top analyst calls</a>
                </div>
                <div class="news-link-right">
                    <span>(The Fly)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'TheStreet.com', 'https://finance.yahoo.com/m/77669f27-c703-3039-8a68-857e0a22cd74/wedbush%27s-dan-ives-thinks-one.html');">
        <td width="130" align="right">
            10:27AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/77669f27-c703-3039-8a68-857e0a22cd74/wedbush%27s-dan-ives-thinks-one.html" target="_blank" rel="nofollow">Wedbush's Dan Ives Thinks One Company Will Be Worth $4 Trillion by 2025</a>
                </div>
                <div class="news-link-right">
                    <span>(TheStreet.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-rallies-142631978.html');">
        <td width="130" align="right">
            10:26AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-rallies-142631978.html" target="_blank" rel="nofollow">US STOCKS-Wall St rallies as Apple hits record high, inflation cools</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance Video', 'https://finance.yahoo.com/video/apple-crosses-3-trillion-market-141002095.html');">
        <td width="130" align="right">
            10:10AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/video/apple-crosses-3-trillion-market-141002095.html" target="_blank" rel="nofollow">Apple crosses $3 trillion market cap</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance Video)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple-touches-%243-trillion.html');">
        <td width="130" align="right">
            09:41AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/46422f47-3042-38c1-92da-40b3a67d67f2/apple-touches-%243-trillion.html" target="_blank" rel="nofollow">Apple Touches $3 Trillion Market Cap</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'The Wall Street Journal', 'https://finance.yahoo.com/m/c6b8cbaa-bf49-3db8-9fed-a29df4ca81c1/stocks-to-watch-friday%3A-nike%2C.html');">
        <td width="130" align="right">
            09:40AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/c6b8cbaa-bf49-3db8-9fed-a29df4ca81c1/stocks-to-watch-friday%3A-nike%2C.html" target="_blank" rel="nofollow">Stocks to Watch Friday: Nike, Apple, Constellation</a>
                </div>
                <div class="news-link-right">
                    <span>(The Wall Street Journal)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/1-apples-market-value-breaches-133554978.html');">
        <td width="130" align="right">
            09:35AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/1-apples-market-value-breaches-133554978.html" target="_blank" rel="nofollow">UPDATE 2-Apple's market value breaches $3 trillion mark again</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/apples-market-value-breaches-3-133401791.html');">
        <td width="130" align="right">
            09:34AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apples-market-value-breaches-3-133401791.html" target="_blank" rel="nofollow">Apple's market value breaches $3 trillion mark again</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/24ba427c-5d4b-3454-8c64-b0f12895f57e/2-buffett-stocks-to-buy-and.html');">
        <td width="130" align="right">
            09:21AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/24ba427c-5d4b-3454-8c64-b0f12895f57e/2-buffett-stocks-to-buy-and.html" target="_blank" rel="nofollow">2 Buffett Stocks to Buy and Hold Forever</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-wall-st-set-130659395.html');">
        <td width="130" align="right">
            09:06AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-wall-st-set-130659395.html" target="_blank" rel="nofollow">US STOCKS-Wall St set for higher open as data signals easing inflation</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Financial Times', 'https://finance.yahoo.com/m/13b16328-fa09-3d9c-b523-db262d07800a/apple-set-to-break-through.html');">
        <td width="130" align="right">
            08:49AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/13b16328-fa09-3d9c-b523-db262d07800a/apple-set-to-break-through.html" target="_blank" rel="nofollow">Apple set to break through $3tn valuation again</a>
                </div>
                <div class="news-link-right">
                    <span>(Financial Times)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/apple-sets-sights-on-%243.html');">
        <td width="130" align="right">
            07:55AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/apple-sets-sights-on-%243.html" target="_blank" rel="nofollow">Apple Sets Sights on $3 Trillion. This Analyst Says the Stock Could Rise 30%.</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Investopedia', 'https://finance.yahoo.com/m/331838fe-1e17-356a-abf3-98b51f0698a8/5-things-to-know-before.html');">
        <td width="130" align="right">
            07:50AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/331838fe-1e17-356a-abf3-98b51f0698a8/5-things-to-know-before.html" target="_blank" rel="nofollow">5 Things to Know Before Markets Open</a>
                </div>
                <div class="news-link-right">
                    <span>(Investopedia)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Reuters', 'https://finance.yahoo.com/news/us-stocks-futures-rise-ahead-112836992.html');">
        <td width="130" align="right">
            07:28AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/us-stocks-futures-rise-ahead-112836992.html" target="_blank" rel="nofollow">US STOCKS-Futures rise ahead of inflation data</a>
                </div>
                <div class="news-link-right">
                    <span>(Reuters)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/3bb44280-e966-3de4-9678-8dc7af07685a/3-no-brainer-stocks-to-buy.html');">
        <td width="130" align="right">
            06:45AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/3bb44280-e966-3de4-9678-8dc7af07685a/3-no-brainer-stocks-to-buy.html" target="_blank" rel="nofollow">3 No-Brainer Stocks to Buy Right Now for Less Than $200</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/4178d694-5057-3766-b5a5-f14f011ba364/1-green-flag-for-apple-in.html');">
        <td width="130" align="right">
            06:05AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/4178d694-5057-3766-b5a5-f14f011ba364/1-green-flag-for-apple-in.html" target="_blank" rel="nofollow">1 Green Flag for Apple in 2023, and 1 Red Flag</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Barrons.com', 'https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/as-apple-sets-sights-on-%243.html');">
        <td width="130" align="right">
            05:51AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/00fb3a86-a1b1-32ac-a3dc-66cccf08f4ea/as-apple-sets-sights-on-%243.html" target="_blank" rel="nofollow">As Apple Sets Sights on $3 Trillion, This Analyst Says the Stock Could Rise Another 30%</a>
                </div>
                <div class="news-link-right">
                    <span>(Barrons.com)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/10235a80-b150-3a01-8f6c-3dcebcaf837e/where-will-apple-stock-be-in.html');">
        <td width="130" align="right">
            05:20AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/10235a80-b150-3a01-8f6c-3dcebcaf837e/where-will-apple-stock-be-in.html" target="_blank" rel="nofollow">Where Will Apple Stock Be in 1 Year?</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/6d060ee9-f906-3a10-b4ee-0997646f80ff/wall-street-analyst-dan-ives.html');">
        <td width="130" align="right">
            05:10AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/6d060ee9-f906-3a10-b4ee-0997646f80ff/wall-street-analyst-dan-ives.html" target="_blank" rel="nofollow">Wall Street Analyst Dan Ives Sees a "Tidal Wave" of Growth and $1 Trillion in Incremental IT Spending Unleashed by AI. His 4 Favorite Stocks to Reap the Rewards.</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Motley Fool', 'https://finance.yahoo.com/m/3a812d60-0c45-3213-b049-91eb6c50ecdd/77%25-of-warren-buffett%27s-%24366.html');">
        <td width="130" align="right">
            05:06AM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/m/3a812d60-0c45-3213-b049-91eb6c50ecdd/77%25-of-warren-buffett%27s-%24366.html" target="_blank" rel="nofollow">77% of Warren Buffett's $366 Billion Portfolio Is Invested in Only 6 Stocks</a>
                </div>
                <div class="news-link-right">
                    <span>(Motley Fool)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Bloomberg', 'https://finance.yahoo.com/news/apple-stock-another-30-upside-221801168.html');">
        <td width="130" align="right">
            Jun-29-23 06:18PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/apple-stock-another-30-upside-221801168.html" target="_blank" rel="nofollow">Apple Stock Has Another 30% Upside, Citi Says in New Buy Rating</a>
                </div>
                <div class="news-link-right">
                    <span>(Bloomberg)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Yahoo Finance Video', 'https://finance.yahoo.com/video/apples-nears-3-trillion-market-211604765.html');">
        <td width="130" align="right">
            05:16PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/video/apples-nears-3-trillion-market-211604765.html" target="_blank" rel="nofollow">Apple nears $3 trillion market cap: How it got there</a>
                </div>
                <div class="news-link-right">
                    <span>(Yahoo Finance Video)</span></div></div></td></tr>
    <tr class="cursor-pointer" onclick="trackAndOpenNews(event, 'Zacks', 'https://finance.yahoo.com/news/3-companies-cash-generating-machines-205600421.html');">
        <td width="130" align="right">
            04:56PM
        </td>
        <td align="left">
            <div class="news-link-container">
                <div class="news-link-left">
                    <a class="tab-link-news" href="https://finance.yahoo.com/news/3-companies-cash-generating-machines-205600421.html" target="_blank" rel="nofollow">These 3 Companies Are Cash-Generating Machines</a>
                </div>
                <div class="news-link-right">
                    <span>(Zacks)</span></div></div></td></tr>
</table>
</div>
</td><td width="300" valign="top" style="padding-left: 10px"><div id="IC_D_300x250_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:300px;height:250px;max-height:250px"></div><div id="stocktwits-widget-news" class="fullview-news-outer" data-testid="quote-stocktwits-widget-news-container">
    <div class="footer-cover"></div>
    <div class="right-side-cover"></div>
</div>
<script type="text/javascript">
    function StocktwitsInit() {
        var StocktwitsHeight = document.getElementById('news-table').clientHeight - 500;
        if(typeof STWT !== 'undefined') {
            var isNewLayout = true;
            var isDarkTheme = true;
            var MIN_TWIT_HEIGHT = 71;
            var quoteTicker = 'AAPL';
            var bgColor = isNewLayout ? (isDarkTheme ? '22262F' : 'FFFFFF') : 'transparent';
            var text_color = isNewLayout ? (isDarkTheme ? 'C3C6D0' : '4C5263') : '000000';
            var link_color = isNewLayout ? (isDarkTheme ? '57aefb' : '146ED0') : '4871a8';
            var divider_color = isNewLayout ? (isDarkTheme ? '353945' : 'DEDFE5') : 'd3d3d3';
            var time_color = isNewLayout ? '868EA5' : '999999';
            var username_color = isNewLayout ? (isDarkTheme ? 'F3F3F5' : '22262F') : '600D0B';
            var font_size = isNewLayout ? 12 : 11;
            STWT.Widget({
                container: 'stocktwits-widget-news',
                symbol: quoteTicker,
                width: '300',
                height: StocktwitsHeight,
                limit: Math.ceil(StocktwitsHeight / MIN_TWIT_HEIGHT),
                scrollbars: 0,
                header: 0,
                streaming: 'true',
                style: { link_color, link_hover_color: link_color, header_text_color: text_color, border_color: bgColor, border_color_2: bgColor, divider_color, divider_type: 'solid', box_color: bgColor, stream_color: bgColor, text_color, time_color, font: 'Verdana, Arial, Tahoma', font_size, time_font_size: 10, username_font: 'Verdana, Arial, Tahoma', username_size: font_size, username_color, username_hover_color: username_color }
            });
        }
    }

    function loadStocktwitsScript() {
        var s = document.createElement('script');
        s.addEventListener('load', StocktwitsInit)
        s.setAttribute('async', true)
        s.src = '//api.stocktwits.com/addon/widget/2/widget-loader.min.js'
        document.body.appendChild(s)
    }

    if (document.readyState != 'loading'){
        loadStocktwitsScript();
    } else {
        document.addEventListener('DOMContentLoaded', loadStocktwitsScript);
    }
</script><div id="IC_D_300x250_2"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:300px;height:250px;max-height:250px"></div></td></tr></table></td>
</tr>
<tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr class="table-light3-row">
<td class="fullview-profile" align="left"><div>Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.</div></td></tr>
<tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr><td width="100%"><div id="statements"></div></td></tr><tr><td style="height:10px;font-size:0"><img src="gfx/nic2x2.gif" style="width:685px;height:10px"></td></tr>
<tr>
<td>
<table cellpadding="0" cellspacing="0" width="100%" class="body-table insider-trading-table">
<tr>
<td class="table-top is-white" align="left">Insider Trading</td>
<td class="table-top is-white" align="left">Relationship</td>
<td class="table-top is-white" align="left">Date</td>
<td class="table-top is-white" align="center">Transaction</td>
<td class="table-top is-white" align="right">Cost</td>
<td class="table-top is-white" align="right">#Shares</td>
<td class="table-top is-white" align="right">Value ($)</td>
<td class="table-top is-white" align="right">#Shares Total</td>
<td class="table-top is-white" align="center">SEC Form 4</td>
</tr>
<tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1631982&tc=7" class="tab-link">KONDO CHRIS</td><td style="white-space:nowrap">Principal Accounting Officer</td><td>May 08</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">173.26</td><td class="value" align="right">4,092</td><td class="value" align="right">708,980</td><td class="value" align="right">33,946</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000066/xslF345X04/wf-form4_168375780902324.xml" class="tab-link" target="_blank">May 10 06:30 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1513362&tc=7" class="tab-link">Maestri Luca</td><td style="white-space:nowrap">Senior Vice President, CFO</td><td>Apr 13</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">165.25</td><td class="value" align="right">69,996</td><td class="value" align="right">11,566,839</td><td class="value" align="right">107,661</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000055/xslF345X04/wf-form4_168177065948283.xml" class="tab-link" target="_blank">Apr 17 06:31 PM</a></td></tr><tr class="insider-row  is-sale-1" valign="top"><td><a href="insidertrading.ashx?oc=1513362&tc=7" class="tab-link">Maestri Luca</td><td style="white-space:nowrap">Senior Vice President, CFO</td><td>Apr 06</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">164.92</td><td class="value" align="right">200</td><td class="value" align="right">32,984</td><td class="value" align="right">177,657</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000053/xslF345X04/wf-form4_168116581286812.xml" class="tab-link" target="_blank">Apr 10 06:30 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1496686&tc=7" class="tab-link">WILLIAMS JEFFREY E</td><td style="white-space:nowrap">COO</td><td>Apr 04</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">166.11</td><td class="value" align="right">77,817</td><td class="value" align="right">12,926,379</td><td class="value" align="right">489,816</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000051/xslF345X04/wf-form4_168064766485466.xml" class="tab-link" target="_blank">Apr 04 06:34 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1462356&tc=7" class="tab-link">Adams Katherine L.</td><td style="white-space:nowrap">SVP, GC and Secretary</td><td>Apr 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">165.30</td><td class="value" align="right">72,225</td><td class="value" align="right">11,938,880</td><td class="value" align="right">425,213</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000047/xslF345X04/wf-form4_168064745080973.xml" class="tab-link" target="_blank">Apr 04 06:31 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1214156&tc=7" class="tab-link">COOK TIMOTHY D</td><td style="white-space:nowrap">Chief Executive Officer</td><td>Apr 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">165.17</td><td class="value" align="right">56,072</td><td class="value" align="right">9,261,353</td><td class="value" align="right">3,280,052</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000048/xslF345X04/wf-form4_168064750462974.xml" class="tab-link" target="_blank">Apr 04 06:31 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1767094&tc=7" class="tab-link">O'BRIEN DEIRDRE</td><td style="white-space:nowrap">Senior Vice President</td><td>Apr 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">165.41</td><td class="value" align="right">43,622</td><td class="value" align="right">7,215,444</td><td class="value" align="right">136,444</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000050/xslF345X04/wf-form4_168064761527635.xml" class="tab-link" target="_blank">Apr 04 06:33 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1496686&tc=7" class="tab-link">WILLIAMS JEFFREY E</td><td style="white-space:nowrap">COO</td><td>Mar 22</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">159.76</td><td class="value" align="right">187,730</td><td class="value" align="right">29,991,745</td><td class="value" align="right">489,816</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019323000040/xslF345X04/wf-form4_167969705479427.xml" class="tab-link" target="_blank">Mar 24 06:31 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1631982&tc=7" class="tab-link">KONDO CHRIS</td><td style="white-space:nowrap">Principal Accounting Officer</td><td>Nov 22</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">148.72</td><td class="value" align="right">20,200</td><td class="value" align="right">3,004,144</td><td class="value" align="right">31,505</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000113/xslF345X03/wf-form4_166924620985339.xml" class="tab-link" target="_blank">Nov 23 06:30 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1513362&tc=7" class="tab-link">Maestri Luca</td><td style="white-space:nowrap">Senior Vice President, CFO</td><td>Oct 28</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">155.95</td><td class="value" align="right">176,299</td><td class="value" align="right">27,493,275</td><td class="value" align="right">110,673</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000111/xslF345X03/wf-form4_166734181374173.xml" class="tab-link" target="_blank">Nov 01 06:30 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1767094&tc=7" class="tab-link">O'BRIEN DEIRDRE</td><td style="white-space:nowrap">Senior Vice President</td><td>Oct 17</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">142.45</td><td class="value" align="right">8,053</td><td class="value" align="right">1,147,150</td><td class="value" align="right">136,290</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000102/xslF345X03/wf-form4_166613234346671.xml" class="tab-link" target="_blank">Oct 18 06:33 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1462356&tc=7" class="tab-link">Adams Katherine L.</td><td style="white-space:nowrap">SVP, GC and Secretary</td><td>Oct 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">141.41</td><td class="value" align="right">181,139</td><td class="value" align="right">25,615,117</td><td class="value" align="right">427,334</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000095/xslF345X03/wf-form4_166493432440801.xml" class="tab-link" target="_blank">Oct 04 10:02 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1767094&tc=7" class="tab-link">O'BRIEN DEIRDRE</td><td style="white-space:nowrap">Senior Vice President</td><td>Oct 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">142.16</td><td class="value" align="right">176,299</td><td class="value" align="right">25,062,882</td><td class="value" align="right">136,290</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000097/xslF345X03/wf-form4_166493494107053.xml" class="tab-link" target="_blank">Oct 04 10:05 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1513362&tc=7" class="tab-link">Maestri Luca</td><td style="white-space:nowrap">Senior Vice President, CFO</td><td>Aug 17</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">174.95</td><td class="value" align="right">96,735</td><td class="value" align="right">16,924,259</td><td class="value" align="right">110,673</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000076/xslF345X03/wf-form4_166094821148314.xml" class="tab-link" target="_blank">Aug 19 06:30 PM</a></td></tr><tr class="insider-row  is-sale-2" valign="top"><td><a href="insidertrading.ashx?oc=1462356&tc=7" class="tab-link">Adams Katherine L.</td><td style="white-space:nowrap">SVP, GC and Secretary</td><td>Aug 03</td><td class="transaction" style="white-space:nowrap" align="center"><span>Sale</span></td><td class="value" align="right">164.77</td><td class="value" align="right">25,000</td><td class="value" align="right">4,119,155</td><td class="value" align="right">427,334</td><td style="white-space:nowrap" align="center"><a href="http://www.sec.gov/Archives/edgar/data/320193/000032019322000072/xslF345X03/wf-form4_165973862846098.xml" class="tab-link" target="_blank">Aug 05 06:30 PM</a></td></tr></table>
</td>
</tr>
<table style="margin: 21px auto 14px auto" cellpadding="0" cellspacing="0" border="0">
<tr class="flex">
<td class="fullview-links flex items-center" align="left" valign="center">
<a target="_blank" class="tab-link" href="https://finance.yahoo.com/quote/AAPL" rel="nofollow">open in yahoo</a>&nbsp;|&nbsp<a target="_blank" class="tab-link" href="https://www.reuters.com/companies/AAPL.OQ" rel="nofollow">open in reuters</a>&nbsp;|&nbsp<a target="_blank" class="tab-link" href="https://www.marketwatch.com/investing/stock/aapl" rel="nofollow">open in marketwatch</a>&nbsp;|&nbsp<a target="_blank" class="tab-link" href="https://www.google.com/finance/quote/AAPL:NASDAQ" rel="nofollow">open in google</a>&nbsp;|&nbsp<a target="_blank" class="tab-link" href="https://www.sec.gov/edgar/browse/?CIK=320193" rel="nofollow">open in EDGAR</a></td>
</tr>
</table>
</td></tr></table></div><script type="text/javascript" src="/script/recent_quotes.js?v=333" onerror="window.handleScriptNotLoaded(this)"></script>
</div></div><div class="my-3"><div id="IC_D_3x3_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto" style="width:970px;height:250px;max-height:250px"></div></div>
            <div class="footer" style="margin-top: 20px;padding-bottom: 215px">
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
                <a class="tab-link" href="javascript:void(0)" onclick="window.__uspapi && window.__uspapi('displayUspUi');">do not sell my data</a>
                <span class="footer_dot"> • </span>
                <a class="tab-link" href="javascript:void(0)" onClick="window.__tcfapi && window.__tcfapi('displayConsentUi', 2, function() {})">privacy settings</a>

                </div>
                Quotes delayed 15 minutes for NASDAQ, and 20 minutes for NYSE and AMEX.
                <br>
                Copyright © 2007-2023 FINVIZ.com. All Rights Reserved.
            </div><script>SearchFocus();</script><script src="/assets/dist-legacy/187.33cc4df3.js" onerror="window.handleScriptNotLoaded(this)"></script><script src="/assets/dist-legacy/quote.cb2c0214.js" onerror="window.handleScriptNotLoaded(this)"></script><script>
            function FinvizReady(fn) {
              if (document.readyState != 'loading'){
                fn();
              } else {
                document.addEventListener('DOMContentLoaded', fn);
              }
            }

            (typeof StocktwitsInit === 'function' && FinvizReady(StocktwitsInit));
            (typeof SetSearchExt === 'function' && SetSearchExt('&ty=c&ta=1&p=d'));
        </script>
        <div id="js-set-search-ext-argument" class="hidden" data-set-search-ext-argument="&ty=c&ta=1&p=d"></div>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3261808-1"></script>
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
              gtag('set', {'bundle': 'legacy' });

              gtag('config', 'UA-3261808-1', { sample_rate: 10 });
              gtag('config', 'G-ZT9VQEWD4N', {'dimension1': 'NotLoggedIn', 'dimension3': window.devicePixelRatio + '', 'layoutTheme': 'dark', 'systemTheme': systemTheme });

            </script>
        <div id="IC_D_1x1_1"class="relative overflow-hidden flex items-center justify-center w-full mx-auto"></div><div id="modal-elite-ad" class="modal-elite-ad">
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
                                    <a href="/elite.ashx?utm_source=finviz&utm_medium=banner&utm_campaign=modal-1" id="modal-elite-ad-btn-1" class="modal-elite_button" target="_blank">Learn more about FINVIZ*Elite</a>
                                </div>
                            </div>
                         </div><script src="/script/pv.js?rev=333" async></script><script defer>window.renderScriptNotLoaded();</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon='{"rayId":"7e1a246cbd462aae","version":"2023.4.0","b":1,"token":"e53f08f6c9e04bfd9760701085ec93b4","si":100}' crossorigin="anonymous"></script>
</body>
</html>`;
