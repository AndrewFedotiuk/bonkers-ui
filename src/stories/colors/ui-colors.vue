<template>
	<ul class="colors grid gap-4">
		<li
			v-for="(value, key, index) in colors"
			:key="key"
			class="grid"
		>
			<span
				ref="colorRefs"
				:class="`h-24 rounded-md`"
				:style="{
					backgroundColor: value
				}"
			/>
			{{ key }}
			<br>
			{{ getBackgroundColor(index) }}
			<br>
			{{ value }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import colors from "../../_colors.json";

	const colorRefs = ref<Array<Element | null>>([]);

	const getBackgroundColor = (index: number) => {
		const element = colorRefs.value[index];
		if (element) {
			return window.getComputedStyle(element, null).getPropertyValue("background-color");
		}
	}
</script>

<style scoped>
	.colors {
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}
</style>
