<template>
	<button
		class="dark:bg-green-700 dark:hover:bg-green-900 btn bg-green-500 hover:bg-green-300 text-white px-6 py-2 rounded-md"
		:class="classes"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
	defineProps({
		classes: {
			type: String,
			default: ""
		}
	})
</script>
