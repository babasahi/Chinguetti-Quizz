function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("nom").value;
  
    sessionStorage.setItem("name", name);
  
    location.href="first_level.html"
  }