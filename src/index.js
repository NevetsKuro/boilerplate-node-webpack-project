import _ from 'lodash';
import icon from './John_1.png';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, imported by cli
    element.innerHTML = _.join(['Hello', 'John', '<br/>'], ' ');
    element.classList.add('hello');

    const myicon = new Image();
    myicon.src = icon;

    element.appendChild(myicon);

    return element;
}

document.body.appendChild(component());