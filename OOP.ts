class Point {
    x: number;
    y: number;
    readonly version:string = "1.0.0"
  
    constructor() {
      this.x = 0;
      this.y = 0;
    }
  }
  const point = new Point();
  point.x = 10;
  point.y = 20;
  console.log(`${point.x} -- ${point.y}`);
  
class Over{
    constructor(x: number, y:string);
    constructor(s: string);
    constructor(xs: any , y?: any) {

    }
}

class Prop{
    _x: number = 0
    get x(): number {
        this.x = this.x + 1;
        return this._x;
    }
    set x(value: number){
        this._x = value;
    }
}
const p = new Prop();
p.x =10
console.log(p.x);

class Person {
    name:string = "";
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
class Employee extends Person{
    salary:number = 0;
    constructor(name, salary:number){
        super(name);
        this.salary = salary;
    }
}
// const person = new Person("John");
const person = new Employee("Jack", 150000)
person.sayHi()

abstract class Character {
    public name: string;
    public damage: number;
    public attackSpee: number;

    constructor(name: string, damage: number, speed: number){
        this.name = name;
        this.damage = damage;
        this.attackSpee = speed;
    }
    public abstract damagePerSecond(): number;
}

class Goblin extends Character {
    constructor (name: string, damage: number, speed: number){
        super(name,damage,speed)
    }
    public damagePerSecond(): number {
        return this.damage * this.attackSpee
    }
}