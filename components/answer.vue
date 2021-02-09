<template>
	<view>
		<p>
			Ask a question:
			<input v-model="question" />
		</p>
		<p>
			{{answer}}
		</p>
		<div style="{width: 100px; height: 50px; color: #007AFF;}" @click.self="click1">
			<button @click.once="click2"> click here </button>
		</div>
	</view>
</template>

<script>
	// let _ = require('lodash')
	// let axios = require('axios')
	export default {
		name: 'answer',
		props: {
			
		},
		data: function() {
			return {
				question: '',
				answer: 'I cannot give you an answer until you ask a question!'
			}
		},
		watch: {
			question: function(newQuestion, oldQuestion) {
				this.answer = 'Waiting for you to stop typing...'
				this.debouncedGetAnswer()
			}
		},
		created() {
			this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
		},
		methods: {
			getAnswer: function() {
				if (this.question.indexOf('?') === -1) {
					this.answer = 'Questions usually contain a question mark. ;-)'
					return
				}
				this.answer = 'Thinking'
				var vm = this
				this.$axios.get('https://yesno.wtf/api').then(function(response) {
					vm.answer = _.capitalize(response.data.answer)
				}).catch(function(error) {
					vm.answer = 'Error! Could not reach the API.' + error
				})
			},
			click1() {
				alert('1')
			},
			click2() {
				alert('2')
			}
		}
	}
</script>

<style>
</style>
