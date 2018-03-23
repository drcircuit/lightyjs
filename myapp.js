lighty()
    .controller("logoController", function () {
        console.log("this is the logo controller");
        return {
            title: "LightyJS",
            subtitle: "A lightweight MVC framework",
            description: "Written to show you that you do not always need a framework!",
            logo: "img/logo.png"
        }
    })
    .c("listController", function () {
        return {
            title: "A deeper title"
        };
    })
    .render();