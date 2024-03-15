CREATE TRIGGER create_salary_status_of_new_user 
AFTER INSERT ON users
FOR EACH ROW 
INSERT INTO salary_status(user_id, grand_total, upad, jama, credited) 
VALUES (NEW.user_id, 0, 0, 0, 0);

CREATE TRIGGER user_registered 
AFTER INSERT ON credentials
FOR EACH ROW
UPDATE users
SET is_registered = 1
WHERE users.user_id = NEW.user_id;

CREATE TRIGGER calculate_salary_from_work_entry 
AFTER INSERT ON work_entry
FOR EACH ROW
UPDATE salary_status
SET grand_total = grand_total + NEW.total,
upad = upad + NEW.upad,
jama = jama + NEW.jama
WHERE salary_status.user_id = NEW.user_id;

CREATE TRIGGER salary_payment_credited 
AFTER INSERT ON salary_payments
FOR EACH ROW
UPDATE salary_status
SET credited = credited + NEW.amount
WHERE salary_status.user_id = NEW.user_id;

CREATE TRIGGER update_inventory_from_work_entry
AFTER INSERT ON work_entry
FOR EACH ROW
INSERT INTO inventory(pattern, design, colour, size, stock)
VALUES (NEW.pattern, NEW.design, NEW.colour, NEW.size, NEW.piece)
ON DUPLICATE KEY
UPDATE stock = stock + NEW.piece;
