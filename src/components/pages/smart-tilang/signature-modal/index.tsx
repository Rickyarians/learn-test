import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { Button, Text } from 'app/components';
import { useTheme } from 'app/utils';
import { FontSize, RadiusSizes } from 'types';
import { Close, Delete } from 'app/assets/icon';
import { TouchableOpacity } from 'react-native';

type Prop = {
  isVisible: boolean;
  title: string;
  subtitle: string;
  onDelete: () => void;
  onSend: () => void;
  dataSign: (dataBase64: string) => void;
};

export const ModalSignature: React.FC<Prop> = ({
  isVisible,
  title,
  subtitle,
  onDelete,
  onSend,
  dataSign,
}) => {
  const { colors } = useTheme();
  const ref = useRef<SignatureViewRef>(null);
  const [empty, setEmpty] = useState<boolean>(true);
  const height = Math.max(Dimensions.get('window').height, Dimensions.get('screen').height);
  const [data, setData] = useState<string>('');
  const [index, setIndex] = useState<number>(1);
  const webStyle = `.m-signature-pad--footer
  .save {
      display: none;
  }
  .clear {
      display: none;
  }
  body,html {height: ${heightPercentageToDP(25)}px; width: ${widthPercentageToDP(80)}px;}
`;
  useEffect(() => {
    if (data.length !== 0) {
      ref.current?.clearSignature();
      dataSign(data);
      setData('');
    }
  }, [data, dataSign]);

  const handleConfirm = (signatureUri: string) => {
    ref.current?.readSignature();
    setData(signatureUri);
    setEmpty(false);
  };

  const handleEmpty = () => {
    setEmpty(true);
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  const handleSignature = useCallback(() => {
    ref.current?.readSignature();
    if (index === 0) {
      setIndex(1);
    } else {
      onSend();
    }
  }, [index, onSend]);

  const styles = StyleSheet.create({
    modal: {
      backgroundColor: colors.background_color,
      borderRadius: RadiusSizes.large,
      height: heightPercentageToDP(55),
      padding: widthPercentageToDP(5),
      justifyContent: 'space-around',
    },
    top: {
      alignItems: 'center',
      height: heightPercentageToDP(10),
      justifyContent: 'space-between',
      paddingTop: 20,
    },
    bot: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      width: widthPercentageToDP(37),
      height: heightPercentageToDP(6),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      marginLeft: 10,
    },
    signature: {
      borderStyle: 'dashed',
      borderRadius: RadiusSizes.small,
      borderWidth: 1,
      height: heightPercentageToDP(25),
      width: widthPercentageToDP(80),
      marginVertical: 20,
    },
    close: {
      position: 'absolute',
      right: widthPercentageToDP(-2),
      top: widthPercentageToDP(-3),
      alignSelf: 'center',
      width: widthPercentageToDP(10),
      height: widthPercentageToDP(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Modal
      onBackdropPress={onDelete}
      statusBarTranslucent
      deviceHeight={height}
      useNativeDriver
      useNativeDriverForBackdrop
      isVisible={isVisible}>
      <View style={styles.modal}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.close} onPress={onDelete}>
            <Close />
          </TouchableOpacity>
          <Text type="regular" size={FontSize.description}>
            {title}
          </Text>
          <Text type="semibold" size={FontSize.description}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.signature}>
          <SignatureScreen
            ref={ref}
            webStyle={webStyle}
            descriptionText=""
            onBegin={() => setEmpty(false)}
            onClear={() => setEmpty(true)}
            onOK={handleConfirm}
            onEmpty={handleEmpty}
          />
        </View>
        <View style={styles.bot}>
          <Button onPress={handleClear} style={styles.button} backgroundColor={colors.danger}>
            <Delete />
            <Text
              type="semibold"
              size={FontSize.description + 1}
              color={colors.light}
              style={styles.text}>
              Hapus
            </Text>
          </Button>
          <Button
            disabled={empty}
            onPress={handleSignature}
            style={styles.button}
            backgroundColor={colors.primary}>
            <Text type="semibold" size={FontSize.description + 1} color={colors.light}>
              {index === 0 ? 'Lanjut' : 'Kirim'}
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};
