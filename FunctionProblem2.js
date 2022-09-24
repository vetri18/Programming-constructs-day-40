function main()
{
    //taking input from the user for checking pallindrome
    console.log("Please enter the number to check for pallindrome");
    console.log("Entering 63");
    let n= 63;
    //calling method pallindrome to get reverse number
    let reverseNumber=pallindrome(n);
    //checking if reversed number is equal to actual number
    if(reverseNumber==n)
    {
        console.log(n+" is a pallindrome");
    }
    else
    {
        console.log(n+" is not a pallindrome");
    }
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