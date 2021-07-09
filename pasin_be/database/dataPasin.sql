CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	born_date DATE NOT NULL,
	gender VARCHAR(1) NOT NULL
);

CREATE TABLE products (
	product_id serial PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price INT NOT NULL,
	photo_url VARCHAR(255) NOT NULL
);

CREATE TABLE brands (
	brand_id serial PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

CREATE TABLE rel_brand_size (
	bs_id serial PRIMARY KEY,
	brand_id INT,
    size INT,
    length INT,
);


CREATE TABLE product_stocks (
    ps_id serial PRIMARY KEY,
	product_id INT NOT NULL,
	rel_bs_id INT NOT NULL,
	stock INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (rel_bs_id) REFERENCES rel_brand_size(bs_id) ON UPDATE CASCADE ON DELETE RESTRICT  
);

CREATE TABLE rel_user_shoe_size (
    uss_id serial PRIMARY KEY,
	user_id INT NOT NULL,
	rel_bs_id INT NOT NULL,
	loosey_size INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES accounts(user_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (rel_bs_id) REFERENCES rel_brand_size(bs_id) ON UPDATE CASCADE ON DELETE RESTRICT  
);

INSERT INTO brands(name) VALUES
    ('Nike'),
    ('Adidas'),
    ('Asics'),
    ('Vans');

INSERT INTO products(name, price, photo_url) VALUES
    ('NIKE JORDAN DELTA 2',1979000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/CV8121-003-PHCFH001-2000_1360x.jpg?v=1625586607'),
    ('NIKE AIR MAX 95 ERA',1854300,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/CZ9723-100-PHCFH001-2000_1360x.jpg?v=1593413716'),
    ('NIKE W AIR VAPORMAX 2021 FK',2999000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DH4088-600-PHCFH001-2000_1360x.jpg?v=1624355434'),
    ('ADIDAS SUPERSTAR',1900000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/S24184_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1619411750'),
    ('ADIDAS X9000L4',1760000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/FW4910_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1600318210'),
    ('ADIDAS STAN SMITH',2000000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/FZ2706_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1618024338'),
    ('ASICS LYTE CLASSIC',1199000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/1201A477_101_SR_RT_GLB_1360x.jpg?v=1623915945'),
    ('ASICS W LYTE CLASSIC',1299000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/1202A011_100_SR_LT_GLB_1360x.jpg?v=1600419819'),
    ('VANS COMFYCUSH SLIP-ON',1199000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/12-COMFYCUSHSLIP-ON-DENIMEMBROIDERYBLACK-WHITE54_1360x.jpg?v=1622698857'),
    ('VANS AUTHENTIC 44 DX',1399000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/04-192825763038_-AUTHENTIC44DX-_ANAHEIMFACTORY_HOFFMANFABRICFLORALMIX_52_1360x.jpg?v=1616426078');

INSERT INTO rel_brand_size(brand_id, size, length) VALUES
    (1,	36,	23),
    (1,	37,	23.5),
    (1,	38,	24),
    (1,	39,	24.5),
    (1,	40,	25),
    (1,	41,	26),
    (1,	42,	26.5),
    (1,	43,	27.5),
    (1,	44,	28),
    (1,	45,	29),
    (2,	36,	22.1),
    (2,	37,	22.9),
    (2,	38,	23.3),
    (2,	39,	24.2),
    (2,	40,	24.6),
    (2,	41,	25.5),
    (2,	42,	25.9),
    (2,	43,	26.7),
    (2,	44,	27.1),
    (2,	45,	28),
    (3,	36,	22.5),
    (3,	37,	23),
    (3,	38,	24),
    (3,	39,	24.5),
    (3,	40,	25.25),
    (3,	41,	26),
    (3,	42,	26.5),
    (3,	43,	27.5),
    (3,	44,	28),
    (3,	45,	28.5),
    (4,	36,	22.5),
    (4,	37,	23.5),
    (4,	38,	24),
    (4,	39,	25),
    (4,	40,	25.5),
    (4,	41,	26.5),
    (4,	42,	27),
    (4,	43,	28),
    (4,	44,	28.5),
    (4,	45,	29.5);

INSERT INTO product_stocks(product_id, rel_bs_id, stock) VALUES
    (1,	6, 3),
    (1,	7, 4),
    (1,	8, 2),
    (1,	9, 7),
    (1,	10,	8),
    (2, 6, 5),
    (2,	7, 3),
    (2,	8, 7),
    (2,	9, 8),
    (2,	10, 5),
    (3,	1, 5),
    (3,	2, 5),
    (3,	3, 6),
    (3,	4, 4),
    (3,	5, 7),
    (4,	16,	5),
    (4,	17,	3),
    (4,	18,	8),
    (4,	19,	9),
    (4,	20,	10),
    (5,	16,	11),
    (5,	17,	20),
    (5,	18,	5),
    (5,	19,	9),
    (5,	20,	80),
    (6,	11,	5),
    (6,	12,	4),
    (6,	13,	6),
    (6,	14,	8),
    (6,	15,	2),
    (7,	26,	5),
    (7,	27,	3),
    (7,	28,	9),
    (7,	29,	10),
    (7,	30,	4),
    (8,	21,	4),
    (8,	22,	3),
    (8,	23,	6),
    (8,	24,	7),
    (8,	25,	8),
    (9,	36,	6),
    (9,	37,	5),
    (9,	38,	3),
    (9,	39,	2),
    (9,	40,	2),
    (10, 31, 3),
    (10, 32, 3),
    (10, 33, 4),
    (10, 34, 5),
    (10, 35, 6);