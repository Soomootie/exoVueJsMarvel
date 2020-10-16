import { Model } from "@vuex-orm/core";
import Enum from "@/enums/EnumServices";

export default class Creator extends Model {
  static entity = Enum.CREATORS;

  static fields() {
    return {
      id: this.number(null),
      firstName: this.string(null),
      middleName: this.string(null),
      lastName: this.string(null),
      suffix: this.string(null),
      fullName: this.string(null),
      modified: this.attr(null),
      resourceURI: this.string(null),
      urls: [
        {
          type: this.string(null),
          url: this.string(null)
        }
      ],
      thumbnail: {
        path: this.string(null),
        extension: this.string(null)
      },
      series: this.attr(null),
      stories: this.attr(null),
      comics: this.attr(null),
      events: this.attr(null)
    };
  }
}
