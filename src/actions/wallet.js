export const CREATE_WALLET = 'CREATE_WALLET';
export const CREATE_MNEMONIC = 'CREATE_MNEMONIC';
export const SAVE_PRIVATE_KEY = 'SAVE_PRIVATE_KEY';
export const RESTORE_WALLET = 'RESTORE_WALLET';
export const SELECT_WALLET = 'SELECT_WALLET';
export const SEND_MONEY = 'SEND_MONEY';

export function createWallet() {
  return {
    type: CREATE_WALLET,
  };
}

export function createMnemonic(mnemonic) {
  return {
    type: CREATE_MNEMONIC,
    mnemonic,
  };
}

export function restoreWallet(privateKey) {
  return {
    type: RESTORE_WALLET,
    privateKey,
  };
}

export function savePrivateKey() {
  return {
    type: SAVE_PRIVATE_KEY,
  };
}

export function selectWallet(wallet) {
  return {
    type: SELECT_WALLET,
    wallet,
  };
}

export function sendMoney(wallet, amount, toEthAddress, message) {
  return {
    type: SEND_MONEY,
    wallet,
    amount,
    toEthAddress,
    message,
  };
}
