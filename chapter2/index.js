// child cmp parts
var counterButton = Vue.extend({
    template: '<span>{{ counter }}個 <button v-on:click="addToCart">追加</button></span>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        addToCart: function () {
            this.counter += 1
            this.$emit('increment') // incrementカスタムイベントの発火
        }
    },
})

// child cmp
new Vue({
    el: '#fruits-counter',
    components: {
        'counter-button': counterButton
    },
    data: {
        total: 0,
        fruits: [
            { name: '梨' },
            { name: 'いちご' }
        ]
    },
    methods: {
        incrementCartStatus: function () {
            this.total += 1
        }
    }
})

// another cmp
Vue.component('list-item', {
    template: '<li>foo</li>',
    data: function () {
        return { content: 'bar' }
    }
})

new Vue({ el: '#example' })
