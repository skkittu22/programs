// A Hello World! program in C#.
using System;
   public class Firstnseries
    {
        static void Main(String[] args) 
        {
           Console.Write("How many term in a series do you want to print?");
      int Count = Convert.ToInt32(Console.ReadLine());
      Console.Write("The first " + Count + " terms in a series are");
      int Term = 1;
      for(int Multiple = 1; Multiple <= Count; Multiple++)
      {
         Term = 1;
         for(int Counter = 1; Counter <= Multiple; Counter++)
         {
           Term = Term * Multiple;
         }
         Console.Write(" " + Term);
      }
      Console.Write(".");
              
        }
    }
