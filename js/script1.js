let arrayOfNumbers = [2, 5, 3, 5, 2, 8, 9, 0, 2, 4, 5, 3, 2, 1, 35, 9, 88, 7, 28, 81, 9];
let arrayOfResults = [];
let number;
let string = "";
//console.log(arrayOfResults[0]);
let n;
for (let i = 0; i<arrayOfNumbers.length; i++) {
    number = arrayOfNumbers[i];
      
    if (typeof arrayOfResults[number] === "undefined") {
        arrayOfResults[number] = 1;
        /*for (let i = 0; i<arrayOfResults.length; i++) {
            console.log(i + "\t" + "немає в масиві" + "\n");
        }*/
    } else {
        arrayOfResults[number] = arrayOfResults[number] + 1;
        /*for (let i = 0; i<arrayOfResults.length; i++) {
            console.log(i + "\t" + arrayOfResults[i] + "\n");
        }*/
    }
}
for (let i = 0; i<arrayOfResults.length; i++) {
    if (typeof arrayOfResults[i] !== "undefined") {
        //console.log(i + "\t" + arrayOfResults[i] + "\n");
        //string = string + (i + ": " + arrayOfResults[i] + "; ");
        string = string + (i + "\t" + arrayOfResults[i] + "\n");
    }
    //console.log(i + "\t" + arrayOfResults[i] + "\n");
}
//console.log(string);
let object = {
    array: string
}
//console.log(object.array);
//document.querySelector(".result").innerText = string;
/*let companies = [];
let myCompany = {
    name: "Ford",
    year: 1969
}
companies.push(myCompany);
companies.push({name: "Toyota", year: 1886});
//console.log(companies);*/
/*let user = {
    firstName: "Назар",
    secondName: "Гоманов",
    email: "Nazikagaga@gmail.com",
    age: 14,
    colourOfEyes: "green"
}
for (let property in user) {
    console.log("user" + property + " = " + user[property]);
}
//console.log(user)
let numbers;
console.log(typeof arrayOfNumbers);
console.log(typeof user);
console.log(typeof "Nazarka");
console.log(typeof 15);
console.log(typeof numbers);
for (let element of arrayOfNumbers) {
    console.log(element);
}*/
/*for (let property in object) {
    console.log("object" + property + " = " + object[property]);
}*/


let ages = [];
let person =[];
let names = [];
let i=0;
function addPerson() {
    let inputName = document.querySelector('#name').value;
    let inputAge = document.querySelector('#age').value;
    inputAge = Number(inputAge);
        person[i] = {
        name: inputName,
        age: inputAge,
        toString() {
            return `  Ім'я: ${this.name}   Вік: ${this.age}`;
        }, 
    }
    if (inputAge > 15) {
        console.log("Не можу вивести");
    }    
    else {  
            names.push(person.name);    
            ages.push(person.age);
            person.sort(function(a, b) {
                return a.age - b.age
            });
              console.log(person); 
              document.querySelector(".result").innerHTML = person;
              //("Ім'я: " + person[j].name + "   Вік: " + person[j].age);
            
            i++;
    }  
    //console.log(people);
}