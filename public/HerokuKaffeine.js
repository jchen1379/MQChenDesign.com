let request = new XMLHttpRequest();

const WakeUpHeroku = () => {
  request.open("GET", "https://mq-chen-design-react.herokuapp.com/");
  console.warn(new Date().toISOString() + ": Waking up Heroku App");
  request.send();
}

setInterval(WakeUpHeroku, 15*60*1000);
