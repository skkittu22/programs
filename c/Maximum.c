#include <stdio.h>

int main(void)
{
  int Numbers[20], Counter, Maximum, Size;
  printf("Among how many numbers do you want to find the maximum?");
  scanf("%d", &Size);
  printf("Enter the first number:");
  scanf("%d", &Numbers[0]);
  for(Counter = 1; Counter < Size; Counter++)
  {
     printf("Enter the next number:");
     scanf("%d", &Numbers[Counter]);
  }
  Maximum = Numbers[0];
  for(Counter = 1; Counter < Size; Counter++)
  {
    if(Maximum < Numbers[Counter])
    {
      Maximum = Numbers[Counter];
    }
  }
  printf("The maximum of %d numbers is %d.\n", Size, Maximum);
  return 0;
}