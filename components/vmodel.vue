<template>
	<view>
		{{label}}
		<input v-bind='$attrs' v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
		<checkbox id="a" value="1"></checkbox>
		<label for="a">another</label>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inheritAttrs: false,
		name: 'vmodel',
		props: ['label','value'],
		data: function(){
			return {
				
			}
		}
	}
</script>

<style>
</style>
