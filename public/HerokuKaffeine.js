let request = new XMLHttpRequest();

const WakeUpHeroku = () => {
  request.open("GET", "https://mq-chen-design-react.herokuapp.com/");
  request.send();
}

setInterval(WakeUpHeroku, 20*60*1000);
