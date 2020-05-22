BEGIN TRANSACTION;


INSERT into users(name, email, entries, joined) values ('Jessie','a@gmail.com',5, '2018-01-1');
INSERT into users(name, email, entries, joined) values ('Corona','corona@gmail.com',1, '2018-01-1');

INSERT into login(hash, email) values ('$2a$10$WAK21U0LWl7c//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'a@gmail.com');
INSERT into login(hash, email) values ('$2a$10$GRDRJ1rhPmj7EOKfQNI/0um44r92P6BeNZdZFUyKEqC5l1S6XK6cC', 'corona@gmail.com');

COMMIT;
