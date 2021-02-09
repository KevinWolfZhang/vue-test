<template>
	<view>
		<h3 class="box">chosed time is : {{time}}</h3>
		<!-- <input v-model="newTime" v-on:change="changeTime"/> -->
		<input v-model="mesSage" placeholder="edit me"> <!-- @keydown.enter="doSearch" -->
	</view>
</template>

<script>
	export default {
		name: 'show-time',
		props: ['time'],
		// props: {
		// 	time: {
		// 		type: String
		// 	}
		// },
		data: function() {
			return {
				mesSage: this.time
			}
		},
		methods: {
			localAssign: function() {
				this.newTime = this.time
			},
			changeTime: function() {
				this.$emit("timeChange", this.newTime);
			}
		},
		watch: {
			time(newVal, oldVal) {
				this.mesSage = newVal
			}	
		},
		beforeCreate() {
			console.log('as:' + this.mesSage)
		}
	}
</script>

<style lang="less">
@import "../test.less";
</style>
