const saveStudent=(data)=>{
    const submarks=[data.tamil,data.english,data.maths,data.science,data.ss,]
        let grade,result,failed= false,subcount=0,total=0,percentage=0;
          console.log("Hallticket No:"+data.htno);
          console.log("Name:"+data.name);
          console.log("Tamil:"+submarks[0]+" "+(submarks[0]>=35?"P":"F"));
          console.log("English:"+submarks[1]+" "+(submarks[1]>=35?"P":"F"));
          console.log("Maths:"+submarks[2]+" "+(submarks[2]>=35?"P":"F"));
          console.log("Science:"+submarks[3]+" "+(submarks[3]>=35?"P":"F"));
          console.log("Social:"+submarks[4]+" "+(submarks[4]>=35?"P":"F"));
        for (let mark of submarks){
              if (mark < 35) {
                  failed = true;
                  break;
              }
              total += mark;
              subcount++;
          }
        if(!failed){
                  result="PASS";
                  const tm=subcount*100;
                  percentage=parseInt((total/tm)*100);
                  if(percentage>=80)grade="A";
                  else if(percentage>=70&&percentage<90) grade="B";
                  else if(percentage>=60&&percentage<70) grade="C";
                  else if(percentage>=35&&percentage<60) grade="D";
                  console.log("Result:"+result);
                console.log("Total:"+total);
                console.log("Percentage:"+percentage);
                console.log("Grade:"+grade);
        }else{
                  result="FAIL";
                  grade="E";
                  console.log("Result:"+result);
                  console.log("Grade:"+grade);
          }
  }
  module.exports={saveStudent};