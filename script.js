function changeText(){
   let text=document.getElementById("first");
   let link=document.getElementById("link1");
   
    if (link.innerHTML=="See More..."){
        text.classList.remove("hidden");
        link.innerHTML="See Less...";
    } else{
        text.classList.add("hidden");
        link.innerHTML="See More...";
    }
}
function changeExpand(){
   let text2=document.getElementById("second");
   let link2=document.getElementById("link2");
   
    if (link2.innerHTML=="See More..."){
        text2.classList.remove("hidden");
        link2.innerHTML="See Less...";
    } else{
        text2.classList.add("hidden");
        link2.innerHTML="See More...";
    }
}
function showResult(){
    let A1=document.getElementById("Q1").value;
    let A2=document.getElementById("Q2").value;
    let A3=document.getElementById("Q3").value;
    let A4=document.getElementById("Q4").value;
    let result1=document.getElementById("result1");
    let result2=document.getElementById("result2");
    let result3=document.getElementById("result3");
    let result4=document.getElementById("result4");
    let score=document.getElementById("score");
    let total=4;
    let results=document.getElementById("results");
    results.classList.remove("hidden");
   
     if (A1=="display:flex;"){
        result1.innerHTML="Question 1 - Correct";
    } else {
        result1.innerHTML="Question 1 - Incorrect";
        total=total-1;
    }
    if (A2=="onmouseover"){
        result2.innerHTML="Question 2 - Correct";
    } else {
        result2.innerHTML="Question 2 - Incorrect";
        total=total-1;
    }
     if (A3=="script.js"){
        result3.innerHTML="Question 3 - Correct";
    } else {
        result3.innerHTML="Question 3 - Incorrect";
        total=total-1;
    }
    if (A4=='a href=" "'){
        result4.innerHTML="Question 4 - Correct";
    } else {
        result4.innerHTML="Question 4 - Incorrect";
        total=total-1;
    }
    score.innerHTML=total + "/4";
}

setInterval("changeSlide()", 10000);
function changeSlide(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let num3=document.getElementById("num3");
    let num4=document.getElementById("num4");
    
    if (!num1.classList.contains("hidden")){
        num1.classList.add("hidden");
        num2.classList.remove("hidden");
    } else if (!num2.classList.contains("hidden")){
        num2.classList.add("hidden");
        num3.classList.remove("hidden");
    } else if (!num3.classList.contains("hidden")){
        num3.classList.add("hidden");
        num4.classList.remove("hidden");
    } else if (!num4.classList.contains("hidden")){
        num4.classList.add("hidden");
        num1.classList.remove("hidden");
    }
}