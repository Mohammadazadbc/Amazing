const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]

  const LEVEL_2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]


  let newmain = document.querySelector('main')
  
  function leve1(){
  let positionX =0;
  let positionY =0;

for(let i = 0; i < LEVEL_1.length; i++){
    for(let j = 0; j < LEVEL_1[i].length; j++){
        let stars = document.createElement('div')
        stars.innerHTML =LEVEL_1[i][j];
        stars.className="newStar"

        if(LEVEL_1[i][j] ==="*"){
            stars.classList.add('statsorder')
        }
        else if(LEVEL_1[i][j] =='S'){
            stars.classList.add('charctare')
            stars.classList.add('charIcon')
            positionX = i;
            positionY= j;
        }
        else if(LEVEL_1[i][j] ==="."){
            stars.classList.add('dotborder')
               
        }
        else if(LEVEL_1[i][j] ==="T"){
            stars.classList.add('castle')
        }
        newmain.appendChild(stars)      

    }
   
}




 window.addEventListener('keydown',(e)=>{

    let nexPostionX = positionX;
    let nexPostionY = positionY;
    
                    
        if(e.keyCode =="39" ){
            nexPostionX ++;
            
         }
          else if(e.keyCode =="37" ){
             
            nexPostionX --;
            
              
        }
        else if(e.keyCode =="40" ){
            nexPostionY ++;
            
        }
        else if(e.keyCode =="38" ){
            nexPostionY --;
           
        }

        let toutCase = document.querySelectorAll('div')[nexPostionY*13 + nexPostionX];
        console.log(toutCase);

        if(toutCase.classList.contains('dotborder')){
            document.querySelectorAll('div')[positionY*13 +positionX].classList.remove('charIcon')
            positionX = nexPostionX
            positionY = nexPostionY
            toutCase.classList.add('charIcon')
        }
    
    }) 
    

 }
 leve1();

 

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
         lev2Div.classList.add('charIcon2')
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
     
     if(allCase.classList.contains('dot-bg') ||  allCase.classList.contains('charctare2') ){
         document.querySelectorAll('div')[posY*22 +posX].classList.remove('charIcon2')
         posX = nextPosx
         posY = nextPosY
         allCase.classList.add('charIcon2')
     }
 
 }) 

  }

GameLeve2();



let btn1 = document.createElement('button');
let btnl2 = document.createElement('button')


btn1.innerText ="Level 1";
btnl2.innerHTML ="Level 2"

btn1.classList ="btn"
btnl2.className ="btn2"

document.body.appendChild(btn1)
document.body.appendChild(btnl2)

btn1.addEventListener('click',()=>{
    newmain.classList.toggle('desactive')
    sectinol2.classList.remove('active')
    

    
})

btnl2.addEventListener('click',()=>{
    sectinol2.classList.toggle('active')
    newmain.classList.remove('desactive')
})







/*
function addCreater(){
    let guyleft = 0;
    let guytop = 0;
    let img = document.createElement('img')
    img.setAttribute('src',"https://img.icons8.com/ios-filled/50/000000/courage.png")
    img.className="ball"
    window.addEventListener('keydown', function move(key){
        if(key.keyCode == "39" ){
            guyleft +=3;
           img.style.left = guyleft +'px'
           
        }
        else if(key.keyCode == "37"){
            guyleft -=3;
            img.style.left = guyleft +'px';
        }
        else if(key.keyCode == "40"){
            guytop +=3;
            img.style.top = guytop +'px';
        }

        else if(key.keyCode == "38"){
            guytop -=3;
            img.style.top = guytop +'px';
        }
    })


    newmain.appendChild(img)

}
addCreater();




*/