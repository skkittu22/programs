print("Enter a number upto which you want to print the series(1,4,27..):", terminator : "")
var Count = Int(readLine()!)!
var Multiple = 1
var Counter = 1
var Term = 1
print("The terms in the series upto \(Count) are", terminator : "")
while Term <= Count
{
  Term = 1
  Counter = 1
  while Counter <= Multiple
  {
    Term = Term * Multiple
    Counter = Counter + 1
  }
  if Term <= Count
  {
    print(" \(Term)", terminator : "")
  }
  Multiple = Multiple + 1
}
print(".")