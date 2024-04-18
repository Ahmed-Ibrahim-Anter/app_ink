import {
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';

export const showToast = (toast, error) => {
  const errorMessage =
    error?.response?.data?.message ||
    'An error occurred while fetching weather data.';
  toast.show({
    placement: 'top',
    render: ({id}) => {
      const toastId = 'toast-' + id;
      return (
        <Toast nativeID={toastId} action="error" variant="outline">
          <VStack space="xs" w="80%">
            <ToastTitle>Error-⛔</ToastTitle>
            <ToastDescription>{errorMessage}</ToastDescription>
          </VStack>
        </Toast>
      );
    },
  });
};
