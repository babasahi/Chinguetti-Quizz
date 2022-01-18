
        let input = document.getElementsByTagName('input');
        const form = document.getElementById('form');
        let compteur = 0;
        let score=0;
        let vrai = 0;
        let nonchecked = 4;
        let check = 0;
        let Totale = 4 ;
        let v = 0 ;
function reload()
{
    location.reload();
return false;
}


function unload(event){
    event.preventDefault();

}

function deactivate(){
    corriger.disabled = true;
}

function displaybuttons(){

reprendre.style.display = "";
corriger.style.display = "";
valider.disabled=true;

}



       let Q=document.getElementsByClassName('hamade');
       let Q1=document.getElementsByName('Q2');
       let Q2=document.getElementsByName('Q3');
       let Q3=document.getElementsByName('Q4');
       
 

let questions = [ 
    {
        "choix" : Q,
        "reponse" : [0,2]
    },
    {
        "choix" : Q1,
        "reponse": ""
    },
    {
        "choix" : Q2,
        "reponse" : 0
    },
    {
        "choix" : Q3,
        "reponse" : 0
    }
    

];


function result(){

for ( let i= 0 ;i<input.length;i++)
{
    if(input[i].type == 'radio' && !input[i].checked)
    {   compteur++;

    }
   
}

if(compteur == 12)
{       let answer;
    do
    answer = prompt("Quelle question n'a aucune reponse",'entre 1 et 4 ');
     while(isNaN(answer) || ( answer > 4) || (answer < 1));
    if(answer == 2) {score+=2;
        alert(" Score:"+score + "\n" + "tq" + Totale + "\n" + "QR"+check + "\n" + "noncked"+nonchecked );
     }
     else {
        alert(" Score: "+score );
     }
     displaybuttons();
     return ;
}
  if(compteur >3 && compteur<=6)
   nonchecked-=3;
   if(compteur >6 && compteur<=9) 
   nonchecked-=2;
   if(compteur > 9 && compteur<12)
   nonchecked-=1;
   
   check = Totale-nonchecked ;

   score=0;
 
for(i=0;i<questions.length;i++)
{

    let choix = questions[i].choix;

    let reponse = questions[i].reponse;
    let bi = 0 ;
    let compteurcheck = 0;

    for( let j=0;j<3;j++)
    {


      //Question 1
      if (i==0)
        { 
           for(let k=0;k<3;k++)
           {
            if (choix[k].checked)
            {
                compteurcheck++;
            }
           }
           if(compteurcheck == 2 && !choix[1].checked) {
               score+=2; break; }
               else if (compteurcheck == 0)
               {
                   break;
               }
            else score+=-1;
            break;
    }

    //pour Q2
    else if(i==1)
        {
            if(choix[j].checked)
            {
                score+=-1;
                break;
            }
            else {
                bi ++;
            }

            if (bi == 3 && j==2)
            {
                score+=2;
                break;
            }
        }
    else {

       if (choix[j].checked )
       {
           if( j == reponse) 
           score+=2;
           else {
               score+=-1;
           }
       }
       else score+=0;
    }
}

}
alert("SCORE : "+score + "Rnp" +nonchecked);
displaybuttons();

}



let time = 14;
let quizTimeInMinutes = time * 60 * 60 ;
quizTime = quizTimeInMinutes / 60 ;


function startCountdown() {
  let quizTimer = setInterval( function() {
    if (quizTime <= 0 ) {
      clearInterval(quizTimer);
      result();
      
    } else{
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      let formatted_sec = sec < 10 ? `0${sec}`: `${sec}`;
      let formatted_min = min < 10 ? `0${min}`: `${min}`
      document.getElementById("time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }
  
  }, 1000)
}
startCountdown();
   

function Quite() {
    location.href="home.html"
}
function tryagain() {
    location.href="register.html"
}
