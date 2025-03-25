DELIMITER //
CREATE PROCEDURE sp_get_all_spots()
BEGIN
    SELECT * FROM vw_list_spots;
END //

CREATE sp_get_spot_by_id(IN p_spotid INT)
BEGIN
    SELECT * FROM vw_list_spots 
    WHERE spotid = p_spotid;
END //

CREATE PROCEDURE sp_filter_spots(IN p_filter VARCHAR(100))
BEGIN
    SELECT * FROM vw_list_spots 
    WHERE spotname LIKE CONCAT('%',p_filter,'%')
    OR spotdescription LIKE CONCAT('%',p_filter,'%')
    OR spotreference LIKE CONCAT('%',p_filter,'%');
END //
DELIMITER ;