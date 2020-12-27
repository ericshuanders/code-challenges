// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
 
  
    if (str.includes(',')){
       return false
     }
   const array=str.split('.')
   console.log(array)
   
     if(array.length!==4){
       return false
     }
   
   const newArray= array.filter((item)=>{
    return item.length>1 && item[0]==='0'
       
     
   })
   console.log(newArray)
   if(newArray.length>0){
     return false
   }
   const regEx = /^[0-9]+$/
   if (array.every((item)=>{
     return regEx.test(item)
   })===false){
     return false
   }
   if (array.every((item)=>{
     return item >=0 && item<=255
   })===false){
     return false
   }
   else{
     return true
   }
   }