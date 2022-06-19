function validation(){
    email = document.getElementById('emailid')
    pass = document.getElementById('password')

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
}