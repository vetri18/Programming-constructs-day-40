function main()
{
    console.log("Please enter the number between 1 and 100");
    console.log("Entering 45");
    let n = 45;
    //a is lower limit
    let a=0;
    //b is upper limit
    let b=100;
    //checking for correct range
    if(n>a && n<=b)
    {
        //for binary search, taking mean of a and b.
        let c= (a+b/2);
        //iterating loop for finding magic number
        while(c!=n)
        {
            //printing mean
            console.log(c);
            //if n is greater than mean, lower limit is assigned average value
            if(n>c)
            {
               a= c;
            }
            //if n is lower than mean, upper limit is assigned average value
            else
            {
                b=c;
            }
            c= Math.round((a+b)/2);
        }
        //printing number
        console.log("THe no. you thought was: "+ c);
    }
    else
    {
        console.log("The no. entered is not in correct range");
    }
}
main();