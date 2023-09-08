const form = document.getElementById("expense");

const email = document.getElementById("email");

const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const emailData = {
        email: email.value,
    }
    try {
        let result = await axios.post("http://localhost:3000/password/forgotpassword", emailData)
        console.log(result);

    } catch (err) {
        console.log(err);
        if (err.response !== undefined) {
            error.textContent = `Error: ${err.response.data.Error}`;
        } else {
            error.textContent = `Error: ${err.message}`;
        }
    }

})