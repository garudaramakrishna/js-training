function countWords(str) {
  var inputString = str.trim(); 
  var count = 0;
  if(inputString=='')
  {
    return 0;
  } 
 // var wordArray = inputString.split(' ');  
 // for(var i=0; i<wordArray.length; i++){
   // if(wordArray[i].trim().length > 0){
   // count = count+1;
   // }
 // }//return count;//inputString.split(' ').length;
  return inputString.split(/\s+/).length; }
