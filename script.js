let getOddNumber = document.getElementById("anonymOddNumber");
let getToTitleCap = document.getElementById("stingToTitleCap");
let getSumNumInArray = document.getElementById("sumNumInArray");
let getReturnPrimeNum = document.getElementById("returnPrimeNum");
let getReturnPalindromes = document.getElementById("returnPalindromes");
let getReturnMedianTwosortedArraysSameSize = document.getElementById(
  "returnMedianTwosortedArraysSameSize"
);
let getRemoveDuplicates = document.getElementById("removeDuplicates");
let getRotateArraykTimes = document.getElementById("rotateArraykTimes");

let getOutput = document.getElementById("output");
let outputHeading = document.createElement("h1");
let outputPara = document.createElement("p");
outputPara.style.wordBreak = "break-all";

let arrayName = ["ganesh kanna", "emcy", "durga Ravi"];

// IIFE function Convert all the strings to title caps in a string array
(function () {
  let finalWordArray = [];
  let finalWordString;
  //   outputPara.innerHTML = "";
  outputHeading.innerHTML = `<u>THIS IS IIFE FUNCTION</u> <br> Output - Converting all the strings to title caps in a string array with input array as - [${arrayName}] <b></b>`;
  getOutput.appendChild(outputHeading);

  arrayName.forEach((eachName) => {
    let eachWord = eachName.split(" ");

    if (eachWord.length == 1) {
      let firstLetter = eachName.charAt(0).toUpperCase();
      let restLetter = eachName.slice(1);
      finalWordArray.push(firstLetter + restLetter);
    } else {
      let combime = "";
      eachWord.forEach((str) => {
        let firstLetter = str.charAt(0).toUpperCase();
        let restLetter = str.slice(1);
        combime += firstLetter + restLetter + " ";
        finalWordString = combime;
      });

      if (
        finalWordString != null &&
        finalWordString.length > 0 &&
        finalWordString.charAt(finalWordString.length - 1) == " "
      ) {
        finalWordString = finalWordString.substring(
          0,
          finalWordString.length - 1
        );
      }
      finalWordArray.push(finalWordString);
    }
  });
  outputPara.innerHTML = finalWordArray;
  getOutput.appendChild(outputPara);
  console.log(finalWordArray);
})();

// printing odd numbers in an array using Anonymous function using click event
getOddNumber.addEventListener("click", function () {
  let result = [];
  outputHeading.innerHTML =
    "Output - Printing odd numbers in an array using Anonymous function";
  getOutput.appendChild(outputHeading);
  for (i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
      result.push(i);
    }
  }
  outputPara.innerHTML = result;
  getOutput.appendChild(outputPara);
  console.log(result);
});

// Convert all the strings to title caps in a string array
getToTitleCap.addEventListener("click", function () {
  let finalWordArray = [];
  let finalWordString;
  outputHeading.innerHTML = `Output - Converting all the strings to title caps in a string array with input array as - [${arrayName}] <b></b>`;
  getOutput.appendChild(outputHeading);

  arrayName.forEach((eachName) => {
    let eachWord = eachName.split(" ");

    if (eachWord.length == 1) {
      let firstLetter = eachName.charAt(0).toUpperCase();
      let restLetter = eachName.slice(1);
      finalWordArray.push(firstLetter + restLetter);
    } else {
      let combime = "";
      eachWord.forEach((str) => {
        let firstLetter = str.charAt(0).toUpperCase();
        let restLetter = str.slice(1);
        combime += firstLetter + restLetter + " ";
        finalWordString = combime;
      });

      if (
        finalWordString != null &&
        finalWordString.length > 0 &&
        finalWordString.charAt(finalWordString.length - 1) == " "
      ) {
        finalWordString = finalWordString.substring(
          0,
          finalWordString.length - 1
        );
      }
      finalWordArray.push(finalWordString);
    }
  });
  outputPara.innerHTML = finalWordArray;
  getOutput.appendChild(outputPara);
  console.log(finalWordArray);
});

// Sum of all numbers in an array using arrow function
getSumNumInArray.addEventListener("click", () => {
  outputHeading.innerHTML =
    "Output - Printing Sum of all numbers in an array using arrow function";
  getOutput.appendChild(outputHeading);

  let number = 0;

  for (i = 0; i <= 100; i++) {
    number += i;
    // console.log(i)
  }
  console.log(number);
  outputPara.innerHTML = number;
  getOutput.appendChild(outputPara);
});

