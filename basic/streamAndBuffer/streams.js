//Use createReadStream to read a large file
//They read it by chunks like fill a pull by a bottle in until the pool is full

//utf-8 use to make the data readable or we can write chunk.toString()

const fs = require('fs');

const readStream = fs.createReadStream('./docs/streamText.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/streamText2.txt')

readStream.on('data', (chunk)=>{
    console.log('------New Chunk------');
    console.log(chunk)

    //write Hello world then write the streamText after that to streamText2
    writeStream.write('\nHello World !!!!!!!!!!!!');
    writeStream.write(chunk)
})