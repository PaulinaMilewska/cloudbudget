
function validation() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const selectService = document.querySelector('#select-service');
  const phoneNumber = document.querySelector('#phone-number');

    if(firstName.value == "" || lastName.value == "" || selectService.value == "" || phoneNumber.value == ""){
        output = "Please fill all fields";
    } else if(phoneNumber.value.length<6){
        output = "Phone number is too short";
    } 
    else if (!(firstName.value).match("^[a-zA-Z]+$")){
        output = "First name must be text";
    } else if (!(lastName.value).match("^[a-zA-Z]+$")){
        output = "Last name must be text";
    } else if (!(selectService.value).match("^[a-zA-Z]+$")){
        output = "Service must be text";
    }
    else {
        output = "Correct data";
    }

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
    })
    document.getElementById("validation-text").innerHTML = output;
}
