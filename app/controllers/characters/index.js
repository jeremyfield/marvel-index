import Controller from '@ember/controller';

export default class CharactersIndexController extends Controller {
  queryParams = ['nameStartsWith'];

  nameStartsWith = null;
}
