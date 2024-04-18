import {memo} from 'react';
import {Box, Icon, Pressable} from '@gluestack-ui/themed';
import IconGoogle from './IconGoogle';

const SignInWitSocial = ({as, name, color, size, isDisabled, google}) => {
  return (
    <Pressable rounded="$lg" borderColor="$secondary200" borderWidth={1} p="$3">
      {google ? (
        <IconGoogle />
      ) : (
        <Icon as={as} name={name} color={color} size={size} />
      )}
    </Pressable>
  );
};

export default memo(SignInWitSocial);
