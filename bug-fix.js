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


[].forEach.call($$("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) })
