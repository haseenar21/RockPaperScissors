let user=document.querySelector("#userscore");
let comp=document.querySelector("#computerscore");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userscore=0;
let computerscore=0;


const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random];

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You Won ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;
    }  
    else{
        msg.innerText=`You Lost ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        computerscore++;
        comp.innerText=computerscore;
    }
}
const drawgame=()=>{
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";

}
const playGame=(userchoice)=>{
        // user choice
       const compchoice= gencompchoice();
        if(userchoice===compchoice){
            // DRAW GAME
            drawgame();
        }
        else{
           let userwin=true;
           if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
           } 
           else if(userchoice==="paper"){
            userwin=compchoice==="rock"?true:false;
           }
           else {
            userwin=compchoice==="paper"?true:false;
           }  
            showwinner(userwin,userchoice,compchoice);
        }
       
        
        
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("Id");
        playGame(userchoice);
    })
})

