
// font face

document.head.appendChild(newStyle);

function select() {
    var sl = el('select').id('selectdata').class("form-control")
        .child(
            el('option').text('pilih data').val('').get()
        );
    for (var i = 0; i < 9; i++) {
        sl.child(
            el('option').text('data' + (i + 1)).val('nilai' + (i + 1)).get()
        );
    }
    return sl
}
var getVal = delay(function () {
    console.log(this.value);
}, 1000);

function cek() {
    var c = document.getElementById('halo');
    console.log(c);
}
function domPlace(a, ch) {
    var domp = document.getElementById(a);
    if (domp != null) {
        var parent = domp.parentNode;
        parent.replaceChild(ch, domp);
    } else {
        domp.appendChild(ch);
    }
}
function pushDomp(a, fun) {
    var lodas = document.body.appendChild(a);
    if (lodas) {
        fun()
    };
}


function showbar() {
    $('.navbar-collapse').collapse('toggle');
}

var cssTop = {
    marginTop: "-20px"
}

function menu() {
    Array.from(document.querySelectorAll('.nav a')).forEach(function(elm){
        elm.style.color = "#777";
    })
    this.style.color = "black";
    var cek = this.getAttribute('page');
    if (cek == "Home") {
        domPlace("pageid", homePage);
    } else if (cek == "About") {
        domPlace("pageid", About);
    } else if (cek == "Contact") {
        domPlace("pageid", contact);
    } else if (cek == "Product") {
        domPlace("pageid", product);
    }
}

function iconzome() {
    this.style.fontSize = "20px";
}
function iconmize() {
    this.style.fontSize = "14px";
}


var nav = div().class("navbar navbar-default navbar-fixed-top")
    .css("margin", "0")
    .css("background", "transparent")
    .css("border", "none")
    .css("padding", "0 100px")
    .child(
        div().class("container-fluid")
            .child(
                div().class("navbar-header")
                    .child(
                        btn().type("button").class("navbar-toggle collapsed").click(showbar)
                            .attr("data-toggle", "collapse")
                            .attr("data-target", "#bs-exampled-navbar-collapse-1")
                            .attr("aria-expanded", "false")
                            .child(
                                span().class("sr-only").text("Toggle navigation").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .get()
                    )
                    .child(
                        a().class("navbar-brand").href("#")
                            .html(
                                "<i class='fa fa-mug-hot'></i> Choco Shake"
                            )
                            .css("font-size", "20px")
                            .css("fontFamily", "baloo")
                            .css("color", "white")
                            .get()
                    ).get()
            ).child(
                div().class("collapse navbar-collapse").child(
                    ul().class("nav navbar-nav navbar-right")
                        .child(
                            li().child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Home")
                                    .attr("page", "Home")
                                    .css("color", "black").click(menu).get()
                            ).get()
                        )
                        .child(
                            li()
                            .css("margin", "0 10px")
                            .child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Product")
                                    .css("color", "#777")
                                    .attr("page", "Product")
                                    .click(menu).get()
                            ).get()
                        )
                        .child(
                            li()
                            .css("margin", "0 10px")
                            .child(
                                a().mouseover(iconzome).mouseout(iconmize).href("#").text("About")
                                    .css("color", "#777")
                                    .attr("page", "About")
                                    .click(menu).get()
                            ).get()
                        )
                        .child(
                            li()
                            .css("margin", "0 10px")
                            .child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Contact")
                                    .css("color", "#777")
                                    .attr("page", "Contact")
                                    .click(menu).get()
                            ).get()
                        )
                        .child(
                            li()
                            .css("margin", "0 10px")
                            .child(
                                a().mouseover(iconzome).mouseout(iconmize).child(
                                    icon("fa fa-search").css("fontSize", "14px").mouseover(iconzome).mouseout(iconmize).get()
                                ).click(menu).get()
                            ).get()
                        )
                        .get()
                ).get()
            ).get()
    ).get();

