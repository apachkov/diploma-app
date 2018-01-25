var Dashboard = {
	name: 'Dashboard',
	template: `<section class="welcomePage align-items-center">
	    <div class="container welcomePage__container">
		    <div class="row justify-content-center">
				<h1 class="welcomePage__header col-11 col-sm-9 col-md-8 textCenter">Dashboard</h1>

				<button @click="showElements = !showElements">Dropdown</button>
				<ul :hidden="!showElements">
					<li v-for="element in elements">{{ element }}</li>
				</ul>

				<router-link :to="{ name: 'welcome' }"
		              	     class="btn btn-lg welcomePage__registrationForm-pinkButton text-uppercase col-sm-5">To welcome pade</router-link>

	      	</div>
      	</div>
	</section>`,
	data: function() {
		 return{
			elements: [
				'hello 1',
				'hello 2',
				'hello 3',
				'hello 4',
			],
			showElements: false
		};
	}
};