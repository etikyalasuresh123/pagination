import _ from 'lodash';

  export const paginates = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber -1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}

