import DataContainer from './DataContainer';
import DocumentProperties from './DocumentProperties';
import YouTubeRequest from '../Model/response';
import ParseData from '../Model/Parce';
import { Button } from './htmlElems';


export default class PartOfData {
  constructor(dataContainer) {
    this.data = dataContainer.data;
    this.nextPageToken = dataContainer.nextPageToken;
    this.urlRequest = dataContainer.urlRequest;
    this.isDown = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.walk = 0;
    this.ulMain = undefined;
    this.page = 1;
    this.countClips = 0;
    this.divButtons = undefined;
  }

  static async request(thisObj) {
    const model = new YouTubeRequest(`${thisObj.urlRequest}&pageToken=${thisObj.nextPageToken}`);
    let data = await model.sendRequest();
    const strReq = [];
    const dataContainer = {
      nextPageToken: data.nextPageToken,
      data: [],
    };
    const dataItems = data.items;
    for (let index = 0; index < dataItems.length; index += 1) {
      const parseData = new ParseData(dataItems[index]);
      dataContainer.data.push(parseData.data);
      strReq.push(dataContainer.data[index].videoId);
    }
    model.urlRequest = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&id=${strReq.join(',')}&part=snippet,statistics`;
    data = await model.sendRequest();
    for (let index = 0; index < data.items.length; index += 1) {
      dataContainer.data[index].countViev = data.items[index].statistics.viewCount;
    }
    return dataContainer;
  }

  static onPointerDown(event, thisObj) {
    const obj = thisObj;
    obj.ulMain.classList.remove('smooth');
    obj.ulMain.classList.add('active');
    obj.isDown = true;
    let positionX = 0;
    if (event.type === 'mousedown') {
      positionX = event.pageX;
    } else if (event.type === 'touchstart') {
      positionX = event.changedTouches[0].pageX;
    }
    obj.startX = positionX - obj.ulMain.offsetLeft;
    obj.scrollLeft = obj.ulMain.scrollLeft;
  }

  static addEventMousedown(thisObj) {
    thisObj.ulMain.addEventListener('mousedown', event => PartOfData.onPointerDown(event, thisObj));
    thisObj.ulMain.addEventListener('touchstart', event => PartOfData.onPointerDown(event, thisObj));
  }

  static onPointerLeave(thisObj) {
    const obj = thisObj;
    obj.isDown = false;
    obj.ulMain.classList.remove('active');
  }

  static addEventMouseleave(thisObj) {
    thisObj.ulMain.addEventListener('mouseleave', () => PartOfData.onPointerLeave(thisObj));
    thisObj.ulMain.addEventListener('touchcancel', () => PartOfData.onPointerLeave(thisObj));
  }

  static onPointerUp(thisObj) {
    const obj = thisObj;
    obj.isDown = false;
    obj.ulMain.classList.remove('active');
    obj.ulMain.classList.add('smooth');
    const docProperties = new DocumentProperties();
    const clipWidth = docProperties.getClipWidth();
    if (Math.abs(obj.walk) > clipWidth / 2) {
      if ((obj.page > 1) || (obj.page === 1 && obj.walk < 0)) {
        const clipsPerPage = docProperties.getClipPerPage();
        const sign = obj.walk < 0 ? -1 : 1;
        obj.ulMain.scrollLeft = obj.scrollLeft
          - sign * docProperties.getClientWidth();
        obj.page -= sign;
        PartOfData.textButtons(obj);
        if (obj.countClips - obj.page * clipsPerPage < clipsPerPage) {
          PartOfData.request(obj).then((responce) => {
            obj.data = responce.data;
            obj.nextPageToken = responce.nextPageToken;
            PartOfData.appendItems(obj);
          });
        }
      } else {
        obj.ulMain.scrollLeft = obj.scrollLeft;
      }
    } else {
      obj.ulMain.scrollLeft = obj.scrollLeft;
    }
  }

  static addEventMouseup(thisObj) {
    thisObj.ulMain.addEventListener('mouseup', () => PartOfData.onPointerUp(thisObj));
    thisObj.ulMain.addEventListener('touchend', () => PartOfData.onPointerUp(thisObj));
  }

  static onPointerMove(event, thisObj) {
    const obj = thisObj;
    if (!obj.isDown) return;
    event.preventDefault();
    let positionX = 0;
    if (event.type === 'mousemove') {
      positionX = event.pageX;
    } else if (event.type === 'touchmove') {
      positionX = event.changedTouches[0].pageX;
    }
    const x = positionX - obj.ulMain.offsetLeft;
    obj.walk = x - obj.startX;
    obj.ulMain.scrollLeft = obj.scrollLeft - obj.walk;
  }

  static addEventMousemove(thisObj) {
    thisObj.ulMain.addEventListener('mousemove', event => PartOfData.onPointerMove(event, thisObj));
    thisObj.ulMain.addEventListener('touchmove', event => PartOfData.onPointerMove(event, thisObj));
  }

  static textButtons(thisObj) {
    const btns = thisObj.divButtons.getElementsByTagName('button');
    for (let index = 0; index < btns.length; index += 1) {
      const btn = btns[index];
      switch (index) {
        case 0:
          if (thisObj.page === 1) {
            btn.innerText = '';
          } else {
            btn.innerText = '<<';
          }
          break;
        case 1:
          if (thisObj.page === 1) {
            btn.innerText = '';
          } else {
            btn.innerText = thisObj.page - 1;
          }
          break;
        case 2:
          btn.innerText = thisObj.page + 1;
          break;
        default:
          break;
      }
    }
  }

  static addEventBtnClick(thisObj) {
    const obj = thisObj;
    obj.divButtons.addEventListener('click', (event) => {
      const { target } = event;
      if (target.localName === 'button') {
        const docProperties = new DocumentProperties();
        const clientWidth = docProperties.getClientWidth();
        const clipsPerPage = docProperties.getClipPerPage();
        switch (target.name) {
          case 'btn_home':
            if (obj.page > 1) {
              obj.ulMain.scrollLeft = 0;
              obj.page = 1;
              PartOfData.textButtons(obj);
            }
            break;
          case 'btn_prev':
            if (obj.page > 1) {
              obj.ulMain.scrollLeft -= clientWidth;
              obj.page -= 1;
              PartOfData.textButtons(obj);
            }
            break;
          case 'btn_next':
            obj.ulMain.classList.add('smooth');
            obj.ulMain.scrollLeft += clientWidth;
            obj.page += 1;
            PartOfData.textButtons(obj);
            if (obj.countClips - obj.page * clipsPerPage < clipsPerPage) {
              PartOfData.request(obj).then((responce) => {
                obj.data = responce.data;
                obj.nextPageToken = responce.nextPageToken;
                PartOfData.appendItems(obj);
              });
            }
            break;
          default:
        }
      }
    });
  }

  static appendItems(thisObj) {
    const obj = thisObj;
    obj.countClips += obj.data.length;
    obj.ulMain.style.setProperty('--count-clips', obj.countClips);
    for (let index = 0, len = obj.data.length; index < len; index += 1) {
      const dataContainer = new DataContainer(obj.data[index]);
      obj.ulMain.appendChild(dataContainer.getElement(document));
    }
  }

  show() {
    const bodyHtmlDocument = document.getElementsByTagName('body')[0];
    const ulBodyHtmlDocument = bodyHtmlDocument.getElementsByTagName('ul')[0];
    if (ulBodyHtmlDocument) {
      bodyHtmlDocument.removeChild(ulBodyHtmlDocument);
    }
    const divBtnsHtmlDocument = bodyHtmlDocument.getElementsByClassName('button-wrapper')[0];
    if (divBtnsHtmlDocument) {
      bodyHtmlDocument.removeChild(divBtnsHtmlDocument);
    }
    this.ulMain = bodyHtmlDocument.appendChild(document.createElement('ul'));
    this.ulMain.draggable = false;
    PartOfData.appendItems(this);
    PartOfData.addEventMousedown(this);
    PartOfData.addEventMouseleave(this);
    PartOfData.addEventMouseup(this);
    PartOfData.addEventMousemove(this);
    this.divButtons = document.createElement('div');
    this.divButtons.classList.add('button-wrapper');
    bodyHtmlDocument.appendChild(this.divButtons);
    PartOfData.addEventBtnClick(this);
    this.divButtons.appendChild((new Button('btn', 'btn_home', '')).getElement(document));
    this.divButtons.appendChild((new Button('btn', 'btn_prev', '')).getElement(document));
    this.divButtons.appendChild((new Button('btn', 'btn_next', '2')).getElement(document));
  }
}
