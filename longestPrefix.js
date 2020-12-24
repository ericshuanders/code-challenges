//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

//My solution: 
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return '';
  const arrays = strs.map((string)=>string.split(''))
 
  const answer = []
  for (let i=0; i<arrays[0].length; i++){
    if(arrays.every((array)=>array[i]===arrays[0][i])===true){
      answer.push(arrays[0][i])
    } else{
        answer.push('')
        break
    }
  }
  return answer.join('')
}
