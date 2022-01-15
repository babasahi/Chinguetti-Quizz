
let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

document.getElementById("name").innerHTML = user_name;
document.getElementById("points").innerHTML = user_points;
