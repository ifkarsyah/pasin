function getQueryObject(queryResult){
    let listQueryObject = []

    queryResult.rows.forEach(element => {
        let queryObject = {}
        Object.keys(element).forEach(key => {
            queryObject[key] = element[key]
        });
        listQueryObject.push(queryObject)
    });

    return listQueryObject
}

function calculateRecommendation(sizeLists, userSize){
    let sizeLengthAfterCalculation = {}
    let minLength = sizeLists[0].length
    sizeLists.forEach(size => {
        let calculatedLength = size.length - userSize.length
        
        if (calculatedLength >= 0){
            sizeLengthAfterCalculation[calculatedLength] = size.size
            if (calculatedLength < minLength){
                minLength = calculatedLength
            }
        }
    });

    let lengthDiff = userSize.loosey_size - minLength

    console.log(minLength)
    if (minLength <= userSize.loosey_size) {
        return {reccomendation: sizeLengthAfterCalculation[minLength], lengthDiff: lengthDiff}
    }else{
        return {reccomendation: 0}
    }
}

module.exports = { getQueryObject, calculateRecommendation }