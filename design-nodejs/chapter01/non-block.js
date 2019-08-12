socketA = new WebSocket('localhost','http');
socketB = new WebSocket('localhost','http');
pipeA = new WebSocket('localhost','http');
const resources = [socketA, socketB, pipeA];

while(!resources.isEmpty()){
    for(let i = 0; i < resources.length; i++){
        resource = resources[i];
        /** try read */
        let data = resources.read();
        if(data === NO_DATA_AVAILABLE){
            /** not data */
            continue;
        }
        if(data === RESOURCE_CLOSED){
            /** data resource is close delete list */
            resources.remove(i);
        }else{
            consumeData(data);
        }
    }
}

