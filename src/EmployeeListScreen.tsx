import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {UserProfileItem} from './common/UserProfile';
import {
  constentString,
  dataSet,
  ROUT_NAME,
  UserProfileProps,
} from './constants/Constants';
import {sortedUsers} from './utils/Utils';
import {styles} from './Styles';

interface Props {
  navigation: any;
  joinedEmployeeList: any;
}
const sortedDataSet = sortedUsers(dataSet.users);

// Main App Component
const EmployeeListScreen = (props: Props): JSX.Element => {
  const [listOfEmployee, setListOfEmployee] = useState([]);
  const handlePress = (item: UserProfileProps) => {
    const isUserExist = listOfEmployee?.some(
      listItem => listItem?.id === item?.id,
    );
    if (!isUserExist) {
      // Create a new array with the added employee
      const updatedList = [...listOfEmployee, item];
      setListOfEmployee(updatedList);
    } else {
      const updatedList = [];
      listOfEmployee?.filter(listItem => {
        if (listItem?.id !== item?.id) {
          updatedList.push(listItem);
        }
      });
      setListOfEmployee(updatedList);
    }
  };

  const isEmployeeAdded = (user: UserProfileProps) => {
    return listOfEmployee?.some(listItem => listItem?.id === user?.id);
  };
  const getCTAName = (user: UserProfileProps) => {
    return isEmployeeAdded(user)
      ? constentString.REMOVE_FROM_MEET
      : constentString.ADD_TO_MEET;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingTitle}>
        <Text style={styles.headingTitleText}>
          {constentString.NO_OF_EMP_JOINED + ': ' + listOfEmployee.length}
        </Text>
        <TouchableOpacity
          style={styles.meetButton}
          onPress={() => {
            props.navigation.navigate(ROUT_NAME.MEET_LIST, {
              joinedEmployeeList: listOfEmployee,
            });
          }}>
          <Text style={styles.buttonText}>{constentString.GO_TO_MEET}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listHeading}>
        <Text style={styles.listHeadingText}>
          {constentString.EMPLOYEE_LIST}
        </Text>
      </View>
      <FlatList
        data={sortedDataSet}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <UserProfileItem
              user={{
                ...item,
                ctaName: getCTAName(item),
                isEmloyeeInMeet: isEmployeeAdded(item),
              }}
              handlePress={handlePress}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default EmployeeListScreen;
