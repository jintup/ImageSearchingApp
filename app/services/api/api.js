import {create} from 'apisauce';
import Snackbar from 'react-native-snackbar';

import {DEFAULT_API_CONFIG} from './api-config';

/**
 * Manages all requests to the API.
 */

const showErrorToast = error => {
  Snackbar.show({
    duration: Snackbar.LENGTH_LONG,
    numberOfLines: 7,
    text: error,
  });
};

export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce;

  /**
   * Configurable options.
   */
  config;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      headers: {
        Accept: 'application/json',
      },
      timeout: this.config.timeout,
    });
  }

  setHeader = (key, value) => {
    this.apisauce.setHeader(key, value);
  };

  deleteHeader = key => {
    delete this.apisauce.headers[key];
  };

  async get({slug, axiosConfig = {}, queryParameters}) {
    return this.apisauce
      .get(slug, queryParameters, axiosConfig)
      .then(response => {
        if (!response.ok) {
          showErrorToast('Error');
        }
        try {
          return {kind: 'ok', ...response.data};
        } catch (e) {
          return {errorMessage: 'Error', kind: 'bad-data'};
        }
      });
  }

  async post({slug, axiosConfig = {}, body = null}) {
    return this.apisauce.post(slug, body, axiosConfig).then(response => {
      if (!response.ok) {
        showErrorToast('Error');
      }
      try {
        return {kind: 'ok', ...response.data};
      } catch (e) {
        return {kind: 'bad-data'};
      }
    });
  }

  async put({slug, axiosConfig = {}, body = null}) {
    return this.apisauce.put(slug, body, axiosConfig).then(response => {
      if (!response.ok) {
        showErrorToast('Error');
      }
      try {
        return {kind: 'ok', ...response.data};
      } catch (e) {
        return {kind: 'bad-data'};
      }
    });
  }

  async delete({slug, axiosConfig = {}, queryParameters}) {
    return this.apisauce
      .delete(slug, queryParameters, axiosConfig)
      .then(response => {
        if (!response.ok) {
          showErrorToast('Error');
        }
        try {
          return {kind: 'ok', ...response.data};
        } catch (e) {
          return {kind: 'bad-data'};
        }
      });
  }
}

const ApiInstance = new Api();
ApiInstance.setup();
export default ApiInstance;
