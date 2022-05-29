var arrayOfNumbers = [2, 5, 3, 5, 2, 8, 9, 0, 2, 4, 5, 3, 2, 1, 35, 9, 88, 7, 28, 81, 9];
var number;
var quantityOfNumbers = [];
var i = 0;
//array = arrayOfNumbers;
while (i !== arrayOfNumbers.length) {
    var n = 0;
    number = arrayOfNumbers[0];
    for (let j = 0; j<arrayOfNumbers.length; j++) {
      if (number == arrayOfNumbers[j]) {
          n = n + 1;
      } else {
          quantityOfNumbers.push(arrayOfNumbers[j]);
          //console.log(quantityOfNumbers);
      }
      
    } 
    //console.log(number + " в масиві " + n);
    arrayOfNumbers = quantityOfNumbers;
    quantityOfNumbers = [];
}  
//console.log(numbers);