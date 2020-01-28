let root = document.getElementById("root");
let div = document.createElement('div')
let container = document.createElement('div');
let addBtn = document.createElement('a');
let list = document.createElement('div');
let btnT = document.createTextNode('Add new');
let loc = window.location;
let name = document.createElement('input');
let term = document.createElement('input');
let inputBtn = document.createElement('button');
let inputBtnT = document.createTextNode('Add');
let closeBtn = document.createElement('a');
let item = 0;



root.appendChild(container);
container.className = 'container';
container.appendChild(addBtn);
addBtn.className = 'addBtn';
addBtn.setAttribute('href', '#add')
addBtn.setAttribute('onclick', 'newSet()')
addBtn.appendChild(btnT);

container.appendChild(div);
name.setAttribute('id', 'name');
term.setAttribute('id', 'term');
inputBtn.appendChild(inputBtnT);
inputBtn.setAttribute('onclick', 'add()');
inputBtn.className = 'inputBtn';
list.className = 'list';
name.className = 'name';
term.className = 'term'
name.setAttribute('placeholder', 'Name...');
term.setAttribute('placeholder', 'term...');
closeBtn.className = 'closeBtn';
closeBtn.setAttribute('onclick', 'close');
closeBtn.setAttribute('href', '');
let closeBtnT = document.createTextNode('Close');
closeBtn.appendChild(closeBtnT);

function newSet() {
    loc.replace += "#add";
    div.appendChild(name);
    name.parentElement.className = 'form';
    div.appendChild(term);
    div.appendChild(inputBtn);
    addBtn.remove();
    container.appendChild(closeBtn);
}

function close() {
    loc.replace += "";
    container.appendChild(addBtn);
    closeBtn.remove();
    inputBtn.remove();
    term.remove();
    name.remove();
}

function add() {
    item++;
    let inputValueHeader = 'Name :' + name.value;
    let inputValueterm = 'Term :' + term.value;



    let t1 = document.createTextNode(inputValueHeader);
    let t2 = document.createTextNode(inputValueterm);
    let li = document.createElement('div');
    li.className = 'list_inner';
    let li_item1 = document.createElement('div');
    let li_item2 = document.createElement('div');
    li_item1.className = 'list_item'
    li_item2.className = 'list_item'
    div.parentElement.appendChild(list);
    li.appendChild(li_item1);
    li_item1.appendChild(t1);
    li.appendChild(li_item2);
    li_item2.appendChild(t2);

    if (inputValueHeader === '' || inputValueterm === '') {
        alert("You must write something!");
    } else {
        list.appendChild(li);
    }
    document.getElementById("name").value = "";
    document.getElementById("term").value = "";

    let modBtn = document.createElement('a');
    let modBtntxt = document.createTextNode("mod");
    modBtn.className = 'modify';
    modBtn.appendChild(modBtntxt);
    li.appendChild(modBtn);

    for (let i = 0; i < mod.length; i++) {
        mod[i].onclick = function () {
            loc.replace += "#/modify/:";
            let divM = this.parentElement;
            li_item1.remove();
            li_item2.remove();
            modBtn.remove();
            dltBtn.remove();
            let modName = document.createElement('input');
            modName.className = 'name';
            let modTerm = document.createElement('input');
            modTerm.className = 'term';
            let save = document.createElement('button');
            save.setAttribute('onclick', 'add()');
            let saveT = document.createTextNode('Save');
            save.appendChild(saveT);
            save.className = 'inputBtn2';
            divM.appendChild(save)
            divM.appendChild(modName);
            divM.appendChild(modTerm);
            modValueHeader = 'Input new Name :' + modName.value;
            modValueterm = 'Input new Term :' + modTerm.value;
            // li.remove();
        }
      
    }

    let dltBtn = document.createElement('a');
    let dltBtntxt = document.createTextNode("\u00D7");
    dltBtn.className = "delete";
    dltBtn.appendChild(dltBtntxt);
    li.appendChild(dltBtn);


    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

        }
    }

    // window.location
    return item;
}

let del = document.getElementsByClassName("delete");
for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

let mod = document.getElementsByClassName("modify");
for (let i = 0; i < mod.length; i++) {
    mod[i].onclick = function () {
        loc.replace += "#/modify/:" + item;
        var div = this.parentElement;
        // this.t1 = 
    }
}