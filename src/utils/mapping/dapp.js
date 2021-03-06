// @flow

// $FlowFixMe Flow has issues with import buffer for some reason.
import { Buffer } from 'buffer';
import type { DAppType as DBDApp } from '../../services/database/schemata';

/**
 * @desc Converts DApp to Panthalassa representation.
 * @param {DApp} dApp DApp to convert.
 * @return {Object} Converted DApp object.
 */
export function convertToPanthalassa(dApp: DBDApp) {
  return {
    name: dApp.name,
    code: dApp.code,
    signature_public_key: Buffer.from(dApp.publicKey, 'hex').toString('base64'),
    signature: Buffer.from(dApp.signature, 'hex').toString('base64'),
  };
}

/**
 * @desc Converts DApp to database representation.
 * @param {*} dApp DApp info object to convert.
 * @param {string} accountId Id of account that DApp is related to.
 * @return {Object} Converted DApp object.
 */
export function convertToDatabase(dApp: { name: string, code: string, signature: string, publicKey: string }, accountId: string): DBDApp {
  return {
    name: dApp.name,
    code: dApp.code,
    publicKey: dApp.publicKey,
    signature: dApp.signature,
    accountId,
    icon: '',
    compoundId: `${dApp.publicKey}|${accountId}`,
  };
}
