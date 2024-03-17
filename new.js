fetch("https://kodessphere-api.vercel.app/devices", {
  method: "POST",
  body: JSON.stringify({
    teamid: "3WNAni7",
    device:"bulb",
    value:1

    
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));