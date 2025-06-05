import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE", // Replace with your actual DSN
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);