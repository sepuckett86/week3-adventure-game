function findById(id, objectList) {
    for(let i = 0; i < objectList.length; i++) {
        const object = objectList[i];
        if(object.id === id) {
            return object;
        }
    }
    return null;
}

export default findById;