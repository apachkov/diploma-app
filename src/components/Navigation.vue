<template>
  <div class="profile__content-left text-center">
    <div class="row">
      <img class="rounded-circle profile__content-left-avatar mx-auto"
           :src="avatar || '../assets/avatar.png'" alt="avatar">
    </div>
    <div class="row">
      <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">{{ name || 'Alex' }}</p>
    </div>
    <div class="profile__content-left-buttons left-buttons row flex-column">

	  <div class="col-10 col-sm-7 col-md-12 mx-auto"
	  	   v-if="isAddTask">
        <a href="#"
           v-on:click.prevent="toProfile"
           class="left-buttons-button left-buttons-button-darkblue">Settings</a>
      </div>
      
      <div class="col-10 col-sm-7 col-md-12 mx-auto"
      	   v-if="!isAddTask">
        <a href="#"
           v-on:click.prevent="toAddTask"
           class="left-buttons-button left-buttons-button-darkblue">Add Task </a>
      </div>

      <div v-if="!isDashboard"
           class="col-10 col-sm-7 col-md-12 mx-auto">
        <a href="#"
           v-on:click.prevent="toDashboard"
           class="left-buttons-button left-buttons-button-blue">Dashboard</a>
      </div>

      <div v-if="!isProfile && !isAddTask"
           class="col-10 col-sm-7 col-md-12 mx-auto">
        <a href="#"
           v-on:click.prevent="toProfile"
           class="left-buttons-button left-buttons-button-blue">Edit profile</a>
      </div>

      <div class="col-10 col-sm-7 col-md-12 mx-auto">
        <a href="#"
           v-on:click.prevent="toWelcome"
           class="left-buttons-button left-buttons-button-pink">exit</a>
      </div>

    </div>
  </div>
</template>

<script>
	export default {
		name: 'navigation',
		props: {
			isDashboard: {
				type: Boolean,
				default: false
			},
			isProfile: {
				type: Boolean,
				default: false
			},
			isAddTask: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			name: function() { 
				return this.$store.state.profile.name
			},
			avatar: function() { 
				return this.$store.state.profile.avatar
			}
		},
		created: function (){
			this.$store.dispatch('LOAD_PROFILE');
		},
		methods: {
	      toAddTask: function() {
	        this.$router.push({ name: 'AddTask' });
	      },    
	      toProfile: function() {
	        this.$router.push({ name: 'Profile' });
	      },  
	      toDashboard: function() {
	        this.$router.push({ name: 'Dashboard' });
	      }, 
	      toWelcome: function() {
	        localStorage.removeItem('credentials')
	        this.$router.push({ name: 'welcome' });
	      }
		}
	}
</script>