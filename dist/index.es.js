import { defineComponent, ref, computed, onMounted, h, createCommentVNode } from 'vue';

// client only component
// render the placeholder slot on SSR
// you can manually control exactly when to show the component by the isShow prop
var index = defineComponent({
    props: {
        isShow: {
            type: Boolean,
            "default": undefined
        }
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var isMounted = ref(false);
        var isShowDefaultSlot = computed(function () {
            if (props.isShow === undefined)
                return isMounted.value;
            return !!props.isShow && isMounted.value;
        });
        onMounted(function () {
            isMounted.value = true;
        });
        var defaultVnode = slots["default"] ? h(function () { return slots["default"](); }) : createCommentVNode('Client only rendering with empty default slot');
        var placeholderVNode = slots.placeholder ? h(function () { return slots.placeholder(); }) : createCommentVNode("Client only rendering component placeholder");
        return function () { return isShowDefaultSlot.value ? defaultVnode : placeholderVNode; };
    }
});

export { index as default };
