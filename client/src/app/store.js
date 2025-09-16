import { configureStore } from "@reduxjs/toolkit";
import user from "../features/user/userSlice.js";
import messages from "../features/messages/messagesSlice.js";
import connections from "../features/connections/connectionsSlice.js";

const store = configureStore({
  reducer: { user, messages, connections },
});

export default store;
