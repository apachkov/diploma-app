<template>
	<section class="welcomePage align-items-center">
	    <div class="container welcomePage__container">
		    <div class="row justify-content-center">
				<h1 class="welcomePage__header col-11 col-sm-9 col-md-8 textCenter">Dashboard</h1>

				<dropdown v-bind:items="elements"></dropdown>

				<router-link :to="{ name: 'welcome' }"
		              	     class="btn btn-lg welcomePage__registrationForm-pinkButton text-uppercase col-sm-5">To welcome pade</router-link>

	      	</div>
      	</div>
	</section>
</template>

<script>
	import Dropdown from '../../components/Dropdown';

	export default {
		name: 'Dashboard',
		components: {
			dropdown: Dropdown,
		},
		data: function() {
			 return{
				elements: [
					'hello 1',
					'hello 2',
					'hello 3',
					'hello 4',
				]
			};
		}
	};
</script>