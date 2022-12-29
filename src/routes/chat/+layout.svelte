<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import UserButton from '$lib/components/UserButton.svelte';
	export let data: LayoutData;
	let username = $page.data.session?.user?.email ?? $page.data.session?.user?.name;
	username = username
		? username.length > 20
			? username.substring(0, 20) + '...'
			: username
		: null;
</script>

{#if $page.data.session}
	<div class="flex flex-col items-center h-screen">
		<header class="flex w-full justify-between items-center px-5">
			<Searchbar />
			<UserButton />
		</header>
		<div class="drawer drawer-mobile border-t-2 h-full">
			<slot />

			<div class="drawer-side border-r-2">
				<label for="my-drawer-2" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100 text-base-content">
					<!-- Sidebar content here -->
					<li><button class="btn w-full mb-3">New Chat Room</button></li>
					{#each data.rooms as room}
						<li><a href={'/chat/' + room.href}>{room.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
