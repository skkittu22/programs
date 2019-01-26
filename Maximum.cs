// A Hello World! program in C#.
using System;
namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
              Console.Write("Among how many numbers do you want to find the maximum?");
              var Size = Convert.ToInt32(Console.ReadLine());
              int[] Numbers = new int[Size];
              Console.Write("Enter the first number:");
              Numbers[0] = Convert.ToInt32(Console.ReadLine());
              for(int Counter = 1; Counter < Size; Counter++)
              {
                 Console.Write("Enter the next number:");
                 Numbers[Counter] = Convert.ToInt32(Console.ReadLine());
              }
              int Max=Numbers[0];
              for(int Counter = 1; Counter < Size; Counter++)
              {
                if(Max < Numbers[Counter])
                {
                  Max = Numbers[Counter];
                }
              }
              Console.Write("The maximum of " + Size + " numbers is " + Max + ".");
        }
    }
}