<template>
    <div class="main">
        <div>
            <p>访问统计:</p>
            <p>累计访问量:<span v-text="totalCount"></span></p>
            <p>今日访问量:<span v-text="todayCount"></span></p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default{
    name: "home",
    data(){
        return {
            totalCount: 0,  //累计访问量
            todayCount: 0,  //今日访问量
        }
    },
    created(){
    },
    mounted(){
        
        let _this = this;
        this.$axios.post("stat", {}).then(function (response) {
            //处理
            _this.totalCount = response.data.totalCount;
            _this.todayCount = response.data.todayCount;
        });
        
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
}



</script>
