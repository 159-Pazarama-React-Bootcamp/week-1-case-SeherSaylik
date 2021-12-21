
window.onload = function () {
  const isCreditCardNumberValid = (cardNumber) => {
    // status kartın valid olup olmadığı durumunu tutar
    let status= true
    // counter girilen inputtaki rakamların 16'dan büyük olup olmadığını kontrol eder
    let counter= 0
    // sumNumbers rakamlarının toplamının 16dan büyük olup olmadığını kontrol eder
    let sumNumbers= 0
    let sameNumCount= 0
    // Girilen inputun integer olması durumunda stringe çevir
    const strCardNumber=String(cardNumber)
    const length=strCardNumber.length
    // for loop her bir stringi tek tek inceler
    for (let index = 0; index < length; index++) {
        let eachString= cardNumber.slice(index,index+1)
        let checkInt=parseInt(eachString)
        //İlgili string "-" ise görmezden gelir
        if(eachString==="-"){
          // İlgili string NaN yani harf veya özel karakter varsa status false (valid değil)
        }else if(isNaN(checkInt)){
          status=false
        }else{
          //İlgili stringi inputtaki tüm stringlerle karşılaştırır
          for (let index = 0; index < length; index++){
              if(eachString===cardNumber.slice(index,index+1)){
                //Aynı olan sayıları toplar
                sameNumCount=sameNumCount+1
                if(sameNumCount>13){
                    status=false
                }
              }
              
          }
          sameNumCount=0
          counter=counter+1
          sumNumbers= checkInt+ sumNumbers
        }
    }
    if(counter!=16 || sumNumbers<16){
      status=false
    }
    //Son rakamın çift olup olmadığını kontrol eder 2 ile bölümünden kalana bakarak
    if((cardNumber.slice(length-1,length))%2!=0){
      status=false
    }
    return status
  }

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

securitycode.addEventListener('input', function () {
  if (securitycode.value.length == 0) {
      document.getElementById('svgsecurity').innerHTML = '985';
  } else {
      document.getElementById('svgsecurity').innerHTML = this.value;
  }
});
};