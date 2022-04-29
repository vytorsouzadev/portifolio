import * as Axios from "axios";

const tempData=[
    {author:'Joao Ribas Silva'}
]

export class AppService{

    static privacyPolicy='';

    static getPrivacyPolicy(){
        let dataUrl = 'localhost:8000/privacy-policy'
        return Axios.get(dataUrl);
    }
    static teste(){
        //const url = 'https://minhaapi.com/api/articles';
        //const url = 'https://minhaapi.com/privacy-policy';
        Axios({
            method: 'get',
            url: url,
            data: {},
            //headers:headTest
            //ResponseType:'xhtml/json',
            //headers:headers
          });
          return tempData
    }

}