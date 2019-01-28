#include <stdio.h>

int main(void) 
{
  int Count, Term = 1, Counter, Multiple;
  printf("How many term in a series do you want to print?");
  scanf("%d", &Count);
  printf("The first %d terms in a series are", Count);
  for(Multiple = 1; Multiple <= Count; Multiple++)
  {
     Term = 1;
     for(Counter = 1; Counter <= Multiple; Counter++)
     {
       Term = Term * Multiple;
     }
     printf(" %d", Term);
  }
  printf(".\n");
  return 0;
}