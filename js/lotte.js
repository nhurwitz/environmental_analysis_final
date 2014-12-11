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
  document.getElementById("pageTitle").innerHTML="Profile Overview";
  document.getElementById("pageContent").innerHTML="Lotte, a 34-year-old Danish woman living in the Copenhagen suburb of Frederiksburg, is always on the move. In 2008, Lotte kickstarted her own small business, opening up a storefront near Copenhagen&#39;s city center. Though her business thrived during its early years, Lotte started to gain weight and struggled to find time for exercise. In late 2010, she decided to make a change.";
  document.getElementById("pageProgress").style.width = "0%";
}

function step1() {
  document.getElementById("pageTitle").innerHTML="Transportation Habits";
  document.getElementById("pageContent").innerHTML="Having noticed a rising trend towards cycling as a primary mode of transportation, Lotte decided to jump on the bandwagon. Lotte sold her car, refurbished her bicycle and resolved to commit an extra 20 minutes every morning to the commute. She quickly discovered, however, that she didn&#39;t even need to. Copenhagen&#39;s traffic policies (prioritizing pedestrians and bicycles) had created such congestion for cars that driving had lost its primary convenience - speed.";
  document.getElementById("pageProgress").style.width = "10%";
}

function step2() {
  document.getElementById("pageTitle").innerHTML="City Culture";
  document.getElementById("pageContent").innerHTML="Just a few weeks after her transition to cycling, Lotte could feel the positive results of her transition. She was suddenly in the best shape of her life without even needing to make time for exercise in her busy schedule. She arrived at work each day feeling fresh and energized, and no longer had to worry about parking expenses. A few weeks later, the municipality of Copenhagen opted to remove parking spaces entirely from the section of downtown where her store was located. Initially concerned that this change would decrease the number of walk-ins to her store, Lotte quickly realized her fears were misplaced. Now automobile-free, her street was soon flooded with a rising number of pedestrians as its reputation as a people-friendly environment grew rapidly. Lotte&#39;s life is in a great place right now. Her motto translates to &#34;cycle towards success.&#34;";
  document.getElementById("pageProgress").style.width = "15%";
}

