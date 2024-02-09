import './App.css';

import { CometChatConversations, CometChatGroupsWithMessages, CometChatPalette, CometChatTheme, CometChatThemeContext, MessageHeaderConfiguration, MessagesConfiguration } from './cometchat-pro-react-ui-kit-4/src';

import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatConversationsWithMessages } from './cometchat-pro-react-ui-kit-4/src/CometChatConversationsWithMessages';
import { CometChatIncomingCall } from './cometchat-pro-react-ui-kit-4/src/Calling/CometChatIncomingCall';
import { CometChatUIKit } from './cometchat-pro-react-ui-kit-4/src';
import { CometChatUsersWithMessages } from './cometchat-pro-react-ui-kit-4/src';
import logo from './logo.svg';

function App(props:any) {
  const palette = new CometChatPalette({mode:"light"});
    const newTheme = new CometChatTheme({palette});
// CometChatUIKit.Localize.setLocale("de");
  const user = new CometChat.User("superhero3");
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
  <CometChatConversationsWithMessages
  startConversationIconURL=''
      ></CometChatConversationsWithMessages>
      
      {/* <CometChatConversations /> */}
      <CometChatIncomingCall />
    </div>  
  );
}

export default App;
