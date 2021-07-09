let searchUserQuery = 'SELECT * FROM accounts where "username"=$1';

let productDetailQuery = 'SELECT * FROM products p inner join product_stocks ps on p.product_id = ps.product_id inner join rel_brand_size rbs on ps.rel_bs_id = rbs.bs_id WHERE p.product_id = $1'

let productsQuery = "SELECT * FROM products LIMIT $1 OFFSET $2"

let userQuery = "select username, born_date, gender from accounts where user_id = $1"

let addPreferenceQuery = "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1,(SELECT bs_id from rel_brand_size WHERE brand_id =$2 AND size=$3),$4) returning *"

let addRelBrandSizeQuery = "INSERT into rel_brand_size(length) VALUES ($1) returning *"

let addUserShoeSizeQuery =  "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1, $2, $3) returning *"

let brandQuery = "SELECT * FROM brands"

let brandSize = "SELECT size, brand_id FROM rel_brand_size WHERE brand_id = $1"

let newUserQuery =  "INSERT INTO accounts (username, password, born_date, gender) VALUES ($1, $2, $3, $4) RETURNING *";

let productCheckQuery = 'SELECT product_id FROM products WHERE product_id = $1'

let sizeListQuery = 'SELECT size, length FROM rel_brand_size rbs WHERE rbs.bs_id in (SELECT rel_bs_id FROM product_stocks ps WHERE ps.product_id = $1 AND ps.stock > 0)'

let userSizeQuery = 'SELECT rbs.length, russ.loosey_size from rel_brand_size rbs inner join rel_user_shoe_size russ on rbs.bs_id = russ.rel_bs_id where russ.user_id = $1'

let profileUserSizeQuery = 'SELECT rbs.brand_id, rbs.size, rbs.length, russ.loosey_size from rel_brand_size rbs inner join rel_user_shoe_size russ on rbs.bs_id = russ.rel_bs_id where russ.user_id = $1'

module.exports = { loginQuery, productDetailQuery, productsQuery, userQuery, addPreferenceQuery, addRelBrandSizeQuery, addUserShoeSizeQuery, brandQuery, brandSize, productCheckQuery, sizeListQuery, userSizeQuery, newUserQuery }
