window.onload = function () {
  const form = document.querySelector("form");
  console.log("script executing 1");

  form.onsubmit = function (e) {
    e.preventDefault();
    console.log("submit form sucessfully reached");
    let q1Result = document.querySelector("input[name='q1Input']:checked").value;
    let q2Result = document.querySelector("input[name='q2Input']:checked").value;
    let q3Result = document.querySelector("input[name='q3Input']:checked").value;
    let q4Result = document.querySelector("input[name='q4Input']:checked").value;
    let q5Result = document.querySelector("input[name='q5Input']:checked").value;
  }
}

let q1Select = document.querySelector("input[name='q1Input']:checked").value;
let q2Select = document.querySelector("input[name='q2Input']:checked").value;
let q3Select = document.querySelector("input[name='q3Input']:checked").value;
let q4Select = document.querySelector("input[name='q4Input']:checked").value;
let q5Select = document.querySelector("input[name='q5Input']:checked").value;

function q1() {
  console.log("I made it to q1! yay");
  var q1Select = document.getElementsByName("q1Input");
  if (q1Select === "Python1") {
    q1Result = parseInt(10);
  } else if (q1Select === "Java1") {
    q1Result = parseInt(-10);
  } else if (q1Select === "cSharp1") {
    q1Result = parseInt(100);
  }
  return q1Result;
}

function q2() {
  console.log("function q2 is executing!")
  var q2Select = document.getElementsByName("q2Input");
  if (q2Select === "Python2") {
    q2Result = parseInt(10);
  } else if (q2Select === "Java2") {
    q2Result = parseInt(-10);
  } else if (q2Select === "cSharp2") {
    q2Result = parseInt(100);
    console.log(q2Result);
  }
  return q2Result;
}

function q3() {
  console.log("function q3 is executing!")
  var q3Select = document.getElementsByName("q3Input");
  if (q3Select === "Python3") {
    q3Result = parseInt(10);
  } else if (q3Select === "Java3") {
    q3Result = parseInt(-10);
  } else if (q3Select === "cSharp3") {
    q3Result = parseInt(100);
    console.log(q3Result);
  }
  return q3Result;
}

function q4() {
  console.log("function q4 is executing!");
  var q4Select = document.getElementsByName("q4Input");
  if (q4Select === "Python4") {
    q4Result = parseInt(10);
  } else if (q4Select === "Java4") {
    q4Result = parseInt(-10);
  } else if (q4Select === "cSharp4") {
    q4Result = parseInt(100);
    console.log(q4Result);
  }
  return q4Result;
}

function q5() {
  console.log("function q5 is executing!");
  var q5Select = document.getElementsByName("q5Input");
  if (q5Select === "Python5") {
    q5Result = parseInt(10);
  } else if (q5Select === "Java5") {
    q5Result = parseInt(-10);
  } else if (q5Select === "cSharp5") {
    q5Result = parseInt(100);
    console.log(q5Result);
  }
  return q5Result;
}

function submitAnswers() {
  console.log("submitAnswer function executing!")
  let r1 = q1();
  let r2 = q2();
  let r3 = q3();
  let r4 = q4();
  let r5 = q5();
  let allr = r1 + r2 + r3 + r4 + r5;

  if (allr > 0) {
    document.querySelector("div#javaAnswer").removeAttribute("class");
  } else if (allr > 0 || allr < 80) {
    document.querySelector("div#pyAnswer").removeAttribute("class");
  } else if (allr > 80) {
    document.querySelector("div#cAnswer").removeAttribute("class");
  }
}


function q10() {
  console.log("made it to q10! Yay!!");
}

window.addEventListener("load", function () {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", submitAnswers())
});




  //   function answer(e) {
  //     e.preventDefault();
  //     const value = document.querySelector("input [name='q1Input']:checked").value;
  //   }

  //   window.addEventListener("load", function () {
  //     document.getElementById("form").addEventListener("submit", answer);
  //   }
  //   );
  //

//   add all radio select functions into one function
//   make 3 results hidden and add event listener to remove hidden class depending on all function result

//   Javascript - -10(if > 0)
//     Python - 10(if > 0 || < 80)
// c# - 100(if > 80)