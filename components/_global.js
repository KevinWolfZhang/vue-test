import Vue from 'vue'
const requireComponent = require.context(
	'.',
	false,
	/_base-[\w-]+\.vue$/
)

requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName)
	const componentName = fileName.
})