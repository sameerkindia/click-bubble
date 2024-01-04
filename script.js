const body = document.querySelector("body");
const spanEl = document.querySelector("span");
const customPointer = document.querySelector("div");

function randomColor() {
  let randomNumber = "#";
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random(1) * 10);
    randomNumber += num;
  }

  return randomNumber;
}

function propertys() {
  return {
    height: `${Math.random(1) * 200}px`,
    color: randomColor(),
  };
}

let { height, color } = propertys();

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  customPointer.style.transform = `translate(${x}px, ${y}px)`;
  customPointer.style.height = height;
  customPointer.style.width = height;
  customPointer.style.backgroundColor = color;
});

document.addEventListener("click", (e) => {
  const positionX = `${e.pageX}px`;
  const positionY = `${e.pageY}px`;

  const heightWidth = height;
  const element = document.createElement("span");

  element.style.backgroundColor = color;
  element.style.width = heightWidth;
  element.style.height = heightWidth;
  element.style.left = positionX;
  element.style.top = positionY;
  body.appendChild(element);

  height = propertys().height;
  color = propertys().color;
});
