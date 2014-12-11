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
  document.getElementById("pageTitle").innerHTML="Who is Wei?";
  document.getElementById("pageContent").innerHTML="Wei is 46 years old and lives alone in a small apartment in north Wan Chai, Hong Kong. He juggles long hours at the office, grocery shopping for himself and his cat Hao Shen, and weekly visits to his neighborhood gymnasium, where his name is listed beside 58 in this month&#39;s men&#39;s squash rankings.";
  document.getElementById("pageProgress").style.width = "0%";
}

function step1() {
  document.getElementById("pageTitle").innerHTML="Transportation Habits";
  document.getElementById("pageContent").innerHTML="Since graduating from university in 1989, his life has been fast-paced, non-stop action. After getting a diploma in biochemical engineering, he moved straight into a low-level job for a downtown branch of Simmons-Pacific, an international energy and chemical corporation. He&#39;s worked for them since, climbing the corporate rungs and impressing his superiors with his consistent creativity and diligence. He now leads his own pharmaceutical quality assessment task force. His employees respect him.";
  document.getElementById("pageProgress").style.width = "20%";
}

function step2() {
  document.getElementById("pageTitle").innerHTML="City Culture";
  document.getElementById("pageContent").innerHTML="Wei doesn&#39;t have a driver&#39;s license, but owns a red bike that he rides to work on weeks he can’t make it to the gym. He often stays up late reading reports and proofing project proposals sent up from the 17th floor. He commutes daily to and from work, using his Octopus card to pay for the transit railway. Though the rides are crowded, he enjoys the time to clear his head. Due to the housing crisis in his district, much of his salary goes to paying rent. He splits the remainder between savings, living expenses, and collecting grandfather clocks. Wei likes to spend his weekends and vacations going out with a friend shopping or to a upscale restaurant. Downtown, he uses covered escalators or buses to move between neighborhoods. He feels comfortable with his social and professional position. His motto is &#34;Keep going! Keep going!&#34;"
  document.getElementById("pageProgress").style.width = "30%";
}
