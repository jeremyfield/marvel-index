import { helper } from '@ember/component/helper';

export default helper(function thumbnailLink([thumbnail, size]) {
  let { path, extension } = thumbnail;
  return `${path}/${size ? size : 'standard_large'}.${extension}`;
});
