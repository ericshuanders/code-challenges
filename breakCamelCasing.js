// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  
  const re = /(?=[A-Z])/
  const array = string.split(re)

 const newArray=array.map((item)=>{
   let arrayItem=item.split('');
   arrayItem.unshift(' ')
   return arrayItem 
 })
 
  newArray[0].shift()
  const answerArray = newArray.map((item)=> item.join(''))
  return answerArray.join('')
}