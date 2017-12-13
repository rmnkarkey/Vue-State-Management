
<template>
	<div>
		<div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
    <div class="testimonial4_header">
      <h4>T<u style="color: red">estimonia</u>l</h4>
    </div>
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <div class="testimonial4_slide">
          <div class="col-md-4 col-lg-4">
            <img src="image/men2.jpg" class="img-circle img-responsive" />
          </div>
          <div class="col-md-8 col-lg-8">
            <p><span class="comma">"</span>
                {{$store.state.keyword}}
              <span class="comma">"</span></p>
          <h4>- {{names}}</h4>
        </div>
        </div>
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
		name:'testimon',
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