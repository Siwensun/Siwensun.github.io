function change_pic(){
var imgObj = document.getElementById("avatar");
var Flag=(imgObj.getAttribute("src",2)=="https://i.imgur.com/wKoyIPY.png")
imgObj.src=Flag?"https://i.imgur.com/QijZZ98.png":"https://i.imgur.com/wKoyIPY.png";
}
