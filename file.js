function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}


function el(el) {
    var obj = {}
    obj.el = document.createElement(el);
    obj.ch = [];
    obj.id = function (a) {
        this.el.id = a;
        return this;
    }
    obj.text = function (a) {
        this.el.innerText = a;
        return this;
    }
    obj.html = function (a) {
        this.el.innerHTML = a;
        return this;
    }
    obj.name = function (a) {
        this.el.setAttribute('name', a);
        return this;
    }
    obj.href = function (a) {
        this.el.setAttribute('href', a);
        return this;
    }
    obj.val = function (a) {
        this.el.value = a;
        return this;
    }
    obj.css = function (a, b) {
        if (typeof a == "object") {
            var ky = Object.keys(a);
            ky.forEach(function(item){
                this.el.style[item] = a[item];
            },this)
            return this;
        }else{
            this.el.style[a] = b;
            return this;
        }
    }
    obj.change = function (func) {
        this.el.addEventListener('change', func, false);
        return this;
    }
    obj.keydown = function (func) {
        this.el.addEventListener('keydown', func, false);
        return this;
    }
    obj.mouseover = function (func) {
        this.el.addEventListener('mouseover', func, false);
        return this;
    }
    obj.mouseout = function (func) {
        this.el.addEventListener('mouseout', func, false);
        return this;
    }
    obj.keypress = function (func) {
        this.el.addEventListener('keypress', func, false);
        return this;
    }
    obj.click = function (func) {
        this.el.addEventListener('click', func, false);
        return this;
    }
    obj.keyup = function (func) {
        this.el.addEventListener('keyup', func, false);
        return this;
    }
    obj.src = function (a) {
        this.el.setAttribute('src', a);
        return this;
    }
    obj.placeholder = function (a) {
        this.el.setAttribute('placeholder', a);
        return this;
    }
    obj.class = function (a) {
        if (this.el.className != "") {
            this.el.className += ' ' + a;
        } else {
            this.el.className += a;
        }
        return this;
    }
    obj.type = function (a) {
        this.el.setAttribute("type", a);
        return this;
    }
    obj.attr = function (a, d) {
        this.el.setAttribute(a, d);
        return this;
    }
    obj.get = function () {
        if (this.ch.length != 0) {
            this.ch.forEach(function (item) {
                this.el.appendChild(item)
            }, this)
            return this.el;
        } else {
            return this.el;
        }
    }
    obj.child = function (a) {
        this.ch.push(a);
        return this;
    }
    return obj;
}

var newStyle = document.createElement('style');
newStyle.appendChild(
    document.createTextNode("\
    @font-face {\
        font-family: arima;\
        src: url('font/arima-madurai/ArimaMadurai-Black.ttf');\
    }\
    @font-face {\
        font-family: baloo;\
        src: url('font/baloo/Fonts/Baloo-Regular.ttf');\
    }\
    ")
);


function a() {
    return el('a').css("font-family", "arima")
    .css('transition', '0.3s')
}
function img() {
    return el('img');
}
function label() {
    return el('label').css("font-family", "arima").css("fontSize", "16px");
}
function div() {
    return el('div');
}
function p() {
    return el('p');
}
function line() {
    return el('hr')
        .css("padding", "0")
        .css("margin", "0")
}
function h1() {
    return el('h1').css("font-family", "baloo");
}
function h2() {
    return el('h2').css("fontFamily", "arima");
}
function h3() {
    return el('h3');
}
function h4() {
    return el('h4');
}
function h5() {
    return el('h5');
}
function h6() {
    return el('h6');
}
function input() {
    return el('input');
}
function btn() {
    return el('button');
}
function ul() {
    return el('ul');
}
function li() {
    return el('li');
}
function span() {
    return el('span');
}
function i() {
    return el('i');
}
function icon(a) {
    return i().class(a)
        .css('cursor', 'pointer')
        .css('fontSize', '30px')
        .css('marginRight', '10px')
        .css('marginLeft', '10px')
        .css('transition', '0.5s')
}