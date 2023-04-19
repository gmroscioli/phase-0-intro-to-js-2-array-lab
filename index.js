const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(cat) {
    let copyCats = cats.slice();
    copyCats.push(cat);
    return copyCats;
}

function prependCat(cat) {
    let copyCats = cats.slice();
    copyCats.unshift(cat);
    return copyCats
}

function removeLastCat() {
    let copyCats = cats.slice();
    copyCats.pop();
    return copyCats
}

function removeFirstCat() {
    let copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}