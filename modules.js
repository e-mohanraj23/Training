// const csvtojson=require('convert-csv-to-json');
// const input='c.csv';
// const output='json.json';
// csvtojson.generateJsonFileFromCsv(input,output);

// const {parseString}=require('xml2js');
// const xml="<student><htno>101</htno><name>mohan</name></student>";
// parseString(xml, (err, result) => {
//         if (err) throw err;
//         console.log(result);
// });

const {CronJob}=require('cron');
const cronjob= new CronJob('*/2 * * * * *',()=>console.log('Hi'))
cronjob.start()