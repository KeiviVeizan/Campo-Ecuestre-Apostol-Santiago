// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
  }

  handleOption(id) {
      if (id === "plans") {
          const message = this.createChatBotMessage(
              "Nuestros planes incluyen opciones flexibles y personalizables para todos. ¿Quieres más detalles?"
          );
          this.addMessageToState(message);
      } else if (id === "contact") {
          const message = this.createChatBotMessage(
              "Puedes contactarnos a través del número +591-XXX-XXX o enviarnos un correo a contacto@empresa.com."
          );
          this.addMessageToState(message);
      }
  }

  addMessageToState(message) {
      this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
      }));
  }
}

export default ActionProvider;
