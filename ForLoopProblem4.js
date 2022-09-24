function main()
{
    let n1= 23;
    let n2= 999;
    if(n1<=n2)
    {
        //iterating over the range
        for(let range=n1;range<=n2;range++)
        {
            prime(range);
        }
    }
    else
    {
        console.log("you entered incorrect range");
    }
} function prime(n)
{
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