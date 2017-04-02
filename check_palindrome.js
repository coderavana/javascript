
function palindrome(str) {
  var newc = str.replace(/[^A-Za-z0-9]/g, '');
  newc = newc.toLowerCase();
  var newr = newc.split('').reverse().join('');
  if(newr===newc)
  return true;
  else
    return false;
}
palindrome("A man, a plan, a canal. Panama");

