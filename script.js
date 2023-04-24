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
    
    'trauma:5100',
    
    
  ],
};

// All time top gifter

const account2 = {
  movements: [
  
    // 'dania_hassam: unlimited',
    // 'editz_forme23: 35000',
    '@kimberly.51.p:70000',
    'mickaylagraf5:59300',
    'matthewb158:40500',
    'tiere_von_uns: 28000',
    'muliganbeauty:  25000',
    'vernovilla1:24400',
    't_roxy45:21800',
    'edits_alt4:18000',
    '@italiasian: 17800',

    '@kristee_anna22:  15000',

    'twinmiracles:12000',
    'benyoub: 10000',

    'sue652002:8000',
    'therealjoshmendez:7900',
    'jasminearely:7600',
    'kingkoopa11:7400',
    'starbrust_107: 7200',
    'brandonlol28: 6600',
    'missnala31:6100',
    't_roxy:6000',
    'terrie.rains:5000',
    'fnfmusic345:5000',
    'mikki_b72:5000',
    'tonyroberts194:4600',
    'jmrsp:4500',
    '@kadyaddison:4200',
    'mr._bling:4100',
    'jagga2244:4003',
    'kimberlygrace777:4000',
    'goldstartfamily:4000',
    '@jeremiahatro:3900',
    'loveleen_army:3600',
    'kazz61971:3000 ',
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

  
  const displaydiv=document.getElementById('Result')

  function displayArray() {
    let arrayContent = "";
    // add count
    let count = ''
    account1.movements.forEach((item, Index) => {
      arrayContent += `<p> ${Index + 1}:${item}</p>`;
      console.log(item);
    });
    displaydiv.innerHTML = arrayContent;
  }

  const displaydiv2=document.getElementById('Result2')
  function displayArray2() {
    let arrayContent = "";
    // add count
    let count = ''
    account2.movements.forEach((item, Index) => {
      arrayContent += `<p> ${Index + 1}:${item}</p>`;
      console.log(item);
    });
    displaydiv2.innerHTML = arrayContent;
  }