export const APIENDPOINT = "http://127.0.0.1:3000";

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('openXumUser'));
  const headers = {
    'Accept': 'application/json',
    'X-Access-Token': tokenData.token
  };

  return headers;
};