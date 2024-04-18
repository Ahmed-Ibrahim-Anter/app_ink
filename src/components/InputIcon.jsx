import {Icon, Pressable} from '@gluestack-ui/themed';

const InputIcon = ({
  iconLibrary,
  password,
  handleClick,
  show,
  showPassword,
  hidePassword,
  iconName,
}) => {
  let Material = iconLibrary;

  return password === 1 ? (
    <Pressable onPress={handleClick}>
      <Icon
        as={<Material name={show ? showPassword : hidePassword} />}
        mx="3"
        size={5}
      />
    </Pressable>
  ) : (
    <Icon as={<Material name={iconName} />} size={5} mx="3" />
  );
};

export default InputIcon;
