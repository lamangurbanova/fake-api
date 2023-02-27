let burger = document.querySelector(".fa-bars");
let back = document.querySelector(".back");
let hidden_menu = document.querySelector(".hidden-menu");
let close = document.querySelector(".close");
let sheet_3 =document.querySelector(".sheet-3")
let btn =document.querySelector(".button");

burger.addEventListener("click",()=>{
    back.style.display = "block";
    hidden_menu.style.left= "0";

});

close.addEventListener("click",()=>{
    back.style.display = "none";
    hidden_menu.style.left= "-100%"
});

back.addEventListener("click",()=>{
    back.style.display = "none";
    hidden_menu.style.left= "-100%"
})

fetch("https://fakestoreapi.com/products")
.then(reps=>reps.json())
.then(data =>{
    let newObj = "";
    data.slice(0,1).forEach((item) => {
        newObj += `  
        
            <div class="layout-3">
                <div class="layout-3-1">
                    <div class="img-3-1">
                        <img src=${item.image} alt="">
                    </div>
                    <div class="building">
                        <span><i class="fa-regular fa-building"></i></span>
                        <h3>Buildings</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div class="layout-3-2">
                    <div class="planning">
                        <span><i class="fa-solid fa-ghost"></i></span>
                        <h3>Planning</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua</p>
                    </div>
                    <div class="img-3-2">
                        <img src=${item.image} alt="">
                    </div>
                </div>

                <div class="layout-3-3">
                    <div class="img-3-3">
                        <img src=${item.image} alt="">
                    </div>
                    <div class="project">
                        <span><i class="fa-solid fa-gift"></i></i></span>
                        <h3>Our Projects</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua</p>
                    </div>
                </div>

            </div>

        
    `
        
    });

    sheet_3.innerHTML = newObj
})

let company = document.querySelector(".company")
function func1(){
    fetch("https://fakestoreapi.com/products")
    .then(reps=>reps.json())
    .then(data=>{
        let newimage ="";
        data.slice(0,1).forEach((item)=>{
            newimage += `
            <div class="img_comp">
                <img src=${item.image} alt="">
            </div>
            <div class="about">
                <h2>${item.title.slice(0,10)}</h2>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the
                    text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.</p>

                <a href="#">view more</a>
            </div>
        `
        })
        company.innerHTML=newimage;
    })
}

btn.addEventListener("click",()=>{
    console.log("dburd");
    func1()
})

