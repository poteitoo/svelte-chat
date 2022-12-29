<script lang="ts">
	import type { Message } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let edittingMessage = '';
	let messages = data.messages;

	const userInfo = {
		id: 'poepoe'
	};

	const sendMessage = () => {
		if (edittingMessage.length === 0) return;
		const message: Message = {
			id: Math.floor(Math.random() * 10000).toString(),
			content: edittingMessage,
			ownerId: 'poepoe',
			chatRoomId: 'pafjpaweg',
			createdAt: new Date(),
			updatedAt: new Date()
		};
		messages = [...messages, message];
		edittingMessage = '';
	};

	const isShiftCommandPressed = (e: KeyboardEvent) => {
		if (e.shiftKey) {
			if ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) {
				if (e.code === 'Enter') {
					return true;
				}
			}
		}
		return false;
	};
</script>

<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
<div class="drawer-content flex flex-col justify-end flex-1">
	<!-- Page content here -->
	<div class="w-full h-full overflow-y-scroll p-5">
		{#each messages as message (message.id)}
			{#if message.ownerId === userInfo.id}
				<div class="chat chat-end">
					<div class="chat-bubble">{message.content}</div>
				</div>
			{:else}
				<div class="chat chat-start">
					<div class="chat-bubble">{message.content}</div>
				</div>
			{/if}
		{:else}
			<p>No messages</p>
		{/each}
	</div>

	<div class="form-control w-full h-1/3 p-5">
		<label for="textarea" class="label">
			<span class="label-text-alt">
				<div class="flex justify-center items-center">
					<button class="btn btn-sm btn-primary mr-3" on:click={sendMessage}>send</button>
					<div class="divider divider-horizontal">OR</div>
					<div>
						<kbd class="kbd">command</kbd>
						+
						<kbd class="kbd">return</kbd> to send the message
					</div>
				</div>
			</span>
			<span class="label-text-alt"
				>{edittingMessage.length} {edittingMessage.length > 1 ? 'words' : 'word'}</span
			>
		</label>
		<textarea
			class="textarea textarea-bordered h-full resize-none"
			placeholder="message"
			bind:value={edittingMessage}
			on:keydown={(e) => {
				if (!isShiftCommandPressed(e)) return;
				sendMessage();
			}}
		/>
	</div>
</div>
