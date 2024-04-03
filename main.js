function suma(a,b){
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    let c = a+b
    prompt(c);
    return c;
    }
    
    function buttonPress(){
        suma(a,b);
        const audio = new Audio("soulEaterOp.mp3");
        audio.loop = true;
        audio.play();
    }
    