<template>
	<view v-if="show">
		<p>默认初始值是{{show}}，所以是显示的</p>
		<button @click.stop="closeDiv">关闭</button>
		<!-- <input type="text" v-on:change="$emit('update:title', $event.target.value)"/> -->
	</view>
</template>
<script>
	export default {
		name: 'base-title',
		props: ['show'],
		methods: {
			closeDiv: function() {
				this.$emit('update:show', false)
			}
		}
	}
</script>

<style>
</style>
