const rootURL = 'http://localhost:8000';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjI1ODQ4NjAwLCJleHAiOjE2MjU4NTU4MDB9.OpWrYd2xilHVqBq33lB_elBKBucLOmB8R5ZgzKWlaLM'

// authentication
export function authLogin(username, password) {
  const url = rootURL + '/api/user/login';
  return fetch(url)
    .then(data => data.json())
}

export function authLogout() {
  const url = rootURL + '/api/user/logout';
  return fetch(url)
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
  return fetch(url)
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
