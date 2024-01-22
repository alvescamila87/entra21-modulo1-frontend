$(document).ready(setup);

function setup() {
    $("#generateSuccessMessage").click(generateSuccessMessageClickEventHandler);
    $("#generateErrorMessage").click(generateErrorMessageClickEventHandler);
}

function generateSuccessMessageClickEventHandler() {
    let messageElement = document.getElementById("message");

    messageElement.addClass("success").removeClass("error");
    messageElement.text("The operation was successful");
}

function generateErrorMessageClickEventHandler() {
    let messageElement = document.getElementById("message");

    messageElement.addClass("error").removeClass("success");
    messageElement.text("The operation failed.");

}

HTMLElement.prototype.addClass = function(className) {
    if(!this.hasClass(className)) {
        this.className += ` ${className}`;
    }

    return this;
};

HTMLElement.prototype.removeClass = function(className) {
    if(!this.hasClass(className)) {
        this.classList.remove(className);
    }

    return this;
};

HTMLElement.prototype.hasClass = function(className) {
    return this.className.replace(/\n/t/g, " ").indexOf(className) > -1;
};