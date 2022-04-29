<template>
    <div class="card is-hidden-mobile" style="font-family: sans-serif;text-transform: capitalize;">
        <header _ngcontent-nul-c8="" class="card-header is-primary" style="background-color: #fc4617;">
            <p _ngcontent-nul-c8="" class="card-header-title is-size-5 has-text-white"> Categories </p>
        </header>
        <div _ngcontent-nul-c8="" class="card-content">
            <div _ngcontent-nul-c8="" class="content">
                <p class="is-hidden">
                    <a href="category.html">Some Category</a>
                </p>
                <p v-for="(item, index) in categoryList" :key="index">
                    <router-link :to="'/category/'+index">{{item}}</router-link>
                </p>
            </div>
        </div>    
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                categoryList:[
                    'Financial',
                    'stocks',
                    'new Businnes',
                    'investing',
                    'best companys'
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    a {color: #fc4617!important;}
</style>