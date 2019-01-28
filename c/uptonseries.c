#include <stdio.h>

int main(void)
{
  int Count, Multiple, Counter, Term = 1;
  printf("Enter a number upto which you want to print the terms in a series:");
  scanf("%d", &Count);
  printf("The terms in the series upto %d are", Count);
  for(Multiple = 1; Term <= Count; Multiple++)
  {
      Term = 1;
      for(Counter = 1; Counter <= Multiple; Counter++)
      {
         Term = Term * Multiple;
      }
      if(Term <= Count)
      {
         printf(" %d", Term);
      }
  }
  printf(".\n");
  return 0;
}