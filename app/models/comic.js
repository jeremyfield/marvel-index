import Model, { attr } from '@ember-data/model';

export default class ComicModel extends Model {
  @attr title;
  @attr description;
  @attr pageCount;
  @attr thumbnail;
  @attr urls;

  get thumbnailLink() {
    const { path, extension } = this.thumbnail;
    return `${path}/standard_large.${extension}`;
  }
}