getReturnPrimeNum.addEventListener("click", () => {
  outputHeading.innerHTML =
    "Output - Return all the prime numbers in an array using arrow function";
  getOutput.appendChild(outputHeading);

  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= 100; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= 100; j += i) {
        sieve[j] = true;
      }
    }
  }
  console.log(primes);
  outputPara.innerHTML = primes;
  getOutput.appendChild(outputPara);
});

getReturnPalindromes.addEventListener("click", function () {
  outputHeading.innerHTML =
    "Output - Returning all the palindromes in an array using arrow function";
  getOutput.appendChild(outputHeading);
  let count = 0;
  let palindromes = [];
  for (i = 1; i <= 100; i++) {
    let output;
    i = i.toString();
    let iStart = 0;
    let iLast = i.length - 1;

    while (iStart < iLast) {
      // console.log(`inside while - ${iStart} AND ${iLast}`);
      if (i[iStart] === i[iLast]) {
        output = true;
        iStart++;
        iLast--;
      } else {
        output = false;
        break;
      }
    }

    if (output === true) {
      palindromes.push(i);
      console.log(palindromes);
      count++;
    }
  }

  console.log(`Count of numbers - ${count}`);

  outputPara.innerHTML = `Total count of Palidromes between 1-100 is <b>${count}</b> and the numbers are <b>${palindromes}</b>`;
  getOutput.appendChild(outputPara);
});

getReturnMedianTwosortedArraysSameSize.addEventListener("click", function () {
  let nums1 = [1, 2, 9];
  let nums2 = [3, 4, 7];

  outputHeading.innerHTML = "Output - Returning median of two sorted arrays of same size";
  getOutput.appendChild(outputHeading);

  let finalArr = [...nums1, ...nums2];
  finalArr = finalArr.sort();
  console.log(finalArr);

  let arrLength = finalArr.length;

  let output = (finalArr[arrLength / 2 - 1] + finalArr[arrLength / 2]) / 2;
  console.log(output);

  outputPara.innerHTML = `Return median of two sorted arrays of same size <b><br>${nums1} <br>${nums2}</b> <br> and the output is <b>${output}</b>`;
  getOutput.appendChild(outputPara);

});

// Remove duplicates from an array
getRemoveDuplicates.addEventListener("click", function () {
  let arr = [10, 20, 10, 30, 40, 20, 30, "aa", "bb", "cc", "aa", "cc", "ee"];

  outputHeading.innerHTML = "Output - Removing duplicates from an array";
  getOutput.appendChild(outputHeading);

  let keepArr = [];
  let finalArr = [];

  // Checking the dupicates and taking the unique value
  arr.filter((a, b) => {
    if ((arr.indexOf(a) == b) == true) {
      keepArr.push(b);
    }
  });

  // adding unique value to the new array
  keepArr.forEach((keep) => {
    finalArr.push(arr[keep]);
  });

  // console.log(arr);
  console.log(finalArr);
  outputPara.innerHTML = `Removed duplicates from an array <b>[${arr}]</b> and the output are <b>[${finalArr}]</b>`;
  getOutput.appendChild(outputPara);
});

getRotateArraykTimes.addEventListener("click", function () {
  outputHeading.innerHTML = "Output - Rotate an array by k times";
  getOutput.appendChild(outputHeading);
  let A = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  let finalArr = [];

  let n = A.length;

  rightRotate(A, k, n);

  for (let i = 0; i < n; i++) {
    // console.log("%d ", A[i]);
    finalArr.push(A[i]);
  }
  console.log(finalArr);
  outputPara.innerHTML = `Rotate an array by k(3) times from an array <b>[1, 2, 3, 4, 5, 6, 7]</b> and the output are <b>[${finalArr}]</b>`;
  getOutput.appendChild(outputPara);

  function rightRotateByOne(A, n) {
    let last = A[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      A[i + 1] = A[i];
    }

    A[0] = last;
  }

  // Function to right-rotate an array by `k` positions
  function rightRotate(A, k, n) {
    // base case: invalid input
    if (k < 0 || k >= n) {
      return;
    }

    for (let i = 0; i < k; i++) {
      rightRotateByOne(A, n);
    }
  }
});
