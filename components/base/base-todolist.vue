<template>
	<view>
		<ul>
			<li v-for="todo in todolist" v-bind:key="todo.id">
				<slot name="todo" v-bind:todo="todo">
					{{todo.text}}
				</slot>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		name:"base-todolist",
		props: ['todolist'],
		data: function() {
			return {
				
			}
		}
	}
</script>

<style>
</style>
