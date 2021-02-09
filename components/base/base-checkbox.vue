<template>
	<view>
		<!-- <input id="checkid" type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)"/> -->
		<checkbox id="checkid" v-bind:checked="checked" v-on:change="changeC($event)"></checkbox>
		<label for="checkid">check</label>
	</view>
</template>

<script>
	export default {
		name: "base-checkbox",
		model: {
			prop: 'checked',
			event: 'change'
		},
		props: {
			checked: Boolean
		},
		methods: {
			changeC: function(e) {
				this.$emit('change', e.target.checked)
			}
		}
	}
</script>

<style>
</style>
