export default (bin) => {
  const arrOfBin = bin.split('').reverse();
  if (arrOfBin.length > 8) {
    return 'Binary code is incorrect';
  }
  return arrOfBin.reduce((result, n, index) => {
    if ((n !== '1' && n !== '0') || result === 'Binary code is incorrect') {
      return 'Binary code is incorrect';
    }
    return result + (parseInt(n, 10) === 1 ? (2 ** index) : 0);
  }, 0);
};
