let myLeads =["google.com","fb.com","yt.com"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");


inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
})

for (let i=0; i<myLeads.length;i++){
  console.log(myLeads[i]);
}
