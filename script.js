function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    
    let weob=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonOb);
}
function addneweqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    
    let eqob=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

    eqob.insertBefore(newNode, eqAddButtonOb);
}
function addNewSkField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("SkField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    
    let skob=document.getElementById("Sk");
    let SkAddButtonOb=document.getElementById("SkAddButton");

    skob.insertBefore(newNode, SkAddButtonOb);
}
//generating CV
function generateResume(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    //status
    document.getElementById("statusT").innerHTML=document.getElementById("statusField").value;
    //contacts
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //links
    
    document.getElementById("fbT").innerHTML=document.getElementById("FbField").value;
    document.getElementById("linT").innerHTML=document.getElementById("LinkedInField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
    //obj
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //we
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;
    // eq
    let eqs=document.getElementsByClassName("eqField");
    let str1="";
    for(let e of eqs){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("eqT").innerHTML=str1;
    let Sks=document.getElementsByClassName("SkField");
    let str2="";
    for(let e of Sks){
        str2=str2+`<li> ${e.value} </li>`;
    }
    document.getElementById("SkT").innerHTML=str2;
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    
}
function printResume(){
    window.print();
}