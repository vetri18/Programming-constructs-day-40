function main()
{
    console.log("checking prime no.");
    let n= 65;
    //check is used to validate if no is divided by any iterator
    let check=false;
    //iterating loop upto n/2
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        //if n is divisible by any iterator, then n is not prime no
        if(n%i==0)
        {
            check= true;
            console.log(n +" is not a prime number");
            break;
        }
    }
    //if check is still false
    //then n is prime number.
    if(!check)
    {
        console.log(n+" is a prime number.");
    }
}
main();