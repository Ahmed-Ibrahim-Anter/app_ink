import React, {useCallback} from 'react';
import {Box, VStack} from '@gluestack-ui/themed';
import SignHeader from '../components/SignHeader';
import {useFormik} from 'formik';
import CustomInput from '../components/CustomInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignUpPolicy from '../components/SignUpPolicy';

const SignUp = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
      policy: false,
    },
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: () => {},
    validationSchema: {},
  });
  const handlePolicyChange = useCallback(
    value => {
      formik.setFieldValue('policy', value, false);
    },
    [formik.setFieldValue],
  );
  return (
    <VStack flex={1} bg="$white">
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Box h="$1/3">
          <SignHeader
            text="Sign up to your"
            onPress={() => navigation.goBack()}
          />
        </Box>
        <VStack h="$2/3" px="$8">
          <VStack space="xs" mt="-$3">
            <CustomInput
              type="username"
              isDisabled={formik.isSubmitting}
              keyboardType="default"
              placeholder="Enter your username"
              value={formik.values.displayName}
              onChangeText={formik.handleChange('displayName')}
              label="user name"
              formikTouch={formik.touched.displayName}
              formikError={formik.errors.displayName}
            />
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
              iconName="eye-outline"
              iconLibrary={Ionicons}
              withIcon={true}
              label="Password"
              flexDirection={true}
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
              iconName="eye-outline"
              iconLibrary={Ionicons}
              withIcon={true}
              label="Password"
              flexDirection={true}
            />
          </VStack>
          <SignUpPolicy
            value={formik.values.policy}
            change={handlePolicyChange}
            txt="agree terms of conditions"
            text="& privacy policy"
            href="www.google.com"
            url="www.google.com"
          />
          <CustomButton
            isSubmitting={formik.isSubmitting}
            txt="sign up"
            // onPress={formik.handleSubmit}
            onPress={() => {}}
          />
        </VStack>
      </KeyboardAwareScrollView>
    </VStack>
  );
};

export default SignUp;
