const rootURL = 'http://localhost:8000';

// Homepage
export function getProductList() {
  return fetch(rootURL + '/api/product/all')
    .then(data => data.json())
}

// Product List
export function getProductOne(productId) {
  return fetch(rootURL + '/api/product/' + productId)
    .then(data => data.json())
}
