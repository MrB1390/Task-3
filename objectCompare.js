function Equal(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!Equal(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}


let obj1 = {
    name: "Person 1",
    age: 5
};

let obj2 = {
    age: 5,
    name: "Person 1"
};

const isEqual = Equal(obj1, obj2);
console.log('Objects are equal:', isEqual);