export default {
    bind: function (el) {
        window.addEventListener('scroll', noShowScroll.bind(el));
    },

    unbind: function () {
        window.removeEventListener('scroll', noShowScroll);
    }
}

const position = 0;

function noShowScroll() {
    if (window.scrollY > position) {
        this.style.opacity = 0;
        this.style.pointerEvents = 'none';
    } else {
        this.style.opacity = 0.6;
        this.style.pointerEvents = 'auto';
    }
}