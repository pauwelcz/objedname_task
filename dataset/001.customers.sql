DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    UNIQUE (email)
);

INSERT INTO customers (email)
VALUES ('johndoe@email.com'), 
       ('johnnydepp@email.com');