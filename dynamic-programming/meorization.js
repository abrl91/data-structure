function addTo80(n) {
    console.log('long time');
    return n + 80;
}


function memoizedAddTo80() {
    // not polluting the global scope and use closures to make sure the cache object does not get reset
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

memoized(5); // long time , 85  // cache = { 5: 85 }
memoized(5); // 85 // cache = { 5: 85 }
