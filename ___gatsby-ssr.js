// gatsby-ssr.js

import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import i18n from "./src/layouts/index";

//import createStore from "./src/state/createStore";

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(["common"], () => {
    // const store = createStore();
    // const ConnectedBody = () => (
    //   <Provider store={store}>{bodyComponent}</Provider>
    // );
    replaceBodyHTMLString(renderToString(<ConnectedBody />));
  });
};