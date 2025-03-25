INSERT INTO states (stateid,stateabbreviation, statename)
VALUES (35, 'SP', 'São Paulo');

INSERT INTO cities (cityid, cityname, citystateid)
VALUES (3555000, 'Tupã', 35);

INSERT INTO spots (spotname, spotreference, spotdescription, spotstateid, spotcityid)
VALUES ('Praça da Bandeira', 'A Praça da Bandeira está localizado na cidade de Tupã (TUP) que fica no Estado de São Paulo (SP)', 'O nome se origina pelo Monumento da Bandeira', 35, 3555000);