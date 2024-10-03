const FirstName = document.querySelector("#FirstName");
const LastName = document.querySelector("#LastName");
const email = document.querySelector("#email");
const GeneralQuery = document.querySelector("#GeneralQuery");
const SupportQuery = document.querySelector("#SupportQuery");
const message = document.querySelector("#message");
const consent = document.querySelector("#consentCheck");
const submitbtn = document.querySelector(".submitbtn");
const successContainer = document.querySelector("#successContainer");
let checkFirst = false;
let checkLast = false;
let checkMail = false;
let checkQuery = false;
let checkMessage  = false;
let checkConsent = false;

submitbtn.addEventListener("click" , (click)=>
{
    click.preventDefault();

    if(FirstName.value === ''){
        FirstName.parentElement.lastElementChild.style.display = 'block';
        FirstName.classList.add("errBorder");
        checkFirst = false;
    } else {
        FirstName.parentElement.lastElementChild.style.display = 'none' ; 
        FirstName.classList.remove("errBorder");
        checkFirst = true;
    }

    if(LastName.value === ''){
        LastName.parentElement.lastElementChild.style.display = 'block';
        LastName.classList.add("errBorder");
        checkLast = false;
    } else {
        LastName.parentElement.lastElementChild.style.display = 'none' ; 
        LastName.classList.remove("errBorder");
        checkLast = true;
    }

    if(email.value === '' || checkEmail(email.value)){
        if(email.value === '')
        {
            email.parentElement.lastElementChild.innerHTML = "This field is required";
        } else {
            email.parentElement.lastElementChild.innerHTML = "Please enter a valid email address";
        }
        email.parentElement.lastElementChild.style.display = 'block';
        email.classList.add("errBorder");
        checkMail = false;
    } else {
        email.parentElement.lastElementChild.style.display = 'none' ; 
        email.classList.remove("errBorder");
        checkMail = true;
    }

    if(GeneralQuery.checked || SupportQuery.checked){
        GeneralQuery.parentElement.parentElement.parentElement.lastElementChild.style.display = "none";
        checkQuery = true ;
    } else {
        GeneralQuery.parentElement.parentElement.parentElement.lastElementChild.style.display = "block";
        checkQuery = false;
    }

    if(message.value === ''){
        message.parentElement.lastElementChild.style.display = 'block';
        message.classList.add("errBorder");
        checkMessage = false;
        
    } else {
        message.parentElement.lastElementChild.style.display = 'none' ; 
        message.classList.remove("errBorder");
        checkMessage = true;
    }

    if(!consent.checked){
        consent.parentElement.lastElementChild.style.display = 'block';
        checkConsent = false;
    } else {
        consent.parentElement.lastElementChild.style.display = 'none' ; 
        checkConsent = true;
    }

    if(checkConsent && checkLast && checkFirst && checkMail && checkMessage && checkQuery )
    {
        successContainer.classList.add("successVisibility");
        console.log(successContainer.classList);
        FirstName.value = '';
        LastName.value = '';
        email.value = '';
        GeneralQuery.checked = false;
        SupportQuery.checked = false;
        message.value = '';
        consent.checked = false;
        checkConsent = false;
        checkFirst = false ;
        checkLast = false ;
        checkMail = false;
        checkMessage = false;
        checkQuery = false;
    }
    
})

function checkEmail(emailAddress) {
    const emailParts = emailAddress.split('@');
    // console.log(emailAddress + " " + emailParts + " " ) 
    if(emailParts.length !== 2) return true;
    const userName = emailParts[0];
    const domain = emailParts[1];

    if(userName.length < 1 || domain.length < 1) return true;
    if(domain.indexOf('.' ) === -1) return true;
    return false;
}