const inputForm = document.querySelector("#espresso-menu-form");
const inputValue = document.querySelector("#espresso-menu-name");
const inputButton = document.querySelector("#espresso-menu-submit-button");
let count = document.querySelector(".menu-count");
let countNumber = 0;

let menus = [];

function handleSubmitMenu(event) {
    event.preventDefault();
    const newMenu = inputValue.value;
    if (newMenu !== '') {
      menus.push(newMenu);
      inputValue.value = "";
      paintMenu(newMenu);
    }
}

function paintMenu(newMenu) {
    const NM = newMenu;
    count.innerText = `총 ${++countNumber}개`;
    const menuList = document.querySelector("#espresso-menu-list");

    let li = document.createElement("li");
    li.className = "menu-list-item d-flex items-center py-2";

    let span = document.createElement("span");
    span.className = "w-100 pl-2 menu-name";
    span.innerText = newMenu;

    let buttonEdit = document.createElement("button");
    buttonEdit.type = "button";
    buttonEdit.className = "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    buttonEdit.innerText = "수정";

    let buttonRemove = document.createElement("button");
    buttonRemove.type = "button";
    buttonRemove.className = "bg-gray-50 text-gray-500 text-sm menu-remove-button"
    buttonRemove.innerText = "삭제";

    menuList.appendChild(li)
    li.appendChild(span);
    span.appendChild(buttonEdit);
    span.appendChild(buttonRemove);

    buttonEdit.addEventListener("click", menuEdit)
    buttonRemove.addEventListener("click", menuRemove)

    function menuRemove(){
      const confirm = window.confirm('정말 삭제하시겠어요?');
      if (confirm) {
        menuList.removeChild(li);
        count.innerText = `총 ${--countNumber}개`;
      }
    }
    
    function menuEdit(){
      const newName = window.prompt('어떤 이름으로 변경하시겠어요?');
      span.innerText = newName;
      span.appendChild(buttonEdit);
      span.appendChild(buttonRemove);

    }
}



inputForm.addEventListener("submit", handleSubmitMenu);
inputButton.addEventListener("click", handleSubmitMenu);