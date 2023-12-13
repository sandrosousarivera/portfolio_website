

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

/* ▼ NAVBAR BEHAVIOR WHEN RESIZED ▼ */

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/* ▼ DARK THEME ▼ */

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.textContent = "💡";
    } else {
        icon.textContent = "🌙";
    }
}


/* ▼ ENVÍO FORMULARIO CONTACTO ▼ */



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm(form)) {

        let name = form.querySelector("#name").value;
        let message = form.querySelector("#message").value;
        let email = form.querySelector("#email").value;
        let subject = form.querySelector("#subject").value;


    
        

        const apiUrl = 'https://s9bvm7zo92.execute-api.us-east-1.amazonaws.com/prod/sendEmail';
        
        const requestData = {
            name: name,
            email: email,
            subject: subject,
            bodyText: message,
        };
        
        axios.post(apiUrl, requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                alert ("Message succesfully sent!!");
                console.log('Response:', response.data);
            })
            .catch(error => {
                alert ("Message not sent, try Emailing me manually.")
                console.error('Error:', error);
            });
        

        form.reset();
    }

});



/* ▼ VALIDACIÓN FORMULARIO CONTACTO ▼ */

const validateForm = (form) => {


    let valid = true;
    let name = form.querySelector("#name");
    let message = form.querySelector("#message");
    let email = form.querySelector("#email");
    let subject = form.querySelector("#subject");


    if (name.value === "") {
        giveError(name, "Please enter your/your company name.");
        valid = false;
    }

    if (message.value === "") {
        giveError(message, "Please enter a message.");
        valid = false;
    }

    if (email.value === "") {
        giveError(email, "Please enter an email.");
        valid = false;
    }

    if (subject.value === "") {
        giveError(subject, "Please enter a subject.");
        valid = false;
    }

    //email validator
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = email.value;
    if (!emailRegex.test(emailValue)) {
        giveError(email, "Please, enter a valid Email.")
        valid = false;
    }

    if (valid) {
        return true;
    }
};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");

    let existingError = parentElement.querySelector(".err-msg");
    if (existingError) {
        existingError.remove();
    }

    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg");
    parentElement.appendChild(error);
};

const inputs = document.querySelectorAll("input");

const textarea = document.querySelectorAll("textarea");

let allFields = [...inputs, ...textarea]

allFields.forEach((field) => {
    field.addEventListener("input", () => {
        removeError(field);
    })
})

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error")
    let error = parentElement.querySelector(".err-msg")
    if (error) {
        error.remove();
    }
}