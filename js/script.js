let notify = (msg, color) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            color: 'white',
            background: color,
            borderRadius: '10px',
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// document.getElementById('login-bt').onclick = function (e) {
//     e.preventDefault();

//     let fullName = document.getElementById('input-name').value;
//     let email = document.getElementById('input-email').value;
//     let password = document.getElementById('input-pass').value;

//     if (fullName.length < 3) { return notify("Please enter your full name", "#EB455F") }
//     if (email !== "admin@user.com") { return notify("Please enter a valid email address", "#EB455F") }
//     if (password !== "123456") { return notify("Password isn't correct", "#EB455F") }

//     window.location.href = "home.html";
//     localStorage.setItem("username", fullName);

//     // if (fullName != "" && email != "" && pass != "") {
//     //     if (email === "admin@user.com" && pass === "123456") {

//     //     } else {
//     //         notify("Email and password is incorrect!", "#EB455F");
//     //     }
//     // } else {
//     //     notify("Please fill the all fields", "#EB455F");
//     // }
// }

const handleLogin = () => {
    event.preventDefault();

    let fullName = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let password = document.getElementById('input-pass').value;

    if (fullName.length < 3) { return notify("Please enter your full name", "#EB455F") }
    if (email !== "admin@user.com") { return notify("Please enter a valid email address", "#EB455F") }
    if (password !== "123456") { return notify("Password isn't correct", "#EB455F") }

    window.location.href = "home.html";
    localStorage.setItem("username", fullName);
}