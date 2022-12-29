<script lang="ts">
	import { page } from '$app/stores';

	let authSignLink = $page.data.session ? '/auth/signout' : '/auth/signin';
	let username = $page.data.session?.user?.email ?? $page.data.session?.user?.name;
	username = username
		? username.length > 20
			? username.substring(0, 20) + '...'
			: username
		: null;
</script>

<a href={authSignLink}>
	<button class="btn btn-ghost m-3 flex-row gap-3 max-w-64 hidden md:flex">
		{#if $page.data.session}
			<div class="w-8 rounded-xl">
				<img src={$page.data.session.user?.image} alt="" />
			</div>
			{username}
		{:else}
			<div class="">SignIn</div>
		{/if}
	</button>
</a>
