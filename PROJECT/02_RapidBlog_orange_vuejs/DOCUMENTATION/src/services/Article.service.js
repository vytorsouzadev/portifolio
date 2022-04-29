import * as Axios  from 'axios';


const tempData=[
    {author:'Joao Ribas Silva', title:'How to Developer actions in Tecnology DAYS ?', date:'25/13/2025 16:47 PM', imgurl:'https://s3.amazonaws.com/freestock-prod/450/freestock_1536495554.jpg', description:'If you Wants Talks about tecnology you have a new notablePost and yout have more option for have apresentable account where peoples have newspaper!',category:'AboutThis'}
]

export class Article{

    static Article=[];
    static Articles = [];
    static API_URL='https://minhaapi.com'
    static URL_GET_ALL='https://minhaapi.com/api/articles?fields=title,author,description,category,date'
    static URL_GET_ID='https://minhaapi.com'

    static getId(id){
        /*
        if(!id){
            id=0;
        }
        return Axios({
            method:'get',
            url:`${this.URL_GET_ID}/api/articles/${id}`,
        }).then(
            console.log(this.URL_GET_ID+'/api/articles/')
        )
        */
       console.log(tempData[0])
       return tempData[0]
    }

    static getAll(){
        /*
        return Axios({
            method:'get',
            url:`${this.API_URL}/api/articles?fields=title,author,description,category,date`,
        })
        */
       var newData = [];
       for (let index = 0; index < 15; index++) {
            newData.push(tempData[0])
       }
       return newData;
    }
}