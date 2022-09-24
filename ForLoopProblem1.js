function main()
{
    let n= 5;
    //iterating to calculate power and writing into file
    for(let i=0;i<n;i++)
    {
        let x= power(i);
        console.log("Element at "+(i+1)+"th position is: "+x);
    }
}
//function to calculate power
function power(a)
{
    let powerResult=0;
    //loop to iterate upto a and calculate power
    for(let j=0;j<=a;j++)
    {
        if(j==0)
        {
            powerResult=1;
        }
        else
            powerResult= 2*powerResult;
    }
    return powerResult;
}
main();