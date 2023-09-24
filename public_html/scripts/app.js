if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js') // Specifica il percorso del file SW
      .then((registration) => {
        console.log('Service Worker registrato con successo:', registration);
      })
      .catch((error) => {
        console.error('Errore nella registrazione del Service Worker:', error);
      });
  });
} else {
  console.log('Il tuo browser non supporta i Service Worker.');
}

document.getElementById('startScan').addEventListener('click', function () {
  const html5QrCode = new Html5Qrcode("scanner");
  html5QrCode.start({
      facingMode: "environment"
    }, {
      fps: 10,
      qrbox: 250
    },
    function (qrCodeMessage) {
      html5QrCode.stop();
      window.location.href = `./scan-result.html?scan=${encodeURIComponent(qrCodeMessage)}`;
    },
    function (errorMessage) {
      console.error(errorMessage);
    }
  );
});

// Se siamo sulla pagina dei risultati, carichiamo l'URL nell'iframe
if (window.location.pathname.endsWith('scan-result.html')) {
  const urlParams = new URLSearchParams(window.location.search);
  const scan = urlParams.get('scan');
  document.getElementById('resultIframe').src = scan;
}
