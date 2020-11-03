-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;
-- Create the table burgers.
CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);