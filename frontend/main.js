const { createApp } = Vue;

createApp({
    data() {
        return {
            discDetails: [],
        };
    },

    methods: {
        getDiscs() {
            axios.get("../api/get-discs.php")
                .then((response) => {
                    this.discDetails = response.data;
                });
        }
    },
    created() {
        this.getDiscs();
    }
}).mount("#app");

