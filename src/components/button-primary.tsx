import {colors, fonts} from '@constants';
import {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface IButtonPrimary {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const ButtonPrimary = memo(
  ({onPress, title, style, textStyle, disabled}: IButtonPrimary) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        style={[styles.container, style]}
        onPress={onPress}>
        <Text style={[styles.lable, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: 47,
    backgroundColor: colors.primaryPink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    ///////////---shadow---///////////
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  lable: {
    letterSpacing: 0.5,
    color: colors.white,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
});

export default ButtonPrimary;
