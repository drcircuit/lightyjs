let lighty = function () {
    let controllers = [];

    function parse(collection, directive, value) {
        return collection.filter(function (i) {
            return [].slice.call(i.attributes).filter(function (a) {
                return a.name.toLowerCase() === directive && (a.nodeValue.toLowerCase() === value.toLowerCase() || a.nodeValue.toLowerCase().includes(value.toLowerCase()));
            }).length > 0;
        })
    }

    function render() {
        controllers.reverse().forEach(function (c) {
            let data = c.func();
            c.view.forEach(function (v) {
                let keys = Object.keys(data);
                let elements = [].slice.call(v.getElementsByTagName("*"));
                keys.forEach(function (k) {
                    let lists = parse(elements, "llist", k);
                    for (let list of lists) {
                        let parent = list.parentNode;
                        parent.removeChild(list);
                        for (let item of data[k]) {
                            let clone = list.cloneNode(true);
                            let els = [clone];
                    
                            if(clone.hasChildNodes()){
                                let c = getChildren(clone);
                                els = els.concat(c);
                            }
                            let text = clone.textContent.split(".");
                            let prefix = text.length > 1 ? text[0].replace("[", "") : "";
                            if (typeof item === "object" && item !== null) {
                                let okeys = Object.keys(item);
                                for (ok of okeys) {
                                    let okk = `${prefix}.${ok}`;
                                    let d = {};
                                    d[okk] = item[ok];
                                    renderVariables(parse, els, okk, d);
                                    renderImages(parse, els, okk, d);
                                }
                            } else {
                                let ok = list.attributes["llist"].value.split(" ")[0];
                                let d = {};
                                d[ok] = item;
                                renderVariables(parse, els, ok, d);
                                renderImages(parse, els, ok, d);
                            }

                            parent.appendChild(clone);
                        }
                    }
                    renderVariables(parse, elements, k, data);
                    renderImages(parse, elements, k, data);
                });
            });
        });
    }

    function addController(id, ctrl) {
        let view = [].slice.call(document.getElementsByTagName("*")).filter(function (e) {
            return [].slice.call(e.attributes).filter(function (a) {
                return a.name.toLowerCase() === "lc" && a.nodeValue === id;
            }).length > 0;
        });
        controllers.push({ id: id, func: ctrl, view: view });
        return lite;
    }

    let lite = {
        render: render,
        r: render,
        controller: addController,
        c: addController
    };

    return lite;
}
function getChildren(e){
    return [].slice.call(e.getElementsByTagName("*"));
}
function renderImages(parse, elements, k, data) {
    let im = parse(elements, "limg", k);
    im.forEach(function (e) {
        e.src = data[k];
    });
}

function renderVariables(parse, elements, k, data) {
    let el = parse(elements, "lb", k).concat(elements.filter(function (e) {
        if (e.childNodes[0]) {
            let a = e.childNodes[0].textContent.trim().toLowerCase();
            let b = "[" + k.toLowerCase() + "]";
            // console.log(elements, e, a, b);
            return a === b;
        }
        return e.textContent.toLowerCase() === "[" + k.toLowerCase() + "]";
    }));
    el.forEach(function (e) {
        if (!e.childNodes[0]) {
            e.textContent = data[k];
            return;
        }
        e.childNodes[0].textContent = data[k];
    });
}
