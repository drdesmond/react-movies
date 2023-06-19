import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <SWRConfig
      value={{
        fetcher: (uri) => fetcher(uri).then((res) => res),
      }}
    >
    <App />
    </SWRConfig>
  </React.StrictMode>
);

async function fetcher(url:string) {
  try {
    const res = await fetch(`${url}&limit=3`, {
      headers: {
        Authorization: 'Bearer _1A4JgIUFoZkIevroc8O',
      },
    });
    if (!res.ok) {
      return res.json().then((response) => {
        const { error } = response;
        throw new Error(String(error));
      });
    }
    return res.json();
  } catch (error) {
    throw new Error(String(error));
  }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
