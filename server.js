const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
   insert.innerHTML = `
    <div class="keys">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>Event Key</small>
    </div>
    <div class="keys">
      ${e.keyCode}
      <small>Event keyCode</small>
    </div>
    <div class="keys">
      ${e.code}
      <small>Event Code</small>
    </div>`
});