// The constant of the string
const stringToConvert = '%6e%6f%70%71%20%2F';

// The arrowed function to decode
const decode = (encodeStr) => {
  return encodeStr.split('\%')
                  .filter(el => el !== '')
                  .map(el => String.fromCharCode(parseInt(el, 16)))
                  .join('');
}

console.log(decode(stringToConvert));
