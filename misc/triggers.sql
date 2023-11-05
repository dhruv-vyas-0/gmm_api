CREATE TRIGGER new_user_status AFTER INSERT ON users
FOR EACH ROW INSERT INTO salary_status(user_id, grand_total, upad, jama, credited) VALUES (NEW.user_id, 0, 0, 0, 0);

CREATE TRIGGER inserted_work_entery AFTER INSERT ON work_entry
FOR EACH ROW
UPDATE salary_status
SET grand_total = grand_total + NEW.total,
upad = upad + NEW.upad,
jama = jama + NEW.jama
WHERE salary_status.user_id = NEW.user_id;

CREATE TRIGGER weekly_payment_settled AFTER INSERT ON weekly_payments
FOR EACH ROW
UPDATE salary_status
SET credited = credited + NEW.amount
WHERE salary_status.user_id = NEW.user_ID;

