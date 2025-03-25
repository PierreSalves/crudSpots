CREATE VIEW vw_list_spots AS
SELECT 
    spot.spotid,
    spot.spotname,
    spot.spotdescription,
    spot.spotreference,
    spot.spotinclusiondate,
    city.cityid,
    city.cityname,
    state.stateid,
    state.statename,
    state.stateabbreviation
FROM spots AS spot
INNER JOIN cities AS city ON spot.spotcityid = city.cityid
INNER JOIN states AS state ON spot.spotstateid = state.stateid;
