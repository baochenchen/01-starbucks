<template>
    <div class="login-page">
        <div class="phone">
            <input type="number" v-model="phone" maxlength="11" placeholder="手机号码">
        </div>
        <div class="password">
            <input type="password" v-model="password" maxlength="6" placeholder="密码">
        </div>
        <div class="btn">
            <input type="button" @click="toHome"  value="登陆">
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            phone:'',
            password:''
        }
    },
    methods:{
        toHome:function(){

            console.log('toHome');
            
            //发起ajax请求(登陆请求)    
            this.axios.post(
                'http://localhost:3000/api/login', 
                {phone: this.phone,password:this.password } )
            .then((res)=>{
                //console.log(res.data);
                if(res.data.code == 1)//登陆成功
                {
                    //将token存储到localStorage
                    localStorage.setItem('token',res.data.token);

                    //跳转到/home页面
                    this.$router.push('/home');
                }
            })

            

        }
    }
}
</script>
<style scoped >
    .login-page{
        margin: 40px 20px;
    }
    .login-page>div{
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 30px;
    }
    .login-page>div:last-child{
        border-bottom: none;
    }
    .login-page>div input{
        border: none;
        outline: none;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
    }
    .login-page>div input[type='button']{
        width: 100%;
        background-color: #666666;
        color: white;
        text-align: center;
        line-height: 50px;
        height: 50px;
        border-radius: 25px;
    }
</style>