import {memo} from 'react';
import {Button, ButtonSpinner, ButtonText} from '@gluestack-ui/themed';

const CustomButton = ({isSubmitting, txt, onPress}) => {
  return (
    <Button
      mt="$10"
      isDisabled={isSubmitting}
      rounded="$lg"
      onPress={onPress}
      h={60}
      bg="#5b4dbc">
      {isSubmitting ? <ButtonSpinner mr="$1" /> : null}
      <ButtonText sx={{fontFamily: 'Poppins-SemiBold'}}>{txt}</ButtonText>
    </Button>
  );
};

export default memo(CustomButton);
