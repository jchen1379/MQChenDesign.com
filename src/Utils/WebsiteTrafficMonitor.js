const Http = new XMLHttpRequest();

const URL = process.env.REACT_APP_WEBSITE_TRAFFIC_MONITOR_API;
const Domain = process.env.REACT_APP_DOMAIN_NAME;

export function recordVisitingData(project) {
  const data = {
    domain: Domain,
    project: project.toUpperCase()
  };

  Http.open('POST', URL, true);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(data));
}

