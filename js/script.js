window.onload = function () {
  let form = document.querySelector("form");
  console.log("window onload executing");
  form.onsubmit = function (e) {
    e.preventDefault();
    console.log("onsubmit form reached");
    let q1Select = document.querySelector("input[name='q1Input']").value;
    let q2Select = document.querySelector("input[name='q2Input']").value;
    let q3Select = document.querySelector("input[name='q3Input']").value;
    let q4Select = document.querySelector("input[name='q4Input']").value;
    let q5Select = document.querySelector("input[name='q5Input']").value;

    function q1() {
      console.log("I made it to q1! yay");
      if (q1Select === "Python1") {
        q1Select = parseInt(10);
      } else if (q1Select === "Java1") {
        q1Select = parseInt(-10);
      } else if (q1Select === "cSharp1") {
        q1Select = parseInt(100);
      } return q1Select;
    }
    let q1Result = q1();

    function q2() {
      console.log("function q2 is executing!")
      if (q2Select === "Python2") {
        q2Select = parseInt(10);
      } else if (q2Select === "Java2") {
        q2Select = parseInt(-10);
      } else if (q2Select === "cSharp2") {
        q2Select = parseInt(100);
        console.log(q2Result);
      } return q2Select;
    }

    function q3() {
      console.log("function q3 is executing!")
      if (q3Select === "Python3") {
        q3Select = parseInt(10);
      } else if (q3Select === "Java3") {
        q3Select = parseInt(-10);
      } else if (q3Select === "cSharp3") {
        q3Select = parseInt(100);
        console.log(q3Result);
      } return q3Select;
    }

    function q4() {
      console.log("function q4 is executing!");
      if (q4Select === "Python4") {
        q4Select = parseInt(10);
      } else if (q4Select === "Java4") {
        q4Select = parseInt(-10);
      } else if (q4Select === "cSharp4") {
        q4Select = parseInt(100);
        console.log(q4Result);
      } return q4Select;
    }

    function q5() {
      console.log("function q5 is executing!");
      if (q5Select === "Python5") {
        q5Select = parseInt(10);
      } else if (q5Select === "Java5") {
        q5Select = parseInt(-10);
      } else if (q5Select === "cSharp5") {
        q5Select = parseInt(100);
        console.log(q5Result);
      } return q5Select;
    }




    function submitAnswers() {
      console.log("submitAnswer function executing!")
      let r1 = q1();
      let r2 = q2();
      let r3 = q3();
      let r4 = q4();
      let r5 = q5();
      let allr = (r1 + r2 + r3 + r4 + r5);

      if (allr > 0) {
        document.querySelector("div#javaAnswer").removeAttribute("class");
      } else if (allr > 0 || allr < 80) {
        document.querySelector("div#pyAnswer").removeAttribute("class");
      } else if (allr > 80) {
        document.querySelector("div#cAnswer").removeAttribute("class");
      }
      return allr;
    };
    submitAnswers();
  };
};

window.addEventListener("submit", submitAnswers());