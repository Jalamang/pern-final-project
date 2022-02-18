DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE product (
    productID SERIAL PRIMARY KEY, 
    brand TEXT,
    productDescription TEXT,
    picture TEXT,
    color TEXT,
    price INT,
    modelName TEXT,
    productCategory TEXT,
    is_available BOOLEAN DEFAULT true
);


