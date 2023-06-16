window.onload = function () {
  const form = document.querySelector("form");
  console.log("script executing 1");
}

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submit form sucessfully reached");
  let q1Result = document.querySelector("input[name='q1Input']:checked").value;
  let q2Result = document.querySelector("input[name='q2Input']:checked").value;
  let q3Result = document.querySelector("input[name='q3Input']:checked").value;
  let q4Result = document.querySelector("input[name='q4Input']:checked").value;
  let q5Result = document.querySelector("input[name='q5Input']:checked").value;


  function q1() {
    console.log("I made it to q1! yay");
    if (q1Select === "Python") {
      Result1 = "Python";
    } else if (q1Select === "Java") {
      Result1 = "JavaScript";
    } else if (q1Select === "cSharp") {
      Result1 = "cSharp";
    }
    return Result1;
  }

  function q2(q2Result) {
    if (q2Select === "Python") {
      q1Result = "Python";
    } else if (q2Select === "Java") {
      q1Result = "JavaScript";
    } else if (q2Select === "cSharp") {
      q1Result = "cSharp";
      console.log(q2Result);
      return q2Result;
    }
  }

  function q3(q3Result) {
    if (q3Select === "Python") {
      q3Result = "Python";
    } else if (q3Select === "Java") {
      q3Result = "JavaScript";
    } else if (q3Select === "cSharp") {
      q3Result = "cSharp";
      console.log(q3Result);
      return q3Result;
    }
  }

  function q4(q4Result) {
    if (q4Select === "Python") {
      q4Result = "Python";
    } else if (q4Select === "Java") {
      q4Result = "JavaScript";
    } else if (q4Select === "cSharp") {
      q4Result = "cSharp";
      console.log(q4Result);
      return q4Result;
    }
  }

  function q5(q5Result) {
    if (q5Select === "Python") {
      q5Result = "Python";
    } else if (q5Select === "Java") {
      q5Result = "JavaScript";
    } else if (q5Select === "cSharp") {
      q5Result = "cSharp";
      console.log(q5Result);
      return q5Result;
    }
  }
}
// }

window.addEventListener("load", function () {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", q1)
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
