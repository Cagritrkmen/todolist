let task = document.querySelector("#task")
let button = document.querySelector("#liveToastBtn")
let successToast = document.querySelector("#liveToastsuccess")
let errorToast = document.querySelector("#liveToasterror")
let list = document.querySelector("#list")
let listButtons = document.querySelectorAll("#listBtn")



let taskList = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []

taskList.forEach(element => {
    list.innerHTML += `<li onClick="done(event)">${element}<span onClick="deleteElement(event)" class="close">&times;</span></li>`
});


function newElement() {
    if(task.value.trim() == ""){
        $(errorToast).toast('show')
    }
    else{
        taskList.push(task.value)
        localStorage.setItem("task",JSON.stringify(taskList))
        list.innerHTML += `<li onClick="done(event)">${task.value}<span onClick="deleteElement(event)" class="close">&times;</span></li>`
        $(successToast).toast('show')
    }
    
}
function deleteElement(event){
    let object = event.target;
    let arrayIndexOfObject = taskList.indexOf(object.parentNode.childNodes[0].nodeValue)
    taskList.splice(arrayIndexOfObject, 1);
    localStorage.setItem(`task`,JSON.stringify(taskList))
    object.parentNode.remove();
}

function done(event){
    object = event.target
    if(!object.classList.contains("checked")){
        object.classList.add("checked")
    }
    else{
        object.classList.remove("checked")
    }
    
}


button.addEventListener("click", newElement);

