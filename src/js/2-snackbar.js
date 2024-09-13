import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formSnackbar = document.querySelector(".form");

formSnackbar.addEventListener('submit', function (event) {
    event.preventDefault();

    let delay = parseInt(event.target.delay.value);
    let state = event.target.state.value;

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === 'fulfilled') {
        resolve(delay);
        } else {
        reject(delay);
        }
    }, delay);
    });
}

createPromise(delay, state)
    .then((delay) => {
    iziToast.success({
        title: "Success",
        message: `Fulfilled promise in ${delay} ms`,
        position: "topRight",
        messageColor: "white",
        titleColor: "white",
});
    })
    .catch((delay) => {
    iziToast.error({
        title: "Error",
        message: `Rejected promise in ${delay} ms`,
        position: "topRight",
        backgroundColor: "red",
        messageColor: "white",
        titleColor: "white",
    });
    });
});