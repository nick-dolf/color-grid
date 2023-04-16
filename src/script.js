buildGrid(20,20);

function buildGrid(height, width) {
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`

  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild)
  }

  for (let index = 0; index < height*width; index++) {
    grid.append(cell.content.cloneNode(true));
  }
}

newGrid.addEventListener("click", () => {
  buildGrid(height.value, width.value)
})

gridOutline.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((element) => {
    element.classList.toggle('outline')
  })
})

addEventListener("dragstart", (event) => {
  event.preventDefault();
});

addEventListener("contextmenu", (event) => {
  const target = event.target;

  if (target.classList.contains("cell") || target.id == "grid") {
    event.preventDefault();
  }
});

let leftColor = color1;
leftColor.classList.add("selected");
let rightColor = color4;
rightColor.classList.add("selected");

addEventListener("mousedown", (event) => {
  const target = event.target;

  if (target.classList.contains("cell") && event.buttons == 1) {
    const color = leftColor.getElementsByTagName("input")[0];
    target.style.background = color.value;
  } else if (target.classList.contains("cell") && event.buttons == 2) {
    const color = rightColor.getElementsByTagName("input")[0];
    target.style.background = color.value;
  } else if (target.closest(".leftColorGroup")) {
    setLeftColor(target.closest(".leftColorGroup"));
  } else if (target.closest(".rightColorGroup")) {
    setRightColor(target.closest(".rightColorGroup"));
  }
});

addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.classList.contains("cell") && event.buttons == 1) {
    const color = leftColor.getElementsByTagName("input")[0];
    target.style.background = color.value;
  }
  if (target.classList.contains("cell") && event.buttons == 2) {
    const color = rightColor.getElementsByTagName("input")[0];
    target.style.background = color.value;
  }
});

addEventListener("keypress", (event) => {
  switch (event.key) {
    case "1":
      setLeftColor(color1);
      break;
    case "2":
      setLeftColor(color2);
      break;
    case "3":
      setLeftColor(color3);
      break;
    case "4":
      setRightColor(color4);
      break;
    case "5":
      setRightColor(color5);
      break;
    case "6":
      setRightColor(color6);
      break;
  }
});

function setLeftColor(color) {
  leftColor.classList.remove("selected");
  leftColor = color;
  leftColor.classList.add("selected");
}

function setRightColor(color) {
  rightColor.classList.remove("selected");
  rightColor = color;
  rightColor.classList.add("selected");
}
