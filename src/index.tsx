import "./index.css";

import App from "./App";
import { CometChatUIKit } from "./cometchat-pro-react-ui-kit-4/src";
import React from "react";
import ReactDOM from "react-dom/client";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";

//import { PollsExtensionDecorator } from './cometchat-pro-react-ui-kit/src/Extensions/Polls/PollsExtensionDecorator';

// const uiKitSettings = new UIKitSettingsBuilder()
// .setAppId("24142113bb7164b4")
// .setRegion("us")
// .subscribePresenceForFriends()
// .setAuthKey("7c08a24e8cd1a836ca27ea17bdd983e5b752dd98")
// // .setAdminHost("112703862707db.api-us.cometchat-staging.com/v3")
// // .setClientHost("112703862707db.apiclient-us.cometchat-staging.com/v3")
// .build()

// Live app credentials
// const uiKitSettings = new UIKitSettingsBuilder()
   // original app id credentials
  // .setAppId("251944b7796c173f")
  // .setRegion("us")
  // .subscribePresenceForFriends()
  // .setAuthKey("9b4cab72484ff4d26b687c378b4c8eca60b8a51e")
// .build();

// Staging app credentials
  const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId("129441560a3903")
  .setRegion("us")
  .subscribePresenceForFriends()
  .setAuthKey("a562357bdc98b850151658456c53c656affbffa0")
  .setAdminHost("129441560a3903.api-us.cometchat-staging.com/v3")
  .setClientHost("129441560a3903.apiclient-us.cometchat-staging.com/v3")
  .build()

CometChatUIKit.init(uiKitSettings)?.then((response) => {
  CometChatUIKit.login("superhero3")?.then((user) => {

    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(<App />);
  });
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
