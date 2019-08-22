import { Input, Label } from './htmlElems';
import App from '../Controllers/MainContent';

export default class SearchTextBox {
  constructor(params) {
    const idName = params.idName || '';
    const className = params.className || '';
    const defMassage = params.defMassage || '';
    this.Input = new Input('search', idName, className, defMassage);
    let forLabel = idName;
    if (forLabel === '') {
      forLabel = className;
    }
    let labelIdName = '';
    if (idName) {
      labelIdName = `${idName}-label`;
    }
    let labelClassName = '';
    if (className) {
      labelClassName = `${className}-label`;
    }
    this.Label = new Label({ forElem: forLabel, idName: labelIdName, className: labelClassName });
  }

  addEventKeydown() {
    const elem = this.elemForListen;
    elem.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        if (elem.value) {
          const appAction = new App(elem.value);
          appAction.start();
        }
      }
      return '';
    });
  }

  getElement(objDocument) {
    const elem = this.Label.getElement(objDocument);
    this.elemForListen = this.Input.getElement(objDocument);
    elem.appendChild(this.elemForListen);
    return elem;
  }
}
