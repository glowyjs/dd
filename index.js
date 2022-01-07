function dump(...data) {
    data.forEach(function(element) {
        console.log(element);
    });
}

function dd(...data) {
    data.forEach(function(element) {
        console.log(element);
    });

    throw "Stopped execution because dd(), use dump() if you want to proceed.";
}

export {dump, dd}