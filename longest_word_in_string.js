function findLongestWord(str) {
  var arrstr = str.split(" ");
  
 var i=1,longstr=arrstr[0].length;
  while(i<arrstr.length)
    {
      if(arrstr[i].length>longstr)
        longstr=arrstr[i].length;
      
      ++i;
    }
  return longstr;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");

