DELIMITER //

CREATE PROCEDURE sp_edit_spot(
    IN p_spotid INT,
    IN p_spotname VARCHAR(100),
    IN p_spotdescription VARCHAR(255),
    IN p_spotreference VARCHAR(100),
    IN p_cityid INT,              
    IN p_cityname VARCHAR(100), 
    IN p_stateid INT,            
    IN p_statename VARCHAR(100), 
    IN p_stateabbreviation VARCHAR(2) 
)
BEGIN
    DECLARE v_city_exists INT;
    DECLARE v_state_exists INT;

    SELECT COUNT(*) INTO v_state_exists
    FROM states
    WHERE stateid = p_stateid;

    IF v_state_exists = 0 THEN
        INSERT INTO states (stateid, statename, stateabbreviation)
        VALUES (p_stateid, p_statename, p_stateabbreviation);
    END IF;

    SELECT COUNT(*) INTO v_city_exists
    FROM cities
    WHERE cityid = p_cityid;

    IF v_city_exists = 0 THEN
        INSERT INTO cities (cityid, cityname, citystateid)
        VALUES (p_cityid, p_cityname, p_stateid);
    END IF;

    UPDATE spots 
    SET spotname = p_spotname,
        spotdescription = p_spotdescription,
        spotreference = p_spotreference,
        spotcityid = p_cityid,
        spotstateid = p_stateid
    WHERE spotid = p_spotid;

    select * from vw_list_spots where spotid = p_spotid;
END //

DELIMITER ;