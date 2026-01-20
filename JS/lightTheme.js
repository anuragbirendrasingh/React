let btn = document.getElementById('btn');

isDark = false ;

btn.addEventListener('click',change)        

function change(){
     if(isDark==false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
         isDark = true ;
     }
     else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDark = false ;
     }
    
}