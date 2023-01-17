const reloj = document.getElementById("reloj");

function update(){
    let date =  new Date();
    reloj.innerHTML = cTime(date);

    function cTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let mediodia = hours >= 12 ? "PM" : "AM";

        hours = (hours % 12) || 12;

        hours = zero(hours);
        minutes = zero(minutes);
        seconds = zero(seconds);

        return `${hours}:${minutes}:${seconds} ${mediodia}`
    }
    function zero(time){
        time = time.toString();
        return time.length < 2  ? "0" + time : time;
    }
}

update();
setInterval(update, 1000);