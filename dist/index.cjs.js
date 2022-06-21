'use strict';

var vue = require('vue');

// client only component
// render the placeholder slot on SSR
// you can manually control exactly when to show the component by the isShow prop
var index = vue.defineComponent({
    props: {
        isShow: {
            type: Boolean,
            "default": undefined
        }
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var isMounted = vue.ref(false);
        var isShowDefaultSlot = vue.computed(function () {
            if (props.isShow === undefined)
                return isMounted.value;
            return !!props.isShow && isMounted.value;
        });
        vue.onMounted(function () {
            isMounted.value = true;
        });
        var defaultVnode = slots["default"] ? vue.h(function () { return slots["default"](); }) : vue.createCommentVNode('Client only rendering with empty default slot');
        var placeholderVNode = slots.placeholder ? vue.h(function () { return slots.placeholder(); }) : vue.createCommentVNode("Client only rendering component placeholder");
        return function () { return isShowDefaultSlot.value ? defaultVnode : placeholderVNode; };
    }
});

module.exports = index;
