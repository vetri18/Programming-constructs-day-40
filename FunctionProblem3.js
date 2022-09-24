function main()
{
    console.log("Please enter the no. to check for prime");
    console.log("Entering 57");
    let n= 57;
    //check is used to validate if no is divided by any iterator
    let check=primeCheck(n);
    //if no is prime, then pallindrome is checked
    if(check)
    {
        console.log("checking if the prime no. is also pallindrome");
        //getting reversed no by calling function pallindrome
        let ReversedNumber= pallindrome(n);
        //if reversed no is equal to actual no then no is pallindrome
        if(ReversedNumber==n)
        {
            //If a no is a pallindrome, then revered no will also be prime, as both reverse no and actual no are same.
            console.log(n +" is a pallindrome");
        }
        else
        {
            console.log(n+ " is not a pallindrome");
        }
        //checking if reversed no is also prime, even if it is not a pallindrome
        //pallindrome will always be prime, as reversed no is same as actual no
        console.log("checking if pallindrome is also prime or not");
        primeCheck(ReversedNumber);
        //let checkPallindrome= primeCheck(ReversedNumber);

    }


    
}
function primeCheck(n)
{
        //iterating loop upto n/2
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        //if n is divisible by any iterator, then n is not prime no
        if(n%i==0)
        {
            console.log(n +" is not a prime number");
            return false;
        }
    }
    //if loop iteration is complete
    //then n is prime number.
    console.log(n +" is a prime number");
    return true;
}
function pallindrome(number)
{
    //calling method calculate no of digits to get count of digits
    noOfDigits= calculateNoOfDigits(number);
    //console.log(noOfDigits);
    //defining variable for getting position of digit in reversed number
    let positionForReverseNumber=noOfDigits;
    let sum=0;
    while(number>0)
    {
        //getting the last digit
        modulus= number%10;
        //changing number and removing last digit from number
        number= Math.floor(number/10);
        //for getting reverse number, modulus need to be multiplied by 10 multiple times to become first digit
        //below calculation gives no of times no needs to be multiplied
        positionForReverseNumber= noOfDigits-1;
        //calling function for making last digit of actual no to first no and reversing the no.
        ReversedNumber= ReversingNumber(modulus,positionForReverseNumber);
        //adding values to get final reverse no.
        sum= sum+ReversedNumber;
        //as no. is divided by 10 and rounded up to lower side, last digit is removed, and decreasing count by 1.
        noOfDigits--;
    }
    console.log("Reversed number: "+sum);
    return sum;
    
}
function calculateNoOfDigits(number)
{
    let digitCount=0;
    //iterating until number is greater than 0
    while(number>0)
    {
        digitCount++;
        //as there are no data types, exact calculation is returned by division and not int
        //hence math.floor is used
        number= Math.floor(number/10);
    }
    //returning digit count
    return digitCount;
}
function ReversingNumber(modulus,positionForReverseNumber)
{
    //multiplying the digit by 10, upto positionforreversenumber, to change the positon of digits in reversed number.
    for(i=1;i<=positionForReverseNumber;i++)
    {
        modulus= modulus*10;
    }
    //returning new number reversed position.
    return modulus;
}
main();