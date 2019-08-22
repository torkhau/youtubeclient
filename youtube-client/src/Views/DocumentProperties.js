export default class DocumentProperties {
  getClientWidth() {
    this.clientWidth = document.documentElement.clientWidth;
    return this.clientWidth;
  }

  getClipPerPage() {
    const clientWidht = this.getClientWidth();
    if (clientWidht <= 480) {
      this.clipPerPage = 1;
    } else if (clientWidht <= 768) {
      this.clipPerPage = 2;
    } else if (clientWidht <= 1024) {
      this.clipPerPage = 3;
    } else {
      this.clipPerPage = 4;
    }
    return this.clipPerPage;
  }

  getClipWidth() {
    this.clipWidth = Number.parseInt((this.getClientWidth() / this.getClipPerPage()).toFixed(2),
      10);
    return this.clipWidth;
  }
}
