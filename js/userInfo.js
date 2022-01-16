
let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_noncheck = sessionStorage.setItem("nocheck");

document.getElementById("name").innerHTML = user_name;
document.getElementById("points").innerHTML = user_points;
document.getElementById("non").innerHTML = user_noncheck