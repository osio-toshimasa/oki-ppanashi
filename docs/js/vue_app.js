
let clock = new Vue ({
    el: '#easy_pass',
    data: {
        passwords: [],
        characters: 8,
        is_lower: false
    },
    computed: {

    },
    methods: {
        generate: function() {
            let password = Opal.EasyPasswordMaker.$make(parseInt(this.characters, 10), this.is_lower);
            this.passwords.unshift(password);
        },

        reset: function() {
            this.passwords = [];
        }
    },
    /* Life Cycle Hooks */

    /* 01 */
    beforeCreate: function() {

    },
    /* 02 */
    created: function () {
    },
    /* 03 */
    beforeMount: function() {
    },
    /* 04 */
    mounted: function() {
    },
    /* 05 */
    beforeUpdate: function() {
    },
    /* 06 */
    updated: function() {

    },
    /* 07 */
    beforeDestroy: function() {

    },
    /* 08 */
    destroyed: function() {

    }
});