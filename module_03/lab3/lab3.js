/**
 *     @author Carlos Cruz <ccruz0808@hotmail.com>
 *     @fileOverview This script take data from product
 *     @licence BSD 3-Clause License
 */

// declaration of variables

let productName = null;
let productType = null;
let quantity = null;
let price = null;
let latitud = null;;
let longitud = null;;
let product = {};

// get data

function getProductDataForm() {


    const floatingInputProductName = document.getElementById("floatingInputProductName").value;
    const floatingInputProductType = document.getElementById("floatingInputProductType").value;
    const floatingInputQuantity = document.getElementById("floatingInputQuantity").value;
    const floatingInputPrice = document.getElementById("floatingInputPrice").value;
    const floatingInputLatitud = document.getElementById("floatingInputLatitud").value;
    const floatingInputLongitud = document.getElementById("floatingInputLongitud").value;
    debugger;
}
 
// Sanitize data

productName = floatingInputProductName;
productType = floatingInputProductType; 
quantity = floatingInputQuantity; 
price = floatingInputPrice;
latitud = floatingInputLatitud
longitude = floatingInputLongitud

