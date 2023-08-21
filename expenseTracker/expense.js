
const form = document.getElementById('form');

const text = document.getElementById('description');

const amount = document.getElementById('amount');

const category = document.querySelector('.form-select');


form.addEventListener("submit", addExpense);

function addExpense(e) {
    e.preventDefault();
    let Object_value = {
        Text: text.value,
        Category: category.value,
        Amount: amount.value,
    };
    axios
        .post("http://localhost:3000/ExpenseData", Object_value)
        .then((result) => {
            console.log(result.data.ExpenseData);
            ShowValue(result.data.ExpenseData);
        })
        .catch((err) => console.log(err));

}

window.addEventListener("DOMContentLoaded", Refresh);

function Refresh() {
    axios
        .get("http://localhost:3000/getExpenseData")
        .then((result) => {
            for (let i = 0; i < result.data.getExpenseData.length; i++) {
                ShowValue(result.data.getExpenseData[i]);
            }
        })
        .catch((err) => console.log(err));
}

function ShowValue(val) {
    const table = document.querySelector('.table');

    const row = table.insertRow();
    const desc = row.insertCell(0).textContent = `${val.text}`;
    const amo = row.insertCell(1).textContent = `${val.amount}`;
    const cate = row.insertCell(2).textContent = `${val.category}`;
    const dlt = row.insertCell(3);
    const edt = row.insertCell(4);

    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.onclick = () => {
       dlt.parentElement.remove()
        Delete(val);
    };
    const editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.value = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => {
        edt.parentElement.remove()

        document.getElementById("description").value = val.text;
        document.getElementById("amount").value = val.amount;
        document.getElementById("selectItem").value = val.category;

        Delete(val);
       
    };

    dlt.appendChild(deleteBtn);
    edt.appendChild(editBtn);
}

function Delete(v) {
    axios
        .delete(`http://localhost:3000/deleteExpenseData/${v.id}`)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
}

