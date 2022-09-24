//initial money of gambler
let totalMoney=100;
//variables defined for count
let winCount=0;
let betCount=0;
//iterating until either money becomes 0 or money becomes double
while(totalMoney!=0 && totalMoney!=200)
{
    //taking random no. for finding out win or lose
    bet= Math.floor(Math.random()*10)%2;
    //if gambler wins, 1 is added to money
    if(bet==1)
    {
        winCount++;
        betCount++;
        totalMoney+=1;
    }
    //if gambler loses, 1 is subtracted from money
    else
    {
        totalMoney-=1;
        betCount++;
    }
}
//printing total money, win count and bet count.
console.log("total Money: "+totalMoney);
console.log("winning count: "+winCount);
console.log("bet count: "+betCount);