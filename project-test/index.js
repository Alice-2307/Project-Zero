let website = document.getElementById("ecommerce");
let sellingAmount = document.getElementById("SellingPrice");
let productName = document.getElementById("ProductName");

website.addEventListener("submit", ProductDetails);

async function ProductDetails(e) {
    e.preventDefault();
    let Ecommerce_Data = {
        sellingPrice: sellingAmount.value,
        productName: productName.value,
    }
    try {
        let res = await axios.post("http://localhost:5000/products", Ecommerce_Data)
        Display(res.data.ProductData)
    } catch (err) {
        console.log(err);
    }
}
window.addEventListener("DOMContentLoaded", RefreshPage)

async function RefreshPage() {

    try {
        let res = await axios.get("http://localhost:5000/products")
        console.log(res);
        for (let i = 0; i < res.data.getAllProductData.length; i++) {
            Display(res.data.getAllProductData[i]);
        }
    } catch (err) {
        console.log(err);
    }
}
function Display(Detailval) {
    let Element = document.getElementById('product');
    let subElement = document.createElement('li');
    let deleteBtn = document.createElement("input");
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';

    subElement.innerText = `Selling Price: ${Detailval.sellingPrice} - Product Name: ${Detailval.name}`;

    deleteBtn.onclick = () => {
        Element.removeChild(subElement)
        Delete(Detailval);
        updateTotalPrice();
    }
    subElement.appendChild(deleteBtn);
    Element.appendChild(subElement);

    updateTotalPrice();
}

function updateTotalPrice() {
    let products = document.querySelectorAll('.product-item li');
    let total = 0;
    console.log(products);

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let price = product.textContent.split(' ')[2];
        let finalPrice = parseInt(price);
        total += finalPrice;
    }
    let totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerHTML = `<h3>Total Value Of Product: Rs ${total}</h3>`;
}

async function Delete(delValue) {
    try {
        let res = await axios.delete("http://localhost:5000/products/" + delValue.id)
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}