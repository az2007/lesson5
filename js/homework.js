let resultArray = [];
let resultString = "";
function addEnjoy() {
    let inputName = document.querySelector(".name").value;
    let inputYear = document.querySelector(".year").value;
    let inputAuthor = document.querySelector(".author").value;
    let objectsBookFilmProgramm = {
        name: inputName,
        year: inputYear,
        author: inputAuthor
    }
    if (objectsBookFilmProgramm.year < 1950) {   
         resultString = "Name: " + objectsBookFilmProgramm.name + "; " + "Year: " + objectsBookFilmProgramm.year + "; " + "Author: " + objectsBookFilmProgramm.author + ";\n";
         resultArray.push(resultString); 
         resultArray.color.text = 'red';
         document.querySelector(".list").innerText = resultArray;
    }
    else if (objectsBookFilmProgramm.year > 1951 && objectsBookFilmProgramm.year < 2010) {
         resultString = "Name: " + objectsBookFilmProgramm.name + "; " + "Year: " + objectsBookFilmProgramm.year + "; " + "Author: " + objectsBookFilmProgramm.author + ";\n";
         resultArray.push(resultString);
         resultArray.color.text = 'yellow'; 
         document.querySelector(".list").innerText = resultArray;
    }
    else if (objectsBookFilmProgramm.year > 2010){
         resultString = "Name: " + objectsBookFilmProgramm.name + "; " + "Year: " + objectsBookFilmProgramm.year + "; " + "Author: " + objectsBookFilmProgramm.author + ";\n";
         resultArray.push(resultString);
         resultArray.color.text = 'green'; 
         document.querySelector(".list").innerText = resultArray;
    }
}