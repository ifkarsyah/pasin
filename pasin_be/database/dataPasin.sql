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
	photo_url VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    rating int NOT NULL,
);

CREATE TABLE brands (
	brand_id serial PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

CREATE TABLE rel_brand_size (
	bs_id serial PRIMARY KEY,
	brand_id INT,
    size INT,
    length INT
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

INSERT INTO products(name, price, photo_url, description, rating) VALUES
    ('NIKE JORDAN DELTA 2',1979000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/CV8121-003-PHCFH001-2000_1360x.jpg?v=1625586607', 'The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that’s Jordan to the core.We updated design lines and swapped out some components, but the idea is the same as the first Delta.The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that’s both adventurous and iconic.',4.5),
    ('NIKE AIR MAX 95 ERA',1854300,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/CZ9723-100-PHCFH001-2000_1360x.jpg?v=1593413716', 'Taking inspiration from the human body and running DNA, the Nike Air Max 95 ERA mixes unbelievable comfort with head-turning style. The iconic side panels feature layered colors with contrasting animal print. The retro build includes a midsole and Air units with an aged appearance, making it looks like you have been saving your sneakers for years.\n\nThe upper draws inspiration from the human body—the midsole represents the spine, graduated panels are the muscles and the laces are the shoe’s ribs. \nThe midsole has a vintage finish while the Air units are forged for an aged appearance, adding to the retro appeal and making it look like you’ve been saving them for years.\nOriginally developed for performance running, visible Nike Air cushioning delivers all day comfort.\nThe breathable mesh on the upper is reinforced with leather and synthetic overlays for a highly ventilated, classic Nike look.\nThe innovative lacing system adds easy on and off while letting you personalize your fit.\nThe foam midsole has flex grooves for a comfortable feel that lets you move freely.\nRubber outsole offers durability and traction.',4),
    ('NIKE W AIR VAPORMAX 2021 FK',2999000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/DH4088-600-PHCFH001-2000_1360x.jpg?v=1624355434','Made from at least 40% recycled materials by weight, the Nike Air VaporMax 2021 FK is airy and easy to wear with superstretchy, recycled Flyknit fabric (plus a soft collar that sculpts your ankle). The stitched-on Swoosh and recycled TPU heel clip add a splash of intrigue as you float down the streets on incredibly soft VaporMax cushioning.\n\nOriginally designed for performance running, the revolutionary VaporMax 2 Air unit is made from recycled material and provides more Air underfoot than ever before.\nThe first 1-piece Air unit to run the entire length of a shoe, it allows for smoother transitions and adds unbelievable cushioning.\nStretchy and supportive Flyknit upper is made from post-industrial recycled yarn and creates a striking visual that’s seamless, breathable and feels as light as air.\nCollar sculpts the ankle for a sporty look that feels great while padding on heel adds to the comfort.\nRecycled rubber on the sole adds durability and traction, putting a finishing touch on the shoe that lets you walk the talk.',4),
    ('ADIDAS SUPERSTAR',1900000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/S24184_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1619411750','Greet the Lunar New Year in the remixed heritage style of these adidas Superstar Shoes. Using the iconic basketball silhouette as a base, this pair pays tribute to the Year of the Ox with a bold design that makes a statement all the way from the gold 3-Stripes to the vibrant heel pull. The rubber cupsole and molded sockliner keep your feet comfortable so you can celebrate and spread good luck all year long.',4.8),
    ('ADIDAS X9000L4',1760000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/FW4910_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1600318210','Always online, always plugged in, always moving forward. These adidas X9000L Shoes are designed for the fast pace and high energy of our hyperconnected world. Floating triangles and supportive underlays create a bold design on the mesh upper. The outsole tread pattern was inspired by computer-generated data and provides reliable traction on city streets.',5),
    ('ADIDAS STAN SMITH',2000000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/FZ2706_FTW_photo_side-medial-center_transparent_1360x.jpg?v=1618024338','Who is your favorite green monster? Marvel’s Hulk? Disney’s Kermit? Or maybe it’s Mike from Disney’s Monsters Inc.? Celebrate the one-eyed little fellow on these adidas Stan Smith Shoes. Despite all of his mishaps and mayhem, he’s really more of a superhero than a monster, anyway. We could all stand to be a little more green, just like him. Made with recycled materials as a step toward ending plastic waste, these trainers take that idea to heart. This product is made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.',3.9),
    ('ASICS LYTE CLASSIC',1199000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/1201A477_101_SR_RT_GLB_1360x.jpg?v=1623915945','Building off the aesthetic of the GEL-LYTE™ III sneaker, the LYTE CLASSIC™ shoe is formed with heritage details that pay homage to the ASICS archive. Complete with retro ASICS branding on the tongue and heel, this shoe is constructed with a suede makeup that’s complemented with a gum rubber outsole for a throwback look. Simplified with an EVA™ midsole construction, this sneaker is made to promote lasting comfort and support. Referencing recognizable details from the ASICS heritage, the LYTE CLASSIC™ sneaker emerges as a new silhouette with an urban appeal.',4.3),
    ('ASICS W LYTE CLASSIC',1299000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/1202A011_100_SR_LT_GLB_1360x.jpg?v=1600419819','Building off the aesthetic of the GEL-LYTE III™ sneaker, the LYTE™ CLASSIC shoe is formed with heritage details that pay homage to the ASICS archive. This iteration is displayed with a Sunrise Red colorway to symbolize and celebrate the city of Tokyo and the country of Japan.\n\nComplete with retro ASICS branding on the tongue and heel, this shoe is constructed with a leather makeup that implements perforated accents along the toe overlays. Featuring a retro stitch detailing on the eyelets, this shoe is also embroidered with our tiger stripes logo at the sides. Simplified with an EVA™ midsole construction, this sneaker is made to promote lasting comfort and support.\n\nReferencing recognizable details from the ASICS heritage, the LYTE™ CLASSIC sneaker emerges with a new silhouette with an urban appeal.',4.6),
    ('VANS COMFYCUSH SLIP-ON',1199000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/12-COMFYCUSHSLIP-ON-DENIMEMBROIDERYBLACK-WHITE54_1360x.jpg?v=1622698857','The Vans Classic Slip-On is practically the epitome of a casual shoe. They feature a low profile cut, paired with a timeless silhouette, and a waffle sole. Plus, this "ComfyCush" version is lighter than the original, constructed with added arch support, and has ultra-soft cushioning. Vans ComfyCush Slip-On (Classic) vn0a3wmdvo4 is first released in October 2020',4.8),
    ('VANS AUTHENTIC 44 DX',1399000,'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/04-192825763038_-AUTHENTIC44DX-_ANAHEIMFACTORY_HOFFMANFABRICFLORALMIX_52_1360x.jpg?v=1616426078','The Anaheim Factory Authentic 44 DX pays tribute to our first Vans factory in Anaheim, California, by borrowing details from the original Authentic and offering modernized comfort with upgraded Ortholite® sockliners. The Anaheim Factory Authentic 44 DX also includes throwback details like the original style number and color palette, reissued Hoffman floral prints, higher glossed foxing tape, cotton laces, original drill lining weight, and sturdy textile uppers to complete the look.',4.7);

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