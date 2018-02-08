<template>
  <div>
    <section class="section" id="dashboard">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">Dashboard</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">
              <div class="profile__content-left text-center">
                <div class="row">
                  <img class="rounded-circle profile__content-left-avatar mx-auto" src="../assets/avatar.png" alt="avatar">
                </div>
                <div class="row">
                  <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">name</p>
                </div>
                <div class="profile__content-left-buttons left-buttons row flex-column">
                  
                  <div v-on:submit.prevent="toAddTask" 
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'AddTask'}" class="left-buttons-button left-buttons-button-darkblue">Add Task </router-link>
                  </div>

                  <div v-on:submit.prevent="toProfile"
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'Profile'}" class="left-buttons-button left-buttons-button-blue">Edit profile</router-link>
                  </div>

                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
                    <a href="#"
                       v-on:click.prevent="toWelcome"
                       class="left-buttons-button left-buttons-button-pink">exit</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-10 col-sm-9 col-md-7 dashboard">

              <div id="tasks">
                <div class="row">
                  <div class="col-9 col-sm-7 col-lg-5 dashboard__filter-small">
                    <slick class="dashboard__filter d-flex"
                           ref="slick"
                           @afterChange="showCurrent"
                           :options="slickOptions">
                     <div class="dashboard__filter-item"
                          v-for="filter in filterItems">{{ filter.label }}</div>
                    </slick>

                  </div>
                </div>
                
                <div class="list dashboard__list">

                  <div class="row dashboard__list-item no-tasks">
                    <p class="dashboard__list-item-name mr-auto">No tasks</p>
                  </div>

                  <div class="row dashboard__list-item"
                       :class="['dashboard__list_status-' + item.status, 'class-01']"
                       v-for="(item, itemKey, index) in filteredTasks">
                    <div class="dashboard__list-item-time"></div>
                    <h3 class="dashboard__list-item-name mr-auto">{{ item.title }}</h3>
                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
                      <a href="#"
                         @click="deleteTask(itemKey)"
                         class="dashboard__list-item-delete"></a>
                      <a href="#" class="dashboard__list-item-edit"></a>
                      <a href="#"
                         @click="doneToggle(itemKey)"
                         class="dashboard__list-item-tick"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Slick from 'vue-slick';
  import { getDashboard } from '@/services/http.js';
  import { setWSConnection } from '@/services/ws.js';

  export default {
    name: 'Dashboard',
    components: { Slick },
    created: function() {
      getDashboard().then((data) => {
        this.$store.commit('SET_DASHBOARD', data);
      });

      setWSConnection();
    },
    data() {
      return {
        name: 'John Doe',
        currentFilterStatus: '',
        filterItems: [
          {
            label: 'All tasks',
            status: ''
          },
          {
            label: 'To Do',
            status: 'todo'
          },
          {
            label: 'In Progress',
            status: 'inprogress'
          },
          {
            label: 'Done',
            status: 'done'
          },
        ], 
        slickOptions: {
            slidesToShow: 1,
            speed: 100
            // Any other options that can be got from plugin documentation
        }
      };
    },
    computed: {
      filteredTasks: function() {
          const result = {};

          for (let taskItem in this.items) {
            if (this.items[taskItem].status.includes(this.currentFilterStatus)) {
              result[taskItem] = this.items[taskItem];
            }
          }

          return result;
      },
      items: function() {
        return this.$store.state.socket.dashboard;
      }
    },
    methods: {
      doneToggle: function(taskKey) {
        const oldStatus = this.items[taskKey].status;

        this.items[taskKey].status = oldStatus === 'done' ? 'inprogress' : 'done';
      },
      deleteTask(taskKey) {
        this.$delete(this.items, taskKey);
      },
      next() {
        this.$refs.slick.next();
      },
      prev() {
        this.$refs.slick.prev();
      },
      showCurrent(event, slick, currentSlide) {
        this.currentFilterStatus = this.filterItems[currentSlide].status;
      },
      toAddTask: function() {
        this.$router.push({ name: 'addTask' });
      },      
      toProfile: function() {
        this.$router.push({ name: 'profile' });
      }, 
      toWelcome: function() {
        localStorage.removeItem('credentials')
        this.$router.push({ name: 'welcome' });
      }
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/slick-carousel/slick/slick.css';
  @import '../scss/style.scss';
  @import '../scss/dashboard.scss';
  @import '../scss/left-buttons.scss';
</style>