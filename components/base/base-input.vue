<template>
	<label>
		{{ label }}
		<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners"/>
		<checkbox :checked="checked" v-on="inputListeners"></checkbox>
	</label>
</template>

<script>
	export default {
		name: 'base-input',
		inheritAttrs: false,
		props: ['value', 'label', 'checked'],
		computed: {
			inputListeners: function() {
				var vm = this
				return Object.assign({}, this.$listeners, {
					input: function(event) {
						vm.$emit('input', event.target.value)
					}
				}, {
					change: function(event) {
						vm.$emit('change', event.target.value)
					}
				})
			}
		}
	}
</script>

<style>
</style>
