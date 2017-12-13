<template>
	<div id="do" class="do">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
        	<br>
        	<label><h3>Names:</h3></label>
        	<input type="text" v-model="Name">
        	<br>
        	<label><h3>Password:</h3></label>
        	<input type="password" v-model="pass">
        	<br>
        	<button type="button" @click="SendMe">
        		Click ME
        	</button>
     	</div>
    </div>
  </div>    

	</div>
</template>

<script>	
import {mapState} from 'vuex'
	export default{
		name:'JoinTeam',
		data(){
			return{
				Name:'',
				pass:''
			}
		},
		methods:{
			SendMe(){
				if(this.Name==this.$store.state.names && this.pass==this.$store.state.password){
					alert('welcome');
					window.location="/"

				}
				else{
					alert("you arent authorized")
					this.Name='',
					this.pass=''
				}
			}
		},
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

<style scopped>
	.row{
		height:500px;
	}
</style>