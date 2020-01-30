//入口文件
import Vue from 'vue';
//导入MUI样式
import './lib/mui/css/mui.css'
//按需导入Mint-UI中的组件
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

import App from './App.vue';

var vm=new Vue({
    el:'#app',
    render:ce=>ce(App)
})
