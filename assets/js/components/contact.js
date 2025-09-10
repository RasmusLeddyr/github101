// ekstra opgave: modtag besked
const contactContainer = document.querySelector('.contact-container')

const contactTmpl = () => {
    return `<div class="customer-overlay">
        <div class="form-success-message">
          <h1 class="success-message">Sendt!</h1>
        </div>
        <div class="customer-content">
          <h1 class="customer-header fatface">Kontakt Os</h1>

          <form class="customer-form" id="customer-form">
            <div class="customer-input">
              <div id="name-error"></div>
              <input type="text" id="name" name="name" placeholder="NAVN" />
            </div>
            <div class="customer-input">
              <div id="email-error"></div>
              <input type="email" id="email" name="email" placeholder="EMAIL" />
            </div>
            <div class="customer-input">
              <div id="text-error"></div>
              <textarea
                name="text"
                id="text"
                placeholder="BESKED..."
              ></textarea>
            </div>
            <div>
              <button type="submit" id="submit-btn">SEND BESKED</button>
            </div>
          </form>
        </div>
      </div>`;
}

const validateForm = (e) => {
  const form = document.getElementById("customer-form");
  const namee = document.getElementById("name");
  const email = document.getElementById("email");
  const text = document.getElementById("text");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const textError = document.getElementById("text-error");
  const successScreen = document.querySelector(".form-success-message");

  let formTrue = true;

  if (!namee.value.trim()) {
    e.preventDefault();
    nameError.innerText = "*";
    formTrue = false;
  } else {
    nameError.innerText = "";
  }

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailFormat.test(email.value)) {
    e.preventDefault();
    emailError.innerText = "*";
    formTrue = false;
  } else {
    emailError.innerText = "";
  }

  if (!text.value.trim()) {
    e.preventDefault();
    textError.innerText = "*";
    formTrue = false;
  } else {
    textError.innerText = "";
  }

  if (formTrue === true) {
    e.preventDefault();
    successScreen.classList.toggle("active");

    setTimeout(() => {
      successScreen.classList.remove("active");
      namee.value = "";
      email.value = "";
      text.value = "";
    }, 2000);
  }
};

const renderContact = () => {

    if(contactContainer) {

        contactContainer.insertAdjacentHTML('beforeend', contactTmpl)
        form.addEventListener("submit", validateForm)

    }
    




}