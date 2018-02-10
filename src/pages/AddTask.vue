<template>
  <div>
	  <section class="addTaskPage profile section" id="addTask">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">{{ $route.params.taskId ? 'Update task' : 'Add task' }}</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">              
              <navigation :is-add-task="true"></navigation>
            </div>
            <div class="col-md-8">
              <form action="#" 
                    v-on:submit.prevent="addTask"
                    class="basic-form right-form">
                <div class="form-group alignItemsCenter row">
                  <label for="taskTitle"
                         class="col-10 col-sm-4 col-xl-3 col-form-label right-form__group-label">{{ $route.params.taskId ? 'Old task title' : 'Task title' }}</label>
                  <div class="col-10 col-sm-6 col-xl-5">
                    <textarea class="form-control basic-form-text-input right-form__group-text-input"
                              id="taskTitle"
                              v-model="title"
                              maxlength="50"
                              rows="1"
                              cols="45"
                              name="text"></textarea>
                  </div>
                </div>
                <div class="form-group alignItemsCenter row">
                  <label for="taskDescription"
                         class="col-sm-4 col-xl-3 col-form-label right-form__group-label">{{ $route.params.taskId ? 'Old task description' : 'Task description' }}</label>
                  <div class="col-10 col-sm-10 col-xl-8">
                    <textarea class="form-control basic-form-text-input right-form__group-text-input"
                              id="taskDescription"                              
                              v-model="description"
                              maxlength="180"
                              rows="10"
                              cols="80"
                              name="text"></textarea>
                  </div>
                </div> 
                <div class="row alignItemsCenter">
                  <div class="alert basic-form__alert right-form__alert col-sm-10 col-9"
                       :class="{ 'basic-form__alert--active': isSubmitted && isError }"
                       role="alert">
                    Invalid input data
                  </div>
                </div>
                <div class="form-group alignItemsCenter row">
                  <div class="col-10 col-sm-6 offset-md-4 col-xl-5 offset-xl-3">
                  <button type="submit" 
                          class="btn btn-lg basic-form-button basic-form-button-pink">Add</button>
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
  import { setWSConnection } from '@/services/ws.js';

  export default {
    name: 'AddTask',
    data: function() {
      return {
        title: '',
        description: '',
        isSubmitted: false
      };
    },
    computed: {
      isError: function() {
        return !this.title || this.title.length > 50 || this.description.length > 300;
      },
      newTask: function() {
        const taskId = this.$route.params.taskId;
        const task = this.$store.state.socket.dashboard[taskId];

        const status = task && task.status || 'todo';

        return {
          taskId: taskId,
          status: status,
          title: this.title,
          description: this.description
        };
      }
    },
    created: function() {
      setWSConnection();

      this.$store.dispatch('LOAD_DASHBOARD').then(() => {
        const taskId = this.$route.params.taskId;
        const task = this.$store.state.socket.dashboard[taskId];

        if (task) {
          this.setExistingData(task);
        }
      });
    },
    methods: {
      setExistingData(task) {
        this.title = task.title;
        this.description = task.description;
      },
      addTask: function() {
        this.isSubmitted = true;

        console.log(this.newTask);

        if (this.isError) return;

        this.$store.dispatch('ADD_TASK', this.newTask)
          .then(this.toDashboard);
      },
      toDashboard: function() {
        this.$router.push({ name: 'dashboard' });
      },
      toWelcome: function() {
        this.$router.push({ name: 'welcome' });
      }
    }
  };
</script>

<style lang="scss">
  @import '../../node_modules/slick-carousel/slick/slick.css';
  @import '../scss/style.scss';
  @import '../scss/dashboard.scss';
  @import '../scss/left-buttons.scss';
</style>