// console.log(global);

global.setTimeout(()=>{
    console.log('In the timeout')
}, 3009)

//get the location folder and file
console.log(__dirname);
console.log(__filename);

//command: node global //to run 