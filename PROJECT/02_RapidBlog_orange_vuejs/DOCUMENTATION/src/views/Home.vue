<template>
	<div class="my-3" style="min-height: 380px;">
		<div class="row">
			<section class="col-md-8 col-xs-10">
				<TimeLineComponent/>
			</section>
			<!--section-->
			<anside class="col-3 ml-4">
				<CategoryComponent/>
			</anside>
		</div>
	</div>
</template>

<script>
import TimeLineComponent from '@/components/timeLine.component.vue';
import CategoryComponent from '@/components/category.component.vue';
//services
import { Article } from '../services/Article.service';

export default {
	name: 'Home',
	components: {
		TimeLineComponent,
		CategoryComponent,
	},
	data:function(){
		return{
			
		}
	},
	

}
</script>
