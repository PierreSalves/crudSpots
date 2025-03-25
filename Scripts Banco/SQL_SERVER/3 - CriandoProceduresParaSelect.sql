CREATE PROCEDURE sp_get_all_spots
AS
BEGIN
    SELECT * FROM vw_list_spots ORDER BY spotinclusiondate DESC;;
END;
GO

CREATE PROCEDURE sp_get_spot_by_id
    @p_spotid INT
AS
BEGIN
    SELECT * FROM vw_list_spots
    WHERE spotid = @p_spotid;
END;
GO

CREATE PROCEDURE sp_filter_spots
    @p_filter NVARCHAR(100)
AS
BEGIN
    SELECT * FROM vw_list_spots
    WHERE spotname LIKE '%' + @p_filter + '%'
    OR spotdescription LIKE '%' + @p_filter + '%'
    OR spotreference LIKE '%' + @p_filter + '%'
    ORDER BY spotinclusiondate DESC;
END;
GO
