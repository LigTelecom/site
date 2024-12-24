class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.messageContainer = this.form.querySelector(".message");
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displayMessage(type, message) {
    this.messageContainer.className = `message ${type}`;
    this.messageContainer.innerHTML = message;
    this.messageContainer.style.display = "block";
  }

  displaySuccess() {
    this.displayMessage("success", this.settings.success);
  }

  displayError() {
    this.displayMessage("error", this.settings.error);
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    this.formButton.disabled = true;
    this.formButton.innerText = "Enviando...";
  }

  async sendForm(event) {
    window.alert("tedte")
    // try {
    //   console.log(this.getFormObject()) 
    //   this.onSubmission(event);
    //   const response = await fetch(this.url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
          
    //       Accept: "application/json",
    //       "x-auth-token": "e06991c349dca900270c8ce3cdbcaa70",
    //     },
    //     body: JSON.stringify(this.getFormObject()),
    //   });

    //   if (!response.ok) throw new Error("Erro ao enviar formulário.");
    //   this.displaySuccess();
    // } catch (error) {
    //   this.displayError();
    // } finally {
    //   this.formButton.disabled = false;
    //   this.formButton.innerText = "Enviar";
    // }
  }

  init() {
    window.alert("tws")
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "Mensagem enviada com sucesso!",
  error: "Não foi possível enviar sua mensagem. Tente novamente.",
});
formSubmit.init();