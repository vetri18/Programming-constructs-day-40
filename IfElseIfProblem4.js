let inputOne= 67;
let inputTwo= 43;
let inputThree= 65;
//calculating different results from different formulas
resultOne= inputOne+inputTwo*inputThree;
resultTwo= inputThree+inputOne/inputTwo;
resultThree= inputOne%inputTwo+inputThree;
resultFour= inputOne*inputTwo+inputThree;
//calculating max and min 
let maxFromResult= Math.max(resultOne,resultTwo,resultThree,resultFour);
let minFromResult= Math.min(resultOne,resultTwo,resultThree,resultFour);
//prinitng result
console.log("Max result from forumlas "+maxFromResult);
console.log("Min result from formulas "+minFromResult);