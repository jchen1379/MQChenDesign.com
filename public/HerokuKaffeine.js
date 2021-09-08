let request = new XMLHttpRequest();

const WakeUpHeroku = () => {
  request.open("GET", "https://mq-chen-design-react.herokuapp.com/");
  console.debug(new Date().toISOString() + ": Waking up Heroku App");
  request.send();
}

setInterval(WakeUpHeroku, 60*1000);
