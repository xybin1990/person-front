<template>
    <div class="main">
        <div class="content">
            <div class="item">
                <label for="name">姓名:</label>
                <input type="text" id="name" v-model="name" placeholder="输入用户名">
            </div>
            <div class="item">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" placeholder="输入密码">
            </div>
            <button @click="login">登录</button>
        </div>
    </div>
</template>
<style scoped>
.main::after{
    content: "";
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgb(241, 241, 241);
}
.main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.content{
    width: 80%;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
}
.item{
    line-height: 50px;
    display: flex;
}
label{
    display: inline-block;
    white-space: nowrap;
    margin-right: 10px;
}
input{
    border: none;
    width: 100%;
}
button{
    background: #7692F3;
    border-radius: 4px;
    border: none;
    color: #fff;
    width: 100%;
    line-height: 50px;
    font-size: 17px;
    margin-top: 20px;
}
</style>
<script>
export default{
    name: "home",
    data(){
        return {
            name: "",  //用户名
            password: "",  //密码
        }
    },
    created(){
    },
    mounted(){
        
        let _this = this;
       
        // this.$axios.post("/api/per-app/count",{name:'xieyuanbin'}).then((response)=>{
        //     console.log(response);
        // })
        
    },
    components: {
    },
    computed: {
    },
    methods: {
        login(){
            if (this.name === "") return false;
            if (this.password === "") return false;

            console.log("login...");
            alert("恭喜,登录成功")
            /*
            this.$axios.post("/api/per-app/login",{}).then((response)=>{
                console.log(response);
            });
            */
        }
    }
}



</script>
