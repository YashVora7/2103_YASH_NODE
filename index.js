let data = process.argv

let opr = data[2]

let a = data[3]
let b = data[4]

if (opr=="add"){
    console.log(Number(a) + Number(b));
}
if (opr=="sub"){
    console.log((a) - (b));
}
if (opr=="multiply"){
    console.log((a) * (b));
}
if (opr=="div"){
    console.log((a) / (b));
}
if (opr=="module"){
    console.log((a) % (b));
}