<template>
    <div id="container-privacy-policy">
        <breadCrumbComponent class="is-hidden tags breadcrumb has-background-info-light card py-2 is-small" />
        <header class="notification is-link is-light has-text-centered mt-3" style="text-transform: capitalize;"><h1 _ngcontent-myq-c10="" class="is-size-5 title" style="text-align: center; margin-bottom: -15px;"><u _ngcontent-myq-c10="">Privacy policy</u></h1><br _ngcontent-myq-c10=""><h3 _ngcontent-myq-c10="" class="is-size-5 title"> How do we collect personal data about you? </h3></header>
        <section v-html="body" class="content px-3" style="width: 100vw;" >
            
        </section>
    </div>
</template>

<script>
import breadCrumbComponent from "@/components/breadCrumb.component.vue"
import { AppService } from "../services/App.service";
export default{
    name:'PolicyPrivacy',
    components:{
        breadCrumbComponent
    },
    data:function(){
        return{
            body:''
        }
    },
    created:async function(){
        try {
            //loading
            //let res = await AppService.getPrivacyPolicy();
            let res = await AppService.teste();
            this.body = res.data
            //console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style lang="scss" scoped>
#container-privacy-policy{
    padding: 10px 25px;
}
</style>