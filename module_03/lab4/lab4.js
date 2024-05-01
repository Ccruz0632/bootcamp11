/**
 *     @author Carlos Cruz <ccruz0808@hotmail.com>
 *     @fileOverview This script take data from user
 *     @licence BSD 3-Clause License
 */

// declaration of variables

let email = null;
let name = null;
let lastname = null;
let phone = null;
let password = null;
let login = {};

// get data

const getUserDataForm = () => {
       
    const floatingInputEmail = document.getElementById("floatingInputEmail").value;
    const floatingInputName = document.getElementById("floatingInputName").value;
    const loatingInputLastname = document.getElementById("floatingInputLastname").value;
    const floatingInputPhone = document.getElementById("floatingInputPhone").value;
    const floatingPassword = document.getElementById("floatingPassword").value;
  }


  const buildUserDataForRequest = data => {
    let buildData = null;
  }

// Sanitize data

email = floatingInputEmail;
name = floatingInputName; 
lastname = floatingInputLastname; 
phone = floatingInputPhone;
password = floatingPassword

 // 3. prepare to send
 login = buildUserDataForRequest()({email: email, name: name, lastname: lastname, phone: phone, password: password});