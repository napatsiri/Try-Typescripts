function sayHello1(): number{
    console.log("Nat World")
    return 1;
}
console.log(sayHello1)

function sayHello2(): string{
    return "Natty tytyty";
}
console.log("Hello s" +sayHello2()) 

function sayHello3(name:string, lastname:string): string{
    return name + lastname + " tytyty";
}
console.log("Hello " +sayHello3("Natty", "Phet")) 

function sayHello4(name:string, lastname:string = "None"): string{
    return name + lastname + " tytyty";
}
console.log("Hello " +sayHello4("Natty")) 

function sayHello5(name:any = "None", lastname:any = "None"): string{
    return name + " " + lastname;
}
console.log("Hello " +sayHello5(1)) 

function sum(a:number, b:number, ...rest: number[]): number{
    return a+b+rest.reduce((a,b) => a + b, 0);
}
console.log("Hello " +sum(1,2,3,4,5,6,7,8,9,10)) 

function add({x,y}:{x: number, y: number}): number{
    return x+y;
}
console.log(add({y:5, x:100}))

