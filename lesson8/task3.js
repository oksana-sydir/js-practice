const person = {
    firstName: "Oksana",
    lastName: "Sydir",
    age: 35,
};
person.email = "oksana.sydir@example.com";
delete person.age;
console.log(person);
