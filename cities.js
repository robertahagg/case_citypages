function toggleInfoText() {
  var infoText = document.getElementById('infoText');
  if (infoText.style.display === 'none') {
    infoText.style.display = 'block';
  } else {
    infoText.style.display = 'none';
  }
}

function hideInfoText() {
  var infoText = document.getElementById('infoText');
  infoText.style.display = 'none';
}

function onLoad() {
  // When JS in enabled it will be hidden from the start.
  hideInfoText();
}

function search() {
  var searchWord = document.getElementById('seachField').value;
  var cityData = searchBackend(searchWord);
  updateDom(cityData);

  return false;
}

function updateDom(city) {
  document.getElementById('cityName').innerHTML = city.cityName;

  document.getElementById('title').innerHTML = city.blueBox.title;
  document.getElementById('body').innerHTML = city.blueBox.body;

  document.getElementById('boxSmallTitle').innerHTML = city.whiteBoxSmall.title;
  document.getElementById('boxSmallBody').innerHTML = city.whiteBoxSmall.body;

  document.getElementById('whiteBoxBigTitle').innerHTML =
    city.whiteBoxBig.title;
  document.getElementById('whiteBoxBigBody').innerHTML = city.whiteBoxBig.body;
  document.getElementById('boxImg').src = city.whiteBoxBig.img;

  updateOrder(city.blueBox.order, 'bluePuff');
  updateOrder(city.whiteBoxSmall.order, 'whitePuff');
  updateOrder(city.whiteBoxBig.order, 'whiteBigPuff');
}

function updateOrder(order, id) {
  var classList = document.getElementById(id).classList;

  classList.remove('puffFirst', 'puffSecond', 'puffThird');

  if (order === 1) {
    classList.add('puffFirst');
  } else if (order === 2) {
    classList.add('puffSecond');
  } else {
    classList.add('puffThird');
  }
}

window.onload = onLoad;
