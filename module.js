const fs = require("fs")


let opr = process.argv[2]
let fileName = process.argv[3]
let data = process.argv[4]
let newFile = process.argv[4]

const write=()=>{
    fs.writeFile(fileName,data,(err)=>{
        if(err) throw (err)
        console.log(`File successfully created: ${fileName}`);
    })
}

const read=()=>{
    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err) throw (err)
        console.log(`File successfully readable: \n\n ${data}`);
    })
}

const unlink=()=>{
    fs.unlink(fileName,(err)=>{
        if(err) throw (err)
        console.log(`File successfully deleted`);
    })
}

const rename=()=>{
    fs.rename(fileName,newFile,(err)=>{
        if(err) throw (err)
        console.log(`File succesfully renamed: ${newFile}`);
    })
}

const append=()=>{
    fs.appendFile(fileName,data,(err)=>{
        if(err) throw (err)
        console.log(`File successfully modified`);
    })
}

if(opr=="create"){
    write()
}
else if(opr=="read"){
    read()
}
else if(opr=="delete"){
    unlink()
}
else if(opr=="rename"){
    rename()
}
else if(opr=="edit"){
    append()
}