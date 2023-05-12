const find = (a, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      return true;
    }
  }
  return false;
};

export default find;
