// config.js
import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import Options from "./Options";

const botName = "Asistente Virtual";

const config = {
    botName,
    initialMessages: [
        createChatBotMessage("Hola, ¿en qué puedo ayudarte?", {
            widget: "options",
        }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
            props: {
                options: [
                    { id: "plans", text: "Me gustaría saber más de los planes" },
                    { id: "contact", text: "Cómo puedo contactarme con la empresa" },
                ],
            },
        },
    ],
    actionProvider: ActionProvider,
};

export default config;
