use competo;

CREATE TABLE CLIENTS
( IdClients			INT		auto_increment			NOT NULL,
  Name				varchar(30)						NOT NULL,
  LastName			varchar(30)						NOT NULL,
  Email				varchar(40)						NOT NULL,
  PhoneNumber		varchar(13)						NOT NULL,
  Addres			varchar(30)						NOT NULL,
  PRIMARY KEY (IdClients));
  
CREATE TABLE SERVICES
( IdServices		INT		auto_increment		NOT NULL,
  Type				varchar(30)						NOT NULL,
  Costs				float							NOT NULL,
  Lenght			varchar(40)						NOT NULL,
  StartDate			datetime						NOT NULL,
  EndDate			datetime						NOT NULL,
  PRIMARY KEY (IdServices));
  
INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Jorge' , 'Quispe' , 'jorqui_7@gmail.com' , '985753689' , 'Huanuco 135')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Maria' , 'Gimenez' , 'magi_09@gmail.com' , '986758653' , 'Trujillo 136')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Jaime' , 'Herrera' , 'jaimhe_05@gmail.com' , '985774889' , 'Callao 137')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Max' , 'Barrios' , 'maxba_4@gmail.com' , '985714589' , 'Miraflores 138')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Julia' , 'Altamirano' , 'julialta_11@gmail.com' , '985745124' , 'Surco 139')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Jose' , 'Montoya' , 'jomon_89@gmail.com' , '985755469' , 'Surquillo 140')

INSERT INTO CLIENTS (Name , LastName , Email , PhoneNumber , Addres)
values('Andrea' , 'Tomoya' , 'andto_45@gmail.com' , '985759563' , 'Magdalena 141')

SELECT * FROM CLIENTS

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('Online' , '250' , '7 days' , '2022-10-13 12:45:56' , '2022-10-20')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('Online' , '25' , '1 days' , '2022-10-15' , '2022-10-16')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('In person' , '750' , '14 days' , '2022-10-15' , '2022-10-29')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('In person' , '150' , '3 days' , '2022-10-17' , '2022-10-20')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('Online' , '500' , '20 days' , '2022-10-20' , '2022-11-09')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('In person' , '75' , '1 days' , '2022-10-21' , '2022-10-22')

INSERT INTO SERVICES( Type , Costs , Lenght , StartDate , EndDate)
values('Online' , '1500' , '30 days' , '2022-10-15' , '2022-11-15')

select * from SERVICES
