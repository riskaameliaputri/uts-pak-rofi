import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconProfile, IconProfilActive, IconHomeActive, IconHome, IconPencarian, IconPencarianActive} from '../../assets';

const Tabitem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {

    if (label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>
    // if (label === "Home") return isFocused ? <Image sou/> : <Image />
    
    if (label === "Pencarian") return isFocused ? <IconPencarianActive/> : <IconPencarian/>

    if (label === "Profil") return isFocused ? <IconProfilActive/> : <IconProfile/>

    return <IconHome/>
  }
  return (
   <TouchableOpacity
     onPress={onPress}
     onLongPress={onLongPress}
     style={styles.container}>
     <Icon />
     <Text style={styles.text(isFocused)}>H</Text>
   </TouchableOpacity>
  );
};

export default Tabitem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? '#55CB95' : '#C8C8C8',
        marginTop: 8
    })
});