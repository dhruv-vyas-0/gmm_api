INSERT INTO users (name, email, work_role)
VALUES 
('Alice Cooper', 'alice.cooper@example.com', 'Worker'),
('Bob Smith', 'bob.smith@example.com', 'Manager'),
('Eve Johnson', 'eve.johnson@example.com', 'Worker'),
('Chris Evans', 'chris.evans@example.com', 'Worker'),
('Olivia Davis', 'olivia.davis@example.com', 'Worker'),
('Max Wilson', 'max.wilson@example.com', 'Worker'),
('Sophia Martinez', 'sophia.martinez@example.com', 'Cutter'),

INSERT INTO credentials (user_id, password, role)
VALUES 
(1, 'P@ssw0rd', 'admin'),
(2, 'S3cur3PW', 'employee'),
(3, 'Str0ngPW', 'employee'),
(4, 'Pa$$w0rd', 'admin'),
(5, 'Ch@ng3Me', 'employee'),
(6, 'P@ssw0rd', 'employee'),
(7, 'S3cur3PW', 'employee');

INSERT INTO patterns (pattern) VALUES
('Stripes'),
('Polka Dots'),
('Houndstooth'),
('Argyle'),
('Chevron');

INSERT INTO designs (design) VALUES
('Floral Print'),
('Plaid'),
('Geometric'),
('Tie-Dye'),
('Animal Print');

INSERT INTO colours (colour) VALUES
('Red'),
('Blue'),
('Green'),
('Yellow'),
('Black');

INSERT INTO sizes (size) VALUES
(1),
(2),
(3),
(4),
(5);

INSERT INTO work_entry (user_id, pattern, design, colour, size, piece, rate, upad, jama)
VALUES 
(1, 'Stripes', 'Floral Print', 'Red', 1, 5, 7.5, 0, 0),
(2, 'Polka Dots', 'Plaid', 'Blue', 2, 10, 8, 600, 0),
(3, 'Houndstooth', 'Geometric', 'Green', 3, 8, 6, 0, 800),
(4, 'Argyle', 'Tie-Dye', 'Yellow', 4, 12, 9, 0, 0),
(5, 'Chevron', 'Animal Print', 'Black', 5, 15, 7.5, 0, 0),
(6, 'Stripes', 'Plaid', 'Blue', 1, 6, 8.5, 0, 0),
(7, 'Polka Dots', 'Geometric', 'Green', 2, 9, 7, 0, 0);

INSERT INTO work_entry (user_id, pattern, design, colour, size, piece, rate)
VALUES 
(1, 'Stripes', 'Floral Print', 'Red', 1, 75, 8),
(7, 'Polka Dots', 'Plaid', 'Blue', 3, 85, 7.5),
(3, 'Houndstooth', 'Geometric', 'Green', 4, 70, 5.5),
(6, 'Argyle', 'Tie-Dye', 'Yellow', 2, 60, 6),
(2, 'Chevron', 'Animal Print', 'Black', 5, 90, 9),
(4, 'Stripes', 'Plaid', 'Red', 3, 80, 8),
(5, 'Polka Dots', 'Floral Print', 'Blue', 1, 95, 9.5);

INSERT INTO salary_payments (user_id, amount)
VALUES 
(1, 500),
(2, 700),
(3, 800),
(4, 900),
(5, 600),
(6, 400),
(7, 1000);

INSERT INTO customers (name, email, phone)
VALUES 
('John Doe', 'johndoe@example.com', '1234567890'),
('Jane Smith', 'janesmith@example.com', '9876543210'),
('Michael Johnson', 'michaelj@example.com', '4567890123'),
('Emily Brown', 'emilybrown@example.com', '7890123456'),
('David Wilson', 'davidwilson@example.com', '2345678901');

INSERT INTO sells_record (customer_id, pattern, design, colour, size, pieces)
VALUES 
(1, 'Argyle', 'Tie-Dye', 'Yellow', 2, 20),
(2, 'Houndstooth', 'Geometric', 'Green', 3, 8),
(3, 'Polka Dots', 'Plaid', 'Blue', 3, 15),
(4, 'Stripes', 'Floral Print', 'Red', 1, 30),
(5, 'Chevron', 'Animal Print', 'Black', 5, 10);

INSERT INTO monthly_sales (year, month, sales)
VALUES
(2023, 1, 5000000),
(2023, 2, 5100000),
(2023, 3, 5200000),
(2023, 4, 5300000),
(2023, 5, 5400000),
(2023, 6, 5500000),
(2023, 7, 5600000),
(2023, 8, 5700000),
(2023, 9, 5800000),
(2023, 10, 11000000),
(2023, 11, 9000000),
(2023, 12, 8000000);

