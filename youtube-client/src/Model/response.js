export default class YouTubeRequest {
  constructor(urlRequest) {
    this.urlRequest = urlRequest;
  }

  static extractData(dataResponce) {
    return { items: dataResponce.items, nextPageToken: dataResponce.nextPageToken };
  }

  async sendRequest() {
    const response = await fetch(this.urlRequest);
    const data = await response.json();
    return YouTubeRequest.extractData(data);
  }
}
