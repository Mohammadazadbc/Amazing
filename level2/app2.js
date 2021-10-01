const LEVEL_2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]

    
    let sectinol2 = document.createElement('section')
    sectinol2.className="section2"
    document.body.appendChild(sectinol2)

    function GameLeve2(){

    

    let posX =0;
    let posY =0;
    
  for(let i =0;i< LEVEL_2.length; i++){
    for(let j =0;j< LEVEL_2[i].length; j++){
        let lev2Div = document.createElement('div');
        lev2Div.innerHTML = LEVEL_2[i][j]
        lev2Div.className="starsl2"

        if(LEVEL_2[i][j] ==='*'){
        lev2Div.classList.add('stars-bc')    
        }
        
        else if(LEVEL_2[i][j] =='S'){
            lev2Div.classList.add('charctare2')
            lev2Div.classList.add('charIcon2')
            posX = i;
            posY= j;
        }
        else if(LEVEL_2[i][j] ==='.'){
            lev2Div.classList.add('dot-bg')
        }
        else if(LEVEL_2[i][j] ==='T'){
            lev2Div.classList.add('castle')
        }
        
        sectinol2.appendChild(lev2Div)
    }

}



 window.addEventListener('keydown',(e)=>{

    let nextPosx = posX;
    let nextPosY = posY;
    
                    
        if(e.keyCode =="39" ){
            nextPosx ++;
            
         }
          else if(e.keyCode =="37" ){
             
            nextPosx --;
            
              
        }
        else if(e.keyCode =="40" ){
            nextPosY ++;
            
        }
        else if(e.keyCode =="38" ){
            nextPosY --;
           
        }

        let allCase = document.querySelectorAll('div')[nextPosY*22 + nextPosx];
        
        if(allCase.classList.contains('dot-bg' || allCase.classList.contains('charctare2'))){
            document.querySelectorAll('div')[posY*22 +posX].classList.remove('charIcon2')
            posX = nextPosx
            posY = nextPosY
            allCase.classList.add('charIcon2')
        }
    
    }) 

     }

GameLeve2();