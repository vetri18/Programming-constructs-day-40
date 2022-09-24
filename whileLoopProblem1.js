function main()
{
    console.log("Please enter the no. below which power for 2 is needed to be find out");
    console.log("Entering 12");
    let n = 12;
    //iterating to calculate power and writing into file
    let i=0;
    let x=0;
    //while loop to check two conditions
   while(i<n && power(i)<=256)
    {
         x= power(i);
        console.log("Element at "+(i+1)+"th position is: "+x);
        i++;
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