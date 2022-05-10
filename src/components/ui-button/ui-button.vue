<template>
	<button
		class="btn bg-emerald-400 text-white px-6 py-2 rounded-md"
		:class="classes"
	>
		<slot />
	</button>
</template>

<script lang="ts">
	export default {
		name: "VButton",
		props: {
			classes: {
				type: String,
				default: "default",
			},
		},
	};
</script>

<style>
	.btn {
		background-color: #4caf50;
	}
</style>
