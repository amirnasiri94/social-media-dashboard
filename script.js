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