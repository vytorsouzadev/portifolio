<template>
	<div style="min-height: 600px;">
		<HeaderComponent/>
		<NavComponent />
		<transition mode="out-in">
			<router-view/>
		</transition>
		<PrivacyPolicyComponent/>
		<FooterComponent/>
	</div>
</template>

<script>
import NavComponent from '@/components/nav.component.vue';
import HeaderComponent from '@/components/header.component.vue';
import FooterComponent from '@/components/footer.component.vue';
import PrivacyPolicyComponent from '@/components/privacy-policy.component.vue';
	export default{
		components:{
			NavComponent,
			HeaderComponent,
			PrivacyPolicyComponent,
			FooterComponent
		}
	}
</script>

<style scoped lang="scss">
//transition
.v-enter-active,.v-leave-active {
	transition: opacity 0.3s ease-in-out;
}
.v-enter-from,.v-leave-to {
	opacity: 0;
}
</style>
