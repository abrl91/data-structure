class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            console.log(this.data);
        }
        this.data[address].push([key, value]);
        return this.data;
    } // O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }
        }

        return undefined
    } // O(1) as long as we dont have collision

    keys() {
        const keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(this.data[i][0][0]);
                keysArr.push(this.data[i][0][0]);
            }
        }
        return keysArr; // [grapes, apples, oranges]
    }
}

const myHashTable = new HashTable(50); // if 2 => 0: (2) ["grapes", 10000] 1: (2) ["apples", 500]
myHashTable.set('grapes', 10000); // empty × 23, Array(1), empty × 26 => 50
myHashTable.set('apples', 500); //empty × 23, Array(1), empty × 15, Array(0), empty × 10
myHashTable.set('oranges', 2);

myHashTable.get('grapes');
myHashTable.get('apples');

myHashTable.keys();

///////////////////////////////////////////////////////////////////////////////////////

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                console.log(input[i]);
                return input[i];
            }
        }
    }
    return undefined
} // O(n^2)

function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        console.log(map[input[i]]);
        if (map[input[i]] !== undefined) {
            console.log(input[i]);
            return input[i]
        } else {
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined
} // O(n)

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]); // 2
firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]); // 5
