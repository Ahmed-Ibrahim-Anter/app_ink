import {useCallback} from 'react';
import {
  Checkbox,
  CheckboxIcon,
  HStack,
  Text,
  CheckboxIndicator,
  CheckIcon,
  VStack,
  Box,
} from '@gluestack-ui/themed';

import CustomLink from './CustomLink';

const SignUpPolicy = ({change, value, href, txt, text, url}) => {
  const handelChange = useCallback(n => change(n), [value]);
  return (
    <VStack mt="$3">
      <Checkbox
        size="md"
        isInvalid={false}
        isDisabled={false}
        aria-label="I accept"
        onChange={handelChange}>
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <VStack mx="$2">
          <HStack alignItems="center">
            <Text sx={{fontFamily: 'Poppins-Light'}} fontSize="$sm">
              I accept &
            </Text>

            <CustomLink
              href={href}
              txt={txt}
              isExternal={true}
              fontFamily="Poppins-Light"
              alignSelf="flex-start"
            />
          </HStack>
        </VStack>
      </Checkbox>
      <Box ml="$6">
        <CustomLink
          href={url}
          txt={text}
          isExternal={true}
          fontFamily="Poppins-Light"
          alignSelf="flex-start"
        />
      </Box>
    </VStack>
  );
};

export default SignUpPolicy;
