function choixprop() {
    var s=0;

 var capitale=document.getElementsByName("Q1");

 if(capitale[0].checked){
    s=s+2;
 }
 else if(capitale[1].checked || capitale[2].checked){
    s=s-1;
 }

 var sommet=document.getElementsByName("Q2");

  if(sommet[0].checked){
    s=s+2;
}
 else if (sommet[1].checked || sommet[2].checked){
    s=s-1;
}
     var dialectes=document.getElementsByName("Q3");

  if(dialectes[2].checked){
    s=s+2;
}
 else if (dialectes[0].checked || dialectes[1].checked){
    s=s-1;
}

     var boisson=document.getElementsByName("Q4");

  if(boisson[1].checked){
    s=s+2;
}
 else if (boisson[0].checked || boisson[2].checked){
    s=s-1;
}

        var habits=document.getElementsByName("Q5");

 if ( (habits[0].checked && habits[2].checked==true) && (habits[1].checked==false)){
    s=s+2;
}

     else if(habits[1].checked  &&  (habits[0].checked || habits[2].checked ) || habits[0].checked || habits[1].checked || habits[2].checked){
    s=s-1;
}
if(s!=0){
    s=s+2;
    alert("votre score est : "+s);
}
else if(s==0){
var  piege=document.getElementsByName("Q6");
  var ques=prompt("Quelle est la numero de la question piege");
if(ques==6){
s=s+2;
}
else{
s=s-1;
}
alert("Votre score est :" +s);
}

}

