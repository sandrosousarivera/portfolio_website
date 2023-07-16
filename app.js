

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


/* ▼ FORMULARIO CONTACTO ▼ */


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm(form)) {

        let name = form.querySelector("#name").value;
        let message = form.querySelector("#message").value;
        let email = form.querySelector("#email").value;
        let subject = form.querySelector("#subject").value;


    

        axios.post('http://52.70.103.202:3000/email-send', {
            name: name,
            message: message,
            email: email,
            subject: subject
        })
            .then(function (response) {
                // handle success

                alert("Message sent!")

                console.log("Message sent!");
            })
            .catch(function (error) {
                // handle error

                alert("Error, message not sent, try sending a direct E-Mail :-)")

                console.log("Error, message not sent.");
            })

        form.reset();
    }

});


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