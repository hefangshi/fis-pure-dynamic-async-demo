/**
 * 此处需要声明 require.async所有的可能值
 * @require.async page/A/A
 * @require.async page/B/B
 * @require.async page/C/C
 */

module.exports = {
    initRoute: function () {
        function renderPage() {
            var route = window.location.hash.replace(/^#/, '') || 'A';
            var pageModule = ['page', route, route].join('/')
            require.async(pageModule, function (page) {
                page.render(document.getElementById('main'));
            });
        }

        window.addEventListener('hashchange', renderPage);

        renderPage();
    }
}
