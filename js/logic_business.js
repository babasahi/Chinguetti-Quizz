let input = document.getElementsByTagName('input');
const valider = document.getElementById('valider');
const corriger = document.getElementById('corriger');
const reprendre = document.getElementById('reprendre');
const form = document.getElementById('form');
const clear = document.getElementById('clear');

let compteur = 0;
let score=0;

clear.onclick = resett;
function resett(){
    for (let i = 0;i<Q7.length;i++)
    {
        if(Q7[i].checked) Q7[i].checked = false;
    }
}

reprendre.onclick = reload;
function reload()
{
    location.reload();
return false;
}


form.onsubmit = unload;
function unload(event){
    event.preventDefault();

}



corriger.onclick = deactivate;

function deactivate(){
    corriger.disabled = true;
}




function displaybuttons(){

    reprendre.style.display = "";
    corriger.style.display = "";
    valider.disabled = true;
}
       let Q=document.getElementsByName('Q1');
       let Q1=document.getElementsByName('Q2');
       let Q2=document.getElementsByName('Q3');
       let Q3=document.getElementsByName('Q4');
       let Q4=document.getElementsByName('Q5');
       let Q5=document.getElementsByName('Q6');
       let Q6=document.getElementsByName('Q7');
       let Q7=document.getElementsByClassName('Q8');
       let Q8=document.getElementsByName('Q9');
       let Q9=document.getElementsByName('Q10');

let questions = [ 
    {
        "choix" : Q,
        "reponse" : 2
    },
    {
        "choix" : Q1,
        "reponse": 0
    },
    {
        "choix" : Q2,
        "reponse" : 2
    },
    {
        "choix" : Q3,
        "reponse" : 2
    },
    {
        "choix" : Q4,
        "reponse" : ""
    },
    {
        "choix" : Q5,
        "reponse" : 1
    },
    {
        "choix" : Q6,
        "reponse" : 0
    },
    {
        "choix" : Q7,
        "reponse" : [0,2]
    },
    {
        "choix" : Q8,
        "reponse" : 1
    },
    {
        "choix" : Q9,
        "reponse" : 1
    }
    
];


valider.onclick = result;
function result(){
for ( let i= 0 ;i<input.length;i++)
{
    if(input[i].type == 'radio' && !input[i].checked)
    {   compteur++;

    }
   
    
}
if(compteur == 30)
{       let answer;
    do
    answer = prompt("Quelle question n'a aucune reponse",'entre 1 et 10 , exemple : 2');
     while(isNaN(answer) || ( answer > 10) || (answer < 1));
    if(answer == 5) {score+=2;
        alert("DOMMAGE , VOTRE SCORE EST  : "+score + "\nVOUS NE CONNAISSEZ PAS L'HTML !");
     }
     else {
        alert("DOMMAGE , VOTRE SCORE EST  : "+score + "\nVOUS NE CONNAISSEZ PAS L'HTML !");
     }
     displaybuttons();
     return ;
}

score=0;

       
for(i=0;i<questions.length;i++)
{

    let choix = questions[i].choix;

    let reponse = questions[i].reponse;
    let juste = 0;
    let nonchecked = 0;
    let check = 0;
    let compteurcheck = 0;

    for( let j=0;j<3;j++)
    {

        //Question 8
        if (i==7)
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



            //Question 5
       else if(i==4)
        {
            if(choix[j].checked)
            {
                score+=-1;
                break;
            }
            else {
                nonchecked ++;
            }

            if (nonchecked == 3 && j==2)
            {
                score+=2;
                break;
            }
        }
       

       

        //Les autres questions
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

           
     
           if(18<=score)
           {alert("TRES BONNE CONNAISSANCE DU HTML \n SCORE : "+score);}
           else if(12<=score && score<18)
           {alert("BONNE CONNAISSANCE DU HTML \n SCORE : "+score);}
          else if(8<=score && score<12)
           {alert("CONNAISSANCE MOYENNE DU HTML \n SCORE : "+score);}
           else
           {alert("VOUS NE CONNAISSEZ PAS LE HTML \n SCORE : "+score);}
           displaybuttons();
           
        
  }
