/* Make something awesome! */
var step = 0

var MAX = 2

function onClickNext() {
  if(step < MAX) {
    step++
  } else {
    document.location.href = "city.html"
  }
  setText(step)
}

function onClickBack() {
  if(step > 0) {
    step--
  } else {
    document.location.href = "index.html"
  }
  setText(step)
}

function setText(i) {
 switch(i) {
   case 0: 
     overview()
     break;
   case 1: 
     step1()
     break;
   case 2: 
     step2()
     break;
 }
}

function overview() {
  document.getElementById("pageTitle").innerHTML="Who is Ryan?";
  document.getElementById("pageContent").innerHTML="Ryan is a thirty-year-old contractor living in the suburbs of Columbus, Ohio. He’s a devout Catholic and has a wife named Marlene, to whom he has been married for eight years. However, they have no children because neither of them feel like they have the time or energy for kids. They’re always too busy working.";
  document.getElementById("pageProgress").style.width = "0%";
}

function step1() {
  document.getElementById("pageTitle").innerHTML="Transportation Habits";
  document.getElementById("pageContent").innerHTML="Although Ryan drives all over the greater Columbus area for his job, a commute that can take up to an hour each way, he does not enjoy driving. He hates how much time he spends sitting in traffic and wishes he could use public transportation, but the infrastructure simply isn&#39;t extensive enough to fit his needs. So, both he and his wife take their separate cars every day to accommodate their different schedules. Ryan drives his white 2002 Ford Explorer despite how much he has to spend on gas, because he needs the space to hold his tools and he feels emotionally attached to the truck. His wife drives a used 2005 Honda Civic.";
  document.getElementById("pageProgress").style.width = "60%";
}

function step2() {
  document.getElementById("pageTitle").innerHTML="City Culture";
  document.getElementById("pageContent").innerHTML="Marlene has been pushing Ryan to look at housing options in the city proper but Ryan doesn&#39;t believe it&#39;s worth it. Although the move would save Marlene time on her commute, and they wouldn&#39;t need to drive half an hour to eat a decent meal, Ryan&#39;s commute wouldn&#39;t be very different. Despite his long hours, he just doesn&#39;t make enough on a contractor&#39;s salary to justify the decision. Regardless, Ryan is happy with his career choice and home life. He likes to live by his motto, &#34;Shave against the grain&#34;";
  document.getElementById("pageProgress").style.width = "80%";
}
