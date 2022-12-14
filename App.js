function fetchData() {
  fetch("http://localhost:3000/colors")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      for (let i = 0; i < json.length / 5; i++) {
        const flexBox = document.createElement("div");
        flexBox.style.display = "flex";
        flexBox.className = "line";
        for (let j = 0; j < 5; j++) {
          const box = document.createElement("div");
          box.style.backgroundColor = json[i * 5 + j].hex;
          box.className = "tmp";
          box.copyText = json[i * 5 + j].hex;

          const inBox = document.createElement("div");
          inBox.className = "hov";
          inBox.style.backgroundColor = json[i * 5 + j].hex;
          inBox.innerText = "copy";
          inBox.copyText = json[i * 5 + j].hex;

          const name = document.createElement("p");
          name.innerText = json[i * 5 + j].name;
          box.appendChild(inBox);
          box.appendChild(name);
          flexBox.appendChild(box);
        }
        document.getElementById("body-colors").appendChild(flexBox);
      }
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
        console.log(event.target.copyText);

        const t = document.createElement("textarea");
        const bc = document.getElementById("moni");
        const bcin = document.getElementById("monin");
        const bcun = document.getElementById("monun");
        document.body.appendChild(t);
        t.value = event.target.copyText;
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
