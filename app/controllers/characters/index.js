import Controller from '@ember/controller';
import { restartableTask, timeout } from 'ember-concurrency';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

const DEBOUNCE_MS = 600;
export default class CharactersIndexController extends Controller {
  queryParams = ['nameStartsWith'];
  @tracked nameStartsWith = null;

  @restartableTask *filterCharacters(name) {
    yield timeout(DEBOUNCE_MS);
    if (isEmpty(name)) {
      this.nameStartsWith = null;
    } else {
      this.nameStartsWith = name;
    }
  }
}
