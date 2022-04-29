<template>
	<div class="box">
		<BreadCrumb :category="data.category" class="has-background-info-light p-4 mt-2" />
	      <!-- box header -->
	      <div class="box-header">
		<h4 id="title-post" class="title is-2 mb-2 message is-light px-2 pb-2 ">
		  {{data.title}}
		  <span class="labels is-pulled-right is-hidden">
		    <a href="label.html">Label 3</a>
		  </span>
		</h4>		
		<small>Posted by <a>{{data.author}}</a> at {{data.date}}</small>
		<p> <strong>AUTHOR: </strong> {{data.author}} - <strong>CAT</strong>: {{data.category}}</p>
	      </div>
	      <!-- end of box header -->
	      <!-- box content -->
	      <div class="box-content mt-2">
			  <div class="row">
				  <div v-html="data.post" class="col-xs-12 col-md-8 box py-5">
					  
				  </div>
				  <div class="col-3 mr-1 is-hidden-mobile">
					 <CategoryComponent/> 
				  </div>
			  </div>
	      </div>
	      <!-- end box content -->
		  <div>
			  
		  </div>
	    </div>
</template>

<script>
import CategoryComponent from '@/components/category.component.vue';
import BreadCrumb from '@/components/breadCrumb.component.vue';
import { Article as ArticleService } from '@/services/Article.service.js';

export default {
	name: 'Home',
	components: {
		CategoryComponent,
		BreadCrumb,
		
	},
	data:function(){
		return{
			id:0,
			data:{}
		}
	},
	methods:{
		getId(){
			const myId=$route.params.id;
			if(myId){
				this.id=myId;
			}
		}
	},
	created:async function(){
		const myId= this.$route.params.id
		//console.log('Rota: ',this.$route.params.id)
		if(myId){
			
			this.id=myId;
			try {
				let get = await ArticleService.getId(myId);
				this.data=get.data;
				//console.log(get.data)
			} catch (error) {
				//console.log(error)
			}
		}
	}
	
}
</script>
