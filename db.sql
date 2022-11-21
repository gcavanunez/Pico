-- CREATE TABLE restaurants (
--     id INT,
--     name VARCHAR(50),
--     location VARCHAR(50),
--     price_range INT
-- );


-- INSERT INTO restaurants (id, name, location, price_range) VALUES (123, 'Sea Salt Fish Grill', 'Los Angeles', 2);

-- INSERT INTO restaurants (id, name, location, price_range) VALUES (124, 'Bavel', 'Los Angeles', 3);


-- CREATE TABLE restaurants (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     location VARCHAR(50) NOT NULL,
--     price_range INT NOT NULL check (price_range >= 1 and price_range<= 5)
-- );

-- -- bigserial will increment by 1
-- -- not null means the id cannot be empty