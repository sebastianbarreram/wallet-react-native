import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

interface Props {
  iconName: string;
  text: string;
  color: string;
}

const SideMenuButton = ({ iconName, text, color }: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
      <Icon name={iconName} size={24} color={color} />
      <Text style={{ ...styles.text, color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SideMenuButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 20,
    fontSize: 15,
    marginLeft: 5,
  },
});
