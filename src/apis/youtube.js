import axios from 'axios';

const KEY = 'AIzaSyASUq_njEDy7rf-cjxdSHX0wwnF4pfhz-Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', 
    maxResults: 5,
    key: KEY
  }
});