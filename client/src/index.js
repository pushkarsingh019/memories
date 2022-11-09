import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux"
import store from "./store";
import {GoogleOAuthProvider} from "@react-oauth/google"

import App from "./App";
const clientId = "614075972818-t3vui9hvpipdpg49pcgagask3o8b85s8.apps.googleusercontent.com";



ReactDom.render(<Provider store={store }><GoogleOAuthProvider clientId={clientId}><App /></GoogleOAuthProvider></Provider>, document.getElementById(`root`));