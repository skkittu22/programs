var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
System.out.print("How many term in a series do you want to print?");
var Count = readln(Count);
var string = "The first " + Count + " terms in a series are";
var Term = 1;
for(var Multiple = 1; Multiple <= Count; Multiple++)
{
  Term = 1;
  for(var Counter = 1; Counter <= Multiple; Counter++)
  {
    Term = Term * Multiple;
  }
  string = string + " " + Term;
}
string = string + ".";
print(string);
