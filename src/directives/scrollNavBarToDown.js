export default {
    bind: function (el) {
        window.addEventListener('scroll', showOnScroll.bind(el));
    },

    unbind: function () {
        window.removeEventListener('scroll', showOnScroll);
    }
}

const startPosition = 50;

function showOnScroll() {
    if (window.scrollY < startPosition) {
        this.style.opacity = 1;
        this.classList.remove('hidden')
    } else {
        this.style.opacity = 1;
        this.classList.add('hidden');
    }
}