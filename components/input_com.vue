<template>
	<view>
		<input v-model="realText" />
		<!-- <button @click="realText = 'zhangzhongbo'">change</button>
		<p>{{reversedText()}}</p> -->
	</view>
</template>

<script>
	export default {
		name: 'input-com',
		props: {
			text: {
				type:String,
				default: ""
			}
		},
		data: function() {
			return {
				realText: this.text
			}
			// Object.freeze(realText)
		},
		computed: {
			// reversedText: function() {
			// 	return this.realText.split('').reverse().join('')
			// }
		},
		methods: {
			reversedText: function() {
				return this.realText.split('').reverse().join('')
			}
		}
	}
</script>

<style>
</style>
