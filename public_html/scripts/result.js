const urlParams = new URLSearchParams(window.location.search);
const scanResult = urlParams.get('scan');
const resultIframe = document.getElementById('resultIframe');

if (scanResult) {
  resultIframe.src = scanResult;
}
