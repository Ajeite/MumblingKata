/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/


function accum(s) {
	s.split("")
 let newStr  
  for(let i = 0; i > s.length;i++ ){
    newStr += newArr[i].repeat(i + 1) + '-'
  } return newStr
} 

