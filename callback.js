let promise= new Promise((resolve,reject)=>{
    if(true) resolve('resolved');
    else reject('rejected');		
});
promise.then(res=>console.log("then"+res)
)
.catch((err)=> console.log("catch"+err));