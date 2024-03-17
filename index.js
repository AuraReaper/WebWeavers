

//bulb response

fetch("https://kodessphere-api.vercel.app/devices", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ teamid: "3WNAni7", device: "bulb", value: 1 }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));

//fan response

fetch("https://kodessphere-api.vercel.app/devices", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ teamid: "3WNAni7", device: "fan", value: 4 }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));

//led
fetch("https://kodessphere-api.vercel.app/devices", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ teamid: "3WNAni7", device: "led", value: "#000" }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));

//ac
//led
fetch("https://kodessphere-api.vercel.app/devices", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    teamid: "3WNAni7",
    device: "ac",
    value: { temp: 21, state: 1 },
  }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));
