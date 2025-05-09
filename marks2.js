marks=(htno,name,tamil,eng,maths,science,ss)=>{
    this.marks=[tamil,eng,maths,science,ss];
    this.htno=htno;
    this.name=name;
    this.tamil=tamil;
    this.eng=eng;
    this.maths=maths;
    this.science=science;
    this.ss=ss;
    let failed,total=0;
    console.log("Hallticket No:"+this.htno);
    console.log("Name:"+this.name);
    console.log("Tamil:"+this.tamil+" "+(this.tamil>=35?"P":"F"));
    console.log("English:"+this.eng+" "+(this.eng>=35?"P":"F"));
    console.log("Maths:"+this.maths+" "+(this.maths>=35?"P":"F"));
    console.log("Science:"+this.science+" "+(this.science>=35?"P":"F"));
    console.log("Social:"+this.ss+" "+(this.ss>=35?"P":"F"));
    for(i in this.marks){
        if(this.marks[i]<35){
            failed=true;
        }
        total+=this.marks[i];
    }
    let tm=this.marks.length*100;
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