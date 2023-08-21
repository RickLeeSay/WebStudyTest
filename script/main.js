let ShowPicture = document.querySelector("img");
ShowPicture.onclick = function(){
    let ImageSrc = ShowPicture.getAttribute("src")
    switch (ImageSrc){
        case "image/photoOne.png":ShowPicture.setAttribute("src","image/photoTwo.png");
        break;
        case "image/photoTwo.png":ShowPicture.setAttribute("src","image/photoThree.png");
        break;
        case "image/photoThree.png":ShowPicture.setAttribute("src","image/photoFour.png");
        break;
        case "image/photoFour.png":ShowPicture.setAttribute("src","image/photoFive.png");
        break;
        case "image/photoFive.png":ShowPicture.setAttribute("src","image/photoOne.png");
        break;
        default:
            ShowPicture.setAttribute("src","image/photoOne");
    }
};

// 设置欢迎语
let welcomeButton = document.querySelector("button");
let changeHelloWord = document.querySelector("H1");


function welcomeWord(){
    let UserName = prompt("Input your Name!");
    localStorage.setItem("User",UserName);
    if (typeof UserName === 'string' && UserName!== '' ){
        changeHelloWord.textContent = "hello my friend " + UserName ;
    }else if(UserName === ''){
        alert("Input can not be null!")
        welcomeWord()
    }else{
        alert("Input string please!")
        welcomeWord()
    };
};
if (!localStorage.getItem("User")){
    welcomeWord();
}else{
    changeHelloWord.textContent = "hello my friend " + localStorage.getItem("User") ;
};

welcomeButton.onclick = () =>{
    welcomeWord();
};

