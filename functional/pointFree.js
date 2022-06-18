const f = (route, cb) => {
    const result = heavyComputing();
    cb(result);
}

const handleresult = (result) => {
    
}

f('users', handleresult);

