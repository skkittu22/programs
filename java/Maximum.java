import java.util.*;
class Maximum
{
  public static void main(String[] args)
  {
      System.out.print("Among how many numbers do you want to find the maximum?");
      Scanner sc = new Scanner(System.in);
      int Size = sc.nextInt();
      int Numbers[] = new int[Size];
      System.out.print("Enter the first number:");
      Numbers[0] = sc.nextInt();
      for(int Counter = 1; Counter < Size; Counter++)
      {
         System.out.print("Enter the next number:");
         Numbers[Counter] = sc.nextInt();
      }
      int Max=Numbers[0];
      for(int Counter = 1; Counter < Size; Counter++)
      {
        if(Max < Numbers[Counter])
        {
          Max = Numbers[Counter];
        }
      }
      System.out.println("The maximum of " + Size + " numbers is " + Max + ".");
  }
}