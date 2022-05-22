const youtube = document.querySelector("#youtube");
const calendarIcon = document.querySelector("#calender-icon");
const calendarClose = document.querySelector("#calender .close-box .close");

function openCalendar(){
    document.querySelector("#calender").classList.remove("hidden");;
}
function closeCalendar(){
    document.querySelector("#calender").classList.add("hidden");;
}

function toYoutube(){
    window.open("https://www.youtube.com/");
}

calendarIcon.addEventListener("click",openCalendar);
calendarClose.addEventListener("click",closeCalendar);
youtube.addEventListener("click",toYoutube);