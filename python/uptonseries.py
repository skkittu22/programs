Count = int(input("Enter a number upto which you want to print the series:"))
Multiple = 1
Term = 1
print('The terms in the series upto {0} are' .format(Count), end = "")
while(Term <= Count):
  Term = 1
  for Counter in range(1, Multiple + 1):
    Term = Term * Multiple
  if(Term <= Count):
    print("", Term, end = "")
  Multiple = Multiple + 1
print(".")
