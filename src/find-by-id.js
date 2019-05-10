function findById(id, objectList) {
    for(let i = 0; i < objectList.length; id++) {
        const object = objectList[i];
        if(object.id === id) {
            return object;
        }
    }
    return null;
}

export default findById;