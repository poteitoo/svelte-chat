<script>
	import { page } from '$app/stores';
	import UserButton from '$lib/components/UserButton.svelte';
</script>

<UserButton />
{#if $page.data.session}
	<a href="/chat/poepoe" class="">poepoe link</a>
{/if}
