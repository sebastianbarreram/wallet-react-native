import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  style?: StyleProp<ViewStyle>;
  placeHolder: string;
  iconName: string;
}

const InputTextContainer = ({ style, placeHolder, iconName }: Props) => {
  return (
    <View style={style}>
      <View style={styles.icon}>
        <Icon name={iconName} size={24} color="rgba(0, 0, 0, 0.6)" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor="#rgba(0, 0, 0, 0.6)"
        />
      </View>
    </View>
  );
};

export default InputTextContainer;

const styles = StyleSheet.create({
  icon: {
    height: 56,
    width: 48,
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputContainer: {
    height: 56,
    width: 330,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlignVertical: 'center',
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
    width: '82%',
  },
});
