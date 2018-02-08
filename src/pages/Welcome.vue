<template>
  <div>
    <section class="welcomePage align-items-center section">
        <div class="container welcomePage__container">
          <div class="content">
            <div class="row justify-content-center">
              <h2 class="welcomePage__header header col-11 col-sm-9 col-md-8 ml-auto mr-auto text-center">
                Welcome to Todo app
              </h2>
              <div class="welcomePage__discr col-11 col-sm-9 col-md-8 ml-auto mr-auto text-center">
                Please enter your data and press “start” button
              </div>
        
              <form action="#" 
                    v-on:submit.prevent="toDashboard"
                    class="form-horizontal welcomePage__registrationForm basic-form col-11 col-sm-9 col-md-8">
                <div class="form-group">
                  <label for="inputEmail">Your email:</label>
                  <input type="email" v-model="email" class="form-control welcomePage__registrationForm-email basic-form-text-input" id="inputEmail" aria-describedby="emailHelp" placeholder="Please enter your email">
                </div>
                <div class="form-group">
                  <label for="inputPassword">Your password:</label>
                  <input type="password" v-model="password" class="form-control welcomePage__registrationForm-pass basic-form-text-input" id="inputPassword" placeholder="Please enter your password">
                </div>
                <div class="alert basic-form__alert" role="alert">
                  Invalid input data
                </div>
                <!-- <div class="text-center">
                  <button type="submit" class="btn btn-lg basic-form-button basic-form-button-pink welcomePage__registrationForm-pinkButton col-sm-5">Start</button>
                </div> -->
                <button type="submit" class="btn btn-lg basic-form-button basic-form-button-pink welcomePage__registrationForm-pinkButton col-sm-5" >START</button>
              </form>
            </div>
          </div>
        </div>  
    </section>
  </div> 
</template>

<script>
  import { logIn, errHendler } from '@/services/http.js';

  export default {
    name: 'Welcome',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
    	toDashboard: function() {
        if (!this.email || !this.password) return;

        const sendDate = {
          login: this.email,
          password: this.password
        };

        logIn(sendDate).then((credentials) => {
          localStorage.setItem('credentials', credentials);

          this.$router.push({ name: 'Dashboard' });
          return credentials;
        }).catch(errHendler);      		
    	}
    }
  };
</script>

<style lang="scss">
  @import '../scss/style.scss';
  @import '../scss/welcome.scss';
</style>