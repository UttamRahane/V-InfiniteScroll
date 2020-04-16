import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
    inserted(el, binding, node: any) {
        const callback = binding.value;
        const fun = () => {
            const visible = node.elm.scrollTop;
            const pageHeight = node.elm.scrollHeight;
            const limit = (pageHeight / 100) * 90; // 90% of page height
            if (visible > limit) {
                callback();
            }
        };
        el.addEventListener('scroll', fun);
    },
};

export default directive;
