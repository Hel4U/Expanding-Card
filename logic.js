const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel)=>{
    //console.log(panel)
    panel.addEventListener("click",()=>{
        removeActiveClass();
        panel.classList.toggle("active");
    })
})

removeActiveClass=()=>{
    panels.forEach((panel)=>{
            panel.classList.remove("active");
    })
}