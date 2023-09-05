const form = document.getElementById("expense");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const expenseData = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    try {
        let data = await axios.post("http://localhost:3000/user/signup",expenseData);
        console.log(data);
    } catch (err) {
        console.log(err);
        const error = document.getElementById("error")
        error.textContent = `Error: Network Error`
    }
});