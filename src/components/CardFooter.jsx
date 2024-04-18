import {memo} from 'react';
import {HStack, Text, Icon} from '@gluestack-ui/themed';

const CardFooter = ({as, name, text}) => {
  return (
    <HStack>
      <Icon as={as} name={name} color="#F8AE90" />
      <Text
        ml="$1"
        fontSize="$sm"
        color="#999999"
        sx={{
          fontFamily: 'Poppins-Regular',
        }}>
        {text}
      </Text>
    </HStack>
  );
};
export default memo(CardFooter);
