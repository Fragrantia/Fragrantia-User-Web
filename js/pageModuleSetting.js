function loadModule(element) {
    let targetElement = '#' + element;

    let css = '../../css/module/' + element + '.css';
    let html = '../../html/module/' + element + '.html';

    if (element.includes("sidebar"))
        css = '../../css/module/sidebar.css';

    $.get(css, function (data) {
        $('head').append('<style class="' + element + '" >' + data + '</style>');
        $(targetElement).load(html);
    });
}

$(function () {
    loadModule('header')
    loadModule('footer')

    if (document.title.toLowerCase().includes("flower")) {
        loadModule('sidebarFlower')
        loadModule('topButton')
    }
    if (document.title.toLowerCase().includes("perfume")) {
        loadModule('sidebarPerfume')
        loadModule('topButton')
    }
})
