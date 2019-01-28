var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
var Numbers = [];
System.out.print("Among how many numbers do you want to find the maximum?");
var Size = readln();
Numbers.length = Size;
System.out.print("Enter the first number:");
Numbers[0] = readln();
for(var Counter = 1; Counter < Size; Counter++)
{
  System.out.print("Enter the next number:");
  Numbers[Counter] = readln();
}
var string = "The " + Size + " numbers are "
var Max = Numbers[0]
string = string + " " + Numbers[0]
for(var Counter = 1; Counter < Size; Counter++)
{
  string = string + " " + Numbers[Counter]
  if(Max < Numbers[Counter])
  {
    Max = Numbers[Counter]
  }
}
string = string + " and the maximum is " + Max + "."
print(string)
