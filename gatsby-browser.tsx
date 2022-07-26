// React
import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

// Store
import { Provider } from "react-redux";
import { createStore } from "./src/store";

// Layout
import { Layout } from './src/components/Layout';
import './src/styles/global.css';


export const wrapRootElement = ({ element }): JSX.Element => {
  const store = createStore();

  return (
    <ParallaxProvider>
      <Provider store={store}>
        <Layout>
          {element}
        </Layout>
      </Provider>
    </ParallaxProvider>
  );
}

