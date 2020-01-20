import React from 'react';
import ReactDOM from 'react-dom';
import App from '@container/App/index';
ReactDOM.render(<App />, document.getElementById('root'));

if (typeof (module as any).hot !== 'undefined') {
  (module as any).hot.accept('@container/App/index', () => {
    console.log('Accepting the updated module!');
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}