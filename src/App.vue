<template>
    <div class="app-container">

        <!--顶部 Header区域-->
        <mt-header fixed title="Vue+MintUI项目实例"></mt-header>
        <!--中间的路由 router-view区域-->
        <div></div>
        <!--底部 Tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<!--样式的scoped是通过CSS的属性选择器实现的-->
<style scoped>
.app-container{
    padding-top: 40px;
}
</style>
