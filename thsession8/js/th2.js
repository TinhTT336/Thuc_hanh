// let value = prompt('What is the "official" name of JavaScript?', "");
// if (value == 'ECMAScript') {
//     alert("Right");
// } else {
//     alert("You don't know? ECMAScript!");
// }


let userName = prompt("Who's there?");
if (userName == "Admin") {
    let password = prompt("Enter your password");
    if (password == "Themaster") {
        alert('Welcome');
    } else if (password == null) {
        alert("Canceled");
    } else {
        alert('Wrong Password');
    }
} else if (userName == null) {
    alert("Canceled");
} else {
    alert("I don't know");
}

// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// switch (browser) {
//     case "Edge":
//         alert("You've got the Edge!");
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         alert('Okay we support these browsers too');
//         break;
//     default:
//         alert('We hope that this page looks ok!');
// }

// let a = prompt('a?', '');
// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }
// if (a == 2 || a == 3) {
//     alert('2,3');
// }

// let a = prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }


// let value = prompt('Type a number');
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// let value = +prompt("Type a number");
// switch (true) {
//     case (value > 0):
//         alert(1);
//         break;
//     case (value < 0):
//         alert(-1);
//         break;
//     case (value == 0):
//         alert(0);
// }

// let a = +prompt("nhap a");
// let b = +prompt("nhap b");
// result = (a + b < 4) ? ("below") : ("Over");
// console.log(result);

// let value = prompt("Nhap vao 1 tu");
// if (value == "Employee") {
//     alert("Hello");
// } else if (value == "Director") {
//     alert("Greetings");
// } else if (value == null) {
//     alert("No login");
// } else {
//     alert("ok");
// }
