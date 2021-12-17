const isCreditCardNumberValid = (cardNumber) => {
    let status= true
    let counter= 0
    let sumNumbers= 0
    const strCardNumber=String(cardNumber)
    const length=strCardNumber.length
    for (let index = 0; index < length; index++) {
        let eachString= cardNumber.slice(index,index+1)
        let checkInt=parseInt(eachString)
        if(eachString==="-"){
        }else if(isNaN(checkInt)){
          status=false
        }else{
          counter=counter+1
          sumNumbers= checkInt+ sumNumbers
        }
    }
    if(counter!=16 || sumNumbers<16){
      status=false
    }
    if((cardNumber.slice(length-1,length))%2!=0){
      status=false
    }
    console.log(status)
}
isCreditCardNumberValid("11213234-123-23-238")
