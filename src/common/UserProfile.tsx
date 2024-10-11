// User profile item component
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import {constentString, UserProfileProps} from '../constants/Constants';
import {capitalizeFirstLetter} from '../utils/Utils';

interface Props {
  user: UserProfileProps;
  handlePress?: CallableFunction;
}

export const UserProfileItem = (props: Props): JSX.Element => {
  const {user, handlePress} = props;
  return (
    <View style={styles.userCard}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <View style={styles.flexOne}>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{constentString.NAME + ': '}</Text>
          <Text style={styles.userName}>{user?.firstName + ' '}</Text>
          <Text style={styles.userName}>
            {user?.maidenName.length > 0 || user?.maidenName === ' '
              ? user?.maidenName + ' '
              : ''}
          </Text>
          <Text style={styles.userName}>{user?.lastName}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{constentString.EMAIL + ': '}</Text>
          <Text
            style={[styles.userDetail, styles.flexShrinkOne]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {user?.email}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{constentString.AGE + ': '}</Text>
          <Text style={styles.userDetail}>
            {parseInt(user?.age) <= 40 ? (
              user?.age
            ) : (
              <Text
                style={[styles.userDetail, styles.userDetailWithHeighlight]}>
                {' ' + user?.age + ' '}
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{constentString.GENDER + ': '}</Text>
          <Text style={styles.userDetail}>
            {capitalizeFirstLetter(user?.gender)}
          </Text>
        </View>
        {user?.ctaName?.length > 0 && handlePress && (
          <TouchableOpacity
            style={[
              styles.buttonDark,
              user?.isEmloyeeInMeet && styles.buttonLight,
            ]}
            onPress={() => {
              handlePress(user);
            }}>
            <Text style={styles.buttonText}>{user?.ctaName}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
