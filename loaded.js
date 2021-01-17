var landing = {
    margin: "0",
    backgroundImage: 'url(asset/bg/bg.jpg.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'norepeat',
    minHeight: "100vh"
}

var modal = div()
    .id('root')
    .name('ola')
    .child(
        nav
    )
    .child(
        div().class('ama').class('jumbotron').id("landing-content").css(landing)
            .child(
                div().class("container").css("padding-top", "50px")
                    .child(
                        homePage
                    )
                    .get()
            )
            .get()
    ).get()
pushDomp(
    div().id('container').child(modal).get(), function () { }
)