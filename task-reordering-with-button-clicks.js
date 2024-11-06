/*
function initialize() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      // Write your code here
    });
  });
}

document.body.innerHTML = `
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);
*/

function initialize() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskDiv = event.target.parentElement;
      const taskSpan = taskDiv.querySelector("span");

      if (button.classList.contains("upButton")) {
        const previousTaskDiv = taskDiv.previousElementSibling;
        if (previousTaskDiv) {
          const previousTaskSpan = previousTaskDiv.querySelector("span");
          // Swap the text content of the current and previous task spans
          [taskSpan.textContent, previousTaskSpan.textContent] = [
            previousTaskSpan.textContent,
            taskSpan.textContent,
          ];
        }
      } else if (button.classList.contains("downButton")) {
        const nextTaskDiv = taskDiv.nextElementSibling;
        if (nextTaskDiv) {
          const nextTaskSpan = nextTaskDiv.querySelector("span");
          // Swap the text content of the current and next task spans
          [taskSpan.textContent, nextTaskSpan.textContent] = [
            nextTaskSpan.textContent,
            taskSpan.textContent,
          ];
        }
      }
    });
  });
}

document.body.innerHTML = `
  <div>
      <span>Prepare presentation</span>
      <button class="downButton" type="button">&darr;</button>
  </div>
  <div>
      <span>Read emails</span>
      <button class="downButton" type="button">&darr;</button>
      <button class="upButton" type="button">&uarr;</button>
  </div>
   <div>
      <span>Added Task</span>
      <button class="downButton" type="button">&darr;</button>
      <button class="upButton" type="button">&uarr;</button>
  </div>
  <div>
      <span>Monthly report</span>
      <button class="upButton" type="button">&uarr;</button>
  </div>`;

initialize();

document.querySelectorAll("button")[0].click(); // Moves "Prepare presentation" down
document.querySelectorAll("button")[3].click(); // Moves "Monthly report" up
document.querySelectorAll("button")[1].click(); // Moves "Read emails" down

console.log(document.body.innerHTML);
