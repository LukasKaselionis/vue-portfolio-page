/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
export default {
    bind: function (el) {
        window.addEventListener('scroll', showOnScroll.bind(el));
    },

    unbind: function () {
        window.removeEventListener('scroll', showOnScroll);
    }
}

// config
const startPosition = 200;

// helper function
function showOnScroll() {
    if (window.scrollY < startPosition) {
        this.style.opacity = 0;
        this.style.pointerEvents = 'none';
    } else {
        this.style.opacity = 1;
        this.style.pointerEvents = 'auto';
    }
}
