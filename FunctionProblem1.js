function main()
{
    //taking input from the user about reading type of conversion
    console.log("Please enter 1 for converting farheniet to celcius\npress 2 for converting celcius to farheniet");
    conso.log("Entering 2 to convert celcius to fahrenheit");
    let n= 2;
    switch(n)
    {
        case 1:
            farehnietToCelcius();
            break;
        case 2:
            CelciusTofarehniet();
            break;
        default:
            console.log("you entered incorrect input");
            break;
    }
}
function farehnietToCelcius()
{
    console.log("Please enter farehniets temperature");
    console.log("Entering 120F")
    let degF= 120;
    if(degF>=32 && degF<=212 )
    {
    let degC= (degF-32)*(5/9);
    console.log("celcius: "+degC);
    }
    else
    {
        console.log("farheniet temperature is not in correct range");
    }
}
function CelciusTofarehniet()
{
    console.log("Please enter celcius temperature");
    console.log("Entering 43C")
    let degC= 43;
    if(degC>=0 && degC<=100 )
    {
    let degF= (degC*(9/5))+32;
    console.log("celcius: "+degF);
    }
    else
    {
        console.log("celcius temperature is not in correct range");
    }
}
main();