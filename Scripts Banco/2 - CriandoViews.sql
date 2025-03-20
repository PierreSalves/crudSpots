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
FROM spots spot
INNER JOIN cities city ON spot.spotcityid = city.cityid
INNER JOIN states state ON spot.spotstateid = state.stateid
ORDER BY spot.spotinclusiondate DESC;