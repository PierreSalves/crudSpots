SELECT spot.spotname, city.cityname
FROM spots spot
INNER JOIN cities city ON spot.spotcityid = city.cityid;