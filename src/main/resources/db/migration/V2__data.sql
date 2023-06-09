/*************************************************************
*                  DATABASE INSERTION FLYWAY
**************************************************************/

/* Table departments */
INSERT INTO departments
(code,designation, created_at,updated_at)
VALUES
('Dpt-iNFO', 'Departement informatique', '2023-04-05','2023-04-05'),
('Dpt-RH','Departement RHCOM','2023-04-05','2023-04-05'),
('Dpt-GesCom','Departement GesCOM','2023-04-05','2023-04-05');


/* Table persons */
INSERT INTO persons
(first_name,last_name, age, id_department, created_at, updated_at)
VALUES ('Ayou', 'Lasme', 26, 1,'2023-04-05','2023-04-05'),
('Zeinab','Traore',26, 2, '2023-04-05','2023-04-05'),
('Mamadou','Konate', 28, 2, '2023-04-05','2023-04-05'),
('Fabrice','Dion',36, 1, '2023-04-05','2023-04-05'),
( 'Fanta','Kamate',26, 2, '2023-04-05','2023-04-05');

