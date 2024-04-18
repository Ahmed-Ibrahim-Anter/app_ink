import {memo} from 'react';
import {Icon, Avatar, Pressable} from '@gluestack-ui/themed';

import Feather from 'react-native-vector-icons/Feather';
const LeftArrow = ({onPress, bg, hover}) => {
  return (
    <Pressable onPress={onPress} $hover-bg={hover}>
      <Avatar bgColor={bg} size="md" borderRadius="$full">
        <Icon as={Feather} name="chevron-left" size={25} color="#fff" />
      </Avatar>
    </Pressable>
  );
};
export default memo(LeftArrow);
