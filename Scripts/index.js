require = function i(r, l, d) {
  function s(a, e) {
      if (!l[a]) {
          if (!r[a]) {
              var o = "function" == typeof require && require;
              if (!e && o)
                  return o(a, !0);
              if (c)
                  return c(a, !0);
              var t = new Error("Cannot find module '" + a + "'");
              throw t.code = "MODULE_NOT_FOUND",
              t
          }
          var n = l[a] = {
              exports: {}
          };
          r[a][0].call(n.exports, function(e) {
              return s(r[a][1][e] || e)
          }, n, n.exports, i, r, l, d)
      }
      return l[a].exports
  }
  for (var c = "function" == typeof require && require, e = 0; e < d.length; e++)
      s(d[e]);
  return s
}({
  achievements: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f9694hzfI9LJ4DCX8kR26EM", "achievements");
      var P = e("../all_modules");
      setTimeout(function() {
          P = e("../all_modules")
      }, 0),
      a.exports = {
          checkNew: function(e) {
              var a = e.Achievement;
              if (a) {
                  var o = a.Key
                    , t = a.SubKey
                    , n = (P.configsAchievement[o][t],
                  t.split("_"))
                    , i = parseInt(n[n.length - 1])
                    , r = P.configsAchievement[o][t];
                  if (!r.isHidden) {
                      var l = P.gameLanguage.currentLangFile.achievements[o]
                        , d = l.title.replace("xxx", i)
                        , s = l.desc.replace("xxx", i)
                        , c = r.diamond
                        , u = r.gold
                        , _ = r.exp;
                      P.uiAchievement.showNew({
                          key: o,
                          subKey: t,
                          title: d,
                          desc: s,
                          diamond: c,
                          gold: u,
                          exp: _
                      })
                  }
              }
          },
          getList: function(r) {
              var I = P.gameLanguage.currentLangFile.achievements
                , N = [];
              P.data.getAchievementListNew(function(o) {
                  _log(" getAchievementList :: data = ", o);
                  var e = P.configsAchievement
                    , t = 0
                    , n = 0
                    , a = function(a) {
                      if ("language" == a)
                          return "continue";
                      var e = o.find(function(e) {
                          return e.AchievementKey == a
                      }) || {
                          AchievementKey: a
                      };
                      t += 5,
                      n += function(a) {
                          var e = a.AchievementKey
                            , o = []
                            , t = P.configsAchievement[e]
                            , n = 0;
                          for (var i in t) {
                              var r = i.split("_")
                                , l = parseInt(r[r.length - 1])
                                , d = t[i].isHidden;
                              o.push({
                                  subKey: i,
                                  order: l,
                                  isHidden: d,
                                  reward: t[i]
                              }),
                              d || n++
                          }
                          o.sort(function(e, a) {
                              return e.order > a.order ? -1 : 1
                          });
                          var s = o.findIndex(function(e) {
                              return !!a[e.subKey]
                          });
                          o.reverse();
                          var c = o.findIndex(function(e) {
                              return !e.isHidden
                          });
                          -1 != s && (c < 1 + (s = o.length - s - 1) && (c = s + 1),
                          c > o.length - 1 && (c = o.length - 1));
                          var u = o[c].subKey.split("_")
                            , _ = parseInt(u[u.length - 1])
                            , p = I[e]
                            , g = p.title
                            , m = p.desc;
                          g = g.replace("xxx", _),
                          m = m.replace("xxx", _);
                          var v = void 0;
                          if ("UNLOCK_SLOT" == e) {
                              var f = 0;
                              for (var h in P.game.mySlotList)
                                  P.game.mySlotList[h].isBought && f++;
                              v = f / _
                          } else
                              v = (s + 2) / (c + 2);
                          var b = void 0;
                          if (-1 == s)
                              b = 0;
                          else {
                              var C = s + 1 - (o.length - n);
                              b = (C = _max(C, 0)) / n * 5
                          }
                          var y = {}
                            , x = !1;
                          s < o.length - 1 ? y = o[c].reward : x = !0;
                          var A = y
                            , S = A.diamond
                            , w = A.gold
                            , T = A.exp;
                          return N.push({
                              key: e,
                              subKey: o[c].subKey,
                              starNum: b,
                              progress: v,
                              title: g,
                              desc: m,
                              diamond: S,
                              gold: w,
                              exp: T,
                              isCompleted: x
                          }),
                          _floor(b)
                      }(e)
                  };
                  for (var i in e)
                      a(i);
                  N.configTotalStars = t,
                  N.earnedStars = n,
                  r(N)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  all_modules: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "76636/ty1JLW4V7WEdKSw5G", "all_modules"),
      a.exports = {
          imgBank: {},
          utils: e("./utils/utils"),
          utilsFB: e("./utils/utils_facebook"),
          control: e("./control/control"),
          controlLib: e("./control/control_lib"),
          controlPerformance: e("./control/control_performance_check"),
          controlScrollLayer: e("./control/control_scroll_layer"),
          pseudoServer: e("./pseudo_server/pseudo_server"),
          pseudoAPI: e("./pseudo_server/pseudo_api"),
          login: e("./logic/login"),
          uiHome: e("./ui-fx/ui_home"),
          uiStore: e("./ui-fx/ui_store"),
          uiDog: e("./ui-fx/ui_dog"),
          uiAnimal: e("./ui-fx/ui_animal"),
          uiBot: e("./ui-fx/ui_bot"),
          uiButton: e("./ui-fx/ui_button"),
          uiHarvestNoti: e("./ui-fx/ui_harvest_noti"),
          uiLayout: e("./ui-fx/ui_layout"),
          uiShop: e("./ui-fx/ui_shop"),
          uiSlot: e("./ui-fx/ui_slot"),
          uiTree: e("./ui-fx/ui_tree"),
          uiStorage: e("./ui-fx/ui_storage"),
          uiVictim: e("./ui-fx/ui_victim"),
          uiFindVictim: e("./ui-fx/ui_find_victim"),
          uiAchievement: e("./ui-fx/ui_achievement"),
          events: e("./logic/events"),
          eventsAnimal: e("./logic/events_animal"),
          eventsTree: e("./logic/events_tree"),
          eventsTimer: e("./logic/events_timer"),
          fx: e("./ui-fx/fx"),
          nodePools: e("./ui-fx/node_pools"),
          game: e("./logic/game"),
          configs: e("./configs"),
          configsAchievement: e("./configs_achievement"),
          achievements: e("./logic/achievements"),
          data: e("./data"),
          core: e("./logic/core"),
          timer: e("./logic/timer"),
          storage: e("./logic/storage"),
          infoItem: e("./logic/info_item"),
          findVictim: e("./logic/find_victim"),
          truck: e("./logic/truck"),
          bot: e("./logic/bot"),
          video: e("./logic/video_rewards"),
          social: e("./logic/social"),
          gifts: e("./logic/gifts"),
          syncData: e("./logic/sync_data"),
          sound: e("./resources_sound_sfx"),
          tutorial: e("./tutorial/tutorial"),
          x2reward: e("./logic/x2reward"),
          msgLanguage: e("./locallize/msg_language"),
          gameLanguage: e("./locallize/game_language"),
          languageSwitcher: e("./locallize/language_switcher"),
          leaderboard: e("./logic/leaderboard"),
          farmStatus: e("./logic/farm_status"),
          share: e("./logic/share"),
          stolenDamage: e("./logic/stolen_damage"),
          theme: e("./logic/theme"),
          popups: e("./logic/popup_arragement"),
          dogs: e("./logic/dogs"),
          setModules: function() {
              window._G = e("./all_modules"),
              _G.imgBank = {},
              _G.prefabList = cc.find("Canvas").getComponent("prefab_list"),
              _G.prefabList.themes = {},
              _G.prefabList.dogList = {},
              _G.control = e("./control/control"),
              _G.controlLib = e("./control/control_lib"),
              _G.controlPerformance = e("./control/control_performance_check"),
              _G.controlScrollLayer = e("./control/control_scroll_layer"),
              _G.pseudoAPI = e("./pseudo_server/pseudo_api"),
              _G.pseudoServer = e("./pseudo_server/pseudo_server"),
              _G.login = e("./logic/login"),
              _G.uiHome = e("./ui-fx/ui_home"),
              _G.uiStore = e("./ui-fx/ui_store"),
              _G.uiDog = e("./ui-fx/ui_dog"),
              _G.uiAnimal = e("./ui-fx/ui_animal"),
              _G.uiBot = e("./ui-fx/ui_bot"),
              _G.uiButton = e("./ui-fx/ui_button"),
              _G.uiHarvestNoti = e("./ui-fx/ui_harvest_noti"),
              _G.uiLayout = e("./ui-fx/ui_layout"),
              _G.uiShop = e("./ui-fx/ui_shop"),
              _G.uiSlot = e("./ui-fx/ui_slot"),
              _G.uiTree = e("./ui-fx/ui_tree"),
              _G.uiStorage = e("./ui-fx/ui_storage"),
              _G.uiVictim = e("./ui-fx/ui_victim"),
              _G.uiFindVictim = e("./ui-fx/ui_find_victim"),
              _G.uiAchievement = e("./ui-fx/ui_achievement"),
              _G.events = e("./logic/events"),
              _G.eventsAnimal = e("./logic/events_animal"),
              _G.eventsTree = e("./logic/events_tree"),
              _G.eventsTimer = e("./logic/events_timer"),
              _G.utils = e("./utils/utils"),
              _G.utilsFB = e("./utils/utils_facebook"),
              _G.fx = e("./ui-fx/fx"),
              _G.nodePools = e("./ui-fx/node_pools"),
              _G.game = e("./logic/game"),
              _G.configs = e("./configs"),
              _G.configsAchievement = e("./configs_achievement"),
              _G.achievements = e("./logic/achievements"),
              _G.data = e("./data"),
              _G.core = e("./logic/core"),
              _G.timer = e("./logic/timer"),
              _G.storage = e("./logic/storage"),
              _G.infoItem = e("./logic/info_item"),
              _G.findVictim = e("./logic/find_victim"),
              _G.truck = e("./logic/truck"),
              _G.bot = e("./logic/bot"),
              _G.video = e("./logic/video_rewards"),
              _G.social = e("./logic/social"),
              _G.gifts = e("./logic/gifts"),
              _G.syncData = e("./logic/sync_data"),
              _G.sound = e("./resources_sound_sfx"),
              _G.tutorial = e("./tutorial/tutorial"),
              _G.x2reward = e("./logic/x2reward"),
              _G.msgLanguage = e("./locallize/msg_language"),
              _G.gameLanguage = e("./locallize/game_language"),
              _G.languageSwitcher = e("./locallize/language_switcher"),
              _G.leaderboard = e("./logic/leaderboard"),
              _G.farmStatus = e("./logic/farm_status"),
              _G.share = e("./logic/share"),
              _G.stolenDamage = e("./logic/stolen_damage"),
              _G.theme = e("./logic/theme"),
              _G.popups = e("./logic/popup_arragement"),
              _G.dogs = e("./logic/dogs")
          },
          initModules: function() {
              e("./utils/utils_instant").init(),
              _G.timer.init(),
              _G.controlLib.init(),
              _G.control.init(),
              _G.controlPerformance.init(),
              _G.controlScrollLayer.init(),
              _G.uiDog.init(),
              _G.uiBot.init(),
              _G.uiShop.init(),
              _G.uiSlot.init(),
              _G.uiHarvestNoti.init(),
              _G.uiStorage.init(),
              _G.uiLayout.init(),
              _G.uiButton.init(),
              _G.uiStore.init(),
              _G.uiFindVictim.init(),
              _G.leaderboard.init(),
              _G.data.init(),
              _G.storage.init(),
              _G.infoItem.init(),
              _G.truck.init(),
              _G.video.init(),
              _G.social.init(),
              _G.syncData.init(),
              _G.tutorial.init(),
              _G.fx.init(),
              _G.languageSwitcher.init(),
              _G.theme.init(),
              _G.popups.init(),
              _G.dogs.init(),
              _G.pseudoServer.init(),
              _G.pseudoAPI.init()
          }
      },
      cc._RF.pop()
  }
  , {
      "./all_modules": "all_modules",
      "./configs": "configs",
      "./configs_achievement": "configs_achievement",
      "./control/control": "control",
      "./control/control_lib": "control_lib",
      "./control/control_performance_check": "control_performance_check",
      "./control/control_scroll_layer": "control_scroll_layer",
      "./data": "data",
      "./locallize/game_language": "game_language",
      "./locallize/language_switcher": "language_switcher",
      "./locallize/msg_language": "msg_language",
      "./logic/achievements": "achievements",
      "./logic/bot": "bot",
      "./logic/core": "core",
      "./logic/dogs": "dogs",
      "./logic/events": "events",
      "./logic/events_animal": "events_animal",
      "./logic/events_timer": "events_timer",
      "./logic/events_tree": "events_tree",
      "./logic/farm_status": "farm_status",
      "./logic/find_victim": "find_victim",
      "./logic/game": "game",
      "./logic/gifts": "gifts",
      "./logic/info_item": "info_item",
      "./logic/leaderboard": "leaderboard",
      "./logic/login": "login",
      "./logic/popup_arragement": "popup_arragement",
      "./logic/share": "share",
      "./logic/social": "social",
      "./logic/stolen_damage": "stolen_damage",
      "./logic/storage": "storage",
      "./logic/sync_data": "sync_data",
      "./logic/theme": "theme",
      "./logic/timer": "timer",
      "./logic/truck": "truck",
      "./logic/video_rewards": "video_rewards",
      "./logic/x2reward": "x2reward",
      "./pseudo_server/pseudo_api": "pseudo_api",
      "./pseudo_server/pseudo_server": "pseudo_server",
      "./resources_sound_sfx": "resources_sound_sfx",
      "./tutorial/tutorial": "tutorial",
      "./ui-fx/fx": "fx",
      "./ui-fx/node_pools": "node_pools",
      "./ui-fx/ui_achievement": "ui_achievement",
      "./ui-fx/ui_animal": "ui_animal",
      "./ui-fx/ui_bot": "ui_bot",
      "./ui-fx/ui_button": "ui_button",
      "./ui-fx/ui_dog": "ui_dog",
      "./ui-fx/ui_find_victim": "ui_find_victim",
      "./ui-fx/ui_harvest_noti": "ui_harvest_noti",
      "./ui-fx/ui_home": "ui_home",
      "./ui-fx/ui_layout": "ui_layout",
      "./ui-fx/ui_shop": "ui_shop",
      "./ui-fx/ui_slot": "ui_slot",
      "./ui-fx/ui_storage": "ui_storage",
      "./ui-fx/ui_store": "ui_store",
      "./ui-fx/ui_tree": "ui_tree",
      "./ui-fx/ui_victim": "ui_victim",
      "./utils/utils": "utils",
      "./utils/utils_facebook": "utils_facebook",
      "./utils/utils_instant": "utils_instant"
  }],
  bot_subscribe: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "77d51LIBu9Lio9oxJKwEne0", "bot_subscribe"),
      cc.Class({
          extends: cc.Component,
          onLoad: function() {
              var t = function(e) {
                  var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
                    , o = arguments[2];
                  FBInstant.logEvent(e, a, o)
              };
              window._fbSubscribeBot = function(a) {
                  !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                  var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                  window._isSubscribeFuncCalled || (window._isSubscribeFuncCalled = !0,
                  window.FBInstant ? (t("event_bot_subscribeFunc_call"),
                  FBInstant.player.canSubscribeBotAsync().then(function(e) {
                      if (!e)
                          return t("event_bot_session1_cannot_subscribe"),
                          void (a && a("can_subscribe_false"));
                      window._isCancelledSubscribeBot && t("event_bot_session2_subscribe_twice"),
                      FBInstant.player.subscribeBotAsync().then(function() {
                          a && a("accepted_subscribe"),
                          t(o ? "event_bot_session2_accepted" : "event_bot_session1_accepted"),
                          FBInstant.player.setDataAsync({
                              isSubscribedToBot: !0
                          }).then(function() {
                              console.log("saved to FB isSubscribedToBot = true")
                          })
                      }).catch(function(e) {
                          FBInstant.player.setDataAsync({
                              isCancelledSubscribeBot: !0
                          }).then(function() {
                              console.log("saved to FB isCancelledSubscribeBot = true")
                          }),
                          a && a("cancelled_subscribe"),
                          console.log("subscribe error", e),
                          t(o ? "event_bot_session2_cancelled" : "event_bot_session1_cancelled")
                      })
                  }, function(e) {
                      console.log(" error canSubscribe 444444444 ::::::::: ", e),
                      t("event_bot_cansubscribe_err", 1, {
                          errorDesc: e.message
                      }),
                      a && a("cancelled_subscribe")
                  }).catch(function(e) {
                      console.log(" error canSubscribe 555555555 ::::::::: ", e),
                      t("event_bot_cansubscribe_err", 1, {
                          errorDesc: e.message
                      }),
                      a && a("cancelled_subscribe")
                  })) : a && a())
              }
              ,
              window._askSubscribeSession2 = function() {
                  setTimeout(function() {
                      _fbSubscribeBot(null, !0, !0)
                  }, 1e3)
              }
          }
      }),
      cc._RF.pop()
  }
  , {}],
  bot: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "382c5EFBUFLYL1wEIkKGE09", "bot");
      var g = e("../all_modules");
      setTimeout(function() {
          g = e("../all_modules")
      }, 0),
      a.exports = {
          reset: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , o = e || g.truck.lastData;
              if (e && !a && (g.truck.lastData = e),
              g.bot.isAutoUpdate = !0,
              g.bot.totalCoin = 0,
              g.bot.totalQuantity = 0,
              g.bot.productList = {},
              g.bot.truckCapacity = g.configs.trucks[g.truck.level - 1].capacity,
              g.bot.truckWaitTime = g.configs.trucks[g.truck.level - 1].duration,
              g.bot.truckSkipDiamondNum = g.configs.trucks[g.truck.level - 1].skip,
              o.Quest) {
                  var t = o.Quest.Q1 || {};
                  g.bot.quest1 = {
                      productName: t.ProductId,
                      quantity: parseInt(t.Amount),
                      isEnough: !1
                  };
                  var n = o.Quest.Q2 || {};
                  if (g.bot.quest2 = {
                      productName: n.ProductId,
                      quantity: parseInt(n.Amount),
                      isEnough: !1
                  },
                  e && !a) {
                      var i = g.bot.truckWaitTime - (o.serverTime - parseInt(o.TruckDeparture)) / 1e3
                        , r = i <= 0;
                      g.truck.setTruckPos(!!r && "middle"),
                      r ? g.truck.showInfoBoardParked() : (g.truck.showInfoBoardAway(),
                      g.uiBot.infoBoardAway.setTime(_floor(i), g.truck.moveIn))
                  }
                  g.bot.autoUpdate()
              }
          },
          onTruckUpgraded: function() {
              g.bot.truckCapacity = g.configs.trucks[g.truck.level - 1].capacity,
              g.bot.truckWaitTime = g.configs.trucks[g.truck.level - 1].duration,
              g.bot.autoUpdate(),
              g.uiBot.adjustOrder.rePickProduct()
          },
          orderSell: function(l) {
              window.localStorage && !localStorage.getItem("firstTimeSellOrder") && (localStorage.setItem("firstTimeSellOrder", "true"),
              _logFBEvent("event_first_time_truck_depart", 1, {
                  userLevel: _thisPlayerInfo.level,
                  userGold: _thisPlayerInfo.gold
              }));
              var e = function() {
                  _logFBEvent("event_sell"),
                  _logFBEvent("event_truck_departs"),
                  window._logEventUserDay2 && _logEventUserDay2("sell"),
                  window._isTruckSpeededUp = !1;
                  var e = {};
                  for (var a in g.bot.productList)
                      g.bot.productList[a] && (e[a] = g.bot.productList[a]);
                  g.bot.productList = e,
                  g.uiStorage.isFulledAtGameStart = !1,
                  _log(" orderSell :: productList = ", g.bot.productList),
                  g.data.postTrade(g.bot.productList, function(e) {
                      cc.log(e),
                      g.storage.setStorage(e),
                      _thisPlayerInfo.gold = e.Gold;
                      var a = g.bot.totalCoin;
                      g.fx.unconfirmedPopupArr.push({
                          name: "popup_adjust_order",
                          gold: a,
                          diamond: 0
                      }),
                      g.fx.updateNonPendingGoldDiamond();
                      var o = l
                        , t = _floor(a * g.configs.epg);
                      if (g.fx.claimGold(o, a, "popup_adjust_order", !1),
                      g.fx.claimXpFx(o, t),
                      _hideLayout("popup_adjust_order"),
                      Object.assign(g.storage.allProducts, e.Storage),
                      g.uiButton.inactiveButton(cc.find("Canvas/layout_home/scroll_layer/truck_info_board"), !0),
                      g.truck.moveOut(function() {
                          g.uiBot.infoBoardAway.setDiamondButOnOff(!0)
                      }),
                      window._truckDepartCount || (window._truckDepartCount = 0),
                      window._truckDepartCount++,
                      _logFBEvent("event_truck_depart_count", 1, {
                          count: window._truckDepartCount
                      }),
                      1 == window._truckDepartCount || 2 == window._truckDepartCount) {
                          var n = function(e) {
                              _logFBEvent("event_truck_depart_" + _truckDepartCount + "_extra_play_time", 1, {
                                  timePassed: e
                              })
                          };
                          n(0);
                          var i = 0
                            , r = setInterval(function() {
                              n(i += 10),
                              i > g.configs.trucks[0].duration && clearInterval(r)
                          }, 1e4)
                      }
                      g.truck.showInfoBoardAway(),
                      g.uiBot.infoBoardAway.setDiamondButOnOff(!1),
                      g.uiBot.infoBoardAway.setTime(g.bot.truckWaitTime, g.truck.moveIn),
                      g.truck.lastData = e,
                      g.uiHome.setLevelHome(e),
                      g.storage.isAvailable() && g.uiStorage.handleAvailableAgain()
                  }, function() {
                      g.uiHome.buttonSellAndConfirmDisabled = !1
                  })
              };
              g.video.showInterAdsSellProducts(e, e)
          },
          autoUpdate: function() {
              if (g.bot.isAutoUpdate) {
                  var t = g.bot.productList
                    , e = g.bot.quest1
                    , n = e.productName
                    , a = g.storage.allProducts[n] >= e.quantity;
                  t[n] = a ? e.quantity : 0,
                  e.isEnough = a;
                  var o = g.bot.quest2
                    , i = o.productName
                    , r = a && g.storage.allProducts[i] >= o.quantity;
                  t[i] = r ? o.quantity : 0,
                  o.isEnough = r;
                  var l = t[n] + t[i]
                    , d = [];
                  for (var s in g.storage.allProducts)
                      d.push({
                          name: s,
                          quantity: g.storage.allProducts[s]
                      });
                  d.sort(function(e, a) {
                      return e.quantity > a.quantity ? -1 : 1
                  });
                  var c = l;
                  g.bot.productList = {},
                  n && (g.bot.productList[n] = t[n]),
                  i && (g.bot.productList[i] = t[i]),
                  d.some(function(e) {
                      if (0 != e.quantity) {
                          var a = e.quantity - (e.name == n ? t[n] : 0) - (e.name == i ? t[i] : 0)
                            , o = (c += a) - g.bot.truckCapacity;
                          return 0 <= o && (c = g.bot.truckCapacity,
                          a -= o),
                          g.bot.productList[e.name] = (g.bot.productList[e.name] || 0) + a,
                          0 <= o
                      }
                  });
                  var u = 0;
                  for (var _ in g.bot.productList)
                      u += g.bot.productList[_] * g.configs.products[_].sellPrice;
                  var p = g.bot.quest2.isEnough ? 2 : g.bot.quest1.isEnough ? 1.5 : 1;
                  u = _floor(u * p),
                  g.bot.totalCoin = u,
                  g.bot.totalQuantity = c
              }
              g.uiBot.bot.refreshAll()
          },
          onSlide: function(e, a) {
              g.bot.productList[e] = a;
              var o = 0
                , t = 0;
              for (var n in g.bot.productList)
                  o += g.bot.productList[n],
                  t += g.bot.productList[n] * g.configs.products[n].sellPrice;
              if (g.bot.totalQuantity = o,
              g.uiBot.adjustOrder.setLabelCurrentStorageNum(o),
              g.uiBot.adjustOrder.setMarkStorage(o / g.bot.truckCapacity),
              g.bot.totalQuantity = o,
              g.uiBot.adjustOrder.tickStorage(o),
              g.uiBot.adjustOrder.setSellButtonActive(o),
              e == g.bot.quest1.productName) {
                  var i = a >= g.bot.quest1.quantity;
                  if (g.uiBot.adjustOrder.tick15(i),
                  g.bot.quest1.isEnough = i) {
                      var r = g.bot.productList[g.bot.quest2.productName];
                      r && r >= g.bot.quest2.quantity && (g.bot.quest2.isEnough = !0,
                      g.uiBot.adjustOrder.tick20(!0))
                  } else
                      g.bot.quest2.isEnough = !1,
                      g.uiBot.adjustOrder.tick20(!1)
              }
              if (e == g.bot.quest2.productName) {
                  var l = g.bot.quest1.isEnough && a >= g.bot.quest2.quantity;
                  g.uiBot.adjustOrder.tick20(l),
                  g.bot.quest2.isEnough = l
              }
              var d = g.bot.quest2.isEnough ? 2 : g.bot.quest1.isEnough ? 1.5 : 1;
              t = _floor(t * d),
              g.uiBot.adjustOrder.setCoin(t),
              g.bot.totalCoin = t
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  configs_achievement: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "99a42X2ZUtBwYyIpcmbbO/c", "configs_achievement"),
      a.exports = {
          UNLOCK_SLOT: {
              UNLOCK_SLOT_10: {
                  requirement: 10,
                  gold: 125,
                  exp: 10,
                  diamond: 0
              },
              UNLOCK_SLOT_20: {
                  requirement: 20,
                  gold: 750,
                  exp: 50,
                  diamond: 0
              },
              UNLOCK_SLOT_30: {
                  requirement: 30,
                  gold: 3e3,
                  exp: 100,
                  diamond: 0
              },
              UNLOCK_SLOT_40: {
                  requirement: 40,
                  gold: 11200,
                  exp: 300,
                  diamond: 0
              },
              UNLOCK_SLOT_50: {
                  requirement: 50,
                  gold: 24e3,
                  exp: 600,
                  diamond: 0
              },
              UNLOCK_SLOT_60: {
                  requirement: 60,
                  gold: 28800,
                  exp: 900,
                  diamond: 0
              },
              UNLOCK_SLOT_70: {
                  requirement: 70,
                  gold: 55e3,
                  exp: 1200,
                  diamond: 0
              },
              UNLOCK_SLOT_80: {
                  requirement: 80,
                  gold: 75e3,
                  exp: 1500,
                  diamond: 0
              },
              UNLOCK_SLOT_90: {
                  requirement: 90,
                  gold: 95e3,
                  exp: 1800,
                  diamond: 0
              }
          },
          UP_LUA: {
              UP_LUA_2: {
                  isHidden: !0
              },
              UP_LUA_3: {
                  isHidden: !0
              },
              UP_LUA_4: {
                  isHidden: !0
              },
              UP_LUA_5: {
                  isHidden: !0
              },
              UP_LUA_6: {
                  requirement: 6,
                  gold: 96,
                  exp: 5,
                  diamond: 0
              },
              UP_LUA_7: {
                  requirement: 7,
                  gold: 192,
                  exp: 25,
                  diamond: 0
              },
              UP_LUA_8: {
                  requirement: 8,
                  gold: 384,
                  exp: 50,
                  diamond: 0
              },
              UP_LUA_9: {
                  requirement: 9,
                  gold: 768,
                  exp: 100,
                  diamond: 0
              },
              UP_LUA_10: {
                  requirement: 10,
                  gold: 1536,
                  exp: 200,
                  diamond: 0
              }
          },
          UP_CACHUA: {
              UP_CACHUA_2: {
                  isHidden: !0
              },
              UP_CACHUA_3: {
                  isHidden: !0
              },
              UP_CACHUA_4: {
                  isHidden: !0
              },
              UP_CACHUA_5: {
                  isHidden: !0
              },
              UP_CACHUA_6: {
                  requirement: 6,
                  gold: 192,
                  exp: 10,
                  diamond: 0
              },
              UP_CACHUA_7: {
                  requirement: 7,
                  gold: 384,
                  exp: 20,
                  diamond: 0
              },
              UP_CACHUA_8: {
                  requirement: 8,
                  gold: 768,
                  exp: 40,
                  diamond: 0
              },
              UP_CACHUA_9: {
                  requirement: 9,
                  gold: 1536,
                  exp: 80,
                  diamond: 0
              },
              UP_CACHUA_10: {
                  requirement: 10,
                  gold: 3072,
                  exp: 160,
                  diamond: 0
              }
          },
          UP_KHOAI: {
              UP_KHOAI_2: {
                  isHidden: !0
              },
              UP_KHOAI_3: {
                  isHidden: !0
              },
              UP_KHOAI_4: {
                  isHidden: !0
              },
              UP_KHOAI_5: {
                  isHidden: !0
              },
              UP_KHOAI_6: {
                  requirement: 6,
                  gold: 288,
                  exp: 15,
                  diamond: 0
              },
              UP_KHOAI_7: {
                  requirement: 7,
                  gold: 576,
                  exp: 30,
                  diamond: 0
              },
              UP_KHOAI_8: {
                  requirement: 8,
                  gold: 1152,
                  exp: 60,
                  diamond: 0
              },
              UP_KHOAI_9: {
                  requirement: 9,
                  gold: 2304,
                  exp: 90,
                  diamond: 0
              },
              UP_KHOAI_10: {
                  requirement: 10,
                  gold: 4608,
                  exp: 180,
                  diamond: 0
              }
          },
          UP_BOSUA: {
              UP_BOSUA_2: {
                  isHidden: !0
              },
              UP_BOSUA_3: {
                  isHidden: !0
              },
              UP_BOSUA_4: {
                  isHidden: !0
              },
              UP_BOSUA_5: {
                  isHidden: !0
              },
              UP_BOSUA_6: {
                  requirement: 6,
                  gold: 3200,
                  exp: 1200,
                  diamond: 0
              },
              UP_BOSUA_7: {
                  requirement: 7,
                  gold: 6400,
                  exp: 1400,
                  diamond: 0
              },
              UP_BOSUA_8: {
                  requirement: 8,
                  gold: 12800,
                  exp: 1600,
                  diamond: 0
              },
              UP_BOSUA_9: {
                  requirement: 9,
                  gold: 25600,
                  exp: 1800,
                  diamond: 0
              },
              UP_BOSUA_10: {
                  requirement: 10,
                  gold: 51240,
                  exp: 2e3,
                  diamond: 0
              }
          },
          UP_GAMAI: {
              UP_GAMAI_2: {
                  isHidden: !0
              },
              UP_GAMAI_3: {
                  isHidden: !0
              },
              UP_GAMAI_4: {
                  isHidden: !0
              },
              UP_GAMAI_5: {
                  isHidden: !0
              },
              UP_GAMAI_6: {
                  requirement: 6,
                  gold: 4800,
                  exp: 1800,
                  diamond: 0
              },
              UP_GAMAI_7: {
                  requirement: 7,
                  gold: 9600,
                  exp: 2100,
                  diamond: 0
              },
              UP_GAMAI_8: {
                  requirement: 8,
                  gold: 19200,
                  exp: 2400,
                  diamond: 0
              },
              UP_GAMAI_9: {
                  requirement: 9,
                  gold: 38400,
                  exp: 2700,
                  diamond: 0
              },
              UP_GAMAI_10: {
                  requirement: 10,
                  gold: 76800,
                  exp: 3e3,
                  diamond: 0
              }
          },
          UP_DUA: {
              UP_DUA_2: {
                  isHidden: !0
              },
              UP_DUA_3: {
                  isHidden: !0
              },
              UP_DUA_4: {
                  isHidden: !0
              },
              UP_DUA_5: {
                  isHidden: !0
              },
              UP_DUA_6: {
                  requirement: 6,
                  gold: 480,
                  exp: 20,
                  diamond: 0
              },
              UP_DUA_7: {
                  requirement: 7,
                  gold: 960,
                  exp: 40,
                  diamond: 0
              },
              UP_DUA_8: {
                  requirement: 8,
                  gold: 1920,
                  exp: 80,
                  diamond: 0
              },
              UP_DUA_9: {
                  requirement: 9,
                  gold: 3840,
                  exp: 160,
                  diamond: 0
              },
              UP_DUA_10: {
                  requirement: 10,
                  gold: 7680,
                  exp: 320,
                  diamond: 0
              }
          },
          UP_NGO: {
              UP_NGO_2: {
                  isHidden: !0
              },
              UP_NGO_3: {
                  isHidden: !0
              },
              UP_NGO_4: {
                  isHidden: !0
              },
              UP_NGO_5: {
                  isHidden: !0
              },
              UP_NGO_6: {
                  requirement: 6,
                  gold: 672,
                  exp: 25,
                  diamond: 0
              },
              UP_NGO_7: {
                  requirement: 7,
                  gold: 1344,
                  exp: 50,
                  diamond: 0
              },
              UP_NGO_8: {
                  requirement: 8,
                  gold: 2688,
                  exp: 100,
                  diamond: 0
              },
              UP_NGO_9: {
                  requirement: 9,
                  gold: 5376,
                  exp: 200,
                  diamond: 0
              },
              UP_NGO_10: {
                  requirement: 10,
                  gold: 10752,
                  exp: 400,
                  diamond: 0
              }
          },
          UP_CAROT: {
              UP_CAROT_2: {
                  isHidden: !0
              },
              UP_CAROT_3: {
                  isHidden: !0
              },
              UP_CAROT_4: {
                  isHidden: !0
              },
              UP_CAROT_5: {
                  isHidden: !0
              },
              UP_CAROT_6: {
                  requirement: 6,
                  gold: 960,
                  exp: 30,
                  diamond: 0
              },
              UP_CAROT_7: {
                  requirement: 7,
                  gold: 1920,
                  exp: 60,
                  diamond: 0
              },
              UP_CAROT_8: {
                  requirement: 8,
                  gold: 3840,
                  exp: 120,
                  diamond: 0
              },
              UP_CAROT_9: {
                  requirement: 9,
                  gold: 7680,
                  exp: 240,
                  diamond: 0
              },
              UP_CAROT_10: {
                  requirement: 10,
                  gold: 15360,
                  exp: 480,
                  diamond: 0
              }
          },
          UP_BAPCAI: {
              UP_BAPCAI_2: {
                  isHidden: !0
              },
              UP_BAPCAI_3: {
                  isHidden: !0
              },
              UP_BAPCAI_4: {
                  isHidden: !0
              },
              UP_BAPCAI_5: {
                  isHidden: !0
              },
              UP_BAPCAI_6: {
                  requirement: 6,
                  gold: 1440,
                  exp: 35,
                  diamond: 0
              },
              UP_BAPCAI_7: {
                  requirement: 7,
                  gold: 2880,
                  exp: 70,
                  diamond: 0
              },
              UP_BAPCAI_8: {
                  requirement: 8,
                  gold: 5760,
                  exp: 140,
                  diamond: 0
              },
              UP_BAPCAI_9: {
                  requirement: 9,
                  gold: 11520,
                  exp: 280,
                  diamond: 0
              },
              UP_BAPCAI_10: {
                  requirement: 10,
                  gold: 23040,
                  exp: 560,
                  diamond: 0
              }
          },
          UP_BINGO: {
              UP_BINGO_2: {
                  isHidden: !0
              },
              UP_BINGO_3: {
                  isHidden: !0
              },
              UP_BINGO_4: {
                  isHidden: !0
              },
              UP_BINGO_5: {
                  isHidden: !0
              },
              UP_BINGO_6: {
                  requirement: 6,
                  gold: 1920,
                  exp: 40,
                  diamond: 0
              },
              UP_BINGO_7: {
                  requirement: 7,
                  gold: 3840,
                  exp: 80,
                  diamond: 0
              },
              UP_BINGO_8: {
                  requirement: 8,
                  gold: 7680,
                  exp: 160,
                  diamond: 0
              },
              UP_BINGO_9: {
                  requirement: 9,
                  gold: 15360,
                  exp: 320,
                  diamond: 0
              },
              UP_BINGO_10: {
                  requirement: 10,
                  gold: 30720,
                  exp: 640,
                  diamond: 0
              }
          },
          UP_PINEAPPLE: {
              UP_PINEAPPLE_2: {
                  isHidden: !0
              },
              UP_PINEAPPLE_3: {
                  isHidden: !0
              },
              UP_PINEAPPLE_4: {
                  isHidden: !0
              },
              UP_PINEAPPLE_5: {
                  isHidden: !0
              },
              UP_PINEAPPLE_6: {
                  requirement: 6,
                  gold: 2112,
                  exp: 60,
                  diamond: 2
              },
              UP_PINEAPPLE_7: {
                  requirement: 7,
                  gold: 4224,
                  exp: 120,
                  diamond: 2
              },
              UP_PINEAPPLE_8: {
                  requirement: 8,
                  gold: 8448,
                  exp: 240,
                  diamond: 2
              },
              UP_PINEAPPLE_9: {
                  requirement: 9,
                  gold: 16896,
                  exp: 480,
                  diamond: 2
              },
              UP_PINEAPPLE_10: {
                  requirement: 10,
                  gold: 33792,
                  exp: 510,
                  diamond: 2
              }
          },
          UP_GOAT: {
              UP_GOAT_2: {
                  isHidden: !0
              },
              UP_GOAT_3: {
                  isHidden: !0
              },
              UP_GOAT_4: {
                  isHidden: !0
              },
              UP_GOAT_5: {
                  isHidden: !0
              },
              UP_GOAT_6: {
                  requirement: 6,
                  gold: 5280,
                  exp: 2340,
                  diamond: 2
              },
              UP_GOAT_7: {
                  requirement: 7,
                  gold: 10560,
                  exp: 2730,
                  diamond: 2
              },
              UP_GOAT_8: {
                  requirement: 8,
                  gold: 21120,
                  exp: 3120,
                  diamond: 2
              },
              UP_GOAT_9: {
                  requirement: 9,
                  gold: 42240,
                  exp: 3510,
                  diamond: 2
              },
              UP_GOAT_10: {
                  requirement: 10,
                  gold: 84480,
                  exp: 3900,
                  diamond: 2
              }
          },
          UP_COCONUT: {
              UP_COCONUT_2: {
                  isHidden: !0
              },
              UP_COCONUT_3: {
                  isHidden: !0
              },
              UP_COCONUT_4: {
                  isHidden: !0
              },
              UP_COCONUT_5: {
                  isHidden: !0
              },
              UP_COCONUT_6: {
                  requirement: 6,
                  gold: 2534,
                  exp: 78,
                  diamond: 5
              },
              UP_COCONUT_7: {
                  requirement: 7,
                  gold: 5068,
                  exp: 156,
                  diamond: 5
              },
              UP_COCONUT_8: {
                  requirement: 8,
                  gold: 10137,
                  exp: 312,
                  diamond: 5
              },
              UP_COCONUT_9: {
                  requirement: 9,
                  gold: 20275,
                  exp: 624,
                  diamond: 5
              },
              UP_COCONUT_10: {
                  requirement: 10,
                  gold: 40550,
                  exp: 663,
                  diamond: 5
              }
          },
          UP_SHEEP: {
              UP_SHEEP_2: {
                  isHidden: !0
              },
              UP_SHEEP_3: {
                  isHidden: !0
              },
              UP_SHEEP_4: {
                  isHidden: !0
              },
              UP_SHEEP_5: {
                  isHidden: !0
              },
              UP_SHEEP_6: {
                  requirement: 6,
                  gold: 6336,
                  exp: 3510,
                  diamond: 5
              },
              UP_SHEEP_7: {
                  requirement: 7,
                  gold: 12672,
                  exp: 4095,
                  diamond: 5
              },
              UP_SHEEP_8: {
                  requirement: 8,
                  gold: 25344,
                  exp: 4680,
                  diamond: 5
              },
              UP_SHEEP_9: {
                  requirement: 9,
                  gold: 50688,
                  exp: 5265,
                  diamond: 5
              },
              UP_SHEEP_10: {
                  requirement: 10,
                  gold: 101376,
                  exp: 5850,
                  diamond: 5
              }
          },
          UP_NHAKHO: {
              UP_NHAKHO_2: {
                  requirement: 2,
                  gold: 200,
                  exp: 25,
                  diamond: 2
              },
              UP_NHAKHO_3: {
                  requirement: 3,
                  gold: 300,
                  exp: 50,
                  diamond: 3
              },
              UP_NHAKHO_4: {
                  requirement: 4,
                  gold: 450,
                  exp: 100,
                  diamond: 5
              },
              UP_NHAKHO_5: {
                  requirement: 5,
                  gold: 675,
                  exp: 250,
                  diamond: 7
              },
              UP_NHAKHO_6: {
                  requirement: 6,
                  gold: 1013,
                  exp: 500,
                  diamond: 10
              },
              UP_NHAKHO_7: {
                  requirement: 7,
                  gold: 1519,
                  exp: 1e3,
                  diamond: 15
              },
              UP_NHAKHO_8: {
                  requirement: 8,
                  gold: 2278,
                  exp: 2500,
                  diamond: 23
              },
              UP_NHAKHO_9: {
                  requirement: 9,
                  gold: 3417,
                  exp: 5e3,
                  diamond: 34
              },
              UP_NHAKHO_10: {
                  requirement: 10,
                  gold: 5126,
                  exp: 1e4,
                  diamond: 51
              }
          },
          UP_XEHANG: {
              UP_XEHANG_2: {
                  requirement: 2,
                  gold: 200,
                  exp: 20,
                  diamond: 2
              },
              UP_XEHANG_3: {
                  requirement: 3,
                  gold: 270,
                  exp: 40,
                  diamond: 3
              },
              UP_XEHANG_4: {
                  requirement: 4,
                  gold: 350,
                  exp: 80,
                  diamond: 4
              },
              UP_XEHANG_5: {
                  requirement: 5,
                  gold: 470,
                  exp: 200,
                  diamond: 5
              },
              UP_XEHANG_6: {
                  requirement: 6,
                  gold: 630,
                  exp: 400,
                  diamond: 6
              },
              UP_XEHANG_7: {
                  requirement: 7,
                  gold: 850,
                  exp: 800,
                  diamond: 8
              },
              UP_XEHANG_8: {
                  requirement: 8,
                  gold: 1200,
                  exp: 2e3,
                  diamond: 11
              },
              UP_XEHANG_9: {
                  requirement: 9,
                  gold: 1500,
                  exp: 4e3,
                  diamond: 15
              },
              UP_XEHANG_10: {
                  requirement: 10,
                  gold: 2e3,
                  exp: 8e3,
                  diamond: 20
              }
          }
      },
      cc._RF.pop()
  }
  , {}],
  configs: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "5d98dzNc21FNJ8zScfVaPe2", "configs"),
      a.exports = {
          newUserProperties: {
              gold: 1e3,
              diamond: 100,
              field: {
                  "A-1-1": {},
                  "A-2-1": {},
                  "A-3-1": {},
                  "A-4-1": {},
                  "A-5-1": {}
              }
          },
          showBuyThemeSuggestRatio: .4,
          maxTimeToShowPopupNewProduct: 2592e5,
          newProductsPopupRepeatTime: 432e5,
          buyThemeSuggestRepeatTime: 3e5,
          trialThemeSuggestRepeatTime: 18e6,
          themePriceDiamond: 500,
          themeTrialTime: 72e5,
          timeToAutoRecoverStolenDamage: 600,
          leaderboardExpGlobalName: "exp_global",
          freeFindVictim: 3,
          videoFindVictim: 3,
          victimLoginTimeDiffThreshold: 9e5,
          interAdId: "1118063555013168_1252989038187285",
          interAdIdStartGame: "1118063555013168_1293292757490246",
          videoRewardId: "1118063555013168_1155699211249602",
          adsRatio_sellProducts: 1,
          adsRatio_victimToHome: 1,
          adsRatio_upgrade: 0,
          adsUpgrade_levelMin: 5,
          adsUpgrade_levelMax: 10,
          thiefReportLimit: 10,
          getVideoRewardDiamond: function(e) {
              var a = [1, 2, 2, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 8, 8, 8, 8, 9, 10, 11];
              return a[e - 1] || a[a.length - 1]
          },
          getVideoRewardGold: function(e) {
              var a = [300, 300, 300, 300, 300, 390, 390, 390, 390, 390, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 1e3];
              return a[e - 1] || a[a.length - 1]
          },
          videoDiamondTimeWait: 300,
          videoGoldTimeWait: 300,
          rewardSwitchGame: 5e3,
          rewardGoldShortcut: 2e3,
          stealFriendWaitTime: 300,
          stealUnlockLevel: 3,
          tut3Level: 5,
          slotGroupArea: {
              A: {
                  col: 5,
                  row: 6
              },
              B: {
                  col: 5,
                  row: 6
              },
              C: {
                  col: 5,
                  row: 6
              }
          },
          levels: [{
              unlockedSlots: ["A-1-1", "A-2-1", "A-3-1", "A-4-1", "A-5-1", "A-1-2", "A-2-2", "A-3-2", "A-4-2", "A-5-2"],
              unlockedProducts: []
          }, {
              unlockedSlots: ["A-1-3", "A-2-3", "A-3-3", "A-4-3", "A-5-3"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["A-1-4", "A-2-4", "A-3-4", "A-4-4", "A-5-4"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["A-1-5", "A-2-5", "A-3-5", "A-4-5", "A-5-5"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["A-1-6", "A-2-6", "A-3-6", "A-4-6", "A-5-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["B-1-1", "B-1-2", "B-1-3", "B-1-4", "B-1-5", "B-1-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["B-2-1", "B-2-2", "B-2-3", "B-2-4", "B-2-5", "B-2-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["B-3-1", "B-3-2", "B-3-3", "B-3-4", "B-3-5", "B-3-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["B-4-1", "B-4-2", "B-4-3", "B-4-4", "B-4-5", "B-4-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["B-5-1", "B-5-2", "B-5-3", "B-5-4", "B-5-5", "B-5-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["C-5-1", "C-5-2", "C-5-3", "C-5-4", "C-5-5", "C-5-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["C-4-1", "C-4-2", "C-4-3", "C-4-4", "C-4-5", "C-4-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["C-3-1", "C-3-2", "C-3-3", "C-3-4", "C-3-5", "C-3-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["C-2-1", "C-2-2", "C-2-3", "C-2-4", "C-2-5", "C-2-6"],
              unlockedProducts: []
          }, {}, {
              unlockedSlots: ["C-1-1", "C-1-2", "C-1-3", "C-1-4", "C-1-5", "C-1-6"],
              unlockedProducts: []
          }, {}, {}],
          steal_ratio: .8,
          isAnimalProduct: {
              BOSUA: !0,
              GAMAI: !0,
              GOAT: !0,
              SHEEP: !0
          },
          products: {
              BOSUA: {
                  name: "Milk cow",
                  harvestUnitName: "bottle of milk",
                  level: 6,
                  price: 200,
                  sellPrice: 30,
                  initTime: 60,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [4, 6, 9, 13, 20, 30, 45, 68, 102, 152],
                  outputTime: [228, 193, 164, 140, 119, 101, 86, 73, 62, 52],
                  stealRate: [75, 74, 73, 71, 68, 64, 61, 56, 52, 48]
              },
              GAMAI: {
                  name: "Hen",
                  harvestUnitName: "egg",
                  level: 14,
                  price: 300,
                  sellPrice: 40,
                  initTime: 70,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [4, 6, 9, 13, 20, 31, 47, 71, 108, 163],
                  outputTime: [273, 232, 197, 168, 142, 121, 103, 87, 74, 63],
                  stealRate: [83, 82, 81, 78, 75, 71, 67, 62, 57, 53]
              },
              LUA: {
                  name: "Wheat",
                  harvestUnitName: "wheat",
                  level: 1,
                  price: 6,
                  sellPrice: 1,
                  initTime: 3,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [4, 6, 10, 17, 29, 48, 80, 133, 219, 362],
                  outputTime: [10, 9, 8, 7, 6, 5, 5, 4, 4, 3],
                  stealRate: [95, 94, 92, 89, 86, 82, 77, 71, 66, 60]
              },
              CACHUA: {
                  name: "Tomato",
                  harvestUnitName: "tomato",
                  level: 2,
                  price: 12,
                  sellPrice: 1,
                  initTime: 5,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [3, 5, 8, 14, 25, 42, 72, 123, 209, 355],
                  outputTime: [18, 16, 15, 13, 12, 11, 10, 9, 8, 7],
                  stealRate: [93, 92, 90, 88, 84, 80, 75, 70, 64, 59]
              },
              KHOAI: {
                  name: "Potato",
                  harvestUnitName: "potato",
                  level: 4,
                  price: 18,
                  sellPrice: 4,
                  initTime: 10,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [6, 9, 14, 22, 35, 54, 83, 129, 200, 310],
                  outputTime: [22, 20, 18, 16, 14, 13, 12, 10, 9, 8],
                  stealRate: [91, 90, 88, 86, 82, 78, 73, 68, 63, 58]
              },
              DUA: {
                  name: "Cucumber",
                  harvestUnitName: "cucumber",
                  level: 8,
                  price: 30,
                  sellPrice: 3,
                  initTime: 15,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [4, 6, 10, 17, 29, 48, 80, 133, 219, 362],
                  outputTime: [29, 26, 23, 21, 19, 17, 15, 14, 12, 11],
                  stealRate: [89, 88, 86, 84, 80, 76, 72, 67, 61, 57]
              },
              NGO: {
                  name: "Corn",
                  harvestUnitName: "corn",
                  level: 10,
                  price: 42,
                  sellPrice: 3,
                  initTime: 20,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [3, 5, 8, 13, 23, 38, 65, 108, 181, 203],
                  outputTime: [57, 52, 48, 44, 40, 37, 34, 31, 29, 26],
                  stealRate: [87, 86, 84, 82, 79, 75, 70, 65, 60, 55]
              },
              CAROT: {
                  name: "Carrot",
                  harvestUnitName: "carrot",
                  level: 12,
                  price: 60,
                  sellPrice: 12,
                  initTime: 25,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [5, 7, 11, 17, 25, 39, 59, 89, 135, 204],
                  outputTime: [97, 87, 78, 70, 63, 57, 51, 46, 41, 37],
                  stealRate: [85, 84, 82, 80, 77, 73, 69, 64, 59, 54]
              },
              BAPCAI: {
                  name: "Cabbage",
                  harvestUnitName: "cabbage",
                  level: 16,
                  price: 90,
                  sellPrice: 9,
                  initTime: 30,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [6, 9, 15, 24, 39, 62, 100, 161, 257, 412],
                  outputTime: [135, 122, 110, 99, 89, 80, 72, 64, 58, 52],
                  stealRate: [81, 80, 79, 76, 73, 70, 65, 61, 56, 51]
              },
              BINGO: {
                  name: "Pumpkin",
                  harvestUnitName: "pumpkin",
                  level: 18,
                  price: 120,
                  sellPrice: 12,
                  initTime: 40,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [5, 8, 12, 20, 33, 54, 87, 140, 225, 363],
                  outputTime: [190, 161, 137, 116, 99, 84, 71, 60, 51, 44],
                  stealRate: [79, 78, 77, 74, 71, 68, 64, 59, 55, 50]
              },
              PINEAPPLE: {
                  name: "Pineapple",
                  harvestUnitName: "pineapple",
                  level: 20,
                  price: 200,
                  sellPrice: 27,
                  initTime: 80,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 2,
                  maxOutput: [5, 8, 12, 19, 29, 45, 69, 107, 167, 258],
                  outputTime: [195, 176, 158, 142, 128, 115, 104, 93, 84, 76],
                  stealRate: [89, 88, 86, 84, 80, 76, 72, 67, 61, 57]
              },
              GOAT: {
                  name: "Goat",
                  harvestUnitName: "bottle of milk",
                  level: 20,
                  price: 400,
                  sellPrice: 65,
                  initTime: 80,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 1,
                  maxOutput: [5, 6, 8, 12, 18, 27, 41, 61, 91, 137],
                  outputTime: [170, 162, 153, 146, 138, 132, 125, 119, 113, 107],
                  stealRate: [89, 88, 86, 84, 80, 76, 72, 67, 61, 57]
              },
              COCONUT: {
                  name: "Coconut",
                  harvestUnitName: "coconut",
                  level: 22,
                  price: 300,
                  sellPrice: 45,
                  initTime: 92,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 2,
                  maxOutput: [7, 11, 16, 24, 35, 53, 80, 120, 179, 269],
                  outputTime: [170, 162, 153, 146, 138, 132, 125, 119, 113, 107],
                  stealRate: [89, 88, 86, 84, 80, 76, 72, 67, 61, 57]
              },
              SHEEP: {
                  name: "Sheep",
                  harvestUnitName: "wool",
                  level: 24,
                  price: 600,
                  sellPrice: 70,
                  initTime: 92,
                  speedup: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                  growup: 2,
                  maxOutput: [5, 8, 11, 17, 25, 38, 57, 85, 128, 192],
                  outputTime: [170, 162, 153, 146, 138, 132, 125, 119, 113, 107],
                  stealRate: [85, 84, 82, 80, 77, 73, 69, 64, 59, 54]
              }
          },
          isNewProduct: function(e) {
              return "PINEAPPLE" == e || "GOAT" == e || "COCONUT" == e || "SHEEP" == e
          },
          productIndexToName: function(e) {
              if (!_G.configs.productNameArr) {
                  var a = _G.configs.productNameArr = [];
                  for (var o in _G.configs.products) {
                      var t = _G.configs.isNewProduct(o) ? "Q_" + o : o;
                      a.push(t)
                  }
                  a.sort()
              }
              return _G.configs.productNameArr[e].replace("Q_", "")
          },
          productNameToIndex: function(e) {
              if (!_G.configs.productNameArr) {
                  var a = _G.configs.productNameArr = [];
                  for (var o in _G.configs.products) {
                      var t = _G.configs.isNewProduct(o) ? "Q_" + o : o;
                      a.push(t)
                  }
                  a.sort()
              }
              var n = _G.configs.isNewProduct(e) ? "Q_" + e : e;
              return _G.configs.productNameArr.indexOf(n)
          },
          slots: {
              "A-1-1": {
                  gold: 0,
                  level: 0
              },
              "A-2-1": {
                  gold: 0,
                  level: 0
              },
              "A-3-1": {
                  gold: 0,
                  level: 0
              },
              "A-4-1": {
                  gold: 0,
                  level: 0
              },
              "A-5-1": {
                  gold: 0,
                  level: 0
              },
              "A-1-2": {
                  gold: 50,
                  level: 1
              },
              "A-2-2": {
                  gold: 50,
                  level: 1
              },
              "A-3-2": {
                  gold: 50,
                  level: 1
              },
              "A-4-2": {
                  gold: 50,
                  level: 1
              },
              "A-5-2": {
                  gold: 50,
                  level: 1
              },
              "A-1-3": {
                  gold: 100,
                  level: 2
              },
              "A-2-3": {
                  gold: 100,
                  level: 2
              },
              "A-3-3": {
                  gold: 100,
                  level: 2
              },
              "A-4-3": {
                  gold: 100,
                  level: 2
              },
              "A-5-3": {
                  gold: 100,
                  level: 2
              },
              "A-1-4": {
                  gold: 200,
                  level: 4
              },
              "A-2-4": {
                  gold: 200,
                  level: 4
              },
              "A-3-4": {
                  gold: 200,
                  level: 4
              },
              "A-4-4": {
                  gold: 200,
                  level: 4
              },
              "A-5-4": {
                  gold: 200,
                  level: 4
              },
              "A-1-5": {
                  gold: 400,
                  level: 6
              },
              "A-2-5": {
                  gold: 400,
                  level: 6
              },
              "A-3-5": {
                  gold: 400,
                  level: 6
              },
              "A-4-5": {
                  gold: 400,
                  level: 6
              },
              "A-5-5": {
                  gold: 400,
                  level: 6
              },
              "A-1-6": {
                  gold: 800,
                  level: 8
              },
              "A-2-6": {
                  gold: 800,
                  level: 8
              },
              "A-3-6": {
                  gold: 800,
                  level: 8
              },
              "A-4-6": {
                  gold: 800,
                  level: 8
              },
              "A-5-6": {
                  gold: 800,
                  level: 8
              },
              "B-1-1": {
                  gold: 1e4,
                  level: 10
              },
              "B-1-2": {
                  gold: 1e4,
                  level: 10
              },
              "B-1-3": {
                  gold: 1e4,
                  level: 10
              },
              "B-1-4": {
                  gold: 1e4,
                  level: 10
              },
              "B-1-5": {
                  gold: 1e4,
                  level: 10
              },
              "B-1-6": {
                  gold: 1e4,
                  level: 10
              },
              "B-2-1": {
                  gold: 12e3,
                  level: 12
              },
              "B-2-2": {
                  gold: 12e3,
                  level: 12
              },
              "B-2-3": {
                  gold: 12e3,
                  level: 12
              },
              "B-2-4": {
                  gold: 12e3,
                  level: 12
              },
              "B-2-5": {
                  gold: 12e3,
                  level: 12
              },
              "B-2-6": {
                  gold: 12e3,
                  level: 12
              },
              "B-3-1": {
                  gold: 14e3,
                  level: 14
              },
              "B-3-2": {
                  gold: 14e3,
                  level: 14
              },
              "B-3-3": {
                  gold: 14e3,
                  level: 14
              },
              "B-3-4": {
                  gold: 14e3,
                  level: 14
              },
              "B-3-5": {
                  gold: 14e3,
                  level: 14
              },
              "B-3-6": {
                  gold: 14e3,
                  level: 14
              },
              "B-4-1": {
                  gold: 16e3,
                  level: 16
              },
              "B-4-2": {
                  gold: 16e3,
                  level: 16
              },
              "B-4-3": {
                  gold: 16e3,
                  level: 16
              },
              "B-4-4": {
                  gold: 16e3,
                  level: 16
              },
              "B-4-5": {
                  gold: 16e3,
                  level: 16
              },
              "B-4-6": {
                  gold: 16e3,
                  level: 16
              },
              "B-5-1": {
                  gold: 18e3,
                  level: 18
              },
              "B-5-2": {
                  gold: 18e3,
                  level: 18
              },
              "B-5-3": {
                  gold: 18e3,
                  level: 18
              },
              "B-5-4": {
                  gold: 18e3,
                  level: 18
              },
              "B-5-5": {
                  gold: 18e3,
                  level: 18
              },
              "B-5-6": {
                  gold: 18e3,
                  level: 18
              },
              "C-1-1": {
                  gold: 1e5,
                  level: 28
              },
              "C-1-2": {
                  gold: 1e5,
                  level: 28
              },
              "C-1-3": {
                  gold: 1e5,
                  level: 28
              },
              "C-1-4": {
                  gold: 1e5,
                  level: 28
              },
              "C-1-5": {
                  gold: 1e5,
                  level: 28
              },
              "C-1-6": {
                  gold: 1e5,
                  level: 28
              },
              "C-2-1": {
                  gold: 8e4,
                  level: 26
              },
              "C-2-2": {
                  gold: 8e4,
                  level: 26
              },
              "C-2-3": {
                  gold: 8e4,
                  level: 26
              },
              "C-2-4": {
                  gold: 8e4,
                  level: 26
              },
              "C-2-5": {
                  gold: 8e4,
                  level: 26
              },
              "C-2-6": {
                  gold: 8e4,
                  level: 26
              },
              "C-3-1": {
                  gold: 6e4,
                  level: 24
              },
              "C-3-2": {
                  gold: 6e4,
                  level: 24
              },
              "C-3-3": {
                  gold: 6e4,
                  level: 24
              },
              "C-3-4": {
                  gold: 6e4,
                  level: 24
              },
              "C-3-5": {
                  gold: 6e4,
                  level: 24
              },
              "C-3-6": {
                  gold: 6e4,
                  level: 24
              },
              "C-4-1": {
                  gold: 4e4,
                  level: 22
              },
              "C-4-2": {
                  gold: 4e4,
                  level: 22
              },
              "C-4-3": {
                  gold: 4e4,
                  level: 22
              },
              "C-4-4": {
                  gold: 4e4,
                  level: 22
              },
              "C-4-5": {
                  gold: 4e4,
                  level: 22
              },
              "C-4-6": {
                  gold: 4e4,
                  level: 22
              },
              "C-5-1": {
                  gold: 2e4,
                  level: 20
              },
              "C-5-2": {
                  gold: 2e4,
                  level: 20
              },
              "C-5-3": {
                  gold: 2e4,
                  level: 20
              },
              "C-5-4": {
                  gold: 2e4,
                  level: 20
              },
              "C-5-5": {
                  gold: 2e4,
                  level: 20
              },
              "C-5-6": {
                  gold: 2e4,
                  level: 20
              }
          },
          info_level: [{
              gold: 51,
              diamond: 1,
              exp: 3
          }, {
              gold: 54,
              diamond: 1,
              exp: 12
          }, {
              gold: 57,
              diamond: 1,
              exp: 21
          }, {
              gold: 62,
              diamond: 1,
              exp: 160
          }, {
              gold: 67,
              diamond: 1,
              exp: 240
          }, {
              gold: 74,
              diamond: 1,
              exp: 368
          }, {
              gold: 82,
              diamond: 1,
              exp: 544
          }, {
              gold: 91,
              diamond: 1,
              exp: 720
          }, {
              gold: 100,
              diamond: 3,
              exp: 960
          }, {
              gold: 111,
              diamond: 3,
              exp: 1760
          }, {
              gold: 124,
              diamond: 4,
              exp: 5929
          }, {
              gold: 137,
              diamond: 4,
              exp: 7056
          }, {
              gold: 151,
              diamond: 5,
              exp: 8281
          }, {
              gold: 167,
              diamond: 5,
              exp: 9604
          }, {
              gold: 183,
              diamond: 5,
              exp: 11025
          }, {
              gold: 201,
              diamond: 6,
              exp: 16384
          }, {
              gold: 220,
              diamond: 6,
              exp: 18496
          }, {
              gold: 240,
              diamond: 6,
              exp: 20736
          }, {
              gold: 262,
              diamond: 7,
              exp: 23104
          }, {
              gold: 284,
              diamond: 8,
              exp: 25600
          }, {
              gold: 308,
              diamond: 9,
              exp: 44100
          }, {
              gold: 333,
              diamond: 9,
              exp: 48400
          }, {
              gold: 360,
              diamond: 9,
              exp: 52900
          }, {
              gold: 387,
              diamond: 10,
              exp: 57600
          }, {
              gold: 416,
              diamond: 10,
              exp: 62500
          }, {
              gold: 446,
              diamond: 11,
              exp: 97344
          }, {
              gold: 478,
              diamond: 11,
              exp: 104976
          }, {
              gold: 511,
              diamond: 11,
              exp: 112896
          }, {
              gold: 545,
              diamond: 14,
              exp: 121104
          }, {
              gold: 580,
              diamond: 15,
              exp: 129600
          }, {
              gold: 617,
              diamond: 16,
              exp: 188356
          }, {
              gold: 655,
              diamond: 16,
              exp: 200704
          }, {
              gold: 695,
              diamond: 17,
              exp: 213444
          }, {
              gold: 736,
              diamond: 17,
              exp: 226576
          }, {
              gold: 778,
              diamond: 18,
              exp: 240100
          }, {
              gold: 822,
              diamond: 18,
              exp: 331776
          }, {
              gold: 867,
              diamond: 19,
              exp: 350464
          }, {
              gold: 914,
              diamond: 19,
              exp: 369664
          }, {
              gold: 962,
              diamond: 24,
              exp: 389376
          }, {
              gold: 1012,
              diamond: 26,
              exp: 409600
          }, {
              gold: 1063,
              diamond: 27,
              exp: 544644
          }, {
              gold: 1115,
              diamond: 28,
              exp: 571536
          }, {
              gold: 1169,
              diamond: 29,
              exp: 599076
          }, {
              gold: 1225,
              diamond: 30,
              exp: 627264
          }, {
              gold: 1282,
              diamond: 30,
              exp: 656100
          }, {
              gold: 1341,
              diamond: 31,
              exp: 846400
          }, {
              gold: 1402,
              diamond: 32,
              exp: 883600
          }, {
              gold: 1464,
              diamond: 32,
              exp: 921600
          }, {
              gold: 1527,
              diamond: 33,
              exp: 960400
          }, {
              gold: 1603,
              diamond: 34,
              exp: 1e6
          }, {
              gold: 1700,
              diamond: 35,
              exp: 115e4
          }, {
              gold: 1900,
              diamond: 36,
              exp: 1322500
          }, {
              gold: 2100,
              diamond: 37,
              exp: 1520875
          }, {
              gold: 2450,
              diamond: 38,
              exp: 1749006
          }, {
              gold: 3e3,
              diamond: 40,
              exp: 2e6
          }, {
              gold: 3e3,
              diamond: 40,
              exp: 2e6
          }, {
              gold: 3e3,
              diamond: 40,
              exp: 2e6
          }, {
              gold: 3e3,
              diamond: 40,
              exp: 2e6
          }],
          trucks: [{
              capacity: 3500,
              duration: 90,
              skip: 5
          }, {
              capacity: 7e3,
              duration: 90,
              skip: 5,
              gold: 2400,
              diamond: 21
          }, {
              capacity: 10500,
              duration: 90,
              skip: 5,
              gold: 2600,
              diamond: 24
          }, {
              capacity: 14e3,
              duration: 90,
              skip: 5,
              gold: 2900,
              diamond: 27
          }, {
              capacity: 17500,
              duration: 90,
              skip: 5,
              gold: 3300,
              diamond: 30
          }, {
              capacity: 21e3,
              duration: 90,
              skip: 5,
              gold: 3600,
              diamond: 32
          }, {
              capacity: 24500,
              duration: 90,
              skip: 5,
              gold: 4e3,
              diamond: 35
          }, {
              capacity: 28e3,
              duration: 90,
              skip: 5,
              gold: 4400,
              diamond: 38
          }, {
              capacity: 31500,
              duration: 90,
              skip: 5,
              gold: 5e3,
              diamond: 42
          }, {
              capacity: 35e3,
              duration: 90,
              skip: 5,
              gold: 5300,
              diamond: 50
          }],
          truckSkip: 10,
          storage: [{
              capacity: 5e3
          }, {
              capacity: 1e4,
              gold: 3600,
              diamond: 34
          }, {
              capacity: 15e3,
              gold: 4300,
              diamond: 41
          }, {
              capacity: 2e4,
              gold: 5100,
              diamond: 49
          }, {
              capacity: 25e3,
              gold: 6200,
              diamond: 59
          }, {
              capacity: 3e4,
              gold: 7400,
              diamond: 70
          }, {
              capacity: 35e3,
              gold: 9e3,
              diamond: 85
          }, {
              capacity: 4e4,
              gold: 11e3,
              diamond: 102
          }, {
              capacity: 45e3,
              gold: 13e3,
              diamond: 122
          }, {
              capacity: 5e4,
              gold: 15500,
              diamond: 147
          }],
          getDogConfig: function(a) {
              return _G.configs.dogArr.find(function(e) {
                  return e.id == a
              })
          },
          dogArr: [{
              id: "dog_0",
              name: "Eskimo",
              desc: "Dog Eskimo, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  payable: {
                      type: "diamond",
                      price: 150
                  },
                  nonPaybale: {
                      type: "diamond",
                      price: 150
                  }
              },
              antiTheftRate: [2, 4, 6, 8, 10, 12, 13, 15, 17, 19],
              upgradePrice: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100],
              realAttackRate: [2, 4, 6, 8, 10, 12, 13, 15, 17, 19],
              reduceRate: 5
          }, {
              id: "dog_1",
              name: "Husky",
              desc: "Dog Husky, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  nonPaybale: {
                      type: "diamond",
                      price: 350
                  }
              },
              antiTheftRate: [2, 4, 5, 7, 9, 10, 11, 13, 15, 17],
              upgradePrice: [0, 32, 48, 64, 80, 96, 112, 128, 144, 160],
              realAttackRate: [2, 4, 5, 7, 9, 10, 11, 13, 15, 17],
              reduceRate: 5
          }, {
              id: "dog_2",
              name: "G.Shepherd",
              desc: "Dog Becgie, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  nonPaybale: {
                      type: "diamond",
                      price: 450
                  }
              },
              antiTheftRate: [3, 6, 9, 12, 17, 20, 23, 26, 29, 31],
              upgradePrice: [0, 34, 51, 68, 85, 102, 119, 136, 153, 170],
              realAttackRate: [3, 6, 9, 12, 17, 20, 23, 26, 29, 31],
              reduceRate: 5
          }, {
              id: "dog_3",
              name: "G.Retriever",
              desc: "Dog Golden Retriever, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  payable: {
                      type: "diamond",
                      price: 300
                  },
                  nonPaybale: {
                      type: "diamond",
                      price: 300
                  }
              },
              antiTheftRate: [2, 4, 6, 7, 9, 11, 14, 16, 19, 21],
              upgradePrice: [0, 24, 36, 48, 60, 72, 84, 96, 108, 120],
              realAttackRate: [2, 4, 6, 7, 9, 11, 14, 16, 19, 21],
              reduceRate: 5
          }, {
              id: "dog_4",
              name: "Bull",
              desc: "Dog Bull, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  payable: {
                      type: "gold",
                      price: 5e5
                  },
                  nonPaybale: {
                      type: "gold",
                      price: 5e5
                  }
              },
              antiTheftRate: [3, 4, 7, 9, 11, 13, 15, 17, 19, 21],
              upgradePrice: [0, 28, 42, 56, 70, 84, 98, 112, 126, 140],
              realAttackRate: [3, 4, 7, 9, 11, 13, 15, 17, 19, 21],
              reduceRate: 5
          }, {
              id: "dog_5",
              name: "Rottweiler",
              desc: "Dog Rott Weiler, ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
              price: {
                  payable: {
                      type: "diamond",
                      price: 525
                  },
                  nonPaybale: {
                      type: "diamond",
                      price: 525
                  }
              },
              antiTheftRate: [4, 8, 12, 16, 20, 24, 26, 30, 34, 38],
              upgradePrice: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250],
              realAttackRate: [4, 8, 12, 16, 20, 24, 26, 30, 34, 38],
              reduceRate: 5
          }],
          dogs: [{
              name: "Dog",
              attackRate: 5,
              reduceRate: 50,
              diamond: 150
          }],
          dogLevelArr: [{
              price: 0,
              antiThiefRatio: 0
          }, {
              price: 10,
              antiThiefRatio: 5
          }, {
              price: 20,
              antiThiefRatio: 10
          }, {
              price: 30,
              antiThiefRatio: 15
          }, {
              price: 45,
              antiThiefRatio: 19
          }, {
              price: 60,
              antiThiefRatio: 23
          }, {
              price: 75,
              antiThiefRatio: 27
          }, {
              price: 90,
              antiThiefRatio: 30
          }, {
              price: 110,
              antiThiefRatio: 33
          }, {
              price: 120,
              antiThiefRatio: 36
          }],
          epg: .6,
          dps: .2,
          getStorageCapacity: function(e) {
              return _G.configs.storage[e - 1].capacity
          },
          shop: {
              cash: {
                  d1: 30,
                  d5: 180,
                  d10: 420,
                  d20: 980,
                  d40: 2700,
                  d80: 6e3
              },
              exchange: {
                  e10: {
                      diamond: 100,
                      gold: 1e4
                  },
                  e25: {
                      diamond: 250,
                      gold: 3e4
                  },
                  e50: {
                      diamond: 500,
                      gold: 7e4
                  },
                  e100: {
                      diamond: 1e3,
                      gold: 16e4
                  },
                  e200: {
                      diamond: 2e3,
                      gold: 36e4
                  },
                  e500: {
                      diamond: 5e3,
                      gold: 1e6
                  }
              }
          },
          dailyReward: [{
              gold: 450
          }, {
              diamond: 25
          }, {
              gold: 2200
          }, {
              diamond: 50
          }, {
              gold: 5500
          }, {
              diamond: 100
          }, {
              gold: 17e3,
              diamond: 200
          }],
          getStorageUpgradeGold: function(e) {
              return _G.configs.storage[e].gold
          },
          getStorageUpgradeDiamond: function(e) {
              return _G.configs.storage[e].diamond
          },
          getInfoLevel: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 2;
              return _G.configs.info_level[e - 2]
          },
          getAllExpUpLevel: function() {
              for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, a = 0, o = 0; o < e - 1; o++)
                  a += _G.configs.info_level[o].exp;
              return a
          },
          getTruckByLevel: function(e) {
              return _G.configs.trucks[e - 1]
          },
          getProduceInfo: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
              return {
                  maxOutput: _G.configs.products[e].maxOutput[a - 1],
                  produceTime: _G.configs.products[e].outputTime[a - 1]
              }
          },
          quest: [{}, {}, {}, {
              LUA: {
                  min: 500,
                  max: 2e3
              },
              CACHUA: {
                  min: 375,
                  max: 1500
              },
              KHOAI: {
                  min: 250,
                  max: 1e3
              }
          }, {
              LUA: {
                  min: 500,
                  max: 2e3
              },
              CACHUA: {
                  min: 375,
                  max: 1500
              },
              KHOAI: {
                  min: 250,
                  max: 1e3
              }
          }, {
              LUA: {
                  min: 1e3,
                  max: 4e3
              },
              CACHUA: {
                  min: 750,
                  max: 3e3
              },
              KHOAI: {
                  min: 500,
                  max: 2e3
              },
              BOSUA: {
                  min: 3,
                  max: 11
              }
          }, {
              LUA: {
                  min: 1e3,
                  max: 4e3
              },
              CACHUA: {
                  min: 750,
                  max: 3e3
              },
              KHOAI: {
                  min: 500,
                  max: 2e3
              },
              BOSUA: {
                  min: 3,
                  max: 11
              }
          }, {
              LUA: {
                  min: 1e3,
                  max: 4e3
              },
              CACHUA: {
                  min: 750,
                  max: 3e3
              },
              KHOAI: {
                  min: 500,
                  max: 2e3
              },
              BOSUA: {
                  min: 3,
                  max: 11
              },
              DUA: {
                  min: 200,
                  max: 800
              }
          }, {
              LUA: {
                  min: 1e3,
                  max: 4e3
              },
              CACHUA: {
                  min: 750,
                  max: 3e3
              },
              KHOAI: {
                  min: 500,
                  max: 2e3
              },
              BOSUA: {
                  min: 3,
                  max: 11
              },
              DUA: {
                  min: 200,
                  max: 800
              }
          }, {
              LUA: {
                  min: 1e3,
                  max: 4e3
              },
              CACHUA: {
                  min: 750,
                  max: 3e3
              },
              KHOAI: {
                  min: 500,
                  max: 2e3
              },
              BOSUA: {
                  min: 3,
                  max: 11
              },
              DUA: {
                  min: 200,
                  max: 800
              },
              NGO: {
                  min: 167,
                  max: 667
              }
          }, {
              LUA: {
                  min: 1500,
                  max: 6e3
              },
              CACHUA: {
                  min: 1125,
                  max: 4500
              },
              KHOAI: {
                  min: 750,
                  max: 3e3
              },
              BOSUA: {
                  min: 4,
                  max: 17
              },
              DUA: {
                  min: 300,
                  max: 1200
              },
              NGO: {
                  min: 250,
                  max: 1e3
              }
          }, {
              LUA: {
                  min: 1500,
                  max: 6e3
              },
              CACHUA: {
                  min: 1125,
                  max: 4500
              },
              KHOAI: {
                  min: 750,
                  max: 3e3
              },
              BOSUA: {
                  min: 4,
                  max: 17
              },
              DUA: {
                  min: 300,
                  max: 1200
              },
              NGO: {
                  min: 250,
                  max: 1e3
              },
              CAROT: {
                  min: 214,
                  max: 857
              }
          }, {
              LUA: {
                  min: 1500,
                  max: 6e3
              },
              CACHUA: {
                  min: 1125,
                  max: 4500
              },
              KHOAI: {
                  min: 750,
                  max: 3e3
              },
              BOSUA: {
                  min: 4,
                  max: 17
              },
              DUA: {
                  min: 300,
                  max: 1200
              },
              NGO: {
                  min: 250,
                  max: 1e3
              },
              CAROT: {
                  min: 214,
                  max: 857
              }
          }, {
              LUA: {
                  min: 1500,
                  max: 6e3
              },
              CACHUA: {
                  min: 1125,
                  max: 4500
              },
              KHOAI: {
                  min: 750,
                  max: 3e3
              },
              BOSUA: {
                  min: 4,
                  max: 17
              },
              DUA: {
                  min: 300,
                  max: 1200
              },
              NGO: {
                  min: 250,
                  max: 1e3
              },
              CAROT: {
                  min: 214,
                  max: 857
              },
              GAMAI: {
                  min: 3,
                  max: 10
              }
          }, {
              LUA: {
                  min: 1500,
                  max: 6e3
              },
              CACHUA: {
                  min: 1125,
                  max: 4500
              },
              KHOAI: {
                  min: 750,
                  max: 3e3
              },
              BOSUA: {
                  min: 4,
                  max: 17
              },
              DUA: {
                  min: 300,
                  max: 1200
              },
              NGO: {
                  min: 250,
                  max: 1e3
              },
              CAROT: {
                  min: 214,
                  max: 857
              },
              GAMAI: {
                  min: 3,
                  max: 10
              }
          }, {
              LUA: {
                  min: 2e3,
                  max: 8e3
              },
              CACHUA: {
                  min: 1500,
                  max: 6e3
              },
              KHOAI: {
                  min: 1e3,
                  max: 4e3
              },
              BOSUA: {
                  min: 8,
                  max: 33
              },
              DUA: {
                  min: 400,
                  max: 1600
              },
              NGO: {
                  min: 333,
                  max: 1333
              },
              CAROT: {
                  min: 286,
                  max: 1143
              },
              GAMAI: {
                  min: 3,
                  max: 13
              },
              BAPCAI: {
                  min: 250,
                  max: 1e3
              }
          }, {
              LUA: {
                  min: 2e3,
                  max: 8e3
              },
              CACHUA: {
                  min: 1500,
                  max: 6e3
              },
              KHOAI: {
                  min: 1e3,
                  max: 4e3
              },
              BOSUA: {
                  min: 8,
                  max: 33
              },
              DUA: {
                  min: 400,
                  max: 1600
              },
              NGO: {
                  min: 333,
                  max: 1333
              },
              CAROT: {
                  min: 286,
                  max: 1143
              },
              GAMAI: {
                  min: 3,
                  max: 13
              },
              BAPCAI: {
                  min: 250,
                  max: 1e3
              }
          }, {
              LUA: {
                  min: 2e3,
                  max: 8e3
              },
              CACHUA: {
                  min: 1500,
                  max: 6e3
              },
              KHOAI: {
                  min: 1e3,
                  max: 4e3
              },
              BOSUA: {
                  min: 8,
                  max: 33
              },
              DUA: {
                  min: 400,
                  max: 1600
              },
              NGO: {
                  min: 333,
                  max: 1333
              },
              CAROT: {
                  min: 286,
                  max: 1143
              },
              GAMAI: {
                  min: 3,
                  max: 13
              },
              BAPCAI: {
                  min: 250,
                  max: 1e3
              },
              BINGO: {
                  min: 222,
                  max: 889
              }
          }, {
              LUA: {
                  min: 2e3,
                  max: 8e3
              },
              CACHUA: {
                  min: 1500,
                  max: 6e3
              },
              KHOAI: {
                  min: 1e3,
                  max: 4e3
              },
              BOSUA: {
                  min: 8,
                  max: 33
              },
              DUA: {
                  min: 400,
                  max: 1600
              },
              NGO: {
                  min: 333,
                  max: 1333
              },
              CAROT: {
                  min: 286,
                  max: 1143
              },
              GAMAI: {
                  min: 3,
                  max: 13
              },
              BAPCAI: {
                  min: 250,
                  max: 1e3
              },
              BINGO: {
                  min: 222,
                  max: 889
              }
          }, {
              LUA: {
                  min: 2e3,
                  max: 8e3
              },
              CACHUA: {
                  min: 1500,
                  max: 6e3
              },
              KHOAI: {
                  min: 1e3,
                  max: 4e3
              },
              BOSUA: {
                  min: 8,
                  max: 33
              },
              DUA: {
                  min: 400,
                  max: 1600
              },
              NGO: {
                  min: 333,
                  max: 1333
              },
              CAROT: {
                  min: 286,
                  max: 1143
              },
              GAMAI: {
                  min: 3,
                  max: 13
              },
              BAPCAI: {
                  min: 250,
                  max: 1e3
              },
              BINGO: {
                  min: 222,
                  max: 889
              }
          }, {
              LUA: {
                  min: 2500,
                  max: 1e4
              },
              CACHUA: {
                  min: 1875,
                  max: 7500
              },
              KHOAI: {
                  min: 1250,
                  max: 5e3
              },
              BOSUA: {
                  min: 14,
                  max: 56
              },
              DUA: {
                  min: 500,
                  max: 2e3
              },
              NGO: {
                  min: 417,
                  max: 1667
              },
              CAROT: {
                  min: 357,
                  max: 1429
              },
              GAMAI: {
                  min: 6,
                  max: 25
              },
              BAPCAI: {
                  min: 313,
                  max: 1250
              },
              BINGO: {
                  min: 278,
                  max: 1111
              }
          }, {
              LUA: {
                  min: 2500,
                  max: 1e4
              },
              CACHUA: {
                  min: 1875,
                  max: 7500
              },
              KHOAI: {
                  min: 1250,
                  max: 5e3
              },
              BOSUA: {
                  min: 14,
                  max: 56
              },
              DUA: {
                  min: 500,
                  max: 2e3
              },
              NGO: {
                  min: 417,
                  max: 1667
              },
              CAROT: {
                  min: 357,
                  max: 1429
              },
              GAMAI: {
                  min: 6,
                  max: 25
              },
              BAPCAI: {
                  min: 313,
                  max: 1250
              },
              BINGO: {
                  min: 278,
                  max: 1111
              }
          }, {
              LUA: {
                  min: 2500,
                  max: 1e4
              },
              CACHUA: {
                  min: 1875,
                  max: 7500
              },
              KHOAI: {
                  min: 1250,
                  max: 5e3
              },
              BOSUA: {
                  min: 14,
                  max: 56
              },
              DUA: {
                  min: 500,
                  max: 2e3
              },
              NGO: {
                  min: 417,
                  max: 1667
              },
              CAROT: {
                  min: 357,
                  max: 1429
              },
              GAMAI: {
                  min: 6,
                  max: 25
              },
              BAPCAI: {
                  min: 313,
                  max: 1250
              },
              BINGO: {
                  min: 278,
                  max: 1111
              }
          }, {
              LUA: {
                  min: 2500,
                  max: 1e4
              },
              CACHUA: {
                  min: 1875,
                  max: 7500
              },
              KHOAI: {
                  min: 1250,
                  max: 5e3
              },
              BOSUA: {
                  min: 14,
                  max: 56
              },
              DUA: {
                  min: 500,
                  max: 2e3
              },
              NGO: {
                  min: 417,
                  max: 1667
              },
              CAROT: {
                  min: 357,
                  max: 1429
              },
              GAMAI: {
                  min: 6,
                  max: 25
              },
              BAPCAI: {
                  min: 313,
                  max: 1250
              },
              BINGO: {
                  min: 278,
                  max: 1111
              }
          }, {
              LUA: {
                  min: 2500,
                  max: 1e4
              },
              CACHUA: {
                  min: 1875,
                  max: 7500
              },
              KHOAI: {
                  min: 1250,
                  max: 5e3
              },
              BOSUA: {
                  min: 14,
                  max: 56
              },
              DUA: {
                  min: 500,
                  max: 2e3
              },
              NGO: {
                  min: 417,
                  max: 1667
              },
              CAROT: {
                  min: 357,
                  max: 1429
              },
              GAMAI: {
                  min: 6,
                  max: 25
              },
              BAPCAI: {
                  min: 313,
                  max: 1250
              },
              BINGO: {
                  min: 278,
                  max: 1111
              }
          }, {
              LUA: {
                  min: 3e3,
                  max: 12e3
              },
              CACHUA: {
                  min: 2250,
                  max: 9e3
              },
              KHOAI: {
                  min: 1500,
                  max: 6e3
              },
              BOSUA: {
                  min: 21,
                  max: 83
              },
              DUA: {
                  min: 600,
                  max: 2400
              },
              NGO: {
                  min: 500,
                  max: 2e3
              },
              CAROT: {
                  min: 429,
                  max: 1714
              },
              GAMAI: {
                  min: 10,
                  max: 40
              },
              BAPCAI: {
                  min: 375,
                  max: 1500
              },
              BINGO: {
                  min: 333,
                  max: 1333
              }
          }, {
              LUA: {
                  min: 3e3,
                  max: 12e3
              },
              CACHUA: {
                  min: 2250,
                  max: 9e3
              },
              KHOAI: {
                  min: 1500,
                  max: 6e3
              },
              BOSUA: {
                  min: 21,
                  max: 83
              },
              DUA: {
                  min: 600,
                  max: 2400
              },
              NGO: {
                  min: 500,
                  max: 2e3
              },
              CAROT: {
                  min: 429,
                  max: 1714
              },
              GAMAI: {
                  min: 10,
                  max: 40
              },
              BAPCAI: {
                  min: 375,
                  max: 1500
              },
              BINGO: {
                  min: 333,
                  max: 1333
              }
          }, {
              LUA: {
                  min: 3e3,
                  max: 12e3
              },
              CACHUA: {
                  min: 2250,
                  max: 9e3
              },
              KHOAI: {
                  min: 1500,
                  max: 6e3
              },
              BOSUA: {
                  min: 21,
                  max: 83
              },
              DUA: {
                  min: 600,
                  max: 2400
              },
              NGO: {
                  min: 500,
                  max: 2e3
              },
              CAROT: {
                  min: 429,
                  max: 1714
              },
              GAMAI: {
                  min: 10,
                  max: 40
              },
              BAPCAI: {
                  min: 375,
                  max: 1500
              },
              BINGO: {
                  min: 333,
                  max: 1333
              }
          }, {
              LUA: {
                  min: 3e3,
                  max: 12e3
              },
              CACHUA: {
                  min: 2250,
                  max: 9e3
              },
              KHOAI: {
                  min: 1500,
                  max: 6e3
              },
              BOSUA: {
                  min: 21,
                  max: 83
              },
              DUA: {
                  min: 600,
                  max: 2400
              },
              NGO: {
                  min: 500,
                  max: 2e3
              },
              CAROT: {
                  min: 429,
                  max: 1714
              },
              GAMAI: {
                  min: 10,
                  max: 40
              },
              BAPCAI: {
                  min: 375,
                  max: 1500
              },
              BINGO: {
                  min: 333,
                  max: 1333
              }
          }, {
              LUA: {
                  min: 3e3,
                  max: 12e3
              },
              CACHUA: {
                  min: 2250,
                  max: 9e3
              },
              KHOAI: {
                  min: 1500,
                  max: 6e3
              },
              BOSUA: {
                  min: 21,
                  max: 83
              },
              DUA: {
                  min: 600,
                  max: 2400
              },
              NGO: {
                  min: 500,
                  max: 2e3
              },
              CAROT: {
                  min: 429,
                  max: 1714
              },
              GAMAI: {
                  min: 10,
                  max: 40
              },
              BAPCAI: {
                  min: 375,
                  max: 1500
              },
              BINGO: {
                  min: 333,
                  max: 1333
              }
          }, {
              LUA: {
                  min: 3500,
                  max: 14e3
              },
              CACHUA: {
                  min: 2625,
                  max: 10500
              },
              KHOAI: {
                  min: 1750,
                  max: 7e3
              },
              BOSUA: {
                  min: 24,
                  max: 97
              },
              DUA: {
                  min: 700,
                  max: 2800
              },
              NGO: {
                  min: 583,
                  max: 2333
              },
              CAROT: {
                  min: 500,
                  max: 2e3
              },
              GAMAI: {
                  min: 15,
                  max: 58
              },
              BAPCAI: {
                  min: 438,
                  max: 1750
              },
              BINGO: {
                  min: 389,
                  max: 1556
              }
          }, {
              LUA: {
                  min: 3500,
                  max: 14e3
              },
              CACHUA: {
                  min: 2625,
                  max: 10500
              },
              KHOAI: {
                  min: 1750,
                  max: 7e3
              },
              BOSUA: {
                  min: 24,
                  max: 97
              },
              DUA: {
                  min: 700,
                  max: 2800
              },
              NGO: {
                  min: 583,
                  max: 2333
              },
              CAROT: {
                  min: 500,
                  max: 2e3
              },
              GAMAI: {
                  min: 15,
                  max: 58
              },
              BAPCAI: {
                  min: 438,
                  max: 1750
              },
              BINGO: {
                  min: 389,
                  max: 1556
              }
          }, {
              LUA: {
                  min: 3500,
                  max: 14e3
              },
              CACHUA: {
                  min: 2625,
                  max: 10500
              },
              KHOAI: {
                  min: 1750,
                  max: 7e3
              },
              BOSUA: {
                  min: 24,
                  max: 97
              },
              DUA: {
                  min: 700,
                  max: 2800
              },
              NGO: {
                  min: 583,
                  max: 2333
              },
              CAROT: {
                  min: 500,
                  max: 2e3
              },
              GAMAI: {
                  min: 15,
                  max: 58
              },
              BAPCAI: {
                  min: 438,
                  max: 1750
              },
              BINGO: {
                  min: 389,
                  max: 1556
              }
          }, {
              LUA: {
                  min: 3500,
                  max: 14e3
              },
              CACHUA: {
                  min: 2625,
                  max: 10500
              },
              KHOAI: {
                  min: 1750,
                  max: 7e3
              },
              BOSUA: {
                  min: 24,
                  max: 97
              },
              DUA: {
                  min: 700,
                  max: 2800
              },
              NGO: {
                  min: 583,
                  max: 2333
              },
              CAROT: {
                  min: 500,
                  max: 2e3
              },
              GAMAI: {
                  min: 15,
                  max: 58
              },
              BAPCAI: {
                  min: 438,
                  max: 1750
              },
              BINGO: {
                  min: 389,
                  max: 1556
              }
          }, {
              LUA: {
                  min: 3500,
                  max: 14e3
              },
              CACHUA: {
                  min: 2625,
                  max: 10500
              },
              KHOAI: {
                  min: 1750,
                  max: 7e3
              },
              BOSUA: {
                  min: 24,
                  max: 97
              },
              DUA: {
                  min: 700,
                  max: 2800
              },
              NGO: {
                  min: 583,
                  max: 2333
              },
              CAROT: {
                  min: 500,
                  max: 2e3
              },
              GAMAI: {
                  min: 15,
                  max: 58
              },
              BAPCAI: {
                  min: 438,
                  max: 1750
              },
              BINGO: {
                  min: 389,
                  max: 1556
              }
          }, {
              LUA: {
                  min: 4e3,
                  max: 16e3
              },
              CACHUA: {
                  min: 3e3,
                  max: 12e3
              },
              KHOAI: {
                  min: 2e3,
                  max: 8e3
              },
              BOSUA: {
                  min: 33,
                  max: 133
              },
              DUA: {
                  min: 800,
                  max: 3200
              },
              NGO: {
                  min: 667,
                  max: 2667
              },
              CAROT: {
                  min: 571,
                  max: 2286
              },
              GAMAI: {
                  min: 20,
                  max: 80
              },
              BAPCAI: {
                  min: 500,
                  max: 2e3
              },
              BINGO: {
                  min: 444,
                  max: 1778
              }
          }, {
              LUA: {
                  min: 4e3,
                  max: 16e3
              },
              CACHUA: {
                  min: 3e3,
                  max: 12e3
              },
              KHOAI: {
                  min: 2e3,
                  max: 8e3
              },
              BOSUA: {
                  min: 33,
                  max: 133
              },
              DUA: {
                  min: 800,
                  max: 3200
              },
              NGO: {
                  min: 667,
                  max: 2667
              },
              CAROT: {
                  min: 571,
                  max: 2286
              },
              GAMAI: {
                  min: 20,
                  max: 80
              },
              BAPCAI: {
                  min: 500,
                  max: 2e3
              },
              BINGO: {
                  min: 444,
                  max: 1778
              }
          }, {
              LUA: {
                  min: 4e3,
                  max: 16e3
              },
              CACHUA: {
                  min: 3e3,
                  max: 12e3
              },
              KHOAI: {
                  min: 2e3,
                  max: 8e3
              },
              BOSUA: {
                  min: 33,
                  max: 133
              },
              DUA: {
                  min: 800,
                  max: 3200
              },
              NGO: {
                  min: 667,
                  max: 2667
              },
              CAROT: {
                  min: 571,
                  max: 2286
              },
              GAMAI: {
                  min: 20,
                  max: 80
              },
              BAPCAI: {
                  min: 500,
                  max: 2e3
              },
              BINGO: {
                  min: 444,
                  max: 1778
              }
          }, {
              LUA: {
                  min: 4e3,
                  max: 16e3
              },
              CACHUA: {
                  min: 3e3,
                  max: 12e3
              },
              KHOAI: {
                  min: 2e3,
                  max: 8e3
              },
              BOSUA: {
                  min: 33,
                  max: 133
              },
              DUA: {
                  min: 800,
                  max: 3200
              },
              NGO: {
                  min: 667,
                  max: 2667
              },
              CAROT: {
                  min: 571,
                  max: 2286
              },
              GAMAI: {
                  min: 20,
                  max: 80
              },
              BAPCAI: {
                  min: 500,
                  max: 2e3
              },
              BINGO: {
                  min: 444,
                  max: 1778
              }
          }, {
              LUA: {
                  min: 4e3,
                  max: 16e3
              },
              CACHUA: {
                  min: 3e3,
                  max: 12e3
              },
              KHOAI: {
                  min: 2e3,
                  max: 8e3
              },
              BOSUA: {
                  min: 33,
                  max: 133
              },
              DUA: {
                  min: 800,
                  max: 3200
              },
              NGO: {
                  min: 667,
                  max: 2667
              },
              CAROT: {
                  min: 571,
                  max: 2286
              },
              GAMAI: {
                  min: 20,
                  max: 80
              },
              BAPCAI: {
                  min: 500,
                  max: 2e3
              },
              BINGO: {
                  min: 444,
                  max: 1778
              }
          }, {
              LUA: {
                  min: 4500,
                  max: 18e3
              },
              CACHUA: {
                  min: 3375,
                  max: 13500
              },
              KHOAI: {
                  min: 2250,
                  max: 9e3
              },
              BOSUA: {
                  min: 44,
                  max: 175
              },
              DUA: {
                  min: 900,
                  max: 3600
              },
              NGO: {
                  min: 750,
                  max: 3e3
              },
              CAROT: {
                  min: 643,
                  max: 2571
              },
              GAMAI: {
                  min: 26,
                  max: 105
              },
              BAPCAI: {
                  min: 563,
                  max: 2250
              },
              BINGO: {
                  min: 500,
                  max: 2e3
              }
          }, {
              LUA: {
                  min: 4500,
                  max: 18e3
              },
              CACHUA: {
                  min: 3375,
                  max: 13500
              },
              KHOAI: {
                  min: 2250,
                  max: 9e3
              },
              BOSUA: {
                  min: 44,
                  max: 175
              },
              DUA: {
                  min: 900,
                  max: 3600
              },
              NGO: {
                  min: 750,
                  max: 3e3
              },
              CAROT: {
                  min: 643,
                  max: 2571
              },
              GAMAI: {
                  min: 26,
                  max: 105
              },
              BAPCAI: {
                  min: 563,
                  max: 2250
              },
              BINGO: {
                  min: 500,
                  max: 2e3
              }
          }, {
              LUA: {
                  min: 4500,
                  max: 18e3
              },
              CACHUA: {
                  min: 3375,
                  max: 13500
              },
              KHOAI: {
                  min: 2250,
                  max: 9e3
              },
              BOSUA: {
                  min: 44,
                  max: 175
              },
              DUA: {
                  min: 900,
                  max: 3600
              },
              NGO: {
                  min: 750,
                  max: 3e3
              },
              CAROT: {
                  min: 643,
                  max: 2571
              },
              GAMAI: {
                  min: 26,
                  max: 105
              },
              BAPCAI: {
                  min: 563,
                  max: 2250
              },
              BINGO: {
                  min: 500,
                  max: 2e3
              }
          }, {
              LUA: {
                  min: 4500,
                  max: 18e3
              },
              CACHUA: {
                  min: 3375,
                  max: 13500
              },
              KHOAI: {
                  min: 2250,
                  max: 9e3
              },
              BOSUA: {
                  min: 44,
                  max: 175
              },
              DUA: {
                  min: 900,
                  max: 3600
              },
              NGO: {
                  min: 750,
                  max: 3e3
              },
              CAROT: {
                  min: 643,
                  max: 2571
              },
              GAMAI: {
                  min: 26,
                  max: 105
              },
              BAPCAI: {
                  min: 563,
                  max: 2250
              },
              BINGO: {
                  min: 500,
                  max: 2e3
              }
          }, {
              LUA: {
                  min: 4500,
                  max: 18e3
              },
              CACHUA: {
                  min: 3375,
                  max: 13500
              },
              KHOAI: {
                  min: 2250,
                  max: 9e3
              },
              BOSUA: {
                  min: 44,
                  max: 175
              },
              DUA: {
                  min: 900,
                  max: 3600
              },
              NGO: {
                  min: 750,
                  max: 3e3
              },
              CAROT: {
                  min: 643,
                  max: 2571
              },
              GAMAI: {
                  min: 26,
                  max: 105
              },
              BAPCAI: {
                  min: 563,
                  max: 2250
              },
              BINGO: {
                  min: 500,
                  max: 2e3
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }, {
              LUA: {
                  min: 5e3,
                  max: 2e4
              },
              CACHUA: {
                  min: 3750,
                  max: 15e3
              },
              KHOAI: {
                  min: 2500,
                  max: 1e4
              },
              BOSUA: {
                  min: 56,
                  max: 222
              },
              DUA: {
                  min: 1e3,
                  max: 4e3
              },
              NGO: {
                  min: 833,
                  max: 3333
              },
              CAROT: {
                  min: 714,
                  max: 2857
              },
              GAMAI: {
                  min: 33,
                  max: 133
              },
              BAPCAI: {
                  min: 625,
                  max: 2500
              },
              BINGO: {
                  min: 556,
                  max: 2222
              }
          }]
      },
      cc._RF.pop()
  }
  , {}],
  control_lib: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "3df44hg3vZKF4U+wbFF+ddU", "control_lib");
      var y = e("../all_modules");
      setTimeout(function() {
          y = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              y.controlLib.controlDropTargetList = []
          },
          removeTouchHandler: function(e) {
              e.isDraggable = !1,
              e.touchStartHandlerArr = e.touchMoveHandlerArr = e.touchEndHandlerArr = null,
              e.off("touchstart"),
              e.off("touchend"),
              e.off("touchmove"),
              e.off("touchcancel")
          },
          setTouchEvent: function(a) {
              a.touchStartHandlerArr = [],
              a.touchMoveHandlerArr = [],
              a.touchEndHandlerArr = [];
              var n = _screenWidth / 2
                , i = _screenHeight / 2
                , o = function(e, a) {
                  var o = a.touch.getLocation()
                    , t = cc.p(o.x - n, o.y - i);
                  e.map(function(e) {
                      return e(t, a)
                  })
              };
              y.utils.singleTouchSet(a, function(e) {
                  return o(a.touchStartHandlerArr, e)
              }, function(e) {
                  return o(a.touchMoveHandlerArr, e)
              }, function(e) {
                  return o(a.touchEndHandlerArr, e)
              })
          },
          setDroppable: function(e) {
              y.controlLib.controlDropTargetList && y.controlLib.controlDropTargetList.includes && !y.controlLib.controlDropTargetList.includes(e) && y.controlLib.controlDropTargetList.push(e)
          },
          removeDroppable: function(e) {
              _removeArrItem(y.controlLib.controlDropTargetList, e),
              e.dragCallBack = null
          },
          setDraggable: function(p, g, m, a) {
              var v = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
                , f = 5 < arguments.length && void 0 !== arguments[5] && arguments[5]
                , h = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 20
                , b = p;
              p.isDraggable = !0,
              b.isDraggable = !0,
              p.touchStartHandlerArr || y.controlLib.setTouchEvent(p);
              var C = p.originalGlobalPos = {
                  x: 0,
                  y: 0
              }
                , i = {
                  x: p.x,
                  y: p.y
              }
                , r = b.parent.getComponent(cc.Layout)
                , l = !!r && r.enabled
                , d = b.getComponent(cc.Widget) || {}
                , s = b.zIndex || 0;
              p.touchStartHandlerArr.push(function(e) {
                  if (!y.control.isDragging && !p.isTouchDisabled) {
                      s = b.zIndex || 0;
                      var a = y.controlScrollLayer.revertScrollLayerDiff(y.utils.getGlobalPosition(p));
                      C.x = a.x,
                      C.y = a.y,
                      d.enabled = !1,
                      i.x = p.x,
                      i.y = p.y,
                      l && (r.enabled = !1);
                      var o = y.utils.getGlobalPosition(p);
                      y.control.dragPosDiff = cc.p(o.x - e.x, o.y - e.y);
                      var t = b.scaleX
                        , n = b.scaleY;
                      y.control.isDragging = b,
                      y.controlLib.controlDropTargetList.map(function(e) {
                          if (e.active) {
                              var a = y.utils.getGlobalPosition(e);
                              e.dropX1 = a.x - t * e.width / 2,
                              e.dropX2 = a.x + t * e.width / 2,
                              e.dropY1 = a.y - n * e.height / 2,
                              e.dropY2 = a.y + n * e.height / 2
                          }
                      }),
                      y.controlLib.controlDropTargetList.sort(function(e, a) {
                          return e.dropX1 > a.dropX1 ? 1 : -1
                      }),
                      y.control.currentLayoutName = _currentLayouts[1] && "layout_victim" == _currentLayouts[1].name ? "layout_victim" : "layout_home",
                      y.control.dropTargetListScrollOffset = y.control["scrollLayer_" + y.control.currentLayoutName].getPosition()
                  }
              }),
              p.touchMoveHandlerArr.push(function(e) {
                  if (y.control.isDragging && y.control.isDragging == b && !p.isTouchDisabled) {
                      var a = y.utils.global2LocalPosDiff(b, e.x, e.y)
                        , o = cc.p(b.x + a.x + y.control.dragPosDiff.x, b.y + a.y + y.control.dragPosDiff.y);
                      b.setPosition(o);
                      var t = y.utils.getGlobalPosition(p);
                      if (!y.control.onDragStartCalled) {
                          var n = y.controlScrollLayer.revertScrollLayerDiff(y.utils.getGlobalPosition(p))
                            , i = Math.hypot(n.x - C.x, n.y - C.y);
                          h < i && (y.control.onDragStartCalled = !0,
                          b.zIndex = 9999,
                          g && g())
                      }
                      var r = y.control["scrollLayer_" + y.control.currentLayoutName].getPosition();
                      t.x -= r.x - y.control.dropTargetListScrollOffset.x,
                      t.y -= r.y - y.control.dropTargetListScrollOffset.y;
                      var l = y.utils.getGlobalScale(p)
                        , d = t.x - l.X * p.width / 2 - v
                        , s = t.x + l.X * p.width / 2 + v
                        , c = t.y - l.Y * p.height / 2 - v
                        , u = t.y + l.Y * p.height / 2 + v
                        , _ = y.control.overlappingArr = [];
                      y.controlLib.controlDropTargetList.some(function(e) {
                          if (e == p || !e.active)
                              return !1;
                          if (e.dropX1 > s)
                              return !0;
                          if (e.dropX2 < d || e.dropY2 < c || e.dropY1 > u)
                              return !1;
                          if (f) {
                              var a = y.utils.getGlobalPosition(b)
                                , o = y.utils.getGlobalPosition(e);
                              e.overlapCenterDistance = Math.hypot(a.x - o.x, a.y - o.y)
                          }
                          _.includes(e) || _.push(e)
                      }),
                      m && m(e.x, e.y, _),
                      y.control.onDragStartCalled && y.controlScrollLayer.scrollFollowDrag(e, y.control.currentLayoutName)
                  }
              }),
              p.dragTouchEndHandler = function(e) {
                  y.control.isDragging && y.control.isDragging == b && "true" != p.isTouchDisabled && (d.enabled = !0,
                  b.setPosition(i),
                  b.zIndex = s,
                  l && (r.enabled = !0),
                  y.control.isDragging = !1,
                  y.control.onDragStartCalled = !1,
                  a && a(e.x, e.y, y.control.overlappingArr || []),
                  y.control.overlappingArr = [],
                  y.controlScrollLayer.scrollStopDrag(),
                  p.isTouchDisabled && (p.isTouchDisabled = "true"))
              }
              ,
              p.touchEndHandlerArr.push(p.dragTouchEndHandler)
          },
          handleUnexpectedDraggableDragEnd: function(e) {
              e.opacity = 0,
              e.name = "isDeleted",
              e.getComponentsInChildren(sp.Skeleton).map(function(e) {
                  return e.node.active = !1
              })
          },
          setDoubleTaps: function(e, a) {
              e.touchStartHandlerArr || y.controlLib.setTouchEvent(e);
              var o = 0;
              e.touchStartHandlerArr.push(function() {
                  var e = _time();
                  e - o < 800 ? (a && a(),
                  o = 0) : o = e
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  control_performance_check: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "59831Jkc3hJPLoF5/YJFKfr", "control_performance_check");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              window._isMinDevice = "unchecked"
          },
          startCheckingFps: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home";
              "unchecked" == window._isMinDevice && (window._fpsArray = [],
              t.control["scrollLayer_" + e].addComponent("fps_check"),
              setTimeout(function() {
                  t.controlPerformance.finishCheckingFps(e)
              }, 1e3))
          },
          finishCheckingFps: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home";
              if ("unchecked" == window._isMinDevice) {
                  t.control["scrollLayer_" + e].removeComponent("fps_check");
                  var a = window._fpsArray.filter(function(e) {
                      return e < 30
                  }).length / _fpsArray.length;
                  window._isMinDevice = .15 < a,
                  _isMinDevice && (t.fx.removeAllOutputFx("layout_home"),
                  t.fx.removeAllOutputFx("layout_victim"))
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  control_scroll_layer: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "7d5e3SwcrZCGbyB2HY/7Mcy", "control_scroll_layer");
      var g = e("../all_modules");
      setTimeout(function() {
          g = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              g.controlScrollLayer.initScrollLayer("layout_home"),
              g.controlScrollLayer.initScrollLayer("layout_victim")
          },
          revertScrollLayerDiff: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = cc.find("Canvas/" + a + "/scroll_layer")
                , t = g.controlScrollLayer.startLayerPos;
              return {
                  x: e.x - (o.x - t.x),
                  y: e.y - (o.y - t.y)
              }
          },
          initScrollLayer: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home"
                , d = g.control["scrollLayer_" + e] = cc.find("Canvas/" + e + "/scroll_layer");
              "layout_home" == e && (g.controlScrollLayer.startLayerPos = d.getPosition());
              var i = function(e) {
                  var a = e.touch.getLocation();
                  return a.x -= _screenWidth / 2,
                  a.y -= _screenHeight / 2,
                  a
              }
                , r = {
                  x1: -d.width * (1 - d.anchorX) + _screenWidth / 2,
                  x2: d.width * d.anchorX - _screenWidth / 2,
                  y1: -d.height * (1 - d.anchorY) + _screenHeight / 2,
                  y2: d.height * d.anchorY - _screenHeight / 2
              }
                , s = g.control.scrollSoftPosLimit = {
                  x1: r.x1 + 40,
                  x2: r.x2 - 40,
                  y1: r.y1 + 40,
                  y2: r.y2 - 40
              }
                , c = []
                , l = !1
                , u = function() {
                  !0 !== window._isMinDevice && (c.push({
                      x: l.x,
                      y: l.y,
                      time: _time()
                  }),
                  3 < c.length && c.shift())
              };
              g.utils.singleTouchSet(d, function(e) {
                  g.tutorial.isShowingTut() || g.control.isDragging || (l = i(e),
                  c = [],
                  u(),
                  d.stopAllActions(),
                  d.orgPosBeforeScrolling = d.getPosition(),
                  _removeAllCCActions(d),
                  g.controlPerformance.startCheckingFps())
              }, function(e) {
                  if (l) {
                      var a = l
                        , o = i(e)
                        , t = d.x + (o.x - a.x)
                        , n = d.y + (o.y - a.y);
                      t = _max(_min(t, r.x2), r.x1),
                      n = _max(_min(n, r.y2), r.y1),
                      g.control.isScrollingLayer || (20 < _abs(d.orgPosBeforeScrolling.x - t) || 20 < _abs(d.orgPosBeforeScrolling.y - n)) && (g.control.isScrollingLayer = !0),
                      d.setPosition(t, n),
                      l = o,
                      u()
                  }
              }, function(e) {
                  l && (g.control.isScrollingLayer = !1,
                  l = i(e),
                  u(),
                  l = !1,
                  function() {
                      if (!0 !== window._isMinDevice) {
                          var e = _time()
                            , o = void 0
                            , t = void 0
                            , n = {
                              x: 0,
                              y: 0
                          };
                          c.reverse().map(function(e) {
                              if (o = e.time,
                              t) {
                                  var a = e.time - t.time;
                                  n.x += a * (e.x - t.x),
                                  n.y += a * (e.y - t.y)
                              }
                              t = e
                          });
                          var a = e - o;
                          n.x /= a,
                          n.y /= a;
                          var i = cc.p(d.x + 15 * n.x, d.y + 15 * n.y);
                          i.x = _min(_max(i.x, s.x1), s.x2),
                          i.y = _min(_max(i.y, s.y1), s.y2);
                          var r = cc.moveTo(.5, cc.p(i.x, d.y)).easing(cc.easeOut(2))
                            , l = cc.moveTo(.5, cc.p(d.x, i.y)).easing(cc.easeOut(2));
                          d.runAction(r),
                          d.runAction(l)
                      }
                  }())
              })
          },
          scrollToNode: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {
                  x: 0,
                  y: 0
              }
                , t = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                , n = arguments[4];
              if (!g.tutorial.isShowingTut() || e.name.includes("tut1_") || e.name.includes("tut2_") || e.name.includes("tut3_")) {
                  var i = g.control["scrollLayer_" + a]
                    , r = g.control.scrollSoftPosLimit
                    , l = g.utils.global2LocalPosDiff(e, 0, 0)
                    , d = g.utils.global2LocalPosDiff(i, 0, 0);
                  l.x -= o.x,
                  t && (l.y -= o.y);
                  var s = i.x + l.x;
                  s > r.x2 && (l.x -= s - r.x2),
                  s < r.x1 && (l.x += r.x1 - s);
                  var c = i.y + l.y;
                  if (c > r.y2 && (l.y -= c - r.y2),
                  c < r.y1 && (l.y += r.y1 - c),
                  !(!t && _abs(l.x) < cc.winSize.width / 2 - 20 && _abs(l.y) < cc.winSize.height / 2 - 330)) {
                      i.stopAllActions();
                      var u = 100 + t ? l.y : d.y;
                      i.runAction(cc.moveBy(.3, cc.p(0, u)).easing(cc.easeOut(3))),
                      i.runAction(cc.sequence(cc.moveBy(.3, cc.p(l.x, 0)).easing(cc.easeOut(3)), cc.callFunc(n || function() {}
                      )))
                  }
              }
          },
          scrollFollowDrag: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home";
              if (!g.tutorial.isShowingTut()) {
                  var o = g.control["scrollLayer_" + a]
                    , t = g.control.scrollSoftPosLimit
                    , n = -_screenWidth / 2 + 80
                    , i = _screenWidth / 2 - 80
                    , r = -_screenHeight / 2 + 80
                    , l = _screenHeight / 2 - 80
                    , d = e.x > i ? -1 : e.x < n ? 1 : 0;
                  if (d != g.control.lastScrollMoveX) {
                      if (d) {
                          var s = d * t.x2 - o.x
                            , c = _abs(s / 500);
                          o.actionX = cc.moveBy(c, cc.p(s, 0)),
                          o.runAction(o.actionX)
                      } else
                          o.actionX && (o.stopAction(o.actionX),
                          o.actionX = null);
                      g.control.lastScrollMoveX = d
                  }
                  var u = e.y > l ? -1 : e.y < r ? 1 : 0;
                  if (u != g.control.lastScrollMoveY) {
                      if (u) {
                          var _ = u * t.y2 - o.y
                            , p = _abs(_ / 500);
                          o.actionY = cc.moveBy(p, cc.p(0, _)),
                          o.runAction(o.actionY)
                      } else
                          o.actionY && (o.stopAction(o.actionY),
                          o.actionY = null);
                      g.control.lastScrollMoveY = u
                  }
              }
          },
          scrollStopDrag: function() {
              var e = _currentLayouts[1] && "layout_victim" == _currentLayouts[1].name ? "layout_victim" : "layout_home"
                , a = g.control["scrollLayer_" + e];
              a.actionX && a.stopAction(a.actionX),
              a.actionY && a.stopAction(a.actionY),
              a.actionX = a.actionY = null,
              g.control.lastScrollMoveX = g.control.lastScrollMoveY = 0
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  control: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f0069h/4j9G4alKuQb5yJtA", "control");
      var N = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
        , u = e("../all_modules");
      setTimeout(function() {
          u = e("../all_modules")
      }, 0),
      a.exports = {
          clickMaxDistance: 18,
          init: function() {
              u.control.initHarvest(),
              u.control.initSteal(),
              u.control.initBuySlot()
          },
          getDraggingUnrelatedSlots: function(e, a) {
              var o = e[a] ? e[a].product : null;
              if (o) {
                  var t = [];
                  for (var n in e)
                      if ("layoutName" != n && n != a) {
                          var i = e[n];
                          if (i.isVisible && !i.isLocked && i.isBought && i.product) {
                              var r = i.product;
                              r && o && (r.id != o.id || r.level != o.level || 0 == o.level || 0 == r.level) && t.push(n)
                          }
                      }
                  return t
              }
          },
          initSlotLayoutZIndex: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home";
              cc.find("Canvas/" + e + "/scroll_layer/ground_cells_A").children.map(function(e, a) {
                  e.zIndex = a
              }),
              cc.find("Canvas/" + e + "/scroll_layer/ground_cells_B").children.map(function(e, a) {
                  e.zIndex = a
              }),
              cc.find("Canvas/" + e + "/scroll_layer/ground_cells_C").children.map(function(e, a) {
                  e.zIndex = a
              }),
              cc.find("Canvas/" + e + "/scroll_layer/layer_ani").zIndex = 9999
          },
          initDragTree: function(i) {
              i.touchEndHandlerArr || u.controlLib.setTouchEvent(i),
              i.touchStartHandlerArr.push(function(e) {
                  i.isDragMoved = !1,
                  i.orgGlobalPos = u.utils.getGlobalPosition(i)
              }),
              i.touchEndHandlerArr.push(function(e) {
                  u.tutorial.isShowingTut() || i.isDragMoved || u.infoItem.btnInfoItem(i)
              });
              var r = function(e) {
                  var a = 9999
                    , o = null;
                  return e.map(function(e) {
                      e.isAnimalNode || e.productObj && e.productObj.isAnimal || !(e.overlapCenterDistance < a) || (a = (o = e).overlapCenterDistance)
                  }),
                  !(60 < a) && o
              }
                , l = null;
              u.controlLib.setDraggable(i, function() {
                  u.uiShop.hideShop(!0),
                  i.isDragMoved = !0,
                  u.fx.groundFadeOut(i.name);
                  var e = u.control.dragUnrelatedSlots = u.control.getDraggingUnrelatedSlots(u.game.mySlotList, i.name);
                  e && e.map(function(e) {
                      return u.fx.slotDarken(e, !0)
                  })
              }, function(e, a, o) {
                  var t = r(o);
                  l && l != t && (l.scale = 1,
                  l.color = cc.color("#ffffff")),
                  t && (t.scale = 1.03,
                  t.color = cc.color("#FA8484"),
                  l = t)
              }, function(e, a, o) {
                  u.uiShop.showShop();
                  var t = "isDeleted" == i.name;
                  if (t ? (setTimeout(function() {
                      i.removeFromParent(!0)
                  }, 200),
                  i.zIndex = -1e3) : u.fx.groundFadeIn(i.name),
                  u.control.dragUnrelatedSlots && (u.control.dragUnrelatedSlots.map(function(e) {
                      return u.fx.slotLighten(e)
                  }),
                  u.control.dragUnrelatedSlots = null),
                  o.length) {
                      l && (l.scale = 1);
                      var n = r(o);
                      !t && n ? u.eventsTree.slotDroppedTree(u.game.mySlotList, i.name, n.name) : u.sound.playSFX("land_press")
                  } else
                      u.sound.playSFX("land_press")
              }, 0, !0, u.control.clickMaxDistance)
          },
          initDragAnimal: function(d) {
              var w = d;
              d.touchEndHandlerArr || u.controlLib.setTouchEvent(d),
              d.touchStartHandlerArr.push(function(e) {
                  d.orgGlobalPos = u.utils.getGlobalPosition(d),
                  d.isDragMoved = !1
              }),
              d.touchEndHandlerArr.push(function(e) {
                  u.tutorial.isShowingTut() || d.isDragMoved || u.infoItem.btnInfoItem(w)
              });
              var e = Math.hypot(d.width / 2, d.width / 2)
                , T = e
                , I = .5 * e
                , s = function(e) {
                  var o = null
                    , a = null
                    , t = 9999
                    , n = [];
                  if (e.map(function(e) {
                      var a = e.overlapCenterDistance;
                      e.isAnimalNode ? a < t && (o = e,
                      t = a) : n.push(e)
                  }),
                  T < t && (o = null),
                  4 <= n.length) {
                      var i = n[0];
                      if (n.map(function(e) {
                          i.overlapCenterDistance > e.overlapCenterDistance && (i = e)
                      }),
                      i.overlapCenterDistance > I && (i = null),
                      i) {
                          var r = i.name.split("-")
                            , l = N(r, 3)
                            , d = l[0]
                            , s = l[1]
                            , c = l[2]
                            , u = {
                              top: d + "-" + (s = parseInt(s)) + "-" + ((c = parseInt(c)) - 1),
                              bottom: d + "-" + s + "-" + (c + 1),
                              left: d + "-" + (s - 1) + "-" + c,
                              right: d + "-" + (s + 1) + "-" + c
                          }
                            , _ = function(e) {
                              var a = u[e];
                              u[e] = n.find(function(e) {
                                  return e.name == a
                              })
                          };
                          for (var p in u)
                              _(p);
                          var g = u.top
                            , m = u.bottom
                            , v = u.left
                            , f = u.right
                            , h = g && m ? g.overlapCenterDistance > m.overlapCenterDistance ? m : g : g || m
                            , b = v && f ? v.overlapCenterDistance > f.overlapCenterDistance ? f : v : v || f;
                          if (h && b) {
                              var C = b == v ? -1 : 1
                                , y = h == g ? -1 : 1
                                , x = d + "-" + (s + C) + "-" + (c + y)
                                , A = n.find(function(e) {
                                  return e.name == x
                              });
                              if (A) {
                                  var S = w.name;
                                  [i, h, b, A].every(function(e) {
                                      if (e.productObj) {
                                          if (!e.productObj.isAnimal)
                                              return !1;
                                          if (e.productObj.animalHeadSlot != S)
                                              return !1
                                      }
                                      return !0
                                  }) && (a = {
                                      "1 1": i,
                                      "-1 1": b,
                                      "1 -1": h,
                                      "-1 -1": A
                                  }[C + " " + y])
                              }
                          }
                      }
                  }
                  return {
                      currentAnimalTarget: o,
                      currentSmallSlot: a
                  }
              }
                , c = null;
              u.controlLib.setDraggable(d, function() {
                  u.uiShop.hideShop(!0),
                  d.isDragMoved = !0;
                  var e = u.control.dragUnrelatedSlots = u.control.getDraggingUnrelatedSlots(u.game.mySlotList, w.name);
                  e && e.map(function(e) {
                      return u.fx.slotDarken(e)
                  })
              }, function(e, a, o) {
                  var t = s(o)
                    , n = t.currentAnimalTarget
                    , i = t.currentSmallSlot;
                  c && c != (n || i) && (c.isAnimalNode ? c.scale = 1 : u.uiAnimal.setScaleAnimalSlots(c.name, 1)),
                  n ? (n.scale = 1.03,
                  c = n) : i && (u.uiAnimal.setScaleAnimalSlots(i.name, 1.03),
                  c = i)
              }, function(e, a, o) {
                  u.uiShop.showShop();
                  var t = "isDeleted" == d.name;
                  if (t && (setTimeout(function() {
                      d.removeFromParent(!0)
                  }, 200),
                  d.zIndex = -1e3),
                  u.control.dragUnrelatedSlots && (u.control.dragUnrelatedSlots.map(function(e) {
                      return u.fx.slotLighten(e)
                  }),
                  u.control.dragUnrelatedSlots = null),
                  o.length) {
                      c && (c.scale = 1);
                      var n = s(o)
                        , i = n.currentAnimalTarget
                        , r = n.currentSmallSlot
                        , l = i || r;
                      !t && l ? u.eventsAnimal.slotDroppedAnimal(u.game.mySlotList, w.name, l.name) : u.sound.playSFX("land_press")
                  } else
                      u.sound.playSFX("land_press")
              }, 0, !0, u.control.clickMaxDistance)
          },
          initBuySlot: function() {
              cc.find("Canvas").on("touchend", function() {
                  if (u.control.clickedBuySlot) {
                      if (u.control.clicking2BuySlot)
                          return void (u.control.clicking2BuySlot = !1);
                      u.uiSlot.buySlotCancel(u.control.clickedBuySlot),
                      u.control.clickedBuySlot = !1
                  }
              })
          },
          initBuySlotClick: function(o) {
              o.touchStartHandlerArr || u.controlLib.setTouchEvent(o),
              o.touchEndHandlerArr.push(function(e, a) {
                  u.control.isScrollingLayer || (u.control.clickedBuySlot && u.uiSlot.buySlotCancel(u.control.clickedBuySlot),
                  u.control.clickedBuySlot != o.name ? u.events.buySlotClick1(u.game.mySlotList, o.name) && (u.control.clickedBuySlot = o.name,
                  u.control.clicking2BuySlot = !0) : (u.control.clickedBuySlot = null,
                  u.events.buySlotClick2(u.game.mySlotList, o.name, o)))
              })
          },
          initHarvest: function() {
              var e = cc.find("Canvas/layout_home/but_harvest");
              u.controlLib.setDraggable(e, function() {
                  u.uiShop.hideShop(),
                  u.uiShop.isHidden = !0
              }, function(e, a, o) {
                  o.map(function(e) {
                      var a = e.name
                        , o = u.uiSlot.getSlotNode(a);
                      o && o.productObj && (o.productObj.isAnimal && (a = o.productObj.animalHeadSlot),
                      u.events.harvest(u.game.mySlotList, a))
                  })
              }, function() {
                  u.uiShop.isHidden && (u.uiShop.isHidden = !1,
                  u.uiShop.showShop())
              }, -30, !1, 60),
              u.controlLib.setDoubleTaps(e, function() {
                  e.isTouchDisabled || u.events.harvestAllSlots(u.game.mySlotList)
              })
          },
          initSteal: function() {
              var t = cc.find("Canvas/layout_victim/but_harvest");
              u.controlLib.setDraggable(t, function() {
                  u.uiVictim.hideShopVictim(),
                  u.control.harvestedSlots = {}
              }, function(e, a, o) {
                  t.isTouchDisabled || o.map(function(e) {
                      var a = e.name
                        , o = u.uiSlot.getSlotNode(a, "layout_victim");
                      if (o && o.productObj && (o.productObj.isAnimal && (a = o.productObj.animalHeadSlot),
                      !u.control.harvestedSlots || !u.control.harvestedSlots[a])) {
                          var t = u.events.steal(u.game.victimSlotList, a);
                          u.control.harvestedSlots && (u.control.harvestedSlots[a] = t)
                      }
                  })
              }, function() {
                  u.uiVictim.showShopVictim()
              }, -40, !1, 40)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  core: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "eca3bPlmNZBEpikKckQRRue", "core");
      var m = e("../all_modules");
      setTimeout(function() {
          m = e("../all_modules")
      }, 0),
      a.exports = {
          newSlotList: function(e, a, o, t) {
              var n = m.pseudoServer.extractSlotList(o)
                , i = m.core.newBlankSlotList();
              return m.core.setSlotListByLevel(i, e),
              m.core.setSlotListByFieldInfo(i, n, a),
              "layout_victim" == t && m.core.hideSlotUnavailable(i, n),
              i.layoutName = t,
              m.core.slotListUpdateUI(i, "layout_victim" == t),
              i
          },
          hideSlotUnavailable: function(e, a) {
              for (var o in e) {
                  var t = a[o];
                  e[o].isVisible = !!t
              }
          },
          newBlankSlotList: function() {
              var e = {};
              for (var a in m.configs.slotGroupArea)
                  for (var o = m.configs.slotGroupArea[a], t = 1; t <= o.col; t++)
                      for (var n = 1; n <= o.row; n++)
                          e[a + "-" + t + "-" + n] = {
                              isVisible: !1
                          };
              return e
          },
          setSlotListByLevel: function(a) {
              var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
                , t = []
                , n = [];
              m.configs.levels.some(function(e, a) {
                  if (o <= a) {
                      if (e.unlockedSlots && e.unlockedSlots.length)
                          return n = e.unlockedSlots,
                          !0
                  } else
                      e.unlockedSlots && t.push.apply(t, function(e) {
                          if (Array.isArray(e)) {
                              for (var a = 0, o = Array(e.length); a < e.length; a++)
                                  o[a] = e[a];
                              return o
                          }
                          return Array.from(e)
                      }(e.unlockedSlots))
              }),
              t.map(function(e) {
                  a[e].isVisible = !0,
                  a[e].isLocked = !1
              }),
              n.map(function(e) {
                  a[e].isVisible = !0,
                  a[e].isLocked = !0
              })
          },
          getLevelUnlock: function() {
              var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
                , t = 0;
              return m.configs.levels.some(function(e, a) {
                  if (o <= a && e.unlockedSlots && e.unlockedSlots.length)
                      return t = a
              }),
              t + 1
          },
          setSlotListByFieldInfo: function(e, a, o) {
              if (a)
                  for (var t in a) {
                      var n = a[t]
                        , i = e[t];
                      if (i.isBought = !0,
                      n && n.Product) {
                          i.HarvestTime = n.HarvestTime,
                          i.CountedTime = n.CountedTime,
                          n.HarvestTime = parseInt(n.HarvestTime || 0) / 1e3,
                          n.CountedTime = parseInt(n.CountedTime || 0) / 1e3;
                          var r = parseInt(o || _time()) / 1e3
                            , l = i.product = {
                              id: n.Product,
                              level: parseInt(n.Level) || 0,
                              HarvestTime: i.HarvestTime
                          };
                          l.slotList = e;
                          var d = m.configs.products[n.Product]
                            , s = r - n.HarvestTime;
                          if (0 == l.level && s > d.initTime && (s -= d.initTime,
                          l.level = 1),
                          l.isSprouted = !!l.level,
                          l.isSprouted) {
                              var c = m.configs.getProduceInfo(l.id, l.level)
                                , u = c.produceTime
                                , _ = c.maxOutput
                                , p = n.CountedTime + s
                                , g = _floor(p / u);
                              (g = l.outputAmount = _min(g, _)) < _ && m.timer.setProduceTimer(l, p)
                          } else
                              m.timer.setSproutTimer(l, s)
                      }
                  }
          },
          slotListUpdateUI: function(t) {
              var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , i = t.layoutName
                , r = {};
              if (window._currentFarLevelUnlockList || (window._currentFarLevelUnlockList = {}),
              window._farLevelUnlockSlotList && 0 != Object.keys(window._farLevelUnlockSlotList).length && (window._currentFarLevelUnlockList = window._farLevelUnlockSlotList || {}),
              window._thisPlayerInfo && 10 == _thisPlayerInfo.level)
                  for (var e in window._currentFarLevelUnlockList)
                      e.includes("B") && delete window._currentFarLevelUnlockList[e];
              else
                  window._thisPlayerInfo && 20 == _thisPlayerInfo.level && (window._currentFarLevelUnlockList = {});
              window._farLevelUnlockSlotList = {};
              var l = [];
              m.configs.levels.some(function(e, a) {
                  var o = e.unlockedSlots;
                  if (o && o.some(function(e) {
                      return e.includes("B")
                  }))
                      return (l = o).farLevelUnlock = a + 1,
                      !0
              });
              var d = [];
              m.configs.levels.some(function(e, a) {
                  var o = e.unlockedSlots;
                  if (o && o.some(function(e) {
                      return e.includes("C")
                  }))
                      return (d = o).farLevelUnlock = a + 1,
                      !0
              });
              for (var a = "Canvas/" + (n ? "layout_victim" : "layout_home") + "/scroll_layer/layer_product", o = cc.find(a), s = 0, c = 0; o.children.length >= c + 1 && s++ < 1e3; ) {
                  var u = o.children[c];
                  m.controlLib.removeDroppable(u),
                  u == m.control.isDragging ? (c = 1,
                  m.controlLib.handleUnexpectedDraggableDragEnd(u)) : u.removeFromParent(!0)
              }
              var _ = function(e) {
                  if ("layoutName" == e)
                      return "continue";
                  var a = t[e];
                  if (a.isVisible && !window._currentFarLevelUnlockList[e] || n || (l.includes(e) ? (a.isVisible = !0,
                  a.isLocked = !0,
                  _farLevelUnlockSlotList[e] = l.farLevelUnlock) : d.includes(e) && (a.isVisible = !0,
                  a.isLocked = !0,
                  _farLevelUnlockSlotList[e] = d.farLevelUnlock)),
                  a.isVisible)
                      if (a.isLocked)
                          m.uiSlot.renderSlot(e, "locked", i);
                      else if (a.isBought) {
                          m.uiSlot.renderSlot(e, "bought", i),
                          m.uiSlot.getSlotNode(e, i).productObj = null;
                          var o = a.product;
                          o && (m.configs.isAnimalProduct[o.id] ? r[e] = o : (m.uiTree.renderTree(e, o.id, o.level, o.outputAmount, i, o),
                          (m.uiSlot.getSlotNode(e, i).productObj = o).isSprouted && o.outputAmount && _timer0(function() {
                              m.fx.hasOutput(e, i)
                          })))
                      } else
                          m.uiSlot.renderSlot(e, "unlocked", i);
                  else
                      m.uiSlot.renderSlot(e, "invisible", i)
              };
              for (var p in t)
                  _(p);
              var g = function(e) {
                  var a = r[e];
                  if (a.animalHeadSlot) {
                      if (a.animalHeadSlot != e)
                          return "continue"
                  } else
                      a.animalHeadSlot = e;
                  m.uiAnimal.renderAnimal(e, a.id, a.level, a.outputAmount, i, a),
                  a.isSprouted && a.outputAmount && _timer0(function() {
                      m.fx.hasOutputAnimal(e, i)
                  }),
                  a.isAnimal = !0,
                  a.animalHeadSlot = e,
                  m.uiSlot.getSlotNode(e, i).productObj = a,
                  m.eventsAnimal.setAnimalAtSlot(t, e, a)
              };
              for (var p in r)
                  g(p)
          },
          getSlotId: function(e) {
              var a = e.slotList;
              for (var o in a)
                  if (a[o] && a[o].product == e)
                      return o
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  data: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "51748IcoV1KE5LFMY3/1RS1", "data");
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
      var l = e("./all_modules");
      setTimeout(function() {
          l = e("./all_modules")
      }, 0),
      a.exports = {
          init: function() {
              var e = void 0;
              e = window._IS_PRODUCTION ? "https://api.farmbattle.com/" : "https://dev.farmbattle.com/",
              l.data.api = e,
              l.data.syncFieldUrl = e + "users/sync_field",
              l.data.syncMetaUrl = e + "users/sync_meta",
              l.data.loginUrl = e + "users/login_new",
              l.data.oldSyncUrl = e + "users/me",
              l.data.renewQuestUrl = e + "users/renew_quest",
              l.data.tradeUrl = e + "users/trade",
              l.data.plantUrl = e + "fields/plant",
              l.data.removeUrl = e + "fields/destroy",
              l.data.harvestUrl = e + "fields/harvest",
              l.data.harvestBatchUrl = e + "fields/harvest_batch",
              l.data.upgradeUrl = e + "fields/upgrade",
              l.data.swapUrl = e + "fields/swap",
              l.data.moveUrl = e + "fields/move",
              l.data.unlockSlotUrl = e + "fields/unlock_slot",
              l.data.startStealingUrl = e + "users/stealing",
              l.data.endStealingUrl = e + "users/stealing_end",
              l.data.endStealingNewUrl = e + "users/stealing_end_new",
              l.data.stealUrl = e + "fields/steal",
              l.data.purgeUrl = e + "fields/purge",
              l.data.startThiefsUrl = e + "news/thiefs",
              l.data.revengeUrl = e + "users/revenge",
              l.data.stealFriendUrl = e + "users/stealing_friend",
              l.data.viewLeaderboardUserUrl = e + "users/top_view",
              l.data.upgradeStorageUrl = e + "users/upgrade_storage",
              l.data.speedUpUrl = e + "fields/speedup",
              l.data.speedUpAdsUrl = e + "fields/speedupads",
              l.data.growUpUrl = e + "fields/growup",
              l.data.upgradeTruckUrl = e + "users/upgrade_truck",
              l.data.buyDogUrl = e + "users/buy_dog",
              l.data.upgradeDogUrl = e + "users/upgrade_dog",
              l.data.renameDogUrl = e + "users/rename_dog",
              l.data.setDefaultDogUrl = e + "users/use_dog",
              l.data.truckSkipUrl = e + "users/truck_speedup",
              l.data.userDefineDataUrl = e + "users/data",
              l.data.adrewardUrl = e + "users/adreward",
              l.data.exchangeUrl = e + "users/exchange",
              l.data.iapUrl = e + "users/iap",
              l.data.achievementListUrl = e + "achievements",
              l.data.claimDailyRewardUrl = e + "users/daily_reward",
              l.data.friendVictimsUrl = e + "news/friend_victims",
              l.data.addGoldUrl = e + "users/add_gold",
              l.data.addDiamondUrl = e + "users/add_diamond",
              l.data.promoGamesUrl = e + "news/promo_games",
              l.data.stealX2Url = e + "fields/stealx2",
              l.data.unlockStatusUrl = e + "users/unlock_farm_status",
              l.data.updateStatusUrl = e + "users/update_status",
              l.data.themeUrl = e + "users/theme"
          },
          onServerError: function() {
              l.syncData.sync()
          },
          onServerRespond: function(e, a, o) {
              var t = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                , n = arguments[4];
              if (200 == e.status) {
                  var i = void 0;
                  try {
                      i = JSON.parse(e.responseText)
                  } catch (e) {}
                  if ("object" !== (void 0 === i ? "undefined" : r(i)) || null === i)
                      return;
                  i.serverTime = parseInt(e.getResponseHeader("x-timestamp")),
                  !a || !t && l.data.isStoppingCallback || a(i)
              } else
                  _logFBEvent("event_server_error", 1, {
                      url: n,
                      xhr_status: "" + e.status,
                      err_msg: e.response.message
                  }),
                  _log("error connecting serverrrrrrrrrr", e.status),
                  t ? o && o() : o && !l.data.isStoppingCallback && o()
          },
          postToServer: function(o, e, t) {
              var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "POST"
                , n = arguments[4]
                , i = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
              if (l.pseudoAPI[o])
                  return l.pseudoAPI[o](e, t, n);
              if (!l.data.isStoppingRequest || o == l.data.oldSyncUrl) {
                  var r = cc.loader.getXMLHttpRequest();
                  r.open(a, o),
                  r.setRequestHeader("Content-Type", "application/json"),
                  window._accessToken && r.setRequestHeader("X-Access-Token", window._accessToken),
                  r.send(JSON.stringify(e)),
                  r.onreadystatechange = function(e, a) {
                      4 == r.readyState && l.data.onServerRespond(r, t, n, i, o)
                  }
              }
          },
          getToServer: function(o, t, n, e) {
              if (l.pseudoAPI[o])
                  return l.pseudoAPI[o](e, t, n);
              var a = "";
              for (var i in e)
                  a += "&" + i + "=" + encodeURIComponent(e[i]);
              if (a = "?" + a.replace("&", ""),
              !l.data.isStoppingRequest || o == l.data.oldSyncUrl) {
                  var r = cc.loader.getXMLHttpRequest();
                  r.open("GET", o + a),
                  r.setRequestHeader("Content-Type", "application/json"),
                  window._accessToken && r.setRequestHeader("X-Access-Token", window._accessToken),
                  r.send(),
                  r.onreadystatechange = function(e, a) {
                      4 == r.readyState && l.data.onServerRespond(r, t, n, !1, o)
                  }
              }
          },
          getAchievementList: function(e) {
              l.data.getToServer(l.data.achievementListUrl, e)
          },
          getAchievementListNew: function(e) {
              l.pseudoAPI.achievementListNewUrl(e)
          },
          postTrade: function(e, a, o) {
              l.data.postToServer(l.data.tradeUrl, e, a, "POST", o)
          },
          renewQuest: function(e) {
              l.data.getToServer(l.data.renewQuestUrl, e)
          },
          saveToServer: function(e, a, o) {
              var t, n, i;
              l.data.postToServer(l.data.userDefineDataUrl, (i = a,
              (n = e)in (t = {}) ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[n] = i,
              t), o)
          },
          postPurge: function(e, a) {
              l.data.postToServer(l.data.purgeUrl, {
                  slot: e
              }, a)
          },
          postSteal: function(e, a) {
              l.data.postToServer(l.data.stealUrl, {
                  session: _thisPlayerVictimSession,
                  victim: _thisPlayerVictimId,
                  slot: e
              }, a)
          },
          postSwap: function(e, a, o) {
              l.data.postToServer(l.data.swapUrl, {
                  src: e,
                  dist: a
              }, o, "POST", l.data.onServerError)
          },
          postMove: function(e, a, o, t) {
              l.data.postToServer(l.data.moveUrl, {
                  animal: e,
                  src: a,
                  dist: o
              }, t, "POST", l.data.onServerError)
          },
          postPlant: function(e, a, o) {
              window._logEventUserDay2,
              l.data.postToServer(l.data.plantUrl, {
                  slot: e,
                  product: a
              }, o, "POST", l.data.onServerError)
          },
          postUnlockSlot: function(e, a) {
              l.data.postToServer(l.data.unlockSlotUrl, {
                  slot: e
              }, a)
          },
          postRemoveTree: function(e, a) {
              l.data.postToServer(l.data.removeUrl, {
                  slot: e
              }, a, "POST", l.data.onServerError)
          },
          postHarvest: function(e, a) {
              window._logEventUserDay2,
              l.data.postToServer(l.data.harvestUrl, {
                  slot: e,
                  product_level: l.game.mySlotList[e].product.level,
                  storage_level: l.storage.level
              }, a)
          },
          postBatchHarvest: function(e, a) {
              window._logEventUserDay2 && _logEventUserDay2("harvest_all"),
              l.data.postToServer(l.data.harvestBatchUrl, {
                  slots: e
              }, a)
          },
          postUpgrade: function(e, a, o) {
              window._logEventUserDay2,
              l.data.postToServer(l.data.upgradeUrl, {
                  src: e,
                  dist: a
              }, o, "POST", l.data.onServerError)
          },
          loginRealServer: function(a) {
              l.data.postToServer(l.data.loginUrl, {
                  playerid: _thisPlayerInfo.id,
                  username: _thisPlayerInfo.name,
                  photo: _thisPlayerInfo.photo
              }, function(e) {
                  l.data.UserData = e,
                  window._accessToken = e.AccessToken,
                  a && a(e)
              })
          },
          getRevengeData: function(e, a) {
              l.data.postToServer(l.data.revengeUrl, {
                  session_id: _revenge_session_id
              }, e, "POST", a)
          },
          getStealFriendData: function(e, a, o) {
              l.data.getToServer(l.data.stealFriendUrl, a, o, {
                  id: e
              })
          },
          getLeaderboardUserData: function(e, a, o) {
              _log(" getLeaderboardUserData called !!!!! "),
              l.data.getToServer(l.data.viewLeaderboardUserUrl, a, o, {
                  id: e
              })
          },
          getThiefsData: function(e) {
              l.data.postToServer(l.data.startThiefsUrl + "?limit=" + ((window._thisPlayerInfo ? _thisPlayerInfo.lastLoginTime : 0) || 0), {}, e, "GET")
          },
          getSyncData: function(e, a) {
              l.data.postToServer(l.data.oldSyncUrl, {}, e, "GET", a)
          },
          reconnect: function(e, a) {
              l.data.postToServer(l.data.oldSyncUrl, {}, e, "GET", a, !0)
          },
          getVictimData: function(e, a) {
              l.data.postToServer(l.data.startStealingUrl, {}, e, "GET", a)
          },
          endStealing: function(e, a, o) {
              l.data.postToServer(l.data.endStealingUrl, {
                  victim_id: e,
                  session_id: a
              }, o, "POST")
          },
          endStealingReport: function(e, a) {
              l.data.postToServer(l.data.endStealingNewUrl, e, a, "POST")
          },
          upgradeStorage: function(e, a, o) {
              _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "upgrade_storage"
              }),
              l.data.postToServer(l.data.upgradeStorageUrl, {
                  level: a,
                  currency: e
              }, o)
          },
          speedupDiamond: function(e, a) {
              _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "speedup_product_output"
              }),
              l.data.postToServer(l.data.speedUpUrl, {
                  slot: e
              }, a)
          },
          speedupAds: function(e, a) {
              l.data.postToServer(l.data.speedUpAdsUrl, {
                  slot: e
              }, a)
          },
          growUpDiamond: function(e, a) {
              _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "speedup_product_sprout"
              }),
              l.data.postToServer(l.data.growUpUrl, {
                  slot: e,
                  currency: "d"
              }, a)
          },
          growUpAds: function(e, a) {
              l.data.postToServer(l.data.growUpUrl, {
                  slot: e,
                  currency: "a"
              }, a)
          },
          skipTruck: function(e) {
              l.data.postToServer(l.data.truckSkipUrl, {}, e, "GET")
          },
          upgradeTruck: function(e, a, o) {
              "d" == e && _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "upgrade_truck"
              }),
              l.data.postToServer(l.data.upgradeTruckUrl, {
                  level: a,
                  currency: e
              }, o)
          },
          buyDog: function(e, a) {
              l.data.postToServer(l.data.buyDogUrl, {
                  dog: l.dogs.getCompatibleDogIdForSerer(e)
              }, function() {
                  a && a(),
                  l.pseudoServer.syncMeta()
              })
          },
          upgradeDog: function(e, a) {
              l.data.postToServer(l.data.upgradeDogUrl, {
                  dog: l.dogs.getCompatibleDogIdForSerer(e)
              }, function() {
                  a && a(),
                  l.pseudoServer.syncMeta()
              })
          },
          renameDog: function(e, a, o) {
              l.data.postToServer(l.data.renameDogUrl, {
                  dog: l.dogs.getCompatibleDogIdForSerer(e),
                  name: a
              }, function() {
                  o && o(),
                  l.pseudoServer.syncMeta()
              })
          },
          setDefaultDog: function(e, a) {
              _log(" data.setDefaultDog(" + e + ") :::::: "),
              l.data.postToServer(l.data.setDefaultDogUrl, {
                  dog: l.dogs.getCompatibleDogIdForSerer(e)
              }, function() {
                  a && a(),
                  l.pseudoServer.syncMeta()
              }, "POST")
          },
          adreward: function(e) {
              l.data.getToServer(l.data.adrewardUrl, e)
          },
          exchange: function(e, a) {
              _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "exchange_gold"
              }),
              l.data.postToServer(l.data.exchangeUrl, {
                  id: e
              }, a)
          },
          iap: function(e, a) {
              l.data.postToServer(l.data.iapUrl, {
                  id: e
              }, a)
          },
          claimDailyReward: function(e) {
              l.data.getToServer(l.data.claimDailyRewardUrl, e)
          },
          getFriendVictims: function(e, a, o) {
              l.social.friendInfoObj ? _timer0(function() {
                  a && a(friendInfoObj)
              }) : _waitToRun(function() {
                  l.data.getToServer(l.data.friendVictimsUrl, function(e) {
                      l.social.friendInfoObj = e,
                      a && a(e)
                  }, o, {
                      fbids: e
                  })
              }, "_accessToken")
          },
          addGold: function(e, a) {
              l.data.postToServer(l.data.addGoldUrl, {
                  gold: e
              }, a)
          },
          addDiamond: function(e, a) {
              l.data.postToServer(l.data.addDiamondUrl, {
                  diamond: e
              }, a)
          },
          getPromoGames: function(e) {
              l.data.getToServer(l.data.promoGamesUrl, e, function() {
                  e([])
              })
          },
          stealX2: function(e, a) {
              l.data.postToServer(l.data.stealX2Url, e, a, "POST")
          },
          unlockStatus: function(e) {
              l.data.postToServer(l.data.unlockStatusUrl, {}, e, "POST"),
              l.pseudoServer.syncMeta()
          },
          updateStatus: function(e, a) {
              l.data.postToServer(l.data.updateStatusUrl, {
                  status: e
              }, function() {
                  a && a(),
                  l.pseudoServer.syncMeta()
              }, "POST")
          },
          useTrialTheme: function(e, a) {
              l.data.postToServer(l.data.themeUrl, {
                  theme: e,
                  type: 0
              }, a, "POST")
          },
          switchTheme: function(e, a) {
              l.data.postToServer(l.data.themeUrl, {
                  theme: e,
                  type: 1
              }, function() {
                  a && a(),
                  l.pseudoServer.syncMeta()
              }, "POST")
          },
          syncField: function(e, a) {
              l.data.postToServer(l.data.syncFieldUrl, {
                  field_json: e,
                  PlayerLevel: _thisPlayerInfo.level
              }, a, "POST")
          },
          syncMeta: function(e, a) {
              l.data.postToServer(l.data.syncMetaUrl, {
                  meta_json: e
              }, a, "POST")
          }
      },
      cc._RF.pop()
  }
  , {
      "./all_modules": "all_modules"
  }],
  dogs: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f9536GiH5dGi6mxygdx4o63", "dogs");
      var r = e("../all_modules");
      setTimeout(function() {
          r = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              _waitToRun(function() {
                  r.uiStore.isPaymentAvailable && _waitToRun(function() {
                      for (var e = r.uiStore.fbProductCatalog, o = {}, a = 0; a < e.length; a++) {
                          var t = e[a];
                          o[t.productID] = t
                      }
                      ["dog_0", "dog_1", "dog_2", "dog_3", "dog_4", "dog_5"].map(function(e, a) {
                          _log(" dict[" + e + "].price = " + o[e].price + " "),
                          r.configs.dogArr[a].iapPrice = o[e].price
                      }),
                      _log(" _G.configs.dogArr ===== ", r.configs.dogArr),
                      window._thisPlayerInfo && _thisPlayerInfo.dogList && r.uiDog.setViewDetail(r.uiDog.viewingDogId || "dog_0")
                  }, "fbProductCatalog", r.uiStore)
              }, "paymentChecked", r.uiStore)
          },
          initWithData: function(e) {
              _thisPlayerInfo.dogList = e.Dogs || {},
              (_thisPlayerInfo.defaultDogId = e.DogId) + "" == "1" && (_thisPlayerInfo.defaultDogId = "dog_0",
              r.dogs.isCompatibleDogId = !0);
              var a = _thisPlayerInfo.dogList[1] || _thisPlayerInfo.dogList[1];
              for (var o in a && !_thisPlayerInfo.dogList.dog_0 && (_thisPlayerInfo.dogList.dog_0 = a,
              r.dogs.isCompatibleDogId = !0),
              _thisPlayerInfo.dogList)
                  _thisPlayerInfo.dogList[o].level = parseInt(_thisPlayerInfo.dogList[o].level);
              r.uiDog.renderShopDog(_thisPlayerInfo.defaultDogId),
              r.dogs.checkToSetDefaultDog()
          },
          loadAllDogAtlases: function() {
              ["dog_0", "dog_1", "dog_2", "dog_3", "dog_4", "dog_5"].map(function(o) {
                  cc.loader.loadRes("prefab/late_load/dogs/" + o, cc.Prefab, function(e, a) {
                      e ? _log(" error loading prefab " + o + " ", e) : (r.prefabList.dogList[o] = a,
                      r.dogs.checkToSetDefaultDog(),
                      r.share.checkToSetLoadingDog(o, a))
                  })
              })
          },
          checkToSetDefaultDog: function() {
              window._thisPlayerInfo && r.prefabList.dogList[_thisPlayerInfo.defaultDogId] && r.dogs.setDefaultDog(_thisPlayerInfo.defaultDogId)
          },
          getCompatibleDogIdForSerer: function(e) {
              return r.dogs.isCompatibleDogId && "dog_0" == e ? "1" : e
          },
          confirmSetDefault: function() {
              _log(" confirmSetDefault called !!!! "),
              _showLayout("popup_confirm_set_dog")
          },
          setDefaultDog: function(e, a) {
              var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "layout_home";
              _log(" setDefaultDog called !!!! // dogId =" + e + " // dogName = " + a + " // layoutName = " + o + " "),
              a = e ? _isString(a) ? a : _thisPlayerInfo.dogList[e] ? _thisPlayerInfo.dogList[e].name : "" : "",
              r.uiDog.setDogName(a, o);
              var t = cc.find("Canvas/" + o + "/scroll_layer/dog-shadow");
              if (t.active = !!e,
              e) {
                  isNaN(t.orgPosX) && (t.orgPosX = t.x),
                  t.x = t.orgPosX,
                  t.scaleX = 1;
                  var n = t.getChildByName("dog")
                    , i = cc.instantiate(r.prefabList.dogList[e]);
                  i && (n.removeAllChildren(),
                  n.addChild(i),
                  t.stopAllActions(),
                  t.runAction(r.uiDog.moveActions[e].clone()),
                  "layout_home" == o && e != _thisPlayerInfo.defaultDogId && (_log("setting default dog !!!!!! >>>>>>>>>>>>>>>>>> ^%$^**^%$^^(*#$&@&&*( "),
                  r.data.setDefaultDog(e),
                  _thisPlayerInfo.defaultDogId = e,
                  r.uiDog.setViewDetail(r.uiDog.viewingDogId),
                  _logFBEvent("event_set_default_dog", 1, {
                      dogId: e
                  })))
              }
          },
          setUpVictimDog: function(e) {
              _log(" :::: :::: setUpVictimDog called !!!! ");
              var a = e.DogId;
              a + "" == "1" && (a = "dog_0"),
              r.dogs.setDefaultDog(a, e.DogName, "layout_victim")
          },
          upgrade: function() {
              _log(" dogs.upgrade called !");
              var e = r.uiDog.viewingDogId
                , a = r.configs.getDogConfig(e)
                , o = _thisPlayerInfo.dogList[e].level
                , t = a.upgradePrice[o];
              if (_thisPlayerInfo.diamond < t)
                  return _showLayout("popup_not_enough_diamond");
              r.data.upgradeDog(e, function() {
                  _thisPlayerInfo.dogList[e].level++,
                  r.uiDog.setViewDetail(r.uiDog.viewingDogId),
                  _logFBEvent("event_upgrade_" + e, 1, {
                      level: o + 1
                  })
              }),
              r.data.addDiamond(-t, function(e) {
                  _thisPlayerInfo.diamond = e.Diamond,
                  r.uiHome.setDiamond(e.Diamond)
              }),
              r.uiLayout.showToolTip("Upgraded successfully!");
              var n = a.antiTheftRate[o] - a.antiTheftRate[o - 1]
                , i = cc.find("Canvas/popup_dogs/bg_holder/ratio");
              r.utils.setLabelText(i, "+" + n + "%"),
              i.runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.fadeIn(.7).easing(cc.easeOut(1)), cc.moveBy(.7, cc.v2(0, 30)).easing(cc.easeOut(1))), cc.delayTime(1), cc.fadeOut(.5), cc.callFunc(function() {
                  i.y -= 30
              })))
          },
          renameDog: function() {
              var a = r.uiDog.viewingDogId
                , o = cc.find("Canvas/popup_dogs/bg_holder/dog_name").getComponent(cc.EditBox).string;
              o != _thisPlayerInfo.dogList[a].name && r.data.renameDog(a, o, function(e) {
                  a == _thisPlayerInfo.defaultDogId && r.uiDog.setDogName(o),
                  _thisPlayerInfo.dogList[a].name = o,
                  r.uiLayout.showToolTip("Name changed successfully!")
              })
          },
          buyDogSuccess: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
              _log("buyDogSuccess called !!!!!"),
              _hideLayout("popup_dogs"),
              r.uiDog.removeLock(e),
              r.uiLayout.showToolTip("Buy dog successfully!\nEnjoy!"),
              _thisPlayerInfo.dogList[e] = {
                  name: r.configs.getDogConfig(e).name,
                  level: 1
              },
              r.uiDog.setViewDetail(e),
              r.dogs.setDefaultDog(e),
              r.data.buyDog(e),
              a ? _logFBEvent("event_buy_dog_099_success", 1, {
                  dogId: e
              }) : _logFBEvent("event_buy_dog_success", 1, {
                  dogId: e
              })
          },
          buyDog: function(e) {
              switch (e.type) {
              case "iap":
                  r.dogs.buyDogIAP(e);
                  break;
              case "gold":
                  r.dogs.buyDogGold(e);
                  break;
              case "diamond":
                  r.dogs.buyDogDiamond(e)
              }
          },
          buyDogIAP: function(a) {
              FBInstant.payments.purchaseAsync({
                  productID: a.dogId,
                  developerPayload: "foobar"
              }).then(function(e) {
                  _logFBEvent("event_buy_dog_iap_success", 1, {
                      dogId: a.dogId
                  }),
                  r.dogs.buyDogSuccess(a.dogId),
                  FBInstant.payments.consumePurchaseAsync(a.dogId).then(function() {
                      _log("purchased item consumed !")
                  }).catch(function(e) {
                      _log("iap error", e)
                  })
              }).catch(function(e) {
                  _logFBEvent("event_buy_dog_iap_failed", 1, {
                      err: e ? e.message : ""
                  }),
                  r.uiLayout.showCongratulations("sorry, error occured", "oops!"),
                  _log(e)
              })
          },
          buyDogGold: function(e) {
              if (_thisPlayerInfo.gold < e.price)
                  return _showLayout("popup_not_enough_gold");
              r.data.addGold(-e.price, function(e) {
                  _thisPlayerInfo.gold = e.Gold,
                  r.uiHome.setGold(e.Gold)
              }),
              r.dogs.buyDogSuccess(e.dogId)
          },
          buyDogDiamond: function(a) {
              var e = r.dogs.currentDiamondMissedForDog = a.price - _thisPlayerInfo.diamond
                , o = "$0.99";
              if (r.uiStore.fbProductCatalog) {
                  var t = r.uiStore.fbProductCatalog.find(function(e) {
                      return e.productID == a.dogId + "_099"
                  });
                  t && (o = t.price)
              }
              if (0 < e)
                  return r.uiStore.isPaymentAvailable ? (_hideLayout("popup_dogs"),
                  r.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_buy_dog_iap_099/bg_holder/info1"), e),
                  r.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_buy_dog_iap_099/bg_holder/info2"), o),
                  r.dogs.buyingDogId099 = a.dogId,
                  _showLayout("popup_buy_dog_iap_099")) : (_logFBEvent("event_buy_dog_iap_unavailable"),
                  _showLayout("popup_not_enough_diamond"));
              r.data.addDiamond(-a.price, function(e) {
                  _thisPlayerInfo.diamond = e.Diamond,
                  r.uiHome.setDiamond(e.Diamond)
              }),
              r.dogs.buyDogSuccess(a.dogId)
          },
          buyDogIAP099: function() {
              var a = r.dogs.buyingDogId099 + "_099";
              FBInstant.payments.purchaseAsync({
                  productID: a,
                  developerPayload: "foobar"
              }).then(function(e) {
                  _logFBEvent("event_buy_dog_iap099_success", 1, {
                      missedDiamond: r.dogs.currentDiamondMissedForDog
                  }),
                  _hideLayout("popup_buy_dog_iap_099"),
                  r.data.addDiamond(-_thisPlayerInfo.diamond, function(e) {
                      _thisPlayerInfo.diamond = e.Diamond,
                      r.uiHome.setDiamond(e.Diamond)
                  }),
                  r.dogs.buyDogSuccess(r.dogs.buyingDogId099, !0),
                  FBInstant.payments.consumePurchaseAsync(a).then(function() {
                      _log("purchased item consumed !")
                  }).catch(function(e) {
                      _log("iap error", e),
                      _log(e)
                  })
              }).catch(function(e) {
                  _hideLayout("popup_buy_dog_iap_099"),
                  r.uiLayout.showCongratulations("sorry, error occured", "oops!"),
                  _logFBEvent("event_buy_dog_iap_failed", 1, {
                      missedDiamond: r.dogs.currentDiamondMissedForDog
                  }),
                  _log(e)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  en_US: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "82e86YTgWFE/7dFAm0VKuzv", "en_US");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " just played. Now it's your turn!"],
      n = ["", " just played. Now it's your turn!"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "They were brought from Siberia to North America by the Thule people\n1,000 years ago",
              dog_1: "Husky is a general name for a\nsled-type of dog used in northern regions",
              dog_2: "German Shepherds are working dogs developed originally for herding sheep",
              dog_3: "Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards",
              dog_4: "It is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose",
              dog_5: "Their coat of fur is mostly black, with brown on the legs and face"
          },
          products: {
              nameList: {
                  "Milk cow": "Milk cow",
                  Hen: "Hen",
                  Wheat: "Wheat",
                  Tomato: "Tomato",
                  Potato: "Potato",
                  Cucumber: "Cucumber",
                  Corn: "Corn",
                  Carrot: "Carrot",
                  Cabbage: "Cabbage",
                  Pumpkin: "Pumpkin",
                  Pineapple: "Pineapple",
                  Goat: "Goat",
                  Coconut: "Coconut",
                  Sheep: "Sheep"
              },
              outputNameList: {
                  "bottle of milk": "bottle of milk",
                  egg: "egg",
                  wheat: "wheat",
                  tomato: "tomato",
                  potato: "potato",
                  cucumber: "cucumber",
                  corn: "corn",
                  carrot: "carrot",
                  cabbage: "cabbage",
                  pumpkin: "pumpkin",
                  pineapple: "pineapple",
                  "goat milk": "goat milk",
                  coconut: "coconut",
                  wool: "wool"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "LOADING SCREENSHOT",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "CONFIRM",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "Set this dog as\ndefault dog?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "SET DEFAULT",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NEW PRODUCTS",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "NEW DOGS",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "WINTER THEME",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "GET THE BEAUTIFUL WINTER THEME\nFOR YOUR FARM!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "TRY NOW!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "CONGRATZ",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'SUCCESSFULLY USED THEME\n"WINTER"',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "OK",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "REMAINING TIME:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "WHEN TIME'S UP PLEASE GO TO SHOP",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "LIFETIME",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "GET THE BEAUTIFUL WINTER THEME\nFOR YOUR FARM!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'SUCCESSFULLY USED THEME\n"WINTER"',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "TO CHANGE THEME PLEASE GO TO SHOP",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "USE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "USING",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "GUIDE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "HOT",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "Spring Waltz",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "Winter sonata",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "Autumn Heart",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Coming soon",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "USING",
              "Canvas/popup_recover_damage/bg_holder/info": "DO YOU WANT TO RECOVER YOUR FARM FROM DAMAGE?",
              "Canvas/popup_recover_damage/wait/Label": "WAIT",
              "Canvas/popup_recover_damage/now/Label": "NOW",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Upgrade dog to increase\nanti-theft rate",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "STATUS",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Touch me",
              "Canvas/popup_edit_status/bg_holder/title": "Edit your status",
              "Canvas/popup_confirm_status/bg_holder/title": "Watch a video to unlock your farm status",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Status",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "UNLOCK",
              "Canvas/popup_dogs/bg_holder/dog_name": "  Dog name",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "GET FREE",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "NOW",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "LEADERBOARD",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "FRIENDS",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "GLOBAL",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "VIEW",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "NAME",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "NAME",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "LEVEL",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "LEVEL",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "invite friends to be your neighbors\n(and to go steal their fields)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "INVITE",
              "message_share_daily_reward/title": "log in for",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "REVENGE",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "GO STEAL",
              "prefabs//ground/lbl_info1": "BUY",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "SPEED UP",
              "Canvas/layout_home/scroll_layer/truck/go/label": "SELL",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "             ACHIEVEMENTS",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "STORAGE",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "THIEVES",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "FRIENDS",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "STEAL",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "FIND RANDOM PLAYER",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "FIND",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "YOU HAVE USED UP FREE\nVICTIM FINDS. WATCH A VIDEO \nTO GET MORE",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "No thief visited your \nfarm recently",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "invite friends to be your neighbors\n(and to go steal their fields)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "INVITE",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "INVITE",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "REPORT",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "No one has stolen your farm recently",
              "Canvas/popup_email/bg_holder/title": "List of thieves\nwho have stolen your farm",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "LEVEL UP",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "NEW",
              "Canvas/popup_new_level/bg_holder/txt_amount": "REWARD",
              "Canvas/popup_new_level/bg_holder/txt_level": "UNLOCKED",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "CLAIM",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "LEVEL UP",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "REWARD",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "CLAIM",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "SPEED UP",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "FREE",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "FREE",
              "Canvas/popup_info_item/bg_holder/bottom2": "HARVESTABLE",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "BACK",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "SELL",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "NO",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "YES",
              "Canvas/popup_sell/bg_holder/info": "ARE YOU SURE \nTO SELL THIS PLANT FOR",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "SELL",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "CHOOSE PRODUCTS TO SELL",
              "Canvas/popup_adjust_order/bg_holder/max": "MAX",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "SELL",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "SELL",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "UPGRADE",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "CAPACITY",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "TO",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "UPGRADE",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "CAPACITY",
              "Canvas/popup_upgrade_truck/bg_holder/to": "TO",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "UPGRADE",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "upgrade",
              "Canvas/popup_storage_full/bg_holder/message": "your storage is full\nupgrade now?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "stealing",
              "Canvas/popup_not_found/bg_holder/txt_msg": "Victim not found.\nPlease try again later",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "close",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Buy Gold",
              "Canvas/popup_not_enough_gold/bg_holder/info": "NOT ENOUGH GOLD!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "NOT ENOUGH DIAMOND!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Buy Diamond",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "OK",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "CONGRATS\nYOU'VE RECEIVED",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "SHOP",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "UPGRADE",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "truck is upgraded\nto the highest level",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "ACHIEVEMENT",
              "Canvas/popup_new_achievement/bg_holder/share/share": "SHARE WITH FRIENDS",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "CLAIM",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "ACHIEVEMENTS",
              "Canvas/popup_achievement_list/bg_holder/progress": "PROGRESS",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "COMPLETE",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "NO ACHIEVEMENT GAINED",
              "Canvas/popup_disconnected/but_reconnect/caption": "RECONNECT",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Not lucky day",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "FAIL",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "HOME",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "save 50%",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "save 50%",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "DOG",
              "Canvas/popup_dogs/bg_holder/txt_info": "BUY A DOG TO PROTECT YOUR FARM",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "OWNED",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "OK",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "DAILY REWARD",
              "Canvas/popup_daily_reward/bg_holder/title": "Come back tomorrow for more rewards!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "DAY 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "DAY 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "DAY 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "DAY 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "DAY 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "DAY 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "DAY 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "CLAIM",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "OOPS !",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "close",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "CONGRATS!",
              "Canvas/popup_bot_gift/bg_holder/title": "YOU HAVE RECEIVED THESE GIFTS",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "CLAIM",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Share with friends",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "SKIP",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "GOT IT!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "PLANT",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "GREAT",
              "Canvas/popup_tutorials/label_skip": "SKIP",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "GIFTS",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Do the quests below to get relevant gifts ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "DONE",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "GO HOME",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "You haven't stolen anything yet. Do you want to go home?",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "GO HOME",
              "Canvas/popup_go_steal/bg_header/lbl_header": "find victim",
              "Canvas/popup_go_steal/title": "all the product you've stolen",
              "Canvas/popup_go_steal/scrollview/msg": "You haven't stolen anything yet.",
              "Canvas/popup_go_steal/img_random/lbl_find": "FIND RANDOM PLAYER",
              "Canvas/popup_go_steal/btn_go/lblX5": "FIND",
              "Canvas/popup_go_steal/lbl_used_up_find": "YOU HAVE USED UP FREE\nVICTIM FINDS. WATCH A VIDEO \nTO GET MORE",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "continue?",
              "Canvas/popup_go_revenge/scrollview/msg": "You haven't stolen anything yet.",
              "Canvas/popup_go_revenge/lbl_find": "the victim that is chosen",
              "Canvas/popup_go_revenge/btn_go/lblX5": "GO",
              "Canvas/popup_video_failed/bg_holder/info": "OOPS !\nVIDEO FAILED TO SHOW\n\nPLEASE TRY AGAIN\nIN FEW MINUTES",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "OOPS",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "BUY NOW"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "LEVEL $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "all the product you've stolen",
                      "OOPS...": "OOPS..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "all the product you've stolen",
                      "OOPS...": "OOPS..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " day" + (1 < e ? "s" : "")
              },
              "Canvas/nodeCaches/row_victim/lbl1": "xxx AGO",
              "Canvas/nodeCaches/row_friend_victim/level": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Level xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Level xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "STEAL: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "SUCCESS RATE: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "STOLEN: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "STEAL: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "SUCCESS RATE: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "STOLEN: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Level xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "Play",
                      Create: "Create"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Your level: " + e + " / Rank:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return 1 < e ? e + " times left" : e + " time left"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return _G.gameLanguage.currentLangFile.products.nameList[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " every " + e[1] + " sec" : "your " + e[0] + " is growing"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Congratulations!",
                      "oops!": "oops!",
                      "Oops!": "Oops!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "You have received $1 golds");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  if (t.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(t, "You have received $1 diamonds");
                  var n = "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut";
                  return (a = {},
                  l(a, n, n),
                  l(a, "sorry, error occured", "sorry, error occured"),
                  l(a, " Video is not available.", " Video is not available."),
                  l(a, "Invitation sent successfully!", "Invitation sent successfully!"),
                  l(a, " Video is not available.", " Video is not available."),
                  l(a, "sorry, error occured", "sorry, error occured"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "OOPS! DISCONNECTED",
                      "CONNECTING SERVER ...": "CONNECTING SERVER ...",
                      "CONNECTED !": "CONNECTED !",
                      "Please check connection\nand reload game": "Please check connection\nand reload game"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "you've just dropped",
                      "sorry...": "sorry..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "LEVEL xxx",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "LEVEL xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "LEVEL xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "STEALING & REVENGE\n WILL BE UNLOCKED \nAT LEVEL xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Hi I am Tom. Welcome to your farm!", "Tap the wheat once to plant a new wheat", "Plant wheat on all available ground slots", "Now buy 1 ground slot to expand your field", "Drag to merge and make a wheat level 2", "Drag hand over the wheat to harvest", 'Click "sell" to sell the wheat you have just harvested'],
                          tut2: ['Tap the icon "go steal"', "Let's find a random victim", "Here comes the field of your victim. Let's do it!", "Drag the glove over all slots to steal the whole field", "Good job!\nYou did it first time. Not like me before.", 'Tap "Home" to go to your field'],
                          tut3: ["Touch the board to see the new requirements", "Fulfill the extra requirements to increase total value of your products", "Fulfill product of requirement 2 to increase total value by 150%", "Fulfill product of requirement 3 to increase total value by 200%", "", "Fulfill your requirements and continue building your farm"],
                          tut_use_theme: ["Touch to set theme of your farm!", "Well done!\nYou are smarter than I think\nNow You know the way to set theme."]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": function(e) {
                  return 1 < e ? e + " times left" : e + " time left"
              },
              "Canvas/popup_go_revenge/victim-level": "level: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "Missing xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "to buy a dog. Do you want to buy it with special price xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Level " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, o),
                  l(a, t, t),
                  l(a, "NOT ENOUGH SPACE", "NOT ENOUGH SPACE"),
                  l(a, "Nothing left to steal !", "Nothing left to steal !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Buy dog successfully!\nEnjoy!"),
                  l(a, "SHARED SUCCESSFULLY", "SHARED SUCCESSFULLY"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "CAN NOT HAVESRT WHEN STORAGE IS FULL"),
                  l(a, "Successfully save 50% dropped gold!", "Successfully save 50% dropped gold!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "INVITATION SENT SUCCESSFULLY"),
                  l(a, "Successfully X2 products!", "Successfully X2 products!"),
                  l(a, "Congratz! Status unlocked!", "Congratz! Status unlocked!"),
                  l(a, "Upgraded successfully!", "Upgraded successfully!"),
                  l(a, "Stealing is not available\nin view mode!", "Stealing is not available\nin view mode!"),
                  l(a, "Name changed successfully!", "Name changed successfully!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " has been caught by " + a + (o ? "'s dog" : "") + " when trying to steal " + a + "'s farm!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = [];
                          for (var n in o)
                              t.push(o[n] + " " + _G.configs.products[n].harvestUnitName + (1 < o[n] ? "s" : ""));
                          return e + " has stolen " + a + "'s farm! \n" + a + " lost " + t.join(", ")
                      }
                  },
                  cta: "Revenge Now"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Try Now!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' gained achievement "' + a + '". Can you?'
                  },
                  cta: "Try Now!"
              },
              sendInvitationVictim: {
                  content: "Let's play farm battle with me!",
                  cta: "Play Now!"
              },
              sendMsgInviteGift: {
                  content: "Hello! Please be my neighbor!",
                  cta: "Let's go!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "Expand xxx",
                  desc: "Own xxx ground slots"
              },
              UP_LUA: {
                  title: "Wheat lv.xxx",
                  desc: "Upgrade wheat to lv.xxx"
              },
              UP_CACHUA: {
                  title: "Tomato lv.xxx",
                  desc: "Upgrade tomato to lv.xxx"
              },
              UP_KHOAI: {
                  title: "Potato lv.xxx",
                  desc: "Upgrade patato to lv.xxx"
              },
              UP_BOSUA: {
                  title: "Milk cow lv.xxx",
                  desc: "Upgrade milk cow to lv.xxx"
              },
              UP_DUA: {
                  title: "Cucumber lv.xxx",
                  desc: "Upgrade cucumber to lv.xxx"
              },
              UP_NGO: {
                  title: "Corn lv.xxx",
                  desc: "Upgrade corn to lv.xxx"
              },
              UP_CAROT: {
                  title: "Carrot lv.xxx",
                  desc: "Upgrade carrot to lv.xxx"
              },
              UP_GAMAI: {
                  title: "Hen lv.xxx",
                  desc: "Upgrade hen to lv.xxx"
              },
              UP_BAPCAI: {
                  title: "Cabbage lv.xxx",
                  desc: "Upgrade cabbage to lv.xxx"
              },
              UP_BINGO: {
                  title: "Pumpkin lv.xxx",
                  desc: "Upgrade pumpkin to lv.xxx"
              },
              UP_PINEAPPLE: {
                  title: "Pineapple lv.xxx",
                  desc: "Upgrade pineapple to lv.xxx"
              },
              UP_GOAT: {
                  title: "Goat lv.xxx",
                  desc: "Upgrade goat to lv.xxx"
              },
              UP_COCONUT: {
                  title: "Coconut lv.xxx",
                  desc: "Upgrade Coconut to lv.xxx"
              },
              UP_SHEEP: {
                  title: "Sheep lv.xxx",
                  desc: "Upgrade sheep to lv.xxx"
              },
              UP_NHAKHO: {
                  title: "Storage lv.xxx",
                  desc: "Upgrade storage to lv.xxx"
              },
              UP_XEHANG: {
                  title: "Truck lv.xxx",
                  desc: "Upgrade truck to lv.xxx"
              }
          },
          gifts: {
              Play: "Play",
              "Create shortcut": "Create shortcut"
          }
      },
      cc._RF.pop()
  }
  , {}],
  es_ES: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "926e0S76F5Mgpk9PHDlGg4W", "es_ES");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " solo juega! Ahora es tu turno"],
      n = ["", " solo juega! Ahora es tu turno"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "Fueron traídos de Siberia a Norteamérica por el pueblo Thule hace 1,000 años.",
              dog_1: "Husky es un nombre general para un perro tipo trineo utilizado en las regiones del norte",
              dog_2: "Los pastores alemanes son perros de trabajo desarrollados originalmente para el pastoreo de ovejas.",
              dog_3: "Los Golden Retrievers tienen un amor instintivo por el agua y son fáciles de entrenar según estándares de obediencia básicos o avanzados",
              dog_4: "Es un perro musculoso y fuerte con una cara arrugada y una nariz distintiva.",
              dog_5: "Su pelaje es mayormente negro, con marrón en las piernas y la cara"
          },
          products: {
              nameList: {
                  "Milk cow": "Vaca lechera",
                  Hen: "Gallinas",
                  Wheat: "El trigo",
                  Tomato: "Los tomates",
                  Potato: "Papas",
                  Cucumber: "El pepino",
                  Corn: "Wu",
                  Carrot: "Las zanahorias",
                  Cabbage: "La col",
                  Pumpkin: "La calabaza",
                  Pineapple: "Piña",
                  Goat: "Cabra",
                  Coconut: "Coco",
                  Sheep: "Oveja"
              },
              outputNameList: {
                  "bottle of milk": "la leche",
                  egg: "los huevos",
                  wheat: "el trigo",
                  tomato: "los tomates",
                  potato: "papas",
                  cucumber: "el pepino",
                  corn: "wu",
                  carrot: "las zanahorias",
                  cabbage: "la col",
                  pumpkin: "la calabaza",
                  pineapple: "piña",
                  "goat milk": "leche de cabra",
                  coconut: "coco",
                  wool: "lana"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "CARGA DE LA PANTALLA",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "CONFIRMAR",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "Establecer este perro\ncomo perro predeterminado?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "ESTABLECER POR DEFECTO",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NUEVOS PRODUCTOS",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "NUEVOS PERROS",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "TEMA DE INVIERNO",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "OBTENGA EL HERMOSO TEMA DE INVIERNO\n¡PARA TU GRANJA!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "¡PROBAR AHORA!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "FELICITACION",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'TEMA USADO CON ÉXITO\n"INVIERNO"',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "Okay",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "TIEMPO RESTANTE:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "CUANDO EL TIEMPO SE ACABA, POR FAVOR VAYA A LA TIENDA",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "TODA LA VIDA",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "¡OBTENGA EL HERMOSO TEMA DE\nINVIERNO PARA SU GRANJA!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'TEMA USADO CON ÉXITO\n"INVIERNO"',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "PARA CAMBIAR EL TEMA POR FAVOR VAYA A LA TIENDA",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "UTILIZAR",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "UTILIZANDO",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "GUÍA",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "CALIENTE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "florero de primavera",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "canción de amor de invierno",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "corazón de otoño",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Próximamente",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "UTILIZANDO",
              "Canvas/popup_recover_damage/bg_holder/info": "¿QUIERES RECUPERAR TU GRANJA DE DAÑOS?",
              "Canvas/popup_recover_damage/wait/Label": "ESPERE",
              "Canvas/popup_recover_damage/now/Label": "AHORA",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Actualizar perro para aumentar\nla tasa de anti-ladrón",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "ESTADO",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Tócame",
              "Canvas/popup_edit_status/bg_holder/title": "Edita tu estado",
              "Canvas/popup_confirm_status/bg_holder/title": "Mira un video para desbloquear el estado de tu granja",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Estado",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "DESBLOQUEAR",
              "Canvas/popup_dogs/bg_holder/dog_name": "  Nombre de perro",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "GRATIS",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "CONSIGUE AHORA",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "CALIFICACIÓN",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "AMIGAS",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "El MUNDO",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "MIRAR",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "Nombre",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "Nombre",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "Nivel",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "Nivel",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "Invita a tus amigos a ser vecinos\n(y robarles)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "Invitar",
              "message_share_daily_reward/title": "Cadena de inicio de sesión",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "REGRESO",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "VIAJAR",
              "prefabs//ground/lbl_info1": "COMPRA",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "AUMENTAR LA VELOCIDAD",
              "Canvas/layout_home/scroll_layer/truck/go/label": "VENDER",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "     LOGROS",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "ALMACEN",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "BANDEJA",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "AMIGOS",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "BANDEJA",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "ENCONTRAR UN ALEATORIO",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "ENCORTRA",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "USTED HA UTILIZADO TODO\nTOOK GRATIS. VER VIDEO\nOBTENER MÁS",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "RECIENTEMENTE NO HE\nTU CAMPAMENTO",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "INVITA A TUS AMIGOS A SER VECINOS\n(Y ROBARLES)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "TE INVITO",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "TE INVITO",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "ESTADISTICAS",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "RECIENTEMENTE NO HE\nTU CAMPAMENTO",
              "Canvas/popup_email/bg_holder/title": "LISTA DE PERSONAS YA\nTU CAMPAMENTO",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "Hasta el nivel",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "NUEVO",
              "Canvas/popup_new_level/bg_holder/txt_amount": "RECOMPENSAS",
              "Canvas/popup_new_level/bg_holder/txt_level": "DESBLOQUEO",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "RECIBIR",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "HASTA EL NIVEL",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "RECOMPENSAS",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "RECIBIR",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "AUMENTAR LA VELOCIDAD",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "GRATIS",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "GRATIS",
              "Canvas/popup_info_item/bg_holder/bottom2": "SE HA UNIDO",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "VOLVER",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "VENDER",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "NO",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "SI",
              "Canvas/popup_sell/bg_holder/info": "TIENES QUE QUERER\nVENDE ESTA CAJA",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "VENDER",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "ELIGE PRODUCTOS AGRICOLAS EN VENTA",
              "Canvas/popup_adjust_order/bg_holder/max": "MAX",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "VENDER",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "VENDER",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "ACTUALIZADO",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "CONDICION",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "A",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "ACTUALIZADO",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "CONDICION",
              "Canvas/popup_upgrade_truck/bg_holder/to": "A",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "ACTUALIZADO",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "Actualizado",
              "Canvas/popup_storage_full/bg_holder/message": "El almacén está lleno.\nactualizar siempre?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "BANDEJA",
              "Canvas/popup_not_found/bg_holder/txt_msg": "No se encontró ninguna víctima.\nPor favor intente de nuevo más tarde",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "Cerrar",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Comprar oro",
              "Canvas/popup_not_enough_gold/bg_holder/info": "NO ES SUFICIENTE ORO!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "NO ES SUFICIENTE DIAMANTE!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Comprar diamantes",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "Si",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "FELIZ\nUSTED HA RECIBIDO",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "LA TIENDA",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "ACTUALIZADO",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "Camión ha sido actualizado\nal nivel más alto",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "LOGROS",
              "Canvas/popup_new_achievement/bg_holder/share/share": "COMPARTIR",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "RECIBIR",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "LOGROS",
              "Canvas/popup_achievement_list/bg_holder/progress": "PROCESO",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "PERFECTO",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "NO LOGRO",
              "Canvas/popup_disconnected/but_reconnect/caption": "CONECTAR",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Que mal dia",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "FALLO",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "CASA",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "50% DE DESCUENTO",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "50% DE DESCUENTO",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "EL PERRO",
              "Canvas/popup_dogs/bg_holder/txt_info": "COMPRAR PERRO PARA PROTEGER\nTU GRANJA",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "HAS COMPRADO",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "OKAY",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "RECOMPENSAS DIARIAS",
              "Canvas/popup_daily_reward/bg_holder/title": "Mai recuerda volver para recibir más regalos.!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "LA FECHA 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "LA FECHA 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "LA FECHA 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "LA FECHA 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "LA FECHA 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "LA FECHA 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "LA FECHA 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "RECIBIR",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "NO!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "Cerrar",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "FELIZ!",
              "Canvas/popup_bot_gift/bg_holder/title": "USTED HA RECIBIDO LA PARTE DE LOS REGALOS",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "RECIBIR",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Compartir con amigos",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "IGNORAR       ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "CONTINUAR!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "ÁRBOL",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "IMPRESIONANTE",
              "Canvas/popup_tutorials/label_skip": "IGNORAR ",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "REGALOS",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Hacer las siguientes tareas\nrecibir el regalo correspondiente ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "COMPLETADO",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "CASA",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "Aún no has robado\nnada.Estas seguro\nquiero ir a casa?",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "CASA",
              "Canvas/popup_go_steal/bg_header/lbl_header": "ENCONTRAR UNA VICTIMA",
              "Canvas/popup_go_steal/title": "Los productos agrícolas que has robado.",
              "Canvas/popup_go_steal/scrollview/msg": "Aún no has robado\nnada",
              "Canvas/popup_go_steal/img_random/lbl_find": "ENCONTRAR RIESGO ALEATORIO",
              "Canvas/popup_go_steal/btn_go/lblX5": "ENCONTRAR",
              "Canvas/popup_go_steal/lbl_used_up_find": "USTED HA UTILIZADO TODO\nTOOK GRATIS. VER VIDEO\nOBTENER MÁS",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "Continuar?",
              "Canvas/popup_go_revenge/scrollview/msg": "Aún no has robado\nnada",
              "Canvas/popup_go_revenge/lbl_find": "La víctima ha elegido",
              "Canvas/popup_go_revenge/btn_go/lblX5": "IR",
              "Canvas/popup_video_failed/bg_holder/info": "NO !\nVIDEO CORREGIDO\n\nPOR FAVOR REGRESE\nDESPUÉS DE MENOS MINUTOS",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "NO",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "COMPRA AHORA"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "Nivel $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "Los productos agrícolas que robaste.",
                      "OOPS...": "NO..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "Los productos agrícolas que robaste.",
                      "OOPS...": "NO..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " dia"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e) {
                      var a = e.replace("days", "dia").replace("day", "dia").replace("hrs", "h").replace("hr", "h").replace("mins", "minutos").replace("min", "minutos").replace("secs", "segundos").replace("sec", "segundos");
                      return _log("txt = " + e + " // result = " + a),
                      a + " antes"
                  }
              },
              "Canvas/nodeCaches/row_friend_victim/level": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Nivel xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "HA COMPLETADO: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "EL EXITO: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "TOMADO: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "HA COMPLETADO: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "EL EXITO: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "TOMADO: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Nivel xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "JUGAR",
                      Create: "CREAR"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Tu nivel: " + e + " / Clase:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return "Tambien " + e + " girar"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "Agrega 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " cada " + e[1] + " segundos" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " esta creciendo"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Felicidades!",
                      "oops!": "no!",
                      "Oops!": "No!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "Tienes $1 de oro");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "Tienes $1 diamante")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "Has sido recompensado " + _G.configs.rewardGoldShortcut + " oro al crear atajo"),
                  l(a, "sorry, error occured", "Lo sentimos, ha ocurrido un error."),
                  l(a, " Video is not available.", " El video ha sido bloqueado."),
                  l(a, "Invitation sent successfully!", "Enviar una invitación exitosa!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "NO! PÉRDIDA DE CONEXIÓN",
                      "CONNECTING SERVER ...": "CONECTANDO ...",
                      "CONNECTED !": "CONECTADOS !",
                      "Please check connection\nand reload game": "Por favor, compruebe la conexión\ny recargar el juego"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "Te caíste",
                      "sorry...": "perdon..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "Nivel xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "Nivel xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "Nivel xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "SUBTÍTULOS Y CARACTERÍSTICAS\nDE SUSTITUCIÓN. ESTARÁ\nDESBLOQUEADO CUANDO\n SUBA xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Hola Soy Tom. Bienvenido a nuestra granja!", "Haga clic en la planta de trigo para crecer nuevo.", "Plantar todo el trigo en las parcelas vacías.", "Compra una parcela más para ampliar la parcela.", "Drag to merge and make a wheat level 2", "", 'Presione "Vender" para vender el arroz\nque acaba de cosechar.'],
                          tut2: ['Haga clic en el icono "Robar"', "Encontremos una victima", "Este es el campo de la víctima.\nVamos a robarlo!", "Mueve las manos por los campos para robar.", "Bueno!\nYa lo has hecho.\nNo como yo el día anterior.", 'Presiona "Ir a casa" para regresar\ntu granja.'],
                          tut3: ["Haga clic en la tabla para ver\nlos nuevos requisitos.", "Completar requisitos especiales\nPara aumentar el valor del producto.", "Completa el requisito 2 para aumentar el valor en un 150%", "Completa el requisito 3 para aumentar el valor en un 200%", "", "Completa los requisitos\ny seguir cuidando la finca."],
                          tut_use_theme: ["Toca para configurar el tema de tu granja!", "¡Bien hecho!\nEres más inteligente de lo que pienso\nAhora ya sabes cómo configurar el tema."]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "También juega xxx",
              "Canvas/popup_go_revenge/victim-level": "Nivel: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "Desaparecidos xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "comprar perros. Compra ahora con precio xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Nivel " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "Felicidades! Tu tienes\n" + _G.configs.videoFindVictim + " Búsqueda aleatoria", i = "FUNCION FUNCIONAL\nDESBLOQUEO CUANDO ARRIBA " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "No es suficiente tierra"),
                  l(a, "Nothing left to steal !", "Nada que robar !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Compra perros exitosamente!\nEnhorabuena!"),
                  l(a, "SHARED SUCCESSFULLY", "ACCIÓN EXITOSA"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "NO PUEDE COSECHA CUANDO LA TIENDA ESTÁ LLENA"),
                  l(a, "Successfully save 50% dropped gold!", "Reducido exitosamente\nel 50% del oro caído!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "INVITACIÓN AL ÉXITO"),
                  l(a, "Successfully X2 products!", "X2 productos agrícolas\ncon éxito!"),
                  l(a, "Congratz! Status unlocked!", "Enhorabuena Estado desbloqueado!"),
                  l(a, "Upgraded successfully!", "Actualizado correctamente"),
                  l(a, "Stealing is not available\nin view mode!", "¡El robo no está disponible en modo vista!"),
                  l(a, "Name changed successfully!", "¡Nombre cambiado con éxito!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " ha sido " + (o ? "perro " : "") + a + " atrapar mientras robas la granja " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " robó la granja " + a + "! \n" + a + " perdido " + t.join(", ")
                      }
                  },
                  cta: "Venganza"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Jugar ahora!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' đã đạt thành tích "' + a + '". Bạn thì sao?'
                  },
                  cta: "Jugar ahora!"
              },
              sendInvitationVictim: {
                  content: "Hãy chơi Farm Battle!",
                  cta: "Jugar ahora!"
              },
              sendMsgInviteGift: {
                  content: "Hola Por favor se mi vecino!",
                  cta: "Vamos a jugar!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "xxx extendido",
                  desc: "Terreno xxx abierto"
              },
              UP_LUA: {
                  title: "Nivel de trigo xxx",
                  desc: "Trasplante de trigo nivel xxx"
              },
              UP_CACHUA: {
                  title: "Nivel de tomate xxx",
                  desc: "Tomate de injerto hasta nivel xxx"
              },
              UP_KHOAI: {
                  title: "Nivel de papa xxx",
                  desc: "Subir de nivel el trasplante de papa xxx"
              },
              UP_BOSUA: {
                  title: "Vaca lechera xxx",
                  desc: "Nivel de trasplante de vaca lechera xxx"
              },
              UP_DUA: {
                  title: "Nivel de pepino xxx",
                  desc: "Injerto de pepino a nivel xxx"
              },
              UP_NGO: {
                  title: "Wu concedió xxx",
                  desc: "Injerto de maíz a nivel xxx"
              },
              UP_CAROT: {
                  title: "Nivel de zanahoria xxx",
                  desc: "Injerto de zanahoria hasta nivel xxx"
              },
              UP_GAMAI: {
                  title: "Gallinas proporcionadas xxx",
                  desc: "Las gallinas suben de nivel xxx"
              },
              UP_BAPCAI: {
                  title: "Nivel de col xxx",
                  desc: "Trasplante de coles nivel xxx"
              },
              UP_BINGO: {
                  title: "Nivel de calabaza xxx",
                  desc: "Calabaza de injerto a nivel xxx"
              },
              UP_PINEAPPLE: {
                  title: "Nivel de piña xxx",
                  desc: "Actualiza la piña al nivel xxx"
              },
              UP_GOAT: {
                  title: "Nivel de cabra xxx",
                  desc: "Actualizar cabra al nivel xxx"
              },
              UP_COCONUT: {
                  title: "Nivel de coco xxx",
                  desc: "Actualiza Coconut al nivel xxx"
              },
              UP_SHEEP: {
                  title: "Actualiza Coconut al nivel xxx",
                  desc: "Actualiza ovejas al nivel xxx"
              },
              UP_NHAKHO: {
                  title: "Almacén expedido xxx",
                  desc: "Actualizar el almacén al nivel xxx"
              },
              UP_XEHANG: {
                  title: "Nivel de camion xxx",
                  desc: "Actualizar el coche al nivel xxx"
              }
          },
          gifts: {
              Play: "Jugar",
              "Create shortcut": "Crear acceso directo"
          }
      },
      cc._RF.pop()
  }
  , {}],
  events_animal: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "70640n1RDFMcpi5N9ge4MLv", "events_animal");
      var _ = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
        , p = e("../all_modules");
      setTimeout(function() {
          p = e("../all_modules")
      }, 0),
      a.exports = {
          isFreeSlot: function(e, a) {
              var o = e[a];
              return o.isBought && !o.product
          },
          isFreeSlotForAnimal: function(e, a) {
              var o = a.split("-")
                , t = _(o, 3)
                , n = t[0]
                , i = t[1]
                , r = t[2]
                , l = p.configs.slotGroupArea[n];
              if (i = parseInt(i),
              r = parseInt(r),
              i < l.col && r < l.row && p.eventsAnimal.isFreeSlot(e, n + "-" + (i + 1) + "-" + r) && p.eventsAnimal.isFreeSlot(e, n + "-" + i + "-" + (r + 1)) && p.eventsAnimal.isFreeSlot(e, n + "-" + (i + 1) + "-" + (r + 1)))
                  return a
          },
          getFreeSlotForAnimal: function(e) {
              for (var a in e)
                  if ("layoutName" != a && p.eventsAnimal.isFreeSlot(e, a) && p.eventsAnimal.isFreeSlotForAnimal(e, a))
                      return a
          },
          setAnimalAtSlot: function(e, a, o) {
              var t = a.split("-")
                , n = _(t, 3)
                , i = n[0]
                , r = n[1]
                , l = n[2];
              r = parseInt(r),
              l = parseInt(l),
              e[a].product = o,
              e[i + "-" + (r + 1) + "-" + l].product = o,
              e[i + "-" + r + "-" + (l + 1)].product = o,
              e[i + "-" + (r + 1) + "-" + (l + 1)].product = o
          },
          startAnimal: function(e, a, o) {
              if (!a && (a = p.eventsAnimal.getFreeSlotForAnimal(e))) {
                  var t = p.uiSlot.getSlotNode(a)
                    , n = {
                      x: t.width / 2,
                      y: t.height / 2
                  };
                  p.controlScrollLayer.scrollToNode(t, "layout_home", n)
              }
              if (a && p.eventsAnimal.isFreeSlotForAnimal(e, a)) {
                  var i = p.configs.products[o].initTime
                    , r = e[a].product = {
                      id: o,
                      level: 0,
                      isSprouted: !1,
                      sproutRemainingTime: i,
                      sproutProgress: 0,
                      isAnimal: !0,
                      animalHeadSlot: a,
                      slotList: e,
                      HarvestTime: _time()
                  };
                  p.eventsAnimal.setAnimalAtSlot(e, a, r),
                  p.uiAnimal.renderAnimal(a, o, 0, 0, e.layoutName, r),
                  p.uiHome.usedProductList[o] || (p.uiHome.usedProductList[o] = !0,
                  p.data.saveToServer("usedProductList", p.uiHome.usedProductList),
                  p.uiShop.setShopProductBadgeNew(o, !1)),
                  p.data.postPlant(a, o, function(e) {
                      p.timer.setSproutTimer(r),
                      _thisPlayerInfo.gold = e.Gold,
                      p.uiHome.setGold(_thisPlayerInfo.gold),
                      p.uiHome.setLevelHome(e)
                  }),
                  p.configs.isNewProduct(o) && _logFBEvent("event_new_product_" + o, 1, {
                      level: 1
                  })
              } else
                  p.uiLayout.showToolTip("NOT ENOUGH SPACE")
          },
          slotDroppedAnimal: function(e, a, o) {
              if (a != o) {
                  var t = e[o]
                    , n = t.product
                    , i = e[a]
                    , r = i.product;
                  if (r)
                      if (n && n.animalHeadSlot != a) {
                          if (!n.isAnimal)
                              return;
                          if (n && r && n.id == r.id && 10 == r.level && 10 == n.level)
                              return;
                          if (n && r)
                              if (n.id != r.id || 0 == r.level || 0 == n.level || n.level != r.level)
                                  _log(" into case swap slot !!!! "),
                                  i.product = n,
                                  p.eventsAnimal.setAnimalAtSlot(e, a, n),
                                  n.animalHeadSlot = a,
                                  t.product = r,
                                  p.eventsAnimal.setAnimalAtSlot(e, o, r),
                                  r.animalHeadSlot = o,
                                  _log(" destSlot = " + o + " "),
                                  p.uiSlot.swapAnimals(a, o, r, n),
                                  p.sound.playSFX("land_press"),
                                  p.data.postSwap(a, o);
                              else {
                                  _log(" into case update slot !!!! "),
                                  i.product = null,
                                  p.eventsAnimal.setAnimalAtSlot(e, a, null),
                                  p.uiSlot.resetSlotAnimal(a),
                                  n.level += 1,
                                  n.outputAmount += r.outputAmount,
                                  p.fx.inActiveHasOutput(p.core.getSlotId(n));
                                  e[o].product;
                                  p.events.harvest(e, o, !1, !0),
                                  n.outputAmount = 0,
                                  p.timer.removeProduct(r),
                                  p.timer.setProduceTimer(n),
                                  n.HarvestTime = p.login.getServerTime(),
                                  p.uiAnimal.renderAnimal(o, n.id, n.level, n.outputAmount, e.layoutName, n),
                                  p.fx.upgradeAnimal(a, o, n.id, n.level),
                                  "BOSUA" == n.id ? p.sound.playSFX("cow_upgrade") : "GAMAI" == n.id ? p.sound.playSFX("chicken_upgrade") : p.sound.playSFX("sprout"),
                                  p.data.postUpgrade(a, o, function(e) {
                                      _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                                      p.uiHome.setGold(_thisPlayerInfo.gold),
                                      _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                                      p.uiHome.setDiamond(_thisPlayerInfo.diamond),
                                      p.storage.setStorage(e),
                                      p.storage.isAvailable() || p.uiStorage.handleFull(),
                                      p.truck.isParked && p.bot.autoUpdate(),
                                      p.uiHome.setLevelHome(e),
                                      p.achievements.checkNew(e)
                                  }),
                                  p.configs.isNewProduct(n.id) && _logFBEvent("event_new_product_" + n.id, 1, {
                                      level: n.level
                                  })
                              }
                      } else {
                          var l = o.split("-")
                            , d = _(l, 3)
                            , s = d[0]
                            , c = d[1]
                            , u = d[2];
                          if (![s + "-" + ((c = parseInt(c)) + 1) + "-" + (u = parseInt(u)), s + "-" + c + "-" + (u + 1), s + "-" + (c + 1) + "-" + (u + 1)].every(function(e) {
                              var a = p.game.mySlotList[e];
                              return a.isBought && (!a.product || a.product == r)
                          }))
                              return;
                          _log(" into case move slot !!!! -- destProd.animalHeadSlot=" + (n ? n.animalHeadSlot : "null") + " //  sourceSlot  "),
                          r.animalHeadSlot = o,
                          p.eventsAnimal.setAnimalAtSlot(e, a, null),
                          p.eventsAnimal.setAnimalAtSlot(e, o, r),
                          p.uiSlot.moveAnimalTo(a, o, r),
                          p.sound.playSFX("land_press"),
                          p.data.postMove(!!r.isAnimal, a, o)
                      }
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  events_timer: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f4b95V5EY5CR7MAw+OWLw3k", "events_timer");
      var i = e("../all_modules");
      setTimeout(function() {
          i = e("../all_modules")
      }, 0),
      a.exports = {
          speedUpDiamond: function() {
              var t = i.infoItem.slotId
                , n = i.game.mySlotList[t].product;
              return 0 == n.level ? _thisPlayerInfo.diamond < i.infoItem.diamondPowerUp ? _showLayout("popup_not_enough_diamond") : i.data.growUpDiamond(t, function(e) {
                  cc.log("growUp", e),
                  _thisPlayerInfo.diamond = parseInt(e.Diamond),
                  i.uiHome.setDiamond(_thisPlayerInfo.diamond),
                  n.outputAmount = 0,
                  n.level = 1,
                  n.HarvestTime = i.login.getServerTime(),
                  i.timer.removeSproutTimer(n),
                  i.eventsTimer.timerSproutedHandler(n)
              }) : _thisPlayerInfo.diamond < i.infoItem.diamondPowerUp ? _showLayout("popup_not_enough_diamond") : void i.data.speedupDiamond(t, function(e) {
                  _thisPlayerInfo.diamond = e.Diamond,
                  i.uiHome.setDiamond(_thisPlayerInfo.diamond);
                  var a = i.configs.getProduceInfo(n.id, n.level)
                    , o = a.maxOutput;
                  a.produceTime;
                  n.outputAmount = o,
                  n.HarvestTime = 0,
                  i.timer.removeProduct(n),
                  i.infoItem.setOutput(),
                  i.fx.hasOutput(t)
              })
          },
          speedUpVideo: function() {
              var t = i.infoItem.slotId
                , n = i.game.mySlotList[t].product;
              if (0 == n.level)
                  return _logFBEvent("event_video_speedup_grow_click"),
                  i.video.showVideo(function() {
                      _logFBEvent("event_video_speedup_grow_success"),
                      i.data.growUpAds(t, function(e) {
                          n.outputAmount = 0,
                          n.level = 1,
                          n.HarvestTime = i.login.getServerTime(),
                          i.timer.removeProduceTimer(n),
                          i.eventsTimer.timerSproutedHandler(n)
                      })
                  }, function(e) {
                      _showLayout("popup_video_failed")
                  });
              _logFBEvent("event_video_speedup_output_click"),
              i.video.showVideo(function() {
                  _logFBEvent("event_video_speedup_output_success"),
                  i.data.speedupAds(t, function(e) {
                      cc.log("speed up ad", e);
                      var a = i.configs.getProduceInfo(n.id, n.level)
                        , o = a.maxOutput;
                      a.produceTime;
                      n.outputAmount = o,
                      n.HarvestTime = 0,
                      i.timer.removeProduct(n),
                      i.infoItem.setOutput(),
                      i.fx.hasOutput(t)
                  })
              }, function(e) {
                  _showLayout("popup_video_failed")
              })
          },
          timerSproutedHandler: function(e) {
              cc.find("Canvas/layout_victim").active || ("BOSUA" == e.id ? i.sound.playSFX("cow_upgrade") : "GAMAI" == e.id ? i.sound.playSFX("chicken_upgrade") : i.sound.playSFX("sprout"));
              var a = e.slotList
                , o = i.core.getSlotId(e);
              e.isSprouted = !0,
              e.level = 1,
              delete e.sproutTime,
              delete e.sproutRemainingTime,
              e.outputAmount = 0,
              i.timer.setProduceTimer(e),
              e.isAnimal ? i.uiAnimal.renderAnimal(o, e.id, 1, 0, a.layoutName, e) : i.uiTree.renderTree(o, e.id, 1, 0, a.layoutName),
              i.infoItem.slotId == o && (i.infoItem.renderTree(),
              i.infoItem.setOutput(),
              i.infoItem.setLevel(),
              i.infoItem.setTextInfo()),
              "layout_victim" == a.layoutName && i.uiSlot.updateVictimOutput(o, e.id, 1, 0)
          },
          timerProducedHandler: function(e) {
              var a = i.configs.products[e.id].maxOutput[e.level - 1];
              e.outputAmount++,
              e.outputAmount = _min(a, e.outputAmount);
              var o = e.slotList
                , t = i.core.getSlotId(e);
              t && (1 == e.outputAmount && (e.isAnimal ? i.fx.hasOutputAnimal(t, o.layoutName) : i.fx.hasOutput(t, o.layoutName)),
              i.infoItem.slotId == t && i.infoItem.setOutput()),
              "layout_victim" == o.layoutName && i.uiSlot.updateVictimOutput(t, e.id, e.level, e.outputAmount)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  events_tree: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "d378aVwABFGn7d273F8OpfX", "events_tree");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          plantTree: function(e, a, o) {
              if (s.sound.playSFX("initialization"),
              _thisPlayerInfo.gold < s.configs.products[o].price)
                  return _showLayout("popup_not_enough_gold");
              if (s.configs.isAnimalProduct[o])
                  s.eventsAnimal.startAnimal(e, a, o);
              else {
                  if (!a) {
                      for (var t in e)
                          if ("layoutName" != t) {
                              var n = e[t];
                              if (n.isBought && !n.product) {
                                  a = t;
                                  break
                              }
                          }
                      if (a) {
                          var i = s.uiSlot.getSlotNode(a);
                          s.controlScrollLayer.scrollToNode(i)
                      }
                  }
                  if (a) {
                      "LUA" == o && (s.tutorial.checkStepEndCondition("plantFirstWheat"),
                      s.tutorial.checkStepEndCondition("plantAllWheats"));
                      var r = e[a];
                      if (r.isBought && !r.product) {
                          var l = s.configs.products[o].initTime
                            , d = e[a].product = {
                              headSlot: a,
                              id: o,
                              level: 0,
                              isSprouted: !1,
                              sproutRemainingTime: l,
                              sproutProgress: 0,
                              slotList: e,
                              HarvestTime: _time()
                          };
                          s.uiSlot.getSlotNode(a).productObj = d,
                          s.game.isSkipTut1First && (s.game.isSkipTut1First = !1,
                          _logFBEvent("event_tut1_skip_first_and_planted"),
                          s.game.isSkipTut1FirstAndPlanted = !0),
                          s.data.postPlant(a, o, function(e) {
                              s.timer.setSproutTimer(d),
                              _thisPlayerInfo.gold = e.Gold,
                              s.uiHome.setGold(_thisPlayerInfo.gold),
                              s.uiHome.setLevelHome(e)
                          }),
                          s.uiHome.usedProductList[o] || (s.uiHome.usedProductList[o] = !0,
                          s.data.saveToServer("usedProductList", s.uiHome.usedProductList),
                          s.uiShop.setShopProductBadgeNew(o, !1)),
                          s.uiTree.renderTree(a, o, 0, 0, e.layoutName),
                          s.configs.isNewProduct(o) && _logFBEvent("event_new_product_" + o, 1, {
                              level: 1
                          })
                      }
                  } else
                      s.uiLayout.showToolTip("NOT ENOUGH SPACE")
              }
          },
          slotDroppedTree: function(e, a, o) {
              if (a != o) {
                  var t = e[o]
                    , n = t.product
                    , i = e[a]
                    , r = i.product;
                  if (r)
                      if (n) {
                          if (n && r && n.id == r.id && 10 == r.level && 10 == n.level)
                              return;
                          n && r && (n.id != r.id || 0 == r.level || 0 == n.level || n.level != r.level ? (i.product = n,
                          (t.product = r).headSlot = o,
                          n.headSlot = a,
                          s.uiSlot.swapTrees(a, o, r, n),
                          s.sound.playSFX("land_press"),
                          s.data.postSwap(a, o)) : (i.product = null,
                          s.uiSlot.resetSlotTree(a),
                          n.level += 1,
                          s.fx.inActiveHasOutput(s.core.getSlotId(n)),
                          2 == n.level && s.tutorial.checkStepEndCondition("upgradeToWheatLv2"),
                          n.outputAmount += r.outputAmount,
                          s.events.harvest(e, o, !1, !0),
                          n.outputAmount = 0,
                          s.timer.removeProduct(r),
                          s.timer.setProduceTimer(n),
                          n.HarvestTime = s.login.getServerTime(),
                          s.uiTree.renderTree(o, n.id, n.level, n.outputAmount, e.layoutName),
                          s.fx.upgradeTree(a, o, n.id, n.level),
                          s.sound.playSFX("upgrade_and_mature_tree"),
                          s.video.showInterAdsUpgrade(r.id, n.level),
                          s.data.postUpgrade(a, o, function(e) {
                              _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                              s.uiHome.setGold(_thisPlayerInfo.gold),
                              _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                              s.uiHome.setDiamond(_thisPlayerInfo.diamond),
                              s.storage.setStorage(e),
                              s.storage.isAvailable() || s.uiStorage.handleFull(),
                              s.truck.isParked && s.bot.autoUpdate(),
                              s.uiHome.setLevelHome(e),
                              s.achievements.checkNew(e)
                          }),
                          s.configs.isNewProduct(n.id) && _logFBEvent("event_new_product_" + n.id, 1, {
                              level: n.level
                          })))
                      } else
                          t.product = r,
                          i.product = null,
                          r.headSlot = o,
                          s.uiSlot.moveTreeTo(a, o, r),
                          s.sound.playSFX("land_press"),
                          s.data.postMove(!!r.isAnimal, a, o)
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  events: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "d10cafBhClLDrgAVMVnPFUj", "events");
      var u = e("../all_modules");
      setTimeout(function() {
          u = e("../all_modules")
      }, 0),
      a.exports = {
          harvest: function(e, a) {
              var o = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]
                , t = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                , n = e[a].product;
              if (n && n.level && n.outputAmount) {
                  if (u.storage.isAvailable()) {
                      u.tutorial.checkStepEndCondition("harvestFirstTime");
                      var i = n.outputAmount
                        , r = u.storage.getCapacity();
                      return u.storage.total + i >= r && (i = r - u.storage.total,
                      u.pseudoServer.tmpLastSlotMakeStorageFull = a),
                      u.storage.total += t ? 0 : i,
                      n.outputAmount -= i,
                      u.fx.inActiveHasOutput(a),
                      u.fx.output2Storage(a, n.id, i),
                      u.fx.harvestNoti(n.id, i),
                      u.pseudoServer.tmpHarvestAvailableOutput[a] = i,
                      o && !t && (u.game.isSkipTut1FirstAndPlanted && (u.game.isSkipTut1FirstAndPlanted = !1,
                      _logFBEvent("event_tut1_skip_first_and_harvested")),
                      u.sound.playSFX("harvest"),
                      u.data.postHarvest(a, function(e) {
                          u.storage.setStorage(e),
                          u.storage.isAvailable() || u.uiStorage.handleFull(),
                          u.truck.isParked && u.bot.autoUpdate(),
                          n.isDeleted || u.events.harvestCallBackSuccess(e, n, a)
                      }, function() {
                          u.events.harvestCallBackFailed()
                      })),
                      !0
                  }
                  u.uiStorage.isFulledAtGameStart && (u.uiStorage.handleFull(),
                  u.uiStorage.isFulledAtGameStart = !1)
              }
          },
          harvestCallBackSuccess: function(e, a, o) {
              var t = e.Field[o]
                , n = (e.serverTime - parseInt(t.HarvestTime)) / 1e3
                , i = u.configs.getProduceInfo(a.id, a.level)
                , r = i.maxOutput
                , l = i.produceTime
                , d = n + parseInt(t.CountedTime || 0) / 1e3
                , s = _floor(d / l);
              s = a.outputAmount = _min(s, r),
              a.HarvestTime = t.HarvestTime,
              s < r && u.timer.setProduceTimer(a, d);
              var c = a.slotList == u.game.mySlotList ? "layout_home" : "layout_victim";
              a.isAnimal ? u.uiAnimal.renderAnimal(o, a.id, a.level, a.outputAmount, c, a) : u.uiTree.renderTree(o, a.id, a.level, a.outputAmount, c)
          },
          harvestCallBackFailed: function(e, a) {
              e.outputAmount += a,
              storage.total -= a
          },
          harvestAllSlots: function(e) {
              u.fx.isBatchHarvesting = !0;
              var a = [];
              for (var o in e)
                  if ("layoutName" != o) {
                      var t = e[o];
                      if (!t.isLocked && t.isBought && t.product && t.product.outputAmount)
                          u.events.harvest(e, o, !1) && a.push(o)
                  }
              u.fx.isBatchHarvesting = !1,
              u.tutorial.checkStepEndCondition("batchHarvestFirstTime"),
              a.length && (u.sound.playSFX("harvest"),
              u.game.isSkipTut1FirstAndPlanted && (u.game.isSkipTut1FirstAndPlanted = !1,
              _logFBEvent("event_tut1_skip_first_and_harvested")),
              u.data.postBatchHarvest(a, u.events.harvestAllSlotsCallBack))
          },
          harvestAllSlotsCallBack: function(e) {
              for (var a in _log(" harvestAllSlotsCallBack ::: returned data = "),
              _log(e),
              u.storage.setStorage(e),
              u.storage.isAvailable() || u.uiStorage.handleFull(),
              u.truck.isParked && u.bot.autoUpdate(),
              e.Field) {
                  var o = u.game.mySlotList[a].product;
                  o && !o.isDeleted && u.events.harvestCallBackSuccess(e, o, a)
              }
          },
          checkVictimFieldExhausted: function() {
              var e = u.game.victimSlotList
                , a = !1;
              for (var o in e)
                  if ("layoutName" != o) {
                      var t = e[o].product;
                      if (t && t.outputAmount && !t.stealed) {
                          a = !0;
                          break
                      }
                  }
              a || u.uiLayout.showToolTip("Nothing left to steal !")
          },
          steal: function(e, t) {
              if (e && e[t]) {
                  var n = e[t].product;
                  if (n && n.level && n.outputAmount && !n.stealed) {
                      n.stealed = !0;
                      var i = u.uiSlot.getProductNode(t, "layout_victim");
                      return i && (i.opacity = 160),
                      u.tutorial.isShowingTut() ? (n.outputAmount = 0,
                      u.fx.inActiveHasOutput(t, "layout_victim"),
                      u.uiSlot.updateVictimOutput(t, n.id, n.level, n.outputAmount),
                      u.fx.outputVictim(t, n.id, 1),
                      u.sound.playSFX("harvest"),
                      void u.tutorial.checkStepEndCondition("stealWheat")) : u.storage.isAvailable() ? (u.sound.playSFX("harvest"),
                      u.data.postSteal(t, function(e) {
                          if (e.Amount = parseInt(e.Amount),
                          0 < e.Amount)
                              n.outputAmount -= e.Amount,
                              n.outputAmount < 0 && (n.outputAmount = 0),
                              0 == n.outputAmount && u.fx.inActiveHasOutput(t, "layout_victim"),
                              u.uiSlot.updateVictimOutput(t, n.id, n.level, n.outputAmount),
                              u.fx.outputVictim(t, n.id, e.Amount),
                              u.storage.updateStorage(e.ProductId, e.Amount),
                              u.game.stealProducts[e.ProductId] ? u.game.stealProducts[e.ProductId] += e.Amount : u.game.stealProducts[e.ProductId] = e.Amount,
                              u.truck.isParked && u.bot.autoUpdate(),
                              u.video.isStolenSuccess = !0,
                              i && (i.opacity = 255),
                              n.isAnimal ? u.uiAnimal.setStateDamage(t, "layout_victim") : u.uiTree.setStateDamage(t, "layout_victim");
                          else if (e.ProductsDrop) {
                              for (var a in u.uiDog.showDogBite(e),
                              _thisPlayerInfo.gold -= e.GoldDrop,
                              u.uiHome.setGold(_thisPlayerInfo.gold),
                              e.ProductsDrop) {
                                  var o = e.ProductsDrop[a];
                                  u.storage.updateStorage(a, -o)
                              }
                              u.video.isStolenSuccess = !1
                          }
                          cc.log(e),
                          u.events.checkVictimFieldExhausted()
                      }),
                      !0) : u.uiStorage.handleFull()
                  }
              }
          },
          buySlotClick1: function(e, a) {
              var o = u.uiSlot.getSlotNode(a);
              u.events.buySlotClick2(e, a, o)
          },
          buySlotClick2: function(e, a, o) {
              if (_thisPlayerInfo.gold < u.configs.slots[a].gold)
                  return u.control.clickedBuySlot && (u.uiSlot.buySlotCancel(u.control.clickedBuySlot),
                  u.control.clickedBuySlot = !1),
                  _showLayout("popup_not_enough_gold");
              u.uiSlot.buySlotClick2UI(a),
              e[a].isBought = !0,
              u.tutorial.checkStepEndCondition("buyAnotherSlot"),
              u.data.postUnlockSlot(a, function(e) {
                  _thisPlayerInfo.gold = e.Gold,
                  _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                  u.uiHome.setGold(_thisPlayerInfo.gold),
                  _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                  u.uiHome.setDiamond(_thisPlayerInfo.diamond),
                  u.uiHome.setLevelHome(e),
                  u.achievements.checkNew(e)
              }),
              u.controlLib.removeTouchHandler(o)
          },
          deleteSlot: function() {
              var e = u.infoItem.slotId
                , a = u.game.mySlotList[u.infoItem.slotId].product;
              a.id;
              a.isDeleted = !0;
              var o = a.level;
              0 == o && (o = 1),
              u.infoItem.resetInfoItem(),
              _hideLayout("popup_info_item"),
              _hideLayout("popup_sell"),
              u.timer.removeProduct(a),
              u.pseudoServer.tmpProductInfo[e] = u.game.mySlotList[e].product,
              u.game.mySlotList[e].product = null,
              a.isAnimal ? (u.uiSlot.resetSlotAnimal(e),
              u.eventsAnimal.setAnimalAtSlot(u.game.mySlotList, e, null)) : u.uiSlot.resetSlotTree(e),
              u.data.postPurge(e, function(e) {
                  _thisPlayerInfo.gold = e.Gold,
                  u.uiHome.setGold(_thisPlayerInfo.gold),
                  u.storage.setStorage(e),
                  u.storage.isAvailable() || u.uiStorage.handleFull(),
                  u.truck.isParked && u.bot.autoUpdate()
              })
          },
          claimDailyReward: function(e) {
              _log(" claimDailyReward called ! "),
              _log(" claimDailyReward callback called  "),
              cc.find("Canvas/popup_daily_reward/bg_holder/share").getComponent(cc.Toggle).isChecked && window.FBInstant && FBInstant.context.chooseAsync().then(function() {
                  u.social.shareDailyReward(data.LoginStreak),
                  u.uiLayout.showToolTip("SHARED SUCCESSFULLY")
              }),
              u.fx.claimGold(e.day.getChildByName("gold"), 0, "popup_daily_reward", !0),
              u.fx.claimDiamond(e.day.getChildByName("diamond"), 0, "popup_daily_reward", !0),
              _hideLayout("popup_daily_reward")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  farm_status: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "e376aOqBBhDHrR/KA9U95jz", "farm_status");
      var i = e("../all_modules");
      setTimeout(function() {
          i = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              var t = this;
              setTimeout(function() {
                  var e = cc.find("Canvas/layout_home/scroll_layer/status_board")
                    , a = i.farmStatus.isUnlocked;
                  if (i.video.isVideoAvailable || a || !window.FBInstant) {
                      e.active = !0,
                      e.getChildByName("locked").active = !a,
                      e.getChildByName("unlocked").active = a;
                      var o = i.farmStatus.statusText || "";
                      t.setStatusToLabel(o)
                  } else
                      e.active = !1
              }, 2e3)
          },
          initVictimBoard: function(e) {
              var a = cc.find("Canvas/layout_victim/scroll_layer/status_board");
              _log(" initVictimBoard :: data = ", e);
              var o = e.FarmStatusId
                , t = e.FarmStatus || "";
              if (_log("isUnlocked = " + o + " // status = " + t),
              o && t) {
                  a.active = !0;
                  var n = cc.find("Canvas/layout_victim/scroll_layer/status_board/unlocked/real_status");
                  n.active = !0,
                  i.utils.setLabelText(n, t),
                  _log(" WTF ?????? label.active = " + n.active + " ")
              } else
                  a.active = !1
          },
          boardClick: function() {
              i.farmStatus.isUnlocked ? _showLayout("popup_edit_status") : (_logFBEvent("event_show_video_unlock_status_confirm"),
              _showLayout("popup_confirm_status"))
          },
          watchVideoUnlock: function() {
              var e = this;
              _logFBEvent("event_click_video_unlock_status"),
              _hideLayout("popup_confirm_status");
              var a = cc.find("Canvas/layout_home/scroll_layer/status_board");
              i.video.showVideo(function() {
                  _logFBEvent("event_watch_video_unlock_status_success"),
                  i.data.unlockStatus(function() {
                      i.farmStatus.isUnlocked = !0,
                      a.getChildByName("locked").active = !1,
                      a.getChildByName("unlocked").active = !0,
                      i.uiLayout.showToolTip("Congratz! Status unlocked!"),
                      _showLayout("popup_edit_status"),
                      e.updateStatus(" ")
                  })
              }, function() {
                  _showLayout("popup_video_failed")
              })
          },
          doneEditStatus: function(e) {
              var a = this;
              if (!this.isUpdating) {
                  this.isUpdating = !0;
                  var o = cc.find("Canvas/popup_edit_status/bg_holder/text_box").getComponent(cc.EditBox).string;
                  "" != o ? this.updateStatus(o, function() {
                      e.opacity = 255,
                      a.isUpdating = !1,
                      _hideLayout("popup_edit_status")
                  }) : this.isUpdating = !1
              }
          },
          updateStatus: function(e, a) {
              var o = this;
              i.data.updateStatus(e, function() {
                  _logFBEvent("event_update_status_success"),
                  o.setStatusToLabel(e),
                  a && a()
              })
          },
          setStatusToLabel: function(e) {
              i.farmStatus.statusText = e;
              var a = cc.find("Canvas/layout_home/scroll_layer/status_board/unlocked/default_status");
              a.active = "" == e || " " == e,
              i.gameLanguage.setLabelDataAndRender(a);
              var o = cc.find("Canvas/layout_home/scroll_layer/status_board/unlocked/real_status");
              i.utils.setLabelText(o, e),
              cc.find("Canvas/popup_edit_status/bg_holder/text_box").getComponent(cc.EditBox).string = e
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  find_victim: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "0ff9f56qI9H7buZuJxzr/Bn", "find_victim");
      var n = e("../all_modules");
      setTimeout(function() {
          n = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {},
          checkInitFindTime: function() {
              var e = _thisPlayerInfo.victimFindTime = _thisPlayerInfo.privateData.victimFindTime;
              isNaN(e) && (e = _thisPlayerInfo.victimFindTime = n.configs.freeFindVictim,
              n.data.saveToServer("victimFindTime", e))
          },
          updatePopupUI: function() {
              var e = _thisPlayerInfo.victimFindTime
                , a = e <= 0;
              a && _logFBEvent("event_find_random_video_show"),
              cc.find("Canvas/popup_find_victim/bg_holder/img_random").active = !a,
              cc.find("Canvas/popup_find_victim/bg_holder/lbl_used_up_find").active = a,
              n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_find_victim/bg_holder/lbl_find_time_left"), e),
              cc.find("Canvas/popup_go_steal/img_random").active = !a,
              cc.find("Canvas/popup_go_steal/lbl_used_up_find").active = a,
              n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_go_steal/lbl_find_time_left"), e)
          },
          useOneFindTime: function() {
              _thisPlayerInfo.victimFindTime--,
              n.data.saveToServer("victimFindTime", _thisPlayerInfo.victimFindTime),
              n.findVictim.updatePopupUI()
          },
          watchedVideoMoreFinds: function() {
              _logFBEvent("event_find_random_video_success"),
              _thisPlayerInfo.victimFindTime = n.configs.videoFindVictim,
              n.data.saveToServer("victimFindTime", _thisPlayerInfo.victimFindTime),
              n.findVictim.updatePopupUI(),
              n.uiLayout.showToolTip("Congratz! You get " + n.configs.videoFindVictim + " victim find times")
          },
          showVideoMoreFindTime: function() {
              _logFBEvent("event_find_random_video_click"),
              n.video.showVideo(n.findVictim.watchedVideoMoreFinds, function(e, a) {
                  "timeout" == a && _logFBEvent("event_find_random_video_load_fail")
              })
          },
          showFindVictim: function() {
              n.findVictim.setWaitFind();
              var e = (window._listThief || []).length;
              n.findVictim.setListVictim(e)
          },
          setListVictim: function(e) {
              var a = cc.find("Canvas/popup_find_victim/bg_holder/scrollview/view/content");
              if (a.removeAllChildren(),
              cc.find("Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge").active = !e,
              e)
                  for (var o = 0; o < e; o++) {
                      var t = n.utils.copyNodeTo(cc.find("Canvas/nodeCaches/row_victim"), a);
                      t.setPosition(0, 0),
                      t.getComponent("row_victim").setInfo(_listThief[o])
                  }
          },
          setWaitFind: function() {
              cc.find("Canvas/popup_find_victim/bg_holder/btn_find").active = !0,
              cc.find("Canvas/popup_find_victim/bg_holder/img_loading").active = !1
          },
          setFinding: function() {
              cc.find("Canvas/popup_find_victim/bg_holder/btn_find").active = !1;
              var e = cc.find("Canvas/popup_find_victim/bg_holder/img_loading");
              e.active = !0,
              e.runAction(cc.repeatForever(cc.rotateBy(2, 360)))
          },
          cancelFinding: function() {
              n.findVictim.setWaitFind(),
              n.findVictim.finding && clearTimeout(n.findVictim.finding)
          },
          startFinding: function(o) {
              var t = Date.now();
              n.findVictim.setFinding();
              var a = function(e) {
                  o && o(null, e);
                  var a = Math.max(2e3 - (Date.now() - t), 0);
                  setTimeout(function(e) {
                      if (_hideLayout("popup_find_victim"),
                      _showLayout("layout_victim"),
                      n.game.initVictim(e),
                      n.fx.victimFound(),
                      !n.storage.isAvailable())
                          return n.uiShop.enableStealHand(),
                          n.uiLayout.showToolTip("CAN NOT HAVESRT WHEN STORAGE IS FULL")
                  }, a, e)
              };
              n.tutorial.isShowingTut() ? a(n.tutorial.fakeVictimData()) : n.data.getVictimData(function(e) {
                  a(e),
                  n.findVictim.useOneFindTime(),
                  _logFBEvent("event_find_victim_success")
              }, function() {
                  o && o("vicim not found", null),
                  _logFBEvent("event_find_victim_fail");
                  var e = Math.max(2e3 - (Date.now() - t), 0);
                  setTimeout(function(e) {
                      n.fx.victimFound(),
                      n.findVictim.cancelFinding(),
                      n.findVictim.showPopupError()
                  }, e)
              })
          },
          showPopupError: function() {
              _showLayout("popup_not_found"),
              _hideLayout("popup_find_victim")
          },
          hidePopupError: function() {
              _hideLayout("popup_not_found")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  fix_scroll_view: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "c938cI5w5ZDdrpDQju1FLL4", "fix_scroll_view"),
      a.exports = {
          init: function() {
              cc.ScrollView.prototype._onTouchMoved = function(e, a) {
                  if (this.enabledInHierarchy && !this._hasNestedViewGroup(e, a)) {
                      var o = e.touch
                        , t = cc.pSub(o.getLocation(), o.getStartLocation());
                      if (!this.__mdolls_touchStarted && 7 < cc.pLength(t) && (this.__mdolls_touchStarted = !0),
                      this.__mdolls_touchStarted && this.content && this._handleMoveLogic(o),
                      this.cancelInnerEvents) {
                          if (7 < cc.pLength(t) && !this._touchMoved && e.target !== this.node) {
                              var n = new cc.Event.EventTouch(e.getTouches(),e.bubbles);
                              n.type = cc.Node.EventType.TOUCH_CANCEL,
                              n.touch = e.touch,
                              n.simulate = !0,
                              e.target.dispatchEvent(n),
                              this._touchMoved = !0
                          }
                          this._stopPropagationIfTargetIsMe(e)
                      }
                  }
              }
              ,
              cc.ScrollView.prototype._onTouchEnded = function(e, a) {
                  if (this.enabledInHierarchy && !this._hasNestedViewGroup(e, a)) {
                      this.__mdolls_touchStarted = !1,
                      this._dispatchEvent("touch-up");
                      var o = e.touch;
                      this.content && this._handleReleaseLogic(o),
                      this._touchMoved ? e.stopPropagation() : this._stopPropagationIfTargetIsMe(e)
                  }
              }
          }
      },
      cc._RF.pop()
  }
  , {}],
  fps_check: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "691ackk6blKG5ntl535F9Ke", "fps_check"),
      cc.Class({
          extends: cc.Component,
          update: function(e) {
              _fpsArray.push(1 / e)
          }
      }),
      cc._RF.pop()
  }
  , {}],
  fr_FR: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "ff04cMEritDOJ0LJvlQAhEN", "fr_FR");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " jouez juste! Maintenant c'est ton tour"],
      n = ["", " jouez juste! Maintenant c'est ton tour"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "Ils ont été amenés de Sibérie en Amérique du Nord par le peuple thuléen il y a 1 000 ans.",
              dog_1: "Husky est un nom général pour un chien de type traîneau utilisé dans les régions du nord.",
              dog_2: "Bergers allemands sont des chiens de travail développés à l'origine pour l'élevage de moutons",
              dog_3: "Les Golden Retrievers ont un amour instinctif de l'eau et sont faciles à former aux normes d'obéissance de base ou avancées",
              dog_4: "C'est un chien musclé et costaud avec un visage ridé et un nez poussé distinctif",
              dog_5: "Leur manteau de fourrure est principalement noir, avec le marron sur les jambes et le visage"
          },
          products: {
              nameList: {
                  "Milk cow": "Vache laitière",
                  Hen: "Poules",
                  Wheat: "Le blé",
                  Tomato: "Des tomates",
                  Potato: "Des pommes de terre",
                  Cucumber: "Concombre",
                  Corn: "Wu",
                  Carrot: "Des carottes",
                  Cabbage: "Chou",
                  Pumpkin: "citrouille",
                  Pineapple: "Ananas",
                  Goat: "Chèvre",
                  Coconut: "Noix de coco",
                  Sheep: "Brebis"
              },
              outputNameList: {
                  "bottle of milk": "du lait",
                  egg: "des oeufs",
                  wheat: "le blé",
                  tomato: "des tomates",
                  potato: "des pommes de terre",
                  cucumber: "concombre",
                  corn: "wu",
                  carrot: "des carottes",
                  cabbage: "chou",
                  pumpkin: "citrouille",
                  pineapple: "ananas",
                  "goat milk": "lait de chèvre",
                  coconut: "noix de coco",
                  wool: "la laine"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "CHARGEMENT DE L'ÉCRAN",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "CONFIRMER",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "Définir ce chien comme\nchien par défaut?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "SET DEFAULT",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NOUVEAUX PRODUITS",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "NOUVEAUX CHIENS",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "THÈME D'HIVER",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "OBTENEZ LE BEAU THÈME HIVER\nPOUR VOTRE FERME!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "ESSAYEZ MAINTENANT!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "FÉLICITATIONS",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'THEME UTILISÉ AVEC SUCCÈS\n"WINTER"',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "D'accord",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "TEMPS RESTANT:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "Quand le temps est écoulé, veuillez vous rendre au magasin.",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "DURÉE DE VIE",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "OBTENEZ LE BEAU THÈME HIVER\nPOUR VOTRE FERME!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'THEME UTILISÉ AVEC SUCCÈS \n "WINTER"',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "POUR CHANGER DE THÈME, VEUILLEZ VOUS RENDRE AU MAGASIN",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "UTILISATION",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "EN UTILISANT",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "GUIDER",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "CHAUDE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "valse de printemps",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "chanson d'amour d'hiver",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "coeur d'automne",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Arrive bientôt",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "EN UTILISANT",
              "Canvas/popup_recover_damage/bg_holder/info": "VOULEZ-VOUS RECUPERER VOTRE FERME DE DOMMAGES?",
              "Canvas/popup_recover_damage/wait/Label": "ATTENDRE",
              "Canvas/popup_recover_damage/now/Label": "À PRÉSENT",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Mise à niveau chien pour\naugmenter le taux anti-voleur",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "STATUT",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Touchez moi",
              "Canvas/popup_edit_status/bg_holder/title": "Modifier votre statut",
              "Canvas/popup_confirm_status/bg_holder/title": "Regarder une vidéo pour déverrouiller\nle statut de votre ferme",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Statut",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "OUVRIR",
              "Canvas/popup_dogs/bg_holder/dog_name": "  Nom du chien",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "GRATUIT",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "GET NOW",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "NOTATION",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "AMIS",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "MONDE",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "REGARDER",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "Nom",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "Nom",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "Niveau",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "Niveau",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "Invitez vos amis à être voisins\n(et de les voler)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "Inviter",
              "message_share_daily_reward/title": "Chaîne de connexion",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "RETOUR",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "VOYAGE",
              "prefabs//ground/lbl_info1": "ACHETEZ",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "AUGMENTER LA VITESSE",
              "Canvas/layout_home/scroll_layer/truck/go/label": "VENDRE",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "        RÉALISATIONS",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "ENTREPOT",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "PLATEAU",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "AMIS",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "PLATEAU",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "TROUVER UN ALÉATOIRE",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "TROUVER",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "VOUS AVEZ UTILISÉ TOUS\nPRENDRE GRATUITEMENT. VOIR LA VIDEO\nOBTENIR PLUS",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "RÉCEMMENT PAS D'IA\nVOTRE CAMP",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "Invitez vos amis à être voisins\n(et de les voler)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "VOUS INVITER",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "VOUS INVITER",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "STATISTIQUES",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "RÉCEMMENT PAS D'IA\nVOTRE CAMP",
              "Canvas/popup_email/bg_holder/title": "Liste de personnes\na volé votre ferme",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "JUSQU'AU NIVEAU",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "NOUVEAU",
              "Canvas/popup_new_level/bg_holder/txt_amount": "RÉCOMPENSES",
              "Canvas/popup_new_level/bg_holder/txt_level": "DÉVERROUILLAGE",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "RECEVOIR",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "JUSQU'AU NIVEAU",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "RÉCOMPENSES",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "NRECEVOIR",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "AUGMENTER LA VITESSE",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "GRATUIT",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "GRATUIT",
              "Canvas/popup_info_item/bg_holder/bottom2": "A CULTIVÉ",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "RETOUR",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "VENDRE",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "NON",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "OUI",
              "Canvas/popup_sell/bg_holder/info": "VOUS DEVEZ VOULOIR\nVENDRE CETTE BOITE",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "VENDRE",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "CHOISISSEZ DES PRODUITS AGRICOLES À VENDRE",
              "Canvas/popup_adjust_order/bg_holder/max": "MAX",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "VENDRE",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "VENDRE",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "MIS À NIVEAU",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "CONDITION",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "TO",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "MIS À NIVEAU",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "CONDITION",
              "Canvas/popup_upgrade_truck/bg_holder/to": "TO",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "MIS À NIVEAU",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "MIS À NIVEAU",
              "Canvas/popup_storage_full/bg_holder/message": "L'entrepôt est plein\nmettre à jour toujours?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "PLATEAU",
              "Canvas/popup_not_found/bg_holder/txt_msg": "Aucune victime trouvée.\nVeuillez réessayer plus tard",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "Fermer",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Acheter de l'or",
              "Canvas/popup_not_enough_gold/bg_holder/info": "PAS D'OR!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "PAS ASSEZ DE DIAMANT!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Acheter des diamants",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "Oui",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "HEUREUX\nVOUS AVEZ REÇU",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "BOUTIQUE",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "MIS À NIVEAU",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "Le camion a été amélioré\nau plus haut niveau",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "RÉALISATIONS",
              "Canvas/popup_new_achievement/bg_holder/share/share": "PARTAGER",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "RECEVOIR",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "RÉALISATIONS",
              "Canvas/popup_achievement_list/bg_holder/progress": "PROCESSUS",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "PARFAIT",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "PAS RÉALISATION",
              "Canvas/popup_disconnected/but_reconnect/caption": "CONNECT",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Quelle mauvaise journée",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "ÉCHEC",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "LE MAISON",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "50% DE RÉDUCTION",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "50% DE RÉDUCTION",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "CHIEN",
              "Canvas/popup_dogs/bg_holder/txt_info": "ACHETEZ UN CHIEN POUR PROTEGER\nVOTRE FERME",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "AVOIR ACHETER",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "D'ACCORD",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "RÉCOMPENSES QUOTIDIENNES",
              "Canvas/popup_daily_reward/bg_holder/title": "Mai se souvient être revenue pour recevoir plus de cadeaux!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "DATE 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "DATE 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "DATE 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "DATE 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "DATE 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "DATE 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "DATE 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "RECEVOIR",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "NON!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "Fermer",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "HEUREUX!",
              "Canvas/popup_bot_gift/bg_holder/title": "VOUS AVEZ REÇU LA PARTIE CADEAUX",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "RECEVOIR",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Partager avec des amis",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "IGNOREZ       ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "CONTINUER!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "ARBRE",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "GÉNIAL",
              "Canvas/popup_tutorials/label_skip": "IGNOREZ",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "CADEAUX",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Faire les tâches suivantes\nrecevoir le cadeau correspondant ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "COMPLÉTÉ",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "LA MAISON",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "Vous n'avez encore\nrien volé.Êtes-vous sûr de vouloir\nrentrer chez vous??",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "LA MAISON",
              "Canvas/popup_go_steal/bg_header/lbl_header": "TROUVER UNE VICTIME",
              "Canvas/popup_go_steal/title": "Les produits agricoles que vous avez volés",
              "Canvas/popup_go_steal/scrollview/msg": "Vous n'avez encore\nrien volé",
              "Canvas/popup_go_steal/img_random/lbl_find": "TROUVER UN RISQUE ALÉATOIRE",
              "Canvas/popup_go_steal/btn_go/lblX5": "TROUVER",
              "Canvas/popup_go_steal/lbl_used_up_find": "VOUS AVEZ UTILISÉ TOUTES\nLES RÉSULTATS GRATUITEMENT. VOIR LA VIDÉO\nPOUR PLUS",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "Continuer?",
              "Canvas/popup_go_revenge/scrollview/msg": "Vous n'avez encore\nrien volé",
              "Canvas/popup_go_revenge/lbl_find": "La victime a choisi",
              "Canvas/popup_go_revenge/btn_go/lblX5": "GO",
              "Canvas/popup_video_failed/bg_holder/info": "OH NON !\nVIDEO CORRIGÉ\n\nVEUILLEZ RETOURNER\nAPRÈS MOINS DE MINUTES",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "OH NON",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "ACHETEZ MAINTENANT"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "Niveau $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "Les produits agricoles que vous avez volés",
                      "OOPS...": "oh non..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "Les produits agricoles que vous avez volés",
                      "OOPS...": "OH NON..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " jour"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e) {
                      var a = e.replace("days", "jour").replace("day", "jour").replace("hrs", "h").replace("hr", "h").replace("mins", "minutes").replace("min", "minutes").replace("secs", "secondes").replace("sec", "secondes");
                      return _log("txt = " + e + " // result = " + a),
                      a + " avant"
                  }
              },
              "Canvas/nodeCaches/row_friend_victim/level": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Niveau xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "A COMPLETE: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "SUCCÈS: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "PRIS: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "A COMPLETE: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "SUCCÈS: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "PRIS: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Niveau xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "JOUER",
                      Create: "CRÉER"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Votre niveau: " + e + " / Classe:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return "Aussi " + e + " tourner"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "Ajouter 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " chacun " + e[1] + " secondes" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " vous êtes gros"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Félicitations!",
                      "oops!": "oh non!",
                      "Oops!": "Oh non!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "Vous avez $1 d'or");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "Vous avez $1 de diamant")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "Vous avez été récompensé " + _G.configs.rewardGoldShortcut + " or lors de la création d'un raccourci"),
                  l(a, "sorry, error occured", "Désolé, une erreur est survenue"),
                  l(a, " Video is not available.", " La vidéo a été bloquée."),
                  l(a, "Invitation sent successfully!", "Envoyer une invitation réussie!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "OH NON! PERTE DE CONNEXION",
                      "CONNECTING SERVER ...": "CONNEXION ...",
                      "CONNECTED !": "CONNECTÉ !",
                      "Please check connection\nand reload game": "S'il vous plaît vérifier la connexion\net recharger le jeu"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "Vous avez laissé tomber",
                      "sorry...": "désolé..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "Niveau xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "Niveau xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "Niveau xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "SOUS-TITRES ET\nCARACTÉRISTIQUES DE REMPLACEMENT\nSERA DÉVERROUILLÉ \nQUAND UP xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Bonjour. Je suis Tom. Bienvenue dans notre ferme!", "Cliquez sur le blé pour faire pousser de nouvelles", "Plantez tout le blé sur les parcelles vides", "Achetez un autre terrain pour agrandir le terrain", "Drag to merge and make a wheat level 2", "", 'Appuyez sur "Vendre" pour vendre\nle nombre de riz que vous avez récolté'],
                          tut2: ['Cliquez sur l\'icône "Steal"', "Trouvons une victime", "C'est le champ de la victime\nVolons-le!", "Tirez vos mains à travers les champs pour voler.", "Bon!\nVous l'avez déjà fait.\nPas comme moi la veille.", 'Appuyez sur "Go home" pour revenir\nvotre ferme.'],
                          tut3: ["Cliquez sur le tableau pour voir\nles nouvelles exigences", "Compléter les exigences spéciales\nCeci est d'augmenter la valeur pour\nles produits agricoles", "Remplissez l'exigence 2 pour augmenter la valeur de 150%", "Remplissez l'exigence 3 pour augmenter la valeur de 200%", "", "Complétez les exigences et continuez\nà prendre soin de toute ferme"],
                          tut_use_theme: ["Touchez pour définir le thème de votre ferme!", "Bien joué!\nVous êtes plus intelligent que je ne le pense.\nVous connaissez maintenant le moyen de définir un thème."]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "Aussi xxx joue",
              "Canvas/popup_go_revenge/victim-level": "Niveau: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "Manquant xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "acheter des chiens. Achetez maintenant avec le prix xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Niveau " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "Félicitations! Vous avez\n" + _G.configs.videoFindVictim + " recherche aléatoire", i = "FONCTION FONCTIONNELLE\nDÉVERROUILLAGE LORSQUE " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "PAS ASSEZ DE TERRE"),
                  l(a, "Nothing left to steal !", "Rien à voler !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Acheter des chiens avec succès!\nFélicitation!"),
                  l(a, "SHARED SUCCESSFULLY", "PARTAGE SUCCES"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "NE PEUT PAS RECOLTER QUAND LE MAGASIN EST PLEIN"),
                  l(a, "Successfully save 50% dropped gold!", "Réduit avec succès\n50% de l'or tombé!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "INVITATION AU SUCCÈS"),
                  l(a, "Successfully X2 products!", "X2 produits agricoles\navec succès!"),
                  l(a, "Congratz! Status unlocked!", "Félicitation! Statut débloqué!"),
                  l(a, "Upgraded successfully!", "Mis à jour avec succès!"),
                  l(a, "Stealing is not available\nin view mode!", "Voler n'est pas disponible\nen mode d'affichage!"),
                  l(a, "Name changed successfully!", "Le nom a changé avec succès!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " a été " + (o ? "chien " : "") + a + " attraper en volant la ferme " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " a volé la ferme " + a + "! \n" + a + " perdu " + t.join(", ")
                      }
                  },
                  cta: "Vengeance"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Joue maintenant!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' a réalisé des réalisations "' + a + '". Et toi?'
                  },
                  cta: "Joue maintenant!"
              },
              sendInvitationVictim: {
                  content: "Jouons à Farm Battle!",
                  cta: "Joue maintenant!"
              },
              sendMsgInviteGift: {
                  content: "Bonjour! S'il vous plaît soyez mon voisin!",
                  cta: "Jouons!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "Étendu xxx",
                  desc: "Terrain xxx ouvert"
              },
              UP_LUA: {
                  title: "Niveau de blé xxx",
                  desc: "Transplantation de blé niveau xxx"
              },
              UP_CACHUA: {
                  title: "Niveau de tomate xxx",
                  desc: "Tomate greffant niveau xxx"
              },
              UP_KHOAI: {
                  title: "Niveau de pomme de terre xxx",
                  desc: "Transplantation de pommes de terre à la hausse xxx"
              },
              UP_BOSUA: {
                  title: "Vache laitière xxx",
                  desc: "Transplantation de vaches laitières niveau xxx"
              },
              UP_DUA: {
                  title: "Concombre niveau xxx",
                  desc: "Greffer le concombre au niveau xxx"
              },
              UP_NGO: {
                  title: "Wu accordé xxx",
                  desc: "Greffe de maïs au niveau xxx"
              },
              UP_CAROT: {
                  title: "Niveau de carotte xxx",
                  desc: "Carotte greffé niveau xxx"
              },
              UP_GAMAI: {
                  title: "Poules fournies xxx",
                  desc: "Poules dressées niveau xxx"
              },
              UP_BAPCAI: {
                  title: "Niveau de chou xxx",
                  desc: "Transplantation de chou niveau xxx"
              },
              UP_BINGO: {
                  title: "Niveau de citrouille xxx",
                  desc: "Greffer la citrouille au niveau xxx"
              },
              UP_PINEAPPLE: {
                  title: "Niveau d'ananas xxx",
                  desc: "Améliorez l'ananas au niveau xxx"
              },
              UP_GOAT: {
                  title: "Niveau de chèvre xxx",
                  desc: "Améliorez la chèvre au niveau xxx"
              },
              UP_COCONUT: {
                  title: "Niveau de noix de coco xxx",
                  desc: "Mettre à niveau la noix de coco au niveau xxx"
              },
              UP_SHEEP: {
                  title: "Mouton niveau xxx",
                  desc: "Améliorez les moutons au niveau xxx"
              },
              UP_NHAKHO: {
                  title: "Entrepôt émis xxx",
                  desc: "Mise à niveau de l'entrepôt au niveau xxx"
              },
              UP_XEHANG: {
                  title: "Niveau de camion xxx",
                  desc: "Améliorez la voiture au niveau xxx"
              }
          },
          gifts: {
              Play: "Jouer",
              "Create shortcut": "Créer un raccourci"
          }
      },
      cc._RF.pop()
  }
  , {}],
  fx: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f72e0moZlJLPZxJOzYdTrgC", "fx");
      var y = e("../all_modules");
      setTimeout(function() {
          y = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              cc.find("Canvas/layout_home/button_leaderboard/button_leaderboard").runAction(cc.repeatForever(cc.sequence(cc.scaleBy(.2, 1.4), cc.scaleBy(.3, 1 / 1.4), cc.delayTime(5)))),
              cc.find("Canvas/layout_home/button_video_gold/icon gold").runAction(cc.repeatForever(cc.sequence(cc.delayTime(1.5), cc.moveBy(.2, cc.v2(0, 70)).easing(cc.easeOut(3)), cc.moveBy(.3, cc.v2(0, -70)).easing(cc.easeIn(3)), cc.delayTime(3.5)))),
              cc.find("Canvas/layout_home/button_invite_gift").runAction(cc.repeatForever(cc.sequence(cc.delayTime(3.5), cc.rotateBy(.2, -20).easing(cc.easeOut(3)), cc.rotateBy(.2, 20).easing(cc.easeIn(3)), cc.rotateBy(.2, 20).easing(cc.easeOut(3)), cc.rotateBy(.2, -20).easing(cc.easeOut(3)), cc.delayTime(1.5)))),
              cc.find("Canvas/popup_dogs").active = !0,
              cc.find("Canvas/popup_dogs/bg_holder/but_upgrade/arrow_up").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 20)), cc.moveBy(.7, cc.v2(0, -20))))),
              cc.find("Canvas/popup_dogs").active = !1,
              y.fx.bubbleForever(cc.find("Canvas/popup_not_enough_gold/bg_holder/btn_up2/visual"), .5, 0, 1.5),
              cc.find("Canvas/popup_recover_damage").active = !0,
              y.fx.bubbleForever(cc.find("Canvas/popup_recover_damage/now")),
              cc.find("Canvas/popup_recover_damage").active = !1,
              cc.find("Canvas/popup_recover_damage").active = !0,
              y.fx.bubbleForever(cc.find("Canvas/popup_recover_damage/now")),
              cc.find("Canvas/popup_recover_damage").active = !1,
              cc.find("Canvas/popup_suggest_theme_trial").active = !0,
              y.fx.bubbleForever(cc.find("Canvas/popup_suggest_theme_trial/bg_holder/but_try_now")),
              cc.find("Canvas/popup_suggest_theme_trial").active = !1,
              cc.find("Canvas/popup_theme_trial_expired").active = !0,
              y.fx.bubbleForever(cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now")),
              cc.find("Canvas/popup_theme_trial_expired").active = !1
          },
          unconfirmedPopupArr: [],
          getTotalPendingGolds: function() {
              var a = 0;
              return y.fx.unconfirmedPopupArr.map(function(e) {
                  a += e.gold
              }),
              a
          },
          getTotalPendingDiamonds: function() {
              var a = 0;
              return y.fx.unconfirmedPopupArr.map(function(e) {
                  a += e.diamond
              }),
              a
          },
          updateNonPendingGoldDiamond: function() {
              if (window._thisPlayerInfo) {
                  var e = y.fx.fakeGold = _thisPlayerInfo.gold - y.fx.getTotalPendingGolds()
                    , a = y.fx.fakeDiamond = _thisPlayerInfo.diamond - y.fx.getTotalPendingDiamonds();
                  y.uiHome.setGold(e),
                  y.uiHome.setDiamond(a)
              }
          },
          stopCurrentClaimGoldDiamond: function() {
              var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
              y.fx.updateNonPendingGoldDiamond(),
              e ? y.fx.isRunningGold = !1 : y.fx.isRunningDiamond = !1
          },
          bubbleForever: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .5
                , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                , t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1.3
                , n = e.orgScale || e.scale;
              e.orgScale || (e.orgScale = n),
              setTimeout(function() {
                  e.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(a, n * t).easing(cc.easeOut(1)), cc.scaleTo(a, 1 * n).easing(cc.easeOut(1)))))
              }, 1e3 * o)
          },
          stopBubbleForever: function(e) {
              e.stopAllActions(),
              e.scale = e.orgScale || e.scale
          },
          claimGetGoldDiamondNoFx: function(a) {
              _log(" claimGetGoldDiamondNoFx called popupName = " + a + " "),
              y.fx.unconfirmedPopupArr.find(function(e) {
                  return e.name == a
              }) && (y.fx.unconfirmedPopupArr = y.fx.unconfirmedPopupArr.filter(function(e) {
                  return e.name != a
              }),
              y.fx.updateNonPendingGoldDiamond(),
              _log(" fakeGold = " + y.fx.fakeGold + " "))
          },
          claimGetGoldDiamond: function(e, a, o) {
              var t = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
              t ? (y.fx.isRunningGold && y.fx.stopCurrentClaimGoldDiamond(!0),
              y.fx.isRunningGold = !0) : (y.fx.isRunningDiamond && y.fx.stopCurrentClaimGoldDiamond(!1),
              y.fx.isRunningDiamond = !0);
              if (!a) {
                  var n = y.fx.unconfirmedPopupArr.find(function(e) {
                      return e.name == o
                  });
                  if (!n)
                      return;
                  a = n[t ? "gold" : "diamond"]
              }
              if (!(a <= 0)) {
                  for (var i = _ceil(a / 12), r = "fake" + (t ? "Gold" : "Diamond"), l = y.fx[r], d = y.fx.Gold = l + a, s = t ? "gold" : "diamond", c = function() {
                      var e;
                      d == y.fx.Gold && (d <= (l += i) || l >= _thisPlayerInfo[s] ? y.fx.stopCurrentClaimGoldDiamond(t) : (e = l,
                      y.utils.setLabelTextPrice(cc.find("Canvas/layout_home/" + (t ? "bg_gold/money" : "bg_ruby/ruby")), e)))
                  }, u = cc.find("Canvas"), _ = _isString(_) ? cc.find(_) : e, p = u.convertToNodeSpaceAR(_.convertToWorldSpaceAR(cc.v2(0, 0))), g = u.convertToNodeSpaceAR(cc.find(t ? "Canvas/layout_home/bg_gold" : "Canvas/layout_home/bg_ruby").convertToWorldSpaceAR(cc.v2(0, 0))), m = cc.find(t ? "Canvas/nodeCaches/claim-gold" : "Canvas/nodeCaches/claim-diamond"), v = cc.pDistance(p, g), f = 0, h = 0; h < 12; h++) {
                      var b = y.utils.copyNodeTo(m, u);
                      b.setPosition(p),
                      b.runAction(cc.sequence(cc.delayTime(f), cc.moveBy(.3, y.utils.random0ToX(150) - 75, y.utils.random0ToX(150) - 75).easing(cc.easeOut(5)), cc.moveTo(v / 420, g).easing(cc.easeIn(5)), cc.callFunc(c), cc.removeSelf(!0))),
                      f += .02 * _random() + .02
                  }
                  if (o) {
                      var C = y.fx.unconfirmedPopupArr.find(function(e) {
                          return e.name == o
                      });
                      if (!C)
                          return;
                      (C[t ? "gold" : "diamond"] = 0) == C.gold && 0 == C.diamond && (y.fx.unconfirmedPopupArr = y.fx.unconfirmedPopupArr.filter(function(e) {
                          return e.name != o
                      }))
                  }
                  return a
              }
          },
          claimGold: function(e, a, o) {
              var t = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
              if (cc.find("Canvas/layout_victim").active && 0 == cc.find("Canvas/layout_victim").x)
                  y.fx.claimGetGoldDiamondNoFx(o);
              else {
                  var n = y.fx.claimGetGoldDiamond(e, a, o, !0);
                  t && y.fx.claimFlyUp(e, "Canvas/nodeCaches/claim-gold-up", n)
              }
          },
          claimDiamond: function(e, a, o) {
              var t = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
              if (cc.find("Canvas/layout_victim").active && 0 == cc.find("Canvas/layout_victim").x)
                  y.fx.claimGetGoldDiamondNoFx(o);
              else {
                  var n = y.fx.claimGetGoldDiamond(e, a, o, !1);
                  t && y.fx.claimFlyUp(e, "Canvas/nodeCaches/claim-diamond-up", n)
              }
          },
          claimFlyUp: function(e, a, o) {
              if (e) {
                  var t = cc.find("Canvas")
                    , n = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(0, 0)))
                    , i = cc.instantiate(cc.find(a));
                  t.addChild(i),
                  y.utils.setLabelText(i.getChildByName("Label"), o),
                  i.setPosition(n),
                  i.runAction(cc.sequence(cc.delayTime(.7), cc.fadeOut(.475))),
                  i.runAction(cc.sequence(cc.moveBy(1.2, 0, 250), cc.removeSelf(!0)))
              }
          },
          claimXpFx: function(e, a) {
              y.fx.claimFlyUp(e, "Canvas/nodeCaches/claim-star", a)
          },
          findingVictim: function() {
              var e = cc.find("finding_fx_prefab (late_load)")
                , a = cc.find("finding_fx_prefab (late_load)/cloud_right")
                , o = cc.find("finding_fx_prefab (late_load)/cloud_left")
                , t = cc.find("finding_fx_prefab (late_load)/cloud_bg");
              e.active = !0;
              t.opacity = 0,
              t.runAction(cc.fadeTo(2, 255).easing(cc.easeOut(3))),
              a.opacity = 0,
              a.x = 1280,
              a.runAction(cc.moveTo(2, cc.p(606, a.y)).easing(cc.easeOut(2))),
              a.runAction(cc.fadeTo(2, 255).easing(cc.easeOut(3))),
              o.opacity = 0,
              o.x = -1301,
              o.runAction(cc.moveTo(2, cc.p(-602, a.y)).easing(cc.easeOut(2))),
              o.runAction(cc.fadeTo(2, 255).easing(cc.easeOut(3)))
          },
          victimFound: function() {
              var e = cc.find("finding_fx_prefab (late_load)/cloud_right")
                , a = cc.find("finding_fx_prefab (late_load)/cloud_left")
                , o = cc.find("finding_fx_prefab (late_load)/cloud_bg");
              o.stopAllActions(),
              a.stopAllActions(),
              e.stopAllActions();
              o.runAction(cc.fadeTo(1.5, 0).easing(cc.easeOut(1))),
              e.runAction(cc.moveTo(1.5, cc.p(1280, e.y)).easing(cc.easeIn(1))),
              e.runAction(cc.fadeTo(1.5, 0).easing(cc.easeOut(1))),
              a.runAction(cc.moveTo(1.5, cc.p(-1301, e.y)).easing(cc.easeIn(1))),
              a.runAction(cc.fadeTo(1.5, 0).easing(cc.easeOut(1))),
              setTimeout(function() {
                  cc.find("finding_fx_prefab (late_load)").active = !1
              }, 1500)
          },
          harvestNoti: function(e, a) {
              var o = y.uiHarvestNoti.getInactiveNotiRow(e);
              if (o)
                  if (o.active) {
                      clearTimeout(o.xxx),
                      o.amount += a,
                      y.utils.setLabelText(o.getChildByName("lbl"), "+" + o.amount),
                      o.xxx = setTimeout(function() {
                          o.active = !1,
                          o.opacity = 255,
                          y.uiHarvestNoti.resetAllNotiRows(o, 59)
                      }, 2500)
                  } else {
                      y.utils.setLabelText(o.getChildByName("lbl"), "+" + a),
                      o.getChildByName("img").getComponent(cc.Sprite).spriteFrame = y.uiSlot.getItemHarvestSpriteFrame(e);
                      var t = y.uiHarvestNoti.getCountNotiRow()
                        , n = y.uiHarvestNoti.getMinYNotiRow(59) - 150
                        , i = 59 * -t - n
                        , r = cc.moveBy(.5, cc.p(0, i))
                        , l = cc.moveBy(2, cc.p(0, 0))
                        , d = cc.sequence(r, l);
                      o.amount = a,
                      o.active = !0,
                      o.name = e,
                      o.setPosition(0, n),
                      o.stopAllActions(),
                      o.runAction(d),
                      o.xxx = setTimeout(function() {
                          o.active = !1,
                          o.opacity = 255,
                          y.uiHarvestNoti.resetAllNotiRows(o, 59)
                      }, 2500)
                  }
          },
          hasOutput: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = "layout_home" == a ? y.game.mySlotList : y.game.victimSlotList;
              if (o && o[e].product && o[e].product.isAnimal)
                  y.fx.hasOutputAnimal(e, a);
              else {
                  var t = y.uiSlot.getProductNode(e, a);
                  if (t) {
                      var n = t.getChildByName("ani").getChildByName("fx_has_output");
                      n || (n = y.utils.prefabToNode("fx_has_output"),
                      t.getChildByName("ani").addChild(n),
                      n.getComponent(sp.Skeleton).setAnimation(0, "chin", !0)),
                      n.active = !0 !== _isMinDevice
                  }
              }
          },
          hasOutputAnimal: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = y.uiSlot.getProductNode(e, a);
              if (o) {
                  var t = o.getChildByName("ani").getChildByName("fx_has_output");
                  if (!t) {
                      var n = "layout_home" == a ? y.game.mySlotList : y.game.victimSlotList;
                      if (!n || !n[e].product)
                          return;
                      var i = n[e].product.id;
                      (t = y.utils.copyNodeTo(cc.find("Canvas/nodeCaches/item_harvest/" + i), o.getChildByName("ani"))).setPosition(64, -62),
                      t.scale = 1,
                      t.name = "fx_has_output"
                  }
                  !0 !== _isMinDevice ? (t.active = !0,
                  t.stopAllActions(),
                  t.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.1, -10).easing(cc.easeIn(1)), cc.rotateBy(.2, 20).easing(cc.easeIn(1)), cc.rotateBy(.1, -10).easing(cc.easeIn(1)), cc.rotateBy(1, 0))))) : t.active = !1
              }
          },
          removeAllOutputFx: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home";
              cc.find("Canvas/" + e + "/scroll_layer").getComponentsInChildren("sp.Skeleton").map(function(e) {
                  "dog" != e.node.name && (e.node.active = !1)
              })
          },
          inActiveHasOutput: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = y.uiSlot.getSlotNode(e, a)
                , t = y.uiSlot.getProductNode(o.name, a);
              if (t) {
                  var n = t.getChildByName("ani")
                    , i = !0
                    , r = !1
                    , l = void 0;
                  try {
                      for (var d, s = n.children[Symbol.iterator](); !(i = (d = s.next()).done); i = !0) {
                          d.value.active = !1
                      }
                  } catch (e) {
                      r = !0,
                      l = e
                  } finally {
                      try {
                          !i && s.return && s.return()
                      } finally {
                          if (r)
                              throw l
                      }
                  }
              }
          },
          upgradeTree: function(e, a, o, t) {
              y.uiSlot.getSlotNode(e);
              var n = y.uiSlot.getSlotNode(a)
                , i = y.uiSlot.getProductNode(n.name).getChildByName("tree_rice").getChildByName("tree_rice");
              i.getComponent(cc.Sprite).spriteFrame = y.uiSlot.getTreeSpriteFrame(o, t);
              var r = cc.scaleTo(.2, 1.5)
                , l = cc.scaleTo(.2, 1)
                , d = cc.sequence(r, l);
              if (i.runAction(d),
              y.prefabList.fx_level_up) {
                  var s = cc.instantiate(y.prefabList.fx_level_up);
                  s.active = !0,
                  s.setPosition(0, 0),
                  y.uiSlot.getProductNode(n.name).getChildByName("ani").addChild(s);
                  setTimeout(function() {
                      s.removeFromParent()
                  }, 1e3)
              }
          },
          upgradeAnimal: function(e, a, o, t) {
              y.uiSlot.getSlotNode(e);
              var n = y.uiSlot.getSlotNode(a)
                , i = y.uiSlot.getProductNode(n.name).getChildByName("tree_rice").getChildByName("tree_rice")
                , r = cc.scaleTo(.2, 1.5)
                , l = cc.scaleTo(.2, 1)
                , d = cc.sequence(r, l);
              if (i.runAction(d),
              y.prefabList.fx_level_up) {
                  var s = cc.instantiate(y.prefabList.fx_level_up);
                  s.active = !0,
                  s.setPosition(0, 0),
                  y.uiSlot.getProductNode(n.name).getChildByName("ani").addChild(s);
                  setTimeout(function() {
                      s.removeFromParent()
                  }, 1e3)
              }
          },
          harvestTree: function(e) {
              if (y.prefabList.fx_harvest && !y.fx.isBatchHarvesting) {
                  var a = y.uiSlot.getSlotNode(e)
                    , o = cc.instantiate(y.prefabList.fx_harvest);
                  o.active = !0,
                  o.setScale(1.2),
                  o.setPosition(0, -20);
                  var t = y.uiSlot.getProductNode(a.name);
                  t && t.getChildByName("ani").addChild(o);
                  setTimeout(function() {
                      o.removeFromParent()
                  }, 2e3)
              }
          },
          outputVictim: function(e, a, o) {
              var t = cc.instantiate(y.prefabList.noti_row);
              cc.find("Canvas/layout_victim/scroll_layer/layer_ani").addChild(t),
              y.utils.setLabelText(t.getChildByName("lbl"), "+" + o),
              t.getChildByName("img").getComponent(cc.Sprite).spriteFrame = y.uiSlot.getItemHarvestSpriteFrame(a);
              var n = y.uiSlot.getSlotNode(e, "layout_victim");
              y.utils.setPosToOtherNode(t, n),
              t.runAction(cc.sequence(cc.moveBy(.75, 0, 250), cc.callFunc(function() {
                  t.removeFromParent(!0)
              }, t))),
              t.runAction(cc.sequence(cc.delayTime(.25), cc.fadeTo(.5, 70)))
          },
          outputVictimOnce: function(e, a) {
              var o = cc.find("Canvas/layout_victim/scroll_layer/layer_ani")
                , t = y.uiSlot.getSlotNode(e, "layout_victim")
                , n = y.utils.getGlobalPosition(t)
                , i = y.utils.copyNodeTo(cc.find("Canvas/nodeCaches/harvest_tree"), o);
              i.getComponent(cc.Sprite).spriteFrame = y.uiSlot.getItemHarvestSpriteFrame(a);
              var r = y.utils.global2LocalPosDiff(i, n.x, n.y);
              i.setPosition(i.x + r.x + (10 - 20 * _random()), i.y + r.y + (10 - 20 * _random()));
              y.utils.global2LocalPosDiff(i, i.x, i.y + 100);
              i.setScale(.4);
              var l = cc.scaleTo(.3, .8)
                , d = cc.moveBy(.75, cc.p(0, 440))
                , s = cc.scaleTo(.75, .6)
                , c = cc.fadeOut(.75).easing(cc.easeIn(5))
                , u = cc.spawn(d, s, c)
                , _ = cc.sequence(l, u, cc.callFunc(function() {
                  i.removeFromParent()
              }, this));
              i.runAction(_)
          },
          output2Storage: function(e, a, o) {
              y.fx.harvestTree(e),
              7 < o && (o = 7);
              for (var t = 0, n = 0; n < o; n++)
                  setTimeout(y.fx.output2StorageOnce, t, e, a),
                  t += 100 + Math.round(50 * _random());
              y.uiStorage.openDoor(t / 1e3 + 1)
          },
          output2StorageOnce: function(e, a) {
              var o = y.uiSlot.getSlotNode(e)
                , t = y.utils.getGlobalPosition(o)
                , n = y.utils.getGlobalPosition(cc.find("Canvas/layout_home/scroll_layer/storage_house"))
                , i = y.nodePools.getHarvestItem(a)
                , r = y.utils.global2LocalPosDiff(i, t.x, t.y);
              i.setPosition(i.x + r.x + (10 - 20 * _random()), i.y + r.y + (10 - 20 * _random()));
              var l = y.utils.global2LocalPosDiff(i, n.x, n.y + 50)
                , d = Math.hypot(l.x, l.y) / 1e3
                , s = cc.moveBy(d, l.x + (10 - 20 * _random()), 0).easing(cc.easeIn(3 * d))
                , c = cc.moveBy(d, 0, l.y + (10 - 20 * _random())).easing(cc.easeOut(3 * d));
              i.runAction(s),
              i.runAction(c),
              i.setScale(.6),
              i.runAction(cc.sequence(cc.scaleTo(d / 2, .9), cc.scaleTo(d / 2, .6).easing(cc.easeIn(1)), cc.callFunc(function() {
                  i.active = !1
              })))
          },
          harvestShake: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = y.uiSlot.getSlotNode(e, a)
                , t = y.uiSlot.getProductNode(o.name, a).getChildByName("tree_rice")
                , n = 8
                , i = 5;
              10 * _random() < 5 && (n = -8,
              i = -5),
              t.stopAllActions(),
              t.rotation = 0;
              var r = cc.rotateBy(.2, n)
                , l = cc.rotateBy(.2, -(n + i))
                , d = cc.rotateBy(.1, i)
                , s = cc.sequence(r, l, d);
              t.runAction(s)
          },
          buttonBindTouchStartFX: function(e) {
              e.on("touchstart", function() {
                  if (e.inactiveButton)
                      return cc.log("button touchstart inactive");
                  e.stopAllActions(),
                  e.orgScale || (e.orgScale = e.scaleX),
                  e.runAction(cc.scaleTo(.1, 1.2 * e.orgScale))
              }),
              e.on("touchcancel", function() {
                  e.orgScale && (e.scale = e.orgScale)
              })
          },
          buttonTouchEndFX: function(e) {
              e.stopAllActions(),
              e.runAction(cc.scaleTo(.25, e.orgScale))
          },
          groundFadeIn: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , o = y.uiSlot.getProductNode(e).getChildByName("bg");
              a || y.uiSlot.showSlotBg(e),
              o.stopAllActions(),
              o.runAction(cc.fadeIn(.1))
          },
          groundFadeOut: function(e) {
              var a = y.uiSlot.getProductNode(e).getChildByName("bg");
              a.stopAllActions(),
              a.runAction(cc.fadeOut(.1))
          },
          slotDarken: function(e) {
              1 < arguments.length && void 0 !== arguments[1] && arguments[1];
              var a = y.game.mySlotList[e].product;
              if (a.isAnimal) {
                  if (a.animalHeadSlot != e)
                      return;
                  y.uiAnimal.get4SlotsAnimal(a.animalHeadSlot).map(function(e) {
                      e.getComponent(cc.Sprite).enabled = !1
                  })
              }
              var o = y.uiSlot.getSlotNode(e)
                , t = y.uiSlot.getProductNode(o.name);
              o.getComponent(cc.Sprite).enabled = !1,
              t && (t.opacity = 150)
          },
          slotLighten: function(e) {
              var a = y.game.mySlotList[e].product;
              if (a) {
                  if (a.isAnimal) {
                      if (a.animalHeadSlot != e)
                          return;
                      y.uiAnimal.get4SlotsAnimal(a.animalHeadSlot).map(function(e) {
                          e.getComponent(cc.Sprite).enabled = !0
                      })
                  }
                  var o = y.uiSlot.getSlotNode(e)
                    , t = y.uiSlot.getProductNode(o.name);
                  a.isAnimal || y.uiSlot.showSlotBg(e),
                  t && (t.opacity = 255)
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  game_language: [function(o, e, a) {
      "use strict";
      cc._RF.push(e, "2db5dq+GKRBYb/xEAnPEfLP", "game_language");
      var n = o("../all_modules");
      setTimeout(function() {
          n = o("../all_modules")
      }, 0),
      e.exports = {
          latinList: {
              en_US: !0
          },
          isLatin: !0,
          currentLang: "en_US",
          lastLanguage: "en_US",
          currentLangFile: o("en_US"),
          localizedList: {
              en_US: {
                  displayText: "ENGLISH"
              },
              vi_VN: {
                  displayText: "TIẾNG VIỆT"
              },
              th_TH: {
                  displayText: "ไทย"
              },
              pl_PL: {
                  displayText: "Polski"
              },
              pt_PT: {
                  displayText: "Português"
              },
              es_ES: {
                  displayText: "Español"
              },
              fr_FR: {
                  displayText: "Français"
              }
          },
          correctCode: function(e) {
              return {
                  pt_BR: "pt_PT",
                  es_LA: "es_ES",
                  fr_CA: "fr_FR"
              }[e] || e
          },
          switchToLanguage: function(e) {
              var a = e;
              (n.gameLanguage.localizedList[e] || (a = "en_US"),
              n.gameLanguage.lastLanguage != a) && (n.gameLanguage.lastLanguage = n.gameLanguage.currentLang = a,
              n.gameLanguage.currentLangFile = o(a),
              n.gameLanguage.isLatin = n.gameLanguage.latinList[a],
              cc.find("Canvas").parent.getComponentsInChildren("language_comp").map(function(e) {
                  try {
                      e.translate()
                  } catch (e) {
                      _log(" error translating ", e)
                  }
              }),
              n.gameLanguage.specialSwitchHandler(),
              n.gifts.renderGiftList())
          },
          setLabelDataAndRender: function(e, a) {
              var o = e.getComponent("language_comp");
              o && (o.data = a,
              o.translate())
          },
          specialSwitchHandler: function() {
              var e = "Canvas/popup_dogs/bg_holder/dog_name"
                , a = cc.find(e);
              a && (a.getComponent(cc.EditBox).placeholder = n.gameLanguage.currentLangFile.staticLabels[e]);
              var o = "Canvas/popup_edit_status/bg_holder/text_box"
                , t = cc.find(o);
              t && (t.getComponent(cc.EditBox).placeholder = n.gameLanguage.currentLangFile.staticLabels[o]),
              n.gifts.renderGiftList()
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules",
      en_US: "en_US"
  }],
  game: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "3ae12FvpNxDUat3oump36P/", "game");
      var u = e("../all_modules");
      setTimeout(function() {
          u = e("../all_modules")
      }, 0),
      a.exports = {
          stealProducts: {},
          initHome: function(e) {
              if (u.uiHome.setUsernameHome(e.UserName),
              u.uiHome.setGold(e.Gold),
              u.uiHome.setDiamond(e.Diamond),
              u.game.mySlotList = u.core.newSlotList(e.PlayerLevel, e.serverTime, e.Field, "layout_home"),
              u.uiHome.setLevelHome(e),
              u.uiShop.updateShopByLevel(e.PlayerLevel),
              _waitToRun(function() {
                  window._listThief = [],
                  u.data.getThiefsData(function(e) {
                      u.game.initListThief(e),
                      u.stolenDamage.listThiefLoaded = !0,
                      0 < _listThief.length && (u.uiHome.showNews(),
                      _logFBEvent("event_thief_report_show")),
                      u.stolenDamage.checkApplyDamage(),
                      u.popups.showFirstStartPopup()
                  }),
                  setTimeout(u.popups.showFirstStartPopup, 3e3),
                  u.gifts.fetchGiftList()
              }, "_accessToken"),
              !u.storage.isAvailable())
                  return u.uiStorage.setStateFull(),
                  u.uiLayout.showToolTip("CAN NOT HAVESRT WHEN STORAGE IS FULL");
              if (e.BotGift) {
                  var a = e.BotGift
                    , o = a.Gold
                    , t = a.Diamond;
                  cc.find("Canvas/popup_bot_gift/bg_holder/btn_claim").botGift = e.BotGift,
                  u.utils.setLabelText(cc.find("Canvas/popup_bot_gift/bg_holder/gift/gold"), o),
                  u.utils.setLabelText(cc.find("Canvas/popup_bot_gift/bg_holder/gift/diamond"), t),
                  u.tutorial.isShowingTut() || u.tutorial.isNewUser ? u.tutorial.pendingPopupArr.push({
                      layoutName: "popup_bot_gift",
                      sound: ""
                  }) : _showLayout("popup_bot_gift"),
                  u.fx.unconfirmedPopupArr.push({
                      name: "popup_bot_gift",
                      gold: o,
                      diamond: t
                  }),
                  u.fx.updateNonPendingGoldDiamond()
              }
              if (e.DailyReward) {
                  if (2 == e.DailyReward ? e.LoginStreak = 1 : (e.LoginStreak || (e.LoginStreak = 1),
                  e.LoginStreak > u.configs.dailyReward.length && (e.LoginStreak = 1)),
                  2 == e.LoginStreak && window.localStorage && !localStorage.getItem("day2_logged_event")) {
                      localStorage.setItem("day2_logged_event", "true");
                      var n = {
                          new_product: 0,
                          merge: 0,
                          harvest: 0,
                          harvest_all: 0,
                          sell: 0,
                          find_random: 0,
                          check_mail: 0,
                          steal_friend: 0,
                          revenge: 0
                      };
                      _logFBEvent("event_user_day2"),
                      window._day2Level4Already = 4 <= parseInt(e.PlayerLevel),
                      _day2Level4Already && _logFBEvent("event_user_day2_lv4", 1, {
                          typeLv4: "lv4_already"
                      }),
                      window._logEventUserDay2 = function(e) {
                          n[e]++;
                          var a = {
                              activityCount: n[e]
                          };
                          "find_random" == e && (a.isLv4Already = _day2Level4Already),
                          _logFBEvent("event_user_day2_" + e, 1, a)
                      }
                      ;
                      var i = 0;
                      setInterval(function() {
                          _logFBEvent("event_user_day2_play_time", 1, {
                              timePassed: i += 30
                          })
                      }, 3e4)
                  }
                  u.x2reward.dailyRewardDayNum = e.LoginStreak,
                  u.x2reward.resetNewPopup("popup_daily_reward"),
                  u.tutorial.isShowingTut() || u.tutorial.isNewUser ? u.tutorial.pendingPopupArr.push({
                      layoutName: "popup_daily_reward",
                      sound: ""
                  }) : u.popups.registerToShow("popup_daily_reward");
                  for (var r = 0, l = 0, d = 1; d <= u.configs.dailyReward.length; d++) {
                      var s = u.configs.dailyReward[d - 1]
                        , c = cc.find("Canvas/popup_daily_reward/bg_holder/gifts/day-" + d);
                      s.diamond && u.utils.setLabelTextPrice(c.getChildByName("diamond"), "+" + s.diamond),
                      s.gold && u.utils.setLabelTextPrice(c.getChildByName("gold"), "+" + s.gold),
                      d == e.LoginStreak ? (r = s.gold || 0,
                      l = s.diamond || 0,
                      c.getComponent(cc.Sprite).enabled = !0,
                      cc.find("Canvas/popup_daily_reward/bg_holder/btn_claim").claim = s,
                      cc.find("Canvas/popup_daily_reward/bg_holder/btn_claim").day = c) : c.getComponent(cc.Sprite).enabled = !1,
                      c.getChildByName("checked").active = d < e.LoginStreak,
                      d > e.LoginStreak && (c.opacity = 105)
                  }
                  u.fx.unconfirmedPopupArr.push({
                      name: "popup_daily_reward",
                      gold: r,
                      diamond: l
                  }),
                  u.fx.updateNonPendingGoldDiamond(),
                  u.utils.setLabelText(cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/user-id"), e.PlayerId || "")
              }
          },
          initListThief: function(e) {
              _log("  initListThief called ::: data =  ", e),
              window._listThief = e,
              _listThief = _listThief.sort(function(e, a) {
                  return parseInt(e.SteelTime || 0) > parseInt(a.SteelTime || 0) ? -1 : 1
              }),
              _listThief.splice(u.configs.thiefReportLimit, 9999),
              u.uiHome.showNotiPostBox()
          },
          initVictim: function(e) {
              if (e.SyncField)
                  try {
                      (e = Object.assign(e, JSON.parse(e.SyncField))).SyncMeta && (e = Object.assign(e, JSON.parse(e.SyncMeta)))
                  } catch (e) {
                      _log(e)
                  }
              u.pseudoAPI.initStealingSession(e),
              u.sound.stopBGSound(),
              u.sound.playBGSound("home_enemy_background_music"),
              _log("data = ", e),
              u.game.stealProducts = {},
              u.uiVictim.setUsernameVictim(e.UserName),
              u.uiVictim.showListThief(e.PlayerId),
              u.utils.setLabelText(cc.find("Canvas/layout_victim/bg_profile/level"), e.PlayerLevel),
              u.farmStatus.initVictimBoard(e);
              var o = cc.find("Canvas/layout_victim/bg_profile/bg_avatar/avatar");
              o.active = !1,
              cc.loader.load(e.Photo, function(e, a) {
                  a && (o.active = !0,
                  o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a)),
                  console.log("cc.loader.load", e)
              }),
              window._stealCountVictim = e.StealCount || 0,
              window._stolenCountVictim = e.StolenCount || 0,
              window._stealArrestVictim = e.StealArrest || 0,
              window._thisPlayerVictimId = e.PlayerId,
              window._thisPlayerVictimSession = e.SessionId,
              u.game.victimSlotList && u.timer.removeSlotList(u.game.victimSlotList),
              u.game.victimSlotList = u.core.newSlotList(e.PlayerLevel, e.serverTime, e.Field, "layout_victim"),
              u.dogs.setUpVictimDog(e),
              cc.find("Canvas/layout_victim/scroll_layer").setPosition(0, 0),
              _log("  initVictim :: data.Theme = " + e.Theme + " "),
              _timer0(function() {
                  u.theme.applyTheme(e.Theme || "theme_default", "layout_victim")
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  gifts: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "bc100ofyPBADL1HzZR3pVWd", "gifts");
      var h = e("../all_modules");
      setTimeout(function() {
          h = e("../all_modules")
      }, 0),
      a.exports = {
          showHideIconTLMN: function() {
              var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
              cc.find("Canvas/layout_home/icon_tlmn").active = e,
              cc.find("Canvas/layout_home/zicon gift").active = !e
          },
          switchToTLMN: function() {
              if (window.FBInstant) {
                  var a = "308211793358982";
                  FBInstant.switchGameAsync(a).catch(function(e) {
                      _log(" Failed to switch to game Id = " + a + " ", e.message)
                  })
              }
          },
          checkToShowIconTLMN: function() {
              window.FBInstant && (window._FBSupportedAPIs.includes("switchGameAsync") ? "vi_VN" != FBInstant.getLocale() && "vi_VN" != h.gameLanguage.currentLang || h.gifts.showHideIconTLMN(!0) : h.gifts.showHideIconTLMN(!1))
          },
          checkShortcutAvailable: function(a, o) {
              window.FBInstant ? FBInstant.canCreateShortcutAsync().then(function(e) {
                  e ? a && a() : o && o()
              }) : a && a()
          },
          createShortCut: function(a, o, t) {
              var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
              a = a || function() {}
              ,
              window.FBInstant ? FBInstant.canCreateShortcutAsync().then(function(e) {
                  e ? (_logFBEvent("event_show_create_shortcut"),
                  FBInstant.createShortcutAsync().then(function() {
                      _logFBEvent("event_accept_shortcut"),
                      o && o(),
                      n || a()
                  }).catch(function() {
                      _logFBEvent("event_cancel_shortcut"),
                      t && t(),
                      a()
                  })) : a()
              }) : a()
          },
          shortcut4Gift: function(a) {
              _logFBEvent("event_gift_create_shortcut_click"),
              h.gifts.createShortCut(a, function() {
                  _log(" Accepted to create shortcut "),
                  h.gifts.save2ServerShortcutCreated(),
                  _logFBEvent("event_gift_create_shortcut_success");
                  var e = h.configs.rewardGoldShortcut;
                  h.data.addGold(e, function(e) {
                      var a = parseInt(e.Gold) || _thisPlayerInfo.gold;
                      _thisPlayerInfo.gold = a,
                      h.fx.updateNonPendingGoldDiamond()
                  }),
                  _hideLayout("popup_gift_list"),
                  h.uiLayout.showCongratulations("You have been awarded " + e + " golds for creating shortcut"),
                  setTimeout(function() {
                      var e = cc.find("Canvas/popup_congratulations");
                      _log(" popupCongrats.x = " + e.x + " "),
                      _waitToRun(a, "x", e, 1)
                  }, 100)
              }, function() {
                  _log(" Cancelled to create shortcut ")
              }, !0)
          },
          setupVideoDiamondState: function(e) {
              var a = cc.find("Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active")
                , o = cc.find("Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/inactive")
                , t = cc.find("Canvas/layout_home/bg_ruby/icon2")
                , n = cc.find("Canvas/layout_home/bg_ruby/inactive");
              0 < e ? h.uiButton.inactiveButton(cc.find("Canvas/layout_home/bg_ruby"), !0) : h.uiButton.inactiveButton(cc.find("Canvas/layout_home/bg_ruby"), !1),
              a.active = e <= 0,
              o.active = 0 < e,
              t.active = e <= 0,
              n.active = 0 < e;
              var i = function() {
                  a.active = !0,
                  o.active = !1,
                  t.active = !0,
                  n.active = !1,
                  h.uiButton.inactiveButton(cc.find("Canvas/layout_home/bg_ruby"), !1)
              };
              if (0 < e) {
                  var r = _time() + e;
                  h.utils.setLabelCountDownTimer(o.getChildByName("label_countdown"), r, i),
                  h.utils.setLabelCountDownTimer(n.getChildByName("label_countdown"), r, i)
              } else
                  i()
          },
          setupVideoGoldState: function(e) {
              var a = cc.find("Canvas/layout_home/button_video_gold")
                , o = cc.find("Canvas/layout_home/button_video_gold_disabled");
              a.active = e <= 0,
              o.active = 0 < e;
              var t = h.configs.getVideoRewardGold(_thisPlayerInfo.level);
              h.utils.setLabelText(cc.find("Canvas/popup_not_enough_gold/bg_holder/btn_up2/visual/lblX5"), "+" + t);
              var n = function() {
                  a.active = !0,
                  h.utils.setLabelText(a.getChildByName("gold_label"), t),
                  o.active = !1
              };
              if (0 < e) {
                  var i = _time() + e;
                  h.utils.setLabelCountDownTimer(o.getChildByName("label_countdown"), i, n)
              } else
                  n()
          },
          updateGoldAtVideoGold: function() {
              var e = h.configs.getVideoRewardGold(_thisPlayerInfo.level);
              h.utils.setLabelText(cc.find("Canvas/popup_not_enough_gold/bg_holder/btn_up2/visual/lblX5"), "+" + e),
              h.utils.setLabelText(cc.find("Canvas/layout_home/button_video_gold/gold_label"), e)
          },
          videoGoldTouch: function() {
              if (window.FBInstant)
                  return h.video.isVideoAvailable ? void h.video.showVideo(function() {
                      h.gifts.videoGoldSuccessCallback()
                  }) : h.uiLayout.showCongratulations(" Video is not available.", "Oops!");
              h.gifts.videoGoldSuccessCallback()
          },
          videoGoldSuccessCallback: function() {
              _log("videoGoldSuccessCallback called !!!!");
              var a = h.configs.getVideoRewardGold(_thisPlayerInfo.level);
              _logFBEvent("event_video_gold_success"),
              h.data.addGold(a, function(e) {
                  h.uiLayout.showCongratulations("You have received " + a + " golds "),
                  h.fx.updateNonPendingGoldDiamond(),
                  _thisPlayerInfo.gold = e.Gold,
                  h.uiHome.setGold(e.Gold)
              }),
              h.gifts.setupVideoGoldState(1e3 * h.configs.videoGoldTimeWait),
              h.social.lastVideoGoldUTC = _time(),
              h.data.saveToServer("lastVideoGoldUTC", _time())
          },
          videoDiamondTouch: function() {
              if (window.FBInstant)
                  return h.video.isVideoAvailable ? void h.video.showVideo(function() {
                      h.gifts.videoDiamondSuccessCallback()
                  }) : h.uiLayout.showCongratulations(" Video is not available.", "Oops!");
              h.gifts.videoDiamondSuccessCallback()
          },
          videoDiamondSuccessCallback: function() {
              _log("videoDiamondSuccessCallback called !!!!");
              var a = h.configs.getVideoRewardDiamond(_thisPlayerInfo.level);
              _logFBEvent("event_video_diamond_success"),
              h.data.addDiamond(a, function(e) {
                  h.uiLayout.showCongratulations("You have received " + a + " diamonds "),
                  h.fx.updateNonPendingGoldDiamond(),
                  _thisPlayerInfo.diamond = e.Diamond,
                  h.uiHome.setDiamond(e.Diamond)
              }),
              h.gifts.setupVideoDiamondState(1e3 * h.configs.videoDiamondTimeWait),
              h.social.lastVideoDiamondUTC = _time(),
              h.data.saveToServer("lastVideoDiamondUTC", _time())
          },
          inviteGiftTouch: function() {
              window.FBInstant ? FBInstant.context.chooseAsync({
                  filters: ["NEW_CONTEXT_ONLY"]
              }).then(h.gifts.invitedSuccessCallback).catch(function(e) {
                  _log("invite failed :"),
                  _log(e)
              }) : h.gifts.invitedSuccessCallback()
          },
          invitedSuccessCallback: function() {
              _logFBEvent("event_invite_success"),
              h.uiLayout.showCongratulations("Invitation sent successfully!"),
              h.social.sendMsgInviteGift()
          },
          save2ServerShortcutCreated: function() {
              var e = _thisPlayerInfo.privateData.oldGiftArr || [];
              e.push({
                  Id: null,
                  Name: "create shortcut",
                  Gold: h.configs.rewardGoldShortcut,
                  Cta: "Create",
                  IsDone: !0
              }),
              h.data.saveToServer("oldGiftArr", e, function() {
                  h.gifts.allGiftArr.find(function(e) {
                      return !e.Id
                  }).IsDone = !0,
                  h.gifts.renderGiftList()
              }),
              h.data.saveToServer("isShortcutCreated", "true")
          },
          fetchGiftList: function() {
              h.data.getPromoGames(function(e) {
                  e = e || [];
                  var o = h.gifts._oldGiftArr = _thisPlayerInfo.privateData.oldGiftArr || [];
                  !window._IS_PRODUCTION || window._FBSupportedAPIs.includes("switchGameAsync") ? (e = e.filter(function(e) {
                      return "" + e.Active != "0"
                  }).filter(function(a) {
                      return !o.some(function(e) {
                          return e.Id == a.Id
                      })
                  })).map(function(e) {
                      e.Name = "Play " + e.Name,
                      e.Cta = "Play"
                  }) : e = [];
                  var a = function() {
                      h.gifts.allGiftArr = e.concat(o);
                      h.gifts.renderGiftList(),
                      cc.find("Canvas/popup_gift_list/bg_holder/scrollview/view/content").children.filter(function(e) {
                          return !e.getChildByName("bg_done").active
                      }).length && (cc.find("Canvas/layout_home/zicon gift").active = !cc.find("Canvas/layout_home/icon_tlmn").active)
                  };
                  h.gifts.checkShortcutAvailable(function() {
                      o.find(function(e) {
                          return "create shortcut" == e.Name
                      }) || e.unshift({
                          Id: null,
                          Name: "create shortcut",
                          Gold: h.configs.rewardGoldShortcut,
                          Cta: "Create"
                      }),
                      a()
                  }, a)
              })
          },
          renderGiftList: function() {
              if (h.gifts.allGiftArr && (!window._FBSupportedAPIs.length || window._FBSupportedAPIs.includes("switchGameAsync"))) {
                  var m = "Canvas/popup_gift_list/bg_holder/scrollview/view/content"
                    , v = cc.find(m)
                    , f = cc.find("Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template");
                  v.removeAllChildren(),
                  window.FBInstant && h.gifts.allGiftArr.map(function(e) {
                      if (!e.Locale)
                          return !0;
                      try {
                          var a = e.Locale.split(",").map(function(e) {
                              return e.replace(/\s/g, "").toLowerCase()
                          });
                          e.isDisabled = !a.includes(FBInstant.getLocale().toLowerCase()) && !a.includes(h.gameLanguage.currentLang.toLowerCase()),
                          e.isDisabled || (e.isEnabledOnce = !0)
                      } catch (e) {}
                  }),
                  h.gifts.allGiftArr.map(function(e) {
                      if (e.Id)
                          if (e.IsDone = !0,
                          e.LastPlayTime) {
                              var a = _time() - e.LastPlayTime;
                              e.IsDone = !(1 == e.PlayCount && 864e5 < a && a < 1728e5)
                          } else
                              e.IsDone = !1
                  }),
                  h.gifts.allGiftArr.sort(function(e, a) {
                      return e.IsDone != a.IsDone ? e.IsDone ? a.IsDone ? -1 : 1 : -1 : !e.Id != !a.Id ? e.Id ? a.Id ? -1 : 1 : -1 : 1 == e.PlayCount != (1 == a.PlayCount) ? 1 == e.PlayCount ? -1 : 1 == a.PlayCount ? 1 : -1 : e.Priority > a.Priority ? -1 : 1
                  }),
                  h.gifts.allGiftArr.map(function(e) {
                      var a = e.Id
                        , o = e.Name
                        , t = e.Image
                        , n = e.Gold
                        , i = e.Cta
                        , r = e.IsDone
                        , l = e.isDisabled
                        , d = e.isEnabledOnce;
                      e.PlayCount;
                      if (!l || d) {
                          var s = h.utils.copyNodeTo(f, v);
                          if (s.active = !0,
                          s.name = a || "shortcut",
                          t) {
                              s.getChildByName("default_icon").active = !1;
                              var c = new cc.SpriteFrame(t);
                              _waitToRun(function() {
                                  cc.find("Canvas/popup_gift_list").active = !0,
                                  h.utils.setNodeImg(s.getChildByName("game_icon"), c, !0),
                                  cc.find("Canvas/popup_gift_list").active = !1
                              }, "_textureLoaded", c)
                          }
                          var u = o.replace(/^Play\s+Play/gi, "Play")
                            , _ = h.gameLanguage.currentLangFile.gifts;
                          u = (u = u.replace("Play", _.Play)).replace("Create shortcut", _["Create shortcut"]).replace("create shortcut", _["Create shortcut"]),
                          h.gameLanguage.setLabelDataAndRender(s.getChildByName("name"), u),
                          h.utils.setLabelText(s.getChildByName("gold_label"), n),
                          h.gameLanguage.setLabelDataAndRender(s.getChildByName("btn_do_quest").getChildByName("lbl"), i),
                          s.getChildByName("bg_done").active = r,
                          s.getChildByName("btn_do_quest").active = !r;
                          var p = m + "/" + s.name + "/btn_do_quest"
                            , g = m + "/" + s.name + "/btn_do_quest_done";
                          cc.find(g).active = r,
                          a ? (h.uiButton.bindButton([p], function() {
                              h.gifts.switchGameTouched(e)
                          }),
                          h.uiButton.bindButton([g], function() {
                              h.gifts.switchGameTouched(e)
                          })) : h.uiButton.bindButton([p], function() {
                              h.gifts.shortcut4Gift()
                          })
                      }
                  })
              }
          },
          switchGameTouched: function(a) {
              if (window.FBInstant) {
                  var o = a.Id
                    , e = (a.Name,
                  a.Image,
                  a.Gold)
                    , t = a.PlayCount
                    , n = a.IsDone
                    , i = a.IsDone ? "click when done" : 1 == a.PlayCount ? "click day 2" : "click day 1";
                  _log(" about to switch to game Id = " + o + " "),
                  _logFBEvent("event_gift_switch_click", 1, {
                      clickCase: i
                  });
                  var r = e || 0
                    , l = h.gifts._oldGiftArr
                    , d = t
                    , s = a.LastPlayTime
                    , c = a.Name
                    , u = l.includes(a);
                  n || (h.data.addGold(r, function() {
                      _log("added gold " + r)
                  }),
                  a.LastPlayTime = _time(),
                  a.PlayCount = (t || 0) + 1,
                  a.Name = "Play " + a.Name,
                  u || l.push(a),
                  h.data.saveToServer("oldGiftArr", l, function() {
                      _log("saved oldGiftArr " + l)
                  })),
                  FBInstant.switchGameAsync(o).catch(function(e) {
                      n || (_log(" Failed to switch to game Id = " + o + " ", e.message),
                      _logFBEvent("event_gift_switch_failed"),
                      u ? (a.PlayCount = d,
                      a.LastPlayTime = s,
                      a.Name = c) : _removeArrItem(l, a),
                      h.data.saveToServer("oldGiftArr", l, function() {
                          _log("--- ??? saved oldGiftArr " + l)
                      }),
                      r && h.data.addGold(-1 * r, function() {
                          _log("---- subtracted gold " + -1 * r)
                      }))
                  })
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  home: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "ddd3f4irzhHhKxzA4ezn4Tb", "home");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      cc.Class({
          extends: cc.Component,
          onLoad: function() {
              e("fix_scroll_view").init(),
              t.login.checkRealServerDisconnected(),
              setTimeout(function() {}, 6e3);
              if (e("late_sprite_frame_mapping").fetchMap(function() {
                  console.log(" =======> All dynamic atlases all loaded at " + (performance.now() / 1e3).toFixed(3) + " seconds <=========== "),
                  e("late_load_animation").startLoading(),
                  t.sound.load(function() {
                      cc.find("Canvas/layout_home").active ? t.sound.playBGSound("home_player_background_music") : t.sound.playBGSound("home_enemy_background_music")
                  }),
                  cc.find("Canvas/popup_email").active && setTimeout(function() {
                      t.uiHome.fetchEmail()
                  }, 500)
              }),
              t.utilsFB.checkSupportedAPIs(),
              e("all_modules").setModules(),
              e("all_modules").initModules(),
              t.utilsFB.startLogSessionTime(),
              window.FBInstant) {
                  _waitToRun(function() {
                      window.FBInstant.startGameAsync().then(function() {
                          var e;
                          FBInstant.logEvent("event_fbInstant_startGameAsync", 1),
                          e = window.FBInstant ? FBInstant.getLocale() : "en_US",
                          e = t.gameLanguage.correctCode(e),
                          t.gameLanguage.switchToLanguage(e),
                          t.languageSwitcher.setItem(e),
                          window._thisPlayerInfo = {
                              id: FBInstant.player.getID(),
                              name: FBInstant.player.getName(),
                              photo: FBInstant.player.getPhoto()
                          },
                          t.utilsFB.loadAndSetAvatar(),
                          t.login.startLogin()
                      })
                  }, "_fbInitialized")
              } else
                  window._thisPlayerInfo = {
                      id: "a13",
                      name: "Test a13",
                      photo: "https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"
                  },
                  t.gameLanguage.switchToLanguage("en_US"),
                  t.utilsFB.loadAndSetAvatar(),
                  t.login.startLogin()
          },
          onPlanItem: function(e) {
              t.uiShop.shopButHandler(e.target)
          }
      }),
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules",
      all_modules: "all_modules",
      fix_scroll_view: "fix_scroll_view",
      late_load_animation: "late_load_animation",
      late_sprite_frame_mapping: "late_sprite_frame_mapping"
  }],
  info_item: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "d12c32RBppHr7mFxxKQQG69", "info_item");
      var l = e("../all_modules");
      setTimeout(function() {
          l = e("../all_modules")
      }, 0),
      a.exports = {
          slotId: null,
          tree: null,
          holder: null,
          interval: null,
          diamondPowerUp: 0,
          init: function() {
              l.infoItem.holder = cc.find("Canvas/popup_info_item/bg_holder"),
              l.infoItem.tree = cc.instantiate(l.prefabList.tree),
              l.infoItem.tree.setScale(1.2),
              l.infoItem.tree.setPosition(0, 7),
              l.infoItem.holder.getChildByName("bg_info").addChild(l.infoItem.tree),
              l.infoItem.animal = cc.instantiate(l.prefabList.animal),
              l.infoItem.animal.setScale(.7),
              l.infoItem.animal.setPosition(0, 12),
              l.infoItem.holder.getChildByName("bg_info").addChild(l.infoItem.animal)
          },
          showDeleteItem: function() {
              _showLayout("popup_sell");
              l.infoItem.slotId;
              var e = l.game.mySlotList[l.infoItem.slotId].product
                , a = e.id
                , o = e.level;
              0 == o && (o = 1);
              var t = l.configs.products[a].price
                , n = _ceil(t * Math.pow(2, o - 1) * .4)
                , i = cc.find("Canvas/popup_sell/bg_holder/gold");
              l.utils.setLabelTextPrice(i.getComponent(cc.Label), n)
          },
          btnInfoItem: function(e) {
              if (l.game.mySlotList[e.name]) {
                  var a = l.game.mySlotList[e.name].product;
                  a && ("BOSUA" == a.id ? l.sound.playSFX("cow_press") : "GAMAI" == a.id ? l.sound.playSFX("chicken_press") : l.sound.playSFX("land_press"),
                  _showLayout("popup_info_item"),
                  l.infoItem.showInfoItem(e),
                  _logFBEvent("event_view_detail_product"))
              }
          },
          resetInfoItem: function() {
              l.infoItem.slotId = -10,
              clearInterval(l.infoItem.interval)
          },
          showInfoItem: function(e) {
              l.infoItem.slotId = e.name;
              var a = l.game.mySlotList[l.infoItem.slotId].product
                , o = a.id;
              l.infoItem.holder.getChildByName("txt_amount").active = !1,
              l.infoItem.holder.getChildByName("txt_level").active = !1,
              l.infoItem.holder.getChildByName("timer").active = !1,
              l.infoItem.holder.getChildByName("bottom1").active = !1,
              l.infoItem.holder.getChildByName("bottom2").active = !1;
              var t = 0;
              t = a.isSprout ? l.configs.products[o].speedup[a.level - 1] : l.configs.products[o].growup;
              var n = cc.find("Canvas/popup_info_item/bg_holder/bottom1/btn_up1/lblX5");
              l.utils.setLabelText(n, "" + t),
              l.infoItem.renderTree(),
              l.infoItem.setName(),
              l.infoItem.setLevel(),
              l.infoItem.setOutput(),
              l.infoItem.setTextInfo(),
              l.infoItem.timeTickCallBack(),
              l.infoItem.interval = setInterval(l.infoItem.timeTickCallBack, 100)
          },
          setTextInfo: function() {
              var e = l.game.mySlotList[l.infoItem.slotId].product
                , a = e.level
                , o = e.id;
              if (0 == a)
                  l.gameLanguage.setLabelDataAndRender(l.infoItem.holder.getChildByName("txt_info"), [l.configs.products[o].name]);
              else {
                  var t = l.configs.products[e.id].outputTime[e.level - 1]
                    , n = l.configs.products[o].harvestUnitName;
                  l.gameLanguage.setLabelDataAndRender(l.infoItem.holder.getChildByName("txt_info"), [n, t])
              }
          },
          setOutput: function() {
              var e = l.game.mySlotList[l.infoItem.slotId];
              if (e) {
                  var a = e.product
                    , o = a.level
                    , t = a.id;
                  if (0 == o)
                      l.infoItem.holder.getChildByName("bottom1").active = !0;
                  else {
                      l.infoItem.holder.getChildByName("txt_amount").active = !0;
                      var n = a.outputAmount
                        , i = l.configs.products[t].maxOutput[o - 1]
                        , r = l.infoItem.holder.getChildByName("txt_amount");
                      l.utils.setLabelText(r, n + "/" + i),
                      n == i ? l.infoItem.holder.getChildByName("bottom2").active = !0 : l.infoItem.holder.getChildByName("bottom1").active = !0
                  }
              }
          },
          timeTickCallBack: function() {
              if (!(l.infoItem.slotId < 0)) {
                  var e = l.game.mySlotList[l.infoItem.slotId].product;
                  e || clearInterval(l.infoItem.interval);
                  var a = e.level;
                  if (0 == a) {
                      l.infoItem.holder.getChildByName("timer").active = !0;
                      var o = _ceil(e.sproutRemainingTime);
                      l.utils.setLabelText(l.infoItem.holder.getChildByName("timer").getChildByName("time"), l.utils.secondsToTimeCountdown(o)),
                      l.infoItem.diamondPowerUp = _ceil(o * l.configs.dps),
                      l.utils.setLabelText(cc.find("Canvas/popup_info_item/bg_holder/bottom1/btn_up1/lblX5"), l.infoItem.diamondPowerUp),
                      l.infoItem.holder.getChildByName("bottom1").active = !0,
                      l.infoItem.holder.getChildByName("bottom2").active = !1
                  } else {
                      var t = _ceil(e.produceRemainingTime);
                      l.utils.setLabelText(l.infoItem.holder.getChildByName("timer").getChildByName("time"), l.utils.secondsToTimeCountdown(t));
                      var n = l.timer.calculateFullRemainingTime(e);
                      l.infoItem.diamondPowerUp = _ceil(t / n * l.configs.products[e.id].speedup[a - 1]),
                      l.utils.setLabelText(cc.find("Canvas/popup_info_item/bg_holder/bottom1/btn_up1/lblX5"), l.infoItem.diamondPowerUp),
                      e.outputAmount < l.configs.products[e.id].maxOutput[a - 1] ? (l.infoItem.holder.getChildByName("timer").active = !0,
                      l.infoItem.holder.getChildByName("bottom1").active = !0,
                      l.infoItem.holder.getChildByName("bottom2").active = !1) : (l.infoItem.holder.getChildByName("timer").active = !1,
                      clearInterval(l.infoItem.interval),
                      l.infoItem.holder.getChildByName("bottom1").active = !1,
                      l.infoItem.holder.getChildByName("bottom2").active = !0)
                  }
              }
          },
          setLevel: function() {
              var e = l.game.mySlotList[l.infoItem.slotId].product.level;
              0 < e && (l.infoItem.holder.getChildByName("txt_level").active = !0);
              var a = l.infoItem.holder.getChildByName("txt_level");
              l.gameLanguage.setLabelDataAndRender(a, e)
          },
          setName: function() {
              var e = l.game.mySlotList[l.infoItem.slotId].product.id
                , a = l.infoItem.holder.getChildByName("bg_header").getChildByName("lbl_header");
              l.gameLanguage.setLabelDataAndRender(a, l.configs.products[e].name)
          },
          renderTree: function() {
              var e = l.game.mySlotList[l.infoItem.slotId].product;
              if (e.isAnimal)
                  l.infoItem.renderAnimal();
              else {
                  l.infoItem.animal.active = !1,
                  l.infoItem.tree.active = !0;
                  var a = e.id
                    , o = e.level;
                  l.infoItem.tree.name = "tree",
                  l.infoItem.tree.getChildByName("bg").active = !1,
                  l.infoItem.tree.getChildByName("tree_rice").active = !0;
                  var t = l.infoItem.tree.getChildByName("tree_rice").getChildByName("fence_1")
                    , n = l.infoItem.tree.getChildByName("tree_rice").getChildByName("fence_2")
                    , i = l.infoItem.tree.getChildByName("tree_rice").getChildByName("tree_rice")
                    , r = l.infoItem.tree.getChildByName("tree_rice").getChildByName("seed_rice");
                  t.active = !1,
                  n.active = !1,
                  i.active = !1,
                  r.active = !1,
                  0 == o ? (r.active = !0,
                  r.getChildByName("rice").getComponent(cc.Sprite).spriteFrame = l.uiSlot.getTreeSpriteFrame(a, o)) : (i.active = !0,
                  i.getComponent(cc.Sprite).spriteFrame = l.uiSlot.getTreeSpriteFrame(a, o)),
                  6 <= o && (10 < o && (o = 10),
                  t.active = !0,
                  n.active = !0,
                  t.getComponent(cc.Sprite).spriteFrame = l.uiSlot.getSquareSpriteFrame("hangrao" + o + "1"),
                  n.getComponent(cc.Sprite).spriteFrame = l.uiSlot.getSquareSpriteFrame("hangrao" + o + "2"))
              }
          },
          renderAnimal: function() {
              l.infoItem.tree.active = !1,
              l.infoItem.animal.active = !0;
              var e = l.game.mySlotList[l.infoItem.slotId].product
                , a = e.id
                , o = e.level;
              l.infoItem.animal.name = "tree",
              l.infoItem.animal.getChildByName("bg").active = !1,
              l.infoItem.animal.getChildByName("tree_rice").active = !0;
              var t = l.infoItem.animal.getChildByName("tree_rice").getChildByName("fence_1")
                , n = l.infoItem.animal.getChildByName("tree_rice").getChildByName("fence_2")
                , i = l.infoItem.animal.getChildByName("tree_rice").getChildByName("tree_rice")
                , r = l.infoItem.animal.getChildByName("tree_rice").getChildByName("seed_rice");
              t.active = !1,
              n.active = !1,
              i.active = !1,
              r.active = !1,
              0 == o ? (r.active = !0,
              r.getChildByName("rice").getComponent(cc.Sprite).spriteFrame = l.uiSlot.getTreeSpriteFrame(a, o)) : (i.active = !0,
              l.uiAnimal.setAnimalLevelVisual(i, a, 5 < o ? 5 : o)),
              6 <= o && (10 < o && (o = 10),
              t.active = !0,
              n.active = !0,
              l.utils.setNodeImg(t, cc.find("Canvas/nodeCaches/square_bgs_animal/hangrao" + o + "1")),
              l.utils.setNodeImg(n, cc.find("Canvas/nodeCaches/square_bgs_animal/hangrao" + o + "2")))
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  language_comp: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f3eb8Hhc3ZL3bYouTZ8x1wn", "language_comp");
      var r = e("../all_modules");
      setTimeout(function() {
          r = e("../all_modules")
      }, 0),
      cc.Class({
          extends: cc.Component,
          properties: {
              isDynamic: !1,
              id: ""
          },
          translate: function() {
              var e = r.gameLanguage.currentLangFile
                , a = this.data
                , o = this.node
                , t = this.id;
              if (r.gameLanguage.isLatin || (this.node.getComponent(cc.Label).font = null),
              this.isDynamic) {
                  var n = e.dynamicLabels[t];
                  if (!n)
                      return _log(" undefined template for compId " + t + " ");
                  if (_isFunction(n))
                      r.utils.setLabelText(o, n(a));
                  else if (Array.isArray(a)) {
                      var i = n;
                      a.map(function(e) {
                          return i = i.replace("xxx", e)
                      }),
                      r.utils.setLabelText(o, i)
                  } else
                      r.utils.setLabelText(o, n.replace("xxx", a))
              } else
                  r.utils.setLabelText(o, e.staticLabels[t])
          }
      }),
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  language_switcher: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "37a43hipeVE9IVz8HYrKish", "language_switcher");
      var n = e("../all_modules");
      setTimeout(function() {
          n = e("../all_modules")
      }, 0);
      var i = void 0
        , r = 0
        , l = []
        , d = void 0
        , s = void 0
        , c = void 0
        , t = !1;
      a.exports = {
          init: function() {
              var e = "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/language_bar";
              c = cc.find(e);
              var a = cc.find(e);
              d = a.getChildByName("prev"),
              s = a.getChildByName("next"),
              n.uiButton.bindButton(e + "/prev", n.languageSwitcher.prev),
              n.uiButton.bindButton(e + "/next", n.languageSwitcher.next),
              i = cc.find(e + "/pageview").getComponent(cc.PageView);
              var o = n.gameLanguage.localizedList;
              for (var t in o)
                  l.push({
                      langCode: t,
                      displayText: o[t].displayText
                  });
              n.languageSwitcher.renderList(),
              _timer0(function() {
                  r = i.getPages().length,
                  i.scrollToPage(r - 1, 0),
                  i.scrollToPage(0, 0)
              })
          },
          saveLang: function() {},
          renderList: function() {
              var o = i.content;
              o.removeAllChildren();
              var t = cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/language_bar/pageview/view/lang_switcher_tem");
              l.map(function(e) {
                  var a = n.utils.copyNodeTo(t, o);
                  a.active = !0,
                  n.utils.setLabelText(a.getChildByName("label"), e.displayText)
              })
          },
          setItem: function(e) {
              var a = i.getCurrentPageIndex()
                , o = void 0
                , t = void 0;
              isNaN(e) ? (o = e,
              t = l.findIndex(function(e) {
                  return e.langCode == o
              })) : o = l[t = e].langCode,
              a != t && (i.scrollToPage(t, 0),
              s.active = !(t == r - 1),
              d.active = !(0 == t),
              n.languageSwitcher.startBusy(),
              _waitToRun(function() {
                  n.data.saveToServer("selectedLanguageCode", o, function() {
                      console.log("saved selectedLanguageCode = " + o),
                      n.languageSwitcher.endBusy()
                  })
              }, "_loginData"),
              n.gameLanguage.switchToLanguage(o))
          },
          next: function() {
              if (!t) {
                  var e = i.getCurrentPageIndex() + 1;
                  r <= e || n.languageSwitcher.setItem(e)
              }
          },
          prev: function() {
              if (!t) {
                  var e = i.getCurrentPageIndex() - 1;
                  e < 0 || n.languageSwitcher.setItem(e)
              }
          },
          startBusy: function() {
              t = !0,
              c.opacity = 150
          },
          endBusy: function() {
              t = !1,
              c.opacity = 255
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  late_load_animation: [function(e, o, a) {
      "use strict";
      cc._RF.push(o, "74133dHZgVCHZwBPqez/SzB", "late_load_animation");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      o.exports = {
          startLoading: function() {
              t.dogs.loadAllDogAtlases(),
              cc.loader.loadRes("prefab/late_load/fx/fx_harvest", cc.Prefab, function(e, a) {
                  e ? _log(" error loading prefab fx_harvest ", e) : (t.prefabList.fx_harvest = a,
                  o.exports.loadHarvestCallback())
              }),
              cc.loader.loadRes("prefab/late_load/fx/fx_level_up_me", cc.Prefab, function(e, a) {
                  e ? _log(" error loading prefab fx_level_up_me ", e) : (t.prefabList.levelUpMe = a,
                  o.exports.loadLvUpMeCallback())
              }),
              cc.loader.loadRes("prefab/late_load/fx/fx_level_up", cc.Prefab, function(e, a) {
                  e ? _log(" error loading prefab fx_level_up ", e) : (t.prefabList.fx_level_up = a,
                  o.exports.loadLvUpCallback())
              })
          },
          loadHarvestCallback: function() {},
          loadLvUpMeCallback: function() {
              var e = t.utils.prefabToNode("levelUpMe");
              t.utils.moveNodeTo(e, cc.find("Canvas/popup_new_level/fx_level_up_me"));
              var a = t.utils.prefabToNode("levelUpMe");
              t.utils.moveNodeTo(a, cc.find("Canvas/popup_new_level1/fx_level_up_me"))
          },
          loadLvUpCallback: function() {}
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  late_sprite_frame_mapping: [function(e, r, a) {
      "use strict";
      cc._RF.push(r, "5d080uALmtA9reFQR5Z2qD0", "late_sprite_frame_mapping");
      var l = {
          late_common_imgs: 1,
          late_function_imgs: 2,
          late_thief_and_dog: 3,
          theme_shop: 4,
          late_shop_dog: 5,
          late_share_decor: 6
      }
        , d = function(a) {
          var e = function(e) {
              for (var a = [e.name], o = e.parent, t = 0; o && t++ < 50 && o.parent; )
                  a.push(o.name),
                  o = o.parent;
              return a.reverse().join("/")
          }(a)
            , o = e;
          if (cc.find(e) != a)
              try {
                  o = e + a.parent.children.findIndex(function(e) {
                      return e == a
                  })
              } catch (e) {}
          return r.exports.MD5(o)
      };
      r.exports = {
          logLateAtlasList: function() {
              var o = {}
                , t = 0;
              for (var e in l)
                  cc.loader.loadRes("atlas_late_load/" + e, cc.SpriteAtlas, function(e, a) {
                      !e && a.getSpriteFrames && (_log(" atlasUuidName = " + a.name + " atlasUuid = " + a._uuid + " "),
                      a.getSpriteFrames().map(function(e) {
                          o[e._uuid] = !0
                      }),
                      3 == ++t && _log(JSON.stringify(o)))
                  })
          },
          fetchMap: function(o) {
              var t = {};
              setTimeout(function() {
                  cc.find("Canvas").parent.getComponentsInChildren(cc.Sprite).map(function(e) {
                      t[d(e.node)] = e
                  })
              }, 0);
              var n = r.exports.lateAtlasMap
                , i = Object.keys(l).length;
              for (var e in l)
                  cc.loader.loadRes("atlas_late_load/" + e, cc.SpriteAtlas, function(e, a) {
                      0 == --i && o && o(),
                      !e && a.getSpriteFrames && a.getSpriteFrames().map(function(a) {
                          var e = n[a._name];
                          e && e.map(function(e) {
                              t[e] && (t[e].spriteFrame = a)
                          })
                      })
                  })
          },
          generateMap: function() {
              _log(performance.now());
              var i = {};
              cc.find("Canvas").parent.getComponentsInChildren(cc.Sprite).map(function(e) {
                  var a = e.spriteFrame;
                  if (a) {
                      var o = a._textureFilename;
                      if (Object.keys(l).some(function(e) {
                          return o.includes(e)
                      })) {
                          var t = a._name;
                          i[t] || (i[t] = []);
                          var n = d(e.node);
                          if (i[t].includes(n))
                              throw "existed id = " + n;
                          i[t].push(d(e.node))
                      }
                  }
              }),
              _log(performance.now()),
              _log(JSON.stringify(i)),
              r.exports.logLateAtlasList()
          },
          lateAtlasMap: {
              "social-message_update_async": ["6a8ccab002c57d2c2ce7dd1147183939", "17a30875a7deba51cfe7bf5f563f3f28", "65ee524dbf0428fb7310888a2089bd30"],
              "achievement-share_thanh_tich": ["948787f38a6d4934bdd4089a9a09a6ba", "8e44641eda028870fd2332db4d7a9e38"],
              "khung shop": ["0a4efa7f4fd0365ce514608a8a87e207", "5828b3d0d2c73e16b91f8a17ee5588c8"],
              "ava player": ["2a33397265d95b12653cf8926fe49339", "dd17a698de254caccdaed67a71f913c4", "9c41ee1bb4db73285699794018ddc78c", "37ed490511a94796bc3fda6fcf04e4ea", "7bec08adb4521d43152c87c94659ae7d", "6e1c7e779d25b44c8ac2c57fe1dd4b97", "6de188dcd1dffe1c0c61e4242a65ae63", "774593ca0580a2f483ba628f4c91da61", "6b708094133d7baabfdf2a50a5297c39", "6e77966c9ddb797a4e0ab34c9730e5bf", "14aa17cc2db85ae64c3aae5b6fd7103f", "33c352119bb32d9dccad01d3eaa697ed", "d4d49494864feca11872729e7252507b", "46d9bc2440a2566ff91e1f29210d4906", "5c7ecef5520187de6555698c8b2a6c62", "bf5e51595d22d3b2a8e0c2df96965390", "cb9fe4ba6e4b7bcc41536223a626aa1f", "450f343e716ae156e60568d3076562c1", "6fc7fa38e3384e986b4897b71db30525", "2c73a6955be4bab35e25ec7dcbbea01b", "53f6c48512d733fe6241aa1a3dbe2927", "3d817d26cc22f6529eaf74d450f4db77", "a0fbeb50f026bdd564ee57880e0a29ce", "b2677cefe68d9955b0d89c016392f372", "a9eb22b5e263aa65d2873132373919d5", "f12e2a49075cb0d0a3496cb9b9e18c81", "e466a7deb3554221ce2ed091e6d06e2e", "b55c777668901a77c9bdef4e6d0e5ac9", "01a305646b1eb5bf43b3c40427a72619"],
              "late_extra-stolen_msg_bg": ["d83e2831cd0c685b4ccff57c499f2ce8"],
              SharePicture_Cow: ["ebc20aece6ae5c4995e2c9442ed6dad3"],
              SharePicture_Logo: ["7ef7aafa78fa6e371f66b3e8aca61d95"],
              SharePicture_Dog: ["9ea0762669aaca8f49c2f06d691d4cf4"],
              "late_extra-medal_gold": ["c99e59424db71503b801c0636d311f95", "bf8e1ca084f2ac7534a364bd40588dcd", "b49b4c3c0917a5c39b00ed4d1622d271", "e9b5f6beca9dda3bd96ad731479bd981", "5687d3f2f328f6571cfa4a06241e4d5a", "8cdebd03798104cf91669b190842432a", "4843ccaeba7211caf634618896fdf2ff", "73222fe34649c5b80122d5cb662ec7dd", "8d9b82c722b3044ccea87e47106503a5", "27862eaae5a32c40d9666b220d3c0885", "b3771affd8908bd7afe97505e7fa2444", "266b00c1aee528fe3719cfa1910f5073", "dc6727dbc778c08f0f34174bbccdf94d", "8e066acb2ec073d7069e0070eca143e2", "ef16f672a8267b99c0aaae6744725252", "c00a1990272db3ad7316792240e15472", "73dfc39f13a880bcabed76431afd2ea7", "ec2e3fafa92744c571dbd9f9d287c0b4"],
              "late_extra-medal_silver": ["21b5f91893c8acdd3be56d7189bb1b43", "40e88aa9ab9f0bf416b9f104107bea3f", "b464c73f2044fb96f97168deed5f35e7", "5c898da0ef59d2baa9fa5f291a61f62e", "3c2811ed2a0247e7b7088607f6f9042c", "aec7a608520cdea12b95792243c4206e", "32ce4554a5c98078f7b95f17a4c8142a", "9f75b1469f93e9f3ca63b70b14834c8b", "26b9ba1665893036d46ab4d9fc7438c7", "a8e4619b5d1fcb77259c1f6fd07b206e", "202be23b780a4b4aa1b2ac2d817945f4", "5c50ef907efd5ac832ed90be4e2bee23", "132d55eb4cbc7c1ea6f0a2ed3fb548cf", "c88666bafb589cf0ea1f950bd06020d3", "0ed1515203854f7b3eedf06e26044c23", "39ab3431b15006472c27a9d2cadf5611", "5673053542e88019cb4eea88bd817585", "82e3bc0204e97440a2bd4b16c7d1a912"],
              "late_extra-medal_bronze": ["9efc49fb241dfb6136f03d4dedff7310", "6507ccfaff66422da9fdd4bc93466148", "bed3b89023b0d1d51e3e6cf48d0b510e", "2155a668c4433c10a18f395ddd4e2f70", "6adbdae7a1d8027f075c4cd2618d606b", "1428a8a0735e273e0c2e9a2487f4db4b", "e205b1c65dec9a09eef1d738c47fde99", "20389dcd044fb71cc4289ec629054977", "1067e6304dbe569a0819e0e97d9b0907", "0fba3319a58bc6e462fb77b4769bfcac", "1230f1290ff0724d6052f41649e1fa4d", "f70b0be4e187863551003555f04456d7", "11267b5ba92091b57e8c3f6fa4767f5f", "c2bfd04ee82dfdb8cb679346e63e4a33", "624e5b065142cb0da0d6b80c98ec4d61", "26a21920c6536b2549e2e7f6c1dcc320", "c51117472b622fcfeca6d37a7e451454", "1d89b9ce61a9597c3c18f85d1959fe2e"],
              "achievement-star-exp": ["cb5d012e549fa0243b76602e7ad8967b", "9d334956020403dd19a676390588091f", "294279f254fc7f8e02f1b8393421ae9b"],
              seed_rice: ["4cb48fde7fe846c44b29d085217dee56"],
              "gangtay-thief": ["e3f5b37c464892b85b187c266e1bd3e1", "80c42944cfed46158b9cb4f16cf5d96e"],
              "gangtay-thief-on": ["fdf5dc167c8357d1544bdc095ebc4ea6", "c3b8d7b6ab7e4e3d114484ecec869a16"],
              "khung-sanluong": ["cf0010b65353f5cceadc972b1a98a048"],
              "khung nha kho": ["a29852359c3991dbae4c8a944e2734fa", "189baa56719ce95f4180a45390bf27f1", "9def4cc5721a1c9fa2201e7ddbfa81c6", "5981bb3f9f843332dbcb38363f572d78", "3183a04a8e72e03989ac2e0ae66f671c", "3d0f364a647069c8494af20b8bdb33e7", "ba983b876e6c55841bdce72e8b26c89a", "9c7a2b3c076c41b4380945f9e9abec03", "425c5514ff4db96acbed95d34e172ac7", "f0a22167046f84f19f0379750da40c12", "6ede4d6f563c17850e4364a8d46ec663", "31f565b3c87581246a73ba142a69ae6c", "25370a4eb6e35aae2c8661f1c9262e89", "2117344e77b9bdfbcb828f49c9a78b34", "800251d473016fc256cfa1601f977b73", "32ab6455075fb49c774f03021e3be6cc", "fd561bbdb724e196f6d9717356d4a962", "67ec5efd4f4546beda290adedd15ee52"],
              "icon-up": ["9acf23433791b6d388c84707d18710fc", "78b05ee63bef1084e7db2fa5aa0478b2", "8b2dc1a38e5a060ec885586b6ff9c5ed"],
              button4: ["f2b25b266c9666b4d5ada009197f68a4", "bd554febe4f0f90a19f1d4f52b680d37", "855c98ab45607e432edcd67c5c308689"],
              "icon-dog": ["f8008bd958a64b81a6905d1e597e26e5"],
              "icon-eye": ["250a3495f22a8056e9d056165a947d4a"],
              "X icon": ["451e9bac0d8e9493eac62adad55518e0", "c74007045421f1df163b3071f1bec000"],
              "background_decor-shadow": ["dca289c865407ac646891dc8f89ca285", "1e01ae3107b0bd2d151953f819ef648a", "b86421c925eb596f5f17f626ffda94fd", "450b13ff18794b22b46098f09ff153ed", "df84b2ca7c27965126aced3241e17679", "8dab84dad1fc695de13fb1b9df3cc630", "f9708d4ab36be00e142d9cbe689ab175", "5888622e60e097e73865ec499566ce30", "12f9391cef466608e7fd9038be3d143f", "f325107f7b36c2e3589a25a62caa6b08", "4ebb8af581fb9591b58b2535b1cc24fd", "b0c5aab5d89da576a8d2e6bc4245388e", "793564e4798f5d443dcfdf65ed5fa445", "f031a3b0dd33576ad150fa66a77570ed", "f58d1e82018ff504a102eb2c3c604076", "83ce9622216643cde6811656920f1012", "a9b5fcf9042e69f90eefbe58defb1e7e", "592d8ffca8a06e5535123819b54cadb4"],
              "background_decor-rom": ["dfdfc35524e0e7ae8b914aa0fff4d711", "259cd1047f4d2e968483c0240719570e", "1ba5f8908a881d19e92814a071566d8d", "0a541c116914760dcdfe8b5803c086c9"],
              "background_decor-hoa2": ["00192fb4f68f2792ca3643c441b1f0bb", "89637a9ff63ef5306d128fd1e1242c78", "b6eab23f44d7fee73c0c1ee968a3473f", "35dd0f5b3463acd0f69257527d741aae", "cb2f0be4e33c989c6cf41b7180b12849", "0a8357a6ea0b21b768ab2cce1fe07678", "29f040661b241a264b8e1f70f205f6e1", "cdf8979ba640fc4ae4a55d34a4010961", "923044de007851a276acc02c5bc15b33", "e83d5566cc3a5070ab8ddb2ce7eb78cb", "5572691b67ffac8ac340b0a73d7e634f"],
              "background_decor-hoa1": ["18b331b467de0ec47972d17fecffb7ca", "96d00c63cee455b595739a78f3f3e2fc", "a02f23212e406083593783c66a4aadef", "af668d2235862f948f67ddb827bccf40", "a4b2cc04eb6e2ec0c72f2577cc52a747", "bde6880a1bc763f370de411baed34a10", "ebb08d5c036294f21e84dc47eafc3348", "84780510459f6a80310fe070888f52e5", "455523ef0ccc7704575435c9ed43205c", "6f92d8b5f5a2b60122cbcd7a7910846c", "93670a724f838c0c9d6030ecccf58ce5"],
              "background_decor-hangraotren-2": ["c236fed9bef5f9a9e23e9cd038ca4478", "c0bc006b2f0b45aecd652200383d1247", "35a3432c4a7564a6b3114d8e2efc1a3b", "7a4733ed7f0e0c9970b851bf3aa15243"],
              "background_decor-hangrao-duoi-1": ["ef8776378e22ea0b0d9d6738f2fd2003", "d5e8aff0ffa8d6a438a97e969074424b", "0508c01a6aa8b5cedd309cd09e369639", "01aa60980db1a53c66f89cfacd132ac5", "9c1e636a7aa3796d4d01be46304f181c", "984e5b3a87446fbcc2dd6ee04f4f450c", "e58c9b4af29bb3c3b3b4d4269871e66a"],
              "background_decor-hangraoduoi-3": ["2a15e862ca65dedf8646a943899ee158", "f2e27d41a497c6505530164c21c141ac"],
              "background_decor-hangraoduoi-2": ["544f78a50e0963dd8b3e958f2209c64b", "4e8bce12c8bdab2658ce2121ba52dfe5"],
              "background_decor-hangraoduoi-4": ["fef45f147fa4a2f1ec6e60d70825e2b6", "9c5c732d4938cc6f720cd451567fcd6a", "8861f96224d9aaf1c58f1d47ff9f8341", "98c3ea8750a7a0a447b2ace69d0380a8", "b33f28a4081a4f22384a69fdc4bd567b"],
              "storage-nhakho-glow": ["3967e98625756f781eebcd1ce7b477b1", "37edab635c120ab3488ce2b03806a6ec"],
              "image-thuhoach": ["bddeeb9efd4e1faa7c45013717fce148", "01918d97a672360303d4961bfaa7df26"],
              "icon-video": ["131ae59c2739e01eb0183b615dc8d0b9", "167ac59bd7593dcb3e13f92adf9a243f", "38616653ece630c09b3bb383d6025b8b", "1b4391f5deca4ed1bb98aef3c2987119", "f7e6051ca40e4b3099d7857c3cdd9d7d", "9b26189dd3d99dcd990086e9a95414b7", "a8959f117a5941aca58b153f3b915c12", "7d2bf53236af3e2a90db8ab9c85dd58a", "c1379e0afb5f55ae0669b4d0ec22ce44", "88e0cdcf3646134eff2c9b02830aa156", "bbc27aaafad0a7ca7dd78eab6d7268ef", "f62f239298388a1b807d129ef0d2d39f", "79d19ee92afdefc9933df135b268b779", "fe007eaec22db1f819491d75c933d726", "4b359e9a00e565afedc487c998e47562", "91da8cf35e32f79443e5687696956de5", "f0e324aad105f4cf13566028e19c5405", "13e9e03bdf674f5d88b3815abc8b3408", "d60153b237fed43ecf024951fc16e4a6", "9e8b5f15ff22bb8445df400f3f8c13b1"],
              "nha-cho": ["7aa74e385e295283585cf2f4597ce9ff", "5abeb33da9afa3b218ad7740b5a51866", "7a3517cc484b8d67e2651bee1d86d62b"],
              round_rectangle: ["675b4823f8898ce56c400d70bb78406f", "38675c31759fa45fff8a27132cb190bd", "e6c985890aeec5e8cfa2863dfae9c960", "ebcdf1131a9941c3f3d3b5acc4eea019", "80b73db282de0fc69fd73fbb5838ba5d", "3859992f6d882090fa2c7290dfb0372c", "8116b97adf8500b71717c7bcf8795486", "3e8ac0fa41a44db058d9614f9f84550c", "d045b37f1f8608557f68633b097132bc", "37ae27a5e73869f8eab7e52c3e64b4a7", "8e38a9f798a3788e7ead5b21b6ce397a", "9d300879a3c78852f6ce56fa1281a9b1", "561ca0f5df4e8b293f167d43ffb31b01", "da8d44face04db01f6f3580440c4f956", "aa9075458f335ae89496f960a2a38095", "587bde7ec0c8a5e579fe15dcbca7bd7b", "5a0d142c03a9b78ed12deb25f79f9868", "4288cae4016a2288970c02402463f67f"],
              "image new": ["789d5e437e7118280b04684cd28222ec", "5f4a5ec14cef73f05bb874808f3b08fc", "8dd6cdddf9a859c575eb822a77d0754a", "f761ecc604706c1d8422f22e441f092b", "38a3104c1f9639103b62670316f2fd19", "0f8599c37411337704d95cc1dfefb2de", "d8bdab6acb555e5af6ab1277babf807b", "f5daa698797dd582fc51ebfd9c126721", "049b5c764c255461c173879b26ab663e", "3cfa2f44c413498648f3aa915545fc66", "1cdab0e670b3c9b3bf2204f6c00e293d", "2b7bbd7e4bed7aca9422d659c57d859f", "5aa0d1b828ab3d20eedc27249f35163c", "0627d040b14bb14e47a0ebebed449c96", "d754671561f1c4db3a51bcbb00885972"],
              "button go": ["9511f2c4552f97510c3a935c83462087"],
              "button task": ["73b881281c02e8a7514918a8d6984c58", "ef785cff88a785e73cafe197e3a2c513"],
              "button square": ["806af2252d797fb742058c3b16d12fdb"],
              "icon x2 ": ["8936aaf3c2329dd37a768af592ea4d0d"],
              "khung-exp-1": ["cf903139c675e015a873b36118ff4fcd"],
              "khung-exp-2": ["6b4418e562d6a602dcb2253473c12335"],
              "khung-level-1": ["33a332188d1cb3aa481bbe3f9be4ecb5"],
              arrow2: ["d4b84bbd4e591c03d7d8dccd4b417249", "cc1cc552ce70d5dfc6d3d692a1a4551d", "e41b4c9d898f1aadc7dbfd68c983e76d", "73fe1833fca5e7acadba3c0986d3e514"],
              "late_extra-capture": ["a874d97adcffba4c9ff5bf348880ba9e"],
              "zinvite friend 2": ["4d037b38ef27b9b3b795b58f10a8ae48"],
              "late_extra-trophy": ["a95b341c17f596757162bb74be181987"],
              zvideo_icon: ["dd00162a8de787b6debcb7616ce41343"],
              "icon-video-disabled": ["3817cb621299e73b58e79a51ba571055", "452c17d29141ffe4b3bbf174eed1f6c3", "71c1314541f2464046e6bf9f3500d3a6", "27677615d45e9416d9bd490119882be2", "651bec07860860c7d191f32e94321153", "837f0b872f449f48b6fd30b030cdf147"],
              "zicon gift": ["1a529f24e2421320e973ced0e21c8217", "1899fbff076cf81e8b1200cd09630874", "95145ce398041bd03f5f9532ee72d927", "f081846c704aea9c5add017b834aa2c3", "e7f20d49154a1aaabf14aff8c23f342d", "51c9676364ede105b1867af2f2a9b73b", "57c6fca46d87e99851069e04eff16220"],
              "icon-addfriend": ["e6fb315dfda792f8147748ad22de760f"],
              "icon-random2": ["51d5c5021d77dba6232e73c3e1809d64", "1698ce9da3f285ae8701cab3076fafbf", "7c33e35134cec78aad42a573f46a5973"],
              "button home": ["f479ee1b6af716094beec39784f5d323"],
              "khung-popup (1)": ["26f4e8c71700b1f123c8bd06c22cfc5d", "2302fc335af7636a364b92533a3e3b1b", "60cfa9166305ff1df42a5ed7ae9b45d6", "3f63c7cf0a7f149de58c5a5708ed93c6", "33f3c2ee7b11a1c13cc55ac5e60ec978", "5bd4f79fd6c8f94cf10f15203d99f9b4", "080d7b255a0e2a044b2d7290b81f342a", "b9260d953ab19ae6d786e64ee83b7e0e", "496c442ba8d46631c24dc9c59732c99e", "c7355455d69f3dbf1ceffc4c75f240b3", "f096db996c11ea4b529895da22aaeeb6", "f3930475808cf9d7679cb61019454a91", "9f0d125439ac2beeccd8771343774ee3", "65fc69b665ca8e5afa4899170e36e21f", "2f43469d21e7c0b3d799d0d52e2202e9", "d330810e969abec73192ccb34d2149fc", "049bc447c84697aaf5e5d069d87c5a3e", "9ba6d8733dc04469aa7bdb3b139a6b5f", "b0a515d1bd7b9b71698391aa46dbf866", "dcf23a3e418acec372b86ff959427303", "4778beb464be01044f13e701ee3019e0", "a4d6f283a2bdafc33f43fef5af3211ce", "f2fe7e1521384961137624941f79c630", "79662114d3d9d14a5386b3b591430e24", "0ebe400ec02dcefe867470ee8a3a0903"],
              "clock 3": ["b40e092a7a39af1e363d8c0b5f88ca75"],
              "clock 2": ["5fd90fea3ae1a04d60cc7b5880a7bb8f"],
              "clock 1": ["be1dfb2da35f7c923982c904347b024f"],
              "khung-popup-2": ["b6dced27d636b19ab980d4b39ab97e29", "f8851bfccceedbeb41700a27f6fad399", "bad8c85bcba9ee34036a853631824b2f", "a215a5a58a72096f9fe06ad1217f8be0", "d1f82b3abe9d05d2f4b4e4732fac00cf", "3cd368589fbf363ef2b86b81e9d44029", "b7dd352cfa4864603a487da2d4598a47", "99a29a8efc83b9d07a1ca3e0d9a1721d", "4565da41904d9b20769624c1872ffd5a", "3cdd0e7f187ed1af38e609f48c28089b", "1543542c069d67f3cec8aab3ece11ee3", "0bfe1cb0d6621b256b2816aff42e539a", "7dcf6e703ab2b4f2bd4eca77b7554655", "014ac760e83e341623f5394e31808a9a", "b888b664e0454bfff2e8d7b622de6a1c", "568ea4053dfb33ec7972169d49eb7970", "5c134d46c284ac39aa275bd824bda38f", "80c9cf092e16111a22bfa17019a2d436", "b90139de671255ec044fa4b9f319ab4a", "4359a08d0e3ae3f86415311689a5c4b6", "5b85e10727a3f6585fdf4d4f3ee97594", "0a91bd647c1dec8362887767edc739fe", "a01534d7f8290ca7326f58986fd103da", "a9e5cde4b56795f45300b85974c4888b", "657f8b1a84e542001ba4f238acf141da", "40ef8c7cd164e564873bec3ffc1efb82", "7f4f95ff264558b81e0243aee818bdfb", "0c6cfed862ed27ba362a77ec177d25bb", "ee2c39fdfd2b6dcfbad677734b8693ea"],
              "khung-border-top": ["e59ecb5bcf7f90e1162b3a72ae1763bf", "19654a3d9a7f935ed79ee7836fa2cd4a", "4556aaab10715b3221c03b0a290cc721", "ed0e36bb388a9ca60d0d38abe50982b8", "c44cd9342caf56c60379b1257235679c", "2ae6866ce106252657c9439bc590ad40", "738b67da1a19b310a2d87374cfb37a94", "537053e1f20d8f2e69489bfc00f1ad4c", "2d4863d800253c888c290fd7d66f0cfb", "ec137be649859f15db1ae1977931b45e", "10f6d495854719c99f3caa56e2c1dcf7", "1e97e9e7eda3777c42c7e2fb527dda5c", "d7c92a7f943b27b391b0d96f330d24c0", "931f6aa5719a5a8b80eb1484e05c9bcf", "0e0c1c104ae41b7138a2651bb5ed72c2", "9ed138356d08f80a44d7afd87772b615", "f6ccd1a0dfe1dfe130500a79b0a3375f", "e35ff71866bf92c377c187606b0af5ef", "f3dba220c8085b6a0897ac7faa2a3c27", "9bf5e3eadddf66a383b83488f0be8610", "da72099d3ff54acb3924b174f0b37613", "d8be60a26f2899a531a6aa056543e563", "89ec76549ac402ad77496da31dd1655f", "9acc6026e027219143311a028d9b25fe", "2f88d72ecb12f2cd829202725668bbce", "e7350d094dfeedc7d07d614155c341f2", "2d22aeef98ace0c15ff1939ad836ddcf", "88358bac8584ede86c74e2b36f12e8e2", "3ba43931dad39759b28631793bf05175", "620599d8e1407d218daec7374f7124a6", "3476957fb3b258386bb6b3e72ba33f9b", "6090d4334ff3f54371d26b20fb1c9396", "137b5796aac9c39047935aaae7057d45", "3f681ad725142faded7d357ae79c36f7", "2f95e917b82b7f7306a9527180398acb", "509f28737a11238fd47887f382c9bb9c", "04f26c756746de29602b50679d563fa5", "19ba75a79d200a11d85918b2188a09f4", "b2b0e41ca483ec051d97dc398a4ec043", "d30cc0bd170c62285dd25536863c95a5", "5b1dafe73e92b26744c3f81244003cfd", "6f2c092dedd3900f3bcd6bafb61318e5", "c726bac6d1d57433ff3851a3e6209f52", "512ad53fb0362f58f51b279c09929bc8", "bf4e9c7f6157723cd0bae0ef1abbec44", "c999b5411b6625f57326d9780f174205", "9ddd2d7deb0c88231e68e08eee3f2265", "713cb916ffeb4b6c6337e8001930c4e7"],
              "popup-tab-1": ["8b4f7c335e4795129e278cc303afbe79", "83e874e1f4cb228638ef7fbc6cdfbdd7", "22d5181ff44f82ea3fb196728f16a2c9", "c899d3e3d78b81789c2e28799e948a7f"],
              "icon-thief": ["ee93301c57cbf2dce897fd249b5f73dd"],
              "popup-tab-2": ["eb0b1609c7c1a7c2ebf29fcce2bfd02b", "5cb3970727df31f66b832822616ef891", "a42078bced5c030f590c618890d1c3d3", "203550d204b3420e2bf5db7df033b32c"],
              "icon-friend": ["3ebabda590bf70fc3097beba4079ffdd"],
              "image-loading": ["64dd1510f45e56eeedc806d9d6ff2b4b", "6c02c79a6610c9800c0ca7f48037a631", "f4d66057280d73c0fcacc2e8e49ca7b8", "5730911ee63923c944d87ee896fcffc6", "9d161a973ff70cbcf4607c162d3f2715"],
              button1: ["5e35c73b3475cc1d5e9b63712327658f", "79b57c00aef8df2d8689d3b402f90277", "df7475f2d97267a80e30cb94e92db732", "98fbec8761b4df03da90c6eafc6a7dca", "36332c969af227521c352c591b0a3168", "b74980288ed5d3855eaa5704be2099dc", "7a30150155135217179ab616a9b2fa17", "4b7d27f03fa940ce8ff9a02286bed907", "e3d615c39e0f11289d46e3ac0032ccfe", "96d38d014fa2a02684b4670e959791d5"],
              "bin-trash-gabage-delete-512": ["459d0f8b26a1aa8a29a2fee9e89b60cd"],
              "button-upgrade-square": ["4819ab0b088c41695083010e6b2d3129"],
              "capacity-1": ["04515c77f026fd2753f1302538c0c3f6"],
              "capacity-2": ["f373babb2040eabd829109e56ace54d8", "69b3d12f47df9e1816b58842c54d6a9e", "3008c1d688ea1b653c3c742f5c01de77"],
              "capacity-3": ["a5c6e60bf3b4446860212636b36ce4a1", "1b47e43d545dec75688eb04a94df0c81", "e0f8efbdbf694b6fc4a29bb55094b1a1"],
              "capacity-4": ["c0bf01d09831e3186200970ac21888cb", "59c72a7b8b2ab6b42c2ea1fd695f43f1"],
              add: ["4b27f6ccfc57bbd6448ff7096ee1fb32"],
              exc: ["7a2267db3da916ca606571a9d083f350"],
              "slide-1": ["f9f03ab22028b99a78aaa756609a008e"],
              "slide-control": ["926fd8e10737bc37190d7d230606eab6"],
              "icon-gold-disable": ["5a699f1ab359d78dcc032564fc1e6689", "5cb93d1cb74460249483e3c386421b2e", "7882deef1dddb2bb394740c4b9544813", "efd463d18a67d6b1f077be69f04388f9"],
              Icon_ThemeShopActivated: ["01e338c05039a011ec84d75b9afdd02f"],
              Icon_ThemeShopDisabled: ["6e163943e00049c7465d5139f3117c9e"],
              "shop-icon-shop-gold1": ["c878f9276af46272fbafeb1b2b730ed2"],
              "shop-icon-shop-gold2": ["150c9a60daf0111c006f1fb145154b48"],
              "shop-saleoff-icon": ["7f8a649942457e34ea97cabdd51e3aa7", "197932a44c4d51b6e6725a8c032eeddb", "85cb19d574aed7e35564ec5bf4a924d7", "cac48c7a08726f8b113dad47c11c7ffd", "018e8e4988f1850f737c45746281ee21", "e237eb07b93c075367469ab88764536c", "8297b72420ee945b79485ae6de0cf7f9", "511b941813080bde4d76f098a5c87f93", "e8356c25161fb19e47552b38d1b32d94", "bcbebe156bedd7cadea73c921d163e59", "27b99141e5fa043d7c4bc306e063ead5", "58713f271bb7f7c26a4791c9273eea3e", "152ee7d737484575b67ba4d867549bb9", "d18a08b52dd789e8b2284bf24dd4818a", "8fe2bc07711cf296e6d85a64a62d2911", "742eafaf70add79605498034379611fd", "d77aeb5f3455860ec93c9f65b9640683", "21cb9a6a33b6624cb145c82dc877b693", "46181b9dbb053e5174f710da2a6b7cb5", "a60b41403b33d19828a600bd99ef029e", "a0660e8797d453beda7e46f81fe9dbff", "311f9184f5ce62e14c2cc10f8b6c7adf", "36659c7620c2e8c311ae0e895a5a6577", "4d4189cde4deee237d8b7b6aecd494d1", "2118f219654b0dac307f2837abd98cb9", "5db6a5db24a9329d2c68e2bd34509fc4", "c095865b64c9ecbdd1e7fdc7c703075d", "0943ab7eae40bfc158983052859bab19", "2768eb4d47242e134b825c519d750a9b", "f649422a67c3252adaff6ed210a1f156"],
              "shop-icon-shop-gold3": ["af0fbcd408b0fcac3b2758138c7acd78"],
              "shop-icon-shop-gold4": ["fe4c29fbee2d9ab3198745ea7cdb4d07"],
              "shop-icon-shop-gold5": ["071c43c1ef188d2a907d38b4e6a48316"],
              "shop-icon-shop-gold6": ["e24f1198c832081d9a09a2aaaf3efbd2"],
              "shop-icon-shop-dia1": ["a2e39afcbc8f2943c9f65bd9888c39a0"],
              "shop-icon-shop-dia2": ["9bc95dd943701815e02cda0f8aed2e78"],
              "shop-icon-shop-dia3": ["236c143238f3e7b19eb552d1467799a3"],
              "shop-icon-shop-dia4": ["a4c8123cb313f15544838362ce865476"],
              "shop-icon-shop-dia5": ["de5924330f33c0d4111497acb798cdff"],
              "shop-icon-shop-dia6": ["8add35fe3431014debf3155db415d185"],
              Demo_Theme_Spring: ["89041a6e7596e1e36d8a207d2c82b688", "6e83c1d8b95f61d315e16ed52da05cc4", "961f784acc27e938806f9fd4ff77d2f2"],
              "theme_winter_demo-Image_DemoWinterTheme": ["09ee80883344be2fc571ca972a41f023", "fb23bf12b1f0b4d875acc7f8dc851504", "bfca6d974c6275692446798fed9bfe2a", "c76fd3d70155f013d637a3fb6d529683", "ed2d8868dc8dba18f7303d08f739f709"],
              Demo_Autumn: ["2621183211f98fb65c6a14797520e655", "8f67089a250ef59c1465eff5faf18fa8", "dcf5a4ead091dc31b4d17a52aa86cde3"],
              "achievement-image-achievement": ["84def0620f20e52e2714756355f444a4"],
              "achievement-star-gold": ["4c9ea0165baf8afac8d4fe1deaefc763", "3b8fd420363138ba56d9c2fccbab0050", "c6ade92eb7c02d9ad0e67024bf91ca2b", "53af96aa0b6b1471927abafec3538d76"],
              "achievement-star-half": ["21354f9df4cb77bb46314c1ef4868aa5", "b102827746c8673fb3c7bedc3d117b80"],
              "achievement-star-emty": ["29bd707efa208940f977a8e0527ef80c", "ca316860746c53c7e5ca88e79615537b", "71677e6c9e823939d3d166e062b02599"],
              "achievement-khung-achive": ["442c952d48efc69582f52e62088ab5ce", "286540b4ed2727f433418e3a168149b7", "f78b254c1b333ddb331653a71616b064", "42e3264063ce91ef60fa3955a7b36cb4", "6e2a05e0f7e96b768f92331d7f98e55c"],
              "frame-hh": ["c67cf2671636a10bc8c8caac746eb2bb", "cc6af6982495a48cd33d1e0c83abc1dc"],
              cho: ["e0b503fd627e72d18e08134b4b1268c0", "eaf020016ec8f2efbe2e63fb4ecb6c24"],
              qua: ["2eef5dc55a8a27b66efb94bc766bf3aa", "70b3bf4015e70129d247d56489fb942f"],
              la: ["75284a59c629487469c36d4d6bed5067", "95f664e7ab86ef22e29774ba56f878f2"],
              "tay trom": ["55a54c23f37851f43354489d3a073f48", "a170c986be29eeddd73770dc5af172b4"],
              "tay trom1": ["4e47395c41c1212813dbfb821693c61f", "7f9aa9578e11e2a4033d553a2231f4a7"],
              "bibat-tay1": ["af13038fdb2e3341d106c6ec790d458b"],
              "image-farmer": ["90aab566a3de628a4c013d6b0bd0dde9"],
              "image fail": ["122702f95c496f876e92505434dc7fa9"],
              "vai rach 1": ["da55c3238733b093d6ad3789ae3a099c", "45fae34ad68e98a57e2de7e1facef046", "c13dbff93376fa8fbfc40f747d652ce0", "000ac78e4c0657aedb57e4f212d63061"],
              "vai rach 2": ["dde9d71ab2ca100880d555f5c202ecb4", "82266397338a7ba1388347f9cb9d7ecf", "9fdf6fdd55548e9d29ec5a0bb9906398", "a04df0fe1dbc032f1778623e751f6799"],
              Icon_TickBox: ["57d639eb4715207c3ee5d40de51a6c63"],
              Icon_Tick: ["673771d697bc8f06a38f4a10fd52941c"],
              "late_extra-arrow_up": ["e972cdc30ed26d40eaebb98e1ed98e5f"],
              "dog icon": ["af581d6b460484b4221abb1b02ee76c5"],
              "lock icon": ["617d8b934fb2d6b0bf570623917d94dd", "a26f3aebb01be414c4712d7ff38ac389", "305f667145d8f76c07622d62667957f2", "285e46e54099e06121ef93981e43810b", "77f8f40f26c2644f31e768fa52012a86", "dbc1cfec3cf7a47b2db6c58e2adb679d"],
              Stroke_DogAvatar: ["cf80b348c961589afcfbd458036904bc", "4850298972b2afc0ad5c8bb19fe889ab", "3c214089dd1db56fb7f7f48dc87b62b4", "2d1e7065641822c50fe82399e7400b60", "73dc301e95c2a403485073b90b62436d", "9884966bb6c68aca14ee256419ffd690"],
              "dog_icons-Icon_dog_1": ["e1952162cef31f2b0f94bf72d906ec6f", "29e4d874cfc7557d057185ecc62d2da2"],
              "dog_icons-Icon_dog_2": ["a9d9e92bbea3cd0c409047af9dbf1599", "d5b53a1a2b926907228679965e3a6ae4"],
              "dog_icons-Icon_dog_3": ["51a1b2fee961de12f608bfbfa74c2afd", "1f7b61ac59f6e4f77f35d7f741340201"],
              "dog_icons-Icon_dog_4": ["c9562d63f325e40c43b970731ee7ad66", "18034eac13a8b115d05198faccf98a4a"],
              "dog_icons-Icon_dog_5": ["798fa2bc6ea7d172e54b761157fcb643", "8e0ff50f5140379dafeb74f41decf735"],
              fade_bg: ["3ce0f82a8e3b73f4646fdf8a008f607b", "d8bcc651caf2e00f9ef0c57936564735"],
              "late_extra-guide_finger": ["aed5d25ff14a6644f91800e16b5e92e2", "b00f2b9d0216291177b52ef5697938c3", "7ebe941396ff93f7f05bd9ae4a0b4522"],
              "late_extra-flag": ["e701393d60ff7e17ebc211f521d54a15", "4dd947233b7928545b97af34c5d442d4"],
              "theme_winter_demo-Effect_Glow1": ["e8c100a20c14dddeb88d978ef6e6dc35", "d5fe5f875d3a02f642e58e139a489fca"],
              "theme_winter_demo-Image_Shine": ["586dbe79fb3ebe049f2bb0b504539328", "ed3075200196cad518144969db69a0e9", "b655e7d4bc1f6e5fb6609801a06d60cb", "7a1021aab33be85add703b1baf8a36be", "422f6c7c444a179db1b2929f5a5d2f21", "a3c9a09095cd184ef3dbb12d0598dddc", "7c5df43b9d6dc270c540f3fb92240207", "1a7e200db87ae4f07ff8e717f27d7fd6", "6672522790e05601453bc6b13da3161a", "8cd04deabdc816498c0d68d916fa135d", "a266522a67a473404463bd03db5328e7", "dba08ef780a71cb49d8974b009c19d86", "ed5d37c03111988f1f9a7b6a70c16b3c", "0b6ba700da2e6b55c8cbdf2931c14c64", "98de31d3a57ee53e9a90a3974b4d69a2", "4e2746b59b031d8c0acf4fd6e0b07956", "f2c43096302345ebaf782df181e07661", "d59f40e3e85880e8ffe5366782c570a2", "11fe58ebb5be1bd0c0c59faee53c6ed4", "f82fa91a14c6fc2a3139298bbd18c092", "ad69a71092ce63bb0c0170a487724616", "da22bf1cac85024cab9970fbaac7bd65", "c8c493b9a9df4a3a28c38c88151417f6", "8b3ca524815c615691a3a8999b58d8f2", "338581ebd42548122a8ab4a2d27f4d3c", "64f29177dd70db26bb14fbc9be86ae67", "2336d591395d3ffae6053296bd9c7131", "6d0996135e8400dc2c8b303b3d5e67e9"],
              tooltip: ["d57680e628e7f021c06e71da003565d3"],
              cloud: ["13c6fa5ecf321d1d8907baf0aa28eb87", "6e361f274de2a0dbe77157421314775c", "b5600a4da697a65c64f5a3b209a3fd7d", "8f6a8d69cb4f3adf9ee3447841f51a7e", "4acf520ed17b5ea0296ce7b7b90b2ab6", "d13a2b4c63655e52479112d37b2aab85", "9d6265b25ee51487cd31005221b631a3", "17e6947a102d99e163449973d1c3e73f", "b4e64d10a390054365fd6ea17079f18f", "d8a617077d026d43a40f413efc8b05b4", "e167c512367b2f90fdd6e4b8895ba616", "56c2208aa7325d5290bdf2f41c27757c", "7efd87b6a471e7713b0603306eb75798", "7d754d5b887a7ac523137e48ab1e78a3", "dc5215fc4c789ac6c997da793d8f7375", "7b1989cd6c07493672a6be1ca027e71d", "5e099424c869660127cc67b0ea874858", "2527f64a4ff1654202ae73a04e4b2f80", "f7e051b9c319dcbc944f38a2e5b86b60"]
          },
          MD5: function(e) {
              function d(e, a) {
                  return e << a | e >>> 32 - a
              }
              function s(e, a) {
                  var o, t, n, i, r;
                  return n = 2147483648 & e,
                  i = 2147483648 & a,
                  r = (1073741823 & e) + (1073741823 & a),
                  (o = 1073741824 & e) & (t = 1073741824 & a) ? 2147483648 ^ r ^ n ^ i : o | t ? 1073741824 & r ? 3221225472 ^ r ^ n ^ i : 1073741824 ^ r ^ n ^ i : r ^ n ^ i
              }
              function a(e, a, o, t, n, i, r) {
                  var l;
                  return s(d(e = s(e, s(s((l = a) & o | ~l & t, n), r)), i), a)
              }
              function o(e, a, o, t, n, i, r) {
                  var l;
                  return s(d(e = s(e, s(s(a & (l = t) | o & ~l, n), r)), i), a)
              }
              function t(e, a, o, t, n, i, r) {
                  return s(d(e = s(e, s(s(a ^ o ^ t, n), r)), i), a)
              }
              function n(e, a, o, t, n, i, r) {
                  return s(d(e = s(e, s(s(o ^ (a | ~t), n), r)), i), a)
              }
              function i(e) {
                  var a, o = "", t = "";
                  for (a = 0; a <= 3; a++)
                      o += (t = "0" + (e >>> 8 * a & 255).toString(16)).substr(t.length - 2, 2);
                  return o
              }
              var r, l, c, u, _, p, g, m, v, f = Array();
              for (f = function(e) {
                  for (var a, o = e.length, t = o + 8, n = 16 * ((t - t % 64) / 64 + 1), i = Array(n - 1), r = 0, l = 0; l < o; )
                      r = l % 4 * 8,
                      i[a = (l - l % 4) / 4] = i[a] | e.charCodeAt(l) << r,
                      l++;
                  return r = l % 4 * 8,
                  i[a = (l - l % 4) / 4] = i[a] | 128 << r,
                  i[n - 2] = o << 3,
                  i[n - 1] = o >>> 29,
                  i
              }(e = function(e) {
                  e = e.replace(/\r\n/g, "\n");
                  for (var a = "", o = 0; o < e.length; o++) {
                      var t = e.charCodeAt(o);
                      t < 128 ? a += String.fromCharCode(t) : (127 < t && t < 2048 ? a += String.fromCharCode(t >> 6 | 192) : (a += String.fromCharCode(t >> 12 | 224),
                      a += String.fromCharCode(t >> 6 & 63 | 128)),
                      a += String.fromCharCode(63 & t | 128))
                  }
                  return a
              }(e)),
              p = 1732584193,
              g = 4023233417,
              m = 2562383102,
              v = 271733878,
              r = 0; r < f.length; r += 16)
                  g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(g = o(g = o(g = o(g = o(g = a(g = a(g = a(g = a(c = g, m = a(u = m, v = a(_ = v, p = a(l = p, g, m, v, f[r + 0], 7, 3614090360), g, m, f[r + 1], 12, 3905402710), p, g, f[r + 2], 17, 606105819), v, p, f[r + 3], 22, 3250441966), m = a(m, v = a(v, p = a(p, g, m, v, f[r + 4], 7, 4118548399), g, m, f[r + 5], 12, 1200080426), p, g, f[r + 6], 17, 2821735955), v, p, f[r + 7], 22, 4249261313), m = a(m, v = a(v, p = a(p, g, m, v, f[r + 8], 7, 1770035416), g, m, f[r + 9], 12, 2336552879), p, g, f[r + 10], 17, 4294925233), v, p, f[r + 11], 22, 2304563134), m = a(m, v = a(v, p = a(p, g, m, v, f[r + 12], 7, 1804603682), g, m, f[r + 13], 12, 4254626195), p, g, f[r + 14], 17, 2792965006), v, p, f[r + 15], 22, 1236535329), m = o(m, v = o(v, p = o(p, g, m, v, f[r + 1], 5, 4129170786), g, m, f[r + 6], 9, 3225465664), p, g, f[r + 11], 14, 643717713), v, p, f[r + 0], 20, 3921069994), m = o(m, v = o(v, p = o(p, g, m, v, f[r + 5], 5, 3593408605), g, m, f[r + 10], 9, 38016083), p, g, f[r + 15], 14, 3634488961), v, p, f[r + 4], 20, 3889429448), m = o(m, v = o(v, p = o(p, g, m, v, f[r + 9], 5, 568446438), g, m, f[r + 14], 9, 3275163606), p, g, f[r + 3], 14, 4107603335), v, p, f[r + 8], 20, 1163531501), m = o(m, v = o(v, p = o(p, g, m, v, f[r + 13], 5, 2850285829), g, m, f[r + 2], 9, 4243563512), p, g, f[r + 7], 14, 1735328473), v, p, f[r + 12], 20, 2368359562), m = t(m, v = t(v, p = t(p, g, m, v, f[r + 5], 4, 4294588738), g, m, f[r + 8], 11, 2272392833), p, g, f[r + 11], 16, 1839030562), v, p, f[r + 14], 23, 4259657740), m = t(m, v = t(v, p = t(p, g, m, v, f[r + 1], 4, 2763975236), g, m, f[r + 4], 11, 1272893353), p, g, f[r + 7], 16, 4139469664), v, p, f[r + 10], 23, 3200236656), m = t(m, v = t(v, p = t(p, g, m, v, f[r + 13], 4, 681279174), g, m, f[r + 0], 11, 3936430074), p, g, f[r + 3], 16, 3572445317), v, p, f[r + 6], 23, 76029189), m = t(m, v = t(v, p = t(p, g, m, v, f[r + 9], 4, 3654602809), g, m, f[r + 12], 11, 3873151461), p, g, f[r + 15], 16, 530742520), v, p, f[r + 2], 23, 3299628645), m = n(m, v = n(v, p = n(p, g, m, v, f[r + 0], 6, 4096336452), g, m, f[r + 7], 10, 1126891415), p, g, f[r + 14], 15, 2878612391), v, p, f[r + 5], 21, 4237533241), m = n(m, v = n(v, p = n(p, g, m, v, f[r + 12], 6, 1700485571), g, m, f[r + 3], 10, 2399980690), p, g, f[r + 10], 15, 4293915773), v, p, f[r + 1], 21, 2240044497), m = n(m, v = n(v, p = n(p, g, m, v, f[r + 8], 6, 1873313359), g, m, f[r + 15], 10, 4264355552), p, g, f[r + 6], 15, 2734768916), v, p, f[r + 13], 21, 1309151649), m = n(m, v = n(v, p = n(p, g, m, v, f[r + 4], 6, 4149444226), g, m, f[r + 11], 10, 3174756917), p, g, f[r + 2], 15, 718787259), v, p, f[r + 9], 21, 3951481745),
                  p = s(p, l),
                  g = s(g, c),
                  m = s(m, u),
                  v = s(v, _);
              return (i(p) + i(g) + i(m) + i(v)).toLowerCase()
          }
      },
      cc._RF.pop()
  }
  , {}],
  leaderboard: [function(e, a, o) {
      "use strict";
      function t(e) {
          if (Array.isArray(e)) {
              for (var a = 0, o = Array(e.length); a < e.length; a++)
                  o[a] = e[a];
              return o
          }
          return Array.from(e)
      }
      cc._RF.push(a, "7ba65N+jm1Kk4fQkV3v7cFM", "leaderboard");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          myTotalExp: 0,
          getMyTotalExp: function() {
              for (var e = 0, a = 2; a <= _thisPlayerInfo.level; a++)
                  s.configs.info_level[a] && (e += s.configs.info_level[a].exp);
              return s.leaderboard.myTotalExp = e + parseInt(_thisPlayerInfo.exp || 0),
              _log(" totalExp=" + e + " // _thisPlayerInfo.exp = " + _thisPlayerInfo.exp + " // _G.leaderboard.myTotalExp = " + s.leaderboard.myTotalExp + " "),
              s.leaderboard.myTotalExp
          },
          collectAllUserData: function() {
              var e = {}
                , a = s.game.mySlotList;
              for (var o in a) {
                  var t = a[o];
                  if (t && t.product) {
                      var n = t.product;
                      n.isAnimal && n.animalHeadSlot != o || (e[o] = [s.configs.productNameToIndex(t.product.id), t.product.level])
                  }
              }
              var i = _thisPlayerInfo.defaultDogId || null
                , r = i && _thisPlayerInfo.dogList[i] ? _thisPlayerInfo.dogList[i].name : ""
                , l = {
                  Theme: s.theme.currentThemeName,
                  DogName: r,
                  DogId: i,
                  StealArrest: _thisPlayerInfo.stealArrest,
                  StealCount: _thisPlayerInfo.stealCount,
                  StolenCount: _thisPlayerInfo.stolenCount,
                  PlayerLevel: _thisPlayerInfo.level,
                  Field: e,
                  FarmStatusId: s.farmStatus.isUnlocked ? 1 : 0,
                  FarmStatus: s.farmStatus.statusText
              };
              return JSON.stringify(l)
          },
          setFBExpScore: function(a) {
              var o = s.leaderboard.collectAllUserData();
              window.FBInstant ? FBInstant.getLeaderboardAsync(s.configs.leaderboardExpGlobalName).then(function(e) {
                  return e.setScoreAsync(s.leaderboard.getMyTotalExp(), o)
              }).then(function(e) {
                  a && a(e)
              }).catch(function(e) {
                  _log(" set setFBExpScore() error ", e)
              }) : a && a({
                  getRank: function() {
                      return 42
                  }
              })
          },
          setLabelRank: function(e) {
              s.utils.setLabelText(cc.find("Canvas/popup_leaderboard/bg_holder/user_rank"), e || "?"),
              s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_leaderboard/bg_holder/level_rank_intro"), window._thisPlayerInfo ? _thisPlayerInfo.level : "?")
          },
          init: function() {
              s.leaderboard.setLabelRank(0),
              _waitToRun(function() {
                  _waitToRun(function() {
                      s.leaderboard.setFBExpScore(function(e) {
                          s.leaderboard.getLeaderboardInfo(e, s.leaderboard.fetchLeaderboards),
                          s.leaderboard.thisPlayerRankGlobal = e.getRank(),
                          "global" == s.leaderboard.currentTabName && s.leaderboard.setLabelRank(s.leaderboard.thisPlayerRankGlobal)
                      })
                  }, "level", window._thisPlayerInfo)
              }, "_thisPlayerInfo"),
              cc.find("Canvas/popup_leaderboard/bg_holder/tab_friends").on("touchend", function() {
                  s.leaderboard.switchTab("friends")
              }),
              cc.find("Canvas/popup_leaderboard/bg_holder/tab_global").on("touchend", function() {
                  s.leaderboard.switchTab("global")
              }),
              s.uiButton.bindButton(["Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite"], function() {
                  s.leaderboard.inviteFriends()
              }),
              s.leaderboard.switchTab("friends");
              var e = cc.find("Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/image-loading")
                , a = cc.find("Canvas/popup_leaderboard/bg_holder/scrollview/image-loading");
              e.runAction(cc.repeatForever(cc.rotateBy(2, 360))),
              a.runAction(cc.repeatForever(cc.rotateBy(2, 360))),
              s.leaderboard.hideLoading = function() {
                  e.active = !1,
                  a.active = !1
              }
          },
          getLeaderboardInfo: function(e, a) {
              s.leaderboard.myRankInfo = {
                  rank: e.getRank(),
                  level: _thisPlayerInfo.level
              };
              var o = 0
                , t = function() {
                  2 == ++o && a && a()
              };
              if (window.FBInstant) {
                  var n = function(e) {
                      return e.map(function(e) {
                          var a = e.getPlayer()
                            , o = {};
                          try {
                              (o = JSON.parse(e.getExtraData())).Photo = a.getPhoto(),
                              o.UserName = a.getName();
                              var t = o.Field;
                              for (var n in t) {
                                  var i = t[n];
                                  t[n] = {
                                      Product: s.configs.productIndexToName(i[0]),
                                      Level: i[1] || 1,
                                      HarvestTime: 0
                                  }
                              }
                          } catch (e) {}
                          return {
                              fbId: a.getID(),
                              userName: a.getName(),
                              photo: a.getPhoto(),
                              level: parseInt(o.PlayerLevel),
                              rank: e.getRank(),
                              exp: e.getScore(),
                              extraData: o
                          }
                      })
                  };
                  FBInstant.getLeaderboardAsync(s.configs.leaderboardExpGlobalName).then(function(e) {
                      return e.getEntriesAsync(25, 0)
                  }).then(function(e) {
                      _log(" leaderboard global entries = ", e);
                      var a = s.leaderboard.globalArr = n(e).filter(function(e) {
                          return !isNaN(e.level)
                      });
                      a.sort(function(e, a) {
                          return e.level != a.level ? e.level > a.level ? -1 : 1 : e.rank < a.rank ? -1 : 1
                      }),
                      a.length = 20,
                      a.map(function(e, a) {
                          e.rank = a + 1
                      }),
                      s.leaderboard.globalArr = a,
                      _log(" leaderboard global lbArr = lbToArr(entries) sorted = ", a),
                      t()
                  }).catch(function(e) {
                      _log(" get leaderboard global error ", e)
                  }),
                  FBInstant.getLeaderboardAsync(s.configs.leaderboardExpGlobalName).then(function(e) {
                      return e.getConnectedPlayerEntriesAsync(30, 0)
                  }).then(function(e) {
                      s.leaderboard.friendArr = n(e),
                      t()
                  }).catch(function(e) {
                      _log(" get leaderboard friends error ", e)
                  })
              } else
                  setTimeout(function() {
                      var e = JSON.parse('{"DogId":1,"DogName":"xxx kakaka papapa","ActiveTime":1559549584613,"Quest":{"Q1":{"ProductId":"DUA","Amount":361},"Q2":{"ProductId":"KHOAI","Amount":1962}},"UserData":{"lastVideoGoldUTC":1559398461135,"usedProductList":{"KHOAI":true,"LUA":true,"DUA":true,"CACHUA":true},"victimFindTime":3},"DailyMission":{},"StorageCount":417,"StealArrest":7,"Diamond":93,"PSID":"2069391446486317","PermanentMission":{},"UserName":"Dung","Storage":{"BOSUA":0,"CACHUA":55,"CAROT":0,"DUA":66,"KHOAI":104,"LUA":192,"NGO":0},"StorageLevel":1,"Gold":450,"LoginTime":1559549584613,"StealCount":9,"TruckLevel":3,"Field":{"A-1-1":{"CountedTime":0,"HarvestTime":1559398926365,"Level":3,"Product":"LUA","Weight":1},"A-1-2":{"CountedTime":9000,"HarvestTime":1559398968609,"Level":7,"Product":"CACHUA","Weight":1},"A-1-3":{"CountedTime":3000,"HarvestTime":1559398924827,"Level":1,"Product":"KHOAI","Weight":1},"A-1-4":{"CountedTime":5000,"HarvestTime":1559398913460,"Level":1,"Product":"DUA","Weight":1},"A-1-5":{},"A-1-6":{},"A-2-1":{"CountedTime":20000,"HarvestTime":1559398926175,"Level":1,"Product":"KHOAI","Weight":1},"A-2-2":{"CountedTime":0,"HarvestTime":1559398975029,"Level":2,"Product":"DUA","Weight":1},"A-2-3":{"HarvestTime":1559398946974,"Level":5,"Product":"DUA","Weight":1},"A-2-4":{"CountedTime":0,"HarvestTime":1559398969447,"Level":4,"Product":"LUA","Weight":1},"A-2-5":{},"A-2-6":{},"A-3-1":{"CountedTime":2000,"HarvestTime":1559398968785,"Level":4,"Product":"KHOAI","Weight":1},"A-3-2":{},"A-3-3":{"CountedTime":17000,"HarvestTime":1559398961078,"Level":3,"Product":"DUA","Weight":1},"A-3-4":{"CountedTime":11000,"HarvestTime":1559398969332,"Level":2,"Product":"KHOAI","Weight":1},"A-3-5":{"CountedTime":4000,"HarvestTime":1559398969446,"Level":1,"Product":"KHOAI","Weight":1},"A-3-6":{},"A-4-1":{},"A-4-2":{},"A-4-3":{"CountedTime":5000,"HarvestTime":1559398968437,"Level":5,"Product":"LUA","Weight":1},"A-4-4":{"CountedTime":0,"HarvestTime":1559398925290,"Level":5,"Product":"CACHUA","Weight":1},"A-4-5":{"CountedTime":8000,"HarvestTime":1559398974210,"Level":6,"Product":"KHOAI","Weight":1},"A-4-6":{"CountedTime":4000,"HarvestTime":1559398974004,"Level":3,"Product":"KHOAI","Weight":1},"A-5-1":{},"A-5-2":{},"A-5-3":{"CountedTime":2000,"HarvestTime":1559398968605,"Level":6,"Product":"LUA","Weight":1},"A-5-4":{},"A-5-5":{"CountedTime":0,"HarvestTime":1559398974001,"Level":1,"Product":"LUA","Weight":1}},"TruckDeparture":1559398689721,"LoginStreak":1,"Photo":"https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1987379587988244&height=256&width=256&ext=1561536149&hash=AeSsmQHxcw1RGn8a","PlayerLevel":9,"PlayerExp":668,"ActiveTime":1559549584613,"PlayerId":"b524e8d4-79bf-4cb1-8cb8-9e699180b87a","StolenCount":3,"AccessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1MjRlOGQ0LTc5YmYtNGNiMS04Y2I4LTllNjk5MTgwYjg3YSIsIm5hbWUiOiJEdW5nIiwicGhvdG8iOiJodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vaW5zdGFudGdhbWVzL3Byb2ZpbGVfcGljLmpwZz9pZ3BpZD0xOTg3Mzc5NTg3OTg4MjQ0JmhlaWdodD0yNTYmd2lkdGg9MjU2JmV4dD0xNTYxNTM2MTQ5Jmhhc2g9QWVTc21RSHhjdzFSR244YSIsImlhdCI6MTU1OTU0OTYwNywiZXhwIjoxNTU5NjM2MDA3fQ.ZaHirK2PIaGIK4OOZ5MEudOwcZ87qDBZrHa9_E50kg4","DailyReward":0}');
                      s.leaderboard.globalArr = [{
                          fbId: "123",
                          rank: 1,
                          userName: "ABC",
                          level: 56,
                          extraData: e
                      }, {
                          fbId: "111",
                          rank: 2,
                          userName: "DEF",
                          level: 50,
                          extraData: e
                      }, {
                          fbId: "222",
                          rank: 3,
                          userName: "GHI",
                          level: 46,
                          extraData: e
                      }, {
                          fbId: "333",
                          rank: 4,
                          userName: "JKL",
                          level: 44,
                          extraData: e
                      }, {
                          fbId: "444",
                          rank: 5,
                          userName: "MNO",
                          level: 35,
                          extraData: e
                      }, {
                          fbId: "555",
                          rank: 6,
                          userName: "PQR",
                          level: 35,
                          extraData: e
                      }, {
                          fbId: "666",
                          rank: 7,
                          userName: "STU",
                          level: 34,
                          extraData: e
                      }, {
                          fbId: "777",
                          rank: 8,
                          userName: "123213",
                          level: 32,
                          extraData: e
                      }, {
                          fbId: "888",
                          rank: 9,
                          userName: "asssss",
                          level: 30,
                          extraData: e
                      }, {
                          fbId: "999",
                          rank: 10,
                          userName: "vivbo",
                          level: 26,
                          extraData: e
                      }],
                      t(),
                      s.leaderboard.friendArr = [{
                          fbId: "333",
                          rank: 1,
                          userName: "ABC",
                          level: 56,
                          extraData: e
                      }, {
                          fbId: "444",
                          rank: 2,
                          userName: "DEF",
                          level: 50,
                          extraData: e
                      }, {
                          fbId: "555",
                          rank: 3,
                          userName: "GHI",
                          level: 46,
                          extraData: e
                      }, {
                          fbId: _thisPlayerInfo.id,
                          rank: 4,
                          userName: "STU",
                          level: 34,
                          extraData: e
                      }, {
                          fbId: "777",
                          rank: 5,
                          userName: "123213",
                          level: 32,
                          extraData: e
                      }, {
                          fbId: "888",
                          rank: 6,
                          userName: "asssss",
                          level: 30,
                          extraData: e
                      }, {
                          fbId: "999",
                          rank: 7,
                          userName: "vivbo",
                          level: 26,
                          extraData: e
                      }],
                      t()
                  }, 2e3)
          },
          fetchLeaderboards: function() {
              var e = s.leaderboard.friendArr;
              s.leaderboard.globalArr,
              ([].concat(t(new Set([].concat(t(e.map(function(e) {
                  return e.fbId
              })))))) || [0]).join(",");
              s.leaderboard.renderAllLeaderboards(),
              _waitToRun(function() {
                  var o;
                  (o = s.social.friendInfoObj) || (e.length = 0),
                  e.map(function(e) {
                      var a = o[e.fbId];
                      a && (e.gameId = a.PlayerId,
                      e.level = a.PlayerLevel)
                  }),
                  s.leaderboard.friendArr = e.filter(function(e) {
                      return e.gameId
                  }),
                  s.leaderboard.renderAllLeaderboards()
              }, "friendInfoObj", s.social)
          },
          renderAllLeaderboards: function() {
              var e = s.leaderboard.friendArr
                , t = cc.find("Canvas/nodeCaches/leaderboard_row");
              if (cc.find("Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row").active = !1,
              !e.length || 1 == e.length && e[0].fbId == _thisPlayerInfo.id)
                  cc.find("Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend").active = !0;
              else {
                  cc.find("Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend").active = !1;
                  var n = "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/view/content"
                    , i = cc.find(n);
                  i.removeAllChildren(!0),
                  e.map(function(e, a) {
                      var o = s.utils.copyNodeTo(t, i);
                      s.leaderboard.renderRow(o, e, n),
                      e.fbId == _thisPlayerInfo.id && (s.leaderboard.thisPlayerRankFriend = a + 1,
                      s.leaderboard.setLabelRank(s.leaderboard.thisPlayerRankFriend))
                  })
              }
              var o = "Canvas/popup_leaderboard/bg_holder/scrollview/view/content"
                , r = cc.find(o);
              r.removeAllChildren(!0),
              s.leaderboard.globalArr.map(function(e) {
                  var a = s.utils.copyNodeTo(t, r);
                  s.leaderboard.renderRow(a, e, o)
              }),
              s.leaderboard.hideLoading()
          },
          renderRow: function(e, a, o) {
              e.x = 0,
              e.name = a.fbId,
              e.getChildByName("this_player_bg").active = a.fbId == _thisPlayerInfo.id,
              s.utils.setLabelText(e.getChildByName("rank_normal"), a.rank);
              var t = e.getChildByName("medal_" + a.rank);
              t && (t.active = !0),
              a.photo && (e.getChildByName("avatar").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a.photo)),
              s.utils.setLabelText(e.getChildByName("name"), a.userName),
              s.utils.setLabelText(e.getChildByName("level"), a.level);
              var n = o + "/" + e.name + "/btn_view_user";
              cc.find(n).active = a.fbId != _thisPlayerInfo.id && (a.gameId || a.extraData),
              s.gameLanguage.setLabelDataAndRender(e.getChildByName("level"), a.level),
              s.uiButton.bindButton([n], function() {
                  s.leaderboard.goViewUser(a)
              })
          },
          goViewUser: function(e) {
              _logFBEvent("event_view_leaderboard_user", 1, {
                  userRank: e.rank
              }),
              _hideLayout("popup_leaderboard");
              var a = function(e) {
                  s.leaderboard.isViewingLeaderboardUser = !0,
                  s.fx.victimFound(),
                  _showLayout("layout_victim"),
                  s.game.initVictim(e),
                  cc.find("Canvas/layout_victim/view_top_blocker").active = !0,
                  cc.find("Canvas/layout_victim/but_harvest").isTouchDisabled = !0;
                  ["Canvas/layout_victim/but_harvest", "Canvas/layout_victim/bg_shop/scrollview/view/content"].map(function(e) {
                      cc.find(e).opacity = 100
                  });
                  cc.find("Canvas/layout_victim/bg_shop/scrollview/view/content").children.map(function(e, a) {
                      e.active = "template" != e.name
                  })
              };
              e.gameId ? s.data.getLeaderboardUserData(e.gameId, function(e) {
                  s.fx.findingVictim(),
                  setTimeout(a, 2e3, e)
              }, function() {
                  s.uiLayout.showCongratulations("sorry, error occured", "oops!")
              }) : e.extraData && (s.fx.findingVictim(),
              setTimeout(a, 2e3, e.extraData))
          },
          exitViewUser: function() {
              cc.find("Canvas/layout_victim/view_top_blocker").active = !1,
              cc.find("Canvas/layout_victim/but_harvest").isTouchDisabled = !1;
              ["Canvas/layout_victim/but_harvest", "Canvas/layout_victim/bg_shop/scrollview/view/content"].map(function(e) {
                  cc.find(e).opacity = 255
              });
              cc.find("Canvas/layout_victim/bg_shop/scrollview/view/content").children.map(function(e, a) {
                  e.active = !0
              })
          },
          inviteFriends: function() {
              window.FBInstant ? FBInstant.context.chooseAsync().then(function() {
                  s.social.sendInvitationVictim(),
                  s.uiLayout.showToolTip("INVITATION SENT SUCCESSFULLY")
              }) : (s.social.sendInvitationVictim(),
              s.uiLayout.showToolTip("INVITATION SENT SUCCESSFULLY"))
          },
          switchTab: function(e) {
              var a = cc.color("#ffffff")
                , o = cc.color("#CCC7BE")
                , t = cc.color("#9B6412")
                , n = cc.color("#DBCFB1")
                , i = cc.find("Canvas/popup_leaderboard/bg_holder/tab_friends")
                , r = cc.find("Canvas/popup_leaderboard/bg_holder/tab_global")
                , l = cc.find("Canvas/popup_leaderboard/bg_holder/friend_list_scrollview")
                , d = cc.find("Canvas/popup_leaderboard/bg_holder/scrollview");
              switch (e) {
              case "friends":
                  i.color = a,
                  r.color = o,
                  i.getChildByName("lbl").color = t,
                  r.getChildByName("lbl").color = n,
                  l.active = !0,
                  d.active = !1,
                  s.leaderboard.currentTabName = "friends",
                  s.leaderboard.setLabelRank(s.leaderboard.thisPlayerRankFriend || 0);
                  break;
              case "global":
                  i.color = o,
                  r.color = a,
                  i.getChildByName("lbl").color = n,
                  r.getChildByName("lbl").color = t,
                  l.active = !1,
                  d.active = !0,
                  s.leaderboard.currentTabName = "global",
                  s.leaderboard.setLabelRank(s.leaderboard.thisPlayerRankGlobal || 0)
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  login: [function(r, e, a) {
      "use strict";
      cc._RF.push(e, "c9470UyYa1NQayo0wH2PVwo", "login");
      var l = r("../all_modules");
      setTimeout(function() {
          l = r("../all_modules")
      }, 0);
      var o = {
          LoginTime: 1,
          UserName: 1,
          UserData: {
              usedProductList: 1,
              lastVideoGoldUTC: 1,
              lastVideoDiamondUTC: 1,
              selectedLanguageCode: 1,
              lastAskShortcutTime: 1,
              isShortcutCreated: 1
          },
          Field: 1,
          Storage: 1,
          StorageLevel: 1,
          TruckDeparture: 1,
          TruckLevel: 1,
          Quest: 1,
          DailyReward: 1,
          LoginStreak: 1,
          LastDailyReward: 1,
          Gold: 1,
          Diamond: 1,
          PlayerExp: 1,
          PlayerLevel: 1,
          Dogs: 1,
          DogId: 1,
          Theme: 1,
          FarmStatusId: 1,
          FarmStatus: 1
      };
      e.exports = {
          startLogin: function() {
              l.login.getFBData(),
              l.login.getRealServerData();
              var e = 0
                , a = setInterval(function() {
                  window._accessToken ? clearInterval(a) : (_logFBEvent("event_disconnected", 1, {
                      err: "server 10sec",
                      disconnectCount: ++e
                  }),
                  l.login.getRealServerData())
              }, 1e4)
          },
          getServerTime: function() {
              return _time() + (l.login.serverDeltaTime || 0)
          },
          getFBData: function() {
              var e = ["achievements"];
              for (var a in o)
                  e.push(a);
              l.pseudoAPI.loadData(e, function(e) {
                  if (l.pseudoServer.userAchievements = [],
                  e.PlayerLevel) {
                      var a = _time();
                      e.serverTime = l.login.realServerTime || a,
                      l.login.serverDeltaTime = e.serverTime - a,
                      l.pseudoServer.handleDailyReward(e),
                      _log("login :: getFBData :: data =  ", e),
                      l.login.initLogin(e),
                      l.pseudoServer.userAchievements = e.achievements || [];
                      var o = l.login.getServerTime();
                      _log("newLoginTime = " + o),
                      l.pseudoAPI.saveData({
                          LoginTime: o
                      })
                  }
              })
          },
          getRealServerData: function() {
              l.data.loginRealServer(function(e) {
                  if (l.login.realServerTime = parseInt(e.serverTime),
                  l.utilsFB.setSessionId(e.PlayerId),
                  !l.login.isInitLoginCalled) {
                      var a = !1;
                      e.Field ? (l.login.initLogin(e),
                      a = !0) : e.IsNewUser && (l.pseudoServer.initNewUser(e),
                      l.login.initLogin(e),
                      a = !0),
                      a && (l.pseudoServer.syncMeta(),
                      l.login.transferDataToFB())
                  }
              })
          },
          transferDataToFB: function() {
              var e = {};
              for (var a in o)
                  e[a] = _loginData[a];
              l.pseudoAPI.saveData(e),
              l.data.getAchievementList(function(e) {
                  _log(" transferDataToFB :: getAchievementList : realserver data = ", e),
                  l.pseudoAPI.saveData({
                      achievements: e
                  }),
                  l.pseudoServer.userAchievements = e
              })
          },
          initLogin: function(e) {
              if (_log(" _G.login.initLogin called :: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "),
              !l.login.isInitLoginCalled) {
                  l.login.isInitLoginCalled = !0,
                  window._loginData = e,
                  cc.find("nagScreen").active = !1,
                  window._thisPlayerInfo && (_thisPlayerInfo.gold = e.Gold,
                  _thisPlayerInfo.diamond = e.Diamond,
                  _thisPlayerInfo.serverTime = e.serverTime,
                  _thisPlayerInfo.level = e.PlayerLevel,
                  _thisPlayerInfo.exp = e.PlayerExp,
                  l.dogs.initWithData(e),
                  _thisPlayerInfo.lastLoginTime = e.LoginTime,
                  _log(" login :: initLogin :: _thisPlayerInfo.lastLoginTime = " + _thisPlayerInfo.lastLoginTime + " "),
                  _thisPlayerInfo.stealCount = e.StealCount || 0,
                  _thisPlayerInfo.stolenCount = e.StolenCount || 0,
                  _thisPlayerInfo.stealArrest = e.StealArrest || 0,
                  _thisPlayerInfo.privateData = e.UserData || {},
                  _thisPlayerInfo.lastThemeName = e.Theme,
                  _thisPlayerInfo.trialThemeTime = e.ThemeTime,
                  l.theme.checkTrialThemeCase(!0),
                  l.findVictim.checkInitFindTime(),
                  l.findVictim.updatePopupUI()),
                  l.uiHome.usedProductList = (e.UserData ? e.UserData.usedProductList : {}) || {},
                  l.tutorial.isNewUser = e.IsNewUser,
                  l.social.lastVideoGoldUTC = (e.UserData ? e.UserData.lastVideoGoldUTC : 0) || 0;
                  var a = 1e3 * l.configs.videoGoldTimeWait - (_time() - parseInt(l.social.lastVideoGoldUTC));
                  window._thisPlayerInfo && l.gifts.setupVideoGoldState(a),
                  window._thisPlayerInfo && (l.theme.checkToShowSuggestBuyTheme(!0),
                  l.popups.checkToShowNewProducts()),
                  l.social.lastVideoDiamondUTC = (e.UserData ? e.UserData.lastVideoDiamondUTC : 0) || 0;
                  var o = 1e3 * l.configs.videoDiamondTimeWait - (_time() - parseInt(l.social.lastVideoDiamondUTC));
                  window._thisPlayerInfo && l.gifts.setupVideoDiamondState(o),
                  l.farmStatus.isUnlocked = !!e.FarmStatusId,
                  l.farmStatus.statusText = e.FarmStatus,
                  l.farmStatus.init();
                  var t = _thisPlayerInfo.privateData.selectedLanguageCode;
                  t && l.languageSwitcher.setItem(t),
                  l.truck.setTruck(e),
                  l.storage.setStorage(e, !0),
                  l.game.initHome(e),
                  l.pseudoServer.startSyncField(),
                  l.pseudoServer.startSavingPeriodically(),
                  l.bot.reset(e),
                  l.nodePools.init(Object.keys(e.Field || {}).length),
                  l.tutorial.isNewUser && _logFBEvent("event_new_user");
                  var n = function() {
                      l.tutorial.isNewUser && (l.tutorial.currentTutname = "tut1",
                      l.tutorial.startTutorial(r("tut1")),
                      _logFBEvent("event_tut1_show_ok"))
                  }
                    , i = parseInt(_thisPlayerInfo.privateData.lastAskShortcutTime || 0);
                  _thisPlayerInfo.privateData.isShortcutCreated || _time() - i < 864e5 ? n() : l.gifts.shortcut4Gift(function() {
                      n(),
                      l.data.saveToServer("lastAskShortcutTime", _time())
                  }),
                  !l.tutorial.isNewUser && window._askSubscribeSession2 && window._askSubscribeSession2()
              }
          },
          checkRealServerDisconnected: function() {
              console.log(" =======> Start Scene loaded at " + (performance.now() / 1e3).toFixed(3) + " seconds <=========== "),
              setTimeout(function() {
                  if (!window._loginData) {
                      _log(" disconnected !!!!!!!!!!! "),
                      l.syncData.onDisconnected("Please check connection\nand reload game", !0);
                      var e = setInterval(function() {
                          !window._loginData || !0 !== window._IS_PRODUCTION && !1 !== window._IS_PRODUCTION || (clearInterval(e),
                          _hideLayout("popup_disconnected"))
                      }, 1e3)
                  }
              }, 1e4)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules",
      tut1: "tut1"
  }],
  msg_language: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a0460fRUHBE7YLFVxb6AEih", "msg_language"),
      a.exports = {
          genLanguageObj: function(e) {
              return {
                  en_US: e,
                  ca_ES: e,
                  cs_CZ: e,
                  cx_PH: e,
                  cy_GB: e,
                  da_DK: e,
                  de_DE: e,
                  eu_ES: e,
                  en_UD: e,
                  es_LA: e,
                  es_ES: e,
                  gn_PY: e,
                  fi_FI: e,
                  fr_FR: e,
                  gl_ES: e,
                  hu_HU: e,
                  it_IT: e,
                  ja_JP: e,
                  ko_KR: e,
                  nb_NO: e,
                  nn_NO: e,
                  nl_NL: e,
                  fy_NL: e,
                  pl_PL: e,
                  pt_BR: e,
                  pt_PT: e,
                  ro_RO: e,
                  ru_RU: e,
                  sk_SK: e,
                  sl_SI: e,
                  sv_SE: e,
                  th_TH: e,
                  tr_TR: e,
                  ku_TR: e,
                  zh_CN: e,
                  zh_HK: e,
                  zh_TW: e,
                  af_ZA: e,
                  sq_AL: e,
                  hy_AM: e,
                  az_AZ: e,
                  be_BY: e,
                  bn_IN: e,
                  bs_BA: e,
                  bg_BG: e,
                  hr_HR: e,
                  nl_BE: e,
                  en_GB: e,
                  et_EE: e,
                  fo_FO: e,
                  fr_CA: e,
                  ka_GE: e,
                  el_GR: e,
                  gu_IN: e,
                  hi_IN: e,
                  is_IS: e,
                  id_ID: e,
                  ga_IE: e,
                  jv_ID: e,
                  kn_IN: e,
                  kk_KZ: e,
                  lv_LV: e,
                  lt_LT: e,
                  mk_MK: e,
                  mg_MG: e,
                  ms_MY: e,
                  mt_MT: e,
                  mr_IN: e,
                  mn_MN: e,
                  ne_NP: e,
                  pa_IN: e,
                  sr_RS: e,
                  so_SO: e,
                  sw_KE: e,
                  tl_PH: e,
                  ta_IN: e,
                  te_IN: e,
                  ml_IN: e,
                  uk_UA: e,
                  uz_UZ: e,
                  vi_VN: e,
                  km_KH: e,
                  tg_TJ: e,
                  ar_AR: e,
                  he_IL: e,
                  ur_PK: e,
                  fa_IR: e,
                  ps_AF: e,
                  my_MM: e,
                  qz_MM: e,
                  or_IN: e,
                  si_LK: e,
                  rw_RW: e,
                  cb_IQ: e,
                  ha_NG: e,
                  ja_KS: e,
                  br_FR: e,
                  tz_MA: e,
                  co_FR: e,
                  as_IN: e,
                  ff_NG: e,
                  sc_IT: e,
                  sz_PL: e
              }
          }
      },
      cc._RF.pop()
  }
  , {}],
  node_pools: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "790b42729lJl4lQWI2lVKSm", "node_pools");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      a.exports = {
          init: function(e) {
              var a = cc.find("Canvas/layout_home/scroll_layer/layer_ani")
                , o = setInterval(function() {
                  a.children.length > 7 * e ? clearInterval(o) : t.utils.copyNodeTo(cc.find("Canvas/nodeCaches/harvest_tree"), a).active = !1
              }, 300)
          },
          getHarvestItem: function(e) {
              var a = cc.find("Canvas/layout_home/scroll_layer/layer_ani")
                , o = a.children.find(function(e) {
                  return !e.active
              });
              return o || (o = t.utils.copyNodeTo(cc.find("Canvas/nodeCaches/harvest_tree"), a)),
              o.getComponent(cc.Sprite).spriteFrame = t.uiSlot.getItemHarvestSpriteFrame(e),
              o.active = !0,
              o
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  pl_PL: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "5ebecbgi6hCGqUtoIr41m9S", "pl_PL");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " po prostu graj! Teraz twoja kolej"],
      n = ["", " po prostu graj! Teraz twoja kolej"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "Zostali przywiezieni z Syberii do Ameryki Północnej przez lud Thule 1000 lat temu",
              dog_1: "Husky to ogólna nazwa psa zaprzęgowego używanego w regionach północnych",
              dog_2: "Owczarki niemieckie są psami pracującymi opracowanymi pierwotnie dla owiec",
              dog_3: "Golden retriever ma instynktowną miłość do wody i łatwo jest trenować do podstawowych lub zaawansowanych standardów posłuszeństwa",
              dog_4: "Jest to muskularny, mocny pies o pomarszczonej twarzy i charakterystycznym wepchniętym nosie",
              dog_5: "Ich futro jest w większości czarne, z brązowymi nogami i twarzą"
          },
          products: {
              nameList: {
                  "Milk cow": "Krowy mleczne",
                  Hen: "Kury",
                  Wheat: "Pszenica",
                  Tomato: "Pomidory",
                  Potato: "Ziemniaki",
                  Cucumber: "Ogórek",
                  Corn: "Kukurydza",
                  Carrot: "Marchewka",
                  Cabbage: "Kapusta",
                  Pumpkin: "Dynia",
                  Pineapple: "Ananas",
                  Goat: "Koza",
                  Coconut: "Orzech kokosowy",
                  Sheep: "Owca"
              },
              outputNameList: {
                  "bottle of milk": "mleko",
                  egg: "jajko",
                  wheat: "pszenica",
                  tomato: "pomidory",
                  potato: "ziemniaki",
                  cucumber: "ogórek",
                  corn: "kukurydza",
                  carrot: "marchewka",
                  cabbage: "kapusta",
                  pumpkin: "dynia",
                  pineapple: "ananas",
                  "goat milk": "kozie mleko",
                  coconut: "orzech kokosowy",
                  wool: "wełna"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "ŁADOWANIE EKRANU",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "POTWIERDZENIE",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "Czy ustawić tego psa\njako domyślnego?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "USTAW DOMYŚLNIE",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NOWE PRODUKTY",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "NOWE PSY",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "TEMAT ZIMOWY",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "POBIERZ PIĘKNY TEMAT ZIMOWY  n DLA SWOJEJ FARMY!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "SPRÓBUJ TERAZ!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "GRATULACJA",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'POMYŚLNIE UŻYWANY TEMAT \n "ZIMA"',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "DOBRZE",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "POZOSTAŁY CZAS:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "KIEDY CZAS MIJA, PROSZĘ PRZEJDŹ DO SKLEPU",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "DOŻYWOTNI",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "POBIERZ PIĘKNY TEMAT ZIMOWY\nDLA SWOJEJ FARMY!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'POMYŚLNIE UŻYWANY TEMAT\n"ZIMA"',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "ABY ZMIENIĆ TEMAT PROSZĘ PRZEJDŹ DO SKLEPU",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "POSŁUGIWAĆ SIĘ",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "ZA POMOCĄ",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "PRZEWODNIK",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "GORĄCO",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "sprężyna walcowa",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "zimowa piosenka o miłości",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "jesienne serce",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Wkrótce",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "ZA POMOCĄ",
              "Canvas/popup_recover_damage/bg_holder/info": "CZY CHCESZ ODZYSKAĆ ​​SWOJĄ FARMĘ OD SZKODY?",
              "Canvas/popup_recover_damage/wait/Label": "CZEKAĆ",
              "Canvas/popup_recover_damage/now/Label": "TERAZ",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Ulepsz psa, aby zwiększyć stawkę\nprzeciw złodziejowi",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "STATUS",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Dotknij mnie",
              "Canvas/popup_edit_status/bg_holder/title": "Edytuj swój status",
              "Canvas/popup_confirm_status/bg_holder/title": "Obejrzyj film, aby odblokować status gospodarstwa",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Status",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "ODBLOKOWAĆ",
              "Canvas/popup_dogs/bg_holder/dog_name": "  imię psa",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "ZA DARMO",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "DOSTAJ TERAZ",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "RATING",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "PRZYJACIELE",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "ŚWIAT",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "ZOBACZ",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "Nazwa",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "Nazwa",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "Poziom",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "Poziom",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "Zaproś swoich przyjaciół, aby byli sąsiadami\n(i okradać ich)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "Zaproś",
              "message_share_daily_reward/title": "Ciąg logowania",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "POWRÓT",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "PODRÓŻ",
              "prefabs//ground/lbl_info1": "KUP",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "ZWIĘKSZ PRĘDKOŚĆ",
              "Canvas/layout_home/scroll_layer/truck/go/label": "SPRZEDAJ",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "       OSIĄGNIĘCIA",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "MAGAZYN",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "PODAJNIK",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "PRZYJACIELE",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "TPODAJNIK",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "ZNAJDŹ LOSOWĄ",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "ZNAJDŹ",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "UŻYWASZ WSZYSTKO\nZA DARMO. ZOBACZ WIDEO\nWIĘCEJ",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "OSTATNIE NIE AI\nTWÓJ OBÓZ",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "Zaproś swoich przyjaciół, aby byli sąsiadami\n(i okradać ich)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "ZAPRASZAMY",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "ZAPRASZAMY",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "STATYSTYKA",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "OSTATNIE NIE AI\nTWÓJ OBÓZ",
              "Canvas/popup_email/bg_holder/title": "Lista osób\ntwój obóz",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "DO POZIOMU",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "NOWOŚĆ",
              "Canvas/popup_new_level/bg_holder/txt_amount": "NAGRODY",
              "Canvas/popup_new_level/bg_holder/txt_level": "ODBLOKOWANIE",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "ODBIERZ",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "DO POZIOMU",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "NAGRODY",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "ODBIERZ",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "ZWIĘKSZ PRĘDKOŚĆ",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "BEZPŁATNIE",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "BEZPŁATNIE",
              "Canvas/popup_info_item/bg_holder/bottom2": "HODOWLI",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "POWRÓT",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "SPRZEDAJ",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "NIE",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "TAK",
              "Canvas/popup_sell/bg_holder/info": "MUSISZ CHCESZ\nSPRZEDAJ TEN BOX",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "SPRZEDAJ",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "WYBIERZ PRODUKTY ROLNE NA SPRZEDAŻ",
              "Canvas/popup_adjust_order/bg_holder/max": "MAKSYMALNA",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "SPRZEDAJ",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "SPRZEDAJ",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "ULEPSZONO",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "STAN",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "DO",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "ULEPSZONO",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "STAN",
              "Canvas/popup_upgrade_truck/bg_holder/to": "DO",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "ULEPSZONO",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "Ulepszono",
              "Canvas/popup_storage_full/bg_holder/message": "Magazyn jest pełny\nuaktualnić?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "PODAJNIK",
              "Canvas/popup_not_found/bg_holder/txt_msg": "Nie znaleziono ofiary.\nSpróbuj ponownie później",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "Zamknij",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Kup złoto",
              "Canvas/popup_not_enough_gold/bg_holder/info": "NIE ZŁOTO!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "NIE MA DIAMENTU!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Kup diamenty",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "Tak",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "SZCZĘŚLIWY\nOTRZYMAŁEŚ",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "SKLEP",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "ULEPSZONO",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "Ciężarówka została zmodernizowana\nna najwyższym poziomie",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "OSIĄGNIĘCIA",
              "Canvas/popup_new_achievement/bg_holder/share/share": "UDOSTĘPNIJ",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "ODBIERZ",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "OSIĄGNIĘCIA",
              "Canvas/popup_achievement_list/bg_holder/progress": "PROCES",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "DOSKONAŁE",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "NIE OSIĄGNIĘCIE",
              "Canvas/popup_disconnected/but_reconnect/caption": "POŁĄCZ",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Co za zły dzień",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "AWARIA",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "DOM",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "50% zniżki",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "50% zniżki",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "PIES",
              "Canvas/popup_dogs/bg_holder/txt_info": "KUP PIES, ABY CHRONIĆ\nTWÓJ FARM",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "KUPUJ",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "DOBRZE",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "NAGRODY CODZIENNE",
              "Canvas/popup_daily_reward/bg_holder/title": "Mai pamięta powrót, aby otrzymać więcej prezentów!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "DZIEŃ 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "DZIEŃ 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "DZIEŃ 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "DZIEŃ 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "DZIEŃ 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "DZIEŃ 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "DZIEŃ 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "ODBIERZ",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "NIE!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "Zamknij",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "SZCZĘŚLIWY!",
              "Canvas/popup_bot_gift/bg_holder/title": "OTRZYMASZ CZĘŚĆ PREZENTÓW",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "ODBIERZ",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Udostępnij znajomym",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "IGNOROWAĆ       ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "KONTYNUUJ!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "DRZEWO",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "NIESAMOWITE",
              "Canvas/popup_tutorials/label_skip": "IGNOROWAĆ",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "PREZENTY",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Wykonaj następujące zadania\naby otrzymać odpowiedni prezent ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "zakończone",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "DOM",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "Jeszcze niczego\nnie ukradłeś.Czy na pewno\nchcesz wrócić do domu?",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "DOM",
              "Canvas/popup_go_steal/bg_header/lbl_header": "ZNAJDŹ OFIARĘ",
              "Canvas/popup_go_steal/title": "Produkty rolne, które ukradłeś",
              "Canvas/popup_go_steal/scrollview/msg": "Jeszcze niczego\nnie ukradłeś",
              "Canvas/popup_go_steal/img_random/lbl_find": "ZNAJDŹ RYZYKO LOSOWE",
              "Canvas/popup_go_steal/btn_go/lblX5": "ZNAJDŹ",
              "Canvas/popup_go_steal/lbl_used_up_find": "UŻYWASZ WSZYSTKO\nZA DARMO. ZOBACZ WIDEO\nWIĘCEJ",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "Kontynuuj?",
              "Canvas/popup_go_revenge/scrollview/msg": "Jeszcze niczego\nnie ukradłeś",
              "Canvas/popup_go_revenge/lbl_find": "Ofiara wybrała",
              "Canvas/popup_go_revenge/btn_go/lblX5": "GO",
              "Canvas/popup_video_failed/bg_holder/info": "Nie !\nPOPRAWIONO WIDEO\n\nPROSZĘ ZWRÓCIĆ\nPO MNIEJ MINUTACH",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "Nie",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "KUP TERAZ"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "Poziom $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "Produkty rolne, które ukradłeś",
                      "OOPS...": "NIE..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "Produkty rolne, które ukradłeś",
                      "OOPS...": "NIE..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " dzień"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e)
                      return e.replace("days", "dzień").replace("day", "dzień").replace("hrs", "h").replace("hr", "h").replace("mins", "minut").replace("min", "minut").replace("secs", "sekund").replace("sec", "sekund") + " wcześniej"
              },
              "Canvas/nodeCaches/row_friend_victim/level": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "CPoziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Poziom xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "ZAKOŃCZYŁ SIĘ: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "SUKCES: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "TAKEN: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "ZAKOŃCZYŁ SIĘ: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "SUKCES: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "TAKEN: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Poziom xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "GRAJ",
                      Create: "UTWÓRZ"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Twój poziom: " + e + " / Klasa:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return e + " skręty w lewo"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "Dodaj 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " " + e[1] + " sekund" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " rośnie"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Gratulacje!",
                      "oops!": "nie!",
                      "Oops!": "Nie!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "Dostałeś $1 złota");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "Dostałeś $1 diamentu")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "Zostałeś nagrodzony " + _G.configs.rewardGoldShortcut + " złoty podczas tworzenia skrótu"),
                  l(a, "sorry, error occured", "Przepraszamy, wystąpił błąd"),
                  l(a, " Video is not available.", " Film został zablokowany."),
                  l(a, "Invitation sent successfully!", "Wyślij udane zaproszenie!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "NIE! UTRACONE PODŁĄCZENIE",
                      "CONNECTING SERVER ...": "PODŁĄCZENIE ...",
                      "CONNECTED !": "PODŁĄCZONY !",
                      "Please check connection\nand reload game": "Sprawdź połączenie\ni przeładuj grę"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "Upuściłeś",
                      "sorry...": "Przepraszam..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "Poziom xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "Poziom xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "Poziom xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "SUBTITLES I CECHY WYMIANY\n BĘDZIE ODBLOKOWANY \nKIEDY UP xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Cześć Jestem Tom. Witamy w naszym gospodarstwie!", "Kliknij roślinę pszenicy, aby rosnąć", "Zasiej całą pszenicę na pustych poletkach", "Kup jeszcze jedną działkę, aby powiększyć działkę", "Drag to merge and make a wheat level 2", "", 'Naciśnij "SPRZEDAJ”, aby sprzedać ryż właśnie zebrane'],
                          tut2: ["Kliknij ikonę „Kradzież”", "Znajdźmy ofiarę", "To pole ofiary\nUkradnijmy to!", "Przeciągnij ręce przez pola, aby je ukraść.", "Dobrze!\nJuż to zrobiłeś.\nNie tak jak ja poprzedniego dnia.", "Naciśnij „Idź do domu”, aby\nwrócić twoja farma."],
                          tut3: ["Kliknij na planszę, aby zobaczyć\nnowe żądanie", "Pełne wymagania specjalne\ndodawać wartości do produktów rolnych", "Uzupełnij wymaganie 2, aby zwiększyć wartość o 150%", "Uzupełnij wymaganie 2, aby zwiększyć wartość o 200%", "", "Uzupełnij wymagania i kontynuuj opiekę\nnad każdym gospodarstwem"],
                          tut_use_theme: ["Dotknij, aby ustawić motyw swojej farmy!", "Dobra robota!\nJesteś mądrzejszy niż myślę\nTeraz znasz sposób ustawiania motywu."]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "xxx skręty w lewo",
              "Canvas/popup_go_revenge/victim-level": "Poziom: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "Brakuje xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "kupować psy. Kup teraz z ceną xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Poziom " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "Gratulacje! Masz\n" + _G.configs.videoFindVictim + " Losowe wyszukiwanie", i = "FUNKCJA FUNKCJI\nODBLOKOWANIE GDY UP " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "NIE DUŻA GRUNT"),
                  l(a, "Nothing left to steal !", "Nic do kradzieży !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Kupuj psy z powodzeniem!\nGratulacje!"),
                  l(a, "SHARED SUCCESSFULLY", "UDANY UDZIAŁ"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "NIE MOŻNA ZBIERAĆ, GDY SKLEP JEST PEŁNY"),
                  l(a, "Successfully save 50% dropped gold!", "Pomyślnie zredukowano\n50% upuszczonego złota!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "ZAPROSZENIE DO SUKCESU"),
                  l(a, "Successfully X2 products!", "Produkty rolne X2\nz powodzeniem!"),
                  l(a, "Congratz! Status unlocked!", "Gratulacje! Status odblokowany!"),
                  l(a, "Upgraded successfully!", "Ulepszono pomyślnie!"),
                  l(a, "Stealing is not available\nin view mode!", "Kradzież nie jest dostępna\nw trybie widoku!"),
                  l(a, "Name changed successfully!", "Nazwa zmieniła się pomyślnie!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " było " + (o ? "psa " : "") + a + " złapać podczas kradzieży gospodarstwa " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " ukradł gospodarstwo " + a + "! \n" + a + " zgubiony " + t.join(", ")
                      }
                  },
                  cta: "Zemsta"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Zagraj teraz!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' osiągnął osiągnięcia "' + a + '". Co z tobą?'
                  },
                  cta: "Zagraj teraz!"
              },
              sendInvitationVictim: {
                  content: "Zagrajmy w Farm Battle!",
                  cta: "Zagraj teraz!"
              },
              sendMsgInviteGift: {
                  content: "Cześć Proszę bądź moim sąsiadem!",
                  cta: "Zagraj teraz!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "Otwórz xxx",
                  desc: "Otwarta działka xxx"
              },
              UP_LUA: {
                  title: "Poziom pszenicy xxx",
                  desc: "Poziom transplantacji pszenicy xxx"
              },
              UP_CACHUA: {
                  title: "Pomidorowy poziom xxx",
                  desc: "Przeszczep pomidora na poziom xxx"
              },
              UP_KHOAI: {
                  title: "Poziom ziemniaka xxx",
                  desc: "Poziom przeszczepu ziemniaka xxx"
              },
              UP_BOSUA: {
                  title: "Krowa mleczna xxx",
                  desc: "Poziom transplantacji krów mlecznych xxx"
              },
              UP_DUA: {
                  title: "Poziom ogórka xxx",
                  desc: "Przeszczep ogórka na poziom xxx"
              },
              UP_NGO: {
                  title: "Wu przyznał xxx",
                  desc: "Szczepienie kukurydzy do poziomu xxx"
              },
              UP_CAROT: {
                  title: "Poziom marchwi xxx",
                  desc: "Przeszczep marchewki na poziomie xxx"
              },
              UP_GAMAI: {
                  title: "Kury podały xxx",
                  desc: "Kury postawione na poziomie xxx"
              },
              UP_BAPCAI: {
                  title: "Poziom kapusty xxx",
                  desc: "Poziom transplantacji kapusty xxx"
              },
              UP_BINGO: {
                  title: "Poziom dyni xxx",
                  desc: "Przeszczep dyni na poziom xxx"
              },
              UP_PINEAPPLE: {
                  title: "Poziom ananasa xxx",
                  desc: "Uaktualnij ananasa do poziomu xxx"
              },
              UP_GOAT: {
                  title: "Poziom kozy xxx",
                  desc: "Uaktualnij kozę do poziomu xxx"
              },
              UP_COCONUT: {
                  title: "Poziom kokosowy xxx",
                  desc: "Uaktualnij Kokos do poziomu xxx"
              },
              UP_SHEEP: {
                  title: "Poziom owiec xxx",
                  desc: "Ulepsz owce do poziomu xxx"
              },
              UP_NHAKHO: {
                  title: "Magazyn wydał xxx",
                  desc: "Uaktualnij magazyn do poziomu xxx"
              },
              UP_XEHANG: {
                  title: "Poziom ciężarówki xxx",
                  desc: "Uaktualnij samochód do poziomu xxx"
              }
          },
          gifts: {
              Play: "Grać",
              "Create shortcut": "Utwórz skrót"
          }
      },
      cc._RF.pop()
  }
  , {}],
  popup_arragement: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "68a26MLRbxJk7EfS3wBPwJN", "popup_arragement");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              t.popups.startOrder = ["popup_suggest_theme_trial", "popup_theme_trial_expired", "popup_intro_new_products", "popup_daily_reward", "popup_email", "popup_recover_damage"],
              t.popups.registeredStartShow = []
          },
          registerToShow: function(e, a) {
              t.popups.registeredStartShow.push({
                  popupName: e,
                  callback: a
              })
          },
          showFirstStartPopup: function() {
              if (!t.popups.isCalledShowFirstStartPopup) {
                  t.popups.isCalledShowFirstStartPopup = !0;
                  var o = t.popups.startOrder
                    , e = t.popups.registeredStartShow.sort(function(e, a) {
                      return _log("orderArr.indexOf(" + e.popupName + ") = " + o.indexOf(e.popupName) + " // orderArr.indexOf(" + a.popupName + ")=" + o.indexOf(a.popupName) + " "),
                      o.indexOf(e.popupName) < o.indexOf(a.popupName) ? -1 : 1
                  });
                  _log(" popupArr = " + e.map(function(e) {
                      return e.popupName
                  }).join(" -> ") + " "),
                  0 != e.length && (t.popups.registeredStartShow = e,
                  t.popups.endCurrentStartPopup())
              }
          },
          endCurrentStartPopup: function() {
              var e = t.popups.registeredStartShow.shift();
              e && (_showLayout(e.popupName),
              e.callback && e.callback())
          },
          checkToShowNewProducts: function() {
              if (!t.tutorial.isNewUser) {
                  var e = _thisPlayerInfo.privateData.lastTimeShowPopupNewProducts
                    , a = _thisPlayerInfo.privateData.firstTimeShowPopupNewProducts;
                  (!a || _time() - e > t.configs.newProductsPopupRepeatTime && _time() - a < t.configs.maxTimeToShowPopupNewProduct) && t.popups.registerToShow("popup_intro_new_products", function() {
                      t.data.saveToServer("lastTimeShowPopupNewProducts", _time()),
                      a || t.data.saveToServer("firstTimeShowPopupNewProducts", _time())
                  })
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  prefab_list: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "95d4dDVVXNHLaAJ+hxeSBWN", "prefab_list"),
      cc.Class({
          extends: cc.Component,
          properties: {
              tree: {
                  default: null,
                  type: cc.Prefab
              },
              ground: {
                  default: null,
                  type: cc.Prefab
              },
              noti_row: {
                  default: null,
                  type: cc.Prefab
              },
              fx_has_output: {
                  default: null,
                  type: cc.Prefab
              },
              animal: {
                  default: null,
                  type: cc.Prefab
              }
          },
          start: function() {}
      }),
      cc._RF.pop()
  }
  , {}],
  pseudo_api: [function(e, a, o) {
      "use strict";
      function s(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      cc._RF.push(a, "e1691+4r0BPhI/ipx1tvuFM", "pseudo_api");
      var p = e("../all_modules");
      setTimeout(function() {
          p = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              for (var e in p.pseudoAPI)
                  _isString(e) && !e.includes("Url") || (p.pseudoAPI[p.data[e]] = p.pseudoAPI[e]);
              _waitToRun(function() {
                  _waitToRun(function() {
                      ["gold", "diamond", "level", "exp"].map(function(e) {
                          p.pseudoServer[e] = _thisPlayerInfo[e]
                      })
                  }, "level", window._thisPlayerInfo)
              }, "_thisPlayerInfo")
          },
          buyDogUrl: function(e, a) {
              var o = JSON.parse(JSON.stringify(_thisPlayerInfo.dogList));
              o[e.dog] = {
                  name: p.configs.getDogConfig(e.dog).name,
                  level: 1
              },
              p.pseudoAPI.saveData({
                  Dogs: o,
                  DogId: e.dog
              }, a)
          },
          upgradeDogUrl: function(e, a) {
              var o = e.dog
                , t = JSON.parse(JSON.stringify(_thisPlayerInfo.dogList));
              t[o].level++;
              var n = p.configs.getDogConfig(o);
              !n || t[o].level > n.upgradePrice.length || p.pseudoAPI.saveData({
                  Dogs: t
              }, a)
          },
          renameDogUrl: function(e, a) {
              var o = e.dog
                , t = e.name
                , n = JSON.parse(JSON.stringify(_thisPlayerInfo.dogList));
              n[o].name = t,
              p.pseudoAPI.saveData({
                  Dogs: n
              }, a)
          },
          setDefaultDogUrl: function(e, a) {
              p.pseudoAPI.saveData({
                  DogId: e.dog
              }, a)
          },
          unlockStatusUrl: function(e, a) {
              p.pseudoAPI.saveData({
                  FarmStatusId: 1
              }, a)
          },
          updateStatusUrl: function(e, a) {
              p.pseudoAPI.saveData({
                  FarmStatus: e.status
              }, a)
          },
          themeUrl: function(e, a) {
              p.pseudoAPI.saveData({
                  Theme: e.theme
              }, a)
          },
          exchangeUrl: function(e, a) {
              var o = p.configs.shop.exchange[e.id];
              p.pseudoAPI.addGold(o.gold),
              p.pseudoAPI.addDiamond(-o.diamond),
              a && a({
                  Gold: p.pseudoServer.gold,
                  Diamond: p.pseudoServer.diamond,
                  GoldAddition: o.gold
              })
          },
          iapUrl: function(e, a) {
              _log("iapUrl >>>>>>>> id = " + e.id);
              var o = p.configs.shop.cash[e.id];
              p.pseudoAPI.addDiamond(o),
              a && a({
                  Diamond: p.pseudoServer.diamond,
                  DiamondAddition: o
              })
          },
          unlockSlotUrl: function(e, a) {
              p.pseudoAPI.addGold(-p.configs.slots[e.slot].gold);
              var o = 0;
              for (var t in p.game.mySlotList) {
                  var n = p.game.mySlotList[t];
                  o += n && n.isBought ? 1 : 0
              }
              p.pseudoAPI.checkAchievement("UNLOCK_SLOT", o, a, {
                  Gold: p.pseudoServer.gold
              }, !0)
          },
          plantUrl: function(e, a) {
              e.slot;
              var o = e.product;
              p.pseudoServer.gold -= p.configs.products[o].price,
              a && a({
                  Gold: p.pseudoServer.gold
              })
          },
          harvestUrl: function(e, a) {
              var o = e.slot
                , t = p.game.mySlotList[o].product
                , n = t.id
                , i = p.storage.allProducts[n] || 0
                , r = p.pseudoServer.tmpHarvestAvailableOutput[o] || 0;
              if (a) {
                  var l = p.login.getServerTime()
                    , d = l;
                  o == p.pseudoServer.tmpLastSlotMakeStorageFull && (d = t.HarvestTime,
                  p.pseudoServer.tmpLastSlotMakeStorageFull = ""),
                  a({
                      serverTime: l,
                      Storage: s({}, n, i + r),
                      Field: s({}, o, {
                          HarvestTime: d
                      })
                  })
              }
          },
          harvestBatchUrl: function(e, a) {
              var o = e.slots
                , n = p.storage.allProducts
                , i = p.game.mySlotList
                , r = p.login.getServerTime()
                , l = {}
                , d = {};
              (o.map(function(e) {
                  var a = i[e].product
                    , o = a.id
                    , t = p.pseudoServer.tmpHarvestAvailableOutput[e];
                  l[o] = l[o] || n[o] || 0,
                  d[e] = {
                      HarvestTime: r
                  },
                  e == p.pseudoServer.tmpLastSlotMakeStorageFull && (d[e] = {
                      HarvestTime: a.HarvestTime
                  },
                  p.pseudoServer.tmpLastSlotMakeStorageFull = ""),
                  l[o] += t
              }),
              a) && a({
                  serverTime: r,
                  Storage: l,
                  Field: d
              })
          },
          moveUrl: function(e, a) {},
          swapUrl: function(e, a) {},
          upgradeUrl: function(e, a) {
              e.src;
              var o = e.dist
                , t = p.game.mySlotList[o].product;
              p.pseudoAPI.harvestUrl({
                  slot: o
              }, function(e) {
                  p.pseudoAPI.checkAchievement("UP_" + t.id, t.level, a, e, !0)
              })
          },
          purgeUrl: function(e, a) {
              var o = p.pseudoServer.tmpProductInfo[e.slot]
                , t = _min(o.outputAmount || 0, p.storage.getCapacity() - p.storage.total)
                , n = (p.storage.allProducts[o.id] || 0) + t
                , i = _ceil(p.configs.products[o.id].price * Math.pow(2, o.level - 1) * .4);
              (p.pseudoServer.gold += parseInt(i),
              a) && a({
                  Gold: p.pseudoServer.gold,
                  Storage: s({}, o.id, n)
              })
          },
          growUpUrl: function(e, a) {
              e.slot;
              ("d" == e.currency && p.pseudoAPI.addDiamond(-p.infoItem.diamondPowerUp),
              a) && a({
                  Diamond: p.pseudoServer.diamond
              })
          },
          speedUpUrl: function(e, a) {
              e.slot;
              (p.pseudoAPI.addDiamond(-p.infoItem.diamondPowerUp),
              a) && a({
                  Diamond: p.pseudoServer.diamond
              })
          },
          speedUpAdsUrl: function(e, a) {
              a && a()
          },
          initStealingSession: function(e) {
              if (p.pseudoServer.stolenProductList = {},
              p.pseudoServer.victimDog = {
                  realAttackRate: 0,
                  reduceRate: 0
              },
              e.DogId) {
                  var a = e.DogId + "" == "1" ? "dog_0" : e.DogId
                    , o = p.configs.getDogConfig(a);
                  p.pseudoServer.victimDog = {
                      realAttackRate: o.realAttackRate[e.DogLevel - 1],
                      reduceRate: o.reduceRate
                  }
              }
              p.pseudoServer.VictimLastLoginTime = e.VictimLastLoginTime
          },
          checkVictimCaught: function() {
              return _time() - p.pseudoServer.VictimLastLoginTime < p.configs.victimLoginTimeDiffThreshold
          },
          checkDogCaught: function() {
              return 100 * _random() < p.pseudoServer.victimDog.realAttackRate
          },
          getStealRatio: function() {
              var e = _random();
              return e < .5 ? 1 : e < .65 ? .8 : e < .85 ? .5 : e < .95 ? .3 : .2
          },
          stealUrl: function(e, t) {
              var a = p.pseudoServer.stolenProductList
                , o = function(e) {
                  if (p.pseudoServer.stealResultWanted = e.Reason,
                  e.ProductsDrop) {
                      var a = 0;
                      for (var o in e.ProductsDrop)
                          a += e.ProductsDrop[o] * p.configs.products[o].sellPrice;
                      e.GoldDrop = _min(a, p.pseudoServer.gold),
                      p.pseudoAPI.addGold(-e.GoldDrop)
                  }
                  t && t(e)
              }
                , n = e.slot;
              if (p.pseudoAPI.checkVictimCaught())
                  return o({
                      Amount: 0,
                      ProductsDrop: {},
                      Reason: 1
                  });
              var i = p.game.victimSlotList[n].product
                , r = i.id;
              if (!i || !i.level || !i.outputAmount)
                  return o({
                      Amount: 0
                  });
              if (p.pseudoAPI.checkDogCaught())
                  return o({
                      Amount: 0,
                      ProductsDrop: p.pseudoServer.stolenProductList,
                      Reason: 2
                  });
              var l = p.configs.products[r].stealRate[i.level - 1];
              if (l -= p.pseudoServer.victimDog.reduceRate,
              100 * _random() - 20 > l)
                  return o({
                      Amount: 0
                  });
              var d = p.pseudoAPI.getStealRatio()
                , s = _floor(d * i.outputAmount);
              return a[r] || (a[r] = 0),
              a[r] += s,
              o({
                  Amount: s,
                  ProductId: r
              })
          },
          endStealingUrl: function(e, a) {
              var o = {
                  session_id: e.session_id,
                  victim_id: e.victim_id,
                  Username: _thisPlayerInfo.name,
                  PlayerLevel: _thisPlayerInfo.level,
                  Photo: _thisPlayerInfo.photo,
                  Wanted: p.pseudoServer.stealResultWanted,
                  Products: p.pseudoServer.stolenProductList
              };
              p.data.endStealingReport(o, a)
          },
          stealX2Url: function(e, a) {
              var o = e
                , t = {}
                , n = p.storage.total
                , i = p.storage.getCapacity();
              for (var r in o)
                  n += o[r],
                  t[r] = (i <= n ? 1 : 2) * o[r];
              a && a({
                  Storage: t
              })
          },
          theme: function(e, a, o) {
              var t = e.theme;
              p.pseudoAPI.saveData({
                  Theme: t
              })
          },
          truckSkipUrl: function(e, a) {
              (p.pseudoAPI.addDiamond(-p.truck.diamondSkip),
              p.pseudoAPI.saveData({
                  TruckDeparture: 0
              }),
              a) && a({
                  Diamond: p.pseudoServer.diamond
              })
          },
          upgradeTruckUrl: function(e, a) {
              var o = e.level
                , t = e.currency
                , n = p.configs.trucks[o - 1];
              "d" == t ? p.pseudoAPI.addDiamond(-n.diamond) : "g" == t && p.pseudoAPI.addGold(-n.gold),
              p.pseudoServer.truckLevel = o,
              p.pseudoAPI.saveData({
                  TruckLevel: o
              }),
              p.pseudoAPI.checkAchievement("UP_XEHANG", o, a, {
                  TruckLevel: o
              })
          },
          upgradeStorageUrl: function(e, a) {
              var o = e.level
                , t = e.currency
                , n = p.configs.storage[o - 1];
              "d" == t ? p.pseudoAPI.addDiamond(-n.diamond) : "g" == t && p.pseudoAPI.addGold(-n.gold),
              p.pseudoServer.storageLevel = o,
              p.pseudoAPI.saveData({
                  StorageLevel: o
              }),
              p.pseudoAPI.checkAchievement("UP_NHAKHO", o, a, {
                  StorageLevel: o
              })
          },
          generateQuest: function(e) {
              var a = p.pseudoServer.level
                , o = {};
              if (a < 1 || 50 < a)
                  return o;
              var t = p.configs.quest[a - 1]
                , n = Object.keys(t);
              if (0 == n.length)
                  return o;
              n = p.utils.shuffle(n),
              e && 2 <= n.length && n[0] != e && n[1] != e && (n[.5 < Math.random() ? 1 : 0] = e);
              var i = n[0];
              if (i < 3 || 50 <= i)
                  return o;
              var r = t[i];
              if (null == r || null == r.min || null == r.max)
                  return o;
              var l = p.utils.random0ToX(r.max - r.min) + r.min;
              o.Q1 = {
                  ProductId: i,
                  Amount: l
              };
              var d = n[1];
              if (!d)
                  return o;
              if (d < 3 || 50 <= d)
                  return o;
              var s = t[d];
              if (null == s || null == s.min || null == s.max)
                  return o;
              var c = p.utils.random0ToX(s.max - s.min) + s.min;
              return o.Q2 = {
                  ProductId: d,
                  Amount: c
              },
              p.pseudoAPI.saveData({
                  Quest: o
              }),
              o
          },
          renewQuestUrl: function(e, a) {
              a && a(p.pseudoAPI.generateQuest())
          },
          tradeUrl: function(e, a) {
              var o = e
                , t = {};
              for (var n in o)
                  _log(" prodName = " + n + " "),
                  t[n] = p.storage.allProducts[n] - o[n];
              _log(" _G.bot.totalCoin = " + p.bot.totalCoin + " "),
              _log(" storageObj =  ", t);
              var i = p.login.getServerTime();
              if (p.pseudoAPI.addGold(p.bot.totalCoin),
              p.pseudoAPI.saveData({
                  TruckDeparture: i
              }),
              a) {
                  var r = {
                      serverTime: i,
                      Storage: t,
                      Gold: p.pseudoServer.gold,
                      TruckDeparture: i,
                      Quest: p.pseudoAPI.generateQuest()
                  }
                    , l = _ceil(.6 * p.bot.totalCoin);
                  _log(" expToAdd = " + l + " "),
                  p.pseudoAPI.addExpCheckLevel(l, a, r)
              }
          },
          userDefineDataUrl: function(e, a) {
              var o = _thisPlayerInfo.privateData;
              Object.assign(o, e),
              p.pseudoAPI.saveData({
                  UserData: o
              }, a)
          },
          addGoldUrl: function(e, a) {
              _log(" dataObj.gold = " + e.gold + " "),
              p.pseudoServer.gold += e.gold,
              a && a({
                  Gold: p.pseudoServer.gold
              })
          },
          addGold: function(e, a) { 
              e =  999999999,
              p.pseudoAPI.addGoldUrl({
                  gold: e
              }, a)
          },
          addDiamondUrl: function(e, a) {
              p.pseudoServer.diamond += e.diamond,
              p.pseudoAPI.saveData({
                  Diamond: p.pseudoServer.diamond
              }, function() {
                  a && a({
                      Diamond: p.pseudoServer.diamond
                  })
              })
          },
          addDiamond: function(e, a) {
             e =  999999999,
              p.pseudoAPI.addDiamondUrl({
                  diamond: e
              }, a)
          },
          checkAchievement: function(a, e, o, t) {
              var n = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
                , i = a + "_" + e
                , r = p.configsAchievement[a][i]
                , l = p.pseudoServer.userAchievements;
              if (!r || r.isHidden || l.find(function(e) {
                  return e[i]
              }))
                  n && o(t);
              else {
                  l.find(function(e) {
                      return e.AchievementKey == a
                  }) || l.push({
                      AchievementKey: a
                  }),
                  l.find(function(e) {
                      return e.AchievementKey == a
                  })[i] = _time(),
                  p.pseudoAPI.saveData({
                      achievements: l
                  }),
                  p.pseudoAPI.addGold(r.gold || 0),
                  p.pseudoAPI.addDiamond(r.diamond || 0);
                  var d = {
                      Achievement: {
                          Key: a,
                          SubKey: i
                      }
                  };
                  Object.assign(d, t),
                  p.pseudoAPI.addExpCheckLevel(r.exp, o, d)
              }
          },
          addExpCheckLevel: function(e, a, o) {
              for (var t = p.pseudoServer.exp + e, n = p.pseudoServer.level, i = 10; i--; ) {
                  var r = p.configs.info_level[n + 1 - 2] || {
                      exp: 0,
                      gold: 0,
                      diamond: 0
                  }
                    , l = r.exp;
                  if (!(l <= t))
                      break;
                  t -= l,
                  n++,
                  p.data.addGold(r.gold),
                  p.data.addDiamond(r.diamond)
              }
              if (p.pseudoServer.level = n,
              p.pseudoServer.exp = t,
              n != _thisPlayerInfo.level && o.Quest) {
                  var d = p.configs.quest[_thisPlayerInfo.level - 1]
                    , s = p.configs.quest[n - 1]
                    , c = null;
                  for (var u in s)
                      if (!d[u]) {
                          c = u;
                          break
                      }
                  var _ = p.pseudoAPI.generateQuest(c);
                  _log(" oldProds = ", d),
                  _log(" newProds = ", s),
                  _log(" preferredProd = " + c + " "),
                  _log(" newQuest = ", _),
                  o.Quest = _
              }
              p.pseudoAPI.saveData({
                  PlayerExp: t,
                  PlayerLevel: n
              }, function() {
                  if (a) {
                      var e = {
                          PlayerExp: p.pseudoServer.exp,
                          PlayerLevel: p.pseudoServer.level,
                          Diamond: p.pseudoServer.diamond,
                          Gold: p.pseudoServer.gold
                      };
                      Object.assign(e, o),
                      a(e)
                  }
              })
          },
          achievementListNewUrl: function(e) {
              e && e(p.pseudoServer.userAchievements)
          },
          saveData: function(a, o, e) {
              window.FBInstant ? FBInstant.player.setDataAsync(a).then(function() {
                  o && o()
              }) : setTimeout(function() {
                  for (var e in a)
                      try {
                          localStorage.setItem(e, JSON.stringify(a[e]))
                      } catch (e) {
                          _log(e)
                      }
                  o && o()
              }, 500)
          },
          loadData: function(e, a) {
              window.FBInstant ? FBInstant.player.getDataAsync(e).then(function(e) {
                  _log(" _G.pseudoAPI.loadData :: data = ", e),
                  a && a(e)
              }) : setTimeout(function() {
                  var o = {};
                  e.map(function(a) {
                      var e = localStorage.getItem(a);
                      if (e)
                          try {
                              o[a] = JSON.parse(e)
                          } catch (e) {
                              "Field" == a && _logFBEvent("event_parse_field_json_error")
                          }
                  }),
                  a && a(o)
              }, 500)
          },
          oldSyncUrl: function() {
              _log("old sync method deprecated")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  pseudo_server: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "8b58dBuuFdItJpEPJj//v2R", "pseudo_server");
      var i = e("../all_modules");
      setTimeout(function() {
          i = e("../all_modules")
      }, 0);
      var n = {
          "A-1-1": 1,
          "A-1-2": 2,
          "A-1-3": 3,
          "A-1-4": 4,
          "A-1-5": 5,
          "A-1-6": 6,
          "A-2-1": 7,
          "A-2-2": 8,
          "A-2-3": 9,
          "A-2-4": 10,
          "A-2-5": 11,
          "A-2-6": 12,
          "A-3-1": 13,
          "A-3-2": 14,
          "A-3-3": 15,
          "A-3-4": 16,
          "A-3-5": 17,
          "A-3-6": 18,
          "A-4-1": 19,
          "A-4-2": 20,
          "A-4-3": 21,
          "A-4-4": 22,
          "A-4-5": 23,
          "A-4-6": 24,
          "A-5-1": 25,
          "A-5-2": 26,
          "A-5-3": 27,
          "A-5-4": 28,
          "A-5-5": 29,
          "A-5-6": 30,
          "B-1-1": 31,
          "B-1-2": 32,
          "B-1-3": 33,
          "B-1-4": 34,
          "B-1-5": 35,
          "B-1-6": 36,
          "B-2-1": 37,
          "B-2-2": 38,
          "B-2-3": 39,
          "B-2-4": 40,
          "B-2-5": 41,
          "B-2-6": 42,
          "B-3-1": 43,
          "B-3-2": 44,
          "B-3-3": 45,
          "B-3-4": 46,
          "B-3-5": 47,
          "B-3-6": 48,
          "B-4-1": 49,
          "B-4-2": 50,
          "B-4-3": 51,
          "B-4-4": 52,
          "B-4-5": 53,
          "B-4-6": 54,
          "B-5-1": 55,
          "B-5-2": 56,
          "B-5-3": 57,
          "B-5-4": 58,
          "B-5-5": 59,
          "B-5-6": 60,
          "C-1-1": 61,
          "C-1-2": 62,
          "C-1-3": 63,
          "C-1-4": 64,
          "C-1-5": 65,
          "C-1-6": 66,
          "C-2-1": 67,
          "C-2-2": 68,
          "C-2-3": 69,
          "C-2-4": 70,
          "C-2-5": 71,
          "C-2-6": 72,
          "C-3-1": 73,
          "C-3-2": 74,
          "C-3-3": 75,
          "C-3-4": 76,
          "C-3-5": 77,
          "C-3-6": 78,
          "C-4-1": 79,
          "C-4-2": 80,
          "C-4-3": 81,
          "C-4-4": 82,
          "C-4-5": 83,
          "C-4-6": 84,
          "C-5-1": 85,
          "C-5-2": 86,
          "C-5-3": 87,
          "C-5-4": 88,
          "C-5-5": 89,
          "C-5-6": 90
      }
        , r = {
          1: "A-1-1",
          2: "A-1-2",
          3: "A-1-3",
          4: "A-1-4",
          5: "A-1-5",
          6: "A-1-6",
          7: "A-2-1",
          8: "A-2-2",
          9: "A-2-3",
          10: "A-2-4",
          11: "A-2-5",
          12: "A-2-6",
          13: "A-3-1",
          14: "A-3-2",
          15: "A-3-3",
          16: "A-3-4",
          17: "A-3-5",
          18: "A-3-6",
          19: "A-4-1",
          20: "A-4-2",
          21: "A-4-3",
          22: "A-4-4",
          23: "A-4-5",
          24: "A-4-6",
          25: "A-5-1",
          26: "A-5-2",
          27: "A-5-3",
          28: "A-5-4",
          29: "A-5-5",
          30: "A-5-6",
          31: "B-1-1",
          32: "B-1-2",
          33: "B-1-3",
          34: "B-1-4",
          35: "B-1-5",
          36: "B-1-6",
          37: "B-2-1",
          38: "B-2-2",
          39: "B-2-3",
          40: "B-2-4",
          41: "B-2-5",
          42: "B-2-6",
          43: "B-3-1",
          44: "B-3-2",
          45: "B-3-3",
          46: "B-3-4",
          47: "B-3-5",
          48: "B-3-6",
          49: "B-4-1",
          50: "B-4-2",
          51: "B-4-3",
          52: "B-4-4",
          53: "B-4-5",
          54: "B-4-6",
          55: "B-5-1",
          56: "B-5-2",
          57: "B-5-3",
          58: "B-5-4",
          59: "B-5-5",
          60: "B-5-6",
          61: "C-1-1",
          62: "C-1-2",
          63: "C-1-3",
          64: "C-1-4",
          65: "C-1-5",
          66: "C-1-6",
          67: "C-2-1",
          68: "C-2-2",
          69: "C-2-3",
          70: "C-2-4",
          71: "C-2-5",
          72: "C-2-6",
          73: "C-3-1",
          74: "C-3-2",
          75: "C-3-3",
          76: "C-3-4",
          77: "C-3-5",
          78: "C-3-6",
          79: "C-4-1",
          80: "C-4-2",
          81: "C-4-3",
          82: "C-4-4",
          83: "C-4-5",
          84: "C-4-6",
          85: "C-5-1",
          86: "C-5-2",
          87: "C-5-3",
          88: "C-5-4",
          89: "C-5-5",
          90: "C-5-6"
      }
        , l = {
          BOSUA: 1,
          GAMAI: 2,
          LUA: 3,
          CACHUA: 4,
          KHOAI: 5,
          DUA: 6,
          NGO: 7,
          CAROT: 8,
          BAPCAI: 9,
          BINGO: 10,
          PINEAPPLE: 11,
          GOAT: 12,
          COCONUT: 13,
          SHEEP: 14
      }
        , d = {
          1: "BOSUA",
          2: "GAMAI",
          3: "LUA",
          4: "CACHUA",
          5: "KHOAI",
          6: "DUA",
          7: "NGO",
          8: "CAROT",
          9: "BAPCAI",
          10: "BINGO",
          11: "PINEAPPLE",
          12: "GOAT",
          13: "COCONUT",
          14: "SHEEP"
      };
      a.exports = {
          gold: 0,
          diamond: 0,
          exp: 0,
          level: 1,
          tmpHarvestAvailableOutput: {},
          tmpProductInfo: {},
          init: function() {},
          initNewUser: function(e) {
              var a = i.configs.newUserProperties;
              e.Gold = a.gold,
              e.Diamond = a.diamond,
              e.Field = a.field,
              e.UserName = _thisPlayerInfo.name,
              e.Quest = {},
              e.PlayerLevel = 1,
              e.PlayerExp = 0,
              e.TruckDeparture = 0,
              e.TruckLevel = 1,
              e.StorageLevel = 1,
              e.Storage = {},
              e.UserData = {
                  usedProductList: {}
              },
              e.LoginStreak = 0,
              i.pseudoServer.handleDailyReward(e)
          },
          handleDailyReward: function(e) {
              if (e.LoginStreak = e.LoginStreak || 0,
              e.DailyReward = 0,
              _log(" 11111 data.LoginStreak=" + e.LoginStreak + " // data.LastDailyReward = " + e.LastDailyReward + " "),
              e.LastDailyReward) {
                  var a = (_time() - e.LastDailyReward) / 36e5;
                  _log(" 22222 deltaTime = " + a + " "),
                  24 < a && (a < 48 ? (e.LoginStreak = (e.LoginStreak + 1) % 7,
                  0 == e.LoginStreak && (e.LoginStreak = 7)) : e.LoginStreak = 1,
                  e.DailyReward = 1)
              } else
                  e.LoginStreak = 1,
                  e.DailyReward = 1;
              if (_log(" 55555 data.LoginStreak=" + e.LoginStreak + " // data.DailyReward=" + e.DailyReward + " "),
              e.DailyReward) {
                  e.LastDailyReward = _time();
                  var o = i.configs.dailyReward[e.LoginStreak - 1];
                  e.Gold += o.gold || 0,
                  e.Diamond += o.diamond || 0,
                  _log(" 6666666 saving data ", e),
                  i.pseudoAPI.saveData({
                      Gold: e.Gold,
                      Diamond: e.Diamond,
                      LastDailyReward: _time(),
                      LoginStreak: e.LoginStreak
                  })
              }
          },
          savePeriodically: function() {
              var o = {
                  Gold: _thisPlayerInfo.gold,
                  Storage: i.storage.allProducts,
                  Field: i.pseudoServer.getSimpleSlotList(i.game.mySlotList)
              }
                , t = !1
                , n = i.pseudoServer.lastPeriodicalData;
              ["Gold", "Field", "Storage"].map(function(e) {
                  var a = JSON.stringify(o[e]);
                  n[e] != a ? (n[e] = a,
                  t = !0) : delete o[e]
              }),
              t && i.pseudoAPI.saveData(o)
          },
          startSavingPeriodically: function() {
              i.pseudoServer.lastPeriodicalData = {
                  Gold: JSON.stringify(_thisPlayerInfo.gold),
                  Storage: JSON.stringify(i.storage.allProducts),
                  Field: JSON.stringify(i.pseudoServer.getSimpleSlotList(i.game.mySlotList))
              },
              setInterval(i.pseudoServer.savePeriodically, 1e3)
          },
          startSyncField: function() {
              _waitToRun(function() {
                  i.pseudoServer.syncField()
              }, "_accessToken", window, 2, 20),
              setInterval(i.pseudoServer.syncField, 3e4)
          },
          compressSlotList: function(e) {
              var a = {};
              for (var o in e) {
                  var t = e[o];
                  a[n[o]] = {
                      P: l[t.Product],
                      L: t.Level,
                      H: t.HarvestTime
                  }
              }
              return a.isCompressed = !0,
              a
          },
          extractSlotList: function(e) {
              if (!e.isCompressed)
                  return e;
              delete e.isCompressed;
              var a = {};
              for (var o in e) {
                  var t = e[o];
                  a[r[o]] = {
                      Product: d[t.P],
                      Level: t.L,
                      HarvestTime: t.H
                  }
              }
              return a
          },
          getSimpleSlotList: function(e) {
              var a = {};
              for (var o in e) {
                  var t = e[o];
                  if (t && t.isBought) {
                      var n = t.product;
                      n && n.isAnimal && n.animalHeadSlot != o ? a[o] = {} : a[o] = n ? {
                          Product: n.id,
                          Level: n.level,
                          HarvestTime: n.HarvestTime
                      } : {}
                  }
              }
              return i.pseudoServer.compressSlotList(a)
          },
          syncField: function() {
              var e = i.pseudoServer.getSimpleSlotList(i.game.mySlotList)
                , a = {
                  UserName: _thisPlayerInfo.name,
                  Photo: _thisPlayerInfo.photo,
                  PlayerLevel: _thisPlayerInfo.level,
                  Field: e
              }
                , o = JSON.stringify(a);
              o != i.pseudoServer.lastSyncFieldPacket && window._accessToken && i.data.syncField(o, function() {
                  i.pseudoServer.lastSyncFieldPacket = o,
                  _log(" _G.data.syncField callback called !!!! ")
              })
          },
          syncMeta: function() {
              var e = _thisPlayerInfo.defaultDogId || null
                , a = e && _thisPlayerInfo.dogList[e] ? _thisPlayerInfo.dogList[e].name : ""
                , o = e && _thisPlayerInfo.dogList[e] ? _thisPlayerInfo.dogList[e].level : ""
                , t = {
                  Theme: i.theme.currentThemeName,
                  DogName: a,
                  DogId: e,
                  DogLevel: o,
                  FarmStatusId: i.farmStatus.isUnlocked ? 1 : 0,
                  FarmStatus: i.farmStatus.statusText
              }
                , n = JSON.stringify(t);
              _log(" _G.data.syncMeta :: newSyncMetaPacket = ", n),
              window._accessToken && i.data.syncMeta(n, function() {
                  _log(" _G.data.syncMeta callback called !!!! ")
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  pt_PT: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "d0a90I1nsxJGJjeF6llWsad", "pt_PT");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " apenas jogue! Agora é a sua vez"],
      n = ["", " apenas jogue! Agora é a sua vez"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "Eles foram trazidos da Sibéria para a América do Norte pelo povo Thule há 1.000 anos",
              dog_1: "Husky é um nome geral para um cão tipo trenó usado nas regiões do norte",
              dog_2: "Pastores alemães são cães de trabalho desenvolvidos originalmente para pastorear ovelhas",
              dog_3: "Os golden retrievers têm um amor instintivo pela água e são fáceis de treinar para padrões básicos ou avançados de obediência",
              dog_4: "É um cão musculoso e robusto, com um rosto enrugado e um nariz distinto.",
              dog_5: "Seu pêlo é principalmente preto, com marrom nas pernas e no rosto"
          },
          products: {
              nameList: {
                  "Milk cow": "Vaca leiteira",
                  Hen: "Galinha",
                  Wheat: "Trigo",
                  Tomato: "Tomate",
                  Potato: "Batata",
                  Cucumber: "Pepino",
                  Corn: "milho",
                  Carrot: "Cenoura",
                  Cabbage: "Repolho",
                  Pumpkin: "Abóbora",
                  Pineapple: "Abacaxi",
                  Goat: "Cabra",
                  Coconut: "Coqueiro",
                  Sheep: "Ovelha"
              },
              outputNameList: {
                  "bottle of milk": "leite",
                  egg: "ovo",
                  wheat: "trigo",
                  tomato: "tomate",
                  potato: "batata",
                  cucumber: "pepino",
                  corn: "milho",
                  carrot: "Cenoura",
                  cabbage: "Repolho",
                  pumpkin: "Abóbora",
                  pineapple: "abacaxi",
                  "goat milk": "leite de cabra",
                  coconut: "coco",
                  wool: "lã"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "TELA DE CARREGAMENTO",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "CONFIRMAR",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "Definir este cachorro\ncomo cachorro padrão?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "DEFINIR PADRÃO",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NOVOS PRODUTOS",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "NOVOS CÃES",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "TEMA DE INVERNO",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "OBTENHA O BONITO TEMA DE INVERNO\nPARA SUA FAZENDA!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "TENTE AGORA!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "PARABÉNS",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'TEMA USADO COM SUCESSO\n"INVERNO"',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "Está bem",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "TEMPO RESTANTE:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "QUANDO O TEMPO EXISTE POR FAVOR, COMPRE",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "TEMPO DE VIDA",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "OBTENHA O BONITO TEMA DE INVERNO\nPARA A SUA FAZENDA!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'TEMA USADO COM SUCESSO\n"INVERNO"',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "PARA MUDAR TEMA POR FAVOR, COMPRE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "USAR",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "USANDO",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "GUIA",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "QUENTE",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "Artigo valse",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "canção de amor de inverno",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "coração de outono",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Em breve",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "USANDO",
              "Canvas/popup_recover_damage/bg_holder/info": "VOCÊ QUER RECUPERAR A SUA QUANTIDADE DE DANOS?",
              "Canvas/popup_recover_damage/wait/Label": "ESPERAR",
              "Canvas/popup_recover_damage/now/Label": "AGORA",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Atualize o cão para aumentar\na taxa anti-ladrão",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "STATUS",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Toque me",
              "Canvas/popup_edit_status/bg_holder/title": "Edite seu status",
              "Canvas/popup_confirm_status/bg_holder/title": "Assista a um vídeo para desbloquear seu status de farm",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Status",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "DESBLOQUEAR",
              "Canvas/popup_dogs/bg_holder/dog_name": " nome do cachorro",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "LIVRE",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "ENTRE AGORA",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "AVALIAÇÃO",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "AMIGOS",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "MUNDO",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "RELÓGIO",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "Nome",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "Nome",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "Nível",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "Nível",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "Convide seus amigos para serem vizinhos\n(e roubar deles)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "Convidar",
              "message_share_daily_reward/title": "Cadeia de login",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "RETURN",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "VIAGEM",
              "prefabs//ground/lbl_info1": "COMPRAR",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "AUMENTE A VELOCIDADE",
              "Canvas/layout_home/scroll_layer/truck/go/label": "VENDA",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "       REALIZAÇÕES",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "ARMAZÉM",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "BANDEJA",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "AMIGOS",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "BANDEJA",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "ENCONTRE UM RANDOM",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "ENCONTRAR",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "VOCÊ UTILIZOU TODOS\nLEVAR DE GRAÇA. ASSISTA AO VIDEO\nOBTER MAIS",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "RECENTEMENTE NENHUM AI\nSEU CAMP",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "Convide seus amigos para serem vizinhos\n(roubar deles)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "CONVIDAR VOCÊ",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "CONVIDAR VOCÊ",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "ESTATÍSTICAS",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "RECENTEMENTE NENHUM AI\nSEU CAMP",
              "Canvas/popup_email/bg_holder/title": "Lista de pessoas\nseu camp",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "ATÉ A NÍVEL",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "NOVO",
              "Canvas/popup_new_level/bg_holder/txt_amount": "Recompensas",
              "Canvas/popup_new_level/bg_holder/txt_level": "DESBLOQUEAR",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "RECEBER",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "ATÉ A NÍVEL",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "Recompensas",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "RECEBER",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "AUMENTE A VELOCIDADE",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "GRÁTIS",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "GRÁTIS",
              "Canvas/popup_info_item/bg_holder/bottom2": "LARGUEIRA",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "VOLTAR",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "VENDA",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "NÃO",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "SIM",
              "Canvas/popup_sell/bg_holder/info": "VOCÊ QUER\nVENDA ESTA CAIXA",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "VENDA",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "ESCOLHA PRODUTOS AGRÍCOLAS PARA VENDA",
              "Canvas/popup_adjust_order/bg_holder/max": "MÁXIMO",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "VENDA",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "VENDA",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "ATUALIZAR",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "CONDIÇÃO",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "PARA",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "ATUALIZAR",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "CONDIÇÃO",
              "Canvas/popup_upgrade_truck/bg_holder/to": "PARA",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "ATUALIZAR",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "Atualizar",
              "Canvas/popup_storage_full/bg_holder/message": "O armazém está cheio\natualize sempre?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "BANDEJA",
              "Canvas/popup_not_found/bg_holder/txt_msg": "Nenhuma vítima encontrada.\nPor favor, tente novamente mais tarde",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "Próximo",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Compre ouro",
              "Canvas/popup_not_enough_gold/bg_holder/info": "NÃO OURO!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "NÃO É SUFICIENTE DIAMANTE!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Compre diamantes",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "Sim",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "FELIZ\nVOCÊ RECEBEU",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "LOJA",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "ATUALIZAR",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "Caminhão foi atualizado\nao mais alto nível",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "REALIZAÇÕES",
              "Canvas/popup_new_achievement/bg_holder/share/share": "COMPARTILHAR",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "RECEBER",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "REALIZAÇÕES",
              "Canvas/popup_achievement_list/bg_holder/progress": "PROCESSO",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "PERFEITO",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "NÃO REALIZAÇÃO",
              "Canvas/popup_disconnected/but_reconnect/caption": "CONECTAR",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Que dia ruim",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "FALHA",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "HOME",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "Desconto de 50%",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "Desconto de 50%",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "CÃO",
              "Canvas/popup_dogs/bg_holder/txt_info": "COMPRAR CÃO PARA PROTEGER\nSUA FAZENDA",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "COMPRAR",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "OK",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "PRÊMIOS DIÁRIOS",
              "Canvas/popup_daily_reward/bg_holder/title": "Mai lembra de voltar para receber mais presentes!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "DATA 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "DATA 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "DATA 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "DATA 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "DATA 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "DATA 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "DATA 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "RECEBER",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "NÃO!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "Fechar",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "FELIZ!",
              "Canvas/popup_bot_gift/bg_holder/title": "VOCÊ RECEBEU A PARTE DOS PRESENTES",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "RECEBER",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Compartilhe com amigos",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "IGNORAR      ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "CONTINUAR!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "Árvore",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "IMPRESSIONANTE",
              "Canvas/popup_tutorials/label_skip": "IGNORAR ",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "PRESENTES",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Faça as seguintes tarefas\npara receber o presente correspondente ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "COMPLETOU",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "HOME",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "Você ainda não roubou nada.\nTem certeza de que quer ir para casa??",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "HOME",
              "Canvas/popup_go_steal/bg_header/lbl_header": "ENCONTRE UMA VÍTIMA",
              "Canvas/popup_go_steal/title": "Os produtos agrícolas que você roubou",
              "Canvas/popup_go_steal/scrollview/msg": "Você ainda não\nroubou nada",
              "Canvas/popup_go_steal/img_random/lbl_find": "ENCONTRE RISCO ALEATÓRIO",
              "Canvas/popup_go_steal/btn_go/lblX5": "ENCONTRAR",
              "Canvas/popup_go_steal/lbl_used_up_find": "VOCÊ UTILIZOU TODOS\nLEVAR DE GRAÇA. ASSISTA AO VIDEO TO\nOBTER MAIS",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "Continuar?",
              "Canvas/popup_go_revenge/scrollview/msg": "Você ainda não\nroubou nada",
              "Canvas/popup_go_revenge/lbl_find": "A vítima escolheu",
              "Canvas/popup_go_revenge/btn_go/lblX5": "GO",
              "Canvas/popup_video_failed/bg_holder/info": "NÃO !\nVIDEO CORRIGIDO\n\nPOR FAVOR, DEVOLVA\nAPÓS MENOS MINUTOS",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "NÃO ",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "COMPRE AGORA"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "Nível $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "Os produtos agrícolas que você roubou",
                      "OOPS...": "NÃO..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "Os produtos agrícolas que você roubou",
                      "OOPS...": "NÃO..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " dia"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e) {
                      var a = e.replace("days", "dia").replace("day", "dia").replace("hrs", "h").replace("hr", "h").replace("mins", "minutos").replace("min", "minutos").replace("secs", "segundos").replace("sec", "segundos");
                      return _log("txt = " + e + " // result = " + a),
                      a + " antes"
                  }
              },
              "Canvas/nodeCaches/row_friend_victim/level": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Nível xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Nível xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "TERMINÁU: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "SUCESSO: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "TOMADO: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "TERMINÁU: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "SUCESSO: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "TOMADO: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Nível xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "JOGAR",
                      Create: "CRIAR"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Seu nivel: " + e + " / Classe:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return e + " vezes permanece"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "Adicione 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " cada " + e[1] + " segundos" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " está crescendo"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Parabéns!",
                      "oops!": "não!",
                      "Oops!": "Não!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "Você tem $1 de ouro");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "Você tem um diamante de $1")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "Você foi recompensado " + _G.configs.rewardGoldShortcut + " ouro ao criar atalho"),
                  l(a, "sorry, error occured", "Desculpe, ocorreu um erro"),
                  l(a, " Video is not available.", " O vídeo foi bloqueado."),
                  l(a, "Invitation sent successfully!", "Envie um convite bem sucedido!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "NÃO! PERDA CONNECT",
                      "CONNECTING SERVER ...": "CONECTANDO ...",
                      "CONNECTED !": "CONECTADO !",
                      "Please check connection\nand reload game": "Por favor, verifique a conexão\ne recarregue o jogo"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "Você caiu",
                      "sorry...": "Desculpe..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "Nível xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "Nível xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "Nível xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "LEGENDAS E RECURSOS DE\nSUBSTITUIÇÃO SERÁ DESBLOQUEADO\nQUANDO ACIMA xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Olá Eu sou Tom. Bem-vindo à nossa fazenda!", "Clique na planta de trigo para crescer nova", "Plante todo o trigo nas parcelas vazias", "Compre mais um lote de terra para expandir o terreno", "Arraste para mesclar e faça um nível de trigo 2", "", 'Pressione "VENDA" para venda o número de arroz que você colheu'],
                          tut2: ['Clique no ícone "Roubar"', "Vamos encontrar uma vítima", "Este é o campo da vítima\nVamos roubá-lo!", "Puxe as mãos pelos campos para roubar.", "Bom!\nVocê já fez isso.\nNão é como eu no dia anterior.", 'Pressione "Ir para casa" para\nretornar sua fazenda.'],
                          tut3: ["Clique na tabela para ver os\nnovos requisitos", "Requisitos especiais completos\naumentar o valor dos produtos agrícolas", "Completeo requisito 2 para aumentar o valor em 150%", "Completeo requisito 2 para aumentar o valor em 200%", "", "Completeos requisitos e continue\ncuidando de qualquer fazenda"],
                          tut_use_theme: ["Toque para definir o tema da sua fazenda!", "Bem feito!\nVocê é mais inteligente do que eu penso\nAgora você sabe como definir o tema."]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "xxx vezes permanece",
              "Canvas/popup_go_revenge/victim-level": "Nível: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "xxx ausente",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "comprar cães. Compre agora com preço xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Nível " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "Parabéns! Você tem\n" + _G.configs.videoFindVictim + " Pesquisa Aleatória", i = "FUNÇÃO FUNCIONAL SERÁ\nOPERADA QUANDO ACIMA " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "TERRA NÃO SUFICIENTE"),
                  l(a, "Nothing left to steal !", "Nada para roubar !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Compre cães com sucesso!\nParabéns!"),
                  l(a, "SHARED SUCCESSFULLY", "COMPARTILHAR BEM SUCEDIDO"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "NÃO PODE COLHEITA QUANDO A LOJA ESTIVER COMPLETA"),
                  l(a, "Successfully save 50% dropped gold!", "Reduziu com sucesso\n50% do ouro caiu!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "CONVITE AO SUCESSO"),
                  l(a, "Successfully X2 products!", "X2 produtos agrícolas\ncom sucesso!"),
                  l(a, "Congratz! Status unlocked!", "Parabéns! Status desbloqueado!"),
                  l(a, "Upgraded successfully!", "Atualizado com sucesso!"),
                  l(a, "Stealing is not available\nin view mode!", "Roubar não está disponível\nno modo de visualização!"),
                  l(a, "Name changed successfully!", "Nome alterado com sucesso!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " tem sido " + (o ? "cachorro" : "") + a + " pegar enquanto rouba a fazenda " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " roubou a fazenda " + a + "! \n" + a + " perdido " + t.join(", ")
                      }
                  },
                  cta: "Vingança"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Jogue agora!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' alcançou conquistas "' + a + '". E você?'
                  },
                  cta: "Jogue agora!"
              },
              sendInvitationVictim: {
                  content: "Vamos jogar Farm Battle!",
                  cta: "Jogue agora!"
              },
              sendMsgInviteGift: {
                  content: "Olá! Por favor seja meu vizinho!",
                  cta: "Vamos jogar!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "xxx estendido",
                  desc: "Terreno xxx aberto"
              },
              UP_LUA: {
                  title: "Nível de trigo xxx",
                  desc: "Nível de transplante de trigo xxx"
              },
              UP_CACHUA: {
                  title: "Nível de tomate xxx",
                  desc: "Tomate enxertando nível xxx"
              },
              UP_KHOAI: {
                  title: "Nível de batata xxx",
                  desc: "Nível até transplante de batata xxx"
              },
              UP_BOSUA: {
                  title: "Vaca leiteira xxx",
                  desc: "Nível de transplante de leite de vaca xxx"
              },
              UP_DUA: {
                  title: "Nível de pepino xxx",
                  desc: "Pepino enxerto para nivelar xxx"
              },
              UP_NGO: {
                  title: "Wu concedido xxx",
                  desc: "Enxertando milho para nivelar xxx"
              },
              UP_CAROT: {
                  title: "Nível de cenoura xxx",
                  desc: "Atualize a cenoura para o nível xxx"
              },
              UP_GAMAI: {
                  title: "Galinhas fornecidas xxx",
                  desc: "Galinhas colocam nível xxx"
              },
              UP_BAPCAI: {
                  title: "Nível de repolho xxx",
                  desc: "Nível de transplante de repolho xxx"
              },
              UP_BINGO: {
                  title: "Nível de Abóbora xxx",
                  desc: "Abóbora de enxerto para nivelar xxx"
              },
              UP_PINEAPPLE: {
                  title: "Nível de abacaxi xxx",
                  desc: "Atualize o abacaxi para o nível xxx"
              },
              UP_GOAT: {
                  title: "Nível de cabra xxx",
                  desc: "Atualize a cabra para o nível xxx"
              },
              UP_COCONUT: {
                  title: "Nível de coco xxx",
                  desc: "Atualize o coco para o nível xxx"
              },
              UP_SHEEP: {
                  title: "Nível de ovelhas xxx",
                  desc: "Atualize ovelhas para o nível xxx"
              },
              UP_NHAKHO: {
                  title: "Armazém emitido xxx",
                  desc: "Atualize o armazenamento para o nível xxx"
              },
              UP_XEHANG: {
                  title: "Nível de caminhão xxx",
                  desc: "Atualize o carro para o nível xxx"
              }
          },
          gifts: {
              Play: "Toque",
              "Create shortcut": "Criar atalho"
          }
      },
      cc._RF.pop()
  }
  , {}],
  resources_sound_sfx: [function(e, o, a) {
      "use strict";
      cc._RF.push(o, "9990dseeddLBYT7rRKsceCH", "resources_sound_sfx"),
      o.exports = {
          load: function(t, n) {
              window._soundOff = parseInt(window.localStorage ? window.localStorage.getItem("SMX") : 0),
              window._sfxOff = parseInt(window.localStorage ? window.localStorage.getItem("SFX") : 0),
              cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/sound/checked").active = window._sfxOff,
              cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/music/checked").active = window._soundOff,
              window._startLoadTime = _time();
              var e = ["button_press", "chicken_press", "cow_press", "detect_music", "dog_detect_1", "dog_detect_2", "harvest", "home_enemy_background_music", "home_player_background_music", "host_detect_1", "host_detect_2", "initialization", "cow_upgrade", "chicken_upgrade", "sprout", "land_press", "level_up_and_achievement_complete", "pop_up", "sell", "upgrade_and_mature_tree", "wooddoor_close", "wooddoor_open"];
              e.map(function(e, a, o) {
                  return o[a] = "/sounds/" + e
              });
              var i = {};
              window._soundBank = i;
              var a = window._dynamicResources_Ratio || 100
                , r = e.length
                , l = 100 - a
                , d = a / r
                , s = 0
                , o = function(e, a) {
                  if (++s,
                  n && n(l + s * d),
                  s == r && t && _timer0(t),
                  e)
                      console.warn("?? resource load sound error : " + e + " !");
                  else {
                      var o = a.split("/").pop().replace(".mp3", "");
                      i[o] = a
                  }
              };
              e.map(function(e) {
                  return cc.loader.loadRes(e, cc.AudioClip, o)
              })
          },
          setSoundOff: function(e) {
              e = !!e,
              (window._soundOff = e) ? o.exports.stopBGSound() : o.exports.playBGSound(window._lastSoundName),
              window.localStorage && localStorage.setItem("SMX", window._soundOff ? 1 : 0)
          },
          getSound: function() {
              return !window._soundOff
          },
          setSFXOff: function(e) {
              e = !!e,
              window._sfxOff = e,
              window.localStorage && localStorage.setItem("SFX", window._sfxOff ? 1 : 0)
          },
          getSFX: function() {
              return !window._sfxOff
          },
          playSound: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , o = arguments[2];
              if (window._soundBank) {
                  var t = window._soundBank[e];
                  if (t)
                      return cc.audioEngine.play(t, a, null == o ? window._soundVolume : o)
              }
          },
          playSFX: function(e) {
              if (1 < arguments.length && void 0 !== arguments[1] && arguments[1]) {
                  var a = o.exports.playSound(e, !0, window._sfxOff ? 0 : null);
                  return window._sfxIDList.push(a),
                  a
              }
              window._sfxOff || o.exports.playSound(e, !1, .75 * window._soundVolume)
          },
          stopSFX: function(e) {
              _sfxIDList.includes(e) && (cc.audioEngine.stop(e),
              _removeArrItem(_sfxIDList, e))
          },
          resetSFX: function() {
              window._sfxIDList.map(function(e) {
                  return cc.audioEngine.stop(e)
              }),
              window._sfxIDList = []
          },
          pauseSFX: function() {
              window._sfxIDList.map(function(e) {
                  return cc.audioEngine.pause(e)
              })
          },
          resumeSFX: function() {
              window._sfxIDList.map(function(e) {
                  return cc.audioEngine.resume(e)
              })
          },
          immediatelyMuteAllSFX: function() {
              window._sfxIDList.map(function(e) {
                  return cc.audioEngine.setVolume(e, 0)
              })
          },
          immediatelyUnMuteAllSFX: function() {
              _log(" _sfxIDList = " + _sfxIDList + " // window._soundVolume = " + window._soundVolume + " "),
              window._sfxIDList.map(function(e) {
                  return cc.audioEngine.setVolume(e, window._soundVolume)
              })
          },
          playBGSound: function(e) {
              if (window._lastSoundName = e,
              !window._soundOff) {
                  window._bgSound = o.exports.playSound(e, !0)
              }
          },
          stopBGSound: function() {
              cc.audioEngine.stop(window._bgSound)
          },
          adjustVolume: function(e) {
              window._soundVolume = e,
              cc.audioEngine.setVolume(window._bgSound, e)
          }
      },
      cc._RF.pop()
  }
  , {}],
  row_victim: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "9bb006cX3hL5YWr/jq9OEUC", "row_victim");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      cc.Class({
          extends: cc.Component,
          properties: {
              container: cc.Node,
              avatar: cc.Node,
              lbl1: cc.Node,
              caught: cc.Node,
              attack: cc.Node,
              lbl_name: cc.Node,
              btn_revenge: cc.Node
          },
          start: function() {},
          onBtnMoreInfo: function(e) {
              e.target.children.length < 4 || (_showLayout("popup_info_victim"),
              s.uiVictim.showInfoVictim(this.data))
          },
          onBtnRevenge: function() {
              var e = _thisPlayerInfo.level >= s.configs.stealUnlockLevel;
              if (_logFBEvent("event_revenge", 1, {
                  isUnlockedSteal: e
              }),
              !e)
                  return s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_level_cannot_steal/bg_holder/txt_msg"), s.configs.stealUnlockLevel),
                  void _showLayout("popup_level_cannot_steal");
              s.uiLayout.showNagScreen(),
              setTimeout(s.uiLayout.hideNagScreen, 1e3),
              this.data.RevengeTime = Date.now(),
              _listThief.splice(_listThief.indexOf(this.data), 1),
              window._revenge_session_id = this.data.SessionId,
              _hideLayout("popup_find_victim"),
              _hideLayout("popup_email"),
              s.data.getRevengeData(function(e) {
                  s.fx.findingVictim(),
                  setTimeout(function() {
                      s.fx.victimFound(),
                      _showLayout("layout_victim"),
                      s.game.initVictim(e)
                  }, 2e3)
              }, function() {
                  s.uiLayout.showCongratulations("sorry, error occured", "oops!")
              }),
              s.popups.endCurrentStartPopup()
          },
          setInfo1: function() {
              this.lbl1.active = !0,
              this.btn_revenge.active = !0
          },
          setInfo2: function() {
              this.lbl1.active = !1,
              this.btn_revenge.active = !1
          },
          setInfo3: function() {
              this.lbl1.active = !1,
              this.btn_revenge.active = !1
          },
          setInfo: function(o) {
              var t = this;
              for (var e in this.data = o,
              cc.loader.load(o.Photo, function(e, a) {
                  a && (t.avatar.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a)),
                  console.log("cc.loader.load", o.Photo, e)
              }),
              s.utils.setLabelText(this.lbl_name, s.utils.trimStr(o.UserName, 12)),
              o.Products) {
                  var a = s.utils.copyNodeTo(cc.find("Canvas/nodeCaches/item_amount_victim"), this.container);
                  a.setPosition(0, 0);
                  var n = o.Products[e];
                  a.getChildByName("img").getComponent(cc.Sprite).spriteFrame = s.uiSlot.getItemHarvestSpriteFrame(e),
                  s.utils.setLabelText(a.getChildByName("lbl"), n),
                  a.getChildByName("fail").active = 0 < o.Wanted
              }
              var i = 2 < Object.keys(o.Products).length;
              if (this.node.getChildByName("scrollview").getChildByName("icon_expand").active = i,
              this.node.getChildByName("scrollview").getComponent(cc.Button).enabled = i,
              o.GoldDrop) {
                  var r = s.utils.copyNodeTo(cc.find("Canvas/nodeCaches/item_amount_victim"), this.container);
                  r.setPosition(0, 0),
                  r.getChildByName("img").getComponent(cc.Sprite).spriteFrame = s.uiSlot.getItemHarvestSpriteFrame("COIN"),
                  s.utils.setLabelText(r.getChildByName("lbl"), o.GoldDrop),
                  r.getChildByName("fail").active = 0 < o.Wanted
              }
              2 == o.Wanted ? (this.caught.active = !1,
              this.attack.active = !0,
              this.btn_revenge.active = !1,
              this.node.color = cc.color("#AC4C42")) : 1 == o.Wanted ? (this.caught.active = !0,
              this.attack.active = !1,
              this.btn_revenge.active = !1,
              this.node.color = cc.color("#9D8963")) : (this.caught.active = !1,
              this.attack.active = !1,
              this.btn_revenge.active = !0,
              this.node.color = cc.color("#5E617C"));
              var l = _thisPlayerInfo.serverTime - parseInt(o.SteelTime)
                , d = _floor(l / 1e3);
              s.gameLanguage.setLabelDataAndRender(this.lbl1, s.utils.secondsToTime2(d))
          },
          expandProductList: function() {
              var o = this;
              _log(" scrollview clicked ! ");
              var e = this.container.height - 50;
              this.container.isExpanded ? (this.container.isExpanded = !1,
              this.container.parent.height -= e,
              this.container.parent.parent.height -= e,
              this.node.height -= e,
              this.node.getChildByName("scrollview").getChildByName("icon_expand").scaleY *= -1) : (this.container.isExpanded = !0,
              this.container.parent.height += e,
              this.container.parent.parent.height += e,
              this.node.height += e,
              this.node.getChildByName("scrollview").getChildByName("icon_expand").scaleY *= -1,
              this.node.parent.children.map(function(e) {
                  if (e != o.node) {
                      var a = e.getComponent("row_victim");
                      a.container.isExpanded && a.expandProductList()
                  }
              }))
          }
      }),
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  share: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "8f15cmnwBNLrIgjqTCRTcHs", "share");
      var i = e("../all_modules");
      setTimeout(function() {
          i = e("../all_modules")
      }, 0),
      a.exports = {
          doShare: function() {
              _logFBEvent("event_click_share_screen_shot"),
              _log("event_click_share_screen_shot");
              var e = cc.find("screen_shot_fx");
              e.opacity = 255,
              e.active = !0,
              e.runAction(cc.sequence(cc.fadeOut(1.2).easing(cc.easeIn(2)), cc.callFunc(function() {})));
              var a = cc.find("Canvas/popup_loading_screenshot");
              setTimeout(function() {
                  _showLayout("popup_loading_screenshot"),
                  a.opacity = 0,
                  a.runAction(cc.fadeIn(.5))
              }, 1200);
              var o = function() {
                  e.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
                      e.active = !1,
                      a.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                          _hideLayout("popup_loading_screenshot"),
                          a.opacity = 255
                      })))
                  })))
              };
              i.share.screenShot(function(e) {
                  if (!window.FBInstant)
                      return setTimeout(o, 2e3);
                  FBInstant.shareAsync({
                      intent: "REQUEST",
                      image: e,
                      text: "",
                      data: {
                          myReplayData: "..."
                      }
                  }).then(function() {
                      o(),
                      _logFBEvent("event_share_screen_shot_success"),
                      _log("event_share_screen_shot_success")
                  }).catch(function(e) {
                      _log(e),
                      o(),
                      _logFBEvent("event_share_screen_shot_fail", 1, {
                          error: e.message
                      }),
                      _log("event_share_screen_shot_fail")
                  })
              })
          },
          screenShot: function(a) {
              var e = cc.find("Canvas/layout_home/scroll_layer")
                , o = cc.find("share_pic_container/field")
                , t = i.utils.copyNodeTo(e, o);
              o.getComponentsInChildren(sp.Skeleton).map(function(e) {
                  "fx_has_output" == e.node.name && (e.enabled = !1)
              }),
              cc.find("share_pic_container/field/scroll_layer/truck/bg-gold").removeFromParent(!0),
              cc.find("share_pic_container/field/scroll_layer/truck/gold").removeFromParent(!0),
              cc.find("share_pic_container/field/scroll_layer").setPosition(0, 0),
              ["ground_cells_A", "ground_cells_B", "ground_cells_C"].map(function(e) {
                  cc.find("share_pic_container/field/scroll_layer/" + e).children.map(function(e) {
                      "ground_cell1" != e.getComponent(cc.Sprite).spriteFrame.name && (e.active = !1)
                  })
              });
              var n = cc.find("share_pic_container");
              _timer0(function() {
                  o.setPosition(0, 0),
                  o.scale = 760 / t.width,
                  _timer0(function() {
                      var e = i.social.getImgBase64(n);
                      o.removeAllChildren(!0),
                      a(e)
                  })
              })
          },
          checkToSetLoadingDog: function(e, a) {
              if ("dog_0" == e) {
                  var o = cc.find("Canvas/popup_loading_screenshot/dog_container");
                  o.addChild(cc.instantiate(a)),
                  cc.find("Canvas/popup_loading_screenshot").active = !0,
                  o.scaleX = -1,
                  o.x = -150,
                  o.runAction(cc.repeatForever(cc.sequence(cc.moveBy(4, cc.v2(300, 0)), cc.callFunc(function() {
                      o.scaleX = 1
                  }), cc.moveBy(4, cc.v2(-300, 0)), cc.callFunc(function() {
                      o.scaleX = -1
                  })))),
                  cc.find("Canvas/popup_loading_screenshot").active = !1
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  slider_on_slide: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "26710mKpnNNHI4Fp08qU7//", "slider_on_slide");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      cc.Class({
          extends: cc.Component,
          sliderOnSlide: function() {
              t.uiBot.adjustOrder.onSlide()
          }
      }),
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  social: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "80334DhdapFiIWTNcVx6Fb5", "social");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              s.social.friendIdStr = "",
              _waitToRun(function() {
                  s.social.getConnectedPlayers(function(e) {
                      e = e.filter(function(e) {
                          return e.id != _thisPlayerInfo.id
                      }),
                      s.social.friendArr = e;
                      var a = s.social.friendIdStr = e.map(function(e) {
                          return e.id
                      }).join(",");
                      _log(" _G.social.init() :::::: calling _G.data.getFriendVictims() "),
                      s.data.getFriendVictims(a)
                  }),
                  _waitToRun(function() {
                      _thisPlayerInfo.avatarLoaded = !0
                  }, "_textureLoaded", s.uiHome.spriteFrameAvatar, 1)
              }, "_thisPlayerInfo", window, 1)
          },
          shareStolen: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
              _log("shareStolen called ");
              var a = s.game.isStealingFriendName;
              if (a) {
                  var o = ""
                    , t = s.gameLanguage.currentLangFile.messages.shareStolen;
                  if (e)
                      o = t.content.caughtMessage(_thisPlayerInfo.name, a, s.game.isDogBite);
                  else {
                      var n = s.game.stealProducts;
                      if (!Object.keys(n).length)
                          return void _log("shareStolen :: !isCaught && lostProductArr.len = 0");
                      o = t.content.damageMessage(_thisPlayerInfo.name, a, n)
                  }
                  s.game.isStealingFriendName = null;
                  (function() {
                      try {
                          _log(" shareStolen sendMsg called ! ");
                          var e = cc.find("message_stolen")
                            , a = s.social.getImgBase64(e);
                          s.social.sendMsg(o, t.cta, a)
                      } catch (e) {
                          _log(e)
                      }
                  }
                  )()
              } else
                  _log("shareStolen :: isStealingFriend = 0")
          },
          shareDailyReward: function(n) {
              (function() {
                  try {
                      _log(" shareDailyReward sendMsg called ! ");
                      var e = s.gameLanguage.currentLangFile.messages.shareDailyReward
                        , a = e.content(_thisPlayerInfo.name)
                        , o = cc.find("message_share_daily_reward");
                      s.gameLanguage.setLabelDataAndRender(o.getChildByName("detail"), n);
                      var t = s.social.getImgBase64(o);
                      s.social.sendMsg(a, e.cta, t)
                  } catch (e) {
                      _log(e)
                  }
              }
              )()
          },
          shareNewAchievement: function(r, l, d) {
              (function() {
                  try {
                      _log(" shareNewAchievement sendMsg called ! ");
                      var e = cc.find("message_share_achievement")
                        , a = e.getChildByName("img_mask");
                      a.removeAllChildren();
                      var o = s.utils.copyNodeTo(d, a);
                      o.width = d.width,
                      o.height = d.height,
                      o.scale = .35 * d.scale,
                      r.includes("TRUCK") && (o.scale *= .22 / .35),
                      s.gameLanguage.setLabelDataAndRender(e.getChildByName("title"), r),
                      s.gameLanguage.setLabelDataAndRender(e.getChildByName("desc"), l);
                      var t = s.gameLanguage.currentLangFile.messages.shareNewAchievement
                        , n = t.content(_thisPlayerInfo.name, r)
                        , i = s.social.getImgBase64(e);
                      s.social.sendMsg(n, t.cta, i)
                  } catch (e) {
                      _log(e)
                  }
              }
              )()
          },
          sendInvitationVictim: function() {
              _log(" sendInvitationVictim called ! ");
              try {
                  var e = s.social.getImgBase64(cc.find("message_victim_invite"))
                    , a = s.gameLanguage.currentLangFile.messages.sendInvitationVictim;
                  s.social.sendMsg(a.content, a.cta, e)
              } catch (e) {
                  _log(e)
              }
          },
          sendMsgInviteGift: function() {
              _log(" sendMsgInviteGift called ! ");
              try {
                  var e = s.social.getImgBase64(cc.find("message_invite_gift"))
                    , a = s.gameLanguage.currentLangFile.messages.sendMsgInviteGift;
                  s.social.sendMsg(a.content, a.cta, e)
              } catch (e) {
                  _log(e)
              }
          },
          sendMsg: function(e, a, o, t) {
              _log(" sendMsg called ! "),
              FBInstant.updateAsync({
                  action: "CUSTOM",
                  cta: {
                      default: a,
                      localizations: s.msgLanguage.genLanguageObj(a)
                  },
                  template: "play_turn",
                  image: o,
                  text: {
                      default: e,
                      localizations: s.msgLanguage.genLanguageObj(e)
                  },
                  data: t,
                  strategy: "LAST"
              }).then(function() {}, function(e) {
                  _log(" sendMsg updateAsync failed : "),
                  _log(e)
              })
          },
          getImgBase64: function(e) {
              _log(" getImgBase64 called ! ");
              var a = e.width
                , o = e.height;
              e.setPosition(a / 2, o / 2),
              e.active = !0,
              e.zIndex = -100;
              var t = new cc.RenderTexture(a,o);
              t.begin(),
              e._sgNode.visit(),
              t.end();
              var n = document.createElement("canvas")
                , i = n.getContext("2d");
              if (n.width = a,
              n.height = o,
              cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                  var r = t.getSprite().getTexture().getHtmlElementObj();
                  i.drawImage(r, 0, 0)
              } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                  var l = gl.createFramebuffer();
                  gl.bindFramebuffer(gl.FRAMEBUFFER, l);
                  var d = t.getSprite().getTexture()._glID;
                  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, d, 0);
                  var s = new Uint8Array(a * o * 4);
                  gl.readPixels(0, 0, a, o, gl.RGBA, gl.UNSIGNED_BYTE, s),
                  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                  for (var c = 4 * a, u = 0; u < o; u++) {
                      var _ = o - 1 - u
                        , p = new Uint8ClampedArray(s.buffer,_ * a * 4,c)
                        , g = new ImageData(p,a,1);
                      i.putImageData(g, 0, u)
                  }
              }
              return n.toDataURL("image/png")
          },
          getConnectedPlayers: function(o) {
              window.FBInstant ? FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                  var a = [];
                  e && e.length && (a = e.map(function(e) {
                      return {
                          id: e.getID(),
                          name: e.getName(),
                          photo: e.getPhoto()
                      }
                  })),
                  o && o(a)
              }) : o && o([{
                  id: "a1",
                  name: "a1",
                  photo: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-1/p320x320/37953466_2094688614193019_7880878797585645568_n.jpg?_nc_cat=111&_nc_ht=scontent.fhan2-2.fna&oh=cd8b33a4b2bfc68c1ebe9fe73c734d6b&oe=5C884499"
              }, {
                  id: "a2",
                  name: "a2",
                  photo: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-1/p320x320/37953466_2094688614193019_7880878797585645568_n.jpg?_nc_cat=111&_nc_ht=scontent.fhan2-2.fna&oh=cd8b33a4b2bfc68c1ebe9fe73c734d6b&oe=5C884499"
              }])
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  stolen_damage: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "20b88Ab3pVCMp5YHnj2SiA2", "stolen_damage");
      var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
        , l = e("../all_modules");
      setTimeout(function() {
          l = e("../all_modules")
      }, 0),
      a.exports = {
          showPopupRecover: function() {
              l.stolenDamage.isBeingDamaged && (_showLayout("popup_recover_damage"),
              l.utils.setLabelCountDownTimer(cc.find("Canvas/popup_recover_damage/bg_holder/remaining_time"), l.stolenDamage.autoRecoverUTC, function() {
                  _hideLayout("popup_recover_damage")
              }))
          },
          videoRecoverClick: function() {
              _hideLayout("popup_recover_damage"),
              l.video.showVideo(function() {
                  l.stolenDamage.isBeingDamaged && (l.stolenDamage.recoverTimeVar && clearTimeout(l.stolenDamage.recoverTimeVar),
                  l.stolenDamage.recoverDamage(),
                  l.data.saveToServer("lastDamageTime", 0))
              }, function(e) {
                  _showLayout("popup_video_failed")
              })
          },
          checkApplyDamage: function() {
              var e = parseInt(_thisPlayerInfo.privateData.lastDamageTime || 0) + 1e3 * l.configs.timeToAutoRecoverStolenDamage - _time();
              _log(" damageRemainingTime = " + e + " "),
              l.stolenDamage.damageRemainingTime = 0 < e ? e : 1e3 * l.configs.timeToAutoRecoverStolenDamage,
              l.stolenDamage.autoRecoverUTC = l.stolenDamage.damageRemainingTime + _time();
              var r = function() {
                  l.stolenDamage.recoverTimeVar = setTimeout(function() {
                      l.stolenDamage.recoverDamage()
                  }, l.stolenDamage.damageRemainingTime)
              };
              if (0 < e) {
                  var a = _thisPlayerInfo.privateData.lastDamageProductList;
                  (l.stolenDamage.damagedProductArr = a).map(function(e) {
                      return _log(" prodName = " + e + " ????? ")
                  }),
                  _log("damageRemainingTime > 0 >> damagedProdList.length = " + a.length + " // type=" + (void 0 === a ? "undefined" : t(a)) + " "),
                  l.stolenDamage.applyDamage(),
                  r(),
                  window._isShowPopupEmailReport || l.stolenDamage.showPopupRecover()
              } else
                  _waitToRun(function() {
                      for (var e = (window._listThief || []).length, a = [], o = 0; o < e; o++) {
                          var t = _listThief[o];
                          if (t.SteelTime > _thisPlayerInfo.lastLoginTime)
                              for (var n in t.Products)
                                  a.push(n)
                      }
                      if (_log(" stolenProductArr =  ", a),
                      a.length) {
                          var i = l.stolenDamage.damagedProductArr = a.filter(function(e, a, o) {
                              return o.indexOf(e) === a
                          });
                          l.stolenDamage.applyDamage(),
                          r(),
                          l.data.saveToServer("lastDamageTime", _time()),
                          l.data.saveToServer("lastDamageProductList", i)
                      }
                  }, "listThiefLoaded", l.stolenDamage)
          },
          recordDamageSlots: function() {
              var e = l.game.mySlotList;
              for (var a in l.stolenDamage.damageSlotArr = [],
              e) {
                  var o = e[a].product;
                  if (o && o.isSprouted) {
                      var t = l.uiSlot.getProductNode(a, "layout_home");
                      if (t) {
                          var n = o.isAnimal;
                          t.isDamaged && l.stolenDamage.damageSlotArr.push({
                              slotName: a,
                              isAnimal: n
                          })
                      }
                  }
              }
          },
          applyDamageAfterRefreshAllSlots: function() {
              _log(" applyDamageAfterRefreshAllSlots ::: _G.stolenDamage.damageSlotArr = " + l.stolenDamage.damageSlotArr.map(function(e) {
                  return e.slotName
              }).join(" // ") + " "),
              l.stolenDamage.damageSlotArr.map(function(e) {
                  var a = e.slotName;
                  e.isAnimal ? l.uiAnimal.setStateDamage(a) : l.uiTree.setStateDamage(a)
              })
          },
          applyDamage: function() {
              var t = l.stolenDamage.damagedProductArr;
              t && 0 != t.length && (l.stolenDamage.isBeingDamaged = !0,
              _waitToRun(function() {
                  var e = l.game.mySlotList;
                  for (var a in e) {
                      var o = e[a].product;
                      o && o.isSprouted && t.includes(o.id) && (o.isAnimal ? l.uiAnimal.setStateDamage(a) : l.uiTree.setStateDamage(a))
                  }
                  _log(" applyDamage called !!!! damagedProductArr = " + t + " ")
              }, "mySlotList", l.game))
          },
          recoverDamage: function() {
              l.stolenDamage.isBeingDamaged = !1;
              var e = l.stolenDamage.damagedProductArr
                , a = l.game.mySlotList;
              for (var o in a) {
                  var t = a[o].product;
                  t && e.includes(t.id) && (t.isAnimal ? l.uiAnimal.setStateNonDamage(o) : l.uiTree.setStateNonDamage(o))
              }
              l.stolenDamage.damagedProductArr.length = 0,
              _log(" recoverDamage called !!!! damagedProductArr = " + e + " ")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  storage: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "40405KPhZBEUr2F4a2sHLR4", "storage");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          allProducts: {},
          level: 1,
          total: 0,
          init: function() {
              for (var e in s.configs.products)
                  s.storage.allProducts[e] = 0
          },
          updateStorage: function(e, a) {
              var o = s.storage.allProducts;
              o[e] || (o[e] = 0),
              o[e] += a,
              s.storage.total += a,
              o[e] < 0 && (s.storage.total -= o[e],
              o[e] = 0)
          },
          setStorage: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
              for (var o in Object.assign(s.storage.allProducts, e.Storage),
              s.storage.total = 0,
              s.storage.allProducts)
                  s.storage.total += s.storage.allProducts[o];
              e.StorageLevel && s.storage.setLevel(e.StorageLevel),
              a && !s.storage.isAvailable() && (s.uiStorage.isFulledAtGameStart = !0)
          },
          setLevel: function(e) {
              s.storage.level = e;
              var a = cc.find("Canvas/popup_storage/bg_holder/lbl_capacity");
              s.gameLanguage.setLabelDataAndRender(a, s.storage.level);
              var o = cc.find("Canvas/popup_storage/bg_holder/lbl_capacity_info")
                , t = s.configs.getStorageCapacity(s.storage.level);
              s.utils.setLabelText(o, s.storage.total + "/" + t);
              var n = cc.find("Canvas/popup_storage/bg_holder/capacity/line")
                , i = s.storage.total / t * 180 - 90;
              n.runAction(cc.rotateTo(.7, i).easing(cc.easeInOut(2))),
              s.uiStorage.isFulledAtGameStart = !1
          },
          showStorage: function() {
              var t = cc.find("Canvas/popup_storage/bg_holder/product_list/view/storage_cells");
              t.children.map(function(e) {
                  e.active = !1
              });
              var e = s.storage.allProducts
                , a = [];
              for (var o in e) {
                  var n = s.configs.products[o].level
                    , i = e[o];
                  !o || "undefined" == o || n > _thisPlayerInfo.level && !i || a.push({
                      prodtName: o,
                      quantity: i,
                      level: n
                  })
              }
              a.sort(function(e, a) {
                  return e.level > a.level ? 1 : -1
              }),
              a.map(function(e) {
                  var a = t.children.find(function(e) {
                      return !e.active
                  });
                  a.active = !0;
                  var o = e.prodtName;
                  s.utils.setNodeImg(a.getChildByName("item1"), s.uiSlot.getItemHarvestSpriteFrame(o), !1),
                  s.utils.setNodeImg(a.getChildByName("item"), s.uiSlot.getItemHarvestSpriteFrame(o), !1),
                  s.utils.setLabelTextPrice(a.getChildByName("lbl"), s.storage.allProducts[o])
              });
              var r = s.configs.getStorageCapacity(s.storage.level)
                , l = cc.find("Canvas/popup_storage/bg_holder/lbl_capacity_info");
              s.utils.setLabelText(l, s.utils.shortNumber(s.storage.total) + "/" + s.utils.shortNumber(r));
              var d = cc.find("Canvas/popup_storage/bg_holder/lbl_capacity");
              s.gameLanguage.setLabelDataAndRender(d, s.storage.level),
              cc.find("Canvas/popup_storage/bg_holder/capacity/line").rotation = s.storage.total / r * 180 - 90,
              s.storage.level < s.configs.storage.length ? (s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_storage/bg_holder/btn_upgrade/lbl")),
              cc.find("Canvas/popup_storage/bg_holder/btn_upgrade").opacity = 255,
              s.uiButton.inactiveButton("Canvas/popup_storage/bg_holder/btn_upgrade", !1)) : (s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_storage/bg_holder/btn_upgrade/lbl")),
              cc.find("Canvas/popup_storage/bg_holder/btn_upgrade").opacity = 200,
              s.uiButton.inactiveButton("Canvas/popup_storage/bg_holder/btn_upgrade", !0))
          },
          showUpgrade: function() {
              var e = cc.find("Canvas/popup_upgrade_storage/bg_holder/CAPACITY")
                , a = [cc.find("Canvas/popup_upgrade_storage/bg_holder/lbl1"), cc.find("Canvas/popup_upgrade_storage/bg_holder/lbl2"), cc.find("Canvas/popup_upgrade_storage/bg_holder/lbl3")];
              s.storage.isAvailable() ? (s.gameLanguage.setLabelDataAndRender(e, "CAPACITY"),
              e.y = 221,
              a.map(function(e) {
                  return e.y = 169
              })) : (s.gameLanguage.setLabelDataAndRender(e, " YOUR STORAGE IS FULL \n UPGRADE NOW? "),
              e.y = 183,
              a.map(function(e) {
                  return e.y = -188
              })),
              s.storage.level < s.configs.storage.length ? (_showLayout("popup_upgrade_storage"),
              _hideLayout("popup_storage"),
              s.uiBot.upgradeStorage.updateLabelButDiamond(s.configs.getStorageUpgradeDiamond(s.storage.level)),
              s.uiBot.upgradeStorage.updateLabelButCoin(s.configs.getStorageUpgradeGold(s.storage.level)),
              s.uiBot.upgradeStorage.updateLabelCapacity(s.configs.getStorageCapacity(s.storage.level), s.configs.getStorageCapacity(s.storage.level + 1))) : cc.log("storage's level is maximum")
          },
          upgradeDiamond: function() {
              if (_thisPlayerInfo.diamond < s.configs.getStorageUpgradeDiamond(s.storage.level))
                  return _showLayout("popup_not_enough_diamond");
              _hideLayout("popup_upgrade_storage"),
              s.data.upgradeStorage("d", s.storage.level + 1, function(e) {
                  cc.log("upgrade storage by diamond", e),
                  s.storage.setLevel(e.StorageLevel),
                  _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                  _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                  s.uiStorage.handleAvailableAgain(),
                  s.uiHome.setLevelHome(e),
                  s.achievements.checkNew(e)
              })
          },
          upgradeCoin: function() {
              if (_thisPlayerInfo.gold < s.configs.getStorageUpgradeGold(s.storage.level))
                  return _showLayout("popup_not_enough_gold");
              _hideLayout("popup_upgrade_storage"),
              s.data.upgradeStorage("g", s.storage.level + 1, function(e) {
                  cc.log("upgrade storage by gold", e),
                  s.storage.setLevel(e.StorageLevel),
                  _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                  e.Diamond = parseInt(e.Diamond),
                  _thisPlayerInfo.diamond = e.Diamond || _thisPlayerInfo.diamond,
                  s.uiStorage.handleAvailableAgain(),
                  s.uiHome.setLevelHome(e),
                  s.achievements.checkNew(e)
              })
          },
          getProgress: function() {
              var e = s.configs.getStorageCapacity(s.storage.level);
              return s.storage.total / e
          },
          isAvailable: function() {
              var e = s.configs.getStorageCapacity(s.storage.level);
              return s.storage.total < e
          },
          getCapacity: function() {
              return s.configs.getStorageCapacity(s.storage.level)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  sync_data: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a98517XcF5A6rQ+Yt5QM9sX", "sync_data");
      var l = e("../all_modules");
      setTimeout(function() {
          l = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              l.syncData.lastSyncTime = _time(),
              setInterval(function() {
                  _time() - l.syncData.lastSyncTime <= 3e5 || l.syncData.sync()
              }, 15e5);
              var e = cc.find("Canvas/popup_disconnected/image-loading");
              e.parent.active = !0,
              e.runAction(cc.repeatForever(cc.rotateBy(2, 360)))
          },
          sync: function() {
              l.syncData.lastSyncTime = _time(),
              l.data.isStoppingRequest = !0,
              l.data.getSyncData(function(e) {
                  _log(" syn data from server called with data = ", e),
                  l.timer.reset(),
                  l.login.initLogin(e),
                  l.data.isStoppingRequest = !1
              }, l.syncData.onDisconnected)
          },
          onDisconnected: function() {
              var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "OOPS! DISCONNECTED"
                , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
              if (!window._loginData) {
                  _waitToRun(function() {
                      _hideLayout("popup_disconnected")
                  }, "_loginData"),
                  l.data.isStoppingRequest = !0,
                  l.data.isStoppingCallback = !0,
                  _showLayout("popup_disconnected");
                  var t = cc.find("Canvas/popup_disconnected/status")
                    , a = "Canvas/popup_disconnected/but_reconnect"
                    , n = cc.find(a);
                  n.active = !1,
                  cc.find("Canvas/popup_disconnected/image-loading").active = !e,
                  l.gameLanguage.setLabelDataAndRender(t, o),
                  e && (t.y -= 60);
                  var i = 0
                    , r = function e() {
                      var a = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                      n.active = !1,
                      l.gameLanguage.setLabelDataAndRender(t, "CONNECTING SERVER ..."),
                      l.data.reconnect(function(e) {
                          l.data.isStoppingRequest = !1,
                          l.data.isStoppingCallback = !1,
                          l.timer.reset(),
                          l.login.initLogin(e),
                          i = 0,
                          l.gameLanguage.setLabelDataAndRender(t, "CONNECTED !"),
                          setTimeout(function() {
                              _hideLayout("popup_disconnected")
                          }, 1e3)
                      }, function() {
                          _log(" reconnect failed :: isManualReconnect=" + a + " && reconnectCount=" + i + " "),
                          !a && i++ < 2 ? e(!1) : (l.gameLanguage.setLabelDataAndRender(t, o),
                          n.active = !0)
                      })
                  };
                  e || r(!1),
                  n.isBoundEvent || (n.isBoundEvent = !0,
                  l.uiButton.bindButton([a], function() {
                      r(!0)
                  }))
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  th_TH: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "52ff3bhKONOiJw2Meous+Pk", "th_TH");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " เพิ่งเล่น! ตาของคุณแล้ว"],
      n = ["", " เพิ่งเล่น! ตาของคุณแล้ว"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "พวกเขาถูกนำมาจากไซบีเรียไปยังอเมริกาเหนือโดยชาว Thule เมื่อ 1,000 ปีก่อน",
              dog_1: "ฮัสกี้เป็นชื่อทั่วไปสำหรับสุนัขลากเลื่อนชนิดหนึ่งที่ใช้ในภาคเหนือ",
              dog_2: "คนเลี้ยงแกะเยอรมันเป็นสุนัขทำงานที่พัฒนามาเพื่อต้อนแกะ",
              dog_3: "เครื่องดึงทองคำมีสัญชาตญาณแห่งความรักในน้ำและง่ายต่อการฝึกฝนไปสู่มาตรฐานขั้นพื้นฐานหรือมาตรฐานการเชื่อฟังขั้นสูง",
              dog_4: "เป็นสุนัขที่มีกล้ามเนื้อแข็งแรงมีใบหน้าที่เหี่ยวย่นและมีจมูกที่ถูกผลัก",
              dog_5: "เสื้อคลุมขนสัตว์ส่วนใหญ่เป็นสีดำมีสีน้ำตาลที่ขาและใบหน้า"
          },
          products: {
              nameList: {
                  "Milk cow": "โคนม",
                  Hen: "ไก่",
                  Wheat: "ข้าวสาลี",
                  Tomato: "มะเขือเทศ",
                  Potato: "มันฝรั่ง",
                  Cucumber: "แตงกวา",
                  Corn: "ข้าวโพด",
                  Carrot: "แครอท",
                  Cabbage: "กะหล่ำปลี",
                  Pumpkin: "ฟักทอง",
                  Pineapple: "สัปปะรด",
                  Goat: "แพะ",
                  Coconut: "มะพร้าว",
                  Sheep: "แกะ"
              },
              outputNameList: {
                  "bottle of milk": "นม",
                  egg: "ไข่",
                  wheat: "ข้าวสาลี",
                  tomato: "มะเขือเทศ",
                  potato: "มันฝรั่ง",
                  cucumber: "แตงกวา",
                  corn: "ข้าวโพด",
                  carrot: "แครอท",
                  cabbage: "กะหล่ำปลี",
                  pumpkin: "ฟักทอง",
                  pineapple: "สัปปะรด",
                  "goat milk": "นมแพะ",
                  coconut: "มะพร้าว",
                  wool: "ขนสัตว์"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "หน้าจอโหลด",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "ยืนยัน",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "ตั้งค่าสุนัขตัวนี้เป็นสุ\nนัขเริ่มต้นหรือไม่",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "ตั้งค่าเริ่มต้น",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "สินค้าใหม่",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "สุนัขใหม่",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "ชุดรูปแบบฤดูหนาว",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "รับชุดรูปแบบที่สวยงามสำห\nรับฟาร์มของคุณ!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "ลองตอนนี้!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "การแสดงความยินดี",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": 'ใช้ธีม "ฤดูหนาว" สำเร็จแล้ว',
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "ตกลง",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "เวลาที่เหลือ:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "เมื่อถึงเวลาโปรดไปที่ร้าน",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "อายุการใช้งาน",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "รับชุดรูปแบบที่สวยงามสำหรั\nบฟาร์มของคุณ!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": 'ใช้ธีม "ฤดูหนาว" สำเร็จแล้ว',
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "หากต้องการเปลี่ยนชุดรูป\nแบบโปรดไปที่ร้านค้า",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "ใช้",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "กำลังใช้งาน",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "แนะนำ",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "ร้อน",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "เต้นรำ valse",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "เพลงรักฤดูหนาว",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "หัวใจฤดูใบไม้ร่วง",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "เร็ว ๆ นี้",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "กำลังใช้งาน",
              "Canvas/popup_recover_damage/bg_holder/info": "คุณต้องการกู้ฟาร์มของคุณจากความเสียหายหรือไม่?",
              "Canvas/popup_recover_damage/wait/Label": "รอ",
              "Canvas/popup_recover_damage/now/Label": "ตอนนี้",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "อัพเกรดสุนัขเพื่อเพิ่มอัตรา\nการป้องกันการโจรกรรม",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "สถานะ",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "สัมผัสฉัน",
              "Canvas/popup_edit_status/bg_holder/title": "แก้ไขสถานะของคุณ",
              "Canvas/popup_confirm_status/bg_holder/title": "ดูวิดีโอเพื่อปลดล็อคสถานะฟาร์มของคุณ",
              "Canvas/popup_edit_status/bg_holder/text_box": "  สถานะ",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "ปลดล็อค",
              "Canvas/popup_dogs/bg_holder/dog_name": "  ชื่อสุนัข",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "ฟรี",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "รับทันที",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "เรตติ้ง",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "เพื่อน",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "โลก",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "ดู",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "ชื่อ",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "ชื่อ",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "เกรด",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "เกรด",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "ชวนเพื่อนมาเป็นเพื่อนบ้าน\n(และขโมยจากพวกเขา)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "เชิญ",
              "message_share_daily_reward/title": "สตริงการเข้าสู่ระบบ",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "แก้แค้น",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "ไปขโมย",
              "prefabs//ground/lbl_info1": "ซื้อ",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "เร่งความเร็ว",
              "Canvas/layout_home/scroll_layer/truck/go/label": "ขาย",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "        ความสำเร็จ",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "โกดัง",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "โจรกรรม",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "เพื่อน",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "โจรกรรม",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "ค้นหาแบบสุ่ม",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "ขอ",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "คุณหมดแล้ว\nค้นหาฟรี. ดูวิดีโอ\nและรับมากขึ้น",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "ล่าสุดไม่มีไอ\nขโมยฟาร์มของคุณ",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "ชวนเพื่อนมาเป็นเพื่อนบ้าน\n(และการขโมยของเพื่อน)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "เชิญคุณ",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "เชิญคุณ",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "สถิติ",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "ล่าสุดไม่มีไอ\nขโมยฟาร์มของคุณ",
              "Canvas/popup_email/bg_holder/title": "รายชื่อของคน\nขโมยฟาร์มของคุณ",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "ระดับขึ้น",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "ใหม่",
              "Canvas/popup_new_level/bg_holder/txt_amount": "รางวัล",
              "Canvas/popup_new_level/bg_holder/txt_level": "ปลดล็อค",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "ได้รับ",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "ระดับขึ้น",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "รางวัล",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "ได้รับ",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "เร่งความเร็ว",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "ฟรี",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "ฟรี",
              "Canvas/popup_info_item/bg_holder/bottom2": "เต็มไปด้วยผลิตภัณฑ์ทางการเกษตร",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "กลับมา",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "ขาย",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "ไม่",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "มี",
              "Canvas/popup_sell/bg_holder/info": "คุณต้องการขายหรือไม่\nแปลง",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "ขาย",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "เลือกสินค้าเกษตรเพื่อขาย",
              "Canvas/popup_adjust_order/bg_holder/max": "สูงสุด",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "ขาย",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "ขาย",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "การอัพเกรด",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "ความจุ",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "ไปยัง",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "การอัพเกรด",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "ความจุ",
              "Canvas/popup_upgrade_truck/bg_holder/to": "ไปยัง",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "การอัพเกรด",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "การอัพเกรด",
              "Canvas/popup_storage_full/bg_holder/message": "คลังสินค้าเต็ม\nคุณอัพเกรดหรือไม่?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "Tโจรกรรม",
              "Canvas/popup_not_found/bg_holder/txt_msg": "ไม่พบผู้ที่ตกเป็นเหยื่อ.\nกรุณาลองใหม่อีกครั้ง",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "ปิด",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "ซื้อทองคำ",
              "Canvas/popup_not_enough_gold/bg_holder/info": "ทองคำไม่เพียงพอ!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "เพชรไม่เพียงพอ!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "ซื้อเพชร",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "มี",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "ขอแสดงความยินดี\nคุณได้รับ",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "ร้านขายของ",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "อัพเกรด",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "รถอัพเกรดp\nไปสู่ระดับสูงสุด",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "ความสำเร็จ",
              "Canvas/popup_new_achievement/bg_holder/share/share": "ใช้งานร่วมกัน",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "ได้รับ",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "ความสำเร็จ",
              "Canvas/popup_achievement_list/bg_holder/progress": "ขั้นตอน",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "ความสำเร็จ",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "ยังไม่มีความสำเร็จ",
              "Canvas/popup_disconnected/but_reconnect/caption": "เชื่อมต่อ",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "วันที่ไม่ดี",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "ความล้มเหลว",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "บ้าน",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "ลด 50%",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "ลด 50%",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "สุนัข",
              "Canvas/popup_dogs/bg_holder/txt_info": "ซื้อสุนัขเพื่อปกป้อง\nฟาร์มของคุณ",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "ซื้อ",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "ตกลง",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "รางวัลประจำวัน",
              "Canvas/popup_daily_reward/bg_holder/title": "กลับมาพรุ่งนี้เพื่อรับของขวัญเพิ่มเติม!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "วันที่ 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "วันที่ 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "วันที่ 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "วันที่ 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "วันที่ 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "วันที่ 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "วันที่ 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "ได้รับ",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "โอ้ไม่!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "ปิด",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "ขอแสดงความยินดี!",
              "Canvas/popup_bot_gift/bg_holder/title": "คุณได้รับของขวัญ",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "ได้รับ",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "แบ่งปันกับเพื่อน",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "มองข้าม       ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "ต่อ!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "ต่อ",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "Tยิ่งใหญ่",
              "Canvas/popup_tutorials/label_skip": "มองข้าม",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "ของขวัญ",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "ทำภารกิจต่อไปนี้\nเพื่อรับของขวัญ ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "คล่องแคล่ว",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "บ้าน",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "คุณยังไม่ได้ขโมย\nคุณแน่ใจนะ\nอยากกลับบ้าน?",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "บ้าน",
              "Canvas/popup_go_steal/bg_header/lbl_header": "ค้นหาเหยื่อ",
              "Canvas/popup_go_steal/title": "สินค้าเกษตรที่คุณถูกขโมย",
              "Canvas/popup_go_steal/scrollview/msg": "คุณยังไม่ได้ขโมย",
              "Canvas/popup_go_steal/img_random/lbl_find": "ค้นหาผู้ประสบภัยแบบสุ่ม",
              "Canvas/popup_go_steal/btn_go/lblX5": "ขอ",
              "Canvas/popup_go_steal/lbl_used_up_find": "คุณหมดแล้ว\nผลัดกันค้นหาฟรี. ดูวิดีโอ\nและรับมากขึ้น",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "ต่อ?",
              "Canvas/popup_go_revenge/scrollview/msg": "คุณยังไม่ได้ขโมย",
              "Canvas/popup_go_revenge/lbl_find": "ผู้ที่ตกเป็นเหยื่อได้เลือก",
              "Canvas/popup_go_revenge/btn_go/lblX5": "ไป",
              "Canvas/popup_video_failed/bg_holder/info": "โอ้ไม่ !\nวิดีโอพบข้อผิดพลาด\n\nกรุณาลองใหม่อีกครั้ง\nหลังจากนั้นไม่กี่นาที",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "โอ้ไม่",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "ซื้อตอนนี้"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "เกรด $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "สินค้าเกษตรที่คุณขโมย",
                      "OOPS...": "โอ้ไม่..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "สินค้าเกษตรที่คุณขโมย",
                      "OOPS...": "โอ้ไม่..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " วัน"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e) {
                      var a = e.replace("days", "วัน").replace("day", "วัน").replace("hrs", "h").replace("hr", "h").replace("mins", "นาที").replace("min", "นาที").replace("secs", "วินาที").replace("sec", "วินาที");
                      return _log("txt = " + e + " // result = " + a),
                      a + " ก่อนที่"
                  }
              },
              "Canvas/nodeCaches/row_friend_victim/level": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "เกรด xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "ขโมย: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "ประสบความสำเร็จ: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "โจรกรรม: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "ขโมย: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "ประสบความสำเร็จ: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "โจรกรรม: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "เกรด xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "เล่น",
                      Create: "สร้าง"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "ระดับของคุณ: " + e + " / ชั้น:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return "บทละคร " + e
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "ขึ้น 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " " + e[1] + " วินาที" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " กำลังเติบโต"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "ขอแสดงความยินดี!",
                      "oops!": "โอ้ไม่!",
                      "Oops!": "โอ้ไม่!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "คุณได้ทอง $1");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "คุณได้เพชร $1")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "คุณได้รับรางวัล " + _G.configs.rewardGoldShortcut + " ทองเมื่อสร้างทางลัด"),
                  l(a, "sorry, error occured", "ขออภัยเกิดข้อผิดพลาด"),
                  l(a, " Video is not available.", " วิดีโอถูกบล็อก."),
                  l(a, "Invitation sent successfully!", "ส่งคำเชิญที่ประสบความสำเร็จ!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "โอ้ไม่! การสูญเสียการเชื่อมต่อ",
                      "CONNECTING SERVER ...": "เชื่อมต่อ ...",
                      "CONNECTED !": "เชื่อมต่อ !",
                      "Please check connection\nand reload game": "กรุณาตรวจสอบการเชื่อมต่อ\nและโหลดเกมอีกครั้ง"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "คุณทิ้ง",
                      "sorry...": "ขอโทษ..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "เกรด xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "เกรด xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "เกรด xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "ซับวูฟเฟอร์และคุณ\nสมบัติการเปลี่ยนจะถูก\nปลดล็อคเมื่อไหร่ xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "สวัสดี ฉันคือทอม ยินดีต้อนรับสู่ฟาร์มของคุณ!", "แตะข้าวสาลีหนึ่งครั้งเพื่อปลูกข้าวสาลีใหม่", "ปลูกข้าวสาลีบนช่องว่างที่มีทั้งหมด", "ตอนนี้ซื้อหนึ่งกราวด์สล็อตเพื่อขยายฟิลด์ของคุณ", "Drag to merge and make a wheat level 2", "", 'กด "ขาย" เพื่อขายข้าว\nการเก็บเกี่ยว'],
                          tut2: ['คลิกที่ไอคอน "ขโมย"', "มาหาเหยื่อกันเถอะ", "นี่คือสนามของเหยื่อ\nมาขโมยกันเถอะ!", "ดึงมือของคุณผ่านทุ่งนาเพื่อขโมย", "ดี!\nคุณทำไปแล้ว.\nไม่เหมือนฉันเมื่อวันก่อน.", 'กด "กลับบ้าน" เพื่อกลับไป\nฟาร์มของคุณ.'],
                          tut3: ["คลิกบนกระดานเพื่อดู \nคำขอใหม่", "ทำตามข้อกำหนดพิเศษ\nเพิ่มมูลค่าให้กับสินค้าเกษตร", "ทำตามข้อกำหนด 2 เพื่อเพิ่มมูลค่า 150%", "ทำตามข้อกำหนด 3 เพื่อเพิ่มมูลค่า 200%", "", "ทำตามข้อกำหนด \nดูแลฟาร์มต่อไป"],
                          tut_use_theme: ["แตะเพื่อกำหนดธีมของฟาร์มของคุณ!", "ทำได้ดีมาก!\nคุณฉลาดกว่าที่ฉันคิด\nตอนนี้คุณรู้วิธีการกำหนดธีมแล้ว"]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "บทละคร xxx",
              "Canvas/popup_go_revenge/victim-level": "ระดับ: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "ไม่มี xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "ซื้อสุนัข. ซื้อตอนนี้ด้วยราคา xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "ชั้น " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "ขอแสดงความยินดี! คุณได้\n" + _G.configs.videoFindVictim + " ค้นหาแบบสุ่ม", i = "ฟังก์ชั่นฟังก์ชั่น\nจะถูกปลดล็อคเมื่อทำการอัพเกรด " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "ไม่เพียงพอสำหรับที่ดิน"),
                  l(a, "Nothing left to steal !", "ไม่มีอะไรจะขโมย !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "ซื้อสุนัขให้สำเร็จ!\nขอแสดงความยินดี!"),
                  l(a, "SHARED SUCCESSFULLY", "แบ่งปันความสำเร็จ"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "ไม่สามารถเก็บเกี่ยวได้เมื่อร้านค้าเต็ม"),
                  l(a, "Successfully save 50% dropped gold!", "ลดลงสำเร็จ 50% ของทองคำที่ลดลง!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "เชิญชวนให้ประสบความสำเร็จ"),
                  l(a, "Successfully X2 products!", "ผลิตภัณฑ์ทางการเกษตร\nX2 สำเร็จ!"),
                  l(a, "Congratz! Status unlocked!", "ขอแสดงความยินดี! ปลดล็อคสถานะแล้ว!"),
                  l(a, "Upgraded successfully!", "อัปเกรดสำเร็จแล้ว!"),
                  l(a, "Stealing is not available\nin view mode!", "การขโมยไม่สามาร\nถใช้ได้ในโหมดดู!"),
                  l(a, "Name changed successfully!", "เปลี่ยนชื่อสำเร็จแล้ว!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return o ? e + " ถูกสุนัขของ " + a + " จับมาขโมยฟาร์มของ " + a + "!" : e + " ถูกจับโดย " + a + " ในขณะที่ขโมยฟาร์มของ " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " ได้ขโมยฟาร์มของ " + a + "! \n" + a + " สูญเสีย " + t.join(", ")
                      }
                  },
                  cta: "แก้แค้น"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "เล่นเลย!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' สำเร็จ "' + a + '" แล้วคุณล่ะ?'
                  },
                  cta: "เล่นเลย!"
              },
              sendInvitationVictim: {
                  content: "มาเล่น Farm Battle กันเถอะ!",
                  cta: "เล่นเลย!"
              },
              sendMsgInviteGift: {
                  content: "สวัสดี! ได้โปรดเป็นเพื่อนบ้านของฉัน!",
                  cta: "มาเล่นกัน!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "ขยาย xxx",
                  desc: "เปิด xxx ช่อง"
              },
              UP_LUA: {
                  title: "ข้าวสาลีระดับ xxx",
                  desc: "อัปเกรดข้าวสาลีเป็นระดับ xxx"
              },
              UP_CACHUA: {
                  title: "มะเขือเทศระดับ xxx",
                  desc: "อัพเกรดมะเขือเทศเป็นเลเวล xxx"
              },
              UP_KHOAI: {
                  title: "มันฝรั่งระดับ xxx",
                  desc: "อัพเกรดมันฝรั่งเป็นระดับ xxx"
              },
              UP_BOSUA: {
                  title: "โคนมระดับ xxx",
                  desc: "อัพเกรดวัวนมเป็นระดับ xxx"
              },
              UP_DUA: {
                  title: "แตงกวาระดับ xxx",
                  desc: "อัพเกรดแตงกวาเป็นระดับ xxx"
              },
              UP_NGO: {
                  title: "ข้าวโพดระดับ xxx",
                  desc: "อัปเกรดข้าวโพดเป็นระดับ xxx"
              },
              UP_CAROT: {
                  title: "แครอทระดับ xxx",
                  desc: "อัพเกรดแครอทเป็นเลเวล xxx"
              },
              UP_GAMAI: {
                  title: "ไก่ระดับ xxx",
                  desc: "อัปเกรดไก่เป็นระดับ xxx"
              },
              UP_BAPCAI: {
                  title: "กะหล่ำปลีระดับ xxx",
                  desc: "อัปเกรดกะหล่ำปลีเป็นระดับ xxx"
              },
              UP_BINGO: {
                  title: "ฟักทองระดับ xxx",
                  desc: "อัพเกรดฟักทองเป็นระดับ xxx"
              },
              UP_PINEAPPLE: {
                  title: "สับปะรดระดับ xxx",
                  desc: "อัปเกรดสับปะรดเป็นระดับ xxx"
              },
              UP_GOAT: {
                  title: "ระดับแพะ xxx",
                  desc: "อัพเกรดแพะเป็นระดับ xxx"
              },
              UP_COCONUT: {
                  title: "มะพร้าวระดับ xxx",
                  desc: "อัพเกรดมะพร้าวเป็นระดับ xxx"
              },
              UP_SHEEP: {
                  title: "ระดับแกะ xxx",
                  desc: "อัพเกรดแกะเป็นระดับ xxx"
              },
              UP_NHAKHO: {
                  title: "ระดับการจัดเก็บข้อมูล xxx",
                  desc: "อัปเกรดที่เก็บของ​เป็นระดับ xxx"
              },
              UP_XEHANG: {
                  title: "รถบรรทุกระดับ xxx",
                  desc: "อัปเกรดรถบรรทุกเป็นระดับ xxx"
              }
          },
          gifts: {
              Play: "เล่น",
              "Create shortcut": "สร้างทางลัด"
          }
      },
      cc._RF.pop()
  }
  , {}],
  theme: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "2addfkkK5ZB26FWwUDnFy5O", "theme");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          currentThemeName: "theme_default",
          themeList: {
              theme_default: {
                  isLoaded: !1,
                  applyExtraHandler: function(e, a) {
                      s.utils.setNodeImg(cc.find("Canvas/" + e + "/bg_shop/bot-bg"), a.getChildByName("background_decor_prefab (late_load)").getChildByName("bottom_bushes"))
                  }
              },
              theme_winter: {
                  isLoaded: !1,
                  applyExtraHandler: function(e, a) {
                      s.utils.setNodeImg(cc.find("Canvas/" + e + "/bg_shop/bot-bg"), a.getChildByName("background_decor_prefab (late_load)").getChildByName("bottom_bushes"));
                      var o = cc.find("Canvas/" + e + "/scroll_layer/storage_house/storage/roof_snow");
                      s.utils.setNodeImg(o, a.getChildByName("extras").getChildByName("roof_snow")),
                      o.active = !0
                  }
              }
          },
          resetThemeExtraHandler: function(e) {
              cc.find("Canvas/" + e + "/scroll_layer/storage_house/storage/roof_snow").active = !1
          },
          init: function() {
              _waitToRun(function() {
                  _waitToRun(function() {
                      var e = _thisPlayerInfo.lastThemeName = _thisPlayerInfo.lastThemeName || "theme_default";
                      s.theme.loadSingleTheme(e, function() {
                          window.FBInstant ? s.theme.applyTheme(e) : setTimeout(function() {
                              s.theme.applyTheme(e)
                          }, 3e3),
                          s.theme.isFirstThemeApplied = !0
                      })
                  }, "level", window._thisPlayerInfo)
              }, "_thisPlayerInfo"),
              s.theme.loadAllThemes();
              var e = s.configs.themePriceDiamond;
              s.utils.setLabelText(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price_diamond"), e),
              s.utils.setLabelText(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price_diamond"), e),
              s.utils.setLabelText(cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/price_diamond"), e),
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price_diamond").active = !0,
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price_diamond").active = !0,
              cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/price_diamond").active = !0,
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price").active = !1,
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price").active = !1,
              cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/label").active = !1;
              _waitToRun(function() {
                  s.uiStore.isPaymentAvailable && (_log("theme :: paymentCheckCallback called "),
                  _waitToRun(function() {
                      for (var e = s.uiStore.fbProductCatalog, a = {}, o = 0; o < e.length; o++) {
                          var t = e[o];
                          a[t.productID] = t
                      }
                      var n = a.theme_winter.price;
                      cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price_diamond").active = !1,
                      cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price_diamond").active = !1,
                      cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/price_diamond").active = !1,
                      cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price").active = !0,
                      cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price").active = !0,
                      cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/label").active = !0,
                      s.utils.setLabelText(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy/price"), n),
                      s.utils.setLabelText(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy/price"), n),
                      s.utils.setLabelText(cc.find("Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/label"), n)
                  }, "fbProductCatalog", s.uiStore))
              }, "paymentChecked", s.uiStore)
          },
          loadSingleTheme: function(o, t) {
              cc.loader.loadRes("prefab/late_load/themes/" + o, cc.Prefab, function(e, a) {
                  e ? _log(" error loading prefab fx_harvest ", e) : (s.theme.themeList[o].isLoaded = !0,
                  s.prefabList.themes[o] = a,
                  _log(" ..... loaded theme " + o + " Done !"),
                  t && t())
              })
          },
          loadAllThemes: function() {
              _waitToRun(function() {
                  for (var e in _log(" loadAllThemes _G.theme.isFirstThemeApplied = " + s.theme.isFirstThemeApplied + " "),
                  s.theme.themeList)
                      s.theme.themeList[e].isLoaded ? _log(" themeName = " + e + " ") : (_log(" >>> start loading ... " + e + " "),
                      s.theme.loadSingleTheme(e))
              }, "isFirstThemeApplied", s.theme, 1)
          },
          applyTheme: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home";
              _log(" applying " + e + " //////////////// ");
              var o = s.prefabList.themes[e];
              if (o) {
                  "layout_home" == a ? (s.theme.currentThemeName = e,
                  s.theme.shopSwitchToTheme(e)) : s.theme.currentVictimThemeName = e;
                  var t = cc.find("Canvas/" + a + "/scroll_layer/theme_container");
                  t.removeAllChildren(!0),
                  s.theme.resetThemeExtraHandler(a);
                  var n = cc.instantiate(o);
                  n.parent = t;
                  var i = s.theme.themeList[e].applyExtraHandler;
                  i && i(a, n),
                  s.theme.applyFunctioningSprites(a, n)
              }
          },
          applyFunctioningSprites: function(e, a) {
              var o = a.getChildByName("functioning_sprites")
                , n = [1, 2, 3, 4].map(function(e) {
                  return o.getChildByName("ground_cell" + e)
              })
                , i = o.getChildByName("ground_cell_price_color").color
                , r = o.getChildByName("ground_cell_unlock_color").color
                , l = o.getChildByName("animal_bg")
                , d = o.getChildByName("animal_bg_damaged");
              [cc.find("Canvas/" + e + "/scroll_layer/ground_cells_A"), cc.find("Canvas/" + e + "/scroll_layer/ground_cells_B"), cc.find("Canvas/" + e + "/scroll_layer/ground_cells_C"), cc.find("Canvas/" + e + "/scroll_layer/layer_product"), cc.find("Canvas/nodeCaches")].map(function(e) {
                  e.getComponentsInChildren(cc.Sprite).map(function(o) {
                      var t = o.spriteFrame;
                      t && ([1, 2, 3, 4].map(function(e) {
                          if (t.name == "ground_cell" + e) {
                              s.utils.setNodeImg(o.node, n[e - 1]);
                              var a = o.node.getChildByName("lbl_info");
                              a && (3 == e ? a.color = i : 4 == e && (a.color = r))
                          }
                      }),
                      "bo-dat-nuoi-bo" == t.name ? s.utils.setNodeImg(o.node, l) : "animal_bg" == t.name && s.utils.setNodeImg(o.node, d))
                  })
              })
          },
          applyThemeToNewTree: function(e) {
              var a = cc.find("Canvas/layout_home/scroll_layer/theme_container/" + s.theme.currentThemeName + "/functioning_sprites/ground_cell2");
              a && s.utils.setNodeImg(e.getChildByName("bg"), a)
          },
          applyThemeToNewAnimal: function(e) {
              var a = cc.find("Canvas/layout_home/scroll_layer/theme_container/" + s.theme.currentThemeName + "/functioning_sprites/animal_bg");
              a && s.utils.setNodeImg(e.getChildByName("bg"), a)
          },
          getThemeGroundPriceColor: function() {
              var e = cc.find("Canvas/layout_home/scroll_layer/theme_container/" + s.theme.currentThemeName + "/functioning_sprites/ground_cell_price_color");
              return e ? e.color : null
          },
          getThemeGroundUnlockColor: function() {
              var e = cc.find("Canvas/layout_home/scroll_layer/theme_container/" + s.theme.currentThemeName + "/functioning_sprites/ground_cell_unlock_color");
              return e ? e.color : null
          },
          tryThemeDemo: function() {
              _log(" tryThemeDemo called !!!! "),
              _hideLayout("popup_suggest_theme_trial"),
              s.video.showVideo(function() {
                  _logFBEvent("event_but_theme_demo_video_success"),
                  s.data.useTrialTheme("theme_winter");
                  var e = _time() + s.configs.themeTrialTime - 1;
                  s.utils.setLabelCountDownTimer(cc.find("Canvas/popup_used_theme_trial/bg_holder/remaining_time"), e),
                  _showLayout("popup_used_theme_trial"),
                  _thisPlayerInfo.trialThemeTime = _time(),
                  s.theme.checkTrialThemeCase()
              }, function(e) {
                  _showLayout("popup_video_failed")
              })
          },
          checkTrialThemeCase: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                , a = _thisPlayerInfo.privateData.isBoughtThemeWinter
                , o = _thisPlayerInfo.trialThemeTime
                , t = _time() - o > s.configs.themeTrialTime
                , n = !a && o && !t;
              if (cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running").active = n && !a,
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired").active = !n && !a,
              !(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme").active = a) && o)
                  if (t) {
                      var i = function() {
                          s.theme.showExpiredTrial(),
                          s.data.switchTheme("theme_default")
                      };
                      e ? s.popups.registerToShow("popup_theme_trial_expired", i) : i()
                  } else {
                      var r = o + s.configs.themeTrialTime;
                      s.utils.setLabelCountDownTimer(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-1/remaining_time_to_use"), r),
                      s.utils.setLabelCountDownTimer(cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/remaining_time"), r, function() {
                          _hideLayout("popup_used_theme_trial"),
                          _log(" calling checkTrialThemeCase in timer timeout .................. "),
                          s.theme.checkTrialThemeCase()
                      })
                  }
          },
          buyTheme: function() {
              var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "theme_winter"
                , o = function() {
                  _hideLayout("popup_theme_trial_expired"),
                  _hideLayout("popup_shop"),
                  s.data.saveToServer("isBoughtThemeWinter", !0, function() {
                      _hideLayout("popup_shop"),
                      _showLayout("popup_buy_theme_success")
                  }),
                  _thisPlayerInfo.privateData.isBoughtThemeWinter = !0,
                  s.theme.checkTrialThemeCase()
              };
              if (s.uiStore.isPaymentAvailable)
                  FBInstant.payments.purchaseAsync({
                      productID: a,
                      developerPayload: "foobar"
                  }).then(function(e) {
                      o(),
                      _logFBEvent("event_buy_theme_iap_success", 1, {
                          theme: "theme_winter"
                      }),
                      _log(" theme.buyTheme() called >>>>> "),
                      setTimeout(function() {
                          try {
                              FBInstant.payments.consumePurchaseAsync(a).then(function() {
                                  _log("purchased item consumed !")
                              }).catch(function(e) {
                                  _log("iap error", e),
                                  _log(e)
                              })
                          } catch (e) {}
                      }, 1e3)
                  }).catch(function(e) {
                      _logFBEvent("event_buy_theme_iap_failed"),
                      s.uiLayout.showCongratulations("sorry, error occured", "oops!"),
                      _log(e)
                  });
              else {
                  var e = s.configs.themePriceDiamond;
                  _thisPlayerInfo.diamond < e ? (_showLayout("popup_not_enough_diamond"),
                  cc.find("Canvas/popup_not_enough_diamond/ok").active = !0) : s.data.addDiamond(-1 * e, function(e) {
                      _logFBEvent("event_buy_theme_diamond_success", 1, {
                          theme: "theme_winter"
                      }),
                      s.uiHome.setDiamond(e.Diamond),
                      o()
                  })
              }
          },
          showTutAfterBuyingTheme: function() {
              _log(" theme :: showTutAfterBuyingTheme >>> "),
              s.tutorial.currentTutname = "tut_use_theme",
              s.tutorial.startTutorial(e("tut_use_theme"))
          },
          showExpiredTrial: function() {
              _thisPlayerInfo.privateData.isShownPopupThemeExpired || (s.data.saveToServer("isShownPopupThemeExpired", "true"),
              _showLayout("popup_theme_trial_expired"))
          },
          shopSwitchToTheme: function(e) {
              cc.find("Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content").children.map(function(a) {
                  if (a.name.includes("theme_")) {
                      var o = a.name == e;
                      ["bg_used", "bg_used_1", "but_used"].map(function(e) {
                          a.getChildByName(e).active = o
                      }),
                      a.getChildByName("but_use").active = !o
                  }
              })
          },
          checkToShowTrialSuggest: function() {},
          checkToShowSuggestBuyTheme: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              if (!_thisPlayerInfo.privateData.isBoughtThemeWinter && !s.tutorial.isNewUser) {
                  var a = !1
                    , o = 0
                    , t = _thisPlayerInfo.privateData.lastBuyThemeSuggestTime || 0
                    , n = _time() - t;
                  if (n > s.configs.buyThemeSuggestRepeatTime) {
                      setTimeout(s.theme.checkToShowSuggestBuyTheme, s.configs.buyThemeSuggestRepeatTime);
                      s.uiLayout.isNotShowingAnyPopup() && (a = !0,
                      _thisPlayerInfo.privateData.lastBuyThemeSuggestTime = _time(),
                      s.data.saveToServer("lastBuyThemeSuggestTime", _time()),
                      _random() < s.configs.showBuyThemeSuggestRatio && (e ? s.popups.registerToShow("popup_theme_trial_expired") : _showLayout("popup_theme_trial_expired"))),
                      o = 3e3
                  } else
                      o = s.configs.buyThemeSuggestRepeatTime - n;
                  a || cc.find("Canvas/popup_theme_trial_expired").active || setTimeout(s.theme.checkToShowSuggestBuyTheme, o)
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules",
      tut_use_theme: "tut_use_theme"
  }],
  timer: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "271dd5P/QlGCrgD7CJcvXlr", "timer");
      var l = e("../all_modules");
      setTimeout(function() {
          l = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              l.timer.sprout = [],
              l.timer.produce = [];
              var o = _time();
              setInterval(function() {
                  var e = _time()
                    , a = (e - o) / 1e3;
                  o = e,
                  l.timer.checkSrout(a),
                  l.timer.checkProduce(a)
              }, 200)
          },
          reset: function() {
              _log(" timer reset called !!!!!!!!!! "),
              l.timer.sprout = [],
              l.timer.produce = []
          },
          removeProduct: function(a) {
              ["sprout", "produce"].map(function(e) {
                  l.timer[e] = l.timer[e].filter(function(e) {
                      return e.prodInfo != a
                  })
              })
          },
          removeSlotList: function(e) {
              for (var a in e)
                  if (e[a]) {
                      var o = e[a].product;
                      o && l.timer.removeProduct(o)
                  }
          },
          setSproutTimer: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
              e.sproutTime = l.configs.products[e.id].initTime,
              e.sproutRemainingTime = e.sproutTime - a,
              l.timer.sprout.push({
                  prodInfo: e
              })
          },
          removeSproutTimer: function(a) {
              l.timer.sprout = l.timer.sprout.filter(function(e) {
                  return e.prodInfo != a
              })
          },
          checkSrout: function(o) {
              l.timer.sprout.map(function(e) {
                  var a = e.prodInfo;
                  a.sproutRemainingTime -= o,
                  a.sproutRemainingTime < .001 && (l.timer.removeSproutTimer(a),
                  l.eventsTimer.timerSproutedHandler(a))
              })
          },
          calculateFullRemainingTime: function(e) {
              var a = l.configs.products[e.id];
              return a.outputTime[e.level - 1] * a.maxOutput[e.level - 1]
          },
          setProduceTimer: function(a) {
              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0
                , o = l.configs.products[a.id]
                , t = a.produceTime = o.outputTime[a.level - 1]
                , n = l.timer.calculateFullRemainingTime(a) - e;
              a.produceRemainingTime = n;
              var i = _floor((n - 1e-4) / t)
                , r = l.timer.produce.find(function(e) {
                  return e.prodInfo == a
              });
              r ? r.lastKnot = i : l.timer.produce.push({
                  prodInfo: a,
                  lastKnot: i
              })
          },
          removeProduceTimer: function(a) {
              l.timer.produce = l.timer.produce.filter(function(e) {
                  return e.prodInfo != a
              })
          },
          checkProduce: function(t) {
              l.timer.produce.map(function(e) {
                  var a = e.prodInfo;
                  a.produceRemainingTime -= t;
                  var o = _floor(a.produceRemainingTime / a.produceTime);
                  e.lastKnot != o && (e.lastKnot = o,
                  l.eventsTimer.timerProducedHandler(a)),
                  a.produceRemainingTime < 0 && l.timer.removeProduceTimer(a)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tooltip: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a15562UP/ZGQLbJBMSdvSN4", "tooltip"),
      cc.Class({
          extends: cc.Component,
          properties: {},
          start: function() {},
          onEnable: function() {
              this.node.cascadeOpacity = 100
          }
      }),
      cc._RF.pop()
  }
  , {}],
  truck: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "3070cO1D8hMNouN0bgUn5I6", "truck");
      var n = e("../all_modules");
      setTimeout(function() {
          n = e("../all_modules")
      }, 0),
      a.exports = {
          departure: 0,
          level: 1,
          diamondSkip: 0,
          isParked: !1,
          setTruckPos: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "middle";
              n.truck.node.stopAllActions(),
              n.truck.node.opacity = 255,
              n.truck.truckReturnInterval && clearInterval(n.truck.truckReturnInterval),
              e = e || "right",
              n.truck.node.x = n.truck["pos_" + e],
              n.truck.isParked = "middle" == e;
              var a = "middle" == e;
              n.uiButton.inactiveButton(n.truck.node, !a)
          },
          init: function() {
              n.truck.node = cc.find("Canvas/layout_home/scroll_layer/truck"),
              n.truck.speed = 400,
              n.truck.pos_left = -1400,
              n.truck.pos_middle = 40,
              n.truck.pos_right = 1400
          },
          setTruck: function(e) {
              e.TruckLevel && (n.truck.level = e.TruckLevel),
              e.TruckDeparture && (n.truck.departure = e.TruckDeparture)
          },
          showInfoBoardParked: function() {
              cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked").active = !0,
              cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away").active = !1,
              n.uiButton.inactiveButton(cc.find("Canvas/layout_home/scroll_layer/truck_info_board"), !1)
          },
          showInfoBoardAway: function() {
              cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away").active = !0,
              n.uiButton.inactiveButton(cc.find("Canvas/layout_home/scroll_layer/truck_info_board"), !0),
              n.uiBot.infoBoardAway.setDiamondButOnOff(!0)
          },
          parkedCallBack: function() {
              n.truck.isParked = !0,
              n.bot.reset(),
              n.truck.showInfoBoardParked(),
              window._truckDepartCount && _logFBEvent("event_truck_return_count", 1, {
                  count: window._truckDepartCount
              }),
              n.uiHome.buttonSellAndConfirmDisabled = !1
          },
          moveOut: function(e) {
              n.truck.isParked = !1;
              var a = n.truck.node
                , o = n.truck.pos_left
                , t = _abs(o - a.x) / n.truck.speed;
              a.stopAllActions(),
              a.runAction(cc.sequence(cc.moveTo(t, cc.p(o, a.y)), cc.callFunc(function() {
                  e && e()
              }))),
              cc.find("Canvas/layout_home/scroll_layer/truck/go").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/truck/bg-gold").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/truck/gold").active = !1,
              n.uiButton.inactiveButton(n.truck.node, !0)
          },
          moveIn: function(e) {
              var a = n.truck.node
                , o = n.truck.pos_middle;
              a.x = n.truck.pos_right;
              var t = _abs(o - a.x) / n.truck.speed;
              a.stopAllActions(),
              a.runAction(cc.sequence(cc.moveTo(t, cc.p(o, a.y)), cc.callFunc(function() {
                  window._isTruckSpeededUp || _logFBEvent("event_truck_returns_no_speedup", 1),
                  n.uiButton.inactiveButton(n.truck.node, !1),
                  cc.find("Canvas/layout_home/scroll_layer/truck/bg-gold").active = !0,
                  cc.find("Canvas/layout_home/scroll_layer/truck/gold").active = !0,
                  cc.find("Canvas/layout_home/scroll_layer/truck/go").active = !0,
                  n.truck.parkedCallBack(),
                  e && e()
              }))),
              cc.find("Canvas/layout_home/scroll_layer/truck/bg-gold").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/truck/gold").active = !1
          },
          skipWaitTime: function() {
              if (_thisPlayerInfo.diamond < n.truck.diamondSkip)
                  return _showLayout("popup_not_enough_diamond");
              var e = cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/time/time_label").remainingTime
                , a = e < 10 ? "0_10" : e < 30 ? "10_30" : e < 60 ? "30_60" : e < 120 ? "60_120" : "60_longer";
              _logFBEvent("event_truck_speedup_remaining_time", e),
              _logFBEvent("event_truck_speedup_count", 1, {
                  time_range: a
              }),
              window._isTruckSpeededUp = !0,
              _logFBEvent("event_first_time_use_diamond", 1, {
                  purpose: "speedup_truck"
              }),
              n.uiBot.infoBoardAway.setDiamondButOnOff(!1),
              n.data.skipTruck(function(e) {
                  _thisPlayerInfo.diamond = e.Diamond,
                  n.uiHome.setDiamond(_thisPlayerInfo.diamond),
                  n.truck.truckReturnInterval && clearInterval(n.truck.truckReturnInterval),
                  n.truck.moveIn()
              })
          },
          showUpgrade: function() {
              if (n.truck.level >= n.configs.trucks.length)
                  return _showLayout("popup_upgrade_truck_full");
              var e = n.configs.getTruckByLevel(n.truck.level + 1);
              n.uiBot.upgradeTruck.updateLabelButDiamond(e.diamond),
              n.uiBot.upgradeTruck.updateLabelButCoin(e.gold),
              n.uiBot.upgradeTruck.updateLabelCapacity(n.configs.getTruckByLevel(n.truck.level).capacity, e.capacity),
              _showLayout("popup_upgrade_truck")
          },
          upgradeCoin: function() {
              if (_thisPlayerInfo.gold < n.configs.trucks[n.truck.level].gold)
                  return _showLayout("popup_not_enough_gold");
              n.data.upgradeTruck("g", n.truck.level + 1, function(e) {
                  cc.log("upgrade truck by gold", e),
                  n.truck.setTruck(e),
                  _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                  _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                  _hideLayout("popup_upgrade_truck"),
                  n.bot.onTruckUpgraded(),
                  n.uiHome.setLevelHome(e),
                  n.achievements.checkNew(e)
              })
          },
          upgradeDiamond: function() {
              if (_thisPlayerInfo.diamond < n.configs.trucks[n.truck.level].diamond)
                  return _showLayout("popup_not_enough_diamond");
              n.data.upgradeTruck("d", n.truck.level + 1, function(e) {
                  cc.log("upgrade truck by diamond", e),
                  n.truck.setTruck(e),
                  _thisPlayerInfo.gold = parseInt(e.Gold || _thisPlayerInfo.gold),
                  _thisPlayerInfo.diamond = parseInt(e.Diamond || _thisPlayerInfo.diamond),
                  _hideLayout("popup_upgrade_truck"),
                  n.bot.onTruckUpgraded(),
                  n.uiHome.setLevelHome(e),
                  n.achievements.checkNew(e)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tut1: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "8ae26LlRAhERb4uxbkLKAhX", "tut1");
      var l = e("../all_modules");
      a.exports = [{
          prepareFunc: function() {
              l.tutorial.showNagScreen(),
              setTimeout(function() {
                  l.tutorial.hideNagScreen()
              }, 6e3);
              var e = cc.find("Canvas/layout_home/scroll_layer");
              e.stopAllActions();
              e.runAction(cc.sequence(cc.delayTime(.5), cc.spawn(cc.moveBy(1.15, cc.v2(-650, 0)).easing(cc.easeOut(1)), cc.moveBy(1.15, cc.v2(0, 210)).easing(cc.easeIn(2))), cc.moveBy(.2, cc.v2(0, 80)), cc.spawn(cc.moveBy(1.15, cc.v2(650, 0)).easing(cc.easeIn(1)), cc.moveBy(1.15, cc.v2(0, 210)).easing(cc.easeOut(2))), cc.spawn(cc.moveBy(1.15, cc.v2(650, 0)).easing(cc.easeOut(1)), cc.moveBy(1.15, cc.v2(0, -210)).easing(cc.easeIn(2))), cc.moveBy(.2, cc.v2(0, -80)), cc.spawn(cc.moveBy(1.15, cc.v2(-650, 0)).easing(cc.easeIn(1)), cc.moveBy(1.15, cc.v2(0, -210)).easing(cc.easeOut(2))), cc.delayTime(.5), cc.callFunc(function() {
                  l.tutorial.nextStep()
              })))
          },
          normalGuide: {
              guideManPosY: -3e3,
              introText: "",
              spotlight1: {
                  x: 0,
                  y: 0,
                  width: 4e3,
                  height: 4e3,
                  isCircle: !1
              }
          },
          isHideSkipBut: !0
      }, {
          normalGuide: {
              guideManPosY: 300,
              introText: "Hi I am Tom. Welcome to your farm!"
          },
          isHideSkipBut: !0,
          isShowGotIt: !0
      }, {
          normalGuide: {
              guideManPosY: 300,
              introText: "Tap the wheat once to plant a new wheat",
              spotlight2: {
                  nodePath: "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/tut1_spotlight_0",
                  isCircle: !0,
                  width: 150,
                  height: 150,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "plantFirstWheat",
              count: 1,
              timeout: .1
          }
      }, {
          normalGuide: {
              guideManPosY: 300,
              introText: "Plant wheat on all available ground slots",
              spotlight1: {
                  nodePath: "Canvas/layout_home/scroll_layer/tut1_spotlight_1",
                  width: 1200,
                  height: 230,
                  isCircle: !1
              },
              spotlight2: {
                  nodePath: "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/tut1_spotlight_0",
                  isCircle: !0,
                  width: 150,
                  height: 150,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "plantAllWheats",
              count: 4,
              timeout: .5
          }
      }, {
          normalGuide: {
              guideManPosY: 300,
              introText: "Now buy 1 ground slot to expand your field",
              spotlight1: {
                  nodePath: "Canvas/layout_home/scroll_layer/tut1_spotlight_2",
                  width: 1200,
                  height: 230,
                  isCircle: !1,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "buyAnotherSlot",
              count: 1,
              timeout: .6
          }
      }, {
          prepareFunc: function() {
              cc.find("Canvas/popup_tutorials/overlay/animation_upgrade").active = !0,
              cc.find("Canvas/layout_home/tut1_spotlight_3_merge_block").active = !0
          },
          postStepFunc: function() {
              cc.find("Canvas/popup_tutorials/overlay/animation_upgrade").active = !1,
              cc.find("Canvas/layout_home/tut1_spotlight_3_merge_block").active = !1
          },
          normalGuide: {
              guideManPosY: -3e3,
              introText: "Drag to merge and make a wheat level 2",
              spotlight1: {
                  nodePath: "Canvas/layout_home/scroll_layer/tut1_spotlight_3_merge",
                  width: 1200,
                  height: 380,
                  isCircle: !1
              }
          },
          stepEndCondition: {
              name: "upgradeToWheatLv2",
              count: 1,
              timeout: 1
          }
      }, {
          prepareFunc: function() {
              cc.find("Canvas/layout_home/tut1_spotlight_3_block").active = !0;
              var e = cc.find("Canvas/popup_tutorials/overlay/animation_harvest");
              e.active = !0;
              var t = e.getChildByName("fake_hand")
                , n = t.getChildByName("pointer")
                , i = cc.find("Canvas/layout_home/but_harvest")
                , a = i.getPosition();
              i.orgPosTut = l.utils.getGlobalPosition(i);
              var r = function() {
                  l.tutorial.showNagScreen();
                  var e = l.utils.getGlobalPosition(i)
                    , a = l.utils.global2LocalPosDiff(t, e.x, e.y);
                  t.x += a.x,
                  t.y += a.y,
                  n.stopAllActions(),
                  n.x = 85,
                  t.opacity = 255,
                  setTimeout(function() {
                      i.active = !1
                  }, 800)
              };
              r();
              var o = function() {
                  r();
                  var e = cc.find("Canvas/layout_home/scroll_layer/tut2_harvest_anchor")
                    , a = l.utils.getGlobalPosition(e)
                    , o = l.utils.global2LocalPosDiff(t, a.x, a.y);
                  t.stopAllActions(),
                  t.runAction(cc.sequence(cc.delayTime(1), cc.moveBy(1, cc.v2(o.x - 300, o.y)).easing(cc.easeInOut(2)), cc.moveBy(2, cc.v2(560, 0)).easing(cc.easeInOut(2)), cc.callFunc(function() {
                      i.active = !0,
                      n.runAction(cc.spawn(cc.moveBy(.8, cc.v2(300, 0)), cc.scaleTo(.4, 1.3))),
                      l.tutorial.hideNagScreen()
                  }), cc.fadeOut(.1)))
              };
              o(),
              _schedule("animDragHarvest", function() {
                  var e = i.getPosition();
                  a.x == e || a.y == e.y ? o() : _stopSchedule("animDragHarvest")
              }, 15)
          },
          postStepFunc: function() {
              cc.find("Canvas/popup_tutorials/overlay/animation_harvest").active = !1,
              cc.find("Canvas/layout_home/but_harvest").active = !0,
              _stopSchedule("animDragHarvest"),
              l.tutorial.hideNagScreen(),
              cc.find("Canvas/layout_home/tut1_spotlight_3_block").active = !1
          },
          normalGuide: {
              guideManPosY: 9999,
              introText: "Drag hand over the wheat to harvest",
              spotlight1: {
                  nodePath: "Canvas/layout_home/scroll_layer/tut1_spotlight_3",
                  width: 1200,
                  height: 880,
                  isCircle: !1
              }
          },
          stepEndCondition: {
              name: "harvestFirstTime",
              count: 1,
              timeout: 1
          }
      }, {
          prepareFunc: function() {
              var e = cc.find("Canvas/layout_home/scroll_layer/truck/go")
                , a = e.orgScale = e.scaleX;
              cc.find("Canvas/layout_home/scroll_layer/truck/go").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.4 * a), cc.scaleTo(.5, .8 * a))))
          },
          postStepFunc: function() {
              var e = cc.find("Canvas/layout_home/scroll_layer/truck/go");
              e.stopAllActions(),
              e.scale = e.orgScale
          },
          normalGuide: {
              guideManPosY: -100,
              introText: 'Click "sell" to sell the wheat you have just harvested',
              scrollToNode: {
                  path: "Canvas/layout_home/tut2_spotlight_1",
                  offset: {
                      x: 0,
                      y: -420
                  }
              },
              spotlight2: {
                  nodePath: "Canvas/layout_home/tut2_spotlight_1",
                  isCircle: !1,
                  width: 800,
                  height: 400,
                  hasPointHand: !1
              }
          },
          stepEndCondition: {
              name: "clickSellButton",
              count: 1,
              timeout: .4
          }
      }],
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tut2: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "f967bbg469GrYwMtUpyXzAK", "tut2");
      var d = e("../all_modules");
      a.exports = [{
          normalGuide: {
              guideManPosY: 0,
              introText: 'Tap the icon "go steal"',
              spotlight2: {
                  nodePath: "Canvas/layout_home/bg_shop/tut3_spotlight_4",
                  isCircle: !1,
                  width: 220,
                  height: 260,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "tapSteal",
              count: 1,
              timeout: .1
          }
      }, {
          normalGuide: {
              guideManPosY: 0,
              introText: "Let's find a random victim",
              spotlight2: {
                  nodePath: "Canvas/popup_find_victim/bg_holder/tut3_spotlight_6",
                  isCircle: !1,
                  width: 300,
                  height: 180,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "findRandomVictim",
              count: 1,
              timeout: 2
          }
      }, {
          normalGuide: {
              guideManPosY: 0,
              introText: "Here comes the field of your victim. Let's do it!"
          },
          stepEndTapScreen: !0
      }, {
          prepareFunc: function(e) {
              cc.find("Canvas/layout_victim/tut3_spotlight_7_block").active = !0;
              var a = cc.find("Canvas/popup_tutorials/overlay/animation_harvest_steal");
              a.active = !0;
              var t = a.getChildByName("gangtay2")
                , n = t.getChildByName("pointer")
                , i = cc.find("Canvas/layout_victim/but_harvest")
                , o = i.getPosition();
              i.orgPosTut = d.utils.getGlobalPosition(i);
              var r = function() {
                  d.tutorial.showNagScreen();
                  var e = d.utils.getGlobalPosition(i)
                    , a = d.utils.global2LocalPosDiff(t, e.x, e.y);
                  t.x += a.x + 8,
                  t.y += a.y - 18,
                  n.stopAllActions(),
                  n.x = 85,
                  t.opacity = 255,
                  setTimeout(function() {
                      i.active = !1
                  }, 800)
              };
              r();
              var l = function() {
                  r();
                  var e = cc.find("Canvas/layout_victim/scroll_layer/tut2_harvest_anchor")
                    , a = d.utils.getGlobalPosition(e)
                    , o = d.utils.global2LocalPosDiff(t, a.x, a.y);
                  t.stopAllActions(),
                  t.runAction(cc.sequence(cc.delayTime(1), cc.moveBy(1, cc.v2(o.x - 300, o.y)).easing(cc.easeInOut(2)), cc.moveBy(2, cc.v2(560, 0)).easing(cc.easeInOut(2)), cc.callFunc(function() {
                      i.active = !0,
                      n.runAction(cc.spawn(cc.moveBy(.8, cc.v2(300, 0)), cc.scaleTo(.4, 1.3))),
                      d.tutorial.hideNagScreen()
                  }), cc.fadeOut(.1)))
              };
              l(),
              _schedule("animDragSteal", function() {
                  var e = i.getPosition();
                  o.x == e || o.y == e.y ? l() : _stopSchedule("animDragSteal")
              }, 15)
          },
          postStepFunc: function() {
              cc.find("Canvas/layout_victim/but_harvest").dragTouchEndHandler({
                  x: 0,
                  y: -9999
              }),
              cc.find("Canvas/popup_tutorials/overlay/normal_guide/fake_hand").active = !1,
              cc.find("Canvas/popup_tutorials/overlay/animation_harvest_steal").active = !1,
              cc.find("Canvas/layout_victim/but_harvest").active = !0,
              _stopSchedule("animDragSteal"),
              d.tutorial.hideNagScreen(),
              cc.find("Canvas/layout_victim/tut3_spotlight_7_block").active = !1
          },
          normalGuide: {
              guideManPosY: 37e3,
              introText: "Drag the glove over all slots to steal the whole field",
              scrollToNode: {
                  path: "Canvas/layout_victim/scroll_layer/tut3_spotlight_7",
                  offset: {
                      x: 0,
                      y: 120
                  },
                  layoutName: "layout_victim"
              },
              spotlight1: {
                  nodePath: "Canvas/layout_victim/scroll_layer/tut3_spotlight_7",
                  isCircle: !1,
                  width: 1e3,
                  height: 1100,
                  hasPointHand: !1
              }
          },
          stepEndCondition: {
              name: "stealWheat",
              count: 3,
              timeout: .1
          }
      }, {
          prepareFunc: function(e) {
              cc.find("Canvas/layout_victim/tut3_spotlight_7_block").active = !0,
              cc.find("Canvas/layout_victim/tut3_spotlight_7_block").x += 200
          },
          postStepFunc: function() {
              cc.find("Canvas/layout_victim/tut3_spotlight_7_block").active = !1
          },
          normalGuide: {
              guideManPosY: 370,
              introText: "Good job!\nYou did it first time. Not like me before.",
              scrollToNode: {
                  path: "Canvas/layout_victim/scroll_layer/tut3_spotlight_7",
                  offset: {
                      x: 0,
                      y: 120
                  },
                  layoutName: "layout_victim"
              },
              spotlight1: {
                  nodePath: "Canvas/layout_victim/scroll_layer/tut3_spotlight_7",
                  isCircle: !1,
                  width: 1e3,
                  height: 1100,
                  hasPointHand: !1
              }
          },
          stepEndTapScreen: !0
      }, {
          normalGuide: {
              guideManPosY: 0,
              introText: 'Tap "Home" to go to your field',
              spotlight2: {
                  nodePath: "Canvas/layout_victim/bg_shop/steal/steal/tut3_spotlight_9",
                  isCircle: !1,
                  width: 200,
                  height: 300,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "tapHomeAfterSteal",
              count: 1,
              timeout: .1
          }
      }],
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tut3: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "57d79q2LfBIhYHM3XTb0Uk4", "tut3");
      var t = e("../all_modules");
      a.exports = [{
          prepareFunc: function() {
              t.truck.isParked || t.truck.showInfoBoardParked()
          },
          postStepFunc: function() {
              t.truck.isParked || t.truck.showInfoBoardAway()
          },
          normalGuide: {
              guideManPosY: -100,
              introText: "Touch the board to see the new requirements",
              scrollToNode: {
                  path: "Canvas/layout_home/scroll_layer/tut2_spotlight_2",
                  offset: {
                      x: 0,
                      y: -420
                  }
              },
              spotlight1: {
                  nodePath: "Canvas/layout_home/scroll_layer/tut2_spotlight_2",
                  isCircle: !1,
                  width: 290,
                  height: 220,
                  hasPointHand: !0
              }
          },
          stepEndCondition: {
              name: "boardClicked",
              count: 1,
              timeout: .01
          }
      }, {
          normalGuide: {
              guideManPosY: 0,
              introText: "Fulfill the extra requirements to increase total value of your products"
          },
          stepEndTapScreen: !0
      }, {
          normalGuide: {
              guideManPosY: -100,
              introText: "Fulfill product of requirement 2 to increase total value by 150%",
              spotlight2: {
                  nodePath: "Canvas/popup_adjust_order/tut3_spotlight_1",
                  isCircle: !1,
                  width: 480,
                  height: 200,
                  hasPointHand: !1
              }
          },
          stepEndTapScreen: !0
      }, {
          normalGuide: {
              guideManPosY: -100,
              introText: "Fulfill product of requirement 3 to increase total value by 200%",
              spotlight2: {
                  nodePath: "Canvas/popup_adjust_order/tut3_spotlight_2",
                  isCircle: !1,
                  width: 480,
                  height: 200,
                  hasPointHand: !1
              }
          },
          stepEndTapScreen: !0
      }, {
          normalGuide: {
              guideManPosY: -9999,
              introText: "",
              spotlight2: {
                  nodePath: "Canvas/popup_adjust_order/tut3_spotlight_3",
                  isCircle: !1,
                  width: 160,
                  height: 160,
                  hasPointHand: !0
              }
          },
          stepEndTapScreen: !1,
          stepEndCondition: {
              name: "closeAdjustOrder",
              count: 1,
              timeout: .2
          }
      }, {
          normalGuide: {
              guideManPosY: 0,
              introText: "Fulfill your requirements and continue building your farm"
          },
          stepEndTapScreen: !0
      }],
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tut_use_theme: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "3103ckKtq1EYKR6kyiOprwo", "tut_use_theme");
      var t = e("../all_modules");
      a.exports = [{
          prepareFunc: function() {
              t.uiStore.showShopTheme(),
              t.theme.applyTheme("theme_default")
          },
          normalGuide: {
              guideManPosY: -200,
              introText: "Touch to set theme of your farm!",
              spotlight2: {
                  nodePath: "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_use/tut_spotlight_use_theme_1",
                  width: 300,
                  height: 150,
                  hasPointHand: !0
              }
          },
          isHideSkipBut: !0,
          stepEndCondition: {
              name: "useNewTheme",
              count: 1,
              timeout: .1
          }
      }, {
          normalGuide: {
              guideManPosY: -200,
              introText: "Well done!\nYou are smarter than I think\nNow You know the way to set theme."
          },
          isHideSkipBut: !0,
          stepEndTapScreen: !0,
          postStepFunc: function() {
              _hideLayout("popup_shop"),
              _logFBEvent("event_done_tut_guide_after_buytheme"),
              t.popups.endCurrentStartPopup()
          }
      }],
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  tutorial: [function(e, c, a) {
      "use strict";
      cc._RF.push(c, "c9b13Rfx25LWItBVkw4TeCA", "tutorial");
      var u = e("../all_modules");
      setTimeout(function() {
          u = e("../all_modules")
      }, 0),
      c.exports = {
          logSessionTimeAfterSkipTut: function(a) {
              var o = function(e) {
                  _logFBEvent("event_" + u.tutorial.currentTutname + "_skip_" + a + "_extra_play_time", 1, {
                      timePassed: e
                  })
              };
              [20, 30, 45, 60, 90, 120].map(function(a) {
                  setTimeout(function() {
                      if (o(a),
                      120 == a) {
                          var e = 120;
                          setInterval(function() {
                              o(e += 30)
                          }, 3e4)
                      }
                  }, 1e3 * a)
              })
          },
          init: function() {
              u.uiButton.bindButton(["Canvas/popup_tutorials/overlay/normal_guide/label_skip"], function() {
                  u.tutorial.endTutorial(),
                  _logFBEvent("event_" + u.tutorial.currentTutname + "_skip_first"),
                  u.tutorial.logSessionTimeAfterSkipTut("first"),
                  "tut1" == u.tutorial.currentTutname && (u.game.isSkipTut1First = !0)
              }),
              u.uiButton.bindButton(["Canvas/popup_tutorials/label_skip"], function() {
                  u.tutorial.endTutorial(),
                  _logFBEvent("event_" + u.tutorial.currentTutname + "_skip_middle", 1, {
                      lastStep: u.tutorial.currentStepIndex + 1
                  }),
                  u.tutorial.logSessionTimeAfterSkipTut("middle")
              }),
              u.uiButton.bindButton(["Canvas/popup_tutorials/overlay/frame_animation/but_great"], function() {
                  u.tutorial.nextStep()
              }),
              u.uiButton.bindButton(["Canvas/popup_tutorials/overlay/normal_guide/but_next"], function() {
                  u.tutorial.nextStep(),
                  _logFBEvent("event_tut1_user_click_got_it")
              }),
              cc.find("Canvas/popup_tutorials").active = !0;
              var e = cc.find("Canvas/popup_tutorials/overlay/gangtay2");
              e.active = !0,
              e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.3, cc.p(0, -20)).easing(cc.easeOut(1)), cc.moveBy(.3, cc.p(0, 20)).easing(cc.easeOut(1))))),
              e.active = !1,
              cc.find("Canvas/popup_tutorials").active = !1,
              u.tutorial.currenttagetNodeArr = [],
              u.tutorial.pendingPopupArr = []
          },
          startTutorial: function(e) {
              _showLayout("popup_tutorials"),
              cc.find("Canvas/popup_tutorials").opacity = 0,
              setTimeout(function() {
                  cc.find("Canvas/popup_tutorials").runAction(cc.fadeIn(.3))
              }, 400),
              u.tutorial.isTutShown = !0,
              u.tutorial.currentTut = e,
              u.tutorial.currentStepIndex = 0,
              u.tutorial.renderStep(e[0]),
              cc.find("Canvas/layout_home/bg_shop/scroll_plant").getComponent(cc.ScrollView).enabled = !1
          },
          endTutorial: function() {
              u.tutorial.postStepFunc && u.tutorial.postStepFunc(),
              u.tutorial.currentTut = null,
              _hideLayout("popup_tutorials"),
              u.tutorial.currenttagetNodeArr.map(function(e) {
                  return e.active = !1
              }),
              cc.find("Canvas/layout_home/bg_shop/scroll_plant").getComponent(cc.ScrollView).enabled = !0,
              setTimeout(function() {
                  _log(" endTutorial - calling _fbSubscribeBot() --- >>> "),
                  window._fbSubscribeBot(u.tutorial.showPendingPopups)
              }, 800)
          },
          showPendingPopups: function() {
              u.tutorial.pendingPopupArr.map(function(e) {
                  _showLayout(e.layoutName),
                  e.sound && u.sound.playSFX(e.sound)
              }),
              u.tutorial.pendingPopupArr = []
          },
          isShowingTut: function() {
              return !!u.tutorial.currentTut
          },
          nextStep: function() {
              if (_log(" nextStep called !!! "),
              clearTimeout(u.tutorial.nextStepTimeVar),
              u.tutorial.currenttagetNodeArr.map(function(e) {
                  return e.active = !1
              }),
              u.tutorial.currenttagetNodeArr = [],
              u.tutorial.currentTut) {
                  _logFBEvent("event_" + u.tutorial.currentTutname + "_done_step_X", 1, {
                      doneStep: u.tutorial.currentStepIndex + 1
                  });
                  var e = u.tutorial.currentTut[++u.tutorial.currentStepIndex];
                  e ? (u.tutorial.postStepFunc && u.tutorial.postStepFunc(),
                  ["Canvas/popup_tutorials/bg", "Canvas/popup_tutorials/overlay"].map(function(e) {
                      cc.find(e).off("touchend"),
                      cc.find(e).off("touchcancel"),
                      cc.find(e).off("touchstart")
                  }),
                  u.tutorial.renderStep(e)) : (u.tutorial.endTutorial(),
                  _logFBEvent("event_" + u.tutorial.currentTutname + "_complete"))
              }
          },
          checkStepEndCondition: function(e) {
              u.tutorial.isShowingTut() && u.tutorial.currentStepEndCondition && e == u.tutorial.currentStepEndCondition.name && (u.tutorial.currentStepEndCondition.count--,
              u.tutorial.currentStepEndCondition.count <= 0 && (u.tutorial.showNagScreen(),
              u.tutorial.currentStepEndCondition.name = null,
              setTimeout(function() {
                  u.tutorial.hideNagScreen(),
                  u.tutorial.nextStep()
              }, 1e3 * (u.tutorial.currentStepEndCondition.timeout || 1))))
          },
          renderStep: function(e) {
              if (e) {
                  var a = e.animationGuide
                    , o = e.normalGuide
                    , t = e.isHideSkipBut
                    , n = e.prepareFunc;
                  if (n && n(e),
                  u.tutorial.postStepFunc = e.postStepFunc,
                  cc.find("Canvas/popup_tutorials/label_skip").active = !t,
                  cc.find("Canvas/popup_tutorials/overlay/normal_guide/label_skip").active = e.isShowGotIt,
                  cc.find("Canvas/popup_tutorials/overlay/normal_guide/but_next").active = e.isShowGotIt,
                  e.stepEndTimeout && (u.tutorial.nextStepTimeVar = setTimeout(function() {
                      u.tutorial.nextStep()
                  }, _floor(1e3 * e.stepEndTimeout))),
                  e.stepEndTapScreen && _timer0(function() {
                      u.uiButton.bindButton(["Canvas/popup_tutorials/bg", "Canvas/popup_tutorials/overlay"], function() {
                          u.tutorial.currentTut && u.tutorial.currentTut[u.tutorial.currentStepIndex] && u.tutorial.currentTut[u.tutorial.currentStepIndex].stepEndTapScreen && u.tutorial.nextStep()
                      }, !1)
                  }),
                  u.tutorial.currentStepEndCondition = e.stepEndCondition,
                  a) {
                      c.exports.showAnimation(a.headerText);
                      var i = cc.find("Canvas/popup_tutorials/overlay/frame_animation/khung-nho");
                      i.children.map(function(e) {
                          return e.active = !1
                      }),
                      i.getChildByName(a.clipName).active = !0;
                      var r = cc.find("Canvas/popup_tutorials/overlay/frame_animation/but_great");
                      r.active = !1,
                      setTimeout(function() {
                          r.active = !0
                      }, 3e3)
                  } else if (o) {
                      c.exports.hideAnimation();
                      var l = function() {
                          u.tutorial.adjustTutSpotlights(o.spotlight1, o.spotlight2)
                      };
                      if (o.scrollToNode) {
                          var d = cc.find(o.scrollToNode.path);
                          u.controlScrollLayer.scrollToNode(d, o.scrollToNode.layoutName || "layout_home", o.scrollToNode.offset || {
                              x: 0,
                              y: 0
                          }, !0, l)
                      } else
                          l();
                      cc.find("Canvas/popup_tutorials/overlay/normal_guide").y = o.guideManPosY;
                      var s = cc.find("Canvas/popup_tutorials/overlay/normal_guide/label_intro");
                      s.getComponent(cc.Label).fontSize = o.fontSize || 30,
                      u.gameLanguage.setLabelDataAndRender(s, [u.tutorial.currentTutname, u.tutorial.currentStepIndex])
                  }
              }
          },
          showNagScreen: function(e) {
              cc.find("Canvas/popup_tutorials/nag_screen").active = !0
          },
          hideNagScreen: function() {
              cc.find("Canvas/popup_tutorials/nag_screen").active = !1
          },
          pointHandToSpot: function(e, a) {
              var o = cc.find("Canvas/popup_tutorials/overlay/gangtay2");
              o.setPosition(e, a + o.height / 2),
              o.active = !0
          },
          adjustTutSpotlights: function(e, a) {
              e = e || {
                  x: 0,
                  y: 999,
                  width: 0,
                  height: 0
              },
              a = a || {
                  x: 0,
                  y: -999,
                  width: 0,
                  height: 0
              };
              var o = cc.find("Canvas/popup_tutorials/spotlight1")
                , t = cc.find("Canvas/popup_tutorials/spotlight2");
              if (e.nodePath && _isString(e.nodePath)) {
                  var n = cc.find(e.nodePath);
                  u.tutorial.currenttagetNodeArr.push(n),
                  n.active = !0;
                  var i = u.utils.getGlobalPosition(n)
                    , r = u.utils.global2LocalPosDiff(o, i.x, i.y);
                  e.x = o.x + r.x,
                  e.y = o.y + r.y
              }
              if (a.nodePath && _isString(a.nodePath)) {
                  var l = cc.find(a.nodePath);
                  u.tutorial.currenttagetNodeArr.push(l),
                  l.active = !0;
                  var d = u.utils.getGlobalPosition(l)
                    , s = u.utils.global2LocalPosDiff(t, d.x, d.y);
                  a.x = t.x + s.x,
                  a.y = t.y + s.y
              }
              o.setPosition(e.x, e.y),
              o.width = e.width,
              o.height = e.height,
              o.getChildByName("highlight vuong").active = !e.isCircle,
              o.getChildByName("highlight tron").active = e.isCircle,
              t.setPosition(a.x, a.y),
              t.width = a.width,
              t.height = a.height,
              t.getChildByName("highlight vuong").active = !a.isCircle,
              t.getChildByName("highlight tron").active = a.isCircle;
              var c = o.getChildByName("piece_4");
              c.height = o.y - t.y - (o.height + t.height) / 2,
              c.y = -o.height / 2,
              e.hasPointHand ? u.tutorial.pointHandToSpot(e.x, e.y + e.height / 2) : a.hasPointHand ? u.tutorial.pointHandToSpot(a.x, a.y + a.height / 2) : cc.find("Canvas/popup_tutorials/overlay/gangtay2").active = !1
          },
          showAnimation: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "guide";
              u.utils.setLabelText(cc.find("Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header"), e),
              cc.find("Canvas/popup_tutorials/overlay/frame_animation").active = !0,
              cc.find("Canvas/popup_tutorials/overlay/normal_guide").active = !1,
              c.exports.adjustTutSpotlights(null, null)
          },
          hideAnimation: function() {
              cc.find("Canvas/popup_tutorials/overlay/frame_animation").active = !1,
              cc.find("Canvas/popup_tutorials/overlay/normal_guide").active = !0
          },
          prepareTut2: function() {
              u.data.renewQuest(function(e) {
                  u.bot.reset(e, !0)
              })
          },
          fakeVictimData: function() {
              return {
                  serverTime: _time(),
                  StealArrest: 5,
                  DogId: 1,
                  LoginTime: 1550150755003,
                  StealCount: 9,
                  PlayerLevel: 9,
                  PlayerExp: 772,
                  ActiveTime: 1550151007045,
                  PlayerId: "c25a9ca0-1391-4334-9fa1-9b1b1ee982ed",
                  StolenCount: 49,
                  DogName: "dog",
                  Diamond: 127,
                  UserName: "victim",
                  Gold: 20933,
                  Field: {
                      "A-1-1": {
                          CountedTime: 4e3,
                          HarvestTime: 1550744219805,
                          Level: 10,
                          Product: "NGO",
                          Weight: 1
                      },
                      "A-1-2": {
                          CountedTime: 3e3,
                          HarvestTime: 1550744219805,
                          Level: 5,
                          Product: "KHOAI",
                          Weight: 1
                      },
                      "A-1-3": {
                          CountedTime: 2e3,
                          HarvestTime: 1550744212159,
                          Level: 8,
                          Product: "DUA",
                          Weight: 1
                      },
                      "A-1-4": {
                          CountedTime: 1e3,
                          HarvestTime: 1550744212159,
                          Level: 10,
                          Product: "BINGO",
                          Weight: 1
                      },
                      "A-1-5": {},
                      "A-1-6": {},
                      "A-2-1": {
                          CountedTime: 0,
                          HarvestTime: 1550744212159,
                          Level: 7,
                          Product: "DUA",
                          Weight: 1
                      },
                      "A-2-2": {
                          CountedTime: 5e3,
                          HarvestTime: 1550744212159,
                          Level: 9,
                          Product: "BINGO",
                          Weight: 1
                      },
                      "A-2-3": {
                          HarvestTime: 1550743974438,
                          Product: "BOSUA",
                          Level: 2,
                          Weight: 2
                      },
                      "A-2-4": {},
                      "A-2-5": {},
                      "A-2-6": {},
                      "A-3-1": {
                          CountedTime: 0,
                          HarvestTime: 1550744219805,
                          Level: 10,
                          Product: "CACHUA",
                          Weight: 1
                      },
                      "A-3-2": {
                          CountedTime: 1e3,
                          HarvestTime: 1550744219805,
                          Level: 6,
                          Product: "LUA",
                          Weight: 1
                      },
                      "A-3-3": {},
                      "A-3-4": {},
                      "A-3-5": {},
                      "A-3-6": {},
                      "A-4-1": {
                          HarvestTime: 1550743982535,
                          Product: "BOSUA",
                          Level: 3,
                          Weight: 2
                      },
                      "A-4-2": {},
                      "A-4-3": {
                          CountedTime: 28e3,
                          HarvestTime: 1550744191489,
                          Level: 8,
                          Product: "GAMAI",
                          Weight: 2
                      },
                      "A-4-4": {},
                      "A-4-5": {},
                      "A-4-6": {},
                      "A-5-1": {},
                      "A-5-2": {},
                      "A-5-3": {},
                      "A-5-4": {},
                      "A-5-5": {},
                      "A-5-6": {}
                  },
                  LoginStreak: 2,
                  SessionId: "a57c23b6-0dbf-4dbc-a1ab-4f6e7d2c36fc"
              }
          },
          orderSellFake: function() {
              for (var e = cc.find("Canvas/layout_home/scroll_layer/truck"), a = e.getChildByName("go"), o = cc.find("Canvas"), t = a, n = o.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))), i = o.convertToNodeSpaceAR(cc.find("Canvas/layout_home/bg_gold").convertToWorldSpaceAR(cc.v2(0, 0))), r = cc.find("Canvas/nodeCaches/claim-gold"), l = cc.pDistance(n, i), d = 0, s = 0; s < 10; s++) {
                  var c = u.utils.copyNodeTo(r, o);
                  c.setPosition(n),
                  c.runAction(cc.sequence(cc.delayTime(d), cc.moveBy(.3, u.utils.random0ToX(150) - 75, u.utils.random0ToX(150) - 75).easing(cc.easeOut(5)), cc.moveTo(l / 420, i).easing(cc.easeIn(5)), cc.removeSelf(!0))),
                  d += .02 * _random() + .02
              }
              a.active = !1,
              u.tutorial.temporaryDisableInfoBoard = !0,
              setTimeout(function() {
                  e.runAction(cc.sequence(cc.moveBy(3, cc.v2(-1e3, 0)), cc.callFunc(function() {
                      e.x += 2e3
                  }), cc.moveBy(3, cc.v2(-1e3, 0)), cc.callFunc(function() {
                      a.active = !0,
                      u.tutorial.temporaryDisableInfoBoard = !1,
                      u.uiHome.buttonSellAndConfirmDisabled = !1
                  })))
              }, 100)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_achievement: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "865e8uvsrxESLKjJj4Mrtxv", "ui_achievement");
      var p = e("../all_modules");
      setTimeout(function() {
          p = e("../all_modules")
      }, 0),
      a.exports = {
          showNew: function(o) {
              p.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_new_achievement/bg_holder/title"), o.title);
              var t = cc.find("Canvas/popup_new_achievement/bg_holder/rewards");
              ["diamond", "gold", "exp"].map(function(e) {
                  var a = t.getChildByName(e);
                  a.active = !!o[e],
                  p.utils.setLabelTextPrice(a, "+" + o[e]),
                  p.utils.setLabelTextPrice(a.getChildByName("dummyLbl"), "+" + o[e])
              });
              var e = p.uiAchievement.achivementImgNode(o.key, o.subKey);
              e.setPosition(0, 0),
              e.scale *= 1.35;
              var a = cc.find("Canvas/popup_new_achievement/bg_holder/img_mask");
              a.removeAllChildren();
              var n = p.utils.copyNodeTo(e, a);
              "UP_XEHANG" == o.key && (n.scale *= 1.8 / 1.35),
              p.x2reward.resetNewPopup("popup_new_achievement"),
              p.tutorial.isShowingTut() ? p.tutorial.pendingPopupArr.push({
                  layoutName: "popup_new_achievement",
                  sound: "level_up_and_achievement_complete"
              }) : (_showLayout("popup_new_achievement"),
              p.sound.playSFX("level_up_and_achievement_complete"),
              _logFBEvent("event_new_achievement_show")),
              cc.find("Canvas/popup_new_achievement/bg_holder/btn_confirm").claim = o,
              p.fx.unconfirmedPopupArr.push({
                  name: "popup_new_achievement",
                  gold: o.gold,
                  diamond: o.diamond
              }),
              p.fx.updateNonPendingGoldDiamond();
              var i = "Canvas/popup_new_achievement/bg_holder/share"
                , r = cc.find(i)
                , l = r.getChildByName("icon_tick");
              l.active = !1,
              r.isClickBound || (p.uiButton.bindButton([i], function() {
                  l.active = !l.active
              }),
              r.isClickBound = !0),
              p.uiAchievement.currentAchievementInfo = {
                  title: o.title,
                  desc: o.desc,
                  imgNode: n
              }
          },
          claimNew: function(e) {
              if (e.claim.gold) {
                  var a = cc.find("Canvas/popup_new_achievement/bg_holder/rewards/gold/icon gold");
                  p.fx.claimGold(a, e.claim.gold, "popup_new_achievement", !0)
              }
              if (e.claim.diamond) {
                  var o = cc.find("Canvas/popup_new_achievement/bg_holder/rewards/diamond/icon gold");
                  p.fx.claimDiamond(o, e.claim.diamond, "popup_new_achievement", !0)
              }
              if (e.claim.exp) {
                  var t = cc.find("Canvas/popup_new_achievement/bg_holder/rewards/exp/star-exp");
                  p.fx.claimXpFx(t, e.claim.exp)
              }
              _hideLayout("popup_new_achievement"),
              cc.find("Canvas/popup_new_achievement/bg_holder/share/icon_tick").active && window.FBInstant && FBInstant.context.chooseAsync().then(function() {
                  var e = p.uiAchievement.currentAchievementInfo
                    , a = e.title
                    , o = e.desc
                    , t = e.imgNode;
                  p.social.shareNewAchievement(a, o, t),
                  p.uiLayout.showToolTip("SHARED SUCCESSFULLY")
              })
          },
          showList: function(e) {
              p.utils.setLabelText(cc.find("Canvas/popup_achievement_list/bg_holder/label_progress"), e.earnedStars + "/" + e.configTotalStars);
              var u = cc.find("Canvas/popup_achievement_list/bg_holder/scrollview/view/content");
              u.removeAllChildren();
              var _ = cc.find("Canvas/popup_achievement_list/bg_holder/scrollview/row_template");
              e.map(function(o) {
                  var t = p.utils.copyNodeTo(_, u);
                  t.active = !0,
                  t.getChildByName("complete_label").active = o.isCompleted,
                  ["title", "desc"].map(function(e) {
                      var a = t.getChildByName(e) || t.getChildByName("awards").getChildByName(e);
                      a.active = !!o[e],
                      p.gameLanguage.setLabelDataAndRender(a, o[e])
                  }),
                  ["diamond", "gold", "exp"].map(function(e) {
                      var a = t.getChildByName(e) || t.getChildByName("awards").getChildByName(e);
                      a.active = !!o[e],
                      p.utils.setLabelTextPrice(a, o[e])
                  });
                  var e = t.getChildByName("proggress_bg").width;
                  t.getChildByName("proggress_bar").width = e * o.progress;
                  for (var a = Math.floor(2 * o.starNum), n = [0, 0, 0, 0, 0], i = 0; i < a; i++) {
                      n[_floor(i / 2)] += .5
                  }
                  var r = t.getChildByName("star_range")
                    , l = cc.find("Canvas/popup_achievement_list/bg_holder/scrollview/star_template");
                  n.map(function(e, a) {
                      p.utils.setNodeImg(r.children[a], l.getChildByName("star_" + e))
                  });
                  var d = p.uiAchievement.achivementImgNode(o.key, o.subKey);
                  d.setPosition(0, 0);
                  var s = t.getChildByName("img_mask")
                    , c = p.utils.copyNodeTo(d, s);
                  "UP_XEHANG" == o.key && (c.anchorX = .3)
              }),
              _showLayout("popup_achievement_list"),
              _logFBEvent("event_list_achievement")
          },
          achivementImgNode: function(e, a) {
              var o = "Canvas/nodeCaches/achievements/";
              switch (e) {
              case "UP_XEHANG":
                  return p.utils.copyNodeTo(cc.find(o + "UP_XEHANG"));
              case "UP_NHAKHO":
                  return p.utils.copyNodeTo(cc.find(o + "UP_NHAKHO"));
              case "UNLOCK_SLOT":
                  return p.utils.copyNodeTo(cc.find(o + "UNLOCK_SLOT"));
              default:
                  var t = e.replace("UP_", "");
                  if (!p.configs.products[t])
                      return new cc.Node;
                  var n = p.configs.isAnimalProduct[t]
                    , i = parseInt(a.replace("UP_" + t + "_", ""))
                    , r = void 0;
                  return (r = n ? p.uiAnimal.renderNewAnimal(null, t, i, 0, null, null, !0) : p.uiTree.renderNewTree(null, t, i, 0, null, !0)).scale = n ? .35 : .7,
                  r
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_animal: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "e58c8CvumFBe44nRhG9fgZ4", "ui_animal");
      var l = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
        , _ = e("../all_modules");
      setTimeout(function() {
          _ = e("../all_modules")
      }, 0),
      a.exports = {
          setStateDamage: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = _.uiSlot.getProductNode(e, a);
              if (o) {
                  o.isDamaged = !0;
                  var t = o.getChildByName("bg");
                  t.orgSFrame || (t.orgSFrame = t.getComponent(cc.Sprite).spriteFrame),
                  _.utils.setNodeImg(t, cc.find("Canvas/nodeCaches/animal_bgs/animal_bg"));
                  var n = o.getChildByName("tree_rice").getChildByName("tree_rice")
                    , i = ("layout_home" == a ? _.game.mySlotList : _.game.victimSlotList)[e].product.id;
                  n.damageSpriteFrame || (n.damageSpriteFrame = cc.find("Canvas/nodeCaches/product_damage_states/" + i).getComponent(cc.Sprite).spriteFrame),
                  n.getComponentsInChildren(cc.Sprite).map(function(e) {
                      var a = e.node;
                      if (/^\d$/g.test(a.name)) {
                          var o = e.spriteFrame;
                          o != n.damageSpriteFrame && (a.originalSpriteFrame = o,
                          _.utils.setNodeImg(a, n.damageSpriteFrame, !0))
                      }
                  })
              }
          },
          setStateNonDamage: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = _.uiSlot.getProductNode(e, a);
              if (o) {
                  o.isDamaged = !1;
                  var t = o.getChildByName("bg");
                  t.orgSFrame && _.utils.setNodeImg(t, t.orgSFrame),
                  o.getChildByName("tree_rice").getChildByName("tree_rice").getComponentsInChildren(cc.Sprite).map(function(e) {
                      var a = e.node;
                      a.originalSpriteFrame && _.utils.setNodeImg(a, a.originalSpriteFrame, !0)
                  }),
                  _.theme.applyThemeToNewAnimal(o)
              }
          },
          get4SlotsAnimal: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = e.split("-")
                , t = l(o, 3)
                , n = t[0]
                , i = t[1]
                , r = t[2];
              return [n + "-" + (i = parseInt(i)) + "-" + (r = parseInt(r)), n + "-" + (i + 1) + "-" + r, n + "-" + i + "-" + (r + 1), n + "-" + (i + 1) + "-" + (r + 1)].map(function(e) {
                  return _.uiSlot.getSlotNode(e, a)
              })
          },
          setScaleAnimalSlots: function(e, a) {
              _.uiAnimal.get4SlotsAnimal(e).map(function(e) {
                  e.scale = a,
                  e.color = 1 == a ? cc.color("#ffffff") : cc.color("#FA8484")
              })
          },
          setAnimalLevelVisual: function(e, a, o) {
              e.removeAllChildren(),
              _.utils.moveNodeTo(cc.find("Canvas/nodeCaches/" + a + "/" + o), e, !0).setPosition(0, 0)
          },
          renderAnimal: function(e, a, o, t) {
              var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "layout_home"
                , i = arguments[5]
                , r = cc.find("Canvas/" + n + "/scroll_layer/layer_product")
                , l = r.getChildByName(e)
                , d = _.uiAnimal.renderNewAnimal(e, a, o, t, n, i)
                , s = "layout_victim" == n;
              if (l && !s)
                  d.children.map(function(e) {
                      "bg" != e.name && "ani" != e.name && (l.getChildByName(e.name).removeFromParent(!0),
                      _.utils.moveNodeTo(e, l))
                  }),
                  l.getChildByName("bg").setLocalZOrder(0),
                  l.getChildByName("tree_rice").setLocalZOrder(2),
                  l.getChildByName("ani").setLocalZOrder(3),
                  l.getChildByName("ani").zIndex = 999;
              else {
                  l && s && l.removeFromParent(!0),
                  d.name = e,
                  d.isAnimalNode = !0,
                  r.addChild(d),
                  d.zIndex = _.uiSlot.getSlotZIndex(e);
                  var c = _.uiSlot.getSlotNode(e, n);
                  _.utils.setPosToOtherNode(d, c),
                  d.x += c.width / 2 + c.parent.getComponent(cc.Layout).spacingX / 2,
                  d.y -= c.height / 2 + c.parent.getComponent(cc.Layout).spacingX / 2,
                  d.isDraggable || "layout_home" != n || _.control.initDragAnimal(d),
                  _.controlLib.setDroppable(d),
                  _.uiAnimal.get4SlotsAnimal(e, n).map(function(e) {
                      e.productObj = i
                  })
              }
              "layout_victim" == n && (_.uiSlot.updateVictimOutput(e, a, o, t),
              _.uiAnimal.get4SlotsAnimal(e, n).map(function(e) {
                  e.getComponent(cc.Sprite).enabled = !1
              }));
              var u = _.uiSlot.getProductNode(e, n);
              u && u.isDamaged && _.uiAnimal.setStateDamage(e, n)
          },
          renderNewAnimal: function(e, a, o, t) {
              var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "layout_home"
                , i = (arguments[5],
              6 < arguments.length && void 0 !== arguments[6] && arguments[6])
                , r = cc.instantiate(_.prefabList.animal);
              if (_timer0(function() {
                  _.theme.applyThemeToNewAnimal(r)
              }),
              "layout_victim" == n) {
                  var l = _.utils.copyNodeTo(cc.find("Canvas/nodeCaches/victim_output"), r);
                  l.name = "bg_output",
                  l.setPosition(0, -80)
              }
              r.getChildByName("bg").active = !0,
              r.getChildByName("tree_rice").active = !0;
              var d = r.getChildByName("tree_rice").getChildByName("fence_1")
                , s = r.getChildByName("tree_rice").getChildByName("fence_2")
                , c = r.getChildByName("tree_rice").getChildByName("tree_rice")
                , u = r.getChildByName("tree_rice").getChildByName("seed_rice");
              return d.active = !1,
              s.active = !1,
              c.active = !1,
              u.active = !1,
              0 == o ? (u.active = !0,
              u.getChildByName("rice").getComponent(cc.Sprite).spriteFrame = _.uiSlot.getTreeSpriteFrame(a, o)) : (c.active = !0,
              _.uiAnimal.setAnimalLevelVisual(c, a, 5 < o ? 5 : o)),
              6 <= o && (o = _min(o, 10),
              d.active = s.active = !0,
              _.utils.setNodeImg(d, cc.find("Canvas/nodeCaches/square_bgs_animal/hangrao" + o + "1")),
              _.utils.setNodeImg(s, cc.find("Canvas/nodeCaches/square_bgs_animal/hangrao" + o + "2"))),
              0 < t && !i && _.fx.hasOutput(e, n),
              r
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_bot: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "7a34f32hIJDorWTGUZu7Ti8", "ui_bot");
      var c = e("../all_modules");
      setTimeout(function() {
          c = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              c.uiBot.adjustOrder.initSlider()
          },
          bot: {
              refreshAll: function() {
                  var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                  c.uiBot.bot.autoUpdateOrderDetail(e),
                  c.uiBot.bot.autoUpdateCheckList(),
                  c.uiBot.bot.autoUpdateInfoBoard()
              },
              autoUpdateOrderDetail: function(e) {
                  for (var a in e && c.uiBot.adjustOrder.renderProductGrid(c.storage.allProducts),
                  c.bot.productList)
                      c.uiBot.adjustOrder.setLabelSellQuantity(a, c.bot.productList[a]);
                  c.uiBot.adjustOrder.setMarkStorage(c.bot.totalQuantity / c.bot.truckCapacity);
                  var o = !!c.bot.quest1 && c.bot.quest1.isEnough
                    , t = !!c.bot.quest2 && c.bot.quest2.isEnough;
                  c.uiBot.adjustOrder.setMark15(o),
                  c.uiBot.adjustOrder.setMark20(t),
                  c.uiBot.adjustOrder.setCoin(c.bot.totalCoin),
                  c.bot.isAutoUpdate && c.uiBot.adjustOrder.setSliderNum(0),
                  c.uiBot.adjustOrder.rePickProduct(),
                  c.uiBot.adjustOrder.setLabelMaxCapacity(c.bot.truckCapacity),
                  c.uiBot.adjustOrder.setLabelCurrentStorageNum(c.bot.totalQuantity);
                  var n = c.bot.quest1 ? c.bot.quest1.productName : ""
                    , i = c.bot.quest2 ? c.bot.quest2.productName : "";
                  if (c.bot.quest1) {
                      var r = c.bot.quest1.isEnough ? c.bot.quest1.quantity : c.bot.productList[n] || 0;
                      c.uiBot.adjustOrder.setNumExpectedMark15(r, c.bot.quest1.quantity || 0)
                  }
                  if (c.bot.quest2) {
                      var l = c.bot.quest2.isEnough ? c.bot.quest2.quantity : c.bot.productList[i] || 0;
                      c.uiBot.adjustOrder.setNumExpectedMark20(l, c.bot.quest2.quantity || 0)
                  }
                  o = !!c.bot.quest1 && c.bot.quest1.isEnough,
                  t = !!c.bot.quest2 && c.bot.quest2.isEnough,
                  c.uiBot.adjustOrder.tickStorage(c.bot.totalQuantity),
                  c.uiBot.adjustOrder.setSellButtonActive(c.bot.totalQuantity),
                  c.uiBot.adjustOrder.tick15(o),
                  c.uiBot.adjustOrder.tick20(t),
                  c.uiBot.adjustOrder.updateProduct15(n),
                  c.uiBot.adjustOrder.updateProduct20(i)
              },
              autoUpdateCheckList: function() {
                  var e = !!c.bot.quest1 && c.bot.quest1.isEnough
                    , a = !!c.bot.quest2 && c.bot.quest2.isEnough
                    , o = c.bot.quest1 ? c.bot.quest1.productName : ""
                    , t = c.bot.quest2 ? c.bot.quest2.productName : "";
                  c.uiBot.checkList.tick15(e),
                  c.uiBot.checkList.tick20(a),
                  c.uiBot.checkList.updateProduct15(o),
                  c.uiBot.checkList.updateProduct20(t)
              },
              autoUpdateInfoBoard: function() {
                  c.uiBot.infoBoardParked.setCoin(c.bot.totalCoin),
                  c.uiBot.infoBoardAway.setDiamond(0)
              }
          },
          adjustOrder: {
              initSlider: function() {
                  var e = (c.uiBot.adjustOrderSlider = cc.find("Canvas/popup_adjust_order/bg_holder/slider")).getChildByName("Handle");
                  e.on("touchend", c.uiBot.adjustOrder.onSlideEnd),
                  e.on("touchcancel", c.uiBot.adjustOrder.onSlideEnd)
              },
              onSlideEnd: function() {
                  c.bot.isAutoUpdate = !1;
                  var e = c.uiBot.adjustOrderSlider;
                  e.activated && (e.slideNum > e.limit ? (c.uiBot.adjustOrder.setSliderProgress(e.limit / e.quantity),
                  e.currentProductCell.sellQuantity = e.limit) : e.currentProductCell.sellQuantity = e.slideNum,
                  c.uiBot.bot.refreshAll(!1))
              },
              onSlide: function() {
                  var e = c.uiBot.adjustOrderSlider;
                  if (e.activated) {
                      var a = e.getComponent(cc.Slider).progress
                        , o = e.slideNum = _floor(a * e.quantity);
                      e.slideNum <= e.limit ? c.uiBot.adjustOrder.setSliderNum(o) : (c.uiBot.adjustOrder.setSliderNum(e.limit),
                      o = e.limit);
                      var t = e.currentProductCell.name;
                      c.uiBot.adjustOrder.setLabelSellQuantity(t, o),
                      c.bot.onSlide(t, o)
                  }
              },
              setSliderRange: function(e, a) {
                  var o = c.uiBot.adjustOrderSlider;
                  o.quantity = e,
                  o.limit = isNaN(a) ? e : a
              },
              setSliderProgress: function(e) {
                  c.uiBot.adjustOrderSlider.getComponent(cc.Slider).progress = _min(1, _max(e, 0))
              },
              renderProductGrid: function(e) {
                  var a = cc.find("Canvas/popup_adjust_order/bg_holder/scrollview/view/content");
                  a.removeAllChildren();
                  var o = cc.find("Canvas/popup_adjust_order/bg_holder/product_cell_template");
                  for (var t in e)
                      if (t && "undefined" != t) {
                          var n = e[t];
                          if (!(n <= 0)) {
                              var i = c.utils.moveNodeTo(o, a, !0);
                              i.active = !0,
                              i.name = t,
                              i.quantity = n,
                              i.on("touchend", c.uiBot.adjustOrder.pickProduct, i),
                              c.utils.setNodeImg(i.getChildByName("product"), c.uiSlot.getItemHarvestSpriteFrame(t)),
                              c.utils.setLabelText(i.getChildByName("label_quantity"), n)
                          }
                      }
              },
              pickProduct: function(e) {
                  var a = e.target
                    , o = a.name
                    , t = c.uiBot.adjustOrderSlider.currentProductCell;
                  if (t) {
                      var n = t.getChildByName("product");
                      n.scale = n.orgScale,
                      n.y = 0,
                      t.getChildByName("back_bg").active = !1
                  }
                  var i = a.getChildByName("product")
                    , r = i.orgScale = i.scale;
                  i.scale = 1.4 * r,
                  a.getChildByName("back_bg").active = !0;
                  var l = c.uiBot.adjustOrderSlider;
                  l.currentProductCell = a,
                  l.activated = !0,
                  l.opacity = 255;
                  var d = c.bot.productList[o] || 0
                    , s = c.bot.truckCapacity - (c.bot.totalQuantity - d);
                  c.uiBot.adjustOrder.setSliderRange(a.quantity, s),
                  c.uiBot.adjustOrder.setSliderProgress(d / a.quantity),
                  c.uiBot.adjustOrder.setSliderNum(d)
              },
              rePickProduct: function() {
                  var e = c.uiBot.adjustOrderSlider.currentProductCell;
                  e && c.uiBot.adjustOrder.pickProduct({
                      target: e
                  })
              },
              setLabelSellQuantity: function(e, a) {
                  var o = cc.find("Canvas/popup_adjust_order/bg_holder/scrollview/view/content/" + e);
                  o && c.utils.setLabelText(o.getChildByName("label_quantity_sell"), a ? "(-" + a + ")" : "")
              },
              setSellButtonActive: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled").active = !e
              },
              setMarkStorage: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/capacity/mark_storage").getComponent(cc.Sprite).fillRange = _max(0, _min(e, 1))
              },
              setMark15: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/capacity/mark_1.5").active = e
              },
              setMark20: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/capacity/mark_2.0").active = e
              },
              setCoin: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_adjust_order/bg_holder/coin_bar/coin_label"), e)
              },
              setSliderNum: function(e) {
                  c.utils.setLabelText(cc.find("Canvas/popup_adjust_order/bg_holder/slider/num"), e)
              },
              setLabelMaxCapacity: function(e) {
                  c.utils.setLabelText(cc.find("Canvas/popup_adjust_order/bg_holder/max_capacity_label"), e)
              },
              setLabelCurrentStorageNum: function(e) {
                  c.utils.setLabelText(cc.find("Canvas/popup_adjust_order/bg_holder/label_quantity_storage"), c.utils.shortNumber(e))
              },
              setNumExpectedMark15: function() {
                  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                    , a = arguments[1]
                    , o = c.utils.shortNumber(e) + "/" + c.utils.shortNumber(a);
                  c.utils.setLabelText(cc.find("Canvas/popup_adjust_order/bg_holder/label_quantity_1.5"), o)
              },
              setNumExpectedMark20: function() {
                  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                    , a = arguments[1]
                    , o = c.utils.shortNumber(e) + "/" + c.utils.shortNumber(a);
                  c.utils.setLabelText(cc.find("Canvas/popup_adjust_order/bg_holder/label_quantity_2.0"), o)
              },
              tickStorage: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/icon_tick_storage").active = e
              },
              tick15: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/icon_tick_1.5").active = e,
                  cc.find("Canvas/popup_adjust_order/bg_holder/capacity/mark_1.5").active = e
              },
              tick20: function(e) {
                  cc.find("Canvas/popup_adjust_order/bg_holder/icon_tick_2.0").active = e,
                  cc.find("Canvas/popup_adjust_order/bg_holder/capacity/mark_2.0").active = e
              },
              updateProduct15: function(e) {
                  var a = cc.find("Canvas/popup_adjust_order/bg_holder/product_1.5")
                    , o = cc.find("Canvas/nodeCaches/item_harvest/" + e);
                  o ? (a.active = !0,
                  c.utils.setNodeImg(a, o, !1)) : a.active = !1
              },
              updateProduct20: function(e) {
                  var a = cc.find("Canvas/popup_adjust_order/bg_holder/product_2.0")
                    , o = cc.find("Canvas/nodeCaches/item_harvest/" + e);
                  o ? (a.active = !0,
                  c.utils.setNodeImg(a, o, !1)) : a.active = !1
              }
          },
          infoBoardParked: {
              setMarkStorage: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/capacity/mark_storage").getComponent(cc.Sprite).fillRange = _max(0, _min(e, 1))
              },
              setMark15: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/capacity/mark_1.5").active = e
              },
              setMark20: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/capacity/mark_2.0").active = e
              },
              setCoin: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/layout_home/scroll_layer/truck/gold"), e),
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/storage/checked").active = 0 < e,
                  cc.find("Canvas/layout_home/scroll_layer/truck/go").active = 0 < e && c.truck.isParked
              }
          },
          infoBoardAway: {
              disableButDiamond: function() {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up").active = !1
              },
              enableButDiamond: function() {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up").active = !0
              },
              setDiamond: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up/diamond_num"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up_disabled/diamond_num"), e)
              },
              setDiamondButOnOff: function() {
                  var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up").active = e
              },
              setTime: function(e, a) {
                  var o = cc.find("Canvas/layout_home/scroll_layer/truck_info_board/away/time/time_label")
                    , t = e
                    , n = function() {
                      o.remainingTime = t;
                      var e = c.utils.secondsToTime(t);
                      c.utils.setLabelText(o, e),
                      c.truck.diamondSkip = _ceil(t * c.configs.truckSkip / c.configs.trucks[c.truck.level - 1].duration),
                      c.uiBot.infoBoardAway.setDiamond(c.truck.diamondSkip)
                  };
                  n();
                  var i = Date.now()
                    , r = c.truck.truckReturnInterval = setInterval(function() {
                      if (2 == (t = Math.round(e - (Date.now() - i) / 1e3)) && a && a(),
                      t < 0)
                          return clearInterval(r);
                      n()
                  }, 1e3)
              }
          },
          checkList: {
              tickStorage: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/storage/checked").active = e
              },
              tick15: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/checked1").active = e
              },
              tick20: function(e) {
                  cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/checked2").active = e
              },
              updateProduct15: function(e) {
                  var a = cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/quest1")
                    , o = cc.find("Canvas/nodeCaches/item_harvest/" + e);
                  o ? (a.active = !0,
                  c.utils.setNodeImg(a, o, !1)) : a.active = !1
              },
              updateProduct20: function(e) {
                  var a = cc.find("Canvas/layout_home/scroll_layer/truck_info_board/parked/quest2")
                    , o = cc.find("Canvas/nodeCaches/item_harvest/" + e);
                  o ? (a.active = !0,
                  c.utils.setNodeImg(a, o, !1)) : a.active = !1
              }
          },
          upgradeTruck: {
              disableButDiamond: function() {
                  cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_diamond").active = !1
              },
              enableButDiamond: function() {
                  cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_diamond").active = !0
              },
              disableButCoin: function() {
                  cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_coin").active = !1
              },
              enableButCoin: function() {
                  cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_coin").active = !0
              },
              updateLabelButDiamond: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_diamond/price"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_diamond_disabled/price"), e)
              },
              updateLabelButCoin: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_coin/price"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/btn_coin_disabled/price"), e)
              },
              updateLabelCapacity: function(e, a) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/lbl1"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_truck/bg_holder/lbl2"), a)
              }
          },
          upgradeStorage: {
              disableButDiamond: function() {
                  cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_diamond").active = !1
              },
              enableButDiamond: function() {
                  cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_diamond").active = !0
              },
              disableButCoin: function() {
                  cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_coin").active = !1
              },
              enableButCoin: function() {
                  cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_coin").active = !0
              },
              updateLabelButDiamond: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_diamond/price"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_diamond_disabled/price"), e)
              },
              updateLabelButCoin: function(e) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_coin/price"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/btn_coin_disabled/price"), e)
              },
              updateLabelCapacity: function(e, a) {
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/lbl1"), e),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_upgrade_storage/bg_holder/lbl2"), a)
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_button: [function(e, a, o) {
      "use strict";
      var t;
      function n(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      cc._RF.push(a, "b3d54WHWc5Mmp/Vzy4DBB/c", "ui_button");
      var i = e("../all_modules");
      setTimeout(function() {
          i = e("../all_modules")
      }, 0),
      a.exports = (n(t = {
          init: function() {
              window._logFBEvent = function(e) {
                  var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
                    , o = arguments[2];
                  window.FBInstant && FBInstant.logEvent(e, a, o)
              }
              ;
              var e = i.uiButton;
              for (var a in e)
                  if ("init" != a && "bindButton" != a && "inactiveButton" != a) {
                      var o = e[a];
                      i.uiButton.bindButton(a, o)
                  }
          },
          bindButton: function(e, o) {
              var t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
              (_isString(e) ? e.split("\n") : e).map(function(e) {
                  e = e.replace(/^(\s+)/g, "").replace(/(\s+)$/g, "");
                  var a = cc.find(e);
                  a && i.uiButton._bindButton(a, o, t)
              })
          },
          _bindButton: function(e, a) {
              var o, t, n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
              o = e,
              t = cc.Label.Overflow.SHRINK,
              o.getComponentsInChildren(cc.Label).map(function(e) {
                  e.node.getComponent(cc.Label).overflow = t
              }),
              n && i.fx.buttonBindTouchStartFX(e),
              e.on("touchend", function() {
                  e.inactiveButton || (i.sound.playSFX("button_press"),
                  n && i.fx.buttonTouchEndFX(e),
                  i.control.isScrollingLayer || a(e))
              })
          },
          inactiveButton: function(e, a) {
              var o = "string" == typeof e ? cc.find(e) : e;
              if (!o)
                  return cc.log("button not found", e);
              o.inactiveButton = a
          }
      }, "Canvas/layout_home/scroll_layer/truck_info_board", function() {
          i.tutorial.temporaryDisableInfoBoard || (_logFBEvent("event_view_sell_board_detail"),
          _showLayout("popup_adjust_order"),
          i.tutorial.checkStepEndCondition("boardClicked"))
      }),
      n(t, "Canvas/popup_adjust_order/bg_holder/btn_confirm\n\tCanvas/layout_home/scroll_layer/truck/go", function(e) {
          i.uiHome.buttonSellAndConfirmDisabled || (i.uiHome.buttonSellAndConfirmDisabled = !0,
          i.tutorial.isShowingTut() && "go" == e.name ? (i.tutorial.orderSellFake(),
          i.sound.playSFX("sell"),
          i.tutorial.checkStepEndCondition("clickSellButton")) : (i.bot.orderSell(e),
          i.sound.playSFX("sell")))
      }),
      n(t, "Canvas/layout_home/scroll_layer/storage_house", function() {
          i.tutorial.isShowingTut() || (_logFBEvent("event_click_storage"),
          _showLayout("popup_storage"),
          i.storage.showStorage())
      }),
      n(t, "Canvas/popup_storage/bg_holder/btn_close", function() {
          _hideLayout("popup_storage")
      }),
      n(t, "Canvas/popup_dogs/bg_holder/btn_close", function() {
          _hideLayout("popup_dogs")
      }),
      n(t, "Canvas/popup_intro_new_products/bg_holder/but_got_it\n\tCanvas/popup_intro_new_products/bg_holder/btn_close", function() {
          _hideLayout("popup_intro_new_products"),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_suggest_theme_trial/bg_holder/btn_close", function() {
          _hideLayout("popup_suggest_theme_trial"),
          i.popups.endCurrentStartPopup(),
          _logFBEvent("event_but_close_theme_demo_click")
      }),
      n(t, "Canvas/popup_buy_theme_success/bg_holder/but_got_it", function() {
          _hideLayout("popup_buy_theme_success"),
          i.theme.applyTheme("theme_winter"),
          i.data.switchTheme("theme_winter"),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_theme_trial_expired/bg_holder/btn_close", function() {
          _hideLayout("popup_theme_trial_expired"),
          i.popups.endCurrentStartPopup(),
          _logFBEvent("event_theme_expire_close_popup")
      }),
      n(t, "Canvas/popup_buy_theme_success/bg_holder/btn_close\n\tCanvas/popup_buy_theme_success/bg_holder/but_guide_me", function() {
          _logFBEvent("event_but_guide_me_after_buytheme_click"),
          _hideLayout("popup_buy_theme_success"),
          i.theme.showTutAfterBuyingTheme()
      }),
      n(t, "Canvas/popup_used_theme_trial/bg_holder/btn_close\n\tCanvas/popup_used_theme_trial/bg_holder/but_got_it", function(e) {
          _hideLayout("popup_used_theme_trial"),
          i.theme.applyTheme("theme_winter"),
          i.data.switchTheme("theme_winter"),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_info_item/bg_holder/btn_close", function() {
          _hideLayout("popup_info_item"),
          i.infoItem.resetInfoItem()
      }),
      n(t, "Canvas/popup_leaderboard/bg_holder/btn_close", function() {
          _hideLayout("popup_leaderboard")
      }),
      n(t, "Canvas/layout_home/button_leaderboard", function() {
          _showLayout("popup_leaderboard"),
          _logFBEvent("event_show_leaderboard")
      }),
      n(t, "Canvas/popup_info_item/bg_holder/btn_del", function() {
          i.infoItem.showDeleteItem()
      }),
      n(t, "Canvas/popup_info_item/bg_holder/bottom1/btn_up1", function() {
          i.eventsTimer.speedUpDiamond()
      }),
      n(t, "Canvas/popup_info_item/bg_holder/bottom1/btn_up2", function() {
          i.eventsTimer.speedUpVideo()
      }),
      n(t, "Canvas/popup_confirm_status/bg_holder/btn_x2", function() {
          i.farmStatus.watchVideoUnlock()
      }),
      n(t, "Canvas/layout_home/scroll_layer/status_board", function() {
          i.farmStatus.boardClick()
      }),
      n(t, "Canvas/popup_sell/bg_holder/btn_up2", function() {
          i.events.deleteSlot()
      }),
      n(t, "Canvas/popup_sell/bg_holder/btn_up1", function() {
          _hideLayout("popup_sell")
      }),
      n(t, "Canvas/layout_home/bg_shop/steal", function() {
          _thisPlayerInfo.level < i.configs.stealUnlockLevel ? i.uiLayout.showToolTip("STEALING UNLOCKS AT LEVEL " + i.configs.stealUnlockLevel) : (i.findVictim.showFindVictim(),
          i.tutorial.checkStepEndCondition("tapSteal"),
          i.social.friendArr ? i.uiFindVictim.fetchFriendList() : (_log(" start waitting for _G.social.friendArr "),
          _waitToRun(i.uiFindVictim.fetchFriendList, "friendArr", i.social)),
          _showLayout("popup_find_victim"))
      }),
      n(t, "Canvas/layout_victim/bg_shop/steal", function() {
          i.uiVictim.showGoHome(),
          i.tutorial.isShowingTut() ? (i.tutorial.checkStepEndCondition("tapHomeAfterSteal"),
          i.uiVictim.doGoHome(!0)) : i.leaderboard.isViewingLeaderboardUser && (i.uiVictim.doGoHome(!0),
          i.leaderboard.exitViewUser())
      }),
      n(t, "Canvas/popup_go_home/bg_holder/btn_close", function() {
          _hideLayout("popup_go_home")
      }),
      n(t, "Canvas/popup_edit_status/bg_holder/btn_close", function() {
          _hideLayout("popup_edit_status")
      }),
      n(t, "Canvas/popup_confirm_status/bg_holder/btn_close", function() {
          _hideLayout("popup_confirm_status")
      }),
      n(t, "Canvas/popup_go_steal/btn_close", function() {
          _hideLayout("popup_go_steal")
      }),
      n(t, "Canvas/popup_go_revenge/btn_close", function() {
          _hideLayout("popup_go_revenge")
      }),
      n(t, "Canvas/popup_go_home/bg_holder/btn_home", function() {
          i.uiVictim.doGoHome(),
          i.social.shareStolen()
      }),
      n(t, "Canvas/popup_go_revenge/btn_go", function() {
          i.uiVictim.btnRevengeClick(),
          window._logEventUserDay2 && _logEventUserDay2("revenge")
      }),
      n(t, "Canvas/popup_go_steal/btn_go", function() {
          _thisPlayerInfo.victimFindTime <= 0 ? i.findVictim.showVideoMoreFindTime() : i.uiVictim.btnStealClick()
      }),
      n(t, "Canvas/popup_find_victim/bg_holder/btn_close", function() {
          _hideLayout("popup_find_victim")
      }),
      n(t, "Canvas/layout_home/post_box", function() {
          _logFBEvent("event_open_mail"),
          window._logEventUserDay2 && _logEventUserDay2("check_mail"),
          i.uiHome.showEmail(),
          i.uiHome.mailListWatched = !0,
          cc.find("Canvas/layout_home/post_box").opacity = 160,
          cc.find("Canvas/layout_home/post_box/thu").active = !1
      }),
      n(t, "Canvas/popup_email/bg_holder/btn_close", function() {
          _hideLayout("popup_email"),
          window._isFirstRecoverShownAfterReportClose || (window._isFirstRecoverShownAfterReportClose = !0,
          i.stolenDamage.showPopupRecover())
      }),
      n(t, "Canvas/popup_video_failed/bg_holder/close", function() {
          _hideLayout("popup_video_failed"),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_info_victim/bg_holder/btn_up2", function() {
          _hideLayout("popup_info_victim")
      }),
      n(t, "Canvas/popup_find_victim/bg_holder/btn_find", function() {
          _logFBEvent("event_find_victim_steal"),
          window._isStolenFailFirstTime && (window._isStolenFailFirstTime = !1),
          window._logEventUserDay2 && _logEventUserDay2("find_random"),
          _thisPlayerInfo.victimFindTime <= 0 ? i.findVictim.showVideoMoreFindTime() : (i.tutorial.checkStepEndCondition("findRandomVictim"),
          i.fx.findingVictim(),
          i.findVictim.startFinding())
      }),
      n(t, "Canvas/layout_victim/bg_profile", function() {
          i.uiVictim.showProfile()
      }),
      n(t, "Canvas/layout_home/bg_profile", function() {
          i.uiHome.showProfile()
      }),
      n(t, "Canvas/layout_victim/popup_friend_info/border/btn_close", function() {
          cc.find("Canvas/layout_victim/popup_friend_info").active = !1
      }),
      n(t, "Canvas/popup_upgrade_storage/bg_holder/btn_close", function() {
          _hideLayout("popup_upgrade_storage")
      }),
      n(t, "Canvas/popup_new_level/bg_holder/btn_up2", function() {
          i.uiHome.claimLevelUp1(),
          _log("popup_new_level CLAIM // window._thisPlayerInfo.level = " + window._thisPlayerInfo.level),
          window._thisPlayerInfo.level == i.configs.stealUnlockLevel ? (_log("tut called !!!! "),
          i.tutorial.currentTutname = "tut2",
          i.tutorial.startTutorial(e("tut2"))) : window._thisPlayerInfo.level == i.configs.tut3Level && (_log("tut called !!!! "),
          i.tutorial.currentTutname = "tut3",
          i.tutorial.startTutorial(e("tut3")))
      }),
      n(t, "Canvas/popup_new_level1/bg_holder/btn_up2", function() {
          i.uiHome.claimLevelUp2(),
          _log("popup_new_level1 CLAIM // window._thisPlayerInfo.level = " + window._thisPlayerInfo.level),
          window._thisPlayerInfo.level == i.configs.stealUnlockLevel ? (_log("tut called !!!! "),
          i.tutorial.currentTutname = "tut2",
          i.tutorial.startTutorial(e("tut2"))) : window._thisPlayerInfo.level == i.configs.tut3Level && (_log("tut called !!!! "),
          i.tutorial.currentTutname = "tut3",
          i.tutorial.startTutorial(e("tut3")))
      }),
      n(t, "Canvas/popup_bot_gift/bg_holder/btn_claim", function() {
          i.uiHome.claimBotGift(),
          _hideLayout("popup_bot_gift")
      }),
      n(t, "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/btn_close", function() {
          var e = cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)");
          e.x = 9999,
          e.active = !1
      }),
      n(t, "Canvas/popup_upgrade_truck/bg_holder/btn_coin", function() {
          _logFBEvent("event_upgrade_truck", 1, {
              currency: "gold"
          }),
          i.truck.upgradeCoin()
      }),
      n(t, "Canvas/popup_upgrade_truck/bg_holder/btn_diamond", function() {
          _logFBEvent("event_upgrade_truck", 1, {
              currency: "diamond"
          }),
          i.truck.upgradeDiamond()
      }),
      n(t, "Canvas/popup_upgrade_truck/bg_holder/btn_close", function() {
          _hideLayout("popup_upgrade_truck")
      }),
      n(t, "Canvas/popup_adjust_order/bg_holder/btn_close", function() {
          i.tutorial.checkStepEndCondition("closeAdjustOrder"),
          _hideLayout("popup_adjust_order")
      }),
      n(t, "Canvas/layout_home/scroll_layer/truck", function() {
          i.tutorial.isShowingTut() || (_logFBEvent("event_truck_click"),
          i.truck.showUpgrade())
      }),
      n(t, "Canvas/popup_storage/bg_holder/btn_upgrade", function() {
          i.storage.showUpgrade()
      }),
      n(t, "Canvas/popup_upgrade_storage/bg_holder/btn_diamond", function() {
          _logFBEvent("event_upgrade_storage", 1, {
              currency: "diamond"
          }),
          i.storage.upgradeDiamond()
      }),
      n(t, "Canvas/popup_upgrade_storage/bg_holder/btn_coin", function() {
          _logFBEvent("event_upgrade_storage", 1, {
              currency: "gold"
          }),
          i.storage.upgradeCoin()
      }),
      n(t, "Canvas/layout_home/scroll_layer/truck_info_board/away/btn_speed_up", function() {
          i.truck.skipWaitTime()
      }),
      n(t, "Canvas/layout_home/scroll_layer/dog_house_prefab (late_load)", function() {
          _logFBEvent("event_view_dog_house"),
          _showLayout("popup_dogs")
      }),
      n(t, "Canvas/popup_edit_status/bg_holder/submit", function(e) {
          i.farmStatus.doneEditStatus(e)
      }),
      n(t, "Canvas/popup_dog_attack/bg_holder/btn_home", function() {
          i.social.shareStolen(!0),
          i.uiHome.showNotiPostBox(),
          i.uiHome.resetPosition(),
          i.uiDog.hideDogBite(),
          i.data.endStealing(window._thisPlayerVictimId, window._thisPlayerVictimSession, function() {}),
          i.fx.findingVictim(),
          setTimeout(function() {
              i.fx.victimFound(),
              setTimeout(i.stolenDamage.showPopupRecover, 1e3),
              i.bot.autoUpdate(),
              i.sound.stopBGSound(),
              i.sound.playBGSound("home_player_background_music"),
              _hideLayout("layout_victim"),
              _showLayout("layout_home"),
              i.theme.applyTheme(i.theme.currentThemeName)
          }, 2e3)
      }),
      n(t, "Canvas/popup_dog_attack/bg_holder/btn_close", function() {
          i.uiDog.hideDogBite()
      }),
      n(t, "Canvas/layout_home/bg_shop/group-1", function() {
          i.uiShop.showShopTab("tree")
      }),
      n(t, "Canvas/layout_home/bg_shop/group-2", function() {
          i.uiShop.showShopTab("animal")
      }),
      n(t, "Canvas/popup_storage_full/bg_holder/btn_close", function() {
          i.uiStorage.hidePopupUpgrade()
      }),
      n(t, "Canvas/popup_storage_full/bg_holder/btn_upgrade", function() {
          i.uiStorage.hidePopupUpgrade(),
          i.storage.showUpgrade()
      }),
      n(t, "Canvas/popup_not_found/bg_holder/btn_close", function() {
          i.findVictim.hidePopupError()
      }),
      n(t, "Canvas/popup_received_gold/bg_holder/btn_close", function() {
          _hideLayout("popup_received_gold")
      }),
      n(t, "Canvas/popup_not_enough_diamond/bg_holder/close", function() {
          _hideLayout("popup_not_enough_diamond"),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_not_enough_gold/bg_holder/close", function() {
          _hideLayout("popup_not_enough_gold")
      }),
      n(t, "Canvas/popup_not_enough_gold/bg_holder/btn_up2", function() {
          i.video.videoGetGold()
      }),
      n(t, "Canvas/layout_home/bg_ruby", function() {
          if (i.uiStore.isPaymentAvailable)
              _logFBEvent("event_show_shop_diamond_iap", 1, {
                  source: "diamond_status_bar"
              }),
              i.uiStore.showShopDiamond();
          else {
              if (i.tutorial.isShowingTut())
                  return;
              i.gifts.videoDiamondTouch(),
              _logFBEvent("event_home_video_diamond_click", 1, {
                  userLevel: _thisPlayerInfo.level
              })
          }
      }),
      n(t, "Canvas/layout_home/bg_gold", function() {
          i.uiStore.showShopGold()
      }),
      n(t, "Canvas/popup_shop/bg-holder/tab-gold-off", function() {
          i.uiStore.showShopGold()
      }),
      n(t, "Canvas/popup_not_enough_gold/bg_holder/exchange", function() {
          _hideLayout("popup_not_enough_gold"),
          i.uiStore.showShopGold()
      }),
      n(t, "Canvas/popup_shop/bg-holder/tab-diamond-off", function() {
          _logFBEvent("event_show_shop_diamond_iap", 1, {
              source: "diamond_tab_in_shop_gold"
          }),
          i.uiStore.showShopDiamond()
      }),
      n(t, "Canvas/popup_not_enough_diamond/purchase", function() {
          _hideLayout("popup_not_enough_diamond"),
          _logFBEvent("event_show_shop_diamond_iap", 1, {
              source: "popup_not_enough_diamond"
          }),
          i.uiStore.showShopDiamond()
      }),
      n(t, "Canvas/popup_not_enough_diamond/ok", function(e) {
          _hideLayout("popup_not_enough_diamond"),
          e.active = !1,
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/popup_shop/bg-holder/tab-theme-off", function() {
          _logFBEvent("event_show_shop_theme", 1, {
              source: "shop_tab_theme"
          }),
          i.uiStore.showShopTheme()
      }),
      n(t, "Canvas/popup_shop/bg-holder/btn_close", function() {
          i.uiStore.hideShop()
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-1", function() {
          i.uiStore.iap("d1")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-2", function() {
          i.uiStore.iap("d5")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-3", function() {
          i.uiStore.iap("d10")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-4", function() {
          i.uiStore.iap("d20")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-5", function() {
          i.uiStore.iap("d40")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-6", function() {
          i.uiStore.iap("d80")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-1", function() {
          i.uiStore.exchange("e10")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-2", function() {
          i.uiStore.exchange("e25")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-3", function() {
          i.uiStore.exchange("e50")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-4", function() {
          i.uiStore.exchange("e100")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-5", function() {
          i.uiStore.exchange("e200")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-gold/item-6", function() {
          i.uiStore.exchange("e500")
      }),
      n(t, "Canvas/popup_upgrade_truck_full/bg_holder/btn_close", function() {
          _hideLayout("popup_upgrade_truck_full")
      }),
      n(t, "Canvas/popup_congratulations/bg_holder/close", function() {
          i.uiLayout.hideCongratulations(),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task", function() {
          i.achievements.getList(i.uiAchievement.showList),
          cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)").x = 9999,
          cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)").active = !1
      }),
      n(t, "Canvas/layout_home/button_invite_gift", function() {
          i.tutorial.isShowingTut() || (i.gifts.inviteGiftTouch(),
          _logFBEvent("event_invite_click"))
      }),
      n(t, "Canvas/layout_home/button_video_gold/icon", function() {
          i.tutorial.isShowingTut() || (i.gifts.videoGoldTouch(),
          _logFBEvent("event_home_video_gold_click", 1, {
              userLevel: _thisPlayerInfo.level
          }))
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/bg", function() {
          i.tutorial.isShowingTut() || (i.gifts.videoDiamondTouch(),
          _logFBEvent("event_home_video_diamond_click", 1, {
              userLevel: _thisPlayerInfo.level
          }))
      }),
      n(t, "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite", function() {
          i.gifts.inviteGiftTouch()
      }),
      n(t, "Canvas/popup_achievement_list/bg_holder/btn_close", function() {
          _hideLayout("popup_achievement_list")
      }),
      n(t, "Canvas/popup_level_cannot_steal/bg_holder/btn_close", function() {
          _hideLayout("popup_level_cannot_steal")
      }),
      n(t, "Canvas/popup_new_achievement/bg_holder/btn_confirm", function(e) {
          i.uiAchievement.claimNew(e)
      }),
      n(t, "Canvas/popup_daily_reward/bg_holder/btn_claim", function(e) {
          i.events.claimDailyReward(e),
          i.popups.endCurrentStartPopup()
      }),
      n(t, "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/sound", function() {
          i.sound.setSFXOff(i.sound.getSFX()),
          cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/sound/checked").active = !i.sound.getSFX()
      }),
      n(t, "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/music", function() {
          i.sound.setSoundOff(i.sound.getSound()),
          cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/music/checked").active = !i.sound.getSound()
      }),
      n(t, "Canvas/layout_home/zicon gift", function() {
          i.tutorial.isShowingTut() || (_showLayout("popup_gift_list"),
          _logFBEvent("event_gift_click"))
      }),
      n(t, "Canvas/popup_gift_list/bg_holder/btn_close", function() {
          _hideLayout("popup_gift_list")
      }),
      n(t, "Canvas/popup_new_achievement/bg_holder/btn_x2", function() {
          i.x2reward.buttonX2OnTouch("popup_new_achievement")
      }),
      n(t, "Canvas/popup_new_level/bg_holder/btn_x2", function() {
          i.x2reward.buttonX2OnTouch("popup_new_level")
      }),
      n(t, "Canvas/popup_new_level1/bg_holder/btn_x2", function() {
          i.x2reward.buttonX2OnTouch("popup_new_level1")
      }),
      n(t, "Canvas/popup_daily_reward/bg_holder/btn_x2", function() {
          i.x2reward.buttonX2OnTouch("popup_daily_reward", !0)
      }),
      n(t, "Canvas/popup_dog_attack/bg_holder/btn_save_50", function() {
          i.uiDog.videoSave50()
      }),
      n(t, "Canvas/popup_go_revenge/btn_x2", function() {
          i.uiDog.videoSave50()
      }),
      n(t, "Canvas/popup_go_home/bg_holder/btn_x2", function(e) {
          i.uiVictim.videoStealX2(!1)
      }),
      n(t, "Canvas/popup_go_revenge/btn_x2", function(e) {
          i.uiVictim.videoStealX2(!0)
      }),
      n(t, "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy", function(e) {
          i.dogs.buyDogIAP099()
      }),
      n(t, "Canvas/popup_buy_dog_iap_099/bg_holder/close", function() {
          _logFBEvent("event_buy_dog_iap_close", 1, {
              missedDiamond: i.dogs.currentDiamondMissedForDog
          }),
          _hideLayout("popup_buy_dog_iap_099"),
          _showLayout("popup_dogs")
      }),
      n(t, "Canvas/layout_home/button_share", function() {
          i.share.doShare()
      }),
      n(t, "Canvas/layout_victim/view_top_blocker/steal_hand_blocker", function() {
          i.uiLayout.showToolTip("Stealing is not available\nin view mode!")
      }),
      n(t, "Canvas/layout_home/icon_tlmn", function() {
          i.gifts.switchToTLMN()
      }),
      n(t, "Canvas/popup_recover_damage/bg_holder/close\n\tCanvas/popup_recover_damage/wait", function() {
          _hideLayout("popup_recover_damage"),
          _logFBEvent("event_but_recover_damage_wait_click")
      }),
      n(t, "Canvas/popup_recover_damage/now", function() {
          i.stolenDamage.videoRecoverClick(),
          _logFBEvent("event_but_recover_damage_now_click")
      }),
      n(t, "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now", function() {
          i.theme.tryThemeDemo(),
          _logFBEvent("event_but_try_theme_demo_click")
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/but_buy\n\tCanvas/popup_shop/bg-holder/shop-theme/scrollview_trial_running/view/content/item-2/but_buy\n\tCanvas/popup_theme_trial_expired/bg_holder/but_buy_now", function(e) {
          _hideLayout("popup_theme_trial_expired"),
          i.theme.buyTheme();
          var a = "but_buy_now" == e.name ? "popup_theme_expired" : "shop_tab";
          i.uiStore.isPaymentAvailable ? _logFBEvent("event_but_buy_theme_click_iap", 1, {
              source: a
          }) : _logFBEvent("event_but_buy_theme_click_diamond", 1, {
              source: a
          })
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use", function() {
          i.theme.applyTheme("theme_default"),
          i.data.switchTheme("theme_default"),
          _logFBEvent("event_shop_switch_theme_click", 1, {
              theme_name: "theme_default"
          })
      }),
      n(t, "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_use", function() {
          i.tutorial.checkStepEndCondition("useNewTheme"),
          i.theme.applyTheme("theme_winter"),
          i.data.switchTheme("theme_winter"),
          _logFBEvent("event_shop_switch_theme_click", 1, {
              theme_name: "theme_winter"
          })
      }),
      n(t, "Canvas/popup_dogs/bg_holder/btn_buy", function(e) {
          i.dogs.buyDog(e.priceInfo)
      }),
      n(t, "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/but_set_default", function() {
          i.dogs.confirmSetDefault()
      }),
      n(t, "Canvas/popup_confirm_set_dog/bg_holder/btn_ok", function() {
          _hideLayout("popup_confirm_set_dog"),
          i.dogs.setDefaultDog(i.uiDog.viewingDogId)
      }),
      n(t, "Canvas/popup_confirm_set_dog/bg_holder/btn_cancel", function() {
          _hideLayout("popup_confirm_set_dog")
      }),
      n(t, "Canvas/popup_dogs/bg_holder/but_upgrade", function() {
          i.dogs.upgrade()
      }),
      n(t, "Canvas/popup_dogs/bg_holder/dog_name/submit", function() {
          i.dogs.renameDog()
      }),
      t),
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules",
      tut2: "tut2",
      tut3: "tut3"
  }],
  ui_dog: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "6f3faPMFeJGpqfjGYGtIsKz", "ui_dog");
      var b = e("../all_modules");
      setTimeout(function() {
          b = e("../all_modules")
      }, 0),
      a.exports = {
          viewingDogId: "dog_0",
          init: function() {
              cc.find("Canvas/layout_home/scroll_layer/dog-shadow").active = !1,
              b.uiDog.setDogName("")
          },
          renderShopDog: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "dog_0";
              _log(" _G.dogs.renderShopDog() called  ");
              var a = cc.find("Canvas/popup_dogs/bg_holder/PageView")
                , o = a.getComponent(cc.PageView)
                , t = cc.find("Canvas/popup_dogs/bg_holder/PageViewSensor");
              ["touchstart", "touchmove", "touchend", "touchcancel"].map(function(e) {
                  t.on(e, function(e) {
                      a.dispatchEvent(e)
                  })
              }),
              a.on("page-turning", function(e) {
                  var a = o.getCurrentPageIndex();
                  b.uiDog.setViewDetail("dog_" + a)
              }),
              cc.find("Canvas/popup_dogs/bg_holder/PageView/view/content").children.map(function(e) {
                  var a = _thisPlayerInfo.dogList[e.name];
                  e.children[0].getChildByName("lock_layer").active = !a
              }),
              b.uiDog.setViewDetail(e);
              var n = cc.find("Canvas/popup_dogs")
                , i = n.active;
              n.active = !0,
              o.scrollToPage(parseInt(e.split("_")[1]), 0),
              _timer0(function() {
                  n.active = i
              })
          },
          moveActions: {
              dog_0: cc.repeatForever(cc.sequence(cc.scaleTo(0, 1, 1), cc.moveBy(8, cc.v2(-501, 0)), cc.scaleTo(0, -1, 1), cc.moveBy(8, cc.v2(-501, 0)).reverse())),
              dog_1: cc.repeatForever(cc.sequence(cc.scaleTo(0, 1, 1), cc.moveBy(8, cc.v2(-501, 0)), cc.scaleTo(0, -1, 1), cc.moveBy(8, cc.v2(-501, 0)).reverse())),
              dog_2: cc.repeatForever(cc.sequence(cc.scaleTo(0, 1, 1), cc.moveBy(8, cc.v2(-501, 0)), cc.scaleTo(0, -1, 1), cc.moveBy(8, cc.v2(-501, 0)).reverse())),
              dog_3: cc.repeatForever(cc.sequence(cc.delayTime(100), cc.delayTime(100))),
              dog_4: cc.repeatForever(cc.sequence(cc.scaleTo(0, 1, 1), cc.moveBy(2, cc.v2(-250, 0)), cc.delayTime(2.4), cc.moveBy(2.6, cc.v2(-250, 0)), cc.scaleTo(0, -1, 1), cc.moveBy(2, cc.v2(250, 0)), cc.delayTime(2.4), cc.moveBy(2.6, cc.v2(250, 0)))),
              dog_5: cc.repeatForever(cc.sequence(cc.delayTime(100), cc.delayTime(100)))
          },
          setDogName: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home";
              cc.find("Canvas/" + a + "/scroll_layer/dog_house_prefab (late_load)/bg").active = !!e,
              b.utils.setLabelText(cc.find("Canvas/" + a + "/scroll_layer/dog_house_prefab (late_load)/bg/label_dog_name"), b.utils.trimStr(e || "", 10, " "))
          },
          removeLock: function(e) {
              cc.find("Canvas/popup_dogs/bg_holder/PageView/view/content/" + e + "/" + e + "/lock_layer").active = !1
          },
          setViewDetail: function(a) {
              b.uiDog.viewingDogId = a;
              var e = b.configs.getDogConfig(a)
                , o = e.upgradePrice.length
                , t = _thisPlayerInfo.dogList[a] || {}
                , n = !!t.level
                , i = t.level
                , r = t.name
                , l = e.antiTheftRate[i - 1];
              cc.find("Canvas/popup_dogs/bg_holder/PageView/view/content").children.map(function(e) {
                  e.children[0].scale = e.name == a ? 1 : .76
              });
              var d = cc.find("Canvas/popup_dogs/bg_holder/dog_name");
              d.active = n,
              d.getComponent(cc.EditBox).string = r || "",
              cc.find("Canvas/popup_dogs/bg_holder/detail_info").active = n,
              cc.find("Canvas/popup_dogs/bg_holder/bought").active = n,
              cc.find("Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/disabled_layer").active = a == _thisPlayerInfo.defaultDogId;
              var s = cc.find("Canvas/popup_dogs/bg_holder/txt_info")
                , c = cc.find("Canvas/popup_dogs/bg_holder/dog_desc");
              s.active = !n,
              c.active = n,
              b.gameLanguage.setLabelDataAndRender(c, a),
              b.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_dogs/bg_holder/detail_info/label_level"), {
                  level: i,
                  maxLevel: o
              }),
              b.utils.setLabelText(cc.find("Canvas/popup_dogs/bg_holder/detail_info/antitheft_icon/label"), l + "%");
              var u = o <= i
                , _ = cc.find("Canvas/popup_dogs/bg_holder/btn_buy");
              if (_.active = !n,
              cc.find("Canvas/popup_dogs/bg_holder/but_upgrade").active = n && !u,
              cc.find("Canvas/popup_dogs/bg_holder/but_upgrade_max").active = u,
              n) {
                  var p = cc.find("Canvas/popup_dogs/bg_holder/but_upgrade/price");
                  b.utils.setLabelTextPrice(p, b.configs.getDogConfig(a).upgradePrice[i])
              }
              var g = _.getChildByName("price_iap")
                , m = _.getChildByName("price_gold_diamond")
                , v = b.uiStore.isPaymentAvailable && !e.price.payable
                , f = e.price[b.uiStore.isPaymentAvailable ? "payable" : "nonPaybale"];
              if (g.active = v,
              m.active = !v,
              v ? b.utils.setLabelText(g.getChildByName("label"), e.iapPrice || 0) : b.utils.setLabelTextPrice(m.getChildByName("label"), f.price),
              !v) {
                  var h = f.type;
                  h = "gold" == h ? "gold" : "diamond",
                  m.getChildByName(h).active = !0,
                  m.getChildByName("gold" == h ? "diamond" : "gold").active = !1
              }
              _.priceInfo = {
                  dogId: a,
                  type: v ? "iap" : f.type,
                  price: v ? 0 : f.price
              }
          },
          showDogBite: function(e) {
              var a = 2 == e.Reason;
              b.game.isDogBite = a,
              b.sound.stopBGSound(),
              a ? b.sound.playSFX("dog_detect_" + (.5 < Math.random() ? 1 : 2)) : b.sound.playSFX("host_detect_" + (.5 < Math.random() ? 1 : 2)),
              b.fx.stopBubbleForever(cc.find("Canvas/popup_dog_attack/bg_holder/btn_home"));
              var o = 0 != Object.keys(e.ProductsDrop).length;
              cc.find("Canvas/popup_dog_attack/bg_holder/border/scrollview/msg").active = !o;
              var t = cc.find("Canvas/popup_dog_attack/bg_holder/border/txt_info");
              t.active = o,
              b.gameLanguage.setLabelDataAndRender(t, o ? "you've just dropped" : "sorry...");
              var n = cc.find("Canvas/popup_dog_attack/bg_holder/border/gold-drop");
              n.active = o,
              b.utils.setLabelText(n, "-" + e.GoldDrop),
              b.uiDog.currentGoldDropped = e.GoldDrop;
              var i = cc.find("Canvas/popup_dog_attack/bg_holder/btn_save_50")
                , r = cc.find("Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled");
              i.active = o,
              r.active = !1,
              cc.find("Canvas/popup_dog_attack/bg_holder").active = !1,
              cc.find("Canvas/popup_dog_attack/caught").active = !a,
              cc.find("Canvas/popup_dog_attack/dog-bite").active = a,
              _showLayout("popup_dog_attack");
              var l = cc.find("Canvas/popup_dog_attack/bg_holder/border/scrollview/view/content");
              if (l.removeAllChildren(),
              o) {
                  _logFBEvent("event_steal_save50_show");
                  var d = cc.find("Canvas/popup_dog_attack/bg_holder/border/scrollview/element");
                  for (var s in e.ProductsDrop) {
                      var c = e.ProductsDrop[s]
                        , u = b.utils.copyNodeTo(d, l);
                      u.active = !0,
                      b.utils.setLabelText(u.getChildByName("amount"), c),
                      b.utils.setNodeImg(u.getChildByName("icon"), b.uiSlot.getItemHarvestSpriteFrame(s))
                  }
              }
              setTimeout(function() {
                  cc.find("Canvas/popup_dog_attack/dog-bite").active = !1,
                  cc.find("Canvas/popup_dog_attack/caught").active = !1,
                  cc.find("Canvas/popup_dog_attack/bg_holder").active = !0,
                  b.sound.playBGSound("detect_music")
              }, 500),
              window.localStorage && !localStorage.getItem("isStolenFailFirstTime") && (localStorage.setItem("isStolenFailFirstTime", "true"),
              window._isStolenFailFirstTime = !0)
          },
          hideDogBite: function() {
              _hideLayout("popup_dog_attack")
          },
          videoSave50: function() {
              _logFBEvent("event_steal_save50_click"),
              b.video.isVideoAvailable ? (cc.find("Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled").active = !0,
              b.video.showVideo(function() {
                  var e = _ceil(b.uiDog.currentGoldDropped / 2)
                    , o = b.uiDog.currentGoldDropped - e;
                  b.data.addGold(e, function(e) {
                      var a = parseInt(e.Gold) || _thisPlayerInfo.gold;
                      _thisPlayerInfo.gold = a,
                      b.uiHome.setGold(a),
                      b.utils.setLabelText(cc.find("Canvas/popup_dog_attack/bg_holder/border/gold-drop"), "-" + o),
                      b.uiLayout.showToolTip("Successfully save 50% dropped gold!"),
                      _logFBEvent("event_steal_save50_success"),
                      b.fx.bubbleForever(cc.find("Canvas/popup_dog_attack/bg_holder/btn_home"))
                  })
              })) : b.uiLayout.showCongratulations(" Video is not available.", "Oops!")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_find_victim: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "05410uERS9PyokbRJ2yWH02", "ui_find_victim");
      var d = e("../all_modules");
      setTimeout(function() {
          d = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              cc.find("Canvas/popup_find_victim/bg_holder/tab_friends").on("touchend", function() {
                  d.uiFindVictim.switchTab("friends")
              }),
              cc.find("Canvas/popup_find_victim/bg_holder/tab_thieves").on("touchend", function() {
                  d.uiFindVictim.switchTab("thieves")
              }),
              d.uiButton.bindButton(["Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite"], function() {
                  d.uiFindVictim.inviteFriends()
              }),
              d.uiFindVictim.switchTab("friends");
              var e = cc.find("Canvas/popup_find_victim/bg_holder/friend_list_scrollview/image-loading");
              e.runAction(cc.repeatForever(cc.rotateBy(2, 360))),
              d.uiFindVictim.hideLoading = function() {
                  e.active = !1
              }
          },
          inviteFriends: function() {
              _log("invite called !")
          },
          switchTab: function(e) {
              var a = cc.color("#ffffff")
                , o = cc.color("#CCC7BE")
                , t = cc.color("#9B6412")
                , n = cc.color("#DBCFB1")
                , i = cc.find("Canvas/popup_find_victim/bg_holder/tab_friends")
                , r = cc.find("Canvas/popup_find_victim/bg_holder/tab_thieves")
                , l = cc.find("Canvas/popup_find_victim/bg_holder/friend_list_scrollview")
                , d = cc.find("Canvas/popup_find_victim/bg_holder/scrollview");
              switch (e) {
              case "friends":
                  i.color = a,
                  r.color = o,
                  i.getChildByName("lbl").color = t,
                  r.getChildByName("lbl").color = n,
                  l.active = !0,
                  d.active = !1;
                  break;
              case "thieves":
                  i.color = o,
                  r.color = a,
                  i.getChildByName("lbl").color = n,
                  r.getChildByName("lbl").color = t,
                  l.active = !1,
                  d.active = !0
              }
          },
          renderFriendList: function() {
              var e = d.social.friendArr
                , i = "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/view/content"
                , r = cc.find(i);
              r.removeAllChildren(!0);
              var l = cc.find("Canvas/nodeCaches/row_friend_victim");
              e.map(function(e) {
                  if (e.gameId) {
                      var a = d.utils.copyNodeTo(l, r);
                      a.x = 0,
                      a.name = e.gameId,
                      d.utils.setLabelText(a.getChildByName("name"), e.name),
                      d.gameLanguage.setLabelDataAndRender(a.getChildByName("level"), e.level);
                      var o = cc.find(i + "/" + a.name + "/bg_avatar1/avatar");
                      cc.loader.load(e.photo, function(e, a) {
                          a && (o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a)),
                          e && console.log("cc.loader.load", e)
                      });
                      var t = (e.lastStolenTime || 0) + 1e3 * d.configs.stealFriendWaitTime
                        , n = t < _time();
                      _log(" fInfo.lastStolenTime = " + e.lastStolenTime + " // targetUTC = " + t + " // isStealable = " + n + " // _time()=" + _time() + " "),
                      n || d.utils.setLabelCountDownTimer(a.getChildByName("label_time_countdown"), t, function() {
                          a.getChildByName("btn_steal_friend").active = !0
                      }),
                      a.getChildByName("btn_steal_friend").active = n,
                      d.uiButton.bindButton([i + "/" + a.name + "/btn_steal_friend"], function() {
                          d.uiFindVictim.goStealFriend(e.gameId, e.id, e)
                      })
                  }
              })
          },
          fetchFriendList: function() {
              if (_log(" fetchFriendList called _G.uiFindVictim.isFetched = " + d.uiFindVictim.isFetched + " "),
              d.uiFindVictim.isFetched)
                  d.uiFindVictim.renderFriendList();
              else {
                  var e = d.social.friendArr;
                  if (_log(" _G.social.friendArr = " + d.social.friendArr.length + " "),
                  e.length) {
                      d.social.friendArr.map(function(e) {
                          return e.id
                      }).join(",");
                      _log(" _G.data.getFriendVictims called ! ");
                      _waitToRun(function() {
                          var o;
                          o = d.social.friendInfoObj,
                          _log("friendInfoObj = ", o),
                          o || (e.length = 0),
                          e.map(function(e) {
                              var a = o[e.id];
                              a && (e.gameId = a.PlayerId,
                              e.lastStolenTime = parseInt(a.StealTime),
                              e.level = a.PlayerLevel)
                          }),
                          e.sort(function(e, a) {
                              return (e.lastStolenTime || 0) > (a.lastStolenTime || 0) ? 1 : -1
                          }),
                          d.social.friendArr = e.filter(function(e) {
                              return e.gameId
                          }),
                          _log(" _G.social.friendArr = " + d.social.friendArr.length + " //////////////////////////////////////// "),
                          d.uiFindVictim.renderFriendList(),
                          d.uiFindVictim.isFetched = !0,
                          d.uiFindVictim.hideLoading()
                      }, "friendInfoObj", d.social)
                  } else
                      d.uiFindVictim.isFetched = !0,
                      d.uiFindVictim.hideLoading(),
                      cc.find("Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend").active = !0,
                      _log("no friend!")
              }
          },
          goStealFriend: function(e, a, o) {
              window._logEventUserDay2 && _logEventUserDay2("steal_friend");
              var t = _thisPlayerInfo.level >= d.configs.stealUnlockLevel;
              if (_logFBEvent("event_steal_friend", 1, {
                  isUnlockedSteal: t
              }),
              !t)
                  return d.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_level_cannot_steal/bg_holder/txt_msg"), d.configs.stealUnlockLevel),
                  void _showLayout("popup_level_cannot_steal");
              var n = function() {
                  _hideLayout("popup_find_victim"),
                  _hideLayout("popup_email"),
                  o.lastStolenTime = _time(),
                  d.game.isStealingFriendName = o.name,
                  d.game.isStealingFriendIdFB = a,
                  d.data.getStealFriendData(e, function(e) {
                      d.fx.findingVictim(),
                      setTimeout(function() {
                          d.fx.victimFound(),
                          _showLayout("layout_victim"),
                          d.game.initVictim(e)
                      }, 2e3)
                  }, function() {
                      d.uiLayout.showCongratulations("sorry, error occured", "oops!"),
                      d.uiLayout.hideNagScreen()
                  })
              };
              if (window.FBInstant) {
                  var i = function(e) {
                      _log(" error switchContext ", e),
                      "SAME_CONTEXT" == e.code && n(),
                      d.uiLayout.hideNagScreen()
                  };
                  a == d.game.isStealingFriendIdFB ? n() : (d.uiLayout.showNagScreen(_isANDROID ? null : _isIOS ? "#ffffff" : "#000000"),
                  FBInstant.context.createAsync(a).then(function() {
                      _logFBEvent("event_steal_friend_context"),
                      console.log(FBInstant.context.getID()),
                      d.uiLayout.hideNagScreen(),
                      n()
                  }, i).catch(i))
              } else
                  n()
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_harvest_noti: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a3e05HgmNhIL60XX5WDN3Zg", "ui_harvest_noti");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              for (var e = cc.find("Canvas/layout_home/bg_noti_row"), a = 0; a < 20; a++) {
                  var o = cc.instantiate(t.prefabList.noti_row);
                  o.name = "",
                  e.addChild(o),
                  o.active = !1
              }
          },
          getNotiRow: function(a) {
              return cc.find("Canvas/layout_home/bg_noti_row").children.find(function(e) {
                  return e.active && e.name == a
              })
          },
          getInactiveNotiRow: function(a) {
              var e = cc.find("Canvas/layout_home/bg_noti_row")
                , o = e.children.find(function(e) {
                  return e.name == a
              });
              return o || (o = e.children.find(function(e) {
                  return !e.active
              })),
              o
          },
          getCountNotiRow: function() {
              return cc.find("Canvas/layout_home/bg_noti_row").children.filter(function(e) {
                  return e.active
              }).length
          },
          resetAllNotiRows: function(e, a) {
              for (var o = cc.find("Canvas/layout_home/bg_noti_row").children.filter(function(e) {
                  return e.active
              }), t = 0; t < o.length; t++) {
                  var n = o[t];
                  if (n.y < e.y) {
                      var i = cc.moveBy(.2, cc.p(0, a));
                      n.runAction(i)
                  }
              }
          },
          getMinYNotiRow: function(e) {
              for (var a = cc.find("Canvas/layout_home/bg_noti_row").children.filter(function(e) {
                  return e.active
              }), o = e, t = 0; t < a.length; t++)
                  o > a[t].y && (o = a[t].y);
              return o
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_home: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a76a4mnmAdFCoR49TIPgK0B", "ui_home");
      var r = e("../all_modules");
      setTimeout(function() {
          r = e("../all_modules")
      }, 0),
      a.exports = {
          setUsernameHome: function(e) {
              r.utils.setLabelText(cc.find("Canvas/layout_home/bg_profile/name"), r.utils.trimStr(e, 12))
          },
          updateLockStealButByLevel: function() {
              var e = _thisPlayerInfo.level >= r.configs.stealUnlockLevel;
              cc.find("Canvas/layout_home/bg_shop/steal/steal").opacity = e ? 255 : 100
          },
          setLevelHome: function(e) {
              if (!isNaN(e.PlayerExp) && window._thisPlayerInfo) {
                  var a = e.PlayerLevel
                    , o = e.PlayerExp
                    , t = !!a && a > _thisPlayerInfo.level;
                  a && (_thisPlayerInfo.level = a),
                  e.Diamond && (_thisPlayerInfo.diamond = e.Diamond),
                  e.Gold && (_thisPlayerInfo.gold = e.Gold),
                  r.uiHome.updateLockStealButByLevel(),
                  _thisPlayerInfo.exp != o && (_thisPlayerInfo.exp = o,
                  r.leaderboard.setFBExpScore()),
                  t && (r.core.setSlotListByLevel(r.game.mySlotList, a),
                  r.stolenDamage.recordDamageSlots(),
                  r.core.slotListUpdateUI(r.game.mySlotList),
                  _timer0(r.stolenDamage.applyDamageAfterRefreshAllSlots),
                  r.uiShop.updateShopByLevel(a),
                  r.uiHome.showPopupNewLevel(a),
                  r.pseudoServer.syncField()),
                  r.uiShop.renderShopBadgesNew(t);
                  var n = cc.find("Canvas/layout_home/bg_profile/progressLevel").getComponent(cc.ProgressBar)
                    , i = o / r.configs.getInfoLevel(_thisPlayerInfo.level + 1).exp;
                  n.progress = i,
                  r.utils.setLabelText(cc.find("Canvas/layout_home/bg_profile/level"), _thisPlayerInfo.level + "")
              }
          },
          setGold: function(e) {
              r.utils.setLabelTextPrice(cc.find("Canvas/layout_home/bg_gold/money"), e < 0 ? 0 : e),
              e < 0 && r.data.addGold(-e)
          },
          setDiamond: function(e) {
              r.utils.setLabelTextPrice(cc.find("Canvas/layout_home/bg_ruby/ruby"), e)
          },
          showPopupNewLevel: function(e) {
              r.sound.playSFX("level_up_and_achievement_complete"),
              _logFBEvent("event_level_up", 1, {
                  level: e
              }),
              18 != e && 20 != e && 22 != e && 24 != e || _logFBEvent("event_level_up_lv_" + e),
              4 == e && (r.tutorial.prepareTut2(),
              window._logEventUserDay2 && _logFBEvent("event_user_day2_lv4", 1, {
                  typeLv4: "up_lv4_in_session"
              }));
              var a = "";
              for (var o in r.configs.products)
                  if (r.configs.products[o].level == e) {
                      a = o;
                      break
                  }
              "" == a ? r.utils.setLabelText(cc.find("Canvas/popup_new_level1/level_number"), "" + e) : r.utils.setLabelText(cc.find("Canvas/popup_new_level/level_number"), "" + e),
              r.gifts.updateGoldAtVideoGold();
              var t = void 0;
              "" == a ? (_showLayout("popup_new_level1"),
              r.x2reward.resetNewPopup("popup_new_level1"),
              t = r.configs.getInfoLevel(e),
              r.utils.setLabelText(cc.find("Canvas/popup_new_level1/bg_holder/bg_info1/lbl1"), "+" + t.gold),
              r.utils.setLabelText(cc.find("Canvas/popup_new_level1/bg_holder/bg_info1/lbl2"), "+" + t.diamond)) : (_showLayout("popup_new_level"),
              r.x2reward.resetNewPopup("popup_new_level"),
              t = r.configs.getInfoLevel(e),
              r.utils.setLabelText(cc.find("Canvas/popup_new_level/bg_holder/bg_info1/lbl1"), "+" + t.gold),
              r.utils.setLabelText(cc.find("Canvas/popup_new_level/bg_holder/bg_info1/lbl2"), "+" + t.diamond),
              cc.find("Canvas/popup_new_level/bg_holder/bg_info/img").getComponent(cc.Sprite).spriteFrame = r.uiSlot.getItemUnlockedSpriteFrame(a)),
              r.fx.unconfirmedPopupArr.push({
                  name: "popup_new_level",
                  gold: t.gold,
                  diamond: t.diamond
              }),
              r.fx.updateNonPendingGoldDiamond()
          },
          claimLevelUp1: function() {
              var e = r.configs.info_level[_thisPlayerInfo.level - 1];
              if (0 < e.diamond) {
                  var a = cc.find("Canvas/popup_new_level/bg_holder/bg_info1/img2");
                  r.fx.claimDiamond(a, 0, "popup_new_level", !0)
              }
              if (0 < e.gold) {
                  var o = cc.find("Canvas/popup_new_level/bg_holder/bg_info1/img1");
                  r.fx.claimGold(o, 0, "popup_new_level", !0)
              }
              _hideLayout("popup_new_level");
              _thisPlayerInfo.level
          },
          claimLevelUp2: function() {
              var e = r.configs.info_level[_thisPlayerInfo.level - 1];
              if (e) {
                  if (0 < e.diamond) {
                      var a = cc.find("Canvas/popup_new_level1/bg_holder/bg_info1/img2");
                      r.fx.claimDiamond(a, 0, "popup_new_level", !0)
                  }
                  if (0 < e.gold) {
                      var o = cc.find("Canvas/popup_new_level1/bg_holder/bg_info1/img1");
                      r.fx.claimGold(o, 0, "popup_new_level", !0)
                  }
                  _hideLayout("popup_new_level1");
                  _thisPlayerInfo.level
              }
          },
          claimBotGift: function() {
              var e = cc.find("Canvas/popup_bot_gift/bg_holder/btn_claim").botGift;
              if (e) {
                  var a = cc.find("Canvas/popup_bot_gift/bg_holder/gift/gold/icon-gold");
                  r.fx.claimGold(a, e.gold, "popup_bot_gift", !0);
                  var o = cc.find("Canvas/popup_bot_gift/bg_holder/gift/diamond/icon-diamond");
                  r.fx.claimDiamond(o, e.diamond, "popup_bot_gift", !0)
              }
          },
          showProfile: function() {
              var e = cc.find("Canvas/layout_home/popup_friend_info_home_prefab (late_load)");
              e.zIndex = 99999,
              e.x = 0,
              e.active = !0,
              cc.find("Canvas/layout_home/bg_profile").zIndex = 99999;
              var a = 0;
              0 != _thisPlayerInfo.stealCount && (a = Math.floor(100 * (_thisPlayerInfo.stealCount - _thisPlayerInfo.stealArrest) / _thisPlayerInfo.stealCount));
              var o = e.getChildByName("border")
                , t = (r.configs.info_level[_thisPlayerInfo.level - 1] || {}).exp || 9999999999;
              r.gameLanguage.setLabelDataAndRender(o.getChildByName("lbl1"), r.utils.shortNumber(_thisPlayerInfo.stealCount)),
              r.gameLanguage.setLabelDataAndRender(o.getChildByName("lbl3"), r.utils.shortNumber(_thisPlayerInfo.stolenCount)),
              r.gameLanguage.setLabelDataAndRender(o.getChildByName("lbl2"), a),
              r.utils.setLabelText(o.getChildByName("lv").getChildByName("label"), "" + _thisPlayerInfo.level),
              r.utils.setLabelText(o.getChildByName("progress").getChildByName("exp"), r.utils.shortNumber(_thisPlayerInfo.exp) + "/" + r.utils.shortNumber(t)),
              e.getChildByName("border").getChildByName("progress").getChildByName("bar").getComponent(cc.Sprite).fillRange = _thisPlayerInfo.exp / t
          },
          showNotiPostBox: function() {
              var e = cc.find("Canvas/layout_home/post_box/thu");
              cc.find("Canvas/layout_home/post_box").opacity = a ? 255 : 160;
              var a = !!(window._listThief || []).length;
              (e.active = a) && !r.uiHome.mailListWatched && (e.stopAllActions(),
              e.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.1, -10).easing(cc.easeIn(1)), cc.rotateBy(.2, 20).easing(cc.easeIn(1)), cc.rotateBy(.1, -10).easing(cc.easeIn(1)), cc.rotateBy(1, 0)))))
          },
          showEmail: function() {
              _showLayout("popup_email"),
              r.uiHome.fetchEmail()
          },
          fetchEmail: function() {
              var e = (window._listThief || []).length
                , a = cc.find("Canvas/popup_email/bg_holder/scrollview/view/content");
              a.removeAllChildren(),
              cc.find("Canvas/popup_email/bg_holder/scrollview/label_no_revenge").active = !e,
              cc.find("Canvas/popup_email/bg_holder/title").active = !!e;
              for (var o = 0; o < e; o++) {
                  var t = r.utils.copyNodeTo(cc.find("Canvas/nodeCaches/row_victim"), a);
                  t.setPosition(0, 0),
                  t.getComponent("row_victim").setInfo(_listThief[o])
              }
          },
          showNews: function() {
              var e = (window._listThief || []).length;
              cc.find("Canvas/popup_email/bg_holder/scrollview/label_no_revenge").active = !1,
              cc.find("Canvas/popup_email/bg_holder/title").active = !!e;
              for (var a = cc.find("Canvas/popup_email/bg_holder/scrollview/view/content"), o = 0; o < e; o++) {
                  var t = _listThief[o];
                  if (t.SteelTime > _thisPlayerInfo.lastLoginTime) {
                      var n = r.utils.copyNodeTo(cc.find("Canvas/nodeCaches/row_victim"), a);
                      n.setPosition(0, 0),
                      n.getComponent("row_victim").setInfo(t)
                  }
              }
              0 < a.childrenCount && (window._isShowPopupEmailReport = !0,
              r.popups.registerToShow("popup_email"))
          },
          resetPosition: function() {
              cc.find("Canvas/layout_home/scroll_layer").setPosition(0, 0)
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_layout: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "7256c9PIhdClq0JKAf9wxKC", "ui_layout");
      var n = e("../all_modules");
      setTimeout(function() {
          n = e("../all_modules")
      }, 0),
      a.exports = {
          showingLayoutCount: 0,
          init: function() {
              window._currentLayouts = {},
              window._allLayoutList = {
                  layout_home: 1,
                  layout_victim: 1,
                  popup_adjust_order: 2,
                  popup_storage: 2,
                  popup_info_item: 2,
                  popup_find_victim: 2,
                  popup_email: 2,
                  popup_new_level: 2,
                  popup_new_level1: 2,
                  popup_new_achievement: 2,
                  popup_achievement_list: 2,
                  popup_shop: 2,
                  popup_leaderboard: 2,
                  popup_suggest_theme_trial: 2,
                  popup_theme_trial_expired: 2,
                  popup_intro_new_products: 2,
                  popup_daily_reward: 2,
                  popup_dogs: 2,
                  popup_sell: 3,
                  popup_info_victim: 3,
                  popup_upgrade_storage: 3,
                  popup_upgrade_truck: 3,
                  popup_storage_full: 3,
                  popup_not_enough_gold: 3,
                  popup_not_enough_diamond: 3,
                  popup_not_found: 3,
                  popup_load_video: 3,
                  popup_video_failed: 3,
                  popup_received_gold: 3,
                  popup_dog_attack: 3,
                  popup_go_home: 3,
                  popup_congratulations: 3,
                  popup_upgrade_truck_full: 3,
                  popup_disconnected: 3,
                  popup_level_cannot_steal: 3,
                  popup_bot_gift: 3,
                  popup_gift_list: 3,
                  popup_buy_dog_iap_099: 3,
                  popup_recover_damage: 3,
                  popup_confirm_set_dog: 3,
                  popup_loading_screenshot: 3
              },
              window._showLayout = function(e) {
                  var a = cc.find("Canvas/" + e);
                  if (!a)
                      return !1;
                  "popup_not_enough_gold" == e && _logFBEvent("event_not_enough_gold_show_popup"),
                  a.x = 0,
                  a.active = !0;
                  var o = _allLayoutList[e]
                    , t = _currentLayouts[o];
                  return t || 1 != o || (t = cc.find("Canvas/layout_home")),
                  t && t != a && t.name && 1 == o && (t.x = 9999,
                  n.uiLayout.showingLayoutCount--),
                  _currentLayouts[o] = a,
                  ("layout_home" != e && "layout_victim" != e || "popup_new_achievement" != e) && n.sound.playSFX("pop_up"),
                  n.uiLayout.showingLayoutCount++,
                  !0
              }
              ,
              window._hideLayout = function(e) {
                  var a = cc.find("Canvas/" + e);
                  a.x = 9999,
                  a.active = !1;
                  var o = _allLayoutList[e];
                  _currentLayouts[o] == a && (_currentLayouts[o] = null),
                  n.uiLayout.showingLayoutCount--
              }
          },
          showToolTip: function(e) {
              var a = cc.find("Canvas/tooltip");
              if (!a.active) {
                  a.active = !0,
                  a.opacity = 255;
                  var o = cc.sequence(cc.delayTime(1), cc.fadeOut(.35), cc.callFunc(function() {
                      a.active = !1
                  }));
                  setTimeout(function() {
                      a.runAction(cc.sequence(cc.moveBy(.35, cc.p(0, 100)), cc.moveBy(.01, cc.p(0, -100))))
                  }, 1e3),
                  a.runAction(o),
                  n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/tooltip/text"), e)
              }
          },
          showCongratulations: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "Congratulations!";
              _showLayout("popup_congratulations"),
              n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_congratulations/bg_holder/title"), a),
              n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_congratulations/bg_holder/info"), e)
          },
          hideCongratulations: function() {
              _hideLayout("popup_congratulations")
          },
          showNagScreen: function(e) {
              cc.find("nagScreen").active = !0;
              var a = cc.find("nagScreen/transparent_layer");
              a.active = !!e,
              e && (a.color = cc.color(e))
          },
          hideNagScreen: function() {
              cc.find("nagScreen").active = !1
          },
          isNotShowingAnyPopup: function() {
              return n.uiLayout.showingLayoutCount <= 0
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_shop: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "0c9d0waNCpE05V7QLXUu5og", "ui_shop");
      var c = e("../all_modules");
      setTimeout(function() {
          c = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              c.uiHome.usedProductList = {},
              c.uiShop.currentShopTab = "tree"
          },
          shopButHandler: function(e) {
              var a = e.name;
              c.configs.products[a].level > _thisPlayerInfo.level || (e.getChildByName("badge_new").active,
              c.eventsTree.plantTree(c.game.mySlotList, null, a))
          },
          hideShop: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              if (!c.tutorial.isShowingTut() && ([cc.find("Canvas/layout_home/bg_shop"), cc.find("Canvas/layout_home/panel_right")].map(function(e) {
                  e.orgPosY || (e.orgPosY = e.y),
                  e.stopAllActions();
                  var a = cc.moveTo(.2, cc.v2(e.x, e.orgPosY - 300))
                    , o = cc.fadeOut(.2)
                    , t = cc.spawn(a, o);
                  (e.getComponent(cc.Widget) || {}).enabled = !1,
                  e.runAction(t)
              }),
              e)) {
                  var a = cc.find("Canvas/layout_home/but_harvest");
                  a.orgPosY || (a.orgPosY = a.y),
                  a.getComponent(cc.Widget).enabled = !1,
                  a.runAction(cc.moveTo(.2, cc.v2(a.x, a.orgPosY - 300)))
              }
          },
          showShop: function() {
              [cc.find("Canvas/layout_home/bg_shop"), cc.find("Canvas/layout_home/panel_right")].map(function(e) {
                  e.stopAllActions();
                  var a = cc.moveTo(.2, cc.p(e.x, e.orgPosY))
                    , o = cc.fadeIn(.2)
                    , t = cc.spawn(a, o);
                  e.runAction(t),
                  setTimeout(function() {
                      (e.getComponent(cc.Widget) || {}).enabled = !0
                  }, 200)
              });
              var e = cc.find("Canvas/layout_home/but_harvest");
              e.runAction(cc.sequence(cc.moveTo(.2, cc.v2(e.x, e.orgPosY)), cc.callFunc(function() {
                  e.getComponent(cc.Widget).enabled = !0
              })))
          },
          updateLevelPopupNewProducts: function() {
              for (var e in c.configs.products) {
                  var a = c.configs.products[e].level
                    , o = cc.find("Canvas/popup_intro_new_products/bg_holder/new_prod_list/khung-nho-" + e + "/khung tien/label");
                  o && c.gameLanguage.setLabelDataAndRender(o, a)
              }
          },
          updateShopByLevel: function(e) {
              for (var a in c.uiShop.updateLevelPopupNewProducts(),
              c.configs.products) {
                  var o = c.configs.products[a].level
                    , t = c.configs.products[a].price
                    , n = cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + a + "/img")
                    , i = cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + a + "/price/lbl2")
                    , r = cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + a + "/price/img")
                    , l = cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + a + "/price/lbl1");
                  o <= e ? (i.active = !0,
                  r.active = !0,
                  l.active = !1,
                  n.color = cc.color("#ffffff"),
                  c.utils.setLabelText(i, "" + t),
                  n.opacity = 255) : (i.active = !1,
                  r.active = !1,
                  l.active = !0,
                  n.color = cc.color("#000000"),
                  c.gameLanguage.setLabelDataAndRender(l, o),
                  n.opacity = 150);
                  var d = cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + a);
                  d.isAnimal = c.configs.isAnimalProduct[a],
                  d.active = !d.isAnimal
              }
              var s = c.uiShop.currentShopTab;
              c.uiShop.currentShopTab = "",
              c.uiShop.showShopTab(s),
              c.uiShop.currentShopTab = "",
              c.uiShop.showShopTab(s)
          },
          focusShopTab: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tree";
              if (c.uiShop.currentShopTab != e) {
                  c.uiShop.currentShopTab = e;
                  var a = cc.find("Canvas/layout_home/bg_shop/group-1")
                    , o = cc.find("Canvas/layout_home/bg_shop/group-2")
                    , t = a.getComponent(cc.Sprite).spriteFrame;
                  c.utils.setNodeImg(a, o),
                  c.utils.setNodeImg(o, t)
              }
          },
          showShopTab: function() {
              var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tree";
              c.uiShop.focusShopTab(a),
              cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content").children.map(function(e) {
                  e.active = "tree" == a ? !e.isAnimal : e.isAnimal
              }),
              "animal" == a && (cc.find("Canvas/layout_home/bg_shop/group-2/image new").active = !1)
          },
          setShopProductBadgeNew: function(e) {
              var a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
              if (cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content/" + e + "/badge_new").active = a,
              !c.uiShop.hasNewAnimal && c.configs.isAnimalProduct[e]) {
                  var o = a && "animal" != c.uiShop.currentShopTab;
                  !c.uiShop.hasNewAnimal && o && (c.uiShop.hasNewAnimal = !0)
              }
          },
          renderShopBadgesNew: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              for (var a in c.uiHome.usedProductList)
                  ;
              c.uiShop.hasNewAnimal = !1,
              cc.find("Canvas/layout_home/bg_shop/scroll_plant/view/content").children.map(function(e) {
                  var a = e.name
                    , o = c.configs.products[a].level <= _thisPlayerInfo.level
                    , t = c.uiHome.usedProductList[a];
                  c.uiShop.setShopProductBadgeNew(a, o && !t)
              }),
              cc.find("Canvas/layout_home/bg_shop/group-2/image new").active = e && c.uiShop.hasNewAnimal
          },
          disableAllHands: function() {
              _log(" disableHarvestHand ");
              var e = cc.find("Canvas/layout_home/but_harvest")
                , a = cc.find("Canvas/layout_victim/but_harvest");
              e.isTouchDisabled = a.isTouchDisabled = !0,
              e.opacity = a.opacity = 160
          },
          enableAllHands: function() {
              _log(" enableHarvestHand ");
              var e = cc.find("Canvas/layout_home/but_harvest")
                , a = cc.find("Canvas/layout_victim/but_harvest");
              e.isTouchDisabled = a.isTouchDisabled = !1,
              e.opacity = a.opacity = 255
          },
          disableStealHand: function() {
              var e = cc.find("Canvas/layout_victim/but_harvest");
              e.isTouchDisabled = !1,
              e.opacity = 160
          },
          enableStealHand: function() {
              var e = cc.find("Canvas/layout_victim/but_harvest");
              e.isTouchDisabled = !1,
              e.opacity = 255
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_slot: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "2a288ufiFxM7rSo5PKDZNrQ", "ui_slot");
      var i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
        , p = e("../all_modules");
      setTimeout(function() {
          p = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              p.uiSlot.createAllGroundSlots("layout_home", "ground_cells_A"),
              p.uiSlot.createAllGroundSlots("layout_home", "ground_cells_B"),
              p.uiSlot.createAllGroundSlots("layout_home", "ground_cells_C"),
              p.uiSlot.createAllGroundSlots("layout_victim", "ground_cells_A"),
              p.uiSlot.createAllGroundSlots("layout_victim", "ground_cells_B"),
              p.uiSlot.createAllGroundSlots("layout_victim", "ground_cells_C")
          },
          createAllGroundSlots: function() {
              for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "layout_home", a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "ground_cells_A", o = cc.find("Canvas/" + e + "/scroll_layer/" + a), t = a.split("_")[2], n = o.getComponent(cc.Layout).spacingX, i = o.getComponent(cc.Layout).spacingY, r = cc.instantiate(p.prefabList.ground), l = r.width, d = r.height, s = 0; s < 30; s++) {
                  var c = cc.instantiate(p.prefabList.ground)
                    , u = s % 5 + 1
                    , _ = _floor(s / 5) + 1;
                  c.name = t + "-" + u + "-" + _,
                  o.addChild(c),
                  c.setPosition((u - .5) * l + (u - 1) * n, -(_ - .5) * d - (_ - 1) * i),
                  p.uiSlot.renderSlot(c.name, "invisible", e)
              }
              p.control.initSlotLayoutZIndex(e)
          },
          getCellBgsSpriteFrame: function(e) {
              return cc.find("Canvas/nodeCaches/cell_bgs/" + e).getComponent(cc.Sprite).spriteFrame
          },
          getItemHarvestSpriteFrame: function(e) {
              return cc.find("Canvas/nodeCaches/item_harvest/" + e).getComponent(cc.Sprite).spriteFrame
          },
          getItemUnlockedSpriteFrame: function(e) {
              return cc.find("Canvas/nodeCaches/item_unlocked_product/" + e).getComponent(cc.Sprite).spriteFrame
          },
          getTreeSpriteFrame: function(e, a) {
              return 6 < a && (a = 6),
              cc.find("Canvas/nodeCaches/" + e + "/" + a).getComponent(cc.Sprite).spriteFrame
          },
          getSquareSpriteFrame: function(e) {
              return cc.find("Canvas/nodeCaches/square_bgs/" + e).getComponent(cc.Sprite).spriteFrame
          },
          updateVictimOutput: function(e, a, o, t) {
              4 < arguments.length && void 0 !== arguments[4] && arguments[4];
              var n = p.uiSlot.getSlotNode(e, "layout_victim")
                , i = p.uiSlot.getProductNode(n.name, "layout_victim");
              if (i) {
                  var r = i.getChildByName("bg_output");
                  if (r)
                      if (0 == o)
                          r.active = !1;
                      else {
                          var l = p.configs.products[a].maxOutput[o - 1];
                          r.active = !0;
                          var d = r.getChildByName("lbl");
                          d.color = t / l < .3 ? cc.color("#8f603a") : t / l < .9 ? cc.color("#ee7306") : cc.color("#0bac31"),
                          p.utils.setLabelText(d, t + "/" + l)
                      }
              }
          },
          showSlotBg: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = p.uiSlot.getSlotNode(e, a);
              o && (o.getComponent(cc.Sprite).enabled = !0)
          },
          renderSlot: function(e, a) {
              var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "layout_home"
                , t = "layout_home" == o
                , n = p.uiSlot.getSlotNode(e, o);
              if (n) {
                  n.color = cc.color("#ffffff"),
                  n.getComponent(cc.Sprite).enabled = !0;
                  var i = n.getChildByName("lbl_info")
                    , r = n.getChildByName("lbl_info1");
                  i.active = !1,
                  r.active = !1;
                  var l = a;
                  switch (t || "unlocked" != a && "locked" != a || (l = "bought"),
                  "bought" == l && (p.controlLib.setDroppable(n),
                  n.layoutName = o),
                  n.getComponent(cc.Sprite).enabled = !0,
                  l) {
                  case "invisible":
                      n.getComponent(cc.Sprite).enabled = !1;
                      break;
                  case "bought":
                      n.getComponent(cc.Sprite).spriteFrame = p.uiSlot.getCellBgsSpriteFrame("ground_cell1");
                      break;
                  case "unlocked":
                      i.active = !0,
                      i.setPosition(2, -19),
                      p.gameLanguage.setLabelDataAndRender(i, p.configs.slots[e].gold),
                      p.utils.setLabelTextPrice(i, p.configs.slots[e].gold),
                      i.getComponent(cc.Label).fontSize = 25,
                      i.color = p.theme.getThemeGroundPriceColor() || cc.color("#FFFE3F"),
                      n.getComponent(cc.Sprite).spriteFrame = p.uiSlot.getCellBgsSpriteFrame("ground_cell3"),
                      "layout_home" != o || n.buyClickInitialized || (n.buyClickInitialized = !0,
                      p.control.initBuySlotClick(n));
                      break;
                  case "locked":
                      var d = _farLevelUnlockSlotList[e] || p.core.getLevelUnlock(window._thisPlayerInfo ? _thisPlayerInfo.level : 1);
                      i.active = !0,
                      i.setPosition(2, -26),
                      p.gameLanguage.setLabelDataAndRender(i, "LEVEL " + d),
                      i.getComponent(cc.Label).fontSize = 22,
                      i.color = p.theme.getThemeGroundUnlockColor() || cc.color("#BAEB66"),
                      n.getComponent(cc.Sprite).spriteFrame = p.uiSlot.getCellBgsSpriteFrame("ground_cell4")
                  }
              }
          },
          buySlotClick1: function(e) {
              p.sound.playSFX("land_press");
              var a = p.uiSlot.getSlotNode(e)
                , o = a.getComponent(cc.Sprite);
              a.getChildByName("lbl_info1").active = !0,
              o.spriteFrame = p.uiSlot.getCellBgsSpriteFrame("ground_cell1")
          },
          buySlotClick2UI: function(e) {
              p.sound.playSFX("land_press"),
              _logFBEvent("event_buy_slot"),
              p.uiSlot.renderSlot(e, "bought")
          },
          buySlotCancel: function(e) {
              var a = p.uiSlot.getSlotNode(e)
                , o = a.getComponent(cc.Sprite);
              a.getChildByName("lbl_info");
              a.getChildByName("lbl_info1").active = !1,
              o.spriteFrame = p.uiSlot.getCellBgsSpriteFrame("ground_cell3")
          },
          getSlotZIndex: function(e) {
              var a = e.split("-")
                , o = i(a, 3)
                , t = (o[0],
              o[1])
                , n = o[2];
              return 5 * (parseInt(n) - 1) + parseInt(t)
          },
          getSlotNode: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = e.split("-")[0];
              return cc.find("Canvas/" + a + "/scroll_layer/ground_cells_" + o + "/" + e)
          },
          getProductNode: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = e
                , t = "layout_home" == a ? p.game.mySlotList : p.game.victimSlotList;
              if (t) {
                  var n = t[e];
                  n && n.isAnimal && (o = n.animalHeadSlot)
              }
              return cc.find("Canvas/" + a + "/scroll_layer/layer_product/" + o)
          },
          moveTreeTo: function(e, a, o) {
              var t = p.uiSlot.getProductNode(e)
                , n = p.uiSlot.getSlotNode(a);
              p.utils.setPosToOtherNode(t, n),
              t.name = a,
              p.uiSlot.getSlotNode(e).productObj = null,
              n.productObj = o,
              t.zIndex = p.uiSlot.getSlotZIndex(a)
          },
          moveAnimalTo: function(e, a, o) {
              var t = p.uiSlot.getProductNode(e)
                , n = p.uiSlot.getSlotNode(a);
              t.name = a,
              p.utils.setPosToOtherNode(t, n),
              t.x += n.width / 2 + n.parent.getComponent(cc.Layout).spacingX / 2,
              t.y -= n.height / 2 + n.parent.getComponent(cc.Layout).spacingX / 2,
              p.uiAnimal.get4SlotsAnimal(e).map(function(e) {
                  e.productObj = null,
                  p.uiSlot.showSlotBg(e.name)
              }),
              p.uiAnimal.get4SlotsAnimal(a).map(function(e) {
                  e.productObj = o
              }),
              t.zIndex = p.uiSlot.getSlotZIndex(a)
          },
          swapTrees: function(e, a, o, t) {
              var n = p.uiSlot.getProductNode(e)
                , i = p.uiSlot.getProductNode(a);
              if (n && i) {
                  var r = n.getPosition();
                  n.setPosition(i.getPosition()),
                  i.setPosition(r),
                  n.name = a,
                  i.name = e,
                  p.uiSlot.getSlotNode(e).productObj = t,
                  p.uiSlot.getSlotNode(a).productObj = o,
                  n.zIndex = p.uiSlot.getSlotZIndex(a),
                  i.zIndex = p.uiSlot.getSlotZIndex(e)
              }
          },
          swapAnimals: function(e, a, o, t) {
              var n = p.uiSlot.getProductNode(e)
                , i = p.uiSlot.getProductNode(a);
              if (n && i) {
                  var r = n.getPosition();
                  n.setPosition(i.getPosition()),
                  i.setPosition(r),
                  n.name = a,
                  i.name = e,
                  p.uiAnimal.get4SlotsAnimal(e).map(function(e) {
                      e.productObj = t
                  }),
                  p.uiAnimal.get4SlotsAnimal(a).map(function(e) {
                      e.productObj = o
                  }),
                  n.zIndex = p.uiSlot.getSlotZIndex(a),
                  i.zIndex = p.uiSlot.getSlotZIndex(e)
              }
          },
          resetSlotTree: function(a) {
              _timer0(function() {
                  var e = p.uiSlot.getProductNode(a);
                  e && e.removeFromParent(!0)
              });
              var e = p.uiSlot.getProductNode(a);
              e && (e.productObj = null,
              e.color = cc.color("#ffffff"))
          },
          resetSlotAnimal: function(e) {
              var a = p.uiSlot.getProductNode(e);
              p.controlLib.removeDroppable(a),
              _timer0(function() {
                  a.removeFromParent(!0)
              }),
              p.uiAnimal.get4SlotsAnimal(e).map(function(e) {
                  e.productObj = null,
                  e.color = cc.color("#ffffff"),
                  p.uiSlot.showSlotBg(e.name)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_storage: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "3e6a8HQV+xKEaKTU8OQlA8o", "ui_storage");
      var n = e("../all_modules");
      setTimeout(function() {
          n = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              var e = cc.find("Canvas/popup_storage/bg_holder/product_list/view/storage_cells")
                , a = n.configs.products;
              for (var o in a) {
                  var t = n.utils.copyNodeTo(cc.find("Canvas/nodeCaches/storage_item"), e);
                  t.setPosition(0, 0),
                  t.active = !1
              }
              n.uiStorage.setStateAvailable()
          },
          showPopupUpgrade: function() {
              _showLayout("popup_storage_full"),
              n.storage.level < n.configs.storage.length ? (n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_storage_full/bg_holder/message"), "Your storage is full\nupgrade now ?"),
              cc.find("Canvas/popup_storage_full/bg_holder/btn_upgrade").active = !0) : (n.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_storage_full/bg_holder/message"), "Please sell farm products."),
              cc.find("Canvas/popup_storage_full/bg_holder/btn_upgrade").active = !1)
          },
          hidePopupUpgrade: function() {
              _hideLayout("popup_storage_full")
          },
          handleFull: function() {
              if (n.uiStorage.isFulledAtGameStart)
                  n.uiStorage.isFulledAtGameStart = !1;
              else if (n.uiStorage.isStateFulled)
                  return;
              n.storage.showUpgrade(),
              n.uiShop.disableAllHands(),
              n.uiStorage.setStateFull()
          },
          handleAvailableAgain: function() {
              n.uiShop.enableAllHands(),
              n.uiStorage.setStateAvailable()
          },
          setStateFull: function() {
              n.uiStorage.isStateFulled = !0;
              var e = cc.find("Canvas/layout_home/scroll_layer/storage_house/left_door")
                , a = cc.find("Canvas/layout_home/scroll_layer/storage_house/right_door");
              e.stopAllActions(),
              a.stopAllActions(),
              setTimeout(n.uiStorage.endBubbling, 1e3),
              e.x = -76,
              a.x = 76,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_full").active = !0,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_harvesting").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/full_product_at_door").active = !0
          },
          setStateAvailable: function() {
              n.uiStorage.isStateFulled = !1,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/left_door").x = -31.7,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/right_door").x = 31.7,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_harvesting").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_full").active = !1,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/full_product_at_door").active = !1
          },
          openDoor: function(e) {
              n.uiStorage.isBubbling || n.sound.playSFX("wooddoor_open"),
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_harvesting").active = !0;
              var a = cc.find("Canvas/layout_home/scroll_layer/storage_house/left_door")
                , o = cc.find("Canvas/layout_home/scroll_layer/storage_house/right_door");
              a.stopAllActions(),
              o.stopAllActions(),
              a.runAction(cc.moveTo(.3, cc.p(-76, a.y))),
              setTimeout(n.uiStorage.startBubbling, 500),
              o.runAction(cc.sequence(cc.moveTo(.3, cc.p(76, o.y)), cc.delayTime(e), cc.callFunc(n.uiStorage.closeDoor)))
          },
          closeDoor: function() {
              if (cc.find("Canvas/layout_home/scroll_layer/storage_house/full_product_at_door").active)
                  n.uiStorage.endBubbling();
              else {
                  n.sound.playSFX("wooddoor_close");
                  var e = cc.find("Canvas/layout_home/scroll_layer/storage_house/left_door")
                    , a = cc.find("Canvas/layout_home/scroll_layer/storage_house/right_door");
                  e.stopAllActions(),
                  a.stopAllActions(),
                  e.runAction(cc.moveTo(.3, cc.p(-31.7, e.y))),
                  a.runAction(cc.sequence(cc.moveTo(.3, cc.p(31.7, a.y)), cc.callFunc(n.uiStorage.endBubbling)))
              }
          },
          startBubbling: function() {
              n.uiStorage.isBubbling || (n.uiStorage.isBubbling = !0,
              cc.find("Canvas/layout_home/scroll_layer/storage_house").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, .98, 1.02).easing(cc.easeIn(2)), cc.scaleTo(.2, 1.02, .98).easing(cc.easeIn(2))))))
          },
          endBubbling: function() {
              n.uiStorage.isBubbling = !1,
              cc.find("Canvas/layout_home/scroll_layer/storage_house/glow_harvesting").active = !1;
              var e = cc.find("Canvas/layout_home/scroll_layer/storage_house");
              e.stopAllActions(),
              e.scale = 1
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_store: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "254183ZLeJPt6+Id0pbbK2+", "ui_store");
      var c = e("../all_modules");
      setTimeout(function() {
          c = e("../all_modules")
      }, 0);
      var u = !1;
      function t() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "gold";
          _showLayout("popup_shop"),
          _hideLayout("popup_dogs");
          ["gold", "diamond", "theme"].map(function(e) {
              var a = e == t
                , o = "diamond" != e || u;
              cc.find("Canvas/popup_shop/bg-holder/tab-" + e + "-on").active = a && o,
              cc.find("Canvas/popup_shop/bg-holder/tab-" + e + "-off").active = !a && o,
              cc.find("Canvas/popup_shop/bg-holder/shop-" + e).active = a && o
          })
      }
      a.exports = {
          isPaymentAvailable: !1,
          init: function() {
              window.FBInstant ? FBInstant.payments.onReady(function() {
                  _log("Payments Ready!"),
                  c.uiStore.paymentChecked = !0,
                  c.uiStore.isPaymentAvailable = u = !0
              }) : c.uiStore.paymentChecked = !0,
              cc.find("Canvas/popup_not_enough_diamond/purchase").active = !1;
              var e = cc.find("Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active")
                , a = cc.find("Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/inactive");
              e.active = !0,
              a.active = !1;
              var o = e.getChildByName("icon");
              o.scale = 1;
              var t = cc.scaleTo(.5, 1.3)
                , n = cc.scaleTo(.5, 1)
                , i = cc.sequence(t, n)
                , r = cc.repeatForever(i);
              o.runAction(r);
              for (var l = ["e10", "e25", "e50", "e100", "e200", "e500"], d = 1; d <= l.length; d++) {
                  var s = l[d - 1];
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_shop/bg-holder/shop-gold/item-" + d + "/label-price/price"), c.configs.shop.exchange[s].diamond),
                  c.utils.setLabelTextPrice(cc.find("Canvas/popup_shop/bg-holder/shop-gold/item-" + d + "/label-gold/gold"), c.configs.shop.exchange[s].gold)
              }
              _waitToRun(function() {
                  c.uiStore.isPaymentAvailable && (c.uiButton.inactiveButton(cc.find("Canvas/layout_home/bg_ruby"), !1),
                  cc.find("Canvas/layout_home/bg_ruby/icon2").active = !0,
                  cc.find("Canvas/popup_not_enough_diamond/purchase").active = !0,
                  FBInstant.payments.getCatalogAsync().then(function(e) {
                      c.uiStore.fbProductCatalog = e;
                      for (var a = {}, o = 0; o < e.length; o++) {
                          var t = e[o];
                          a[t.productID] = t
                      }
                      for (var n = ["d1", "d5", "d10", "d20", "d40", "d80"], i = 1; i <= 6; i++)
                          c.utils.setLabelText(cc.find("Canvas/popup_shop/bg-holder/shop-diamond/item-" + i + "/label-price/price"), a[n[i - 1]].price)
                  }),
                  FBInstant.payments.getPurchasesAsync().then(function(e) {
                      console.log(e);
                      var a = !0
                        , o = !1
                        , t = void 0;
                      try {
                          for (var n, i = e[Symbol.iterator](); !(a = (n = i.next()).done); a = !0) {
                              var r = n.value;
                              FBInstant.payments.consumePurchaseAsync(r.productID).then(function() {}).catch(function(e) {})
                          }
                      } catch (e) {
                          o = !0,
                          t = e
                      } finally {
                          try {
                              !a && i.return && i.return()
                          } finally {
                              if (o)
                                  throw t
                          }
                      }
                  }))
              }, "paymentChecked", c.uiStore)
          },
          showShopDiamond: function() {
              t("diamond")
          },
          showShopGold: function() {
              t("gold")
          },
          showShopTheme: function() {
              t("theme")
          },
          hideShop: function() {
              _hideLayout("popup_shop")
          },
          exchange: function(e) {
              var a = c.configs.shop.exchange[e].diamond;
              if (c.uiStore.hideShop(),
              _logFBEvent("event_exchange_diamond_" + a + "_click"),
              a > _thisPlayerInfo.diamond)
                  return _showLayout("popup_not_enough_diamond");
              c.data.exchange(e, function(e) {
                  _logFBEvent("event_exchange_diamond_" + a + "_success"),
                  _thisPlayerInfo.gold = e.Gold,
                  _thisPlayerInfo.diamond = e.Diamond,
                  c.uiHome.setGold(_thisPlayerInfo.gold),
                  c.uiHome.setDiamond(_thisPlayerInfo.diamond),
                  c.uiLayout.showCongratulations("You have received " + e.GoldAddition + " golds")
              })
          },
          iap: function(a) {
              var o = c.configs.shop.cash[a];
              _logFBEvent("event_iap_diamond_" + o + "_click"),
              c.uiStore.hideShop(),
              window.FBInstant && FBInstant.payments.purchaseAsync({
                  productID: a,
                  developerPayload: "foobar"
              }).then(function(e) {
                  c.data.iap(a, function(e) {
                      _log(" >>>>>> uiStore :: iap :: data = ", e),
                      _thisPlayerInfo.diamond = e.Diamond,
                      c.uiHome.setGold(_thisPlayerInfo.gold),
                      c.uiHome.setDiamond(_thisPlayerInfo.diamond),
                      c.uiLayout.showCongratulations("you have received " + e.DiamondAddition + " diamonds"),
                      _logFBEvent("event_iap_diamond_" + o + "_success"),
                      FBInstant.payments.consumePurchaseAsync(a).then(function() {
                          _log("purchased item consumed !")
                      }).catch(function(e) {
                          _log("iap error", e),
                          _log(e)
                      })
                  })
              }).catch(function(e) {
                  c.uiLayout.showCongratulations("sorry, error occured", "oops!"),
                  _log(e)
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_tree: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "70de3ADAAFEw5GHPKBGKPDf", "ui_tree");
      var _ = e("../all_modules");
      setTimeout(function() {
          _ = e("../all_modules")
      }, 0),
      a.exports = {
          setStateDamage: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = _.uiSlot.getProductNode(e, a);
              o.isDamaged = !0;
              var t = o.getChildByName("tree_rice").getChildByName("damage");
              t.active = !0,
              o.getChildByName("tree_rice").getChildByName("tree_rice").active = !1;
              var n = ("layout_home" == a ? _.game.mySlotList : _.game.victimSlotList)[e].product.id;
              0 == t.children.length && _.utils.copyNodeTo(cc.find("Canvas/nodeCaches/product_damage_states/" + n), t)
          },
          setStateNonDamage: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "layout_home"
                , o = _.uiSlot.getProductNode(e, a);
              o.isDamaged = !1,
              o.getChildByName("tree_rice").getChildByName("damage").active = !1,
              o.getChildByName("tree_rice").getChildByName("tree_rice").active = !0
          },
          renderTree: function(e, a, o, t) {
              var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "layout_home"
                , i = cc.find("Canvas/" + n + "/scroll_layer/layer_product")
                , r = i.getChildByName(e)
                , l = _.uiTree.renderNewTree(e, a, o, t, n)
                , d = "layout_victim" == n;
              if (r && !d)
                  l.children.map(function(e) {
                      if ("bg" != e.name && "ani" != e.name) {
                          var a = r.getChildByName(e.name);
                          a && a.removeFromParent(!0),
                          _.utils.moveNodeTo(e, r)
                      }
                  }),
                  r.getChildByName("bg").setLocalZOrder(0),
                  r.getChildByName("tree_rice").setLocalZOrder(2),
                  r.getChildByName("ani").setLocalZOrder(3),
                  r.getChildByName("ani").zIndex = 999;
              else {
                  r && d && r.removeFromParent(!0),
                  l.name = e,
                  i.addChild(l);
                  var s = _.uiSlot.getSlotNode(e, n);
                  _.utils.setPosToOtherNode(l, s),
                  l.zIndex = _.uiSlot.getSlotZIndex(e),
                  "layout_home" != n || l.isDraggable || _.control.initDragTree(l)
              }
              var c = _.uiSlot.getProductNode(e, n);
              c && c.isDamaged && _.uiTree.setStateDamage(e, n),
              "layout_victim" == n && (_.uiSlot.updateVictimOutput(e, a, o, t),
              _.uiSlot.getSlotNode(e, n).getComponent(cc.Sprite).enabled = !1)
          },
          renderNewTree: function(e, a, o, t) {
              var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "layout_home"
                , i = 5 < arguments.length && void 0 !== arguments[5] && arguments[5]
                , r = cc.instantiate(_.prefabList.tree);
              if (_.theme.applyThemeToNewTree(r),
              "layout_victim" == n) {
                  var l = _.utils.copyNodeTo(cc.find("Canvas/nodeCaches/victim_output"), r);
                  l.name = "bg_output",
                  l.setPosition(0, -35)
              }
              r.getChildByName("bg").active = !0,
              r.getChildByName("tree_rice").active = !0;
              var d = r.getChildByName("tree_rice").getChildByName("fence_1")
                , s = r.getChildByName("tree_rice").getChildByName("fence_2")
                , c = r.getChildByName("tree_rice").getChildByName("tree_rice")
                , u = r.getChildByName("tree_rice").getChildByName("seed_rice");
              return d.active = !1,
              s.active = !1,
              c.active = !1,
              u.active = !1,
              0 == o ? (u.active = !0,
              u.getChildByName("rice").getComponent(cc.Sprite).spriteFrame = _.uiSlot.getTreeSpriteFrame(a, o)) : (c.active = !0,
              c.getComponent(cc.Sprite).spriteFrame = _.uiSlot.getTreeSpriteFrame(a, o)),
              6 <= o && (o = _min(o, 10),
              d.active = s.active = !0,
              d.getComponent(cc.Sprite).spriteFrame = _.uiSlot.getSquareSpriteFrame("hangrao" + o + "1"),
              s.getComponent(cc.Sprite).spriteFrame = _.uiSlot.getSquareSpriteFrame("hangrao" + o + "2")),
              0 < t && !i && _.fx.hasOutput(e, n),
              r
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  ui_victim: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "18c2f0w3n5D6LEkC3uqZe+J", "ui_victim");
      var s = e("../all_modules");
      setTimeout(function() {
          s = e("../all_modules")
      }, 0),
      a.exports = {
          nextVictim: null,
          setUsernameVictim: function(e) {
              s.utils.setLabelText(cc.find("Canvas/layout_victim/bg_profile/name"), s.utils.trimStr(e, 12))
          },
          showListThief: function(e) {
              var a = window._listThief || []
                , t = cc.find("Canvas/layout_victim/bg_shop/scrollview/view/content");
              t.removeAllChildren();
              for (var n = cc.find("Canvas/layout_victim/bg_shop/scrollview/template"), i = {}, r = 0, o = 0; o < a.length && r < 5; o++) {
                  var l = a[o];
                  i[l.Thief] || l.Thief == e || function() {
                      var o = s.utils.copyNodeTo(n, t);
                      cc.loader.load(l.Photo, function(e, a) {
                          a && (o.getChildByName("Mask").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a)),
                          console.log("cc.loader.load", e)
                      }),
                      s.utils.setLabelText(o.getChildByName("Name").getChildByName("Label"), l.UserName),
                      o.aData = l,
                      o.active = !0,
                      s.uiButton._bindButton(o, function(e) {
                          cc.log("sender.aData", e.aData),
                          s.uiVictim.showGoRevenge(e.aData)
                      }, !1),
                      r++,
                      i[l.Thief] = !0
                  }()
              }
              var d = s.utils.copyNodeTo(cc.find("Canvas/layout_victim/bg_shop/scrollview/template-rand"), t);
              d.active = !0,
              s.uiButton._bindButton(d, function(e) {
                  s.uiVictim.showGoSteal(),
                  _logFBEvent("event_find_more_victim")
              }, !1),
              (d = s.utils.copyNodeTo(cc.find("Canvas/layout_victim/bg_shop/scrollview/template-add-friend"), t)).active = !0,
              s.uiButton._bindButton(d, function(e) {
                  window.FBInstant ? FBInstant.context.chooseAsync().then(function() {
                      cc.log(FBInstant.context.getID()),
                      s.social.sendInvitationVictim(),
                      s.uiLayout.showToolTip("INVITATION SENT SUCCESSFULLY")
                  }) : cc.log("FBInstant not available")
              }, !1)
          },
          hideShopVictim: function() {
              cc.find("Canvas/layout_victim/but_harvest").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/nodeCaches/hand/victim2").getComponent(cc.Sprite).spriteFrame;
              var e = cc.find("Canvas/layout_victim/bg_shop");
              e.orgPosY || (e.orgPosY = e.y),
              e.stopAllActions();
              var a = cc.moveTo(.2, cc.v2(e.x, e.orgPosY - 300))
                , o = cc.fadeOut(.2)
                , t = cc.spawn(a, o);
              e.getComponent(cc.Widget).enabled = !1,
              e.runAction(t)
          },
          showShopVictim: function() {
              cc.find("Canvas/layout_victim/but_harvest").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/nodeCaches/hand/victim1").getComponent(cc.Sprite).spriteFrame;
              var e = cc.find("Canvas/layout_victim/bg_shop");
              e.stopAllActions();
              var a = cc.moveTo(.2, cc.p(e.x, e.orgPosY))
                , o = cc.fadeIn(.2)
                , t = cc.spawn(a, o);
              e.runAction(t),
              setTimeout(function() {
                  e.getComponent(cc.Widget).enabled = !0
              }, 200)
          },
          showProfile: function() {
              var e = cc.find("Canvas/layout_victim/popup_friend_info");
              e.zIndex = 99999,
              e.active = !0,
              cc.find("Canvas/layout_victim/bg_profile").zIndex = 99999;
              var a = 0;
              0 != _stealCountVictim && (a = Math.floor(100 * (_stealCountVictim - _stealArrestVictim) / _stealCountVictim)),
              s.gameLanguage.setLabelDataAndRender(e.getChildByName("border").getChildByName("lbl1"), _stealCountVictim),
              s.gameLanguage.setLabelDataAndRender(e.getChildByName("border").getChildByName("lbl3"), _stolenCountVictim),
              s.gameLanguage.setLabelDataAndRender(e.getChildByName("border").getChildByName("lbl2"), a)
          },
          showInfoVictim: function(e) {
              var a = cc.find("Canvas/popup_info_victim/bg_holder/cells");
              for (var o in a.removeAllChildren(),
              e.Products) {
                  var t = s.utils.copyNodeTo(cc.find("Canvas/nodeCaches/item_amount_victim"), a);
                  t.setPosition(0, 0),
                  t.setScale(1.8);
                  var n = o
                    , i = e.Products[n];
                  t.getChildByName("img").getComponent(cc.Sprite).spriteFrame = s.uiSlot.getItemHarvestSpriteFrame(n),
                  s.utils.setLabelText(t.getChildByName("lbl"), i)
              }
          },
          showGoHome: function() {
              _showLayout("popup_go_home"),
              cc.find("Canvas/popup_go_home/bg_holder/btn_close").active = !0;
              var e = cc.find("Canvas/popup_go_home/bg_holder/scrollview/view/content");
              e.removeAllChildren();
              var a = cc.find("Canvas/popup_go_home/bg_holder/scrollview/element")
                , o = s.game.stealProducts
                , t = Object.keys(o).length;
              t && _logFBEvent("event_video_steal_x2_show", 1, {
                  popup: "go_home"
              }),
              cc.find("Canvas/popup_go_home/bg_holder/scrollview/msg").active = !t,
              s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_go_home/bg_holder/title"), t ? "all the product you've stolen" : "OOPS...");
              var n = cc.find("Canvas/popup_go_home/bg_holder/btn_home");
              if (s.fx.stopBubbleForever(n),
              n.x = t ? 127 : 0,
              cc.find("Canvas/popup_go_home/bg_holder/btn_x2").active = t,
              cc.find("Canvas/popup_go_home/bg_holder/btn_x2_disabled").active = !1,
              cc.find("Canvas/popup_go_home/bg_holder/arrow2").active = t)
                  for (var i in o) {
                      var r = o[i]
                        , l = s.utils.copyNodeTo(a, e);
                      l.active = !0,
                      s.utils.setLabelText(l.getChildByName("amount"), r),
                      s.utils.setNodeImg(l.getChildByName("icon"), s.uiSlot.getItemHarvestSpriteFrame(i), !1)
                  }
          },
          showGoSteal: function(e) {
              _showLayout("popup_go_steal"),
              cc.find("Canvas/popup_go_steal/btn_close").active = !0,
              s.uiVictim.nextVictim = e;
              var a = cc.find("Canvas/popup_go_steal/scrollview/view/content");
              a.removeAllChildren();
              var o = cc.find("Canvas/popup_go_steal/scrollview/element");
              for (var t in s.game.stealProducts) {
                  var n = s.game.stealProducts[t]
                    , i = s.utils.copyNodeTo(o, a);
                  i.active = !0,
                  s.utils.setLabelText(i.getChildByName("amount"), n),
                  s.utils.setNodeImg(i.getChildByName("icon"), s.uiSlot.getItemHarvestSpriteFrame(t), !1)
              }
              cc.find("Canvas/popup_go_steal/scrollview/msg").active = !Object.keys(s.game.stealProducts).length
          },
          showGoRevenge: function(e) {
              var a = s.game.stealProducts;
              _showLayout("popup_go_revenge"),
              s.uiVictim.nextVictim = e,
              cc.loader.load(e.Photo, function(e, a) {
                  a && (cc.find("Canvas/popup_go_revenge/avartar/Mask/Sprite").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a))
              }),
              s.utils.setLabelText(cc.find("Canvas/popup_go_revenge/victim-name"), e.UserName),
              s.utils.setLabelText(cc.find("Canvas/popup_go_revenge/victim-level"), "Level: " + e.PlayerLevel);
              var o = cc.find("Canvas/popup_go_revenge/scrollview/view/content");
              o.removeAllChildren();
              var t = cc.find("Canvas/popup_go_revenge/scrollview/element")
                , n = Object.keys(a).length;
              n && _logFBEvent("event_video_steal_x2_show", 1, {
                  popup: "go_another_victim"
              }),
              cc.find("Canvas/popup_go_revenge/scrollview/msg").active = !n,
              s.gameLanguage.setLabelDataAndRender(cc.find("Canvas/popup_go_revenge/title"), n ? "all the product you've stolen" : "OOPS...");
              var i = cc.find("Canvas/popup_go_revenge/btn_go");
              for (var r in s.fx.stopBubbleForever(i),
              i.x = n ? 122 : 0,
              cc.find("Canvas/popup_go_revenge/btn_x2").active = n,
              cc.find("Canvas/popup_go_revenge/btn_x2_disabled").active = !1,
              cc.find("Canvas/popup_go_revenge/arrow2").active = n,
              a) {
                  var l = a[r]
                    , d = s.utils.copyNodeTo(t, o);
                  d.active = !0,
                  s.utils.setLabelText(d.getChildByName("amount"), l),
                  s.utils.setNodeImg(d.getChildByName("icon"), s.uiSlot.getItemHarvestSpriteFrame(r), !1)
              }
          },
          btnStealClick: function() {
              _hideLayout("popup_go_steal"),
              s.fx.findingVictim(),
              s.findVictim.startFinding(function(e, a) {
                  a && (s.data.endStealing(window._thisPlayerVictimId, window._thisPlayerVictimSession, function() {}),
                  s.social.shareStolen(!1))
              })
          },
          btnRevengeClick: function() {
              _hideLayout("popup_go_revenge"),
              _listThief.splice(_listThief.indexOf(s.uiVictim.nextVictim), 1),
              window._revenge_session_id = s.uiVictim.nextVictim.SessionId,
              s.fx.findingVictim(),
              s.data.getRevengeData(function(e) {
                  setTimeout(function() {
                      s.data.endStealing(window._thisPlayerVictimId, window._thisPlayerVictimSession, function() {}),
                      s.social.shareStolen(!1),
                      s.fx.victimFound(),
                      _showLayout("layout_victim"),
                      s.game.initVictim(e)
                  }, 2e3)
              }, function() {
                  s.social.shareStolen(!1),
                  s.fx.victimFound(),
                  s.uiVictim.doGoHome(!1),
                  s.uiLayout.showCongratulations("sorry, error occured", "oops!")
              })
          },
          doGoHome: function(e) {
              e || s.data.endStealing(window._thisPlayerVictimId, window._thisPlayerVictimSession, function() {}),
              s.uiHome.showNotiPostBox(),
              s.uiHome.resetPosition(),
              s.fx.findingVictim(),
              _hideLayout("popup_go_home"),
              setTimeout(function() {
                  s.fx.victimFound(),
                  setTimeout(s.stolenDamage.showPopupRecover, 1e3),
                  setTimeout(function() {
                      s.leaderboard.isViewingLeaderboardUser ? (_log(" calling _G.video.showInterAdsViewLBToHome(); "),
                      s.video.showInterAdsViewLBToHome()) : s.video.showInterAdsVictimToHome()
                  }, 1500),
                  s.bot.autoUpdate(),
                  _hideLayout("layout_victim"),
                  _showLayout("layout_home"),
                  s.theme.applyTheme(s.theme.currentThemeName),
                  s.sound.stopBGSound(),
                  s.sound.playBGSound("home_player_background_music")
              }, 2e3)
          },
          videoStealX2: function(e) {
              var a = {
                  popup: e ? "go_another_victim" : "go_home"
              };
              if (_logFBEvent("event_video_steal_x2_clicked", 1, a),
              s.video.isVideoAvailable) {
                  var o = void 0;
                  e ? (o = cc.find("Canvas/popup_go_revenge/scrollview/view/content"),
                  cc.find("Canvas/popup_go_revenge/btn_x2_disabled").active = !0) : (o = cc.find("Canvas/popup_go_home/bg_holder/scrollview/view/content"),
                  cc.find("Canvas/popup_go_home/bg_holder/btn_x2_disabled").active = !0),
                  cc.find("Canvas/popup_go_home/bg_holder/btn_close").active = !1,
                  cc.find("Canvas/popup_go_steal/btn_close").active = !1,
                  s.video.showVideo(function() {
                      s.data.stealX2(s.game.stealProducts, function(e) {
                          Object.assign(s.storage.allProducts, e.Storage),
                          o.children.map(function(e) {
                              var a = e.getChildByName("amount")
                                , o = parseInt(a.getComponent(cc.Label).string) || 0;
                              s.utils.setLabelText(a, 2 * o)
                          }),
                          s.uiLayout.showToolTip("Successfully X2 products!"),
                          _logFBEvent("event_video_steal_x2_success", 1, a),
                          s.fx.bubbleForever(cc.find("Canvas/popup_go_home/bg_holder/btn_home")),
                          s.fx.bubbleForever(cc.find("Canvas/popup_go_revenge/btn_go"))
                      })
                  })
              } else
                  s.uiLayout.showCongratulations(" Video is not available.", "Oops!")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  utils_facebook: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "93239W3gi1E+JwHVlhksoRu", "utils_facebook");
      var t = e("../all_modules");
      setTimeout(function() {
          t = e("../all_modules")
      }, 0),
      a.exports = {
          log: function(e, a, o) {
              window.FBInstant && FBInstant.logEvent(e, a, o)
          },
          setSessionId: function(e) {
              window.FBInstant && FBInstant.setSessionData({
                  player_id: e
              })
          },
          loadAndSetAvatar: function() {
              window.FBInstant ? cc.loader.load(_thisPlayerInfo.photo, function(e, a) {
                  if (e)
                      return _log(e);
                  var o = t.uiHome.spriteFrameAvatar = new cc.SpriteFrame(a);
                  t.utils.setNodeImg(cc.find("Canvas/layout_home/bg_profile/bg_avatar/avatar"), o, !0),
                  t.utils.setNodeImg(cc.find("message_share_achievement/avatar"), t.uiHome.spriteFrameAvatar, !0),
                  t.utils.setNodeImg(cc.find("message_share_daily_reward/avatar"), t.uiHome.spriteFrameAvatar, !0),
                  t.utils.setNodeImg(cc.find("message_stolen/avatar"), t.uiHome.spriteFrameAvatar, !0)
              }) : cc.loader.load(_thisPlayerInfo.photo, function(e, a) {
                  if (e)
                      return _log(e);
                  var o = t.uiHome.spriteFrameAvatar = new cc.SpriteFrame(a);
                  t.utils.setNodeImg(cc.find("Canvas/layout_home/bg_profile/bg_avatar/avatar"), o, !0)
              })
          },
          checkSupportedAPIs: function() {
              if (window._FBSupportedAPIs = [],
              window.FBInstant) {
                  var e = document.getElementById("splash");
                  e && setTimeout(function() {
                      e.parentNode.removeChild(e)
                  }, 600),
                  window._FBSupportedAPIs = FBInstant.getSupportedAPIs()
              }
          },
          startLogSessionTime: function() {
              _logFBEvent("event_enter_game"),
              _waitToRun(function() {
                  _logFBEvent("event_loadtime_cocos_scene_", parseInt(performance.now() / 1e3));
                  var e = function(e) {
                      _logFBEvent("event_session_time_passed", 1, {
                          timePassed: e
                      })
                  };
                  e(0);
                  var a = 0;
                  setInterval(function() {
                      e(a += 30)
                  }, 3e4)
              }, "_logFBEvent")
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  utils_instant: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "58cfcCQKvtA6pJE/dSzyRsx", "utils_instant"),
      a.exports = {
          init: function() {
              window._soundVolume = 1,
              window._isANDROID = cc.sys.os == cc.sys.OS_ANDROID,
              window._isIOS = cc.sys.os == cc.sys.OS_IOS,
              window._screenWidth = cc.winSize.width,
              window._screenHeight = cc.winSize.height,
              window._max = Math.max,
              window._min = Math.min,
              window._round = Math.round,
              window._floor = Math.floor,
              window._ceil = Math.ceil,
              window._abs = Math.abs,
              window._random = Math.random,
              window._sqrt = Math.sqrt,
              window._atan2 = Math.atan2,
              window._PI = Math.PI,
              window._isNumber = function(e) {
                  return !isNaN(parseFloat(e)) && isFinite(e)
              }
              ,
              window._cloneObj = function(e) {
                  return Object.assign({}, e)
              }
              ,
              window._removeArrItem = function(e, a) {
                  var o = e.indexOf(a);
                  -1 != o && e.splice(o, 1)
              }
              ,
              window._time = function() {
                  return (new Date).getTime()
              }
              ,
              window._isString = function(e) {
                  return "string" == typeof e
              }
              ,
              window._isFunction = function(e) {
                  return e && "[object Function]" === {}.toString.call(e)
              }
              ,
              window._parseRatio = function(e, a) {
                  return _isString(e) ? a * parseInt(e.replace("%", "")) / 100 : e
              }
              ,
              window._directionArr = ["top", "left", "bottom", "right"],
              window._timer0 = function(e) {
                  return setTimeout(e, 0)
              }
              ,
              window._log = function() {
                  if (!window._NO_CONSOLE_LOG)
                      try {
                          var e;
                          (e = console).log.apply(e, arguments)
                      } catch (e) {}
              }
              ,
              window._processTimeTickList = {},
              window._processTimeTick = function() {
                  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "anonymous"
                    , a = _time();
                  _processTimeTickList[e] || (_processTimeTickList[e] = a);
                  var o = _processTimeTickList[e]
                    , t = " " + (a % 1e6).toLocaleString() + " ";
                  return o != a && (t += "// ( " + ((a - o) / 1e3).toFixed(2) + " secs later) "),
                  t
              }
              ;
              var a = cc.director.getActionManager();
              window._removeAllCCActions = function(e) {
                  a.removeAllActionsFromTarget(e)
              }
              ,
              window._scheduleNodes = {},
              window._scheduler = cc.director.getScheduler(),
              window._pauseSchedule = function(e) {
                  var a = _scheduleNodes[e];
                  a && _scheduler.pauseTarget(a)
              }
              ,
              window._schedule = function(e, a, o, t) {
                  _scheduleNodes[e] && _pauseSchedule(e);
                  var n = _scheduleNodes[e] = new cc.Node;
                  _scheduler.scheduleCallbackForTarget(n, a, o, t - 1)
              }
              ,
              window._resumeSchedule = function(e) {
                  var a = _scheduleNodes[e];
                  a && _scheduler.resumeTarget(a)
              }
              ,
              window._stopSchedule = function(e) {
                  _pauseSchedule(e),
                  delete _scheduleNodes[e]
              }
              ,
              window._scheduleOnce = function(e, a, o) {
                  _schedule(e, function() {
                      _stopSchedule(e),
                      a()
                  }, o, 1)
              }
              ,
              window._waitToRun = function(e, a) {
                  var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : window
                    , t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : .1
                    , n = arguments[4]
                    , i = arguments[5]
                    , r = !1
                    , l = setInterval(function() {
                      o[a] && (clearInterval(l),
                      r = !0,
                      e && e())
                  }, 1e3 * t);
                  n && setTimeout(function() {
                      clearInterval(l),
                      i && !r && i()
                  }, 1e3 * n)
              }
          }
      },
      cc._RF.pop()
  }
  , {}],
  utils: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "680ab69UxNA1JDavURxh4lp", "utils");
      var c = e("../all_modules");
      setTimeout(function() {
          c = e("../all_modules")
      }, 0),
      a.exports = {
          deviceLog: function(e) {
              var a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
              if (_log(" deviceLog calllled -- x = " + e + " "),
              !window._NO_DEVICELOG) {
                  var o = cc.find("debugTest/deviceLog");
                  o.active = !0,
                  o.zIndex = 5e4,
                  o.parent.zIndex = 9999;
                  var t = o.getComponent(cc.Label);
                  a || (t.string = ""),
                  t.string += e + (a ? "\n" : "")
              }
          },
          highLightNode: function(e) {
              var a = cc.instantiate(cc.find("Canvas/debugTest/highLightRect"));
              a.active = !0,
              a.zIndex = 99999,
              a.opacity = 150,
              _Canvas.addChild(a),
              c.utils.expandObj(e, a, ["width", "height", "anchorX", "anchorY"]);
              for (var o = e.x, t = e.y, n = e.scaleX, i = e.scaleY, r = e, l = 0; l++ < 100 && !(r instanceof cc.Scene) && (r = r.parent); )
                  o += r.x,
                  t += r.y,
                  n *= r.scaleX,
                  i *= r.scaleY;
              var d = a.parent;
              return a.setPosition(o - d.x, t - d.y),
              a.setScale(n / d.scaleX, i / d.scaleY),
              a
          },
          singleTouchSet: function(a, o, t, n) {
              a.on("touchstart", function(e) {
                  a.touchingID || (a.touchingID = e.touch.__instanceId,
                  o && o(e))
              }),
              t && a.on("touchmove", function(e) {
                  e.touch.__instanceId == a.touchingID && t && t(e)
              });
              var e = function(e) {
                  e.touch.__instanceId == a.touchingID && (a.touchingID = null,
                  n && n(e))
              };
              a.on("touchend", e),
              a.on("touchcancel", e)
          },
          getGlobalPosition: function(e) {
              var a = e.parent
                , o = e.x
                , t = e.y
                , n = 0;
              for (a || _log(" parent=null // node = " + e + " "); a && "Canvas" != a.name && n++ < 100; )
                  o = o * a.scaleX + a.x,
                  t = t * a.scaleY + a.y,
                  a = a.parent;
              return cc.p(o, t)
          },
          global2LocalPosDiff: function(e, a, o) {
              for (var t = e.parent, n = [], i = 0; "Canvas" != t.name && i++ < 100; )
                  n.push(t),
                  t = t.parent;
              var r = a
                , l = o;
              return n.reverse().map(function(e) {
                  r = (r - e.x) / e.scaleX,
                  l = (l - e.y) / e.scaleY
              }),
              cc.p(r - e.x, l - e.y)
          },
          getGlobalScale: function(e) {
              for (var a = e.parent, o = e.scaleX, t = e.scaleY, n = 0; "Canvas" != a.name && n++ < 100; )
                  o *= a.scaleX,
                  t *= a.scaleY,
                  a = a.parent;
              return {
                  X: o,
                  Y: t
              }
          },
          setPosToOtherNode: function(e, a) {
              var o = c.utils.getGlobalPosition(a)
                , t = c.utils.global2LocalPosDiff(e, o.x, o.y)
                , n = e.x + t.x
                , i = e.y + t.y;
              return e.setPosition(n, i),
              {
                  x: n,
                  y: i
              }
          },
          getValueInScale: function(e, a) {
              var o = 0
                , t = null;
              for (var n in e) {
                  if (a < n) {
                      t = e[o];
                      break
                  }
                  o = n
              }
              return null == t && (t = e[o]),
              t
          },
          random0ToX: function(e) {
              return _floor(_random() * (e + 1))
          },
          randomArrItem: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , o = _floor(_random() * e.length);
              return a ? e.splice(o, 1)[0] : e[o]
          },
          randomObjectProp: function(e) {
              var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , o = Array.from(Object.keys(e))
                , t = c.utils.randomArrItem(o)
                , n = e[t];
              return a && delete e[t],
              n
          },
          randomSetInList: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
                , a = arguments[1]
                , o = [];
              if (Array.isArray(a))
                  for (var t = a.slice(0); e--; )
                      o.push(c.utils.randomArrItem(t, !0));
              else
                  for (var n = Object.assign({}, a); e--; )
                      o.push(c.utils.randomObjectProp(n, !0));
              return o
          },
          shuffle: function(e) {
              for (var a, o, t = e.slice(0), n = t.length; 0 !== n; )
                  o = Math.floor(Math.random() * n),
                  a = t[n -= 1],
                  t[n] = t[o],
                  t[o] = a;
              return t
          },
          expandObj: function(a, o, e) {
              e.map(function(e) {
                  return o[e] = a[e]
              })
          },
          getImgArr: function(e, a, o) {
              for (var t = [], n = a; n <= o; n++)
                  t.push(c.imgBank[e + (n < 10 ? "0" : "") + n]);
              return t
          },
          secondsToTime2: function(e) {
              var a = _floor(e / 86400)
                , o = _floor(e / 3600)
                , t = _floor(e % 3600 / 60);
              e %= 60;
              return 0 < a ? a + " day" + (1 < a ? "s" : "") : 0 < o ? o + " hr" + (1 < o ? "s" : "") : 0 < t ? t + " min" + (1 < t ? "s" : "") : (e || 0) + " sec" + (1 < e ? "s" : "")
          },
          secondsToTime: function(e) {
              var a = _floor(e / 3600)
                , o = _floor(e % 3600 / 60)
                , t = "";
              return 0 < a && (t += a + ":" + (o < 10 ? "0" : "")),
              t += o + ":" + ((e = e % 60) < 10 ? "0" : ""),
              t += "" + e
          },
          secondsToTimeCountdown: function(e) {
              if (e <= 0)
                  return "00:00";
              var a = _floor(e / 86400)
                , o = _floor(e % 86400 / 3600)
                , t = _floor(e % 3600 / 60)
                , n = e % 60;
              if (2 < a)
                  return a + " days";
              if (1 == a)
                  return "1 day";
              var i = "";
              return 10 <= o ? i = o + ":" : 0 < o && (i = "0" + o + ":"),
              i += 10 <= t ? t + ":" : "0" + t + ":",
              i += 10 <= n ? n : "0" + n
          },
          setLabelCountDownTimer: function(e, t, n) {
              var i = e;
              _isString(i) && (i = cc.find(i)),
              i.countDownTimerVar && clearInterval(i.countDownTimerVar);
              var a = function() {
                  if (i.parent) {
                      var e = _time()
                        , a = t - e
                        , o = c.utils.secondsToTimeCountdown(_floor(a / 1e3));
                      c.utils.setLabelText(i, o),
                      a <= 0 && (clearInterval(i.countDownTimerVar),
                      n && n())
                  } else
                      clearInterval(i.countDownTimerVar)
              };
              i.countDownTimerVar = setInterval(a, 500),
              a()
          },
          lineBreak: function(e, a) {
              var o = e.split(" ")
                , t = ""
                , n = 0;
              return o.map(function(e) {
                  t += e + " ",
                  n += e.length + 1,
                  a <= n && (t += " \n",
                  n = 0)
              }),
              t
          },
          trimStr: function(e, a, o) {
              return (e += "").substring(0, a) + (e.length > a && o || "")
          },
          extendObj: function(a, o, e) {
              e.map(function(e) {
                  o[e] = a[e]
              })
          },
          getNodePath: function(e) {
              for (var a = [e.name], o = e.parent, t = 0; o && t++ < 50 && o.parent; )
                  a.push(o.name),
                  o = o.parent;
              return a.reverse().join("/")
          },
          setNodeProps: function(e, a, o, t, n, i) {
              a && (e.width = a),
              o && (e.height = o),
              t && (e.x = t),
              n && (e.y = n),
              i && (e.scale = i)
          },
          setNodeImg: function(e, a) {
              var o = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]
                , t = e.width
                , n = e.height;
              e.getComponent(cc.Sprite) || e.addComponent(cc.Sprite),
              e.getComponent(cc.Sprite).spriteFrame = _isString(a) ? c.imgBank[a] : a.getComponent ? a.getComponent(cc.Sprite).spriteFrame : a,
              o && (e.width = t,
              e.height = n)
          },
          setLabelText: function(e, a) {
              e && (e.getComponent(cc.Label).string = a)
          },
          setLabelTextPrice: function(e, a) {
              if (e) {
                  var o = _isString(a) && a.startsWith("+")
                    , t = o ? parseInt(a.replace("+", "")) : a
                    , n = c.utils.shortNumber(t);
                  e.getComponent(cc.Label).string = (o ? "+" : "") + n
              }
          },
          parsePaddings: function(a) {
              var o = null;
              return "number" == typeof (a = a || 0) && (o = {},
              _directionArr.map(function(e) {
                  return o[e] = a
              })),
              o || a
          },
          moveNodeTo: function(e, a) {
              var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2] ? cc.instantiate(e) : e;
              return a && o.parent != a && (o.removeFromParent(!1),
              a.addChild(o)),
              o
          },
          copyNodeTo: function(e, a) {
              var o = c.utils.moveNodeTo(e, a, !0)
                , t = e.getComponentsInChildren(cc.Sprite)
                , n = o.getComponentsInChildren(cc.Sprite);
              return t.map(function(e, a) {
                  var o = e.node
                    , t = n[a].node;
                  c.utils.extendObj(o, t, ["width", "height"]),
                  o.onTouchEnd && t.on("touchend", o.onTouchEnd)
              }),
              o
          },
          sortGrid: function(e, a) {
              var o = e.children.slice(0);
              o.sort(a),
              o.map(function(e, a) {
                  return e.setLocalZOrder(a)
              })
          },
          prefabToNode: function(e) {
              return cc.instantiate(c.prefabList[e])
          },
          preloadPrefabToNode: function(e, a, o) {
              var t = c.utils.prefabToNode(e);
              t.name = a,
              t.parent = o,
              t.setPosition(0, 0),
              t.active = !1
          },
          prefabToAnimation: function(e, a) {
              var o = cc.instantiate(c.prefabList[e])
                , t = o.getComponent(cc.Animation)
                , n = t.defaultClip
                , i = t.play(n.name).duration / n.speed;
              o.animDuration = i;
              var r = n.wrapMode == cc.WrapMode.Loop
                , l = "anim_stop_" + o.__instanceId;
              return o.show = function(e, a) {
                  o.active = !0,
                  isNaN(e) || isNaN(a) || o.setPosition(e, a),
                  t.stop(),
                  t.play(n.name),
                  r || _scheduleOnce(l, function() {
                      o.active = !1
                  }, i)
              }
              ,
              o.pauseAnim = function() {
                  t.pause(),
                  r || _pauseSchedule(l)
              }
              ,
              o.resumeAnim = function() {
                  t.resume(),
                  r || _resumeSchedule(l)
              }
              ,
              o.scale = a || 1,
              o.active = !1,
              o
          },
          img2Animation: function(e, a, o, t) {
              var n = cc.AnimationClip.createWithSpriteFrames(e, 60);
              n.name = "default",
              n.wrapMode = cc.WrapMode[o ? "Loop" : "Normal"],
              n.speed = a || .3;
              var i = new cc.Node;
              i.addComponent(cc.Animation),
              i.addComponent(cc.Sprite);
              var r = i.getComponent(cc.Animation);
              r.addClip(n);
              var l = r.play("default").duration / n.speed;
              i.animDuration = l;
              var d = "anim_stop_" + i.__instanceId;
              return i.show = function(e, a) {
                  i.active = !0,
                  isNaN(e) || isNaN(a) || i.setPosition(e, a),
                  r.stop(),
                  r.play("default"),
                  o || _scheduleOnce(d, function() {
                      i.active = !1
                  }, l)
              }
              ,
              i.pauseAnim = function() {
                  r.pause(),
                  o || _pauseSchedule(d)
              }
              ,
              i.resumeAnim = function() {
                  r.resume(),
                  o || _resumeSchedule(d)
              }
              ,
              i.scale = t || 1,
              i.active = !1,
              i
          },
          template2Animation: function(e, a, o, t) {
              var n = [];
              _nodeTemplates.getChildByName(e).children.map(function(e) {
                  n.push(e.getComponent(cc.Sprite).spriteFrame)
              });
              var i = c.utils.img2Animation(n, a, o, t);
              return i.active = !0,
              i
          },
          img2Node: function(e, a, o, t, n, i, r) {
              var l = new cc.Node;
              return l.addComponent(cc.Sprite),
              (e = e || _nodeCaches).addChild(l),
              l.getComponent(cc.Sprite).spriteFrame = _isString(a) ? c.imgBank[a] : a || new cc.SpriteFrame,
              c.utils.setNodeProps(l, o, t, n, i, r),
              l
          },
          template2Node: function(e, a, o, t) {
              var n = _nodeTemplates.getChildByName(a);
              n || cc.log(' _G.utils.template2Node error : no template node with name "' + a + '" !');
              var i = cc.instantiate(n);
              return (e = e || _nodeCaches).addChild(i),
              o && (i.width = o),
              t && (i.height = t),
              i.setPosition(0, 0),
              i
          },
          newLabel: function(e, a, o, t, n) {
              var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "center"
                , r = new cc.Node;
              (e = e || _nodeCaches).addChild(r),
              r.addComponent(cc.Label);
              var l = r.getComponent(cc.Label);
              return r.color = new cc.color(o || "#000000"),
              l.fontSize = t || 30,
              l.lineHeight = _floor(1.5 * (t || 30)),
              l.font = _fontBank[n || _DEFAULT_FONT],
              l.string = a,
              l.horizontalAlign = cc.Label.HorizontalAlign[i.toUpperCase()],
              r
          },
          newRichText: function(e, a, o, t, n, i) {
              var r = new cc.Node;
              (e = e || _nodeCaches).addChild(r),
              r.addComponent(cc.RichText);
              var l = r.getComponent(cc.RichText);
              return l.fontSize = n || 20,
              l.lineHeight = _floor(1.2 * (n || 20)),
              i = i || _DEFAULT_FONT,
              l.font = _isString(i) ? _fontBank[i] : i,
              l.imageAtlas = _isString(a) ? _atlasBank[a] : a,
              l.string = o,
              l.horizontalAlign = cc.TextAlignment[t.toUpperCase()],
              r
          },
          img2Button: function(e, a, o, t, n, i, r, l) {
              var d = c.utils.img2Node(e, a, t, n, i, r, l);
              return d.on("touchstart", o),
              d
          },
          newGrid: function(e, a, o, t, n, i, r, l) {
              a = a || "horizontal";
              var d = c.utils.template2Node(e, "grid_" + a, t, n);
              if (d) {
                  o && c.utils.setNodeImg(d, o),
                  d.gridType = a;
                  var s = d.getComponent(cc.Layout);
                  return i = c.utils.parsePaddings(i),
                  d.paddings = i,
                  s.paddingLeft = i.left,
                  s.paddingRight = i.right,
                  s.paddingTop = i.top,
                  s.paddingBottom = i.bottom,
                  s.spacingX = r || 0,
                  s.spacingY = l || 0,
                  d
              }
          },
          shortNumber: function(e) {
              if (e < 1e5)
                  return c.utils.formatNumber(e);
              var a = Math.floor((("" + e).length - 3) / 3)
                , o = Math.floor(e / Math.pow(1e3, a));
              return c.utils.formatNumber(o) + ["", "K", "M", "B", "T"][a]
          },
          formatNumber: function(e) {
              return e ? e.toLocaleString("en") : e
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  vi_VN: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "9efdbB3AQBNiZJznw7ppwUT", "vi_VN");
      var t, n, i = function(e, a) {
          if (Array.isArray(e))
              return e;
          if (Symbol.iterator in Object(e))
              return function(e, a) {
                  var o = []
                    , t = !0
                    , n = !1
                    , i = void 0;
                  try {
                      for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done) && (o.push(r.value),
                      !a || o.length !== a); t = !0)
                          ;
                  } catch (e) {
                      n = !0,
                      i = e
                  } finally {
                      try {
                          !t && l.return && l.return()
                      } finally {
                          if (n)
                              throw i
                      }
                  }
                  return o
              }(e, a);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }, r = (t = ["", " vừa chơi! Giờ đến lượt bạn"],
      n = ["", " vừa chơi! Giờ đến lượt bạn"],
      Object.freeze(Object.defineProperties(t, {
          raw: {
              value: Object.freeze(n)
          }
      })));
      function l(e, a, o) {
          return a in e ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[a] = o,
          e
      }
      a.exports = {
          dogDescription: {
              dog_0: "Loài chó được mang từ Siberia tới\nBắc Mỹ bời người Thule từ 1000 năm trước",
              dog_1: "Husky là tên gọi chung của một loại chó kéo xe được sử dụng ở khu vực phía bắc",
              dog_2: "Là giống chó ban đầu được nuôi\nphục vụ cho việc chăn cừu",
              dog_3: "Golden retriever là loài thích nghịch nước và dễ dàng huấn luyện từ cơ\nbản tới nâng cao",
              dog_4: "Loại chó to lớn , vạm vỡ với khuôn mặt nhăn và chiếc mũi đẩy khác biệt",
              dog_5: "Bộ lông của Rottweiler chủ yếu màu đen, màu nâu ở chân và mặt"
          },
          products: {
              nameList: {
                  "Milk cow": "Bò sữa",
                  Hen: "Gà mái",
                  Wheat: "Lúa mì",
                  Tomato: "Cà chua",
                  Potato: "Khoai tây",
                  Cucumber: "Dưa chuột",
                  Corn: "Ngô",
                  Carrot: "Cà rốt",
                  Cabbage: "Bắp cải",
                  Pumpkin: "Bí ngô",
                  Pineapple: "Dứa",
                  Goat: "Dê",
                  Coconut: "Dừa",
                  Sheep: "Cừu"
              },
              outputNameList: {
                  "bottle of milk": "sữa",
                  egg: "trứng",
                  wheat: "lúa mì",
                  tomato: "cà chua",
                  potato: "khoai tây",
                  cucumber: "dưa chuột",
                  corn: "ngô",
                  carrot: "cà rốt",
                  cabbage: "bắp cải",
                  pumpkin: "bí ngô",
                  pineapple: "dứa",
                  "goat milk": "sữa dê",
                  coconut: "dừa",
                  wool: "len"
              }
          },
          staticLabels: {
              "Canvas/popup_loading_screenshot/loading_label": "ĐANG TẢI ẢNH CHỤP",
              "Canvas/popup_confirm_set_dog/bg_holder/bg_header/lbl_header": "XÁC NHẬN",
              "Canvas/popup_confirm_set_dog/bg_holder/title": "ĐẶT LÀM CHÓ MẶC ĐỊNH?",
              "Canvas/popup_dogs/bg_holder/bought/checkbox_set_default/lblX5": "MẶC ĐỊNH",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header": "NÔNG SẢN MỚI",
              "Canvas/popup_intro_new_products/bg_holder/bg_header/lbl_header_dog": "CHÓ MỚI",
              "Canvas/popup_suggest_theme_trial/bg_holder/bg_header/lbl_header": "GIAO DIỆN MÙA ĐÔNG",
              "Canvas/popup_suggest_theme_trial/bg_holder/intro": "DÙNG THỬ GIAO DIỆN MUA ĐÔNG\nCHO NÔNG TRẠI CỦA BẠN!",
              "Canvas/popup_suggest_theme_trial/bg_holder/but_try_now/label": "THỬ NGAY!",
              "Canvas/popup_used_theme_trial/bg_holder/bg_header/lbl_header": "CHÚC MỪNG",
              "Canvas/popup_used_theme_trial/bg_holder/intro_1": "DÙNG THỬ THÀNH CÔNG\nGIAO DIỆN MÙA ĐÔNG",
              "Canvas/popup_used_theme_trial/bg_holder/but_got_it/label": "ĐỒNG Ý",
              "Canvas/popup_used_theme_trial/bg_holder/intro_2": "CÒN LẠI:",
              "Canvas/popup_used_theme_trial/bg_holder/intro_3": "KHI HẾT GIỜ VUI LÒNG VÀO CỬA HÀNG",
              "Canvas/popup_theme_trial_expired/bg_holder/but_buy_now/shop-saleoff-icon/label": "TRỌN ĐỜI",
              "Canvas/popup_theme_trial_expired/bg_holder/intro": "DÙNG GIAO DIỆN MÙA ĐÔNG ĐẸP TUYỆT\nNÀY CHO NÔNG TRẠI CỦA BẠN!",
              "Canvas/popup_buy_theme_success/bg_holder/intro_1": "MUA THÀNH CÔNG GIAO DIỆN\nMÙA ĐÔNG",
              "Canvas/popup_buy_theme_success/bg_holder/intro_3": "ĐỂ THAY ĐỔI VUI LÒNG VÀO CỬA HÀNG",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_default/but_use/label": "DÙNG",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_bought_theme/view/content/theme_winter/but_used/label": "ĐANG DÙNG",
              "Canvas/popup_buy_theme_success/bg_holder/but_guide_me/label": "CHỈ DẪN",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/shop-saleoff-icon/hot": "MỚI",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/intro": "Valse mùa xuân",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-2/intro": "Tình ca mùa đông",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon_cover/intro": "Trái tim mùa thu",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-3/coming_soon/label": "Sắp ra mắt",
              "Canvas/popup_shop/bg-holder/shop-theme/scrollview_trial_expired/view/content/item-1/but_used/label": "Đang dùng",
              "Canvas/popup_recover_damage/bg_holder/info": "BẠN CÓ MUỐN PHỤC HỒI RUỘNG SAU KHI BỊ TRỘM?",
              "Canvas/popup_recover_damage/wait/Label": "CHỜ",
              "Canvas/popup_recover_damage/now/Label": "NGAY",
              "Canvas/popup_dogs/bg_holder/label_upgrade": "Nâng cấp chó để tăng\ntỷ lệ chống trộm",
              "Canvas/popup_confirm_status/bg_holder/bg_header/lbl_header": "TRẠNG THÁI",
              "Canvas/layout_home/scroll_layer/status_board/unlocked/default_status": "Bấm vào đây",
              "Canvas/popup_edit_status/bg_holder/title": "Sửa trạng thái",
              "Canvas/popup_confirm_status/bg_holder/title": "Xem video để mở khóa\nbảng trạng thái của bạn",
              "Canvas/popup_edit_status/bg_holder/text_box": "  Trạng thái",
              "Canvas/popup_confirm_status/bg_holder/btn_x2/lblX5": "MỞ KHÓA",
              "Canvas/popup_dogs/bg_holder/dog_name": "  Tên chó",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/free": "MIỄN PHÍ",
              "Canvas/popup_shop/bg-holder/shop-diamond/item-7/item-7/active/now": "LẤY NGAY",
              "Canvas/popup_leaderboard/bg_holder/bg_header/lbl_header": "XẾP HẠNG",
              "Canvas/popup_leaderboard/bg_holder/tab_friends/lbl": "BẠN BÈ",
              "Canvas/popup_leaderboard/bg_holder/tab_global/lbl": "THẾ GIỚI",
              "Canvas/nodeCaches/leaderboard_row/btn_view_user/lbl": "XEM",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/name": "Tên",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/name": "Tên",
              "Canvas/popup_leaderboard/bg_holder/scrollview/header_row/level": "Cấp",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/header_row/level": "Cấp",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/lbl": "Mời bạn bè làm hàng xóm\n(và để trộm của họ)",
              "Canvas/popup_leaderboard/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "Mời",
              "message_share_daily_reward/title": "Đăng nhập chuỗi",
              "Canvas/nodeCaches/row_victim/btn_revenge/lbl": "TRẢ THÙ",
              "Canvas/nodeCaches/row_friend_victim/btn_steal_friend/lbl": "ĐI TRỘM",
              "prefabs//ground/lbl_info1": "MUA",
              "Canvas/layout_home/scroll_layer/truck_info_board/away/speed_up": "TĂNG TỐC",
              "Canvas/layout_home/scroll_layer/truck/go/label": "BÁN",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/button task": "        THÀNH TÍCH",
              "Canvas/popup_storage/bg_holder/bg_header/lbl_header": "NHÀ KHO",
              "Canvas/popup_find_victim/bg_holder/tab_thieves/lbl": "TRỘM",
              "Canvas/popup_find_victim/bg_holder/tab_friends/lbl": "BẠN BÈ",
              "Canvas/popup_find_victim/bg_holder/bg_header/lbl_header": "TRỘM",
              "Canvas/popup_find_victim/bg_holder/img_random/lbl_find": "TÌM NGẪU NHIÊN",
              "Canvas/popup_find_victim/bg_holder/btn_find/lbl": "TÌM",
              "Canvas/popup_find_victim/bg_holder/lbl_used_up_find": "BẠN ĐÃ DÙNG HẾT CÁC\nLƯỢT TÌM MIỄN PHÍ. XEM VIDEO ĐỂ\nNHẬN THÊM",
              "Canvas/popup_find_victim/bg_holder/scrollview/label_no_revenge": "GẦN ĐÂY KHÔNG CÓ AI\nTRỘM NÔNG TRẠI CỦA BẠN",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/lbl": "Mời bạn bè làm hàng xóm\n(và để trộm của họ)",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite/lbl": "MỜI BẠN",
              "Canvas/popup_find_victim/bg_holder/friend_list_scrollview/invite_friend/btn_invite_disabled/lbl": "MỜI BẠN",
              "Canvas/popup_email/bg_holder/bg_header/lbl_header": "THỐNG KÊ",
              "Canvas/popup_email/bg_holder/scrollview/label_no_revenge": "GẦN ĐÂY KHÔNG CÓ AI\nTRỘM NÔNG TRẠI CỦA BẠN",
              "Canvas/popup_email/bg_holder/title": "Danh sách người đã\ntrộm nông trại của bạn",
              "Canvas/popup_new_level/bg_holder/bg_header/lbl_header": "LÊN CẤP",
              "Canvas/popup_new_level/bg_holder/bg_info/lbl": "MỚI",
              "Canvas/popup_new_level/bg_holder/txt_amount": "PHẦN THƯỞNG",
              "Canvas/popup_new_level/bg_holder/txt_level": "MỞ KHÓA",
              "Canvas/popup_new_level/bg_holder/btn_up2/lblX5": "NHẬN",
              "Canvas/popup_new_level1/bg_holder/bg_header/lbl_header": "LÊN CẤP",
              "Canvas/popup_new_level1/bg_holder/txt_amount": "PHẦN THƯỞNG",
              "Canvas/popup_new_level1/bg_holder/btn_up2/lblX5": "NHẬN",
              "Canvas/popup_info_item/bg_holder/bottom1/speed_up/txt_speed_up": "TĂNG TỐC",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2_disabled/lblX5": "MIỄN PHÍ",
              "Canvas/popup_info_item/bg_holder/bottom1/btn_up2/lblX5": "MIỄN PHÍ",
              "Canvas/popup_info_item/bg_holder/bottom2": "ĐÃ ĐẦY NÔNG SẢN",
              "Canvas/popup_info_victim/bg_holder/btn_up2/lblX5": "QUAY LẠI",
              "Canvas/popup_sell/bg_holder/bg_header/lbl_header": "BÁN",
              "Canvas/popup_sell/bg_holder/btn_up1/lblX5": "KHÔNG",
              "Canvas/popup_sell/bg_holder/btn_up2/lblX5": "CÓ",
              "Canvas/popup_sell/bg_holder/info": "BẠN CÓ CHẮC MUỐN\nBÁN Ô RUỘNG NÀY",
              "Canvas/popup_adjust_order/bg_holder/bg_header/lbl_header": "BÁN",
              "Canvas/popup_adjust_order/bg_holder/truck capacity": "CHỌN NÔNG SẢN ĐỂ BÁN",
              "Canvas/popup_adjust_order/bg_holder/max": "TỐI ĐA",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm/New Label": "BÁN",
              "Canvas/popup_adjust_order/bg_holder/btn_confirm_disabled/New Label": "BÁN",
              "Canvas/popup_upgrade_storage/bg_holder/bg_header/lbl_header": "NÂNG CẤP",
              "Canvas/popup_upgrade_storage/bg_holder/CAPACITY": "SỨC CHỨA",
              "Canvas/popup_upgrade_storage/bg_holder/lbl3": "ĐẾN",
              "Canvas/popup_upgrade_truck/bg_holder/bg_header/lbl_header": "NÂNG CẤP",
              "Canvas/popup_upgrade_truck/bg_holder/CAPACITY": "SỨC CHỨA",
              "Canvas/popup_upgrade_truck/bg_holder/to": "ĐẾN",
              "Canvas/popup_storage/bg_holder/btn_upgrade/lbl": "NÂNG CẤP",
              "Canvas/popup_storage_full/bg_holder/btn_upgrade/text": "Nâng cấp",
              "Canvas/popup_storage_full/bg_holder/message": "Nhà kho đã đầy\nnâng cấp luôn?",
              "Canvas/popup_not_found/bg_holder/bg_header/lbl_header": "TRỘM",
              "Canvas/popup_not_found/bg_holder/txt_msg": "Không tìm thấy nạn nhân.\nVui lòng thử lại sau",
              "Canvas/popup_not_found/bg_holder/btn_close/lblX5": "Đóng",
              "Canvas/popup_not_enough_gold/bg_holder/exchange/Label": "Mua vàng",
              "Canvas/popup_not_enough_gold/bg_holder/info": "KHÔNG ĐỦ VÀNG!",
              "Canvas/popup_not_enough_diamond/bg_holder/info": "KHÔNG ĐỦ KIM CƯƠNG!",
              "Canvas/popup_not_enough_diamond/purchase/Label": "Mua kim cương",
              "Canvas/popup_received_gold/bg_holder/btn_close/lblX5": "Có",
              "Canvas/popup_received_gold/bg_holder/txt_msg": "CHÚC MỪNG\nBẠN ĐÃ NHẬN",
              "Canvas/popup_shop/bg-holder/bg_header/lbl_header": "CỬA HÀNG",
              "Canvas/popup_upgrade_truck_full/bg_holder/bg_header/lbl_header": "NÂNG CẤP",
              "Canvas/popup_upgrade_truck_full/bg_holder/CAPACITY": "Xe hàng đã được nâng cấp\nlên cấp cao nhất",
              "Canvas/popup_new_achievement/bg_holder/bg_header/lbl_header": "THÀNH TÍCH",
              "Canvas/popup_new_achievement/bg_holder/share/share": "CHIA SẺ",
              "Canvas/popup_new_achievement/bg_holder/btn_confirm/New Label": "NHẬN",
              "Canvas/popup_achievement_list/bg_holder/bg_header/lbl_header": "THÀNH TÍCH",
              "Canvas/popup_achievement_list/bg_holder/progress": "TIẾN TRÌNH",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/complete_label": "HOÀN THÀNH",
              "Canvas/popup_achievement_list/bg_holder/scrollview/label_no_achievement": "CHƯA CÓ THÀNH TÍCH",
              "Canvas/popup_disconnected/but_reconnect/caption": "KẾT NỐI LẠI",
              "Canvas/popup_dog_attack/bg_holder/border/scrollview/msg": "Thật là ngày xui xẻo",
              "Canvas/popup_dog_attack/bg_holder/bg_header/lbl_header": "THẤT BẠI",
              "Canvas/popup_dog_attack/bg_holder/btn_home/lblX5": "VỀ NHÀ",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50/lblX5": "GIẢM 50%",
              "Canvas/popup_dog_attack/bg_holder/btn_save_50_disabled/lblX5": "GIẢM 50%",
              "Canvas/popup_dogs/bg_holder/bg_header/lbl_header": "CHÓ",
              "Canvas/popup_dogs/bg_holder/txt_info": "MUA CHÓ ĐỂ BẢO VỆ\nNÔNG TRẠI CỦA BẠN",
              "Canvas/popup_dogs/bg_holder/bought/lblX5": "ĐÃ MUA",
              "Canvas/popup_dogs/bg_holder/dog_name/submit/New Label": "OK",
              "Canvas/popup_daily_reward/bg_holder/bg_header/lbl_header": "THƯỞNG HÀNG NGÀY",
              "Canvas/popup_daily_reward/bg_holder/title": "Mai nhớ quay lại để nhận thêm quà!",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-1/day": "NGÀY 1",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-2/day": "NGÀY 2",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-3/day": "NGÀY 3",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-4/day": "NGÀY 4",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-5/day": "NGÀY 5",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-6/day": "NGÀY 6",
              "Canvas/popup_daily_reward/bg_holder/gifts/day-7/day": "NGÀY 7",
              "Canvas/popup_daily_reward/bg_holder/btn_claim/lbl": "NHẬN",
              "Canvas/popup_level_cannot_steal/bg_holder/bg_header/lbl_header": "ÔI KHÔNG!",
              "Canvas/popup_level_cannot_steal/bg_holder/btn_close/lblX5": "Đóng",
              "Canvas/popup_bot_gift/bg_holder/bg_header/lbl_header": "CHÚC MỪNG!",
              "Canvas/popup_bot_gift/bg_holder/title": "BẠN ĐÃ NHẬN CÁC PHẦN QUÀ",
              "Canvas/popup_bot_gift/bg_holder/btn_claim/lbl": "NHẬN",
              "Canvas/popup_bot_gift/bg_holder/share/Label": "Chia sẻ với bạn bè",
              "Canvas/popup_tutorials/overlay/normal_guide/label_skip": "BỎ QUA       ",
              "Canvas/popup_tutorials/overlay/normal_guide/but_next/New Label": "TIẾP TỤC!",
              "Canvas/popup_tutorials/overlay/frame_animation/khung-ten-popup (1)/label_header": "CÂY",
              "Canvas/popup_tutorials/overlay/frame_animation/but_great/New Label": "TUYỆT",
              "Canvas/popup_tutorials/label_skip": "BỎ QUA",
              "Canvas/popup_gift_list/bg_holder/bg_header/lbl_header": "QUÀ TẶNG",
              "Canvas/popup_gift_list/bg_holder/lbl_header": "Làm các nhiệm vụ sau\nđể nhận quà tương ứng ",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/quest_done": "XONG",
              "Canvas/popup_go_home/bg_holder/bg_header/lbl_header": "VỀ NHÀ",
              "Canvas/popup_go_home/bg_holder/scrollview/msg": "Bạn chưa trộm\nđược gì.Bạn có chắc\nmuốn về nhà?",
              "Canvas/popup_go_home/bg_holder/btn_home/lblX5": "VỀ NHÀ",
              "Canvas/popup_go_steal/bg_header/lbl_header": "TÌM NẠN NHÂN",
              "Canvas/popup_go_steal/title": "Các nông sản bạn đã trộm được",
              "Canvas/popup_go_steal/scrollview/msg": "Bạn chưa trộm\nđược gì",
              "Canvas/popup_go_steal/img_random/lbl_find": "TÌM NẠN NHÂN NGẪU NHIÊN",
              "Canvas/popup_go_steal/btn_go/lblX5": "TÌM",
              "Canvas/popup_go_steal/lbl_used_up_find": "BẠN ĐÃ DÙNG HẾT CÁC\nLƯỢT TÌM MIỄN PHÍ. XEM VIDEO ĐỂ\nNHẬN THÊM",
              "Canvas/popup_go_revenge/bg_header/lbl_header": "Tiếp tục?",
              "Canvas/popup_go_revenge/scrollview/msg": "Bạn chưa trộm\nđược gì",
              "Canvas/popup_go_revenge/lbl_find": "Nạn nhân đã chọn",
              "Canvas/popup_go_revenge/btn_go/lblX5": "ĐI",
              "Canvas/popup_video_failed/bg_holder/info": "Ồ KHÔNG !\nVIDEO ĐÃ GẶP LỖI\n\nVUI LÒNG THỬ LẠI\nSAU ÍT PHÚT",
              "Canvas/popup_buy_dog_iap_099/bg_holder/bg_header/lbl_header": "Ồ KHÔNG",
              "Canvas/popup_buy_dog_iap_099/bg_holder/btn_buy/lblX5": "MUA NGAY"
          },
          dynamicLabels: {
              "prefabs//ground/lbl_info": function(e) {
                  var a = /^LEVEL (\d+)/i;
                  return a.test(e) ? e.replace(a, "Cấp $1") : e
              },
              "prefabs//ground/lbl_info1": function(e) {},
              "prefabs//animal/tree_rice/lbl_info": function(e) {},
              "prefabs//tree/tree_rice/lbl_info": "xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/name": "xxx",
              "Canvas/popup_go_home/bg_holder/title": function(e) {
                  return {
                      "all the product you've stolen": "Các nông sản bạn đã trộm",
                      "OOPS...": "Ồ KHÔNG..."
                  }[e]
              },
              "Canvas/popup_go_revenge/title": function(e) {
                  return {
                      "all the product you've stolen": "Các nông sản bạn đã trộm",
                      "OOPS...": "Ồ KHÔNG..."
                  }[e]
              },
              "message_share_achievement/desc": "xxx",
              "message_share_achievement/title": "xxx",
              "message_share_daily_reward/detail": function(e) {
                  return e + " ngày"
              },
              "Canvas/nodeCaches/row_victim/lbl1": function(e) {
                  if (e) {
                      var a = e.replace("days", "ngày").replace("day", "ngày").replace("hrs", "h").replace("hr", "h").replace("mins", "phút").replace("min", "phút").replace("secs", "giây").replace("sec", "giây");
                      return _log("txt = " + e + " // result = " + a),
                      a + " trước"
                  }
              },
              "Canvas/nodeCaches/row_friend_victim/level": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BOSUA/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/GAMAI/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/LUA/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CACHUA/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/KHOAI/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/DUA/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/NGO/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/CAROT/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BAPCAI/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/bg_shop/scroll_plant/view/content/BINGO/price/lbl1": "Cấp xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl1": "ĐÃ TRỘM: xxx",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl2": "THÀNH CÔNG: xxx%",
              "Canvas/layout_home/popup_friend_info_home_prefab (late_load)/border/lbl3": "BỊ TRỘM: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl1": "ĐÃ TRỘM: xxx",
              "Canvas/layout_victim/popup_friend_info/border/lbl2": "THÀNH CÔNG: xxx%",
              "Canvas/layout_victim/popup_friend_info/border/lbl3": "BỊ TRỘM: xxx",
              "Canvas/popup_storage/bg_holder/lbl_capacity": "Cấp xxx",
              "Canvas/popup_gift_list/bg_holder/scrollview/gift_row_template/btn_do_quest/lbl": function(e) {
                  return {
                      Play: "CHƠI",
                      Create: "TẠO"
                  }[e]
              },
              "Canvas/popup_leaderboard/bg_holder/level_rank_intro": function(e) {
                  return "Cấp của bạn: " + e + " / Hạng:"
              },
              "Canvas/popup_find_victim/bg_holder/lbl_find_time_left": function(e) {
                  return "Còn " + e + " lượt"
              },
              "Canvas/popup_info_item/bg_holder/bg_header/lbl_header": function(e) {
                  return (_G.gameLanguage.currentLangFile.products.nameList[e] || "").toUpperCase()
              },
              "Canvas/popup_info_item/bg_holder/txt_info": function(e) {
                  if (e && Array.isArray(e)) {
                      return e[1] ? "Thêm 1 " + _G.gameLanguage.currentLangFile.products.outputNameList[e[0]] + " mỗi " + e[1] + " giây" : _G.gameLanguage.currentLangFile.products.nameList[e[0]] + " của bạn đang lớn"
                  }
              },
              "Canvas/popup_congratulations/bg_holder/title": function(e) {
                  return {
                      "Congratulations!": "Chúc mừng!",
                      "oops!": "ồ không!",
                      "Oops!": "Ồ không!"
                  }[e]
              },
              "Canvas/popup_congratulations/bg_holder/info": function(e) {
                  var a, o = /^You have received ([\d,]+) golds/i;
                  if (o.test(e))
                      return _log(" >>> >>> >>> regex tested true! "),
                      e.replace(o, "Bạn đã nhận $1 vàng");
                  var t = /^You have received ([\d,]+) diamonds/i;
                  return t.test(e) ? (_log(" >>> >>> >>> regex tested true! "),
                  e.replace(t, "Bạn đã nhận $1 kim cương")) : (a = {},
                  l(a, "You have been awarded " + _G.configs.rewardGoldShortcut + " golds for creating shortcut", "Bạn đã được thưởng " + _G.configs.rewardGoldShortcut + " vàng khi tạo shortcut"),
                  l(a, "sorry, error occured", "Rất tiếc, có lỗi xảy ra"),
                  l(a, " Video is not available.", " Video đã bị chặn."),
                  l(a, "Invitation sent successfully!", "Gửi lời mời thành công!"),
                  a)[e]
              },
              "Canvas/popup_disconnected/status": function(e) {
                  return {
                      "OOPS! DISCONNECTED": "Ồ KHÔNG! MẤT KẾT NỐI",
                      "CONNECTING SERVER ...": "ĐANG KẾT NỐI ...",
                      "CONNECTED !": "ĐÃ KẾT NỐI !",
                      "Please check connection\nand reload game": "Vui lòng kiểm tra kết nối\nvà tải lại game"
                  }[e]
              },
              "Canvas/popup_dog_attack/bg_holder/border/txt_info": function(e) {
                  return {
                      "you've just dropped": "Bạn đã đánh rơi",
                      "sorry...": "rất tiếc..."
                  }[e]
              },
              "Canvas/popup_info_item/bg_holder/txt_level": "Cấp xxx/10",
              "Canvas/popup_upgrade_storage/bg_holder/label_level": "Cấp xxx",
              "Canvas/popup_upgrade_truck/bg_holder/label_level": "Cấp xxx",
              "Canvas/popup_new_achievement/bg_holder/title": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/desc": "xxx",
              "Canvas/popup_achievement_list/bg_holder/scrollview/row_template/title": "xxx",
              "Canvas/popup_level_cannot_steal/bg_holder/txt_msg": "TÍNH NĂNG TRỘM VÀ\nTRẢ THÙ SẼ ĐƯỢC\nMỞ KHÓA KHI LÊN\nCẤP xxx",
              "Canvas/popup_tutorials/overlay/normal_guide/label_intro": function(e) {
                  if (e && Array.isArray(e)) {
                      var a = i(e, 2)
                        , o = a[0]
                        , t = a[1];
                      return "\n" + {
                          tut1: ["", "Xin chào. Tôi là Tom. Chào mừng đến nông trại của chúng ta!", "Bấm vào cây lúa mì để trồng mới", "Trồng hết lúa mì trên các ô đất còn trống", "Mua thêm một ô đất để mở rộng thửa ruộng nào", "Drag to merge and make a wheat level 2", "", 'Bấm "Bán" để bán số lúa bạn\nvừa thu hoạch'],
                          tut2: ['Nhấn vào icon "Ăn trộm"', "Cùng tìm 1 nạn nhân nào", "Đây là ruộng của nhà nạn nhân\nĂn trộm đi nào!", "Kéo tay qua các ô ruộng để ăn trộm.", "Tốt lắm!\nBạn đã làm được rồi.\nKhông giống tôi ngày trước.", 'Ấn "Về nhà" để trở về\nnông trại của bạn.'],
                          tut3: ["Bấm vào bảng để xem các yêu\ncầu mới", "Hoàn thành các yêu cầu đặc biệt\nnày để tăng giá trị cho số nông\nphẩm", "Hoàn thành yêu cầu 2 để tăng giá trị lên 150%", "Hoàn thành yêu cầu 3 để tăng giá trị lên 200%", "", "Hoàn thành các yêu cầu và tiếp\ntục chăm sóc nông trại nào"],
                          tut_use_theme: ["Bấm nút để dùng giao diện mùa đông!", "Làm tốt lắm!\nBạn thông minh hơn tôi tưởng\nBạn đã hiểu cách đổi giao diện\nrồi đấy"]
                      }[o][t]
                  }
              },
              "Canvas/popup_go_steal/lbl_find_time_left": "Còn xxx lượt",
              "Canvas/popup_go_revenge/victim-level": "Cấp: xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info1": "Thiếu xxx",
              "Canvas/popup_buy_dog_iap_099/bg_holder/info2": "để mua chó. Mua ngay với giá xxx?",
              "Canvas/popup_dogs/bg_holder/detail_info/label_level": function(e) {
                  return "Cấp " + e.level + " / " + e.maxLevel
              },
              "Canvas/popup_dogs/bg_holder/dog_desc": function(e) {
                  return _G.gameLanguage.currentLangFile.dogDescription[e]
              },
              "Canvas/tooltip/text": function(e) {
                  var a, o = "Congratz! You get " + _G.configs.videoFindVictim + " victim find times", t = "STEALING UNLOCKS AT LEVEL " + _G.configs.stealUnlockLevel, n = "Chúc mừng! Bạn đã nhận\n" + _G.configs.videoFindVictim + " lượt tìm ngẫu nhiên", i = "CHỨC NĂNG TRỘM SẼ ĐƯỢC\nMỞ KHÓA KHI LÊN CẤP " + _G.configs.stealUnlockLevel;
                  return (a = {},
                  l(a, o, n),
                  l(a, t, i),
                  l(a, "NOT ENOUGH SPACE", "KHÔNG ĐỦ Ô ĐẤT"),
                  l(a, "Nothing left to steal !", "Không còn gì để trộm !"),
                  l(a, "Buy dog successfully!\nEnjoy!", "Mua chó thành công!\nChúc mừng!"),
                  l(a, "SHARED SUCCESSFULLY", "CHIA SẺ THÀNH CÔNG"),
                  l(a, "CAN NOT HAVESRT WHEN STORAGE IS FULL", "KHÔNG THỂ THU HOẠCH KHI NHÀ KHO ĐÃ ĐẦY"),
                  l(a, "Successfully save 50% dropped gold!", "Giảm thành công 50%\nsố vàng đánh rơi!"),
                  l(a, "INVITATION SENT SUCCESSFULLY", "LỜI MỜI GỬI THÀNH CÔNG"),
                  l(a, "Successfully X2 products!", "X2 nông sản thành công!"),
                  l(a, "Congratz! Status unlocked!", "Chúc mừng! Trạng thái đã mở khóa!"),
                  l(a, "Upgraded successfully!", "Nâng cấp thành công!"),
                  l(a, "Stealing is not available\nin view mode!", "Việc ăn trộm bị khóa\ntrong chế độ xem nhà\nngười chơi khác"),
                  l(a, "Name changed successfully!", "Đổi tên thành công!"),
                  a)[e]
              }
          },
          messages: {
              shareStolen: {
                  content: {
                      caughtMessage: function(e, a, o) {
                          return e + " đã bị " + (o ? "chó của " : "") + a + " bắt khi đang trộm nông trại của " + a + "!"
                      },
                      damageMessage: function(e, a, o) {
                          var t = []
                            , n = _G.gameLanguage.currentLangFile.products.outputNameList;
                          for (var i in o) {
                              var r = _G.configs.products[i].harvestUnitName;
                              t.push(o[i] + " " + n[r])
                          }
                          return e + " đã trộm nông trại của " + a + "! \n" + a + " mất " + t.join(", ")
                      }
                  },
                  cta: "Trả thù"
              },
              shareDailyReward: {
                  content: function(e) {
                      reeturn(r, e)
                  },
                  cta: "Chơi ngay!"
              },
              shareNewAchievement: {
                  content: function(e, a) {
                      return e + ' đã đạt thành tích "' + a + '". Bạn thì sao?'
                  },
                  cta: "Chơi ngay!"
              },
              sendInvitationVictim: {
                  content: "Hãy chơi Farm Battle!",
                  cta: "Chơi ngay!"
              },
              sendMsgInviteGift: {
                  content: "Xin chào! Hãy làm hàng xóm của tôi nhé!",
                  cta: "Chơi nào!"
              }
          },
          achievements: {
              UNLOCK_SLOT: {
                  title: "Mở rộng xxx",
                  desc: "Mở xxx ô đất"
              },
              UP_LUA: {
                  title: "Lúa mì cấp xxx",
                  desc: "Ghép lúa mì lên cấp xxx"
              },
              UP_CACHUA: {
                  title: "Cà chua cấp xxx",
                  desc: "Ghép cà chua lên cấp xxx"
              },
              UP_KHOAI: {
                  title: "Khoai tây cấp xxx",
                  desc: "Ghép khoai tây lên cấp xxx"
              },
              UP_BOSUA: {
                  title: "Bò sữa cấp xxx",
                  desc: "Ghép bò sữa lên cấp xxx"
              },
              UP_DUA: {
                  title: "Dưa chuột cấp xxx",
                  desc: "Ghép dưa chuột lên cấp xxx"
              },
              UP_NGO: {
                  title: "Ngô cấp xxx",
                  desc: "Ghép ngô lên cấp xxx"
              },
              UP_CAROT: {
                  title: "Cà rốt cấp xxx",
                  desc: "Ghép cà rốt lên cấp xxx"
              },
              UP_GAMAI: {
                  title: "Gà mái cấp xxx",
                  desc: "Ghép gà mái lên cấp xxx"
              },
              UP_BAPCAI: {
                  title: "Bắp cải cấp xxx",
                  desc: "Ghép bắp cải lên cấp xxx"
              },
              UP_BINGO: {
                  title: "Bí ngô cấp xxx",
                  desc: "Ghép bí ngô lên cấp xxx"
              },
              UP_PINEAPPLE: {
                  title: "Dứa cấp xxx",
                  desc: "Ghép dứa lên cấp xxx"
              },
              UP_GOAT: {
                  title: "Dê cấp xxx",
                  desc: "Ghép dê lên cấp xxx"
              },
              UP_COCONUT: {
                  title: "Dừa cấp xxx",
                  desc: "Ghép dừa lên cấp xxx"
              },
              UP_SHEEP: {
                  title: "Cừu cấp xxx",
                  desc: "Ghép cừu lên cấp xxx"
              },
              UP_NHAKHO: {
                  title: "Nhà kho cấp xxx",
                  desc: "Nâng cấp nhà kho lên cấp xxx"
              },
              UP_XEHANG: {
                  title: "Xe hàng cấp xxx",
                  desc: "Nâng cấp xe hàng lên cấp xxx"
              }
          },
          gifts: {
              Play: "Chơi",
              "Create shortcut": "Tạo biểu tượng"
          }
      },
      cc._RF.pop()
  }
  , {}],
  video_rewards: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "8c39d8l9XJKSoIVmh1s/eZc", "video_rewards");
      var d = e("../all_modules");
      setTimeout(function() {
          d = e("../all_modules")
      }, 0),
      a.exports = {
          init: function() {
              d.video.checkIsVideoEnabled();
              var e = cc.find("Canvas/popup_load_video/image-loading");
              e.parent.active = !0,
              e.runAction(cc.repeatForever(cc.rotateBy(2, 360))),
              e.parent.active = !1,
              d.video.preloadInterAds(!0),
              setTimeout(function() {
                  d.video.preloadInterAds()
              }, 3e3)
          },
          preloadInterAds: function() {
              var a = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              window.FBInstant && FBInstant.getInterstitialAdAsync(d.configs[a ? "interAdIdStartGame" : "interAdId"]).then(function(e) {
                  e.loadAsync().then(function() {
                      d.video["interAdObj" + (a ? "StartGame" : "")] = e
                  }).catch(function(e) {})
              }).catch(function(e) {
                  callBack && callBack(!1)
              })
          },
          showInterAds: function(o, t, n) {
              var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
              if (_log(" showInterAds called ! "),
              !window.FBInstant)
                  return .7 < _random() ? t ? t() : "" : o ? o() : "";
              if (!d.tutorial.isShowingTut()) {
                  var r = !1
                    , l = !1;
                  _waitToRun(function() {
                      l = !0;
                      try {
                          var e = d.video["interAdObj" + (i ? "StartGame" : "")]
                            , a = e.getPlacementID() || d.configs[i ? "interAdIdStartGame" : "interAdId"];
                          n && n(a),
                          _log(" showing interAd with ID = " + a + " "),
                          e.showAsync().then(function() {
                              r || (r = !0,
                              o && o(a)),
                              d.video.preloadInterAds()
                          }).catch(function(e) {
                              r || (r = !0,
                              t && t(e.message))
                          })
                      } catch (e) {
                          r || (r = !0,
                          t && t(e.message))
                      }
                  }, "interAdObj" + (i ? "StartGame" : ""), d.video, .1),
                  setTimeout(function() {
                      r || l || (r = !0,
                      t && t("load_fail"))
                  }, 3e3)
              }
          },
          showInterAdsSellProducts: function(e) {
              _random() > d.configs.adsRatio_sellProducts || d.video.showInterAds(function() {
                  _logFBEvent("event_show_ad_sell_product"),
                  e && e()
              }, function() {
                  e && e()
              })
          },
          showInterAdsVictimToHome: function() {
              d.video.isStolenSuccess && (d.video.isStolenSuccess = !1,
              _random() > d.configs.adsRatio_victimToHome || d.video.showInterAds(function() {
                  _logFBEvent("event_show_ad_victim_to_home")
              }))
          },
          showInterAdsViewLBToHome: function() {
              d.leaderboard.isViewingLeaderboardUser && (d.leaderboard.isViewingLeaderboardUser = !1,
              d.video.showInterAds(function() {
                  _logFBEvent("event_show_ad_viewleadboard_to_home")
              }))
          },
          showInterAdsUpgrade: function(e, a) {
              a > d.configs.adsUpgrade_levelMax || a < d.configs.adsUpgrade_levelMin || _random() > d.configs.adsRatio_upgrade || d.video.showInterAds(function() {
                  _logFBEvent("event_show_ad_upgrade", 1, {
                      productId: e,
                      targetLevel: a
                  })
              })
          },
          showInterAdsStartGame: function() {
              d.video.showInterAds(function(e) {
                  _logFBEvent("event_show_ad_start_game_success", 1, {
                      adId: e
                  })
              }, function(e) {
                  _logFBEvent("event_show_ad_start_game_fail", 1, {
                      error_msg: e
                  })
              }, function(e) {
                  _logFBEvent("event_show_ad_start_game_displayed", 1, {
                      adId: e
                  });
                  [3, 5, 10, 15, 20, 25, 30].map(function(e) {
                      setTimeout(function() {
                          _logFBEvent("event_show_ad_start_game_extra_play", 1, {
                              timePassed: e
                          })
                      }, 1e3 * e)
                  })
              }, !0)
          },
          checkIsVideoEnabled: function() {
              window.FBInstant && FBInstant.getRewardedVideoAsync(d.configs.videoRewardId).then(function() {
                  d.video.isVideoAvailable = !0,
                  setTimeout(function() {
                      d.video.loadVideo(!0)
                  }, 1e3)
              }, function() {
                  d.video.disableVideoButtonForAWhile(999999)
              })
          },
          loadVideo: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              if (_log(" _G.video.loadVideo called. isLoading = " + !d.video.videoObj + " "),
              _logFBEvent("event_videoall_load_start_game"),
              FBInstant && d.video.isVideoAvailable && (e || d.video.videoObj)) {
                  d.video.videoObj = null;
                  var a = void 0
                    , o = function(e) {
                      _log("video load failed. Retrying in 2 seconds ..."),
                      _logFBEvent("event_videoall_load_retry"),
                      setTimeout(function() {
                          d.video.loadVideo()
                      }, 2e3)
                  };
                  FBInstant.getRewardedVideoAsync(d.configs.videoRewardId).then(function(e) {
                      return (a = e).loadAsync()
                  }).then(function() {
                      d.video.videoObj = a,
                      _log("video loaded successfully"),
                      _logFBEvent("event_videoall_loaded_success")
                  }, o).catch(o)
              }
          },
          showVideo: function(e, o) {
              if (_showLayout("popup_load_video"),
              window.FBInstant) {
                  _log(" _G.video.showVideo() state 0 :: _G.video.videoObj = " + d.video.videoObj + " ");
                  var a = function(e, a) {
                      _hideLayout("popup_load_video"),
                      _showLayout("popup_video_failed"),
                      d.video.disableVideoButtonForAWhile(),
                      d.video.loadVideo(),
                      o && o(e, a),
                      _log(" _G.video.showVideo() :: videoFailedHandler :: cause = " + a + " :: error = ", e)
                  };
                  _waitToRun(function() {
                      d.video.videoObj.showAsync().then(function() {
                          _hideLayout("popup_load_video"),
                          _logFBEvent("event_videoall_show_success"),
                          d.video.loadVideo(),
                          e && e()
                      }, function(e) {
                          _logFBEvent("event_videoall_load_fail", 1, {
                              cause: e.message
                          }),
                          a(e, "3333333")
                      }).catch(function(e) {
                          _logFBEvent("event_videoall_load_fail", 1, {
                              cause: e.message
                          }),
                          a(e, "44444444")
                      })
                  }, "videoObj", d.video, .1, 10, function() {
                      _logFBEvent("event_videoall_load_fail", 1, {
                          cause: "timeout"
                      }),
                      a("timeout", "timeout")
                  })
              } else
                  _random() < .7 ? (_hideLayout("popup_load_video"),
                  e && e()) : o && (_hideLayout("popup_load_video"),
                  o("timeout", "timeout"))
          },
          disableVideoButtonForAWhile: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30
                , a = [cc.find("Canvas/popup_info_item/bg_holder/bottom1/btn_up2"), cc.find("Canvas/popup_not_enough_gold/bg_holder/btn_up2")];
              a.map(function(e) {
                  e.active = !1
              }),
              setTimeout(function() {
                  a.map(function(e) {
                      e.active = !0
                  })
              }, 1e3 * e)
          },
          videoGetGold: function() {
              _logFBEvent("event_not_enough_video_gold_click"),
              d.video.showVideo(function() {
                  _logFBEvent("event_not_enough_video_gold_success");
                  var a = d.configs.getVideoRewardGold(_thisPlayerInfo.level);
                  d.data.addGold(a, function(e) {
                      d.uiLayout.showCongratulations("You have received " + a + " golds "),
                      d.fx.updateNonPendingGoldDiamond(),
                      _thisPlayerInfo.gold = e.Gold,
                      d.uiHome.setGold(e.Gold),
                      _hideLayout("popup_not_enough_gold")
                  })
              }, function(e) {
                  _logFBEvent("event_not_enough_video_gold_fail"),
                  _hideLayout("popup_not_enough_gold")
              })
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }],
  x2reward: [function(e, a, o) {
      "use strict";
      cc._RF.push(a, "a4d307D6KVM04B4dgOFauHA", "x2reward");
      var r = e("../all_modules");
      setTimeout(function() {
          r = e("../all_modules")
      }, 0),
      a.exports = {
          rewardList: {},
          resetNewPopup: function(e) {
              r.x2reward.setActiveButX2(e, !0)
          },
          updateAfterVideoWatched: function(e, a) {
              r.x2reward.setActiveButX2(e, !1),
              r.x2reward.setRewardLabelX2(e, a)
          },
          buttonX2OnTouch: function(o) {
              var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
              r.video.isVideoAvailable ? (_log(" _G.video.showVideo called !!!! "),
              r.video.showVideo(function() {
                  _logFBEvent("x2Reward", 1, {
                      popupName: o,
                      videoAvailable: !0,
                      videoLoadSuccess: !0
                  }),
                  _log("_G.video.showVideo success callback ::: Call server to x2 gold/diamond then in call back : Update logics for unconfirmedPopups ");
                  var a = r.fx.unconfirmedPopupArr.find(function(e) {
                      return e.name == o.replace("1", "")
                  });
                  _log(" popupName = " + o + " //// rewardInfo = ", a),
                  a && (a.gold && (_log(" called _G.data.addGold( " + a.gold + " ) ......"),
                  r.data.addGold(a.gold, function(e) {
                      _thisPlayerInfo.gold = e.Gold,
                      a.gold *= 2
                  })),
                  a.diamond && (_log(" called _G.data.addGold( " + a.diamond + " ) ......"),
                  r.data.addDiamond(a.diamond, function(e) {
                      _thisPlayerInfo.diamond = e.Diamond,
                      a.diamond *= 2
                  })),
                  r.x2reward.rewardList[o] = {
                      gold: a.gold,
                      diamond: a.diamond,
                      isDaily: e
                  },
                  r.x2reward.updateAfterVideoWatched(o, e ? r.x2reward.dailyRewardDayNum : 0))
              }, function() {
                  _logFBEvent("x2Reward", 1, {
                      popupName: o,
                      videoAvailable: !0,
                      videoLoadSuccess: !1
                  })
              })) : (r.uiLayout.showCongratulations(" Video is not available.", "Oops!"),
              _logFBEvent("x2Reward", 1, {
                  popupName: o,
                  videoAvailable: !1
              }))
          },
          setActiveButX2: function(e, a) {
              var o = {
                  popup_daily_reward: "Canvas/popup_daily_reward/bg_holder/btn_x2_disabled",
                  popup_new_achievement: "Canvas/popup_new_achievement/bg_holder/btn_x2_disabled",
                  popup_new_level: "Canvas/popup_new_level/bg_holder/btn_x2_disabled",
                  popup_new_level1: "Canvas/popup_new_level1/bg_holder/btn_x2_disabled"
              }[e];
              cc.find(o).active = !a
          },
          setRewardLabelX2: function(e, a) {
              var o = r.x2reward.rewardList[e];
              if (_log(" popupName = " + e + " // rewardInfo = ", o),
              o) {
                  var t = {
                      popup_new_achievement: {
                          gold: "Canvas/popup_new_achievement/bg_holder/rewards/gold",
                          diamond: "Canvas/popup_new_achievement/bg_holder/rewards/diamond"
                      },
                      popup_new_level1: {
                          diamond: "Canvas/popup_new_level1/bg_holder/bg_info1/lbl2",
                          gold: "Canvas/popup_new_level1/bg_holder/bg_info1/lbl1"
                      },
                      popup_new_level: {
                          diamond: "Canvas/popup_new_level/bg_holder/bg_info1/lbl2",
                          gold: "Canvas/popup_new_level/bg_holder/bg_info1/lbl1"
                      },
                      popup_daily_reward: {
                          gold: "Canvas/popup_daily_reward/bg_holder/gifts/day-" + a + "/gold",
                          diamond: "Canvas/popup_daily_reward/bg_holder/gifts/day-" + a + "/diamond"
                      }
                  }[e];
                  if (_log(" cc.find(pathObj.gold) = " + cc.find(t.gold) + "  //  cc.find(pathObj.diamond) = " + cc.find(t.diamond) + " "),
                  cc.find(t.gold)) {
                      var n = "+" + 2 * o.gold;
                      _log(" goldNum  = " + n + " "),
                      r.utils.setLabelTextPrice(cc.find(t.gold), n)
                  }
                  if (cc.find(t.diamond)) {
                      var i = "+" + 2 * o.diamond;
                      _log(" diamondNum  = " + i + " "),
                      r.utils.setLabelTextPrice(cc.find(t.diamond), i)
                  }
              }
          }
      },
      cc._RF.pop()
  }
  , {
      "../all_modules": "all_modules"
  }]
}, {}, ["all_modules", "bot_subscribe", "configs", "configs_achievement", "control", "control_lib", "control_performance_check", "control_scroll_layer", "fix_scroll_view", "data", "late_load_animation", "late_sprite_frame_mapping", "game_language", "en_US", "es_ES", "fr_FR", "pl_PL", "pt_PT", "th_TH", "vi_VN", "language_comp", "language_switcher", "msg_language", "achievements", "bot", "core", "dogs", "events", "events_animal", "events_timer", "events_tree", "farm_status", "find_victim", "game", "gifts", "home", "info_item", "leaderboard", "login", "popup_arragement", "share", "social", "stolen_damage", "storage", "sync_data", "theme", "timer", "truck", "video_rewards", "x2reward", "pseudo_api", "pseudo_server", "resources_sound_sfx", "fps_check", "prefab_list", "row_victim", "slider_on_slide", "tooltip", "tut1", "tut2", "tut3", "tut_use_theme", "tutorial", "fx", "node_pools", "ui_achievement", "ui_animal", "ui_bot", "ui_button", "ui_dog", "ui_find_victim", "ui_harvest_noti", "ui_home", "ui_layout", "ui_shop", "ui_slot", "ui_storage", "ui_store", "ui_tree", "ui_victim", "utils", "utils_facebook", "utils_instant"]);
