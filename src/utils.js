const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const genValues = (num, amount) => {
  const vals = [];

  while (vals.length < num) {
    let n = Math.floor(Math.random() * amount);
    if (!vals.includes(n)) {
      vals.push(n);
    }
  }
  return vals;
};

export { isObjEmpty, genValues };
