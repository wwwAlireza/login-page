function focusAble(input, svg, container) {
    input.addEventListener("focus", () => {
        svg.style.stroke = "#1563b1";
        container.style.borderColor = "#1563b1";
        svg.style.transform = "scale(1.15)"
    })
    input.addEventListener("blur", () => {
        svg.style.stroke = "rgba(0,0,0,.8)";
        container.style.borderColor = "rgba(0,0,0,.2)";
        svg.style.transform = "scale(1)"
    })
}

focusAble(
    document.getElementsByClassName("input")[0],
    document.getElementsByClassName("icon")[0],
    document.getElementsByClassName("login-input")[0],
)
focusAble(
    document.getElementsByClassName("input")[1],
    document.getElementsByClassName("icon")[1],
    document.getElementsByClassName("login-input")[1],
)

var rememberStatus = false;
const rememberContainer = document.querySelector(".remember-container");
const rememberIcon = document.querySelector(".remember-icon");
rememberContainer.addEventListener("click", checkRemember);

function checkRemember() {
    switch (rememberStatus) {
        case true:
            {
                rememberStatus = false;
                rememberIcon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>`;

            }
            break;
        case false:
            {
                rememberStatus = true;
                rememberIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
            }
    }
}