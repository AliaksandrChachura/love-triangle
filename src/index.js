/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (let i=0;i < preferences.length; i++){
        let value = preferences[i];
        let value1 = preferences[value-1];



        if (i+1 === preferences[value1-1]  && i+1 !== preferences[i] ){
            count += 1
            preferences[i] = NaN;
            preferences[value-1] = NaN;
            preferences[value1-1] = NaN;
        }

    }
    return count;
};