DROP TABLE IF EXISTS electronics;

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

