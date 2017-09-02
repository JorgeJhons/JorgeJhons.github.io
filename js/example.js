/**
 * Main application namespace
 * @namespace app
 */
var app = window.app || {};

/**
 * Check resolution
 * @memberof app
 */
app.checkResolution = function () {
    if (Math.min(window.innerWidth, window.innerHeight) < 550) {
        $('meta[name="viewport"]')
            .attr('content', 'width=550, user-scalable=no');
    }
};


/**
 * Constellation
 * @memberof app
 */
app.constellation = function () {
    $(window).on('load resize orientationchange', function (e) {
       $('canvas').constellation({
           length: Math.round(window.innerHeight / 5)
       });
    });
};


/**
 * Init method
 * @memberof app
 */
app.init = function () {
    this.checkResolution();
    this.constellation();
};

/**
 * Initializes the application
 */
app.init();