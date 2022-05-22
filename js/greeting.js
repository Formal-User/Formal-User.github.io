const USERNAME_KEY = "username";

const loginPage = document.querySelector("#login-page");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginClock = document.querySelector("#login-clock");
const logoutButton = document.querySelector("#logout");
const todoContainer = document.querySelector("#todo-container");
const mainPage = document.querySelector("#main-page");
const body = document.querySelector("body");

const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
	loginPage.style.display = "none";
	mainPage.style.display = "flex";
	mainPage.style.backgroundImage = `url('img/main_img.jpg')`;
	todoContainer.style.hieght = "0px";
}	

function onLoginSubmit(event){
	event.preventDefault();
	paintGreeting(savedUserName);
	const username = event.composedPath()[0][0].value;
	localStorage.setItem(USERNAME_KEY,username);
}

function updateLoginPage(event){
	loginForm.style.display = "flex";
	loginPage.style.background = "rgba(255, 255, 255, 0.3)";
	loginPage.style.transitionDuration = "1s";
	setTimeout(() => { loginClock.style.display = 'none'; }, 900);
	loginClock.style.animation = "fadeOutDown 1s";
}

function defualtDisplaySetting(){
	mainPage.style.display = "none";

	loginForm.style.display = "none";

	loginPage.style.display = "block";
	loginPage.style.background = "rgba(255, 255, 255, 0)";

	loginClock.style.display = "grid";
	loginClock.style.animation = "";
	loginInput.querySelector("input").value = "";
}

function logoutEvent(){
	localStorage.removeItem(USERNAME_KEY);
	defualtDisplaySetting();
}

function enterChangeColor(event){
	event.toElement.style.background = "rgba(255, 255, 255, 0.1)";
	logoutButton.querySelector("img").src="icon/power_off_enter.png"
}

function leaveChangeColor(event){
	event.fromElement.style.background = "rgba(255, 255, 255, 0)";
	logoutButton.querySelector("img").src="icon/power_off.png"
}

loginInput.addEventListener("submit",onLoginSubmit);
loginPage.addEventListener("click",updateLoginPage);
logoutButton.addEventListener("click",logoutEvent);
logoutButton.addEventListener("mouseenter",enterChangeColor);
logoutButton.addEventListener("mouseleave",leaveChangeColor);
if (savedUserName === null){
	defualtDisplaySetting();
} else{
	paintGreeting(savedUserName);
}