import config from './config'

class Http {
  constructor() {
    this.token = null;
  }

  setToken() {
    this.token = null;
  }

  get(url) {
    return this.request('GET', url)
  }

  post(url, data) {
    return this.request('POST', url, data)
  }

  request(method, urlPath, data) {
    const url = `${config.API_HOST}${urlPath}`;
    const params = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    if (this.token) {
      params.headers.Authorization = this.token;
    }

    if (data) {
      params.body = JSON.stringify(data);
    }

    return new Promise((resolve, reject) => {
      fetch(url, params)
        .then(async (response) => {
          const { status } = response;

          if (status >= 200 && status < 300) {
            const json = await response.json()
            resolve(json)
          } else {
            const text = await response.text()
            reject({
              data: text,
              status: status
            })
          }
        })
        .catch((err) => {
          reject({
            data: err.message,
            status: 500
          })
        })
    })
  }
}

export default new Http()
