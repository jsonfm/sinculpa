// React
import React from "react";

// Store
import { Provider } from "react-redux";
import { createStore } from "./src/store";

// Layout
import { Layout } from './src/components/Layout';
import './src/styles/global.css';


export const wrapRootElement = ({ element }): JSX.Element => {
  const store = createStore();

  return (
    <Provider store={store}>
      <Layout>
        {element}
      </Layout>
    </Provider>
  );
}
