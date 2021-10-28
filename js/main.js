const handleClick = () => {
    let buttons = document.querySelectorAll(".button");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', writeButtonName);
    }
}
function writeButtonName() {
    let ButtonName = this.innerHTML;
    console.log(ButtonName)
}

