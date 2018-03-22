<template>
    <div class="main">
        <p v-text="msg"></p>
    </div>
</template>
<style lang="stylus" scoped>
    .main {
        font-size: 24px;
    }

</style>
<script>


    export default{
        created(){
            document.title = "首页";
        },
        mounted(){
            
            let _this = this;
            this.$axios.post("test", {}).then(function (response) {
                //处理
                console.log(response);
            });
            
        },
        data(){
            return {
                msg: "7894561230"
            }
        },
        components: {
        },
        computed: {
        },
        methods: {
        }
    }



</script>
