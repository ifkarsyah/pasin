const rootURL = 'http://localhost:8000';

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
