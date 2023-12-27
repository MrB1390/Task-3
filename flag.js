const url2 = "https://restcountries.com/v3.1/all"

const XHR2 = new XMLHttpRequest;

XHR2.open("GET", url2);
XHR2.send();

XHR2.onload = () => {
   const flag = JSON.parse(XHR2.response);
   const countryFlag = [];
   for(let i = 0; i < flag.length; i++){
     if(flag[i].flags){
        countryFlag.push(flag[i].flags)
     }
   }
   console.log(countryFlag)
}