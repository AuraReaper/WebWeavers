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