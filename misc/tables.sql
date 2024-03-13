create table users(
user_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(25) NOT NULL,
work_role VARCHAR(10)
);

create table credentials(
user_id INT NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(10) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

create table salary_status(
user_id INT PRIMARY KEY,
grand_total FLOAT NOT NULL,
upad FLOAT NOT NULL,
jama FLOAT NOT NULL,
payable FLOAT AS (grand_total - upad + jama) STORED,
credited FLOAT NOT NULL,
pending FLOAT AS (payable - credited) STORED,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

create table weekly_payments(
payment_id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
year_ YEAR NOT NULL,
month INT NOT NULL,
week INT NOT NULL,
amount FLOAT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

create table work_entry(
user_id INT NOT NULL,
date_ DATE NOT NULL,
pattern VARCHAR(25) NOT NULL,
design VARCHAR(25) NOT NULL,
colour VARCHAR(10) NOT NULL,
size_ INT NOT NULL,
piece INT NOT NULL,
rate FLOAT NOT NULL,
total FLOAT AS (piece*rate) STORED NOT NULL,
upad FLOAT DEFAULT 0,
jama FLOAT DEFAULT 0,
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

create table cutting_records(
lot_no VARCHAR(10) NOT NULL PRIMARY KEY,
user_id INT NOT NULL,
date_ DATE NOT NULL,
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
FOREIGN KEY (user_id) REFERENCES users(user_id)
);
