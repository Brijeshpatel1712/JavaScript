// signup
let signup = document.getElementById('signup')
signup.addEventListener('submit',(e)=>{
   e.preventDefault();
   let name = document.getElementById('name').value
   let email = document.getElementById('email').value
   let country = document.getElementById('country').value
   let phone = document.getElementById('phone').value
   let password = document.getElementById('password').value
   let signupobj = {
        name,
        email,
        country,
        phone,
        password    
   }
   console.log(signupobj);
})

// signin

let signin = document.getElementById('signin')
signup.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let country = document.getElementById('country').value
    let signinobj = {

        name,
        email,
        country
    }
    console.log(signinobj);
})
   












































































let form = document.getElementById('signin')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('signin-name').value
    let email = document.getElementById('signin-email').value
    let password = document.getElementById('signin-password').value
    let siginobj = {
        name,
        email,
        password
    }
    console.log(siginobj);
})



