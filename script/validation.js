const formData = {
  formData: ".form",
  inputSelector: ".form__info",
  submitButton: ".form__button",
  errorClass: "error",
};

class validation {
  constructor(data) {
    this._form = document.querySelector(data.formData);
    this._inputList = document.querySelectorAll(data.inputSelector);
    this._submitButton = document.querySelector(data.submitButton);
    this.errorClass = data.errorClass;
  }
  enableValidation() {
    this._setEventListener();
  }
  _setEventListener() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidationErorr(input);
        if (!this._checkInputsValidaty()) {
          this._submitButton.disabled = false;
        } else {
          this._submitButton.disabled = true;
        }
      });
    });
  }

  _checkInputsValidaty() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }
  _checkValidationErorr(input) {
    if (input.validity.valid) {
      this._hideSpanError(input);
    } else {
      this._showSpanErorr(input);
    }
  }
  _hideSpanError(input) {
    input.classList.remove(this.errorClass);
  }
  _showSpanErorr(input) {
    input.classList.add(this.errorClass);
  }
}
const valid = new validation(formData);
valid.enableValidation();
