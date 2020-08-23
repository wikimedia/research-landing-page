(function (window) {
    if (window.document.head && 'Promise' in window) {

        var html = window.document.documentElement;

        if (window.sessionStorage.getItem('fontsLoaded')) {
            html.classList.add('fonts-loaded');
        } else {
            var script = window.document.createElement('script');
            script.src = './js/vendor/fontfaceobserver/fontfaceobserver.standalone.js';

            script.onload = function () {
                var sansSerif = new window.FontFaceObserver('Lato');
                var serif = new window.FontFaceObserver('Charter');

                Promise.all([
                    sansSerif.load(),
                    serif.load()
                ]).then(function () {
                    html.classList.add('fonts-loaded');
                    window.sessionStorage.setItem('fontsLoaded', 1);
                });
            };
            window.document.head.appendChild(script);
        }
    }
}(window));
