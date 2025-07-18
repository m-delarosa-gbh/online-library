DROP DATABASE IF EXISTS booktest;

-- Create the db
CREATE DATABASE bookstore;

\c bookstore

ALTER TABLE bookstore
    OWNER to postgres;