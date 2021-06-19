import Model, { attr } from '@ember-data/model';

export default class CharacterModel extends Model {
  @attr name;
  @attr description;
  @attr thumbnail;
  @attr urls;
}
