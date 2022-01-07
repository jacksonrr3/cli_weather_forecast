
const getArgs = (args) => { 
  const res = {};
  const [executor, fileName, ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.charAt(0) == '-') { 
      if (array.length - 1 === index) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) != '-') {
        res[value.substring(1)] = array[index + 1];
      } else { 
        res[value.substring(1)] = true;
      }
    }
  });
  return res;
}

export { getArgs };