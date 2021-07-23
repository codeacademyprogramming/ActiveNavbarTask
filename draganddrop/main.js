function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const element = document.getElementById(id);
    event.target.appendChild(element);
    element.style.top = `${event.screenY - element.offsetHeight / 2}px`;
}