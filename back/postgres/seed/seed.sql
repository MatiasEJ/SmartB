BEGIN TRANSACTION;

INSERT into users(name, email, entries, joined) values ('Jessie','a@gmail.com',5, '2018-01-1');

INSERT into login(hash, email) values ('$2a$10$WAK21U0LWl7c//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'a@gmail.com');

COMMIT;
