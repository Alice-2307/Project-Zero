const form = document.getElementById("expense");

const email = document.getElementById("email");

const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const emailData = {
        email: email.value,
    }
    try {
        let result = await axios.post("http://localhost:3000/password/forgotpassword", emailData)
        console.log(result);
        message.textContent = `${result.data.message}`;

    } catch (err) {
        console.log(err);
        if (err.response !== undefined) {
            message.textContent = `Error: ${err.response.data.Error}`;
        } else {
            message.textContent = `Error: ${err.message}`;
        }
    }

})