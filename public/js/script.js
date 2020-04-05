// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

// toggle the specified drum at the specified index on or off (true or false)
function toggleDrum(drumType, index) {
    if (index < 0 || index > 16) {
        return;
    }

    // Checking the types of input given and edge cases
    // kicks
    if (drumType === 'kicks') {
        kicks[index] === false ? (kicks[index] = true) : (kicks[index] = false);
        // snares
    } else if (drumType === 'snares') {
        snares[index] === false
            ? (snares[index] = true)
            : (snares[index] = false);
        // hiHats?
    } else if (drumType === 'hiHats') {
        hiHats[index] === false
            ? (hiHats[index] = true)
            : (hiHats[index] = false);
        // rideCymbals?
    } else if (drumType === 'rideCymbals') {
        rideCymbals[index] === false
            ? (rideCymbals[index] = true)
            : (rideCymbals[index] = false);
        // everything else gets rekt
    } else {
        return;
    }
}
// clear all the drums to false
function clear(drums) {
    //switching drums to check what type we are clearing so we don't mutate them all at once
    switch (drums) {
        case 'kicks':
            //doing a forech on drums so we can reset every element of the array to false
            kicks.forEach((x, i) => (x === true ? (kicks[i] = false) : x));
            break;
        case 'snares':
            snares.forEach((x, i) => (x === true ? (snares[i] = false) : x));
            break;
        case 'hiHats':
            hiHats.forEach((x, i) => (x === true ? (hiHats[i] = false) : x));
            break;
        case 'rideCymbals':
            rideCymbals.forEach((x, i) =>
                x === true ? (rideCymbals[i] = false) : x
            );
            break;

        default:
            return;
    }
}

// inverts all the values of the specified array (true <-> false)
function invert(drums) {
    // doing the same as in clear() but now instead of setting everything to fasle it inverts the values
    switch (drums) {
        case 'kicks':
            kicks.forEach((x, i) =>
                x === true ? (kicks[i] = false) : (kicks[i] = true)
            );
            break;
        case 'snares':
            snares.forEach((x, i) =>
                x === true ? (snares[i] = false) : (snares[i] = true)
            );
            break;
        case 'hiHats':
            hiHats.forEach((x, i) =>
                x === true ? (hiHats[i] = false) : (hiHats[i] = true)
            );
            break;
        case 'rideCymbals':
            rideCymbals.forEach((x, i) =>
                x === true ? (rideCymbals[i] = false) : (rideCymbals[i] = true)
            );
            break;

        default:
            return;
    }
}

// function that lets you play multiple sythesizer tones at once
function getNeighborPads(x, y, size) {
    let output = [];
    // out of bounds ex
    if (x >= size || y >= size || x < 0 || y < 0) {
        return output;
    }

    // checking the edges of the grid so we don't return excess data that is not needed and results in errors
    // on the right-most side
    if (x + 1 === size) {
        if (y + 1 === size) {
            // in the top corner
            output = [
                [x - 1, y],
                [x, y - 1],
            ];
            return output;
        } else if (y - 1 < 0) {
            // in the bottom corner
            output = [
                [x, y + 1],
                [x - 1, y],
            ];
            return output;
        } else {
            // in the middle
            output = [
                [x, y + 1],
                [x - 1, y],
                [x, y - 1],
            ];
            return output;
        }
        // on the left-hand side
    } else if (x - 1 < 0) {
        if (y + 1 === size) {
            // in the top corner
            output = [
                [x + 1, y],
                [x, y - 1],
            ];
            return output;
        } else if (y - 1 < 0) {
            // in the bottom corner
            output = [
                [x, y + 1],
                [x + 1, y],
            ];
            return output;
        } else {
            // in the middle
            output = [
                [x, y + 1],
                [x + 1, y],
                [x, y - 1],
            ];
            return output;
        }
    } else {
        if (y + 1 === size) {
            // on the top
            output = [
                [x + 1, y],
                [x - 1, y],
                [x, y - 1],
            ];
            return output;
        } else if (y - 1 < 0) {
            // on the bottom
            output = [
                [x, y + 1],
                [x + 1, y],
                [x - 1, y],
            ];
            return output;
        } else {
            // in the midle of the grid
            output = [
                [x, y + 1],
                [x + 1, y],
                [x - 1, y],
                [x, y - 1],
            ];
            return output;
        }
    }
}
