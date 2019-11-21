/**
 * console.log(navigator.userAgent)
 * "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36"
 * 
 * indexOf(value) : return the position of the first occurence of specified value in a string, if no value to search return -1
 */

let OSName = 'Unknown OS, Please check another one';
if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";

console.log('OS name: ', OSName);

function handleClick(e) {
    console.log('clicked');
    return false
}



