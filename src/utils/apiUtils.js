import { create } from 'apisauce';
// import history from './history';
// import routeConstants from './routeConstants';
// import snakeCase from 'lodash/snakeCase';
// import camelCase from 'lodash/camelCase';
// import { mapKeysDeep } from './index';

const ULTRON_URL  = process.env.REACT_APP_ULTRON_URL;
const PROXY_BASE_URL = process.env.REACT_APP_PROXY_BASE_URL;
const HULK_URL = process.env.REACT_APP_HULK_URL;
const GALACTUS_URL = process.env.REACT_APP_GALACTUS_BASE;
const apiClients = {
  ultron: null,
  proxy: null,
  hulk: null,
  galactus: null,
  galactusAdmin: null,
  default: null,
};
export const getApiClient = (type = 'ultron') => apiClients[type];
export const generateApiClient = (type = 'ultron') => {
  if (apiClients[type]) {
    return apiClients[type];
  }
  switch (type) {
    case 'ultron':
      apiClients[type] = createApiClientWithTransForm(ULTRON_URL);
      return apiClients[type];
    case 'proxy':
      apiClients[type] = createApiClientWithTransForm(PROXY_BASE_URL);
      return apiClients[type];
    case 'hulk':
      apiClients[type] = createApiClientWithTransForm(HULK_URL);
      return apiClients[type];
    case 'galactus':
      apiClients[type] = createApiClientWithTransForm(GALACTUS_URL);
      console.log(apiClients[type])
      return apiClients[type];
    case 'galactusAdmin':
      apiClients[type] = createApiClientWithTransForm(GALACTUS_URL);
      console.log('for test',apiClients[type])
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(ULTRON_URL);
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });
  api.addResponseTransform(response => {
    const { data } = response;
    if (data?.status === 403) {
      localStorage.removeItem('persist:root');
    }
    // if (ok && data) {
    //   response.data = mapKeysDeep(data, keys => camelCase(keys));
    // }
    return response;
  });

  api.addRequestTransform(request => {
    // const { data } = request;
    // if (data) {
    //   request.data = mapKeysDeep(data, keys => snakeCase(keys));
    // }
    return request;
  });
  return api;
};
