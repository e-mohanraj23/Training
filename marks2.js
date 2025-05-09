marks=(htno,name,tamil,eng,maths,science,ss)=>{
    marks=[tamil,eng,maths,science,ss];
    htno=htno;
    name=name;
    tamil=tamil;
    eng=eng;
    maths=maths;
    science=science;
    ss=ss;
    let failed,total=0;
    console.log("Hallticket No:"+htno);
    console.log("Name:"+name);
    console.log("Tamil:"+tamil+" "+(tamil>=35?"P":"F"));
    console.log("English:"+eng+" "+(eng>=35?"P":"F"));
    console.log("Maths:"+maths+" "+(maths>=35?"P":"F"));
    console.log("Science:"+science+" "+(science>=35?"P":"F"));
    console.log("Social:"+ss+" "+(ss>=35?"P":"F"));
    for(i in marks){
        if(marks[i]<35){
            failed=true;
        }
        total+=marks[i];
    }
    let tm=marks.length*100;
    let per=(total/tm)*100;
    
    if(!failed){
       const result=()=>{
            console.log("Result:PASS");
            console.log("Total:"+total);
            console.log("Percentage:"+per);
            let grade;
            if(per>=80)grade="A";
            else if(per>=70&&per<90) grade="B";
            else if(per>=60&&per<70) grade="C";
            else if(per>=35&&per<60) grade="D";
            console.log("Grade:"+grade);
        }
        return result();
    }else{
        const result=()=>{
            console.log("Result:FAIL");
            console.log("Grade:E");
        }
        return result();
        
    }
}
const result=marks(111,'Mohan',24,98,82,93,98);

const a =  {htno:12,name:"aa"}

 const {htno,name} = a