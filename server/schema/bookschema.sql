DROP DATABASE IF EXISTS bookstore;

-- Create the db
CREATE DATABASE bookstore;

\c bookstore

ALTER TABLE bookstore
    OWNER to postgres;