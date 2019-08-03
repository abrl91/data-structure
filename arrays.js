class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
newArray.delete(1);
console.log(newArray);

/////////////////////////////////////////////////////////////

function reverse(str) {
    // check the input
    if (!str || str.length < 2  || typeof str !== 'string') {
        return 'error'
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    backwards.join('');
    console.log(backwards);

    return backwards;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

reverse('hi, my name is amit');
reverse2('hi, my name is amit');
reverse3('hi, my name is amit');

/////////////////////////////////////////////////////////////////

function mergedSortedArray(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // check input
    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1Item[i];
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = array2Item[j];
            j++
        }
    }

    return mergedArray;
}


mergedSortedArray([0,3,4,31], [4,6,30]);

