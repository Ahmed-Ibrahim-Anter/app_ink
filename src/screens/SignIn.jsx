import React from 'react';
import {Box, VStack} from '@gluestack-ui/themed';
import SignHeader from '../components/SignHeader';
import {useFormik} from 'formik';
import CustomInput from '../components/CustomInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import AuthSocial from '../components/AuthSocial';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomLink from '../components/CustomLink';

const SignIn = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {},

    validationSchema: {},
  });
  return (
    <VStack flex={1} bg="$white">
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{
          flex: 1,
        }}>
        <Box h="$1/3">
          <SignHeader
            text="Sign in to your"
            onPress={() => navigation.navigate('SignUp')}
          />
        </Box>
        <VStack h="$2/3" px="$8">
          <VStack space="xs" mt="-$3">
            <CustomInput
              type="email-address"
              onBlur={formik.handleBlur('email')}
              isDisabled={formik.isSubmitting}
              keyboardType="default"
              placeholder="Enter your email"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              iconName="mail-outline"
              iconLibrary={Ionicons}
              formikTouch={formik.touched.email}
              formikError={formik.errors.email}
              label="Email"
              withIcon={true}
            />
            <CustomInput
              onBlur={formik.handleBlur('password')}
              isDisabled={formik.isSubmitting}
              keyboardType="default"
              placeholder="Enter your password"
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              formikTouch={formik.touched.password}
              formikError={formik.errors.password}
              password={1}
              showPassword="unlock"
              hidePassword="lock"
              iconLibrary={Feather}
              withIcon={true}
              label="Password"
            />
          </VStack>
          <CustomLink
            txt="Forget Password?"
            isDisabled={formik.isSubmitting}
            onPress={() => {}}
            alignSelf="flex-end"
            fontFamily="Poppins-smiBold"
          />

          <CustomButton
            isSubmitting={formik.isSubmitting}
            txt="sign In"
            onPress={() => navigation.navigate('AppWeather')}
            // onPress={formik.handleSubmit}
          />
          <AuthSocial isDisabled={formik.isSubmitting} />
        </VStack>
      </KeyboardAwareScrollView>
    </VStack>
  );
};

export default SignIn;
