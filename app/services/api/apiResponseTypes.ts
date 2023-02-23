import { ISite } from '../../models.ts';

export interface IErrorResponse {
  name: string;
  message: string;
}

export interface IApiGetSitesSuccessResponse {
  data: ISite[];
}
