// Use this presets array inside the presetHandler
const presets = require('./presets');

// there are three presets do the prestets array is a nested array of three arrays nested with the values of the four different drum types

//this function makes it possible to save/add/edit presets depending on the request type, the index of the preset and the optional new array preset that is to be added. This data is used by the server to establish requests
const presetHandler = (reqType, index, newPresetArray) => {
    let output = [];
    if (index < 0 || index > 3) {
        output.push(404);
        return output;
    }
    if (reqType === 'GET') {
        output.push(200);
        output.push(presets[index]);
        return output;
    } else if (reqType === 'PUT') {
        presets[index] = newPresetArray;
        output.push(200);
        output.push(presets[index]);
        return output;
    } else {
        output.push(400);
        return output;
    }
};

// presetHandler function can be used elsewhere:
module.exports = presetHandler;
