<template>
    <div class="mianbao">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in info" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:[]
        }
    },
    watch:{
        $route(){
            this.getRoute()
        }
    },
    methods:{
        getRoute(){
            var arr = this.$route.matched
            let info = []
            arr.forEach(v => {
                info.push(v.meta)
            });
            this.info = info
            }
    },
    mounted(){
        this.getRoute()
    }
}
</script>

<style>
    .mianbao{
        padding-bottom: 10px;
        border-bottom: 1px solid #cccccc;
    }
</style>
