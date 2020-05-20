import http from './fetch';

let v1 = 'http://127.0.0.1:7001/api/v1'
export default {
    async getIndexData(param){
        let ret = await http.post(`${v1}/goods/getItem`, param);
        return ret;
    }
}