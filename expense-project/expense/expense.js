const form = document.getElementById("expense");

const descData = document.getElementById("description");

const amount = document.getElementById("amount");

const category = document.getElementById("selectItem");

const error = document.getElementById("error");

const razorPay = document.getElementById("razor-pay");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let expense = {
        description: descData.value,
        category: category.value,
        amount: amount.value,
    };
    try {
        const token = await localStorage.getItem("token")
        const expenseDetail = await axios.post("http://localhost:3000/expense/addExpense", expense, { headers: { "Authorization": token } });
        console.log(expenseDetail);
        ShowValue(expenseDetail.data.expenseData)

    } catch (err) {
        console.log(err);
        if (err.response !== undefined) {
            error.textContent = `Error: ${err.response.data.Error}`;
        } else {
            error.textContent = `Error: ${err.message}`;
        }
    }
});


window.addEventListener("DOMContentLoaded", async () => {
    try {
        const token = await localStorage.getItem("token")
        const all = await axios.get("http://localhost:3000/expense/getExpense", { headers: { "Authorization": token } });
        for (let i = 0; i < all.data.allExpense.length; i++) {
            ShowValue(all.data.allExpense[i]);
        }
    } catch (err) {
        console.log(err);
    }
});

function ShowValue(expenseVal) {

    const element = document.getElementById("list");
    const subElement = document.createElement("li");

    subElement.textContent = `Description: ${expenseVal.description} - Expense amount: ${expenseVal.amount} - Category: ${expenseVal.category}`;

    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";

    deleteBtn.onclick = () => {
        element.removeChild(subElement)
        Delete(expenseVal);
    };

    subElement.appendChild(deleteBtn);
    element.appendChild(subElement);
}

async function Delete(v) {
    try {
        const token = await localStorage.getItem("token")
        await axios.delete(`http://localhost:3000/expense/${v.id}`, { headers: { "Authorization": token } })
    } catch (err) {
        console.log(err);
    }
}

razorPay.onclick = async (e) => {

    const token = localStorage.getItem('token');
    const result = await axios.get("http://localhost:3000/purchase/premium", { headers: { "Authorization": token } });
    console.log(result);

    let options = {
        "key": result.data.key_id,
        "order_id": result.data.order.id,
        "handler": async function (response) {
            await axios.post("http://localhost:3000/purchase/updatetransactionstatus", {
                order_id: options.order_id,
                payment_id: response.razorpay_payment_id
            }, { headers: { "Authorization": token } })

            alert("You are a premium member now");
        }
    }
    const rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
    rzp1.on("payment.failed", async function (response) {
        console.log(response);
        await axios.post("http://localhost:3000/purchase/updatetransactionstatus", {
            order_id: options.order_id,
            payment_id: null
        },
            { headers: { "Authorization": token } })
        alert("something went wrong");
    })
}