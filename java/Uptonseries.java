import java.util.*;
class Uptonseries
{
  public static void main(String[] args)
  {
      System.out.print("Enter a number upto which you want to print the terms in a series:");
      Scanner sc = new Scanner(System.in);
      int Count = sc.nextInt();
      System.out.print("The terms in the series upto " + Count + " are");
      int Term = 1;
      for(int Multiple = 1; Term <= Count; Multiple++)
      {
          Term = 1;
          for(int Counter = 1; Counter <= Multiple; Counter++)
          {
             Term = Term * Multiple;
          }
          if(Term <= Count)
          {
             System.out.print(" " + Term);
          }
      }
      System.out.print(".\n");
  }
}