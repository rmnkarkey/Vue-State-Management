<template>
  <div id="app">
  	<navig></navig>
  	<!-- <About></About>
  	<WeDo></WeDo>
  	<testimon></testimon>
  	<team></team>
  	 -->
  	<router-view></router-view>
  </div>
</template>

<script>
import navig from './components/navigation.vue';
//import Home from './components/home.vue';
/*import About from './components/about.vue'
import WeDo from './components/wedo.vue'
import testimon from './components/textimonal.vue'
import team from './components/team.vue'
*/
export default {
  name: 'app',
  components:{navig}
  
}
</script>

<style>

</style>
