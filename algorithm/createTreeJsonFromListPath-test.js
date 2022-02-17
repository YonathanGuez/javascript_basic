const data = [
    'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\algorith\\a.txt',
    'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\algorith\\b.txt',
    'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\index.js',
    'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\i.js',
    'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\j.js',
  ],
  result = [];

data.reduce(
  (r, path) => {
    path
      .replace('C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\', '')
      .split('\\')
      .reduce((o, name) => {
        let temp = (o.children = o.children || []).find((q) => q.name === name);
        if (!temp) o.children.push((temp = { name }));
        return temp;
      }, r);
    return r;
  },
  { children: result }
);

console.log(JSON.stringify(result, null, 2));
