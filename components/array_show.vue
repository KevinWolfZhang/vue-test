<template>
	<view>
		<!-- <template v-for="arr in array">
			<label>{{arr}}</label>
			<input v-model="arr" placeholder="show me"/>
		</template> -->
		<p>children: {{nameArray}}</p>
		<button @click="deleteOne">delete</button>
		{{child.firstName + '-' + child.lastName}}
	</view>
</template>

<script>
	export default {
		name:'array-show',
		props: {
			nameArray: {
				type: Array
			},
			child: Person
		},
		data: function() {
			return {
				array: this.nameArray
			}
		},
		methods: {
			deleteOne: function() {
				this.nameArray = this.nameArray.pop()
			}
		},
	}
	function Person(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
</script>

<style>
</style>
