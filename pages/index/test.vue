<template>
	<view>
		<base-todolist :todolist="todolist">
			<template v-slot:todo="{todo}">
				<span v-if="todo.isComplete">
					@
				</span>
				{{todo.text}}
			</template>
		</base-todolist>
		
		<dynamic-component-demo></dynamic-component-demo>
	</view>
</template>

<script>
	import baseTodolist from '../../components/base/base-todolist.vue'
	import {Text} from '../../common/domain/person.js'
	import dynamicComponentDemo from '../../components/demo/dynamic-component-demo.vue'
	var todolist = [
		new Text(1, 'a', true),
		new Text(2, 'b', false),
		new Text(3, 'c', true)
	]
	export default {
		name:'test',
		props: [],
		data: function() {
			return {
				todolist: todolist
			}
		},
		components: {
			baseTodolist,
			dynamicComponentDemo
		}
	}
</script>

<style>
</style>
