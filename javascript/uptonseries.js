var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
System.out.print("Enter a number upto which you want to print the terms in a series:")
var Count = readln();
var string =  "The terms in the series upto " + Count + " are"
var Term = 1;
for(var Multiple = 1; Term <= Count; Multiple++)
{
  Term = 1;
  for(var Counter = 1; Counter <= Multiple; Counter++)
  {
     Term = Term * Multiple
  }
  if(Term <= Count)
  {
    string  = string + " " + Term
  }
}
string = string + "."
print(string)
