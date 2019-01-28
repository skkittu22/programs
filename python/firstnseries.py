Count = int(input("How many terms in a series do you want to print?"))
print('The first {0} terms in the series are:' .format(Count), end = "")
Multiple = 1
while(Multiple <= Count):
  Term = 1
  for Counter in range(1, Multiple + 1):
    Term = Term * Multiple
  print ("", Term, end = "")
  Multiple = Multiple + 1
print(".")