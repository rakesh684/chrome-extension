let myLeads=["www.ewesomelead.com","www.epicled.com","www.google.com"]
const inputEl=document.querySelector("#input-el")
const inputBtn=document.querySelector("#input-btn")

const ulEL=document.querySelector("#ul-el")

inputBtn.addEventListener("click",function(){
    myLeads.push(input.value)
})

inputEl.addEventListener("click" , function(){
    inputEl.textContent=myLeads[0]
})
let listItem=""

for(let i=0;i<myLeads.length;i++){
    // ulEL.innerHTML+="<li>"+ myLeads[i] +"</li> "
    // create element
    // set text content
    // append to ul

    // const li=document.createElement("li")
    // li.textContent=myLeads[i]
    // ulEL.append(li)

    listItem +="<li>"+ myLeads[i]+ "</li>"
}
ulEL.innerHTML=listItem
const contEl=document.querySelector("#cont-el")
contEl.innerHTML="<button onclick='buy()'>Buy!</button>"
function buy(){
    contEl.innerHTML="<button>Thanks for buying</button>"
}