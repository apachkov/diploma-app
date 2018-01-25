var Welcome = {
  name: 'Welcome',
  template: `
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
	                  class="form-horizontal welcomePage__registrationForm col-11 col-sm-9 col-md-8">
	              <div class="form-group">
	                <label for="inputEmail">Your email:</label>
	                <input type="email" class="form-control welcomePage__registrationForm-email" id="inputEmail" aria-describedby="emailHelp" placeholder="Please enter your email">
	              </div>
	              <div class="form-group">
	                <label for="inputPassword">Your password:</label>
	                <input type="password" class="form-control welcomePage__registrationForm-pass" id="inputPassword" placeholder="Please enter your password">
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
	    
	    <section class="profile"></section>
	    <section class="addTask"></section>
	    <section class="editTask"></section>
    </div> 
  `,
  methods: {
  	toDashboard: function() {
  		this.$router.push({ name: 'dashboard' });
  	}
  }
};