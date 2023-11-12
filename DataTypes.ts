const app_name = "My App";
const app_version = "1.0.0";
const myArray: number[] = [1,2,3];
let myArray2: any[] = [4,5,"Hi"];

function seyHello(){
    if(true){
        var myName: string = 'June';
        var myAge: number;
        var canVote: boolean;
        var i;
    }
    console.log(myName);
}

seyHello()
console.log(myArray2[1])
console.log(myArray2.pop())
console.log(myArray2.pop())
console.log(myArray2)
console.log(myArray2.push("Bye"))
console.log(myArray2)

let employee: [number, string, boolean][] = [[1, "Aek Su" , true], [2, "Uh Po", false]];
console.log(employee)
employee.push([3, "Miss B", true]);
console.log(employee)

enum WorkStatus{
    Task = 1,
    Working,
    Done
}

console.log(WorkStatus.Task);
console.log(WorkStatus.Done);