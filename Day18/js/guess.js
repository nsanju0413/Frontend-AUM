const setLabel = () => {
    const label = document.querySelector("#label");
    const textBox = document.querySelector("#text_box");
    label.textContent = "You entered: " + textBox.value;
};

document.addEventListener("DOMContentLoaded", () => {
    const showButton =
        document.querySelector("#show_button");
    showButton.addEventListener("click", setLabel);
});