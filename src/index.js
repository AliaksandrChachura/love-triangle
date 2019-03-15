@param preferences - an array of integers. Indices of people, whom they love
@returns number of love triangles

module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (let i=0;i < preferences.length; i++){
        let value = preferences[i];
        //alert ("value = " + (i+1) + "  =  " + preferences[i]);
        //alert ("preferences[value] = " + value + "    " + preferences[value - 1]);
        let value1 = preferences[value-1];
        // alert ("value1 = " + value1 + "  = " + preferences[value1-1]);



        if (i+1 === preferences[value1-1] ){
            //alert((i+1) + " =  " + preferences[value1-1]);
            count += 1;
            alert ("count = " + count);
            preferences[i] = NaN;
            preferences[value-1] = NaN;
            preferences[value1-1] = NaN;
            // alert (value1-1 + "  " + preferences[preferences[value1-1]]);

        }

    }
    return count;
};