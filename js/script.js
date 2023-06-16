window.onload = function () {
  const form = document.querySelector("form");
  const log = document.querySelector("#log")
  const submit = document.querySelector(button)


  form.addEventListener("submit",
    (e) => {
      e.preventDefault();
      const data = new FormData(form);
      let output = "";
      if ("q1Input" === "Python") {
        let answer = 1;
        console.log(answer);
        return answer;

      }

    }

  );

  function answer(e) {
    e.preventDefault();
    const value = document.querySelector("input [name='q1Input']:checked").value;
  }

  window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", answer);
  }
  );
};
