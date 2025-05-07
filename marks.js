const marks={tamil:94,english:98,maths:82,science:93,ss:98}
let count=0;
let failed;
for(i in marks){
    if(marks[i]<35||marks[i]>100){
        console.log("Grade E in " +i);
        console.log("You failed in "+i);
        failed=true;
    }
    count+=marks[i];
}
if(!failed){
console.log("Your total is "+count);
let total=Object.keys(marks).length*100;
let per=(count/total)*100;
console.log("Your percentage is "+per);
}


