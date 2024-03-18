CREATE TABLE users(
user_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
work_role VARCHAR(10),
is_registered BOOLEAN DEFAULT 0
);

CREATE TABLE credentials(
user_id INT NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(10) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE salary_status(
user_id INT PRIMARY KEY,
grand_total FLOAT NOT NULL,
upad FLOAT NOT NULL,
jama FLOAT NOT NULL,
payable FLOAT AS (grand_total - upad + jama) STORED,
credited FLOAT NOT NULL,
pending FLOAT AS (payable - credited) STORED,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE salary_payments(
payment_id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
date DATE NOT NULL DEFAULT (CURDATE()),
amount FLOAT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE patterns(
pattern VARCHAR(20) PRIMARY KEY
);

CREATE TABLE designs(
design VARCHAR(20) PRIMARY KEY
);

CREATE TABLE colours(
colour VARCHAR(10) PRIMARY KEY
);

CREATE TABLE sizes(
size INT PRIMARY KEY
);

CREATE TABLE work_entry(
user_id INT NOT NULL,
date DATE NOT NULL DEFAULT (CURDATE()),
pattern VARCHAR(20) NOT NULL,
design VARCHAR(20) NOT NULL,
colour VARCHAR(10) NOT NULL,
size INT NOT NULL,
piece INT NOT NULL,
rate FLOAT NOT NULL,
total FLOAT AS (piece * rate) STORED NOT NULL,
upad FLOAT DEFAULT 0,
jama FLOAT DEFAULT 0,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
FOREIGN KEY (pattern) REFERENCES patterns(pattern),
FOREIGN KEY (design) REFERENCES designs(design),
FOREIGN KEY (colour) REFERENCES colours(colour),
FOREIGN KEY (size) REFERENCES sizes(size)
);

CREATE TABLE inventory(
pattern VARCHAR(20) NOT NULL,
design VARCHAR(20) NOT NULL,
colour VARCHAR(10) NOT NULL,
size INT NOT NULL,
stock INT NOT NULL DEFAULT 0,
cost FLOAT NOT NULL DEFAULT 0,
margin FLOAT NOT NULL DEFAULT 0.1,
min_price FLOAT AS (cost * (1 + margin)) STORED,
PRIMARY KEY(pattern, design, colour, size),
FOREIGN KEY (pattern) REFERENCES patterns(pattern),
FOREIGN KEY (design) REFERENCES designs(design),
FOREIGN KEY (colour) REFERENCES colours(colour),
FOREIGN KEY (size) REFERENCES sizes(size)
);

CREATE TABLE customers(
customer_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
phone VARCHAR(10)
);

CREATE TABLE customer_bill(
customer_id INT PRIMARY KEY,
amount FLOAT NOT NULL,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

CREATE TABLE selling_records(
selling_id INT PRIMARY KEY AUTO_INCREMENT,
date DATE NOT NULL DEFAULT (CURDATE()),
customer_id INT NOT NULL,
pattern VARCHAR(20) NOT NULL,
design VARCHAR(20) NOT NULL,
colour VARCHAR(10) NOT NULL,
size INT NOT NULL,
pieces INT NOT NULL,
amount FLOAT NOT NULL DEFAULT 0,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
FOREIGN KEY (pattern) REFERENCES patterns(pattern),
FOREIGN KEY (design) REFERENCES designs(design),
FOREIGN KEY (colour) REFERENCES colours(colour),
FOREIGN KEY (size) REFERENCES sizes(size)
);

CREATE TABLE cutting_records(
lot_no VARCHAR(10) NOT NULL PRIMARY KEY,
user_id INT NOT NULL,
date DATE NOT NULL DEFAULT (CURDATE()),
pattern VARCHAR(25) NOT NULL,
fabric VARCHAR(25) NOT NULL,
colour VARCHAR(10) NOT NULL,
s1 INT DEFAULT 0,
s2 INT DEFAULT 0,
s3 INT DEFAULT 0,
s4 INT DEFAULT 0,
s5 INT DEFAULT 0,
total_cutting INT AS (s1 + s2 + s3 + s4 + s5) STORED,
weight FLOAT NOT NULL,
price FLOAT NOT NULL,
total_price FLOAT AS (weight * price) STORED,
ratio FLOAT AS (total_price / total_cutting) STORED,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE monthly_sales(
year INT NOT NULL,
month INT NOT NULL,
sales INT NOT NULL DEFAULT 0,
PRIMARY KEY(year, month)
);
