//  function main() {
//             let x = 1;
//             try {
//                 console.log("the sum  is ", sum * x)
//                 return true

//             } catch (error) {
//                 console.log("error hai bhai program ko chick karo")
//                 return false
//             }
//             // finally her function mein chalta hai or
//             //  consol.log return function mein nahi chalta hai 
//             //isliye finally function use  karte  hai  
//             finally {
//                 console.log("This is the last line in the file");

//             }


  function validatePassword() {
      let password = document.getElementById("password").value;
      let errorDiv = document.getElementById("passwordError");

      // Regex: at least 6 characters, allowed A-Z, a-z, 0-9 and @
      let regex = /^[A-Za-z0-9@]{6,}$/;

      if (!regex.test(password)) {
        errorDiv.textContent = "❌ Password must be at least 6 characters and only letters, numbers or @ are allowed.";
        return false; // form submit nahi hoga
      } else {
        errorDiv.textContent = ""; // clear error
        return true; // form submit hoga
      }
    }
