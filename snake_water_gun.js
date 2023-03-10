let player;
let computer;
let p_score=0;
let c_score=0;
const restart=()=>{
    p_score=0;
    c_score=0;
    document.querySelector("#pscore").innerHTML=p_score;
    document.querySelector("#cscore").innerHTML=c_score;
    
    document.querySelector("#message").innerHTML="Play Game!";
    document.querySelector("#turn").innerHTML="-----------";
}
const snake=() =>{
    player=1;
    computer = Math.floor(Math.random()*3+1)
    if(computer==1)
    {
        document.querySelector("#turn").innerHTML="computer choose snake";
    }
    else if(computer==2)
    {
        document.querySelector("#turn").innerHTML="computer choose water";
    }
    else{
        document.querySelector("#turn").innerHTML="computer choose gun";
    }
    if(player==computer)
    {
        document.querySelector("#message").innerHTML="It's a draw";
    }
    else if(computer==2)
    {
        document.querySelector("#message").innerHTML="Computer wins";
        c_score=c_score+1;
        document.querySelector("#cscore").innerHTML=c_score;
    }
    else
    {
        document.querySelector("#message").innerHTML="Computer wins";
        c_score=c_score+1;
        document.querySelector("#cscore").innerHTML=c_score;

    }


}
const water=() =>{
    player=2;
    computer = Math.floor(Math.random()*3+1)
    if(computer==1)
    {
        document.querySelector("#turn").innerHTML="computer choose snake";
    }
    else if(computer==2)
    {
        document.querySelector("#turn").innerHTML="computer choose water";
    }
    else{
        document.querySelector("#turn").innerHTML="computer choose gun";
    }
    if(player==computer)
    {
        document.querySelector("#message").innerHTML="It's a draw";
    }
    else if(computer==3)
    {
        document.querySelector("#message").innerHTML="Player wins";
        p_score=p_score+1;
        document.querySelector("#pscore").innerHTML=p_score;
    }
    else if(computer==1)
    {
        document.querySelector("#message").innerHTML="Player wins";
        p_score=p_score+1;
        document.querySelector("#pscore").innerHTML=p_score;

    }
}
    const gun=() =>{
        player=3;
        computer = Math.floor(Math.random()*3+1)
    
        if(computer==1)
        {
            document.querySelector("#turn").innerHTML="computer choose snake";
        }
        else if(computer==2)
        {
            document.querySelector("#turn").innerHTML="computer choose water";
        }
        else{
            document.querySelector("#turn").innerHTML="computer choose gun";
        }
        if(player==computer)
        {
            document.querySelector("#message").innerHTML="It's a draw";
        }
        else if(computer==1)
        {
            document.querySelector("#message").innerHTML="Player wins";
            p_score+=1;
            document.querySelector("#pscore").innerHTML=p_score;
        }
        else if(computer==2)
        {
            document.querySelector("#message").innerHTML="Computer wins";
            c_score=c_score+1;
            document.querySelector("#cscore").innerHTML=c_score;
    
        }
    

 }
