CREATE DATABASE db_spots;
USE db_spots;

CREATE TABLE IF NOT EXISTS states (
    stateid INT AUTO_INCREMENT PRIMARY KEY,
    statename VARCHAR(100) NOT NULL,
    stateabbreviation VARCHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS cities (
    cityid INT AUTO_INCREMENT PRIMARY KEY,
    cityname VARCHAR(100) NOT NULL,
    citystateid INT NOT NULL,
    FOREIGN KEY (citystateid) REFERENCES states(stateid)
);

CREATE TABLE IF NOT EXISTS spots (
	spotid INT AUTO_INCREMENT PRIMARY KEY,
	spotname VARCHAR(100) NOT NULL,
	spotdescription VARCHAR(255) NOT NULL,
	spotreference VARCHAR(100),
	spotcityid INT NOT NULL,
	spotstateid INT NOT NULL,
	spotinclusiondate DATETIME DEFAULT CURRENT_TIMESTAMP(),
	FOREIGN KEY (spotcityid) REFERENCES cities(cityid),
    FOREIGN KEY (spotstateid) REFERENCES states(stateid)
);