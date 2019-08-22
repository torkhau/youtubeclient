import { A, Img } from './htmlElems';

export default class DataContainer {
  constructor(params) {
    this.videoLink = params.videoLink || '';
    this.relLink = params.relVideo || '';
    this.titleContent = params.titleContent || '';
    this.srcImg = params.srcImg || '';
    this.altImg = params.altImg || '';
    this.channelTitle = params.channelTitle || '';
    this.description = params.description || '';
    this.publishedAt = params.publishedAt || '';
    this.countViev = params.countViev || '';
  }

  getElement(objDocument) {
    // + Image wrapper
    const a = new A({ href: this.videoLink, target: '_blank', rel: this.relLink });
    const aElem = a.getElement(objDocument);
    aElem.innerText = this.titleContent;
    const divLinkWrapper = objDocument.createElement('div');
    divLinkWrapper.setAttribute('class', 'link-wrapper');
    divLinkWrapper.appendChild(aElem);
    const img = new Img({ src: this.srcImg, alt: this.title });
    const divImgWrapper = objDocument.createElement('div');
    divImgWrapper.setAttribute('class', 'img-wrapper');
    divImgWrapper.appendChild(divLinkWrapper);
    divImgWrapper.appendChild(img.getElement(objDocument));
    // - Image wrapper
    // + Data wrapper
    const divDataWrapperIco = Array(3);
    const divDataWrapperContent = Array(3);
    for (let index = 0; index < 3; index += 1) {
      divDataWrapperIco[index] = objDocument.createElement('div');
      divDataWrapperIco[index].setAttribute('class', 'data-wrapper_ico');
      divDataWrapperContent[index] = objDocument.createElement('div');
    }
    divDataWrapperIco[0].innerText = String.fromCharCode(0xF202);
    divDataWrapperIco[1].innerText = String.fromCharCode(0xF124);
    divDataWrapperIco[2].innerText = String.fromCharCode(0xF147);
    divDataWrapperContent[0].innerText = this.channelTitle;
    divDataWrapperContent[1].innerText = this.publishedAt;
    divDataWrapperContent[2].innerText = this.countViev;
    const divDataWrapper = objDocument.createElement('div');
    divDataWrapper.setAttribute('class', 'data-wrapper');
    for (let index = 0; index < 3; index += 1) {
      divDataWrapper.appendChild(divDataWrapperIco[index]);
      divDataWrapper.appendChild(divDataWrapperContent[index]);
    }
    // - Data wrapper
    // + Description
    const divDescription = objDocument.createElement('div');
    divDescription.setAttribute('class', 'description');
    divDescription.innerText = this.description;
    // - Description
    const divContainer = objDocument.createElement('div');
    divContainer.setAttribute('class', 'container');
    divContainer.appendChild(divImgWrapper);
    divContainer.appendChild(divDataWrapper);
    divContainer.appendChild(divDescription);
    const liContainer = objDocument.createElement('li');
    liContainer.appendChild(divContainer);
    return liContainer;
  }
}
