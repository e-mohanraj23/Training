const fs= require('fs');

fs.readFile('./sample.txt',(err,data)=>{
    if(err)
        console.log(err)
    console.log(data.toString())
});
const r=fs.readFileSync('./sample.txt')
console.log(r.toString())

fs.writeFile('sample.txt','\n hello',(err)=>{
    if(err)
        console.log(err)
})
const w=fs.writeFileSync('sample.txt','This is file')

const a= fs.appendFileSync('sample.txt',"\n appended\n")
fs.appendFile('sample.txt','\n Hi this my first file \n',(err)=>{
	if(err)
		console.log('err',err)});

fs.truncate('sample.txt', 20, (err) => {
  if (err) throw err;
  console.log('File truncated');
});
fs.truncateSync('sample.txt', 10);

fs.rename('sample.txt', 'example.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});
fs.renameSync('example.txt', 'sample.txt');

fs.copyFile('sample.txt', 'sample2.txt', (err) => {
  if (err) throw err;
  console.log('File copied');
});
fs.copyFile('sample.txt', 'sample2.txt');

fs.unlink('sample2.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
fs.unlinkSync('example.txt');