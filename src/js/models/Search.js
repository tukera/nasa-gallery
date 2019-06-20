import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://images-api.nasa.gov/search?q=${this.query}&media_type=image`);
      this.result = res.data.collection.items;
    } catch (error) {
      alert(error);
    }
  }
}
