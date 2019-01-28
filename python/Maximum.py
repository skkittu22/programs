Numbers = []
Size = int(input("Among how many numbers do you want to find the maximum?"))
Numbers.append(int(input("Enter the first number:")))
for Counter in range(1, Size):
  Numbers.append(int(input("Enter the next number:")))
Max = Numbers[0]
for Counter in range(1, Size):
  if(Max < Numbers[Counter]):
    Max = Numbers[Counter]
print('The maximum among {0} numbers is {1}.' .format(Size, Max))