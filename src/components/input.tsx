import {colors, fonts} from '@constants';
import {memo} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IInputProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: JSX.Element;
  placeholder?: string;
  placeholderTextColor?: string;
  multiLine?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  secure?: boolean;
}

const Input = memo(
  ({
    style,
    children,
    placeholder,
    placeholderTextColor,
    multiLine,
    value,
    textStyle,
    keyboardType,
    editable,
    onChangeText,
    secure = false,
  }: IInputProps) => {
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.input, textStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          editable={editable}
          multiline={multiLine}
          keyboardType={keyboardType}
        />
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: 47,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: colors.primaryPink,

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
  input: {
    fontSize: 13,
    flex: 1,
    color: colors.black,
    fontFamily: fonts.MONTSERRAT_MEDIUM,
  },
});

export default Input;
