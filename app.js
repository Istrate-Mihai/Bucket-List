let outputMessage = document.getElementById("outputMessage");
let forbiddenKeys = [
  "length",
  "clear",
  "getItem",
  "key",
  "removeItem",
  "setItem",
];

function validateForm(form) {
  if (form.Activity_Title.value != "" && form.Activity_Content.value != "") {
    outputMessage.innerHTML =
      "Your last sent activity to vathe bucket list was <br> " +
      "Title: " +
      form.Activity_Title.value +
      "<br>" +
      "Description: " +
      form.Activity_Content.value;
    localStorage.setItem(
      form.Activity_Title.value,
      form.Activity_Content.value
    );
    outputMessage.style.color = "green";
    return true;
  } else {
    outputMessage.innerHTML = "You must complete the entire form!";
    outputMessage.style.color = "red";
    return false;
  }
}

function showList() {
  console.log(localStorage);
  var x,
    txt = "";
  for (x in localStorage) {
    if (forbiddenKeys.includes(x)) continue;
    txt += `<h3 style="color:blue">${x}:<h3>
            <p style="color:green">${localStorage[x]}</p>     
            `;
  }
  outputMessage.innerHTML = txt;
  outputMessage.style.color = "blue";
}

function clearList() {
  localStorage.clear();
  outputMessage.innerHTML = "The Bucket List was successfully cleared!";
  outputMessage.style.color = "green";
}
