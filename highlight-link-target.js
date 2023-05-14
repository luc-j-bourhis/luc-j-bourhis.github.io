// Install callbacks to manage highlighting of bibliography items
document.addEventListener('DOMContentLoaded', (e) => {
    // Install a callback reacting to the end of an animation
    // on a target anchor
    document.querySelectorAll('*:not([href])[id]').forEach((a) => {
        a.addEventListener('animationend', () => {
            a.classList.remove('__highlighted__')
        })
    })

    // Install a callback reacting to a click on an anchor pointing
    // to a target on the page
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            var idx = a.href.split('#')[1]
            var target = document.getElementById(idx)
            target.classList.add('__highlighted__')
        })
    })
});
