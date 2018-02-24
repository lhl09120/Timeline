console.log('okex price checker start!!!!!!!!!!!!!!!!');
console.log('now version is : 1.0.0');
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
// 监听连接失败事件，打印错误日志
client.on('connectFailed', error => console.log('Connect Error: ' + error.toString()))
// 监听连接成功事件
client.on('connect', connection => {
  console.log('OKEX server connect success!------------');
  // 连接出错
  connection.on('error', error => console.log("Connection Error: " + error.toString()));
  // 监听连接断开事件
  connection.on('close', () => console.log('OKEX server connect close!------------'));
  // 监听收到信息事件
  connection.on('message', message => {
    // 打印行情
    console.log(message.utf8Data);
  });
  // 发送监听BTC本周合约行情信息
  // connection.sendUTF("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_this_week'}");
  connection.sendUTF("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_4hour'}");
});

client.connect('wss://real.okex.com:10440/websocket/okexapi');

//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_this_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_next_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_quarter'}");
//
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_3min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_5min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_15min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_30min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_1hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_2hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_4hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_6hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_12hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_3day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_week'}");

//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_next_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_quarter_1min'}");
//

// [{
//   "binary": 0,
//   "channel": "ok_sub_futureusd_btc_ticker_this_week",
//   "data": {
//     "high": "10449",
//     "limitLow": "9735.21",
//     "vol": "5899030",
//     "last": "10038.48",
//     "low": "9887.86",
//     "buy": "10030.29",
//     "hold_amount": "1170664"
//     "sell": "10036.18",
//     "contractId": 201803020000034,
//     "unitAmount": "100",
//     "limitHigh": "10342.92",
//   }
// }]
// 
// [{"binary":0,"channel":"ok_sub_futureusd_btc_kline_this_week_4hour","data":[[
// "1519459200000", 时间戳
// "10031.0", 开
// "10089.35", 高
// "9910.0", 低
// "9966.64", 收
// "546034.0", 成交量
// "5458.011290760412"
// ]]}]