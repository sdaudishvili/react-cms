export const pathToArr = (path, name) => {
  let string = '';
  const arr = [];
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === '/') {
      arr.push(string);
      string = '';
      // eslint-disable-next-line no-continue
      continue;
    }
    string += path[i];
  }
  arr.push(name);
  return arr;
};
