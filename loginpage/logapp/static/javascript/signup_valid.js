function validation(){
    user = document.getElementById('username')
    email = document.getElementById('emailid')
    pass = document.getElementById('password')
    cpass = document.getElementById('confirmpass')
    age = document.getElementById('age')
    birth = document.getElementById('birthdate')
    file = document.getElementById('file')
    state = document.getElementById('state')

    if(user.value == ""){
        document.getElementById('username').style.borderColor="red"
        document.getElementById('user_error').innerHTML="*** Please Enter Your Username ***"
        document.getElementById('user_error').style.color="red"
        document.getElementById('user_error').style.display="block"
    }

    else{
        document.getElementById('username').style.borderColor="black"
        document.getElementById('user_error').style.display="none"
    }

    if(email.value == ""){
    document.getElementById('emailid').style.borderColor="red"
    document.getElementById('email_error').innerHTML="*** Please Enter Your Email Id ***"
    document.getElementById('email_error').style.color="red"
    document.getElementById('email_error').style.display="block"
    }

    else{
        document.getElementById('emailid').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
    }

    if(pass.value == ""){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="*** Please Enter Your Password ***"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
    }

    else{
        document.getElementById('password').style.borderColor="black"
        document.getElementById('password_error').style.display="none"
    }

    if(cpass.value == ""){
        document.getElementById('confirmpass').style.borderColor="red"
        document.getElementById('cpass_error').innerHTML="*** Please Enter Your Confirm Password ***"
        document.getElementById('cpass_error').style.color="red"
        document.getElementById('cpass_error').style.display="block"
    }

    else{
        document.getElementById('confirmpass').style.borderColor="black"
        document.getElementById('cpass_error').style.display="none"
    }

    if(age.value == ""){
        document.getElementById('age').style.borderColor="red"
        document.getElementById('age_error').innerHTML="*** Please Enter Your Age ***"
        document.getElementById('age_error').style.color="red"
        document.getElementById('age_error').style.display="block"
    }

    else{
        document.getElementById('age').style.borderColor="black"
        document.getElementById('age_error').style.display="none"
    }

    if(birth.value == ""){
        document.getElementById('birthdate').style.borderColor="red"
        document.getElementById('birth_error').innerHTML="*** Please Enter Your Date Of Birth ***"
        document.getElementById('birth_error').style.color="red"
        document.getElementById('birth_error').style.display="block"
    }

    else{
        document.getElementById('birtherror').style.borderColor="black"
        document.getElementById('birth_error').style.display="none"
    }

    if(file.value == ""){
        document.getElementById('file').style.borderColor="red"
        document.getElementById('file_error').innerHTML="*** Please Enter Your File ***"
        document.getElementById('file_error').style.color="red"
        document.getElementById('file_error').style.display="block"
    }

    else{
        document.getElementById('file').style.borderColor="black"
        ocument.getElementById('file_error').style.display="none"
    }
}