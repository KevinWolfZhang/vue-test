<template>
	<view style="width: 500px; height: 100px;">
	    <!-- <uni-calendar 
	    :insert="true"
	    :lunar="true" 
	    :start-date="'2019-3-2'"
	    :end-date="'2019-5-20'"
		:date="backTime"
	    @change="change"
	     ></uni-calendar>
		 <show-time :time= "calendar" @timeChange="changeTime"></show-time>
		 <input-com :text="text"></input-com>
		 <answer></answer>
		 <vmodel v-model="searchText">
			 <h2>{{searchText}}</h2>
		 </vmodel> -->
		 <!-- <button v-for="(tab, index) in tabs" 
			 v-bind:key="tab" 
			 v-bind:class="['tab-button', {'active': currentTab === tab}]"
			 v-on:click="currentTab = tab">
			 {{tab}}</button>
		 <component v-bind:is="currentTabComponent" class="tab"></component>
		 <table>
			 <input-com :text="text"></input-com>
		 </table> -->
		 <!-- <button></button> -->
		 <!-- <array-show :child="person"></array-show> -->
		<!-- <p>parent: {{nameArray}}</p>
		 
		 <vmodel v-model="searchText" required placeholder="Enter">
		 			 <h2>{{searchText}}</h2>
		 </vmodel> 
		 <base-checkbox v-model="lovingVue"></base-checkbox>
		 {{lovingVue ? 1 : 0}} -->
		 <!-- <base-input :label="'input'" v-on:focus="onFocus" v-model="inputValue"></base-input>
		 <br/>
		 {{ inputValue }} 
		 
		 <base-title :show.sync="valueChild"></base-title>
		 <button @click="changeValue">toggle</button> -->
		 <!-- <base-layout>
			 <template v-slot:header>
				 <h1>Header</h1>
			 </template>
			 <template v-slot:default="slotProps">
				<p>{{slotProps.user.lastName}}</p>
			 </template>			
			 <template v-slot:footer>
				 <h1>footer</h1>
			 </template>
		 </base-layout> -->
		 <!-- <base-layout v-slot="{ user = {lastName: 'bo'} }">
			 {{user.lastName}}
		 </base-layout> -->
		 <!-- <base-layout>
			 <template #footer="{ user = {lastName: 'bo'} }">
				 {{user.lastName}}
			 </template>
		 </base-layout> -->
		 <test></test>
	</view>
</template>

<script>
	import uniCalendar from '../../components/uni-calendar/uni-calendar.vue'
	import showTime from '../../components/show_time.vue'
	import inputCom from '../../components/input_com.vue'
	import answer from '../../components/answer.vue'
	import vmodel from '../../components/vmodel.vue'
	import arrayShow from '../../components/array_show.vue'
	import baseCheckbox from '../../components/base/base-checkbox.vue'
	import baseInput from '../../components/base/base-input.vue'
	import baseTitle from '../../components/base/base-title.vue'
	import baseLayout from '../../components/base/base-layout.vue'
	import test from '../../pages/index/test.vue'
	export default {
		data() {
			return {
				calendar: "",
				backTime: "",
				text: "hi",
				searchText: "name",
				currentTab: "uniCalendar",
				tabs: ['uniCalendar', 'answer', 'vmodel'],
				nameArray: ['zhang','zhong','bo'],
				/* person: new Person('durant', 'kevin'), */
				lovingVue: false,
				focusNum: 0,
				inputValue: '',
				valueChild: true,
				dynamic: 'header'
			}
		},
		onLoad() {

		},
		methods: {
			change: function(e) {
				console.log(e)
				console.log(e.fulldate)
				this.calendar = e.fulldate
			},
			changeTime: function(e) {
				this.backTime = e;
			},
			onFocus: function() {
				if (this.focusNum == 0) {
					alert('focus')
					this.focusNum++
				}
			},
			changeValue() {
				this.valueChild = !this.valueChild
			}
		},
		components: {
			uniCalendar,
			showTime,
			inputCom,
			answer,
			vmodel,
			arrayShow,
			baseCheckbox,
			baseInput,
			baseTitle,
			baseLayout,
			test
		},
		computed: {
			currentTabComponent: function() {
				return this.currentTab
			}
		}
	}
</script>

<style>
	.tab-button {
	        padding: 6px 10px;
	        border-top-left-radius: 3px;
	        border-top-right-radius: 3px;
	        border: 1px solid #ccc;
	        cursor: pointer;
	        background: #f0f0f0;
	        margin-bottom: -1px;
	        margin-right: -1px;
			display: inline-block;
	      }
	      .tab-button:hover {
	        background: #e0e0e0;
	      }
	      .tab-button.active {
	        background: #e0e0e0;
	      }
	      .tab {
	        border: 1px solid #ccc;
	        padding: 10px;
	      }
</style>
