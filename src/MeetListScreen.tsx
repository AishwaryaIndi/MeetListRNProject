import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {UserProfileItem} from './common/UserProfile';
import {styles} from './Styles';
import {constentString} from './constants/Constants';

interface Props {
  route: {
    params: {
      joinedEmployeeList: any;
    };
  };
}
const MeetListScreen = (props: Props): JSX.Element => {
  const {joinedEmployeeList} = props?.route?.params;
  return (
    <View style={styles.container}>
      {joinedEmployeeList?.length > 0 ? (
        <FlatList
          data={joinedEmployeeList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <UserProfileItem
              user={{
                ...item,
              }}
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.epmtyListMsg}>
            {constentString.EMPTY_LIST_MESSAGE}
          </Text>
        </View>
      )}
    </View>
  );
};
export default MeetListScreen;
