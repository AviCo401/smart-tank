
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // מניעת רענון הדף

            // קבלת ערכי הקלט
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // שמירת הנתונים ב-localStorage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            // מעבר לדף הפידבק
            window.location.href = "feedback.html";
        });
    }

    // בדיקה אם אנחנו בדף הפידבק
    if (window.location.pathname.includes("feedback.html")) {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        if (email && password) {
            console.log("Email:", email);
            console.log("Password:", password);
        }
    }

    const controlPanelBtn = document.getElementById("controlPanelBtn");
    if (controlPanelBtn) {
        controlPanelBtn.addEventListener("click", () => {
            window.location.href = "control.html"; // שנה את זה לכתובת של פאנל השליטה שלך
        });
    }
});


firebase.database().ref("RxTx/TX/A").on("value", function(snapshot) {
    const distance = snapshot.val();
    document.getElementById("distance").innerText = distance;
});



let rx = 0;

let up = 0;
let down = 0;
let left = 0;
let right = 0;
let fire = 0;
let right_control = 0;
let left_control = 0;


document.getElementById("up_button").addEventListener("click", function() {
    up = up === 0 ? 8 : 0;


    
    firebase.database().ref("RxTx/RX").set(up);
});

document.getElementById("down_button").addEventListener("click", function() {
    down = down === 0 ? 16 : 0;



    firebase.database().ref("RxTx/RX").set(down );
});

document.getElementById("left_button").addEventListener("click", function() {
    left = left === 0 ? 24 : 0;



    firebase.database().ref("RxTx/RX").set(left);
});

document.getElementById("right_button").addEventListener("click", function() {
    right = right === 0 ? 32 : 0;


    firebase.database().ref("RxTx/RX").set(right);
});



document.getElementById("fire_button").addEventListener("click", function() {
    fire = fire === 0 ? 1 : 0;
    firebase.database().ref("RxTx/RX").set(fire);
});


document.getElementById("right_control").addEventListener("click", function() {
    right_control = right_control === 0 ? 4 : 0;
    firebase.database().ref("RxTx/RX").set(right_control);
});


document.getElementById("left_control").addEventListener("click", function() {
    left_control = left_control === 0 ? 2 : 0;
    firebase.database().ref("RxTx/RX").set(left_control);
});


// Event Listeners for Buttons
// document.getElementById('up_button').addEventListener('click', () => sendCommand('dc_motor', 'up'));
// document.getElementById('down_button').addEventListener('click', () => sendCommand('dc_motor', 'down'));
// document.getElementById('left_button').addEventListener('click', () => sendCommand('dc_motor', 'left'));
// document.getElementById('right_button').addEventListener('click', () => sendCommand('dc_motor', 'right'));
// document.getElementById('fire_button').addEventListener('click', () => sendCommand('laser', 'fire'));
// document.getElementById('right_control').addEventListener('click', () => sendCommand('stepper', 'right_control'));
// document.getElementById('left_control').addEventListener('click', () => sendCommand('stepper', 'left_control'));

// Function to update distance from Firebase
// const distanceRef = ref(database, 'sensor/distance');
// distanceRef.on('value', (snapshot) => {
//     const distance = snapshot.val();
//     document.getElementById('distance').innerText = distance ? distance + ' ס"מ' : '--';
// });
