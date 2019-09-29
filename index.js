var container = document.getElementById("container");

for (let index = 1; index < 420; index++) {

    //var newContent = document.createTextNode(`${index}`);
    var item = document.createElement('div');
    item.classList.add("cell")
    //item.appendChild(newContent)



    container.appendChild(item);
}