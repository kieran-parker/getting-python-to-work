
const crypt_comp_url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BSV,BCH,XRP&tsyms=GBP,USD,EUR"
const my_api_key = "dcf86f667d7c3ff35fd49b7faf280f9e8adc076aeb9e62d4d6cebaf977cdf111"

const my_crypto_url = crypt_comp_url + my_api_key

async function getcrypto() {
    const response = await fetch(my_crypto_url);
    const data = await response.json();
    document.getElementById('BTCprc').textContent=data.BTC.GBP;
    document.getElementById('BSVprc').textContent=data.BSV.GBP ;
    document.getElementById('BCHprc').textContent=data.BCH.GBP;
    document.getElementById('XRPprc').textContent=data.XRP.GBP;
    document.getElementById('ETHprc').textContent=data.ETH.GBP;


}
getcrypto();

const quanld_url = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_ROU?start_date=2021-01-31&end_date=2021-01-31&api_key=kgQNCxDQwPA9_1c_oYfD'

async function getquandl() {
    const response = await fetch(quanld_url);
    const quandldata = await response.json();
    document.getElementById('quandl1').textContent=quandldata.dataset.data[0][4];




}
getquandl();

const quanld_url2 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_GBR?start_date=2021-01-31&end_date=2021-01-31&api_key=kgQNCxDQwPA9_1c_oYfD'

async function getquandl2() {
    const response = await fetch(quanld_url2);
    const quandldata = await response.json();
    document.getElementById('quandl2').textContent=quandldata.dataset.data[0][4];

}
getquandl2();




const quanld_url3 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_USA?start_date=2021-01-31&end_date=2021-01-31&api_key=kgQNCxDQwPA9_1c_oYfD'

async function getquandl3() {
    const response = await fetch(quanld_url3);
    const quandldata = await response.json();
    document.getElementById('quandl3').textContent=quandldata.dataset.data[0][4];

}
getquandl3();




const quanld_url4 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_CHN?start_date=2021-01-31&end_date=2021-01-31&api_key=kgQNCxDQwPA9_1c_oYfD'

async function getquandl4() {
    const response = await fetch(quanld_url4);
    const quandldata = await response.json();
    document.getElementById('quandl4').textContent=quandldata.dataset.data[0][4];

}
getquandl4();




const quanld_url5 = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_CHN?start_date=2021-01-31&end_date=2021-01-31&api_key=kgQNCxDQwPA9_1c_oYfD'

async function getquandl5() {
    const response = await fetch(quanld_url5);
    const quandldata = await response.json();
    document.getElementById('quandl5').textContent=quandldata.dataset.data[0][4];

}
getquandl5();

