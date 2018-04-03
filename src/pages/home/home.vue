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
       
        this.$axios.post("/api/per-app/count",{name:'xieyuanbin'}).then((response)=>{
            console.log(response);
        })
        
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
}



</script>
