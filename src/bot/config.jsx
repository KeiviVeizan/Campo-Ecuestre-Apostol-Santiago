import { createChatBotMessage } from 'react-chatbot-kit';
import WidgetBot from './WidgetBot';
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm uwu`)],
  widgets: [
    {
      widgetName: 'WidgetBot',
      widgetFunc: (props) => <WidgetBot  {...props} />,
    },
  ],
};
 
export default config;