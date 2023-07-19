
const Bit=document.getElementById("bit");
const Eth=document.getElementById("eth");
const Dog=document.getElementById("dog");




var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}


}
$.ajax(settings).done(function(response){
    Bit.innerHTML=response.bitcoin.usd;
    Eth.innerHTML=response.ethereum.usd;
    Dog.innerHTML=response.dogecoin.usd;
   
})