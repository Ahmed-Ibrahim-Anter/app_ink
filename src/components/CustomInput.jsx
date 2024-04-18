import {useState, useCallback, memo} from 'react';
import {
  FormControl,
  FormControlError,
  Input,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  InputSlot,
  InputField,
  InputIcon,
  Box,
  Text,
  HStack,
} from '@gluestack-ui/themed';

const CustomInput = ({
  formikTouch,
  formikError,
  password,
  withIcon,
  keyboardType,
  placeholder,
  value,
  onChangeText,
  iconLibrary,
  showPassword,
  hidePassword,
  iconName,
  flexDirection,
  isDisabled,
  label,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => setShow(prev => !prev), []);

  return (
    <FormControl
      isRequired
      isInvalid={formikTouch && formikError}
      key={placeholder}>
      <Box
        zIndex={100}
        w="auto"
        top={10}
        left={15}
        bg="$white"
        alignSelf="flex-start">
        <Text zIndex={200} bg="$white" px="$3">
          {label}
        </Text>
      </Box>
      <Input
        textAlign="center"
        isReadOnly={isDisabled}
        variant="outline"
        isDisabled={isDisabled}
        size="xl"
        alignItems="center">
        <HStack flexDirection={flexDirection ? 'row-reverse' : 'row'}>
          {withIcon ? (
            <>
              {password ? (
                <InputSlot
                  pl={flexDirection ? null : '$3'}
                  pr={!flexDirection ? null : '$3'}
                  onPress={handleClick}>
                  <InputIcon
                    as={iconLibrary}
                    alignSelf="flex-end"
                    name={show ? showPassword : hidePassword}
                    size="md"
                    color="$black"
                  />
                </InputSlot>
              ) : (
                <InputIcon
                  name={iconName}
                  as={iconLibrary}
                  alignSelf="flex-end"
                  my="$3"
                  ml={flexDirection ? null : '$3'}
                  mr={!flexDirection ? null : '$3'}
                  size="md"
                  color={flexDirection ? '$secondary300' : '$black'}
                />
              )}
            </>
          ) : null}
          <InputField
            pb={0}
            mx={withIcon ? null : '$2'}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            sx={{fontFamily: 'Poppins-Light', fontSize: '$sm'}}
            placeholder={placeholder}
            type={show ? 'text' : 'password'}
          />
        </HStack>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{formikError}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default memo(CustomInput);
