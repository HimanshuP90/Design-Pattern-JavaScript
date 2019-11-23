/**
 * Get the URL parameters
 * source: https://css-tricks.com
 * @param  {String} url The URL
 * @return {Object} The URL paramters
 */

const getParams = (url) => {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1) // "sandwhich=chicken%20salad&bread=wheat"
    let vars = query.split('&'); // ["sandwhich=chicken%20salad", "bread=wheat"]
    for (let i = 0; i < vars.length; i++) {
        var pairs = vars[i].split('='); //["sandwhich", "chicken%20salad"]
        params[pairs[0]] = decodeURIComponent(pairs[1]); //{sandwhich: "chicken salad", bread: "wheat"}
    }
    return params;
}

// Get parameters from a URL string
const url = 'https://gomakethings.com?sandwhich=chicken%20salad&bread=wheat';
console.log(getParams(url)); // or window.location.href