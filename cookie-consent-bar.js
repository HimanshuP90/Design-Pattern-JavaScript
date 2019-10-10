var barClassName = "c-cookie-consent";
var policyText =
  "We use cookies to make your experience of our website better. To comply with the E-Privacy Regulations, we need to ask for your consent to set these cookies.";
// If not using additionalLink or additionalLinkText, set them to null
var additionalLink = "#";
var additionalLinkText = "Find out more";

window.onload = function() {
  if (!checkConsent()) {
    var cookieBarClassNames =
      additionalLink && additionalLinkText
        ? " " + barClassName + "--has-additional"
        : "";
    var cookieBar = this.createDOMElement(
      "div",
      "",
      barClassName + cookieBarClassNames
    );
    var cookieBarInner = createDOMElement("div", "", barClassName + "__inner");
    cookieBar.appendChild(cookieBarInner);
    cookieBarInner.appendChild(
      createDOMElement("p", policyText, barClassName + "__policy")
    );
    cookieBarInner.appendChild(createButtons());
    document.body.insertAdjacentHTML("afterbegin", cookieBar.outerHTML);
    setAcceptListener();
  }
};

createDOMElement = function(type, content, className) {
  var element = document.createElement(type);
  if (className) {
    element.setAttribute("class", className);
  }
  element.innerHTML = content;
  return element;
};

createButtons = function() {
  // Buttons
  var buttonsWrap = createDOMElement(
    "div",
    "",
    barClassName + "__buttons-wrap"
  );
  // Accept button
  buttonsWrap.appendChild(createAcceptButton());
  // Additional link
  if (additionalLink && additionalLinkText) {
    var buttonContent = createDOMElement(
      "span",
      additionalLinkText,
      barClassName + "__button-text"
    );
    var additionalButton = createDOMElement(
      "a",
      buttonContent.outerHTML,
      barClassName + "__button " + barClassName + "__button--additional"
    );
    additionalButton.setAttribute("href", additionalLink);
    buttonsWrap.appendChild(additionalButton);
  }
  return buttonsWrap;
};

createAcceptButton = function() {
  var buttonContent = createDOMElement(
    "span",
    "Accept " + getAccessiblityText(),
    barClassName + "__button-text"
  );
  var button = createDOMElement(
    "button",
    buttonContent.outerHTML,
    barClassName + "__button " + barClassName + "__button--accept"
  );
  button.setAttribute("aria-label", "Accept consent to set cookies");
  return button;
};

getAccessiblityText = function() {
  return createDOMElement(
    "span",
    "consent to set cookies",
    barClassName + "__accessible-text"
  ).outerHTML;
};

checkConsent = function() {
  var isConsentSet = localStorage.getItem("consent");
  return isConsentSet && isConsentSet === "true";
};

setConsent = function() {
  localStorage.setItem("consent", true);
  removeCookieBar();
};

removeCookieBar = function() {
  var cookieBar = document.querySelector("." + barClassName);
  if (cookieBar) {
    cookieBar.outerHTML = "";
  }
};

setAcceptListener = function() {
  var acceptButton = document.querySelector(
    "." + barClassName + "__button--accept"
  );
  if (acceptButton) {
    acceptButton.addEventListener("click", setConsent);
  }
};
