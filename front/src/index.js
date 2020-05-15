import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Modal from './components/Modal/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Modal />, document.getElementById('modal-root'));


registerServiceWorker();
