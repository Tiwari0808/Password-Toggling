let password = document.querySelector('#password');
let eyeIcon = document.querySelector('#eye-icon');

work = () =>{
    console.log('hello');
    
    if (password.type == 'password') {
        password.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        eyeIcon.style.color = 'red';

    }else{
        password.type = 'password'
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.style.color = 'white';
    }
}