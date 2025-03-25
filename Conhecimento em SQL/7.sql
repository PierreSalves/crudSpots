CREATE VIEW vw_list_cities AS
SELECT 
    city.cityid,
    city.cityname,
    state.stateid,
    state.statename,
    state.stateabbreviation
FROM cities city
INNER JOIN states AS state ON city.citystateid = state.stateid;

SELECT * FROM vw_list_cities
ORDER BY stateabbreviation, cityname;
