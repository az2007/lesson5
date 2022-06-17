let resultArray = [];
let booksArray = [];
let nameArray = ["Назар", "Володимир", "Святослав", "Григорій"];
for (let r = 0; r < nameArray.length; r++) {
     console.log(nameArray.join(", "));
} 
function addEnjoy() {
    let inputName = document.querySelector(".name").value;
    let inputYear = document.querySelector(".year").value;
    let inputAuthor = document.querySelector(".author").value;
    let objectsBook = {
        name: inputName,
        year: inputYear,
        author: inputAuthor
    }
    booksArray.push(objectsBook);
    let resultString = ""; 
    for (let i = 0; i < 1; i++) { 
       if (objectsBook.year < 1950) {   
           resultString = "<p class='redText'>Name: " + objectsBook.name + "; " + "Year: " + objectsBook.year + "; " + "Author: " + objectsBook.author + ";</p>\n";
           //resultString.style.color = 'red';
           resultArray.push(resultString); 
           document.querySelector(".list").innerHTML = resultArray.join("");
       }
    }
    for (let j = 0; j < 1; j++) {   
       if (objectsBook.year > 1951 && objectsBook.year < 2010) {
            resultString = "<p class='yellowText'>Name: " + objectsBook.name + "; " + "Year: " + objectsBook.year + "; " + "Author: " + objectsBook.author + ";</p>\n";
            //resultString.fontco('yellow');
            resultArray.push(resultString); 
            document.querySelector(".list").innerHTML = resultArray.join("");
       }
    }   
    for (let h = 0; h < 1; h++) {   
       if (objectsBook.year > 2010){
            resultString = "<p class='greenText'>Name: " + objectsBook.name + "; " + "Year: " + objectsBook.year + "; " + "Author: " + objectsBook.author + ";</p>\n";
            //resultString.style.color = 'green';
            resultArray.push(resultString); 
            document.querySelector(".list").innerHTML = resultArray.join("");
       }
    }  
}