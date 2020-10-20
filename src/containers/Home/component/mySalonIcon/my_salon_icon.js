import styles from './style';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {MTPImage0} from '../../../../component/mtp_image';

const MySalonIcon = ({imageSource, title, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.view0]}>
        <Image source={imageSource} />
        <Text style={[styles.text0]}>{title}</Text>
        <Text style={[styles.text1]}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MySalonIcon;

export const SalonIcon = ({source, titleText, descriptionText, onPress}) => {
  return (
    <View style={[styles.view1]}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.view2]}>
          <MTPImage0
            source={source}
            style={{marginTop: titleText === 'Đơn hàng' ? 25 : 0}}
          />
          <Text style={[styles.text3]}>{titleText}</Text>
          <Text style={[styles.text4]}>{descriptionText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};