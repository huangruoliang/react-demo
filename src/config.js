import axios from 'axios'
import {Toast} from 'antd-mobile'

axios.interceptors.request.use(
    config => {
        console.log(232)
        Toast.loading('加载中',0)
        return config;
    }   
  );

// http response 拦截器

axios.interceptors.response.use(
    config => {
        Toast.hide()
        return config;
    }
    );