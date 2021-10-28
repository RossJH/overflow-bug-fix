var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);

//Add this to console and hit enter it will usually show what element is causing overflow. 
//https://www.smashingmagazine.com/2021/04/css-overflow-issues/
