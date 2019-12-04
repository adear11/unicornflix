/* eslint-env browser */
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Routing from './components/Router';
// Insert Location

Amplify.configure(awsconfig);


ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
