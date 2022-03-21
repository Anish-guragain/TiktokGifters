'use strict';

const animate = document.getElementsByClassName('logo');

anime({
  targets: animate,
  zIndex: [{ value: -1 }],
  translateY: [
    { value: -200, duration: 500 },
    { value: 0, duration: 3000 },
  ],
  rotate: {
    value: '1turn',
  },
  opacity: [{ value: [0, 1], duration: 2000 }],
  loop: false,
});

//Today Top gifter

const account1 = {
  movements: [
    0,
    'divineemperas:2300',
    'kingbigcountry:1700',
    'unique:1300',
    'anisha:100',
  ],
};

// All time top gifter

const account2 = {
  movements: [
    0,
    // 'dania_hassam: unlimited',
    // 'editz_forme23: 35000',
    'mickaylagraf5:59300',
    'matthewb158:40500',
    'tiere_von_uns: 28000',
    't_roxy45:18500',
    'muliganbeauty:  25000',
    '@italiasian: 17800',
    '@kristee_anna22:  15000',

    'twinmiracles:12000',
    'benyoub: 10000',

    'sue652002:8000',
    'jasminearely:7600',
    'starbrust_107: 7200',
    'brandonlol28: 6600',
    'missnala31:6100',
    't_roxy:6000',
    'terrie.rains:5000',
    'fnfmusic345:5000',
    'mikki_b72:5000',
    'jmrsp:4500',
    'mr._bling:4100',
    'jagga2244:4003',
    'kimberlygrace777:4000',
    'goldstartfamily:4000',

    'loveleen_army:3600',
    'gon___1:3500',
    'batg4rl: 3400',
    'miamia_jelouspotato:3000',

    'anika_grey:3600',
    'maddyjermy:2500',
    '@hillarybenton:2100',
    'aboveall313:1300',
    '@joeyisno2yt:  1050',
    '@marshallmoore:  1000',
    '@kristee_anna22:  1000',
    '@joeyisno2yt:  1600',
  ],
};

var x = 0;
var array;

function add_element_to_array() {
  array = account1.movements;
  x++;
  document.getElementById('button1').value = '';
}

function display_array() {
  var e = '';

  for (var y = 1; y < array.length; y++) {
    e += y + ' : ' + array[y] + '<br/>';
  }
  document.getElementById('Result').innerHTML = e;
}

///////////////////////////////

var xa = 0;
var array2;

function add_element_to_array2() {
  array2 = account2.movements;
  xa++;
  document.getElementById('button2').value = '';
}

function display_array2() {
  var ee = '';

  for (var y = 1; y < array2.length; y++) {
    ee += y + ' : ' + array2[y] + '<br/>';
  }
  document.getElementById('Result2').innerHTML = ee;
}
