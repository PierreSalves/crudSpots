UPDATE cities
SET citystateid = 35
WHERE EXISTS (
    SELECT * FROM states state
    WHERE state.stateabbreviation = 'PR'
);