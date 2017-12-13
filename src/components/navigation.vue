<template>
	  <div>
	    <div id="myNavbar" class="nav navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="{name: 'home'}">home</router-link></li>
            <li><router-link :to="{name: 'About'}">about</router-link></li>
            <li><router-link :to="{name: 'WeDo'}">Work</router-link></li>
            <li><router-link :to="{name: 'testimon'}">testimonal</router-link></li>
            <li><router-link :to="{name: 'team'}">Team</router-link></li>
            <li><router-link :to="{name: 'joinTeam'}">Join Team</router-link></li>
          </ul>
        </div>
    </div>
  </div>
</div>
   

</template>

<script>
	export default{
		name:'navig'
	}
</script>