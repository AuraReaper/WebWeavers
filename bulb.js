

document.addEventListener("DOMContentLoaded", function() {
    const bulbStatus = document.getElementById("status");

    function controlBulb(value) {
        fetch("https://kodessphere-api.vercel.app/devices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                teamid: "3WNAni7",
                device: "bulb",
                value: value
            })
        })
        .then(response => {
            if (response.ok) {
                bulbStatus.textContent = value ? "Bulb is ON" : "Bulb is OFF";
            } else {
                bulbStatus.textContent = "Failed to control Bulb. Status code: " + response.status;
            }
        })
        .catch(error => {
            bulbStatus.textContent = "Error occurred: " + error.message;
        });
    }

    function getBulbState() {
        fetch("https://kodessphere-api.vercel.app/devices/3WNAni7")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to get Bulb state. Status code: " + response.status);
            }
        })
        .then(data => {
            if (data && data.device === "bulb") {
                bulbStatus.textContent = "Bulb is " + (data.value ? "ON" : "OFF");
            } else {
                throw new Error("Bulb state not found in response data");
            }
        })
        .catch(error => {
            bulbStatus.textContent = "Error occurred: " + error.message;
        });
    }

    const bulbCheckbox = document.querySelector("input[type='checkbox']");
    bulbCheckbox.addEventListener("change", function() {
        const value = this.checked ? 1 : 0;
        controlBulb(value);
    });

    getBulbState(); // Get bulb state when the page loads
});



// //fan response

// fetch("https://kodessphere-api.vercel.app/devices", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ teamid: "3WNAni7", device: "fan", value: 4 }),
// })
//   .then((response) => response.json())
//   .then((response) => console.log(JSON.stringify(response)));

// //led
// fetch("https://kodessphere-api.vercel.app/devices", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ teamid: "3WNAni7", device: "led", value: "#000" }),
// })
//   .then((response) => response.json())
//   .then((response) => console.log(JSON.stringify(response)));

// //ac
// //led
// fetch("https://kodessphere-api.vercel.app/devices", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     teamid: "3WNAni7",
//     device: "ac",
//     value: { temp: 21, state: 1 },
//   }),
// })
//   .then((response) => response.json())
//   .then((response) => console.log(JSON.stringify(response)));




//get request

fetch("https://kodessphere-api.vercel.app/devices/3WNAni7", {
  method: "GET", // default, so we can ignore
})
  .then((response) => response.json())
  .then((json) => console.log(json));
