let Area = document.querySelector("textarea");
 let total = document.getElementById("Total");
 let remain = document.getElementById("Remaining");


Area.addEventListener("input", (event)=>{
    // console.log(e.target.value);
    // console.log(e.target.value.length);

    let countText = event.target.value.length;
    let remainText = 50-event.target.value.length;
    total.innerText = countText;
    remain.innerText = remainText;
    if(remainText == 0){
        alert("no more text u have written!");
    }
})