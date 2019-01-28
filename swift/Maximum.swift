var Numbers = [Int]()
print("To find the maximum of 10 numbers, enter the first number:", terminator : "")
Numbers.append(Int(readLine()!)!)
var Counter = 0
for _ in 1...9
{
  print("Enter the next number:", terminator : "")
  Numbers.append(Int(readLine()!)!)
}
var Max = Numbers[0]
for Counter in 0...9
{
  if(Max < Numbers[Counter])
  {
    Max = Numbers[Counter]
  }
}
print("The maximum of ", terminator : "")
for Counter in 0...9
{
  print(" \(Numbers[Counter])", terminator : "")
}
print(" is \(Max).")