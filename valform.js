
function validateName() {
	let name = document.getElementById("name").value;
	let regex1=/^[a-z ]+$/i;

	if (regex1.test(name)) {
		document.getElementById("message1").innerHTML="Varified";
		document.getElementById("name").style.borderColor ="green";
		document.getElementById("message1").style.color="green";
		// document.getElementById("name").innerHTML="<i class="fa fa-check-square-o"></i>"
		return true;
		
	}else{
		document.getElementById("message1").innerHTML="Please enter valid data";
		document.getElementById("name").style.borderColor ="red";
		document.getElementById("message1").style.color="red";
		return false;
	}
}

    
 	function validateMobileno() {
	let number = document.getElementById("number").value;
	let regex2 =/^[0-9]{10}$/

	if (regex2.test(number)) {
		document.getElementById("message2").innerHTML="Varified";
		document.getElementById("message2").style.color="green";
		document.getElementById("number").style.borderColor ="green";
		return true;

	}else{
		document.getElementById("message2").innerHTML="Mobile Number is not Varified ";
		document.getElementById("message2").style.color="red";
		document.getElementById("number").style.borderColor ="red";
		return false;
	}
}

    function validateEmail() {
	let email = document.getElementById("email").value;
	let regex3 =/^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/;

	if (regex3.test(email)) {
		document.getElementById("message3").innerHTML="Varified";
		document.getElementById("message3").style.color="green";
		document.getElementById("email").style.borderColor ="green";
		return true;
	}else{
		document.getElementById("message3").innerHTML="Please enter valid Email id";
		document.getElementById("message3").style.color="red";
		document.getElementById("email").style.borderColor ="red";
		return false;
	}
}
   
    function validatePassword() {
	let password = document.getElementById("password").value;
	let regex4=/^[a-z0-9 \._-]+$/;

	if (regex4.test(password)) {
		document.getElementById("message4").innerHTML="Varified";
		document.getElementById("message4").style.color="green";
		document.getElementById("password").style.borderColor ="green";
		return true;
	}else{
		document.getElementById("message4").innerHTML="Password is not Varified";
		document.getElementById("message4").style.color="red";
		document.getElementById("password").style.borderColor ="red";
		return false;
	}
}
    function validateAll() {
        validateName();
        validateMobileno();
        validateEmail();
        validatePassword() ;
        if (validateName() && validateMobileno() && validateEmail() && validatePassword()) {
        	return true;
        }else{
        	return false;
        }

    }