const rootURL = 'http://localhost:8000';

const token = localStorage.getItem("token");

// authentication
export function authLogin(username, password) {
  const url = rootURL + '/api/user/login';
  const body = { username, password }
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(data => data.json())
}

export function authLogout() {
  const url = rootURL + '/api/user/logout';
  return fetch(url, {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(data => data.json())
}

// all
export function getUser(userId) {
  const url = rootURL + '/api/user';
  return fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .then(data => data.json())
}

// Homepage
export function getProductList() {
  const url = rootURL + '/api/product/all';
  return fetch(url)
    .then(data => data.json())
}

// Product List
export function getProductOne(productId) {
  const url = rootURL + '/api/product/' + productId;
  return fetch(url)
    .then(data => data.json())
}

export function getBrandList() {
  const url = rootURL + '/api/product/brand/all';
  return fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .then(data => data.json())
}

export function getSizeListByBrandId(brandId) {
  const url = rootURL + '/api/product/brand/' + brandId;
  return fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .then(data => data.json())
}

export function getRecommendedSize(productId) {
  const url = rootURL + '/api/product/' + productId + '/recommendation';
  return fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .then(data => data.json())
}

export function addPreference(params) {
  const url = rootURL + '/api/preference/addPreference';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(data => data.json())
}

export function customPreference(params) {
  const url = rootURL + '/api/preference/addCustomPreference';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(data => data.json())
}

// Profile Page
export function getUserPreferenceList() {
  const url = rootURL + '/api/preference/all';
  return fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
    .then(data => data.json())
}

// 
