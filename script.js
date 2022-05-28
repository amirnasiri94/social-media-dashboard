// dark mode
if(localStorage.getItem("flag") === "dark") {
    document.body.classList.toggle("dark");
    document.querySelector(".toggle-box > input").checked = true;
}

document.querySelector(".toggle-box > input").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("flag", "dark")
    } else {
        localStorage.setItem("flag", "light")
    }
});

// counter up
const numbers = document.querySelectorAll(".social-media__box__followers__number");

numbers.forEach(number => {
    number.innerText = '0';
    const targetNumber = +number.getAttribute('data-target');
    let count = 0;
    const increment = targetNumber / 300;


    const updateCounter = () => {
        if (count < targetNumber ) {
            count += Math.ceil(increment);
            number.innerText = count;
            setTimeout(updateCounter, 1);
        } else {
            number.innerText = showTargetNumber(targetNumber);
        }
    }
    updateCounter();


    const showTargetNumber = targetNumber => {
        if (targetNumber < 10000) {
            return targetNumber
        } else {
            const smallerTargerNumber = targetNumber / 1000;
            return (smallerTargerNumber.toFixed(1)) + "k"
        }
    }
})