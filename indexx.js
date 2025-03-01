const input = document.getElementById("checklistInput");
const btnAgregar = document.getElementById("agregarBtn");
const checklist = document.getElementById("checklist");

btnAgregar.addEventListener("click", agregarChecklist);
checklist.addEventListener("click", gestionarChecklist);

function agregarChecklist() {
  const texto = input.value.trim();
  if (texto === "") return alert("Añade un punto a la checklist");

  const li = document.createElement("li");
  li.textContent = texto;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "X";

  li.appendChild(btnDelete);
  checklist.appendChild(li);
  input.value = "";
}

function gestionarChecklist(e) {
  console.log(e.target);
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else {
    e.target.classList.toggle("completada");
  }
}