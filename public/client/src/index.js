import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Parent from './Parent.jsx';

ReactDOM.render(<Parent name="hi" />, document.getElementById('root'));
registerServiceWorker();
