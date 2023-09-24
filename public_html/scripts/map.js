// https://leafletjs.com/

var map = L.map('map').setView([45.07298326157317, 7.681474649558884], 13); // Coordinate di Torino

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Creare un marker e un popup personalizzato
var marker_1 = L.marker([45.07298326157317, 7.681474649558884]).addTo(map);
var marker_2 = L.marker([45.07419687600807, 7.679567877228008]).addTo(map);
var marker_3 = L.marker([45.072016928546276, 7.67212577449267]).addTo(map);
var marker_4 = L.marker([45.070963483803986, 7.658176648898786]).addTo(map);
var marker_5 = L.marker([45.06890590057288, 7.65957527833981]).addTo(map);
var marker_6 = L.marker([45.066367231945556, 7.689141530876683]).addTo(map);
var marker_7 = L.marker([45.07027426303028, 7.661858420333069]).addTo(map);
var marker_8 = L.marker([45.071610701161234, 7.6860208109636305]).addTo(map);
var marker_9 = L.marker([45.06683598964271, 7.679301102045202]).addTo(map);

// Personalizzare il contenuto del popup
marker_1.bindPopup('<b>Piazza Palazzo di Città</b><br><a href="../pages/quiz-1.html">Clicca qui per andare al quiz</a>');
marker_2.bindPopup('<b>Via corte d’Appello</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_3.bindPopup('<b>Caserma Cernaia</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_4.bindPopup('<b>Palazzo di Giustizia</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_5.bindPopup('<b>Museo carceri le nuove</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_6.bindPopup('<b>Piazza Carlina</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_7.bindPopup('<b>Giardino Lidia Poet</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_8.bindPopup('<b>Piazza Castello</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');
marker_9.bindPopup('<b>Ispettorato del Lavoro</b><br><a href="/link-alla-tua-pagina">Clicca qui per andare al quiz</a>');

// Aggiungere il marker al layer della mappa
marker_1.addTo(map);
marker_2.addTo(map);
marker_3.addTo(map);
marker_4.addTo(map);
marker_5.addTo(map);
marker_6.addTo(map);
marker_7.addTo(map);
marker_8.addTo(map);
marker_9.addTo(map);




