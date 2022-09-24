let headCount=0;
let tailCount=0;
//iterating until any count of head or tail reaches 11.
while(headCount<=11 && tailCount<=11)
{
    //defining math floor and math random for getting random number between 0 or 1.
    let headOrTails= Math.floor(Math.random()*10)%2;
    //if random no generated is 0, then heads
    if(headOrTails==0)
    {
        console.log("Heads");
        console.log("count of heads: "+headCount);
        headCount++;
    }
    //if random no generated is 1, then tails
    else
    {
        console.log("Tails");
        console.log("count for tails: "+tailCount);
        tailCount++;
    }
}