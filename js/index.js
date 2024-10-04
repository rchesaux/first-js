const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

// if its morning, show "good morning"
if (currentHour <= 12) {
    message = "Good morning, beautiful world!";
} else if ( currentHour > 12 && currentHour <=17) { // it its midday show "hello"
    message = "Hello beautful world!";
} else if (currentHour > 17) {
    message = "Good morning";
}

const handleClick = () => {
    alert(message);
}
//if its evening, show "good evening"