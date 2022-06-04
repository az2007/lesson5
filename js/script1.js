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
        string = string + (i + ": " + arrayOfResults[i] + "; ");
    }
    //console.log(i + "\t" + arrayOfResults[i] + "\n");
}
//console.log(string);
let object = {
    array: string
}
console.log(object);
//document.querySelector(".result").innerText = string;
/*let companies = [];
let myCompany = {
    name: "Ford",
    year: 1969
}
companies.push(myCompany);
companies.push({name: "Toyota", year: 1886});
//console.log(companies);
let user = {
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



//console.log(arrayOfResults);