const rootURL = 'http://localhost:8000';

export function getProductList() {
  return fetch(rootURL + '/api/product/all')
    .then(data => data.json())
}

