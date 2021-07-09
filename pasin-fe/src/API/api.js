const rootURL = 'http://localhost:8000';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjI1ODQzMDUwLCJleHAiOjE2MjU4NTAyNTB9.cG9cLrEHYlJJpryW_tNRlaARvdL64GxoOT4m7P8a9BI'
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
  return fetch(url)
    .then(data => data.json())
}

export function getSizeListByBrandId(brandId) {
  const url = rootURL + '/api/product/brand/' + brandId;
  return fetch(url)
    .then(data => data.json())
}

// Profile Page
export function getUserPreferenceList(userId) {
  const url = rootURL + '/api/preference/' + userId;
  return fetch(url)
    .then(data => data.json())
}

//
