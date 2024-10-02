export class Teacher {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id ?? crypto.randomUUID();
  }
}
