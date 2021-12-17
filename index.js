window.onload = function () {

  const name = document.getElementById('name');
  const cardnumber = document.getElementById('cardnumber');
  const expirationdate = document.getElementById('expirationdate');
  const securitycode = document.getElementById('securitycode');


  //On Input Change Events
name.addEventListener('input', function () {
  if (name.value.length == 0) {
      document.getElementById('svgname').innerHTML = 'John Doe';
      document.getElementById('svgnameback').innerHTML = 'John Doe';
  } else {
      document.getElementById('svgname').innerHTML = this.value;
      document.getElementById('svgnameback').innerHTML = this.value;
  }
});

cardnumber.addEventListener('input', function () {
  if (cardnumber.value.length == 0) {
    document.getElementById('svgnumber').innerHTML = '0123 4567 8910 1112';
} else {
    document.getElementById('svgnumber').innerHTML = this.value;
}
})

expirationdate.addEventListener('input', function () {
  if (expirationdate.value.length == 0) {
    document.getElementById('svgexpire').innerHTML = '01/23';
} else {
    document.getElementById('svgexpire').innerHTML = this.value;
}
})

securitycode.addEventListener('input', function () {
  if (securitycode.value.length == 0) {
      document.getElementById('svgsecurity').innerHTML = '985';
  } else {
      document.getElementById('svgsecurity').innerHTML = this.value;
  }
});

//On Focus Events
name.addEventListener('focus', function () {
  document.querySelector('.creditcard').classList.remove('flipped');
});

cardnumber.addEventListener('focus', function () {
  document.querySelector('.creditcard').classList.remove('flipped');
});

expirationdate.addEventListener('focus', function () {
  document.querySelector('.creditcard').classList.remove('flipped');
});

securitycode.addEventListener('focus', function () {
  document.querySelector('.creditcard').classList.add('flipped');
});
};