// @flow

import React, { Alert, NativeModules } from 'react-native';
import {
  FOUR_INCHES,
  FOUR_DOT_SEVEN_INCHES,
  FIVE_DOT_FIVE_INCHES,
  FIVE_DOT_EIGHT_INCHES,
} from '../global/Constants';

const {
  Dimensions, Platform,
} = React;

const disabledForDebugging = false;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

/**
 * Function to normalize Font sizes depending on screen size
 * @param {number} size The original font size
 * @returns {number} The new font size depending the current screen
 */
export function fontSizeNormalizer(size: number) {
  if (disabledForDebugging && __DEV__) {
    return size;
  }
  if (deviceHeight === FOUR_INCHES) {
    return size * 0.65;
  } else if (deviceHeight === FOUR_DOT_SEVEN_INCHES) {
    return size;
  } else if (deviceHeight === FIVE_DOT_FIVE_INCHES) {
    return size * 1.4;
  }
  return size;
}

/**
 * Function to calculate the margin of a component using 2/3 of screen
 * @returns {number} The margin to be applied in each side
 */
export function normalWidthMargin() {
  return (deviceWidth / 3) / 2;
}
/**
 * Function to check if the device it's an iPhone X
 * @returns {boolean} True if it is
 */
function isiPhoneX() {
  if (Platform.OS === 'ios' && (deviceHeight === FIVE_DOT_EIGHT_INCHES || deviceWidth === FIVE_DOT_EIGHT_INCHES)) {
    return true;
  }
  return false;
}

/**
 * Function to fix the height of Status Bar ONLY in the iPhoneX
 * @param {number} size The actual device's screen size
 * @returns {number} The correct size for the Status Bar
 */
export function isiPhoneXStatusBar(size: number) {
  if (isiPhoneX()) {
    return size + 24;
  }
  return size;
}

/**
 * Function to fix the height of Fake Tab Bar ONLY in the iPhoneX
 * @param {number} size The actual device's screen size
 * @returns {number} The correct size for the Fake Tab Bar
 */
export function isiPhoneXTabBar(size: number) {
  if (isiPhoneX()) {
    return size + 29;
  }
  return size;
}


/**
 * testFunction
 * @returns {Promise<void>} testFunction
 */
export async function testFunction() {
  try {
    const testingPanthalassa = NativeModules.Panthalassa;
    const result = await testingPanthalassa.PanthalassaStart({ accountStore: ' {"password":"{\\"cipher_text\\":\\"olDYk8en3X88H1faxQ_CGBIkvyUSnw==\\",\\"scrypt_key\\":{\\"n\\":16384,\\"r\\":8,\\"p\\":1,\\"key_len\\":32,\\"salt\\":\\"eHunCXrfM2u4xtiv8/UeFrBOmVuxFTK0L5AYiT/VUZrKLyBCblapLwXSWfGkrC4RoDk=\\"}}","encrypted_key_store":"{\\"cipher_text\\":\\"8A-HZtEIjC_w764MJe30HRLY-BV74tmt5sN_zfW9riChwtJX4TcShjUFFLOa6MscQ61_e5q3k37BkFE0g1_al105kvq_CKVX1AIjAez4AdgxW4kceZ76SzwmSi6gJ2U3WXs-HvWTmh_FZHEU-8cbc9d15eNjyQBRXy3uLueuY97P9jhB35PmG9ImlPXdIQkR-6caGBllhBI1IcGBg3MbP2WVG_mZIdU7VugQp1Q_j_XGiS3vcwP6Utc13PXWIqq7HvxvtIB0CiqxH62KB8wCGa1qk1M89YqK_cd6wBscxTNtHs2ZRZNWrkilvH3ScA-ivIpZepTBwegZBdHtOq7OGMzm7nLfjkcHEUPZ-AoQbIfX3cERXK0cTQ0yueGIjXRhcjxfxQ==\\",\\"scrypt_key\\":{\\"n\\":16384,\\"r\\":8,\\"p\\":1,\\"key_len\\":32,\\"salt\\":\\"MU3tzj7CevzBGfs3Z9/9brOJO5BBXhkctzl4ygnGwQKo/AArVWkAF/SMit7G+pEs1vM=\\"}}","version":1}', password: '111111' });
    // const result = await testingPanthalassa.PanthalassaNewAccountKeys({ pw: '111111', pwConfirm: '111111' });
    console.log('Panthalassa: ', result);
    if (result == null) {
      Alert.alert('PanthalassaStart');
    }
  } catch (e) {
    Alert.alert(e.message);
  }
}
