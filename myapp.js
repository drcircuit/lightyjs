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
            title: "A deeper title",
            items: [{ id: 0, value: "Item 1", img:'img/smile1.png' }, { id: 1, value: "Item 2", img:"img/smile2.png" }, { id: 2, value: "Item 3", img:"img/smile3.png" },],
            numbers: [1,1,2,3,5,8,13,21]
        };
    })
    .render();