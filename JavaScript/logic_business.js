
let input = document.getElementsByTagName('input');
const form = document.getElementById('form');





let compteur = 0;
let score=0;
let Totale = 7 ;
let nonchecked = 7 ;




function reload()
{
location.reload();
return false;
}

function resett(){
    for (let i = 0;i<Q.length;i++)
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
"reponse" : 2
},
{
"choix" : Q3,
"reponse" : 1
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
   "reponse" : 1
 }

];
 

      function result(){

if ((Q[0].checked || Q[1].checked  || Q[2].checked == true)) {
    nonchecked --;  
}
if ((Q1[0].checked || Q1[1].checked  || Q1[2].checked == true)) {
 nonchecked --;  
}
if ((Q2[0].checked || Q2[1].checked  || Q2[2].checked == true)) {
 nonchecked --;  
}
if ((Q3[0].checked || Q3[1].checked  || Q3[2].checked == true)) {
 nonchecked --;  
}
if ((Q4[0].checked || Q4[1].checked  || Q4[2].checked == true)) {
 nonchecked --;  
}
if ((Q5[0].checked || Q5[1].checked  || Q5[2].checked == true)) {
 nonchecked --;  
}
if ((Q6[0].checked || Q6[1].checked  || Q6[2].checked == true)) {
 nonchecked --;  
}


for ( let i= 0 ;i<input.length;i++)
{
if(input[i].type == 'radio' && !input[i].checked)
{   compteur++;
    
}

}
if(compteur == 21)
{       let answer;
do
answer = prompt("What question has no answer",'between 1 and 7');
while(isNaN(answer) || ( answer > 8) || (answer < 1));
if(answer == 2) {score+=2;
    alert(  "Score : "+score + "\n" + "Total Questions : " +Totale
    + "\n" + "Unanswered questions : " +Totale+ "\n"  );
}
else {
         score-=1 ;
    alert( "Score : "+score + "\n" + "Total Questions : "+Totale
    + "\n" + "Unanswered questions : " +Totale + "\n"  );
}
displaybuttons();
return ;

}

score=0;

for(i=0;i<questions.length;i++)
{

  

let choix = questions[i].choix;

let reponse = questions[i].reponse;
let v = 0 ;
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
        v++;
    }

    if (v == 3 && j==2)
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



alert( "Score : "+score + "\n" + "Total Questions : "+Totale
+ "\n" + "Unanswered questions :" +nonchecked  );
displaybuttons();

}
