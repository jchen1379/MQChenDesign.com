const Http = new XMLHttpRequest();

export const URL = 'https://website-traffic-monitor.herokuapp.com/website_traffic_monitor';
export const Domain = 'mqchendesign';

export function recordVisitingData(project) {
  const data = {
    domain: Domain,
    project: project.toUpperCase()
  };

  Http.open('POST', URL, true);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(data));
}

