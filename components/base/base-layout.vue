<template>
	<div class="container">
		<header class="header">
			<slot name="header"></slot>
		</header>
		<main>
			<slot v-bind:user="user"></slot><!-- {{user.firstName}} -->
			<!-- <slot>{{user.firstName}}</slot> -->
		</main>
		<footer class="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	import {createPerson} from '../../common/domain/person.js'
	var user = createPerson('zhang', 'zhong')
	export default {
		name:'base-layout',
		data: function() {
			return {
				user: undefined
			}
		}
	}
</script>

<style>
	.header {
		height: 100px;
		background-color: #007AFF;
	}
	.footer {
		height: 100px;
		background-color: #4CD964;
	}
</style>
