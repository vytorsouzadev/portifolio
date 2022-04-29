<template>
    <div class="mx-2">
        <div class="">
            <div v-for="(post, index) in AllArticles" :key="index">
					<CardTimeLine :data="AllArticles[index]" class="my-4 mx-3"/>
				</div>
				
        </div>
    </div>
</template>

<script>
    import CardTimeLine from '@/components/cardTimeLine.component.vue';
    import { Article } from '../services/Article.service';
    export default{
        components:{
            CardTimeLine
        },
        data:function(){
            return{
                AllArticles:[]
            }
        },
        created:async function(){
		try {
			
			const all = await Article.getAll();
			console.log(all);
			//this.AllArticles=all.data.data;
			this.AllArticles=all;
			//console.log('Puxei os Dados',this.AllArticles[0])
		} catch (error) {
			
		}
	}
    }
</script>

<style scoped lang="scss">
    a {color: #fc4617!important;}
</style>