let loginQuery = 'SELECT * FROM accounts where "username"=$1';

let productDetailQuery = 'SELECT * FROM products p inner join product_stocks ps on p.product_id = ps.product_id inner join rel_brand_size rbs on ps.rel_bs_id = rbs.bs_id where p.product_id = $1';

module.exports = { loginQuery, productDetailQuery }
