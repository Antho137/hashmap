// Defining a hashmap class
class hashmap {
    constructor() {
        this.mapArray = [];
    }

    // Function that converts a key into a hash code
    hash(key) {
        let hashCode = 0;
    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
    
        return hashCode;
    }
    
    // Store key-value pair entry in the array
    set(key, value) {
        this.mapArray[key] = value; 
    }
    
    // Returns the value that is assigned to this key.
    get(key) {
        return this.mapArray[key];
    }

    // Returns true or false based on whether or not the key is in the hash map.
    has(key) {
        return key in this.mapArray;
    }
    
    // Remove the entry with that key and return true.
    remove(key) {
        if (this.has(key)) {
            delete this.mapArray(key);
            return true;
        }        
        return false;
    }

    // Returns the number of stored keys in the hash map.
    length() {
        return Object.keys(this.mapArray).length;
    }

    // Removes all entries in the hash map.
    clear() {
        this.mapArray = [];
    }

    // Returns an array containing all the keys inside the hash map.
    keys() {
        return Object.keys(this.mapArray);
    }

    // Returns an array containing all the values.
    values() {
        return Object.values(this.mapArray);
    }

    // Returns an array that contains each key, value pair.
    entries() {
        return Object.entries(this.mapArray);
    }
}

const theMap = new hashmap();
theMap.set('Antonio', 'Sala');
theMap.set('Linda', 'Jones');
theMap.set('Alice', 'Taylor');

console.log(theMap.entries());
console.log(theMap.length());
console.log(theMap.keys());
console.log(theMap.values());
console.log(theMap.get('Antonio'));
console.log(theMap.has('Linda'));