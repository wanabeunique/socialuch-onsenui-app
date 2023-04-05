function pushAds()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('ads.html');
}

function pushAd()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('ad.html');
}

function pushProblems()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('problems.html');
}

function pushNews()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('news.html');
}

function pushMap()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('map.html');
}

function next (el) {
  var carousel = el.parentNode.querySelector('#carousel');
  carousel.next();
}

function openText(el)
{
  let text = el.parentNode.querySelector('.blur-container')
  text.style = "height: 100%; background-image: none; color: #242424"
  el.remove()
}


function pushProblem()
{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('problem.html');
}

function pushNew(){
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('new.html');
}

function pushQuizzes(){
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('quizzes.html');
}

function pushQuiz(){
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('quiz.html');
}

function pushEvents(){
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('events.html');
}

function pushEdit(){
  const navigator = document.querySelector('#navigatorProfile');
  navigator.resetToPage('edit.html');
}


function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function pushProfile(){
  const navigator = document.querySelector('#navigatorProfile');
  navigator.resetToPage('tab4.html');
}