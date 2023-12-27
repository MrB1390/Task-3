const url = "https://restcountries.com/v3.1/all"

const XHR = new XMLHttpRequest;
XHR.open("GET", url);
XHR.send();

XHR.onload = () => {
    console.log(JSON.parse(XHR.response));
}