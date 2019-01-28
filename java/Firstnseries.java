import java.util.*;
class Firstnseries
{
  public static void main(String[] args)
  {
      System.out.print("How many term in a series do you want to print?");
      Scanner sc = new Scanner(System.in);
      int Count = sc.nextInt();
      System.out.print("The first " + Count + " terms in a series are");
      int Term = 1;
      for(int Multiple = 1; Multiple <= Count; Multiple++)
      {
         Term = 1;
         for(int Counter = 1; Counter <= Multiple; Counter++)
         {
           Term = Term * Multiple;
         }
         System.out.print(" " + Term);
      }
      System.out.print(".\n");
  }
}