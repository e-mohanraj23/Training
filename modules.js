const csvtojson=require('convert-csv-to-json');
const input='c.csv';
const output='json.json';
csvtojson.generateJsonFileFromCsv(input,output);

// const {parseString}=require('xml2js');
// const xml="<student><htno>101</htno><name>mohan</name></student>";
// parseString(xml, (err, result) => {
//         if (err) throw err;
//         console.log(result);
// });

// const {CronJob}=require('cron');
// CronJob.from({
// 	cronTime: '*/2 * * * * *',
// 	onTick: function () {
// 		console.log('You will see this message every 2 second');
// 	},
// 	start: true,
// 	timeZone: 'America/Los_Angeles'
// });