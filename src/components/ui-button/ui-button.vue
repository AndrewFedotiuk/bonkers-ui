<template>
	<button
		class="text-base text-white rounded-md"
		:class="[
			(!kind || kind === EButtonTypes.PRIMARY) && 'bg-primary',
			kind === EButtonTypes.SECONDARY && 'bg-secondary',
			kind === EButtonTypes.WARNING && 'bg-warning',
			kind === EButtonTypes.ERROR && 'bg-error',
			(!size || size === EButtonSizes.MEDIUM) && 'py-2.5 px-5',
			size === EButtonSizes.LARGE && 'py-2.5 px-6',
			classes
		]"
	>
		{{ kind }}
		<slot />
	</button>
</template>

<script lang="ts" setup>
	import { EButtonSizes, EButtonTypes } from "./_typings";

	type TProps = {
		classes?: string;
		kind?: EButtonTypes;
		size?: EButtonSizes
	}
	defineProps<TProps>();
</script>
