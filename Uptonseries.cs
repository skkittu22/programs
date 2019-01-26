// A Hello World! program in C#.
using System;
namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
              Console.Write("Enter a number upto which you want to print the terms in a series:");
              int Count = Convert.ToInt32(Console.ReadLine());
              Console.Write("The terms in the series upto " + Count + " are");
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
                     Console.Write(" " + Term);
                  }
              }
              Console.Write(".");
              Console.WriteLine();
        }
    }
}