const tests = new Map();
/** map key value is function  */
tests.set(()=>2+2, 4);
tests.set(()=>2*2, 4);
tests.set(()=>2/2, 1);

/** get map entry */
for(const entry of tests){
    /** map key is entry[0]() */
    //console.log('entry ::: ', entry[0]());
    console.log((entry[0]()===entry[1])?'PASS':'FAIL');
}