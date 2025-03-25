CREATE DATABASE db_spots;
USE db_spots;

CREATE TABLE states (
    stateid INT IDENTITY(1,1) PRIMARY KEY,
    statename VARCHAR(100) NOT NULL,
    stateabbreviation CHAR(2) NOT NULL
);

CREATE TABLE cities (
    cityid INT IDENTITY(1,1) PRIMARY KEY,
    cityname VARCHAR(100) NOT NULL,
    citystateid INT NOT NULL,
    FOREIGN KEY (citystateid) REFERENCES states(stateid)
);

CREATE TABLE spots (
    spotid INT IDENTITY(1,1) PRIMARY KEY,
    spotname VARCHAR(100) NOT NULL,
    spotdescription VARCHAR(100) NOT NULL,
    spotreference VARCHAR(100) NULL,
    spotcityid INT NOT NULL,
    spotstateid INT NOT NULL,
    spotinclusiondate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (spotcityid) REFERENCES cities(cityid),
    FOREIGN KEY (spotstateid) REFERENCES states(stateid)
);
