function main()
{
    let n=78;
    let factorial=1;
    //iterating the loop to calculate factorial
    for(let i=1;i<=n;i++)
    {
        factorial= factorial*i;
    }
    console.log("factorial for "+ n+" is: "+factorial);
}
main();