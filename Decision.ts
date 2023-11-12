if(true && true){
    console.log('🏆 Always executed')
}

if(false || true){
    console.log('🎰 Never executed')
}

let e = 10, f = 20;
if (e < f){
    console.log('e น้อยกว่า f')
} 

e > f ? console.log('🎯'): console.log('❌')

let selectMenu : number = 2;

switch(selectMenu){
    case 0:
        console.log("Hello");
    case 1:
        console.log("World");
        break;
    case 2:
        console.log("Hello World");
        break;
}