/** Map Instance */
const profiles = new Map();
/** Insert Key value setting */
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');
/** map size is 3 */
profiles.size;
/** map method has is return true or false */
profiles.has('twitter');
/** map method get return key value  */
profiles.get('twitter');
profiles.has('youtube');
profiles.delete('facebook');
profiles.get('facebook');

/** return value key value all */
for(const entry of profiles){
    console.log('entry is ', entry);
}

