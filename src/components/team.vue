<template>
	<div>
		  <div id="team" class="team">
      <div class="container">
        <h3>O<u style="color: red">ur Tea</u>m</h3>
        <div class="row">
          <div class="col-lg-4 col-mg-4 post">
              <div class="teamz">
              <h1>Tony Jaa</h1>
              <h2>CTO,Techiez</h2>
              <img class="img-circle" src="image/malk.jpg">
            </div>
              <p>{{$store.state.keyword}}</p>  
              <a href="#"><image class="image" src="image/pinterest.png"></image></a>
              <a href="#"><image class="image" src="image/fb.png"></image></a>
              <a href="#"><image class="image" src="image/twitter.png"></image></a>   
          </div>


          <div class="col-lg-4 col-mg-4 post">
            <div class="teamz">
              <h1>Jane DOe</h1>
              <h2>CEO,Techiez</h2>
              <img class="img-circle" src="image/lifestyle.jpg">
            </div>
              <p>{{$store.state.nextKeyword}}</p>
              <a href="#"><image class="image" src="image/pinterest.png"></image></a>
              <a href="#"><image class="image" src="image/fb.png"></image></a>
              <a href="#"><image class="image" src="image/twitter.png"></image></a>    
          </div>


          <div class="col-lg-4 col-mg-4 post">
            <div class="teamz">
              <h1>Shane Watson</h1>
              <h2>Developer,Techiez</h2>
              <img class="img-circle" src="image/malk.jpg">
            </div>
              <p>{{$store.state.nextKeyword}}</p>
              <a href="#"><image class="image" src="image/pinterest.png"></image></a>
              <a href="#"><image class="image" src="image/fb.png"></image></a>
              <a href="#"><image class="image" src="image/twitter.png"></image></a>    
          </div>

          <div><div class="col-lg-4 col-mg-4 post">
            <div class="teamz">
              <h3>{{$store.getters.getThis}}</h3>
            <h4>{{$store.getters.getAnother}}</h4>
              <img class="img-circle" src="image/lifestyle.jpg">
            </div>
              <p>{{$store.state.nextKeyword}}</p>
              <a href="#"><image class="image" src="image/pinterest.png"></image></a>
              <a href="#"><image class="image" src="image/fb.png"></image></a>
              <a href="#"><image class="image" src="image/twitter.png"></image></a>    
          </div>
         
            
          </div>
          </div>
        </div>
      </div>

	</div>
</template>

<script>
import { mapState } from 'vuex'
  export default{
    name:'team',
    computed:{
      ...mapState({
        names: state => state.names,
        password: state => state.password
      })
    },
    mounted(){
       this.$store.dispatch('callingMut')
       this.$store.dispatch('callingPassword')
    }
  }
</script>