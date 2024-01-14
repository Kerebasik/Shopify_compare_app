
type Metafield={
    node:{
        key:string,
        namespace:string
        value:string
    }
}


const deepEqualObject=(obj1: any, obj2: any): boolean => {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!deepEqualObject(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

const arrayToObjectMetafield = (arrayMetafields:Metafield[]) : { [key: string]: string } =>{
    let myObject:{ [key: string]: string } ={}

    for(let item of arrayMetafields){
        myObject[item.node.key] = item.node.value
    }

    return myObject
}

export {arrayToObjectMetafield, deepEqualObject}