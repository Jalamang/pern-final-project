DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE electronics (
    productid SERIAL PRIMARY KEY, 
    name TEXT,
    picture TEXT,
    price NUMERIC,
    capacity NUMERIC,
    description TEXT,
    material TEXT,
    rating INT,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN DEFAULT true
);


