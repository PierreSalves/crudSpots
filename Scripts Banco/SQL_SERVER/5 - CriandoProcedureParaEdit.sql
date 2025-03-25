CREATE PROCEDURE sp_edit_spot
    @p_spotid INT,
    @p_spotname NVARCHAR(100),
    @p_spotdescription NVARCHAR(255),
    @p_spotreference NVARCHAR(100),
    @p_cityid INT,              
    @p_cityname NVARCHAR(100), 
    @p_stateid INT,            
    @p_statename NVARCHAR(100), 
    @p_stateabbreviation CHAR(2)
AS
BEGIN
    SET NOCOUNT ON;

    IF NOT EXISTS (
        SELECT 1 
        FROM states
        WHERE stateid = @p_stateid
    )
    BEGIN
		SET IDENTITY_INSERT states ON;
        INSERT INTO states (stateid, statename, stateabbreviation)
        VALUES (@p_stateid, @p_statename, @p_stateabbreviation);
		SET IDENTITY_INSERT states OFF;
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM cities
        WHERE cityid = @p_cityid
    )
    BEGIN
	    SET IDENTITY_INSERT cities ON;
        INSERT INTO cities (cityid, cityname, citystateid)
        VALUES (@p_cityid, @p_cityname, @p_stateid);
        SET IDENTITY_INSERT cities OFF;
    END;

    UPDATE spots
    SET spotname = @p_spotname,
        spotdescription = @p_spotdescription,
        spotreference = @p_spotreference,
        spotcityid = @p_cityid,
        spotstateid = @p_stateid
    WHERE spotid = @p_spotid;

    SELECT *
    FROM vw_list_spots
    WHERE spotid = @p_spotid;
END;
GO
