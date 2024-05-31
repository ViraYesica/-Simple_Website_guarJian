var MenuItems = document.getElementById("MenuItems");
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxBlockSize = "200px"
    }else{
        MenuItems.style.maxHeight = "0px"
    }

}
function validateForm(event){


    
    event.preventDefault()
    console.log('test')
    var nameField = document.getElementById('nameField')
    var emailField = document.getElementById('emailField')
    var passwordField = document.getElementById('passwordField')
    var addressField = document.getElementById('addressField')
    var checkboxField = document.getElementById('checkboxField')
    var error = document.getElementById('error-message')

    //hapus tulisan error sebelumnya
    error.innerHTML = ""

    var isValid = true

    // //validasi name tidak boleh kosong
    if(nameField.value == ""){
        alert("Name must not be empty!")
        isValid = true
    }
    else if(nameField.value.length < 8){
        alert('Name Must be more than 8 Characters')
        isValid = false
    }

    //Validasi password harus alphanumeric(mengandung angka dan huruf)
    if(!isAlphanumeric(passwordField.value)){
        alert('Password is inValid')
        isValid = false
    }

    if(checkboxField.checked == false){
        alert('Terms and Conditions must be checked!')
        isValid = false
    }

    if(isValid == false){
        error.innerHTML = "Invalid Form!"
    }else{
        console.log('tes')
        document.getElementById('form').submit()
    }
    
}

function isAlphanumeric(password){


    for (let index = 0; index < password.length; index++) {
        if(!(password[index] >= 'a' && password[index] <= 'z') && 
        !(password[index] >= 'A' && password[index] <= 'Z') && 
        !(password[index]>= '0' && password[index] <= 9)){
            return false
        }
    }
    return true
}
