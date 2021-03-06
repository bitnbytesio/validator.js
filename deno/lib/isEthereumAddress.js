import assertString from './util/assertString.js';

const eth = /^(0x)[0-9a-f]{40}$/i;

export default function isEthereumAddress(str) {
  assertString(str);
  return eth.test(str);
}
