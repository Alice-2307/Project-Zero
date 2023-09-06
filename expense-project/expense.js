
const form = document.getElementById("expense");

const descData = document.getElementById("description");

const amount = document.getElementById("amount");

const category = document.getElementById("selectItem");

const error = document.getElementById("error");


form.addEventListener("submit", async(e) => {
    e.preventDefault();
    let expense = {
        description: descData.value,
        category: category.value,
        amount: amount.value,
    };
    try{
        let expenseDetail = await  axios.post("http://localhost:3000/expense/addExpense", expense);
        console.log(expenseDetail);
        ShowValue(expenseDetail.data.expenseData)

    } catch(err){
        console.log(err);
        if (err.response !== undefined) {
            error.textContent = `Error: ${err.response.data.Error}`;
        } else {
            error.textContent = `Error: ${err.message}`;
        }
    }
});


window.addEventListener("DOMContentLoaded", async() => {
    try{
    let all = await axios.get("http://localhost:3000/expense/getExpense");
    for(let i=0;i<all.data.allExpense.length;i++){
        ShowValue(all.data.allExpense[i]);
    }
    } catch(err){
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
    try{
    await axios.delete(`http://localhost:3000/expense/${v.id}`)
    } catch(err){
        console.log(err);
    }
}
