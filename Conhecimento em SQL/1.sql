SELECT spot.spotname 
FROM spots spot
WHERE EXISTS (
    SELECT * FROM cities city
    WHERE city.cityid = spot.spotcityid
    AND UPPER(city.cityname) = 'TUPA'
);