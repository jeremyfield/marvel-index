import { helper } from '@ember/component/helper';

export default helper(function thumbnailLink([thumbnail]) {
  let { path, extension } = thumbnail;
  return `${path}/standard_large.${extension}`;
});
