const listItems = document.querySelector(".listItems");
const addButton = document.querySelector(".addButton");
const inputItem = document.querySelector("#input");
const search = document.querySelector("#search");
const clearTasks = document.querySelector('.clearButton');
const selectOpetion = document.querySelector("#selectoption");
const inputDate = document.querySelector('#inputDate');


selectOpetion.addEventListener('change', ()=>{
     

        let allist = document.querySelector('li');
        
    

} );
clearTasks.addEventListener('click' ,cleartask);

function cleartask(){
    listItems.innerHTML= "";
}

addButton.addEventListener('click' , addItem);
search.addEventListener('keyup' , searchItems);

function searchItems(){
    let allList = document.getElementsByTagName('li');
    for (let index = 0; index < allList.length; index++) {
        let inputSearch = search.value.toUpperCase();
        let listItemValue = allList[index].innerText.toUpperCase();
        if ((listItemValue).indexOf(inputSearch) > -1){
            allList[index].style.display = "block"
        }else{
            allList[index].style.display = "none"
        }

    };
};

function addItem(){
    let dateInput =inputDate.value;
    let input = inputItem.value;
    let listItem = document.createElement('li');
    listItem.style.listStyle = "none" ;
    listItem.style.backgroundColor ="pink"
    listItem.innerText = input;
    listItem.style.margin = "30px";
    listItem.style.padding = "30px";
    let spanElement = document.createElement('span');
    spanElement.className = "date-span";
    spanElement.style.marginLeft="500px"
    spanElement.innerText = dateInput;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click' , ()=>{
        listItems.removeChild(listItem);
    });
    deleteButton.className ="btn btn-outline-primary pull-right";
    deleteButton.style.marginLeft ="1030px"
    listItem.appendChild(spanElement);
    listItem.appendChild(deleteButton);
    listItems.appendChild(listItem);
    inputItem.value = "";
    
}