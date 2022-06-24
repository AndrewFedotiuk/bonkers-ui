<template>
	<button
		class="btn bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-md"
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
