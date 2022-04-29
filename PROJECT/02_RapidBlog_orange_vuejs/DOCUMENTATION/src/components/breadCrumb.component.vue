<template>
    <nav class="breadcrumb has-dot-separator mb-2 is-size-6" aria-label="breadcrumbs">
  <ul>
    <li>
        <span class="icon is-small">
            <i class="fas fa-home" aria-hidden="true"></i>
        </span>
            <a href="https://www.rapidblog.tk">RapidBlog</a>
    </li>
    <li>
        <span class="icon is-small">
            <i class="fa-solid fa-money-bill-trend-up"></i>
        </span>
        <a href="https://www.rapidblog.tk/tags/financial">Financial</a>
    </li>
    <li>
        <span class="icon is-small">
            <i class="fa-solid fa-newspaper"></i>
        </span>
            <a href="#">{{category || 'Financial'}}</a>
    </li>
  </ul>
</nav>
</template>

<script>

export default{
    data:function(){
        return{

        }
    },
    props:{
        category:{type:String, required:false}
    }
}

</script>