function main()
{
    let n= 13;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        total+= Reciprocal(i);
    }
    console.log("Harmonic sum is: "+total);
}
function Reciprocal(a)
{
    return 1/a;
}
main();