
let website = document.getElementById("ecommerce");
let sellingAmount = document.getElementById("SellingPrice");
let Name = document.getElementById("ProductName");
let CategoryName = document.getElementById("category");

website.addEventListener("submit", ProductDetails);

function ProductDetails(e) {
    e.preventDefault();
    let Ecommerce_Data = {
        SellingPrice: sellingAmount.value,
        ProductName: Name.value,
        Category: CategoryName.value 
    } 
        axios.post("https://crudcrud.com/api/a7de1021d0cb4a869cfad9473a4fb752/EcommerceData",Ecommerce_Data)
       .then(resolve => Display(resolve.data))
       .catch(err => console.log(err))
}

window.addEventListener("DOMContentLoaded", RefreshPage)

function RefreshPage(){

    axios.get("https://crudcrud.com/api/a7de1021d0cb4a869cfad9473a4fb752/EcommerceData")
         .then(resolve => {
            for(let i=0; i<resolve.data.length;i++){
                Display(resolve.data[i]);
         }
        })  
         .catch(err => console.log(err))
}
function Display(Detailval){
     let subElement = document.createElement('li');
     let deleteBtn = document.createElement("input");
     deleteBtn.type = 'button';
     deleteBtn.value = 'Delete';

     if(Detailval.Category==="Electronics"){
         let Element = document.getElementById('Electro');
         subElement.textContent = `${Detailval.SellingPrice} - ${Detailval.ProductName} - ${Detailval.Category} `;
  
         deleteBtn.onclick = () =>{
             Element.removeChild(subElement)
             crudDelete(Detailval);
        }
         subElement.appendChild(deleteBtn);
         Element.appendChild(subElement);
    }

     else if(Detailval.Category==="Food"){
         let Element = document.getElementById('Eatable');
         subElement.textContent = `${Detailval.SellingPrice} - ${Detailval.ProductName} - ${Detailval.Category} `;

         deleteBtn.onclick = () =>{
             Element.removeChild(subElement)
             crudDelete(Detailval);
        }
         subElement.appendChild(deleteBtn);
         Element.appendChild(subElement);
    }
     else{
         let Element = document.getElementById('Skin');
         subElement.textContent = `${Detailval.SellingPrice} - ${Detailval.ProductName} - ${Detailval.Category} `;

         deleteBtn.onclick = () =>{
             Element.removeChild(subElement)
             crudDelete(Detailval);
        }
         subElement.appendChild(deleteBtn);
         Element.appendChild(subElement);
    }
 }

function crudDelete(delValue){
    axios.delete("https://crudcrud.com/api/a7de1021d0cb4a869cfad9473a4fb752/EcommerceData/"+delValue._id)
             .then(resolve => console.log(resolve))
             .catch(err => console.log(err))
}
