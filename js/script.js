window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (e) {
    let q1Select = document.querySelector("input[name='q1Input']:checked").value;
    let q2Select = document.querySelector("input[name='q2Input']:checked").value;
    let q3Select = document.querySelector("input[name='q3Input']:checked").value;
    let q4Select = document.querySelector("input[name='q4Input']:checked").value;
    let q5Select = document.querySelector("input[name='q5Input']:checked").value;
    e.preventDefault();
    // User Input functions
    function q1() {
      if (q1Select === "Python1") {
        q1Select = 10;
      } else if (q1Select === "Java1") {
        q1Select = -10;
      } else if (q1Select === "cSharp1") {
        q1Select = 100;
      } return q1Select;
    }
    function q2() {
      if (q2Select === "Python2") {
        q2Select = 10;
      } else if (q2Select === "Java2") {
        q2Select = -10;
      } else if (q2Select === "cSharp2") {
        q2Select = 100;
      } return q2Select;
    }
    function q3() {
      if (q3Select === "Python3") {
        q3Select = 10;
      } else if (q3Select === "Java3") {
        q3Select = -10;
      } else if (q3Select === "cSharp3") {
        q3Select = 100;
      } return q3Select;
    }
    function q4() {
      if (q4Select === "Python4") {
        q4Select = 10;
      } else if (q4Select === "Java4") {
        q4Select = -10;
      } else if (q4Select === "cSharp4") {
        q4Select = 100;
      } return q4Select;
    }
    function q5() {
      if (q5Select === "Python5") {
        q5Select = 10;
      } else if (q5Select === "Java5") {
        q5Select = -10;
      } else if (q5Select === "cSharp5") {
        q5Select = 100;
      } return q5Select;
    }
    let result = function submitAnswers() {
      // Submission function to calculate results
      let r1 = q1();
      let r2 = q2();
      let r3 = q3();
      let r4 = q4();
      let r5 = q5();
      let allr = r1 + r2 + r3 + r4 + r5;
      let result = allr;
      if (result < 0) {
        result = document.querySelector("div#javaAnswer").removeAttribute("class");
        document.querySelector("div#pyAnswer").setAttribute("class", "hidden");
        document.querySelector("div#cAnswer").setAttribute("class", "hidden");
      } else if (result > 0 && result < 299) {
        result = document.querySelector("div#pyAnswer").removeAttribute("class");
        document.querySelector("div#javaAnswer").setAttribute("class", "hidden");
        document.querySelector("div#cAnswer").setAttribute("class", "hidden");
      } else if (result > 300) {
        result = document.querySelector("div#cAnswer").removeAttribute("class");
        document.querySelector("div#pyAnswer").setAttribute("class", "hidden");
        document.querySelector("div#javaAnswer").setAttribute("class", "hidden");
      }
    }; window.addEventListener("submit", result);
  };
};