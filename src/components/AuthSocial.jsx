import {Divider, HStack, Text, VStack} from '@gluestack-ui/themed';
import SignInWitSocial from './SignInWitSocial';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
const AuthSocial = ({isDisabled}) => {
  return (
    <VStack my="$5">
      <HStack
        space="$2"
        alignItems="center"
        justifyContent="center"
        my="$5"
        w="100%">
        <Divider w="40%" bg="$coolGray200" />
        <Text mx="$5" sx={{fontFamily: 'Poppins-SemiBold'}}>
          or
        </Text>
        <Divider w="40%" bg="$coolGray200" />
      </HStack>

      <HStack px="$8" justifyContent="space-around">
        <SignInWitSocial isDisabled={isDisabled} google={true} />
        <SignInWitSocial
          isDisabled={isDisabled}
          as={FontAwesome5Brands}
          name="facebook"
          color="#1877F2"
          size={30}
        />
        <SignInWitSocial
          isDisabled={isDisabled}
          as={FontAwesome5Brands}
          name="twitter"
          color="#1DA1F2"
          size={26}
        />
      </HStack>
    </VStack>
  );
};

export default AuthSocial;
