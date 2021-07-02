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
  movements: [0, '@joeyisno2yt:  1050', '@kristee_anna22:  1000'],
};

// All time top gifter

const account2 = {
  movements: [0, '@joeyisno2yt:  1600'],
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
