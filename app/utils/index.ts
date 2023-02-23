import { Platform } from 'react-native';
import { ApiErrorResponse, ApiResponse } from 'apisauce';

import { IErrorResponse } from '#services/api/apiResponseTypes';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const getResponseError = <TResponse extends ApiResponse<unknown>>(
  response: TResponse,
) =>
  (response as ApiErrorResponse<IErrorResponse>)?.data?.message ??
  'Something went wrong';
