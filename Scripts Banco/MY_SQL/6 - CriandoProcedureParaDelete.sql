DELIMITER //

CREATE PROCEDURE sp_delete_spot(
    IN p_spotid INT
)
BEGIN
    
    DELETE FROM spots 
    WHERE spotid = p_spotid;

    select p_spotid from dual;
END //

DELIMITER ;