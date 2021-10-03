document.onreadystatechange = () => {
	if(document.readyState !== "complete"){
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
		document.querySelector("#loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
}

const button = document.querySelector("button");
const skills = document.querySelectorAll("#skills");
const head = document.querySelector("#head");
const text = document.querySelector("#text");

button.addEventListener("click", e => {
   e.preventDefault();
   
   alert("Thanks for hiring me");
});

for(let i = 0; i < skills.length; i++){
skills[i].addEventListener("click", e => {
  e.preventDefault();
  head.innerHTML = "My skills are:";
  text.innerHTML = "";
  ["HTML","CSS","JAVASCRIPT","Express"].forEach(d => {
      text.style.marginTop = "1rem";
      text.innerHTML += `${d} <br>`;
  });
});
}