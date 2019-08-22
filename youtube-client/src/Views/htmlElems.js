export class Input {
  // Class for create input HTML element
  //
  // Fields of class
  // ==========================================================================
  // type - type of HTML attribut input
  // --values: "text"     - text fild;
  //           "password" - text fild but all simbols is a "stars"
  //           "email"    - text fild vith e-mail mask
  //           "search"   - text fild with search arrtibuts
  // If this field unset by user, this fild will been set default value - text
  // ==========================================================================
  // id - Name ID element HTML
  // --values: string
  // This is ID HTML element's on the HTML page. Can not be empty string!
  // String must be without spaces!
  // ==========================================================================
  // class - Name class element HTML
  // --values: string
  // This is class HTML element's on the HTML page. Can not be empty string!
  // String must be without spaces!
  // ==========================================================================
  // placeholder - placeholder element HTML
  // --values: string
  // This is placeholder HTML element's on the HTML page.

  constructor(type = '', idName = '', className = '', placeholder = '') {
    const typeParse = type.toString();
    if (typeParse) {
      switch (typeParse) {
        case 'password':
          this.type = 'password';
          break;
        case 'email':
          this.type = 'email';
          break;
        case 'search':
          this.type = 'search';
          break;
        default:
          this.type = 'text';
          break;
      }
    } else {
      this.type = 'text';
    }
    this.idName = idName.toString();
    this.className = className.toString();
    this.placeholder = placeholder.toString();
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('input');
    if (this.idName) {
      elem.setAttribute('id', this.idName);
    }
    if (this.className) {
      elem.setAttribute('class', this.className);
    }
    if (this.placeholder) {
      elem.setAttribute('placeholder', this.placeholder);
    }
    elem.setAttribute('type', this.type);
    return elem;
  }
}

export class Label {
  // Class for create label HTML element
  //
  // Fields of class
  // ==========================================================================
  // for - type of HTML attribut label
  // --for: string;
  //
  // ==========================================================================
  // id - Name ID element HTML
  // --values: string
  // This is ID HTML element's on the HTML page. Can not be empty string!
  // String must be without spaces!
  // ==========================================================================
  // class - Name class element HTML
  // --values: string
  // This is class HTML element's on the HTML page. Can not be empty string!
  // String must be without spaces!

  constructor(params) {
    this.forElem = params.forElem || '';
    this.idName = params.idName || '';
    this.className = params.className || '';
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('label');
    if (this.idName) {
      elem.setAttribute('id', this.idName);
    }
    if (this.className) {
      elem.setAttribute('class', this.className);
    }
    if (this.forElem) {
      elem.setAttribute('for', this.forElem);
    }
    return elem;
  }
}

export class Meta {
  constructor(params) {
    this.charset = params.charset || '';
    this.content = params.content || '';
    this.httpEquiv = params.httpEquiv || '';
    this.name = params.name || '';
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('meta');
    if (this.charset) {
      elem.setAttribute('charset', this.charset);
    }
    if (this.content) {
      elem.setAttribute('content', this.content);
    }
    if (this.httpEquiv) {
      elem.setAttribute('http-equiv', this.httpEquiv);
    }
    if (this.name) {
      elem.setAttribute('name', this.name);
    }
    return elem;
  }
}

export class A {
  constructor(params) {
    this.href = params.href || '';
    this.target = params.target || '';
    this.rel = params.rel || '';
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('a');
    if (this.href) {
      elem.setAttribute('href', this.href);
    }
    if (this.target) {
      elem.setAttribute('target', this.target);
    }
    if (this.rel) {
      elem.setAttribute('rel', this.rel);
    }
    return elem;
  }
}

export class Img {
  constructor(params) {
    this.src = params.src || '';
    this.alt = params.alt || '';
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('img');
    if (this.src) {
      elem.setAttribute('src', this.src);
    }
    if (this.alt) {
      elem.setAttribute('alt', this.alt);
    }
    return elem;
  }
}

export class Button {
  constructor(className = '', name = '', text) {
    this.className = className;
    this.name = name;
    this.text = text;
  }

  getElement(objDocument) {
    const elem = objDocument.createElement('button');
    if (this.className) {
      elem.setAttribute('class', this.className);
    }
    if (this.name) {
      elem.setAttribute('name', this.name);
    }
    elem.innerText = this.text;
    return elem;
  }
}
