import AbstractMarvelService from "@/services/AbstractMarvelService.js";
import Comic from "@/models/Comic.js";

export default class ComicService extends AbstractMarvelService {
  static entity = "comics";

  async getList(onSuccess, onFail, onDone, page) {
    this.doRequest("comics", Comic, onSuccess, onFail, onDone, page);
  }
}
