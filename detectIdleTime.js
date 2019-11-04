let warningTimer;

function userIdleTime() {
    console.log('logout and redirect and use to login page');
}

function resetIdleTimeout() {
    clearTimeout(warningTimer);
    warningTimer = setTimeout(userIdleTime, 600000); // 10 minute
}

export default () => {
    const events = [
        'load',
        'mousemove',
        'mousedown',
        'keypress',
        'keyup',
        'change',
        'click',
        'scroll',
        'DOMMouseScroll',
        'mousewheel',
        'touchmove',
        'touchstart'
    ];
    if (window) {
        events.forEach(evt => {
            window.addEventListener(evt, resetIdleTimeout, false);
        });
    }
};
