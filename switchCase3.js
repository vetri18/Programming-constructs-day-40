let input = 54;
//defining digit position for getting position of digits in the input
let digitPosition=0;
while(input>0)
{
    digitPosition+=1;
    //modulus of result is taken and printed for its place
    let modulusResult= input%10;
    //input is modified 
    input= Math.floor(input/10);
    //printing the digits 
    console.log('Digit at '+digitPosition+' place is: '+modulusResult);
}