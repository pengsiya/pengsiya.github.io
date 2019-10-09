function  addArtist() {
    var x = document.getElementById('addArtistList');
    if (x.style.display != "block") {
        x.style.display = "block";
    }else{
        document.getElementsByTagName("input")[1].value ="";
        document.getElementsByTagName("input")[2].value ="";
        document.getElementsByTagName("input")[3].value ="";
        x.style.display = "none";   
    }
}

function readInput() {
    var textName = document.getElementsByTagName("input")[1].value, 
        textAboutArtist = document.getElementsByTagName("input")[2].value,
        artistImage = document.getElementsByTagName("input")[3].value;
    return {"name":textName, "about":textAboutArtist, "url":artistImage};
}

function add() {
    var item = readInput();
    addToLocalStorage(item.name, item.about, item.url);
    addOneItem(item);
}

function addOneItem(artistInfo) {
    var btn_delete = document.createElement("button"),
        text_delete = document.createTextNode("delete"),
        textName = artistInfo.name,
        textAboutArtist = artistInfo.about,
        artistImage = artistInfo.url;
    var li = document.createElement("li");
    var image = document.createElement("img");
    var artDes = document.createElement("div");
    artDes.classList.add("artistDes");
    var artName = document.createElement("div");
    artName.classList.add("artistName");
    var artOrg = document.createElement("div");
    artName.textContent = textName;
    artOrg.textContent = textAboutArtist;
    artDes.appendChild(artName);
    artDes.appendChild(artOrg);
    image.setAttribute("src", artistImage);
    // var textnode=document.createTextNode(" "+textName + textAboutArtist);
    li.appendChild(image);
    li.appendChild(artDes);
    btn_delete.appendChild(text_delete);
    btn_delete.onclick = deleteRowFunction;
    li.appendChild(btn_delete);
    
    document.getElementById("artist_list").children[0].appendChild(li);
    document.getElementById("artist_list").style.display = "block";
    document.getElementById('addArtistList').style.display = "none";
    document.getElementsByTagName("input")[1].value ="";
    document.getElementsByTagName("input")[2].value ="";
    document.getElementsByTagName("input")[3].value ="";
}

function deleteRowFunction() {
    //no clue what to put here?
    var p=this.parentNode;
    for (var i = 0; i < p.parentNode.childElementCount; i++) {
        if (p.parentNode.children[i] == p) {
            var item = JSON.parse(localStorage.getItem('items'));
            item.splice(i, 1);
            localStorage.setItem('items', JSON.stringify(item));
        }
    }
    p.parentNode.removeChild(p);
}

function search(){
    var input,ul,li;
    input = document.getElementsByTagName("input")[0];
    filter = input.value.toUpperCase();
    ul = document.getElementsByTagName("ul")[1]
    li = ul.getElementsByTagName("li")
    for (i = 0; i<li.length; i++){
        txtValue = li[i].querySelector('.artistName').textContent;
        if(txtValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
}

function addToLocalStorage(textName, textAboutArtist, artistImage){
    var itemsArray = JSON.parse(localStorage.getItem('items'));
    var item = {
        "name":textName,
        "about":textAboutArtist,
        "url":artistImage
    };
    itemsArray.push(item);
    localStorage.setItem('items', JSON.stringify(itemsArray))
}

window.onload = () => {
    let itemsArray=[];
    const data = JSON.parse(localStorage.getItem('items'))
    if (data != null) {
        data.forEach(addOneItem);
    } else {
        localStorage.setItem('items', JSON.stringify([]));
    }
}
