var lighty = function () {
        var controllers = [];

        function parse(collection, directive, value){
            return collection.filter(function(i) {
                return [].slice.call(i.attributes).filter(function(a){
                    return a.name.toLowerCase() === directive && a.nodeValue.toLowerCase() === value.toLowerCase();
                }).length > 0;
            })
        }

        function render() {
            controllers.reverse().forEach(function (c) {
                var data = c.func();
                c.view.forEach(function (v) {
                    var keys = Object.keys(data);
                    var elements = [].slice.call(v.getElementsByTagName("*"));
                    keys.forEach(function (k) {
                        var el = parse(elements, "lb", k).concat(elements.filter(function (e) {
                            return e.innerText.toLowerCase() === "[" + k.toLowerCase() + "]";
                        }));
                        el.forEach(function (e) {
                            e.innerText = data[k];
                        });
                        var im = parse(elements, "limg", k);
                        im.forEach(function(e){
                            e.src = data[k];
                        })
                    });
                });
            });
        }

        function addController(id, ctrl){
            var view = [].slice.call(document.getElementsByTagName("*")).filter(function (e) {
                return [].slice.call(e.attributes).filter(function (a) {
                    return a.name.toLowerCase() === "lc" && a.nodeValue === id;
                }).length > 0;
            });
            controllers.push({id: id, func: ctrl, view: view});
            return lite;
        }

        var lite = {
            render: render,
            r: render,
            controller: addController,
            c: addController
        };

        return lite;
    }
;