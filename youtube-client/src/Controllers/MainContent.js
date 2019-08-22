import YouTubeRequest from '../Model/response';
import PartOfData from '../Views/PartOfData';
import ParseData from '../Model/Parce';

export default class App {
  constructor(question) {
    this.urlRequest = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&type=video&part=snippet&maxResults=15&q=${question}`;
  }

  async start() {
    const model = new YouTubeRequest(this.urlRequest);
    let data = await model.sendRequest();
    const strReq = [];
    this.dataContainer = {
      urlRequest: this.urlRequest,
      nextPageToken: data.nextPageToken,
      data: [],
    };
    const dataItems = data.items;
    for (let index = 0; index < dataItems.length; index += 1) {
      const parseData = new ParseData(dataItems[index]);
      this.dataContainer.data.push(parseData.data);
      strReq.push(this.dataContainer.data[index].videoId);
    }
    model.urlRequest = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBMPWAjVIhgEIexmquDjkdXx4snJjWzUF0&id=${strReq.join(',')}&part=snippet,statistics`;
    data = await model.sendRequest();
    for (let index = 0; index < data.items.length; index += 1) {
      this.dataContainer.data[index].countViev = data.items[index].statistics.viewCount;
    }
    const partOfData = new PartOfData(this.dataContainer);
    partOfData.show();
  }
}
