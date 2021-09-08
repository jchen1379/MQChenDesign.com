let request = new XMLHttpRequest();

const WakeUpHeroku = () => {
  request.open("GET", "https://mq-chen-design-react.herokuapp.com/");
  request.send();
}

setInterval(WakeUpHeroku, 25*60*1000);
