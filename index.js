var container = document.getElementById("container");
var containers = document.getElementById("containers");

for (let index = 1; index < 2000; index++) {

    var item = document.createElement('div');
    item.classList.add("cell")

    container.appendChild(item);
}


for (let index = 1; index < 2000; index++) {

    var item = document.createElement('div');
    item.classList.add("cell")

    containers.appendChild(item);
}


 function columns(columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    containers.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
}

const selectElement = document.querySelector('#input');

selectElement.addEventListener('change', (event) => {
    container.style.gridTemplateColumns = `repeat(${event.target.value}, 1fr)`;
    containers.style.gridTemplateColumns = `repeat(${event.target.value}, 1fr)`;
});
