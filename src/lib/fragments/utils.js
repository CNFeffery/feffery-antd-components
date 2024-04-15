const getBatchPropsValues = (batchPropsNames, props) => {
    let _batchPropsValues = {};
    for (let propName of batchPropsNames) {
        _batchPropsValues[propName] = props[propName];
    }
    return _batchPropsValues
}


export { getBatchPropsValues }