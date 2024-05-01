/**
 *     @author Carlos Cruz <ccruz0808@hotmail.com>
 *     @fileOverview This script put together the forms data
 *     @licence BSD 3-Clause License
 */

// declaration of variables

let Email = null;
let password = null;
let login = {};


// get data
const buildLoginDataForRequest = data => {
    let buildData = null;
  }
    
// Sanitize data  

    const inputEmail = document.getElementById("floatingInputEmail").value;
    const inputPassword = document.getElementById("floatingInputPassword").value;

    debugger

 
 // 3. prepare to send
 user = buildLoginDataForRequest()({email: email, pass: pass});
