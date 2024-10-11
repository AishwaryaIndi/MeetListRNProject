export const sortedUsers = (userData: any) => {
  let sortList = userData.sort((a: any, b: any) => a?.age - b?.age);
  let maleList = sortList.filter((item: any) => item?.gender === 'male');
  let femaleList = sortList.filter((item: any) => item?.gender === 'female');
  return [...femaleList, ...maleList];
};

export const capitalizeFirstLetter = (str: string) => {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
