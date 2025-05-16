const mongoose = require('mongoose');
const schema= new mongoose.Schema({
  htno:Number,
  name: String,
  subjects:{
    tamil: Number,
    english: Number,
    maths: Number,
    science: Number,
    ss: Number,
  },
  total:Number,
  percentage:Number,
  grade:String,
  result:String,
});
const model=mongoose.models.marks || mongoose.model('marks',schema);
schema.index({htno:1},{unique:true});

const saveStudent=(data)=>{
 
  let total,percentage,grade,result;
  const calculate=()=>{
    var failed= false
    var subcount=0;
      total=0;
       percentage=0;
    const submarks={
      tamil:data.tamil,
      english:data.english,
      maths:data.maths,
      science:data.science,
      ss:data.ss,
    }
      for (let mark of Object.values(submarks)){
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
    }else{
            result="FAIL";
            grade="E";
        }
    }
  calculate();
    const metaData = {
      htno : data.htno,
      name: data.name,
      subjects : {
        tamil : data.tamil,
        english:data.english,
        maths:data.maths,
        science:data.science,
        ss:data.ss,
      },
      total,
      percentage,
      result,
      grade,
    }
    const student =model(metaData);
    return student.save();
}
module.exports={model,saveStudent};