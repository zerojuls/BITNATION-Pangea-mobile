// @flow

import React from 'react';
import {
  View,
  Modal,
  Image,
} from 'react-native';
import { Text } from 'native-base';

import Button from '../../../components/common/Button';
import styles from './styles';
import i18n from '../../../global/i18n';

type Props = {
  /**
   * @desc User profile object
   */
  profile: any,
  /**
   * @desc Function to cancel invite
   */
  onCancel: () => void,
  /**
   * @desc Function to send invite
   * @param profile Profile object of the user
   */
  onSendInvite: (profile: Object) => void,
  /**
   * @desc Modal visibility
   */
  visible: boolean
};

const NewChatModal = ({
  profile, onSendInvite, onCancel, visible,
}: Props) => (
  <Modal
    animationType='slide'
    transparent
    visible={visible}
  >
    <View style={styles.modalContainer}>
      <View style={[styles.modalContent, styles.newChatModal]}>
        <View style={styles.profileArea}>
          <Text style={styles.modalTitle}>{i18n.t('screens.chat.newChat')}</Text>
          <Image source={profile.information.image} style={styles.avatarLarge} />
          <Text style={styles.userName}>{profile.information.name}</Text>
        </View>
        <View style={styles.buttonArea}>
          <Button
            enabled
            styleTitle={styles.newAccountText}
            title={i18n.t('screens.chat.cancel').toUpperCase()}
            onPress={onCancel}
          />
          <Button
            enabled
            styleTitle={styles.newAccountText}
            title={i18n.t('screens.chat.sendInvite').toUpperCase()}
            onPress={onSendInvite}
          />
        </View>
      </View>
    </View>
  </Modal>
);

export default NewChatModal;
