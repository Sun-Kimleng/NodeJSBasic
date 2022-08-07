//Import Node Core Module
const fs = require('fs')


//Reading Files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     //this function will fire if fs.readfile is completed
//     if(err){
//         console.log(err)
//     }
//     //if we use console.log(data) it will throw Buffer
//     console.log(data.toString())
// })


//Writing Files
//Old files data will replace by blog1.txt file
//Note If the file doesn't exist it will create the new file
// fs.writeFile('./docs/blog1.txt', 'Hello, Code!', ()=>{
//     console.log('file has written')
// } )

// fs.writeFile('./docs/blog2.txt', 'Hello, Code!', ()=>{
//     console.log('file has written')
// } )



//Directories
//Make Directory or Remove
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('succesful make the directory')
//     })
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('succesful make the directory')
//     })
// }




//Deleting Files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Succesful Deleted')
    })
}