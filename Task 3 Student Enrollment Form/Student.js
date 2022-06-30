class RegForm {
  constructor(name, email, website, imgLink, gender, skills) {
    this.name = name;
    this.email = email;
    this.website = website;
    this.imgLink = imgLink;
    this.gender = gender;
  }
}

class GUI {
  static addData(form) {
    const desc = document.getElementById("showData");
    const para = document.createElement("p");
    para.innerHTML = `${form.name}<br>${form.email}<br>${form.website}<br>${form.gender}<br>`;
    desc.appendChild(para);
  }

  static addImg(form) {
    const desc2 = document.getElementById("showImg");
    const imglink = document.createElement("img");
    imglink.width = "100";
    imglink.height = "110";
    imglink.className = "img-responsive";
    imglink.src = `${form.imgLink}`;
    desc2.appendChild(imglink);
  }

  static displayData() {
    const data = Store.getData();
    data.forEach((ullu) => GUI.addData(ullu));
    data.forEach((ullu) => GUI.addImg(ullu));
  }

  static clearAllFileds() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#website").value = "";
    document.querySelector("#imgLink").value = "";
  }
}

class Store {
  static addData(form) {
    const data = Store.getData();
    data.push(form);
    localStorage.setItem("key", JSON.stringify(data));
  }

  static getData() {
    let getdata;
    if (localStorage.getItem("key") === null) getdata = [];
    else getdata = JSON.parse(localStorage.getItem("key"));

    return getdata;
  }
}

document.querySelector("#main-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  nameValidations();
  nameChangeValidations();

  const email = document.querySelector("#email").value;
  emailValidations();
  emailChangeValidations();

  const website = document.querySelector("#website").value;
  websiteValidations();
  websiteChangeValidations();

  const imgLink = document.querySelector("#imgLink").value;
  imgValidations();
  imgChangeValidations();
  if (name == "" || email == "" || website == "" || imgLink == "") return false;

  const gender = document.querySelector('input[name="browser"]:checked').value;
  const form = new RegForm(name, email, website, imgLink, gender);
  Store.addData(form);
  GUI.addData(form);
  GUI.addImg(form);
  GUI.clearAllFileds();
});

document.querySelector("#clear").addEventListener("click", (e) => {
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#website").value = "";
  document.querySelector("#imgLink").value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  GUI.displayData();
});

document.getElementById("name").addEventListener("input", (e) => {
  nameValidations();
  nameChangeValidations();
});

function nameValidations() {
  var name = document.getElementById("name");
  var ename = document.getElementById("ename");

  if (name.value == "") {
    name.style.borderColor = "red";
    ename.style.display = "block";
    return false;
  }
  return true;
}

function nameChangeValidations() {
  var name = document.getElementById("name");
  var ename = document.getElementById("ename");

  if (name.value != "") {
    name.style.borderColor = "rgba(0,0,0,.15)";
    name.style.color = "#495057";
    ename.style.display = "none";
  }
}

document.getElementById("email").addEventListener("input", (e) => {
  emailValidations();
  emailChangeValidations();
});

function emailValidations() {
  var email = document.getElementById("email");
  var eemail = document.getElementById("e-email");

  if (email.value == "") {
    email.style.borderColor = "red";
    eemail.style.display = "block";
    return false;
  }
  return true;
}

function emailChangeValidations() {
  var email = document.getElementById("email");
  var eemail = document.getElementById("e-email");

  if (email.value != "") {
    email.style.borderColor = "rgba(0,0,0,.15)";
    email.style.color = "#495057";
    eemail.style.display = "none";
  }
}

document.getElementById("website").addEventListener("input", (e) => {
  websiteValidations();
  websiteChangeValidations();
});

function websiteValidations() {
  var website = document.getElementById("website");
  var eWeb = document.getElementById("eWeb");

  if (website.value == "") {
    website.style.borderColor = "red";
    eWeb.style.display = "block";
    return false;
  }
  return true;
}

function websiteChangeValidations() {
  var website = document.getElementById("website");
  var eWeb = document.getElementById("eWeb");

  if (website.value != "") {
    website.style.borderColor = "rgba(0,0,0,.15)";
    website.style.color = "#495057";
    eWeb.style.display = "none";
  }
}

document.getElementById("imgLink").addEventListener("input", (e) => {
  imgValidations();
  imgChangeValidations();
});

function imgValidations() {
  var imglink = document.getElementById("imgLink");
  var eImg = document.getElementById("eImg");

  if (imglink.value == "") {
    imglink.style.borderColor = "red";
    eImg.style.display = "block";
    return false;
  }
  return true;
}

function imgChangeValidations() {
  var imglink = document.getElementById("imgLink");
  var eImg = document.getElementById("eImg");

  if (imglink.value != "") {
    imglink.style.borderColor = "rgba(0,0,0,.15)";
    imglink.style.color = "#495057";
    eImg.style.display = "none";
  }
}