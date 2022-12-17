import { useState, useCallback } from "react";
import axios from "axios";

const useHttp = () => {
  const [error, setError] = useState(null);


  const sendRequest = useCallback(
    async (requestConfig, applyData = '') => {
      setError(null);
    //   let token;
    //   let responseToken;
    //   try {
    //     responseToken = await instance.acquireTokenSilent(request);
    //     token = responseToken.accessToken;
    //   } catch (error) {
    //     responseToken = await instance.acquireTokenPopup(request);
    //     token = responseToken.accessToken;
    //   }

      try {

        // axios.defaults.baseURL = appSettings.GetWebApiBaseUri()
        axios.defaults.headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // axios.defaults.headers.common = { 'Authorization': Bearer ${token} };


        let response;

        if (requestConfig.method?.toUpperCase() === "DELETE") {
          response = await axios.delete(requestConfig.url, {
            params: requestConfig.params,
            headers: requestConfig.headers,
            data: requestConfig.body
          })
        } else if (requestConfig.method?.toUpperCase() === "POST") {
          response = await axios.post(requestConfig.url, requestConfig.body, {
            params: requestConfig.params,
          });
        } else if (requestConfig.method?.toUpperCase() === "PUT") {
          response = await axios.put(requestConfig.url, requestConfig.body, {
            params: requestConfig.params,
            headers: requestConfig.headers,
          });
        } else if (requestConfig.method?.toUpperCase() === "UPLOAD") {
          response = await axios.post(requestConfig.url, requestConfig.body, {
            params: requestConfig.params,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: requestConfig.onUploadProgress,
          });
        } else {
          response = await axios.get(requestConfig.url, {
            params: requestConfig.params,
            responseType: requestConfig.responseType ? requestConfig.responseType : undefined
          });
        }
        return response;
      } catch (err) {
        setError(err);
        return err;
      }
    },
    [ ]
  );

  return {
    error,
    sendRequest,
  };
};

export default useHttp;