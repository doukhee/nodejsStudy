const s = new Set([0,1,2,3]);
/** already have 3 value don't add 3 value */
s.add(3);
/** size is 4 */
s.size;
/** delete Set 0 value */
s.delete(0);
/** checking 0 value return false */
s.has(0);


for(const entry of s){
    console.log('entry is ',entry);
}