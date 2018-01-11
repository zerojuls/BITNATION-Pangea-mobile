import _ from 'lodash';

export function resolveWallet(wallets, address) {
  return _.find(wallets, (wallet) => wallet.ethAddress === address);
}

export function compressMnemonic(mnemonic) {
  return _.join(mnemonic, ' ');
}