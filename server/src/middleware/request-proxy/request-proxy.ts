import catchAsync from '@utils/catchAsync';
import { AxiosResponse } from 'axios';
import _ from 'lodash';
import axios from 'axios';

import type { RequestProxyOptionTypes } from './request-proxy.types';

const stringifyParams = (data: any) => {
  if (!_.isEmpty(data)) {
    const strcat = Object.entries(data)
      .map(([key, value]) => `${key}=${value}&`)
      .join('&');
    return `${strcat.slice(0, -1)}`;
  }
  return '';
};

export default function (options: RequestProxyOptionTypes) {
  return catchAsync(async (req, res, next) => {
    axios({
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${process.env.SAIL_API}/SAIL/${options.path}`,
      data: req.body,
      params: req.query,
      paramsSerializer: function (params) {
        console.log('PARAMS', params);
        if (!_.isEmpty(params)) {
          return stringifyParams(params);
        }
        console.log();
        return '';
      },
    })
      .then((response: AxiosResponse) => {
        console.log(response.status);
        res.status(response.status);
        res.body = response.data;
      })
      .catch((err: any) => {
        // if(err instanceof AxiosError){
        // console.log(err.response);
        console.log('error: ', err);
        res.body = err?.response?.body;

        // }

        res.status(err?.response?.status);
      })
      .then(next);
  });
}
