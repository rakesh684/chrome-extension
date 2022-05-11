// chrome://extension/
let myLeads=[]
let oldLeads=[]


const inputEl=document.querySelector("#input-el")
const inputBtn=document.querySelector("#input-btn")

const ulEL=document.querySelector("#ul-el")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const saveBtn=document.querySelector("#tab-btn")
// localStorage.clear()
let deletebtn=document.querySelector("#input-btn-2")
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


saveBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})
function render(leads){
    let listItem=""
    for(let i=0;i<leads.length;i++){
        // listItem +="<li> <a target='-blank' href='#'>" + myLeads[i]+ "</li>"
        listItem += `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>
        `
    }
    ulEL.innerHTML=listItem
    // console.log(listItem)
}

deletebtn.addEventListener('dblclick',function(){
    localStorage.clear()
    myLeads=[]
   render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    // renderLeds()
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // console.log( localStorage.getItem("myLeads") )
}) 



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



// const contEl=document.querySelector("#cont-el")
// contEl.innerHTML="<button onclick='buy()'>Buy!</button>"
// function buy(){
//     contEl.innerHTML="<button>Thanks for buying</button>"
// }
