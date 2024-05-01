/**
 *     @author Carlos Cruz <ccruz0808@hotmail.com>
 *     @fileOverview This script put together the forms data
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

let email = null;
let name = null;
let lastname = null;
let phone = null;
let password = null;
let login = {};

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

const getUserDataForm = () => {
       
    const floatingInputEmail = document.getElementById("floatingInputEmail").value;
    const floatingInputName = document.getElementById("floatingInputName").value;
    const loatingInputLastname = document.getElementById("floatingInputLastname").value;
    const floatingInputPhone = document.getElementById("floatingInputPhone").value;
    const floatingPassword = document.getElementById("floatingPassword").value;
  }

// Sanitize data

productName = floatingInputProductName;
productType = floatingInputProductType; 
quantity = floatingInputQuantity; 
price = floatingInputPrice;
latitud = floatingInputLatitud
longitude = floatingInputLongitud

email = floatingInputEmail;
name = floatingInputName; 
lastname = floatingInputLastname; 
phone = floatingInputPhone;
password = floatingPassword

 
 // 3. prepare to send
 user = buildLoginDataForRequest({email: email, pass: pass});

 login = buildUserDataForRequest({email: email, name: name, lastname: lastname, phone: phone, password: password});

