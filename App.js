function fetchData() {
  fetch("http://localhost:3000/colors")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const colorList = [];
      for (let i = 0; i < json.length / 5; i++) {
        colorList.push(`<div class="line" style="display: flex">`);
        for (let j = 0; j < 5; j++) {
          colorList.push(
            `<div id="tmp" style="background-color: ${json[i * 5 + j].hex}">
                <div id="hov" style="background-color: ${
                  json[i * 5 + j].hex
                }">copy</div>
                <p>${json[i * 5 + j].name}</p></div>`
          );
        }
        colorList.push(`</div>`);
      }
      document.getElementById("body-colors").innerHTML = colorList.join("");
    })
    .then(() => {
      const randText = [
        "i'll back",
        "got it",
        "hi yong man",
        "sombody help",
        "ok",
      ];
      const tmp = document.querySelector("#body-colors");
      tmp.addEventListener("click", (event) => {
        const t = document.createElement("textarea");
        const bc = document.getElementById("moni");
        const bcin = document.getElementById("monin");
        const bcun = document.getElementById("monun");
        document.body.appendChild(t);
        t.value = event.target.outerHTML.match(/#\w\w\w\w\w\w/)[0];
        t.select();
        bc.style.backgroundColor = t.value;
        bc.style.zIndex = 10;
        bcin.innerText = randText[Math.round(Math.random() * 10) % 5];
        console.log(bc);
        bcun.innerText = t.value;
        setTimeout(function () {
          bc.style.backgroundColor = "white";
          bc.style.zIndex = -1;
          bcun.innerText = "";
          bcin.innerText = "";
        }, 700);
        document.execCommand("copy");
        document.body.removeChild(t);
      });
    });
}
