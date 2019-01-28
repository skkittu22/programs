print("How many series(1,4,27..) do you want to print?", terminator : "")
var Count = Int(readLine()!)!
var Multiple = 1
var Counter = 1
var Term = 1
print("The first \(Count) terms in the series are", terminator : "")
while Multiple <= Count
{
  Term = 1
  Counter = 1
  while Counter <= Multiple
  {
    Term = Term * Multiple
    Counter = Counter + 1
  }
  print(" \(Term)", terminator : "")
  Multiple = Multiple + 1
}
print(".")