CREATE DATABASE transformart;

USE transformart;

CREATE TABLE admins(
  id VARCHAR(50) NOT NULL,
  adminname VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  isAdmin BOOLEAN
);

CREATE TABLE products(
  id VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  price FLOAT NOT NULL,
  description VARCHAR(500) NOT NULL,
  offer FLOAT,
  imgSrc STR NOT NULL,
  videoSrc STR NOT NULL,
  refereesLinks,
  categories,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE categories(
  id,
  name,
  products
);

DESCRIBE admins, pro, categories;
