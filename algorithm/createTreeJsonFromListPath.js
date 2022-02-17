const data = [
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\a\\algorith\\a.txt',
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\a\\algorith\\b.txt',
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\a\\algorith\\d.txt',
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\index.js',
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\i.js',
  'C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\server_old\\express_first_app\\j.js',
];
////methode 1
console.log('Method foreach in foreach:');
let treePath = {};
data.forEach((path) => {
  let levels = path
    .replace('C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\', '')
    .split('\\');
  let file = levels.pop();
  let prevLevel = treePath;
  let prevProp = levels.shift();

  levels.forEach((prop) => {
    prevLevel[prevProp] = prevLevel[prevProp] || {};
    prevLevel = prevLevel[prevProp];
    prevProp = prop;
  });

  prevLevel[prevProp] = (prevLevel[prevProp] || []).concat([file]);
});
console.log(JSON.stringify(treePath, null, 2));

////methode 2
console.log('Method foreach and reduce:');
let treePath2 = {};
data.forEach((path) => {
  let levels = path
    .replace('C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\', '')
    .split('\\');
  let file = levels.pop();
  levels.reduce((prev, lvl, i) => {
    console.log(prev[lvl], '=', levels.length - i - 1, file);
    return (prev[lvl] =
      levels.length - i - 1
        ? prev[lvl] || {}
        : (prev[lvl] || []).concat([file]));
  }, treePath2);
});
console.log(JSON.stringify(treePath2, null, 2));

////methode 3
console.log('Method foreach in foreach 2 :');
function filePathOject(arr) {
  const ret = {};
  arr.forEach((path) => {
    const dirs = path
      .replace('C:\\Users\\TEST\\Desktop\\projects\\javascript_basic\\', '')
      .split('\\');
    const filename = dirs.pop();

    let dirObject = ret;
    dirs.forEach((dir, i) => {
      if (i === dirs.length - 1) {
        dirObject[dir] = dirObject[dir] || [];
        dirObject[dir].push(filename);
      } else {
        dirObject[dir] = dirObject[dir] || {};
      }
      dirObject = dirObject[dir];
    });
  });

  return ret;
}
console.log(JSON.stringify(filePathOject(data), null, 2));
