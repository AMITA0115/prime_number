let num=13;
let flag=true;
for(let i=2; i<num; i++){
    if(i%num===0){
        flag=false;
    }
}
if(flag){
    cansolole.log("Prime")
} else {
    console.log("Not prime")
}