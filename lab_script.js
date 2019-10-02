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

function add() {
    var textName = document.getElementsByTagName("input")[1].value, 
        textAboutArtist = document.getElementsByTagName("input")[2].value,
        artistImage = document.getElementsByTagName("input")[3].value,
        btn_delete = document.createElement("button"),
        text_delete = document.createTextNode("delete");
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
        p.parentNode.removeChild(p);
   }