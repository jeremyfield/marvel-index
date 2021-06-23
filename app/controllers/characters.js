import Controller from '@ember/controller';

export default class CharactersController extends Controller {
  queryParams = ['nameStartsWith'];

  nameStartsWith = null;
}
