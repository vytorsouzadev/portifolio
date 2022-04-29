<template>
    <div class="box">
		<BreadCrumb :category="data.category" />
	      <!-- box header -->
	      <div class="box-header">
		<h4 id="title-post" class="title is-4 mb-1 message is-light p-2">
		  {{data.title}}
		  <span class="labels is-pulled-right is-hidden">
		    <a href="label.html">Label 3</a>
		  </span>
		</h4>		
		<small>Posted by <a>{{data.author}}</a> at {{data.date}}</small>
	      </div>
	      <!-- end of box header -->
	      <!-- box content -->
	      <div class="box-content">
		<div class="columns">
		  <div class="column is-4 mt-3">
		    <img :src="data.imgurl">
		  </div>
		  <div class="column">
		    <div class="box-content-text">
		      <p>{{data.description}}</p>
		    </div>
		    <div class="has-text-right is-hidden">
		      <a class="button is-small" :href="'/post/'+'1'">Read More</a>
		    </div>
		  </div>
		</div>
	      </div>
	      <!-- end box content -->
	    </div>
</template>

<script>

import BreadCrumb from './breadCrumb.component.vue';
	export default{
		components:{
			BreadCrumb
		},
		props:{
			data:{type:Object, required:false}
		}
	}
</script>

<style scoped lang="scss">
    a {color: #fc4617!important;}
	#title-post{
		font-family: 'bebas', sans-serif;
	}
</style>