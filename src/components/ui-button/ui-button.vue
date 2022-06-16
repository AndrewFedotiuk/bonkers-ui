<template>
	<button
		class="btn bg-amber-400 text-white px-6 py-2 rounded-md"
		:class="classes"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
	import { defineProps } from "vue"
	defineProps({
		classes: {
			type: String,
			default: ""
		}
	})
</script>
