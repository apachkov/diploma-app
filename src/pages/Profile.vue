<template>
  <div>
    <section class="profile section" id="profile">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">Profile</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">
              <navigation :is-profile="true"></navigation>
            </div>
            <div class="col-md-5 offset-md-1">
              <form action="#" @submit.prevent="updateProfile" class="basic-form right-form">
                <div class="form-group row right-form__group">
                  <label for="right-form-name" class="col-10 col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Your name</label>
                  <div class="col-10 col-sm-7">
                    <input type="text" v-model="name" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-name">
                  </div>
                </div>
                <div class="form-group row right-form__group">
                  <label for="right-form-email" class="col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Your email</label>
                  <div class="col-10 col-sm-7">
                    <input type="email" v-model="email" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-email">
                  </div>
                </div>
                <div class="form-group row right-form__group row">
                  <label for="right-form-pass" class="col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Password</label>
                  <div class="col-10 col-sm-7">
                   <input type="password" v-model="password" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-pass">
                  </div>
                </div>        
                <div class="row">
                  <div class="alert basic-form__alert right-form__alert col-sm-10 col-9 " role="alert">
                    Invalid input data
                  </div>
                </div>
                <div class="form-group row right-form__group">
                  <div class="col-10 col-sm-7 offset-md-5 col-xl-7 offset-xl-3">
                    <button type="submit" class="btn btn-lg basic-form-button basic-form-button-pink right-form__group-button">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        name: '',
        avatar: '',
        email: '',
        password: '',
        credentials: {}
      };
    },
    computed: {
      currentName: function() { 
        return this.$store.state.profile.name
      },
      currentAvatar: function() { 
        return this.$store.state.profile.avatar
      },
      currentEmail: function() { 
        return this.$store.state.profile.email
      }
    },
    created() {
      this.$store.dispatch('LOAD_PROFILE').then(() => {
          this.name = this.currentName;
          this.avatar = this.currentAvatar;
          this.email = this.currentEmail;
        });
    },
    methods: {
      updateProfile: function() {
        const sendDate = {
          name: this.name,
          avatar: this.avatar,
          email: this.email
        };

        if (this.password) {
          sendDate.password = this.password;
        }

        this.$store.dispatch('UPDATE_PROFILE', sendDate)
          .then(() => {
            this.$router.push({ name: 'Dashboard' });
          });
      }
    }

  }

</script>

<style lang="scss">
  @import '../scss/style.scss';
  @import '../scss/welcome.scss';
  @import '../scss/dashboard.scss';
  @import '../scss/left-buttons.scss';
</style>