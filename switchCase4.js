function main()
{
    console.log("Please enter 1 for converting feet to inch\nplease enter 2 for converting inch to feet\nPleas enter 3 for converting feet to meter\nPlease enter 4 for converting meter to feet");
    console.log("Entering 2");
    let n= 2;
    switch(n)
    {
        //case 1 for feet to inches
        case 1:
            console.log("Please enter feets to be converted to inches");
            let feet= parseInt(await io.read());
            //1 feet =12 inches
            console.log("inches: "+feet*12);
            break;
        //case 2 for inches to feet
        case 2:
            console.log("Please enter inches to be converted to feet");
            let inches= parseInt(await io.read());
            //1 inch= 1/12 feets
            console.log("feet: "+inches/12);
            break;
        //case 3 for meters to feet
        case 3:
            console.log("Please enter meters to be converted to feet");
            let meters= parseInt(await io.read());
            //1 meters= 3.28 feets
            console.log("feet: "+meters*3.28084);
            break;
        //case 4 for feet to meters
         case 4:
            console.log("Please enter feets to be converted to meters");
            let feets= parseInt(await io.read());
            //1 feet= 1/3.28 or 0.3048 meters
             console.log("meters: "+feets/3.28084);
             break;
        //default for incorrect input
        default:
            console.log("you entered incorrect input");
            break;
    }
}
main();