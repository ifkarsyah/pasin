const rootURL = 'http://localhost:3333';

export function getProductList() {
  return fetch(rootURL + '/list')
    .then(data => data.json())
}

