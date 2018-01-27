<template>
	<div>
	  <section class="welcomePage align-items-center">
	        <div class="container welcomePage__container">
	          <div class="row justify-content-center">
	            <h2 class="welcomePage__header col-11 col-sm-9 col-md-8 ml-auto mr-auto textCenter">
	              Welcome to Todo app
	            </h2>
	            <div class="welcomePage__discr col-11 col-sm-9 col-md-8 ml-auto mr-auto textCenter">
	              Please enter your data and press “start” button
	            </div>
	      
	            <form action="#"
	                  v-on:submit.prevent="toDashboard"
	                  class="form-horizontal welcomePage__registrationForm col-11 col-sm-9 col-md-8"
	                  novalidate>
	              <div class="form-group">
	                <label for="inputEmail">Your email:</label>
	                <input type="email"
		                  class="form-control welcomePage__registrationForm-email"
		                  id="inputEmail"
		                  aria-describedby="emailHelp"
		                  v-model="email"
		                  :class="{ error: isFormSubmitted && !isEmailValid }"
		                  placeholder="Please enter your email"
		                  required>
	              </div>
	              <div class="form-group">
	                <label for="inputPassword">Your password:</label>
	                <input type="password"
		                  v-model="password"
		                  :class="{ error: isFormSubmitted && !isPasswordValid }"
		                  class="form-control welcomePage__registrationForm-pass"
		                  id="inputPassword"
		                  placeholder="Please enter your password">
	              </div>
	              <div class="alert welcomePage__registrationForm-alert" role="alert">
	                Invalid input data
	              </div>
                  <div class="textCenter">
	              	<button type="submit"
	              	        class="btn btn-lg welcomePage__registrationForm-pinkButton text-uppercase col-sm-5">Start</button>
	              </div>
	            </form>
	          </div>
	        </div>  
	    </section>
    </div>
</template>

<script>
	export default {
	  name: 'Welcome',
	  data: function() {
	  	return {
	  		email: '',
	  		password: '',
	  		isFormSubmitted: false
	  	}
	  },
	  computed: {
	  	isEmailValid: function() {
	  		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
	  		                                      // validation email
	  	},
	  	isPasswordValid: function() {
	  		return /^.{5,}$/.test(this.password); // validation password (5 or more characters)
	  	}
	  },
	  methods: {
	  	toDashboard: function() {
	  		this.isFormSubmitted = true;
	  		if (!this.isEmailValid && !this.isPasswordValid) return;

	  		this.$router.push({ name: 'dashboard' });
	  	}
	  }
	};
</script>

<style>
	.error {
		border-color: red !important;
	}
</style>