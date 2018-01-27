<template>
	<div>
		<button @click="showElements = !showElements">Dropdown</button>
		<ul :hidden="!showElements">
			<li v-for="element in items">{{ element }}</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		name: 'dropdown',
		props: [ 'items' ],
		data: function() {
			return {
				showElements: false
			};
		}
	};
</script>