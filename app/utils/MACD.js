// EMA（12）= 前一日EMA（12）×11/13＋今日收盘价×2/13  #12条记录，快线
// EMA（26）= 前一日EMA（26）×25/27＋今日收盘价×2/27  #26条记录，慢线
// DIFF=今日EMA（12）- 今日EMA（26）
// DEA = 前一日DEA×8/10＋今日DIF×2/10 
// MACD=BAR=2×(DIFF－DEA)

const getEMA12 = (lastEMA12, todayClosePrice) => lastEMA12*11/13 + todayClosePrice*2/13;
const getEMA26 = (lastEMA26, todayClosePrice) => lastEMA26*25/27 + todayClosePrice*2/27;
const getDIFF = () => getEMA12 - getEMA26;
const getDEA = (lastDEA, todayDIFF) => lastDEA*8/10 + todayDIFF*2/10;
const MACD = () => 2*(getDIFF() - getDEA());
const BAR = MACD;