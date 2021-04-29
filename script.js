// validation form

// phon number validation
var phone_input = document.getElementById("phone");
phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Enter phone number!');
  } else {
    phone_input.setCustomValidity('Enter phone number in this format: 05X-XXX-XXXX');
  }
});
// email validation
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
};


//send form data to email
const inputs = document.querySelector('input-form');
function sendEmail() {
  Email.send({
    SecureToken: "4dfca02b-3c87-4aff-89d5-691bc49e8a0c",
    To: "sharipkinanna@gmail.com",
    From:inputs.querySelector("mail").value,
    Subject: "Contact with your Customer",
    Body: inputs.elements["message"].value + "<br>" + inputs.element["fName"].value + inputs.element["lName"].value + "<br>" + inputs.element["phone"].value
}).then(message => alert("The message successfully sent")
)};
