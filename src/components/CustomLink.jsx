import {memo} from 'react';
import {Text, Link} from '@gluestack-ui/themed';

const CustomLink = ({
  href,
  txt,
  isDisabled,
  alignSelf,
  isExternal,
  fontFamily,
}) => {
  return (
    <Link
      href={href}
      isDisabled={isDisabled}
      alignSelf={alignSelf}
      my={isExternal ? null : '$2'}
      isExternal={isExternal}>
      <Text
        sx={{fontFamily: fontFamily}}
        color="$black"
        fontSize={isExternal ? '$sm' : '$md'}>
        {txt}
      </Text>
    </Link>
  );
};

export default memo(CustomLink);
