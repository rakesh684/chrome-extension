let myLeads=[]
const inputEl=document.querySelector("#input-el")
const inputBtn=document.querySelector("#input-btn")

const ulEL=document.querySelector("#ul-el")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    renderLeds()
    inputEl.value=""
})

function renderLeds(){
    let listItem=""
    for(let i=0;i<myLeads.length;i++){
        // listItem +="<li> <a target='-blank' href='#'>" + myLeads[i]+ "</li>"
        listItem+= `
          <li>
          <a target='_blank' href="${myLeads[i]}">
          ${myLeads[i]}
          </li>
          </a>
        `
    }
    ulEL.innerHTML=listItem
    console.log(listItem)
}

// let listItem=""

// for(let i=0;i<myLeads.length;i++){
//     // ulEL.innerHTML+="<li>"+ myLeads[i] +"</li> "
//     // create element
//     // set text content
//     // append to ul

//     // const li=document.createElement("li")
//     // li.textContent=myLeads[i]
//     // ulEL.append(li)

//     listItem +="<li>"+ myLeads[i]+ "</li>"
// }



const contEl=document.querySelector("#cont-el")
contEl.innerHTML="<button onclick='buy()'>Buy!</button>"
function buy(){
    contEl.innerHTML="<button>Thanks for buying</button>"
}