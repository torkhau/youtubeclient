export default class ParseData {
  constructor(data) {
    this.dataToParse = data;
  }

  get data() {
    const { channelTitle, description, publishedAt } = this.dataToParse.snippet;
    const { title } = this.dataToParse.snippet;
    const { videoId } = this.dataToParse.id;
    const { url } = this.dataToParse.snippet.thumbnails.medium;
    const dataObj = {};
    dataObj.videoId = videoId;
    dataObj.videoLink = `https://www.youtube.com/watch?v=${videoId}`;
    dataObj.relVideo = title;
    dataObj.titleContent = title;
    dataObj.srcImg = url;
    dataObj.altImg = title;
    dataObj.channelTitle = channelTitle;
    const date = new Date(Date.parse(publishedAt));
    dataObj.publishedAt = date.toLocaleDateString();
    dataObj.description = description;
    return dataObj;
  }
}
