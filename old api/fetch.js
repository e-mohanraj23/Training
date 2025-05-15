const { model } = require('./schema.js');
const {connection}=require('./connection.js');
connection();
async function fetchStudent(htno) {
  const student = await model.findOne({ htno });
  if (student) {
    console.log('Hallticket No:'+student.htno);
    console.log('Name:'+student.name);
    console.log("Tamil:"+student.subjects.tamil+" "+(student.subjects.tamil>=35?"P":"F"));
    console.log("English:"+student.subjects.english+" "+(student.subjects.english>=35?"P":"F"));
    console.log("Maths:"+student.subjects.maths+" "+(student.subjects.maths>=35?"P":"F"));
    console.log("Science:"+student.subjects.science+" "+(student.subjects.science>=35?"P":"F"));
    console.log("Social:"+student.subjects.ss+" "+(student.subjects.ss>=35?"P":"F"));
    let failed= false,subcount=0,total=0;
    for (let mark of Object.values(student.subjects)){
        if (mark < 35) {
            failed = true;
            break;
        }
        total += mark;
        subcount++;
    }
    let tm=subcount*100;
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
    else {
    console.log('No student found with htno:', htno);
     }
}
fetchStudent(108);