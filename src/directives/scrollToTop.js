/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
export default {
    bind: function (el) {
        console.log('directive bind');
        window.addEventListener('scroll', showOnScroll.bind(el));
    },

    unbind: function () {
        console.log('directive unbind');
        window.removeEventListener('scroll', showOnScroll);
    }
}

// config
const startPosition = 200;

// helper function
function showOnScroll() {
    if (window.scrollY < startPosition) {
        console.log('was scroll. position: ', window.scrollY, this);
        this.style.opacity = 0;
        this.style.pointerEvents = 'none';
    } else {
        this.style.opacity = 1;
        this.style.pointerEvents = 'auto';
    }
}
