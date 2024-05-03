
import './index.css';
import {App} from "./App";

const root = document.getElementById('root')

const app = new App();

if (!root) {
    console.log('Error');
} else {
    root.innerHTML = app.render();
}