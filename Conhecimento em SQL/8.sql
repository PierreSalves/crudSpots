CREATE PROCEDURE sp_crud_cities
    @p_clause CHAR(1),
    @p_cityid INT,
    @p_cityname NVARCHAR(100),
    @p_citystateid INT
AS
BEGIN
    SET NOCOUNT ON;

    IF NOT EXISTS (
        SELECT 1 
        FROM states
        WHERE stateid = @p_citystateid
    )
    OR @p_clause NOT IN ('I', 'U', 'D')
    OR (@p_cityid IS NULL AND @p_clause != 'I')
    BEGIN
        RETURN 0;		
    END;

    BEGIN TRANSACTION;
        IF @p_clause = 'I'
        BEGIN
            IF EXISTS (SELECT 1 FROM cities WHERE cityid = @p_cityid)
            BEGIN
                RETURN 0;
            END
            
            INSERT INTO cities (cityid, cityname, citystateid)
            VALUES (@p_cityid, @p_cityname, @p_citystateid);
        END
        
        ELSE IF @p_clause = 'U'
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM cities WHERE cityid = @p_cityid)
            BEGIN
                RETURN 0;
            END
            
            IF NOT EXISTS (SELECT 1 FROM states WHERE stateid = @p_citystateid)
            BEGIN
                RETURN 0;
            END
            
            UPDATE cities SET
                cityname = @p_cityname,
                citystateid = @p_citystateid
            WHERE cityid = @p_cityid;
        END
        
        ELSE IF @p_clause = 'D'
        BEGIN
            IF EXISTS (SELECT 1 FROM spots WHERE spotcityid = @p_cityid)
            BEGIN
                RETURN 0;
            END
            
            DELETE FROM cities 
            WHERE cityid = @p_cityid;
        END
        
    COMMIT TRANSACTION;
    RETURN 1;
END;
GO
