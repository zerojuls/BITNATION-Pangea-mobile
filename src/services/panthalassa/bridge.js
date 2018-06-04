// @flow

import { NativeModules } from 'react-native';

const { Panthalassa } = NativeModules;
const {
  PanthalassaStart,
} = Panthalassa;

type StartConfig = {
    encryptedKeyManager: string,
    signedProfile: string,
}

/**
 * @desc Star panthalassa with given configuration
 * @param {StartConfig} startConfig start config needed to start panthalassa
 * @param {string} password password of encrypted keystore
 * @return {Promise<void>} will be resolved when started
 */
export function start(startConfig: StartConfig, password: string) : Promise<void> {
  return PanthalassaStart({
    config: JSON.stringify({
      encrypted_key_manager: startConfig.encryptedKeyManager,
      signed_profile: startConfig.signedProfile,
    }),
    password,
  });
}
