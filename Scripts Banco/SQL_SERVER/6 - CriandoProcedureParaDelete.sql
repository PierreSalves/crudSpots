CREATE PROCEDURE sp_delete_spot
    @p_spotid INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM spots
    WHERE spotid = @p_spotid;

    SELECT @p_spotid AS DeletedSpotID;
END;
GO