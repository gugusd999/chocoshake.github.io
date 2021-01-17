
function iconOver() {
    this.style.fontSize = "35px";
    this.style.marginTop = "-5px";
}
function iconOut() {
    this.style.fontSize = "30px";
    this.style.marginTop = "0";
}

function overbtn(params) {
    this.className = "btn btn-primary";
}
function outbtn(params) {
    this.className = "btn btn-default";
}

function dsm() {
    this.className = "btn btn-default";
    domPlace("pageid", product);
}

var homePage = div().class("row").id("pageid").css("color", "white")
    .child(
        div().class("col-sm-6")
            .child(
                h1().css("fontWeight", "bold")
                    .text("Choco Shake").get()
            )
            .child(
                line()
                .css("width", "250px")
                .css("float", "left")
                .css("border-bottom", "2px solid #fff")
                .get()
            )
            .child(
                div()
                .css("clear", "both")
                .get()
            )
            .child(
                h2()
                    .css("padding", "0")
                    .css("margin", "0")
                    .css("marginTop", "20px")
                    .css("fontWeight", "bold").html("Healty drink").get()
            )
            .child(
                h2()
                    .css("padding", "0")
                    .css("margin", "0")
                    .css("marginTop", "10px")
                    .css("fontWeight", "bold").html("for everyonce").get()
            )
            .child(
                p().css("fontStyle", "italic")
                    .css('fontSize', '15px')
                    .css('marginTop', '20px')
                    .css('line-height', '2')
                    .css('letter-spacing', '2px')
                    .text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis error veniam dolor modi aliquam sit architecto ratione. Illum sapiente dolor nemo eos maxime nisi magni dignissimos optio quaerat earum.").get()
            )
            .child(
                btn().class('btn btn-default')
                .css("margin-top", "38px")
                .css("font-size", "18px")
                .mouseover(overbtn)
                .mouseout(outbtn)
                .text("Our Product").click(dsm).get()
            )
            .child(
                div()
                .css("width", "250px")
                .css("position", "fixed")
                .css("bottom", "25px")
                .css("left", "calc(50% - (250px / 2))")
                    .child(
                        icon('fab fa-whatsapp').mouseover(iconOver).mouseout(iconOut).get()
                    )
                    .child(
                        icon('fab fa-telegram').mouseover(iconOver).mouseout(iconOut).get()
                    )
                    .child(
                        icon('fab fa-instagram').mouseover(iconOver).mouseout(iconOut).get()
                    )
                    .child(
                        icon('fab fa-linkedin').mouseover(iconOver).mouseout(iconOut).get()
                    )
                    .get()
            )
            .get()
    )
    .child(
        div().class("col-sm-6 text-right").child(
            img().src('asset/milkshake/2.png')
                .css("width", "450px")
                .get()
        ).get()
    )
    .get()


function prdt(){
    var gr = div().class("col-sm-4");
    gr.child(
        div().class("panel").css("cursor", "pointer").child(
            div().class("panel-body").child(
                img().src("asset/milkshake/2.png")
                .class("img-responsive").get()
            ).get()
        ).get()
    )
    return gr.get();
}

var product = div().class("row").id("pageid");
    product = product.class("col-sm-12").child(
        h2().text("Product").css("marginBottom", "20px").css("color", "white").get()
    );
    for (let x = 0; x < 3; x++) {
        product = product.child(
            prdt()
        );
    }
    product = product.child(
        div()
            .css("width", "250px")
            .css("position", "fixed")
            .css("bottom", "25px")
            .css("left", "calc(50% - (250px / 2))")
            .css("color", "white")
            .child(
                icon('fab fa-whatsapp').mouseover(iconOver).mouseout(iconOut).get()
            )
            .child(
                icon('fab fa-telegram').mouseover(iconOver).mouseout(iconOut).get()
            )
            .child(
                icon('fab fa-instagram').mouseover(iconOver).mouseout(iconOut).get()
            )
            .child(
                icon('fab fa-linkedin').mouseover(iconOver).mouseout(iconOut).get()
            )
            .get()
    );
    product = product.get();
    