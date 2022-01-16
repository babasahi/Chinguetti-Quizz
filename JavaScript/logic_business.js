
let input = document.getElementsByTagName('input');
const form = document.getElementById('form');

let compteur = 0;
let score=0;
let vrai = 0;
let nonchecked = 7;
let check = 0;
let Totale = 7 ;
sessionStorage.setItem("TotalQeustion", Totale);

function reload()
{
location.reload();
return false;
}


function resett(){
    for (let i = 0;i<Q7.length;i++)
    {
        if(Q[i].checked) Q[i].checked = false;
    }
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
let Q4=document.getElementsByName('Q5');
let Q5=document.getElementsByName('Q6');
let Q6=document.getElementsByName('Q7');




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
},
{
"choix" : Q4,
"reponse" : 0
},
{
 "choix" : Q5,
 "reponse" : 0
 },
 {
  "choix" : Q6,
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

if(compteur == 21)
{       let answer;
do
answer = prompt("Quelle question n'a aucune reponse",'entre 1 et 4 ');
while(isNaN(answer) || ( answer > 4) || (answer < 1));
if(answer == 2) {score+=2;
alert(" Score:"+score + "\n" + "tq" + Totale + "\n" + "QR"+check + "\n" + "noncked"+Totale );
}
else {
alert(" Score: "+score );
}
sessionStorage.setItem("points", score);
sessionStorage.setItem("nocheck", nonchecked);
displaybuttons();
return ;
}


if(compteur >3 && compteur<=6)
nonchecked-=6;
if(compteur >6 && compteur<=9) 
nonchecked-=5;
if(compteur > 9 && compteur<=12)
nonchecked-=4;
if(compteur > 12 && compteur<=15)
nonchecked-=3;
if(compteur > 15 && compteur<=18)
nonchecked-=2;
if(compteur > 18 && compteur<21)
nonchecked-=1;

sessionStorage.setItem("nocheck", nonchecked);
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
sessionStorage.setItem("points", score);
alert("SCORE : "+score + "Rnp" +nonchecked);
displaybuttons();
location.href="end.html"

}
