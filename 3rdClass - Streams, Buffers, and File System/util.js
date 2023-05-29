exports.generateHTML = function (title, body) {
    return `<html><head><title>${title}</title></head><body>${body}</body></html`;
}

exports.message = "I am exported from util.js"