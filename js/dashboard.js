var Dashboard = {
	name: 'Dashboard',
	template: `
	<div>
		<section class="profile section" id="dashboard">
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
	                  <img class="rounded-circle profile__content-left-avatar mx-auto" src="img/avatar.png" alt="avatar">
	                </div>
	                <div class="row">
	                  <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">{{user.name}}</p>
	                </div>
	                <div class="profile__content-left-buttons left-buttons row flex-column">
	                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
	                    <a href="#addTask" class="left-buttons-button left-buttons-button-darkblue">Add Task</a>
	                  </div>
	                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
	                    <a href="#profile" class="left-buttons-button left-buttons-button-blue">Edit profile</a>
	                  </div>
	                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
	                    <a href="#exit" class="left-buttons-button left-buttons-button-pink">exit</a>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div class="col-10 col-sm-9 col-md-7 dashboard">

	              <div id="tasks">
	                <div class="row">
	                  <div class="col-9 col-sm-7 col-lg-5 dashboard__filter-small">
	                    <div class="dashboard__filter d-flex">
	                      <div class="dashboard__filter-item">All tasks</div>
	                      <div class="dashboard__filter-item">To Do</div>
	                      <div class="dashboard__filter-item">In Progress</div>
	                      <div class="dashboard__filter-item">Done</div>
	                    </div>

	                  </div>
	                </div>
	                
	                <div class="list dashboard__list">

	                  <div class="row dashboard__list-item no-tasks">
	                    <p class="dashboard__list-item-name mr-auto">No tasks</p>
	                  </div>

	                  <div class="row dashboard__list_status-todo dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the do</h3>
	                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">To Do</p>
	                  </div>

	                  <div class="row dashboard__list_status-todo dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the progress</h3>
	                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">To Do</p>
	                  </div>

	                  <div class="row dashboard__list_status-done dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the done</h3>
	                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">Done</p>
	                  </div>

	                  <div class="row dashboard__list_status-todo dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the todo</h3>
	                    <div class="col-sm-4 d-flex justify-content-around  dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">To Do</p>
	                  </div>

	                  <div class="row dashboard__list_status-done dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the done</h3>
	                    <div class="col-sm-4 d-flex justify-content-around  dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">Done</p>
	                  </div>

	                  <div class="row dashboard__list_status-done dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the done</h3>
	                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">Done</p>
	                  </div>

	                  <div class="row dashboard__list_status-done dashboard__list-item" >
	                    <div class="dashboard__list-item-time"></div>
	                    <h3 class="dashboard__list-item-name mr-auto">Title of the done</h3>
	                    <div class="col-sm-3 col-md-4 d-flex justify-content-around dashboard__list-item-icons">
	                      <a href="#" class="dashboard__list-item-delete"></a>
	                      <a href="#" class="dashboard__list-item-edit"></a>
	                      <a href="#" class="dashboard__list-item-tick"></a>
	                    </div>
	                    <p class="dashboard__status">Done</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	  </div>
	`,	
};