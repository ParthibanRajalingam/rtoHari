export const urls = {
    'getAllState' : 'http://rto.somee.com/ktrappfinal/rto/states',
    'getDistrictById' : 'http://rto.somee.com/ktrappfinal/rto/districts/${id}',
    'searchByReg': 'http://rto.somee.com/ktrappfinal/rto/regData?regcode=${id}',
    'searchByState': 'http://rto.somee.com/ktrappfinal/rto/regData?stateId=${id}',
    'searchByStateAndDistrict' : 'http://rto.somee.com/ktrappfinal/rto/regData?districtid=${dId}&stateId=${id}'
};

export function getUrls(name, id = 0, dId = 0) {

return (eval('`' + urls[name] + '`'));

}
