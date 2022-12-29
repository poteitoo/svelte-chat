<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<header>
	<div class="signedInStatus">
		<p class="nojs-show loaded">
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
				{/if}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
				</span>
				<a href="/auth/signout" class="button">Sign out</a>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<a href="/auth/signin" class="buttonPrimary">Sign in</a>
			{/if}
		</p>
	</div>
	<nav>
		<ul class="navItems">
			<li class="navItem"><a href="/">Home</a></li>
			<li class="navItem"><a href="/protected">Protected</a></li>
		</ul>
	</nav>
</header>

<slot />
