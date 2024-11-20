const fs = require('fs');

// fs.readFile('./docs/blogs.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// fs.writeFile('./docs/blogs.txt', 'hello, world', () => {
//     console.log('it was written')
// });

// fs.writeFile('./docs/blogs1.txt', 'hello, again', () => {
//     console.log('it was written')
// });
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');

});
}else{
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}