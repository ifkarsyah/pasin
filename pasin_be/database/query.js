let searchUserQuery = 'SELECT * FROM accounts where "username"=$1';

let productDetailQuery = 'SELECT * FROM products p inner join product_stocks ps on p.product_id = ps.product_id inner join rel_brand_size rbs on ps.rel_bs_id = rbs.bs_id where p.product_id = $1';

let productsQuery = "select * from products LIMIT $1 OFFSET $2"

let userQuery = "select username, born_date, gender from accounts where user_id = $1"

let addPreferenceQuery = "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1,(SELECT bs_id from rel_brand_size where brand_id =$2 AND size=$3),$4) returning *"

let addRelBrandSizeQuery = "INSERT into  rel_brand_size(length) VALUES ($1) returning *"

let addUserShoeSizeQuery =  "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1, $2, $3) returning *"

let brandQuery = "SELECT * FROM brands"

let brandSize = "SELECT size, brand_id FROM rel_brand_size where brand_id = $1"

let newUserQuery =  "INSERT INTO accounts (username, password, born_date, gender) VALUES ($1, $2, $3, $4) RETURNING *";

module.exports = { searchUserQuery, productDetailQuery, productsQuery, userQuery, addPreferenceQuery, addRelBrandSizeQuery, addUserShoeSizeQuery, brandQuery, brandSize, newUserQuery }
