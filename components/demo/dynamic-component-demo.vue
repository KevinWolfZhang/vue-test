<template>
	<view>
	  <button
		v-for="tab in tabs"
		v-bind:key="tab"
		v-bind:class="['tab-button', { active: currentTab === tab }]"
		v-on:click="currentTab = tab"
	  >
		{{ tab }}
	  </button>
	  <keep-alive>
		 <component v-bind:is="currentTabComponent" class="tab"></component>
	  </keep-alive>
	</view>
</template>

<script>
	import tabPosts from './tab-posts.vue'
	import tabArchive from './tab-archive.vue'
	export default {
		name: 'dynamic-component-demo',
		props: [],
		data: function() {
			return {
				currentTab: "Posts",
				tabs: ["Posts", "Archive"]
			}
		},
		components: {
			tabPosts,
			tabArchive
		},
		computed: {
			currentTabComponent: function() {
				return "tab-" + this.currentTab.toLowerCase()
			}
		}
	}
</script>

<style style="less">
	@import "../../style.less";
</style>
