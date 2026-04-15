<script>
	import { theme } from '$lib/theme.js';
	
	// Voice chat state
	let isMuted = false;
	let isConnected = false;
	
	// Toggle mute state
	function toggleMute() {
		isMuted = !isMuted;
		// Here you would integrate with your voice chat API
		console.log(isMuted ? 'Muted' : 'Unmuted');
	}
	
	// Toggle connection state
	function toggleConnection() {
		if (isConnected) {
			// Hang up
			isConnected = false;
			isMuted = false; // Reset mute when hanging up
			console.log('Hung up');
		} else {
			// Connect
			isConnected = true;
			console.log('Connected to voice chat');
		}
	}
</script>

<!-- Voice Chat Commands -->
<div class="voice-chat-commands">
	{#if !isConnected}
		<!-- Connect button (using mic icon) -->
		<button
			on:click={toggleConnection}
			class="voice-btn voice-btn-connect"
			title="Join voice chat"
			aria-label="Join voice chat"
		>
			<!-- Phosphor Duotone Microphone Icon -->
			<svg width="20" height="20" viewBox="0 0 256 256" fill="none">
				<rect x="88" y="24" width="80" height="120" rx="40" opacity="0.2" fill="currentColor"/>
				<rect x="88" y="24" width="80" height="120" rx="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="128" y1="200" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="96" y1="232" x2="160" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<path d="M199.6,136a72,72,0,0,1-143.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			</svg>
		</button>
	{:else}
		<!-- Connected state - show mute/unmute and hang up -->
		<div class="connected-controls">
			<!-- Mute/Unmute button -->
			<button
				on:click={toggleMute}
				class="voice-btn {isMuted ? 'voice-btn-muted' : 'voice-btn-unmuted'}"
				title={isMuted ? 'Unmute' : 'Mute'}
				aria-label={isMuted ? 'Unmute' : 'Mute'}
			>
				{#if isMuted}
					<!-- Phosphor Duotone Microphone Slash Icon -->
					<svg width="20" height="20" viewBox="0 0 256 256" fill="none">
						<rect x="88" y="24" width="80" height="120" rx="40" opacity="0.2" fill="currentColor"/>
						<line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M154.9,157.6A39.6,39.6,0,0,1,128,168c-22.1,0-40-17.9-40-40V84.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M136,47v81c0,22.1-17.9,40-40,40a39.6,39.6,0,0,1-26.9-10.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<line x1="128" y1="200" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<line x1="96" y1="232" x2="160" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M199.6,136a72,72,0,0,1-143.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
				{:else}
					<!-- Phosphor Duotone Microphone Icon -->
					<svg width="20" height="20" viewBox="0 0 256 256" fill="none">
						<rect x="88" y="24" width="80" height="120" rx="40" opacity="0.2" fill="currentColor"/>
						<rect x="88" y="24" width="80" height="120" rx="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<line x1="128" y1="200" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<line x1="96" y1="232" x2="160" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M199.6,136a72,72,0,0,1-143.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
				{/if}
			</button>
			
			<!-- Hang up button -->
			<button
				on:click={toggleConnection}
				class="voice-btn voice-btn-hangup"
				title="Leave voice chat"
				aria-label="Leave voice chat"
			>
				<!-- Phosphor Duotone Phone X Icon (Hang Up) -->
				<svg width="20" height="20" viewBox="0 0 256 256" fill="none">
					<path d="M92.4,124.6c16.6,35.6,45.8,64.8,81.4,81.4a8.1,8.1,0,0,0,7.4-.6l25-14.4a7.9,7.9,0,0,1,7.9-.4L236,202a8,8,0,0,1,4.8,9.2,48,48,0,0,1-47.1,40.1C86.8,251.3,4.7,169.2,4.7,62.3A48,48,0,0,1,44.8,15.2,8,8,0,0,1,54,20l11.4,21.9a7.9,7.9,0,0,1-.4,7.9L50.6,75a8.1,8.1,0,0,0-.6,7.4Z" opacity="0.2" fill="currentColor"/>
					<line x1="144" y1="104" x2="192" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<line x1="192" y1="104" x2="144" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<path d="M92.4,124.6c16.6,35.6,45.8,64.8,81.4,81.4a8.1,8.1,0,0,0,7.4-.6l25-14.4a7.9,7.9,0,0,1,7.9-.4L236,202a8,8,0,0,1,4.8,9.2,48,48,0,0,1-47.1,40.1C86.8,251.3,4.7,169.2,4.7,62.3A48,48,0,0,1,44.8,15.2,8,8,0,0,1,54,20l11.4,21.9a7.9,7.9,0,0,1-.4,7.9L50.6,75a8.1,8.1,0,0,0-.6,7.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.voice-chat-commands {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.connected-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.voice-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.5rem;
		border: 1px solid;
		transition: all 0.2s ease;
		cursor: pointer;
		background: transparent;
	}
	
	.voice-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}
	
	.voice-btn:active {
		transform: translateY(0);
	}
	
	/* Connect button styling */
	.voice-btn-connect {
		color: #4ade80;
		border-color: #4ade80;
	}
	
	.voice-btn-connect:hover {
		background: rgba(74, 222, 128, 0.1);
		border-color: #86efac;
		color: #86efac;
	}
	
	/* Dark theme connect button */
	:global(.dark) .voice-btn-connect {
		color: #4ade80;
		border-color: rgba(74, 222, 128, 0.3);
	}
	
	:global(.dark) .voice-btn-connect:hover {
		background: rgba(74, 222, 128, 0.1);
		border-color: #4ade80;
	}
	
	/* Light theme connect button */
	:global(.light) .voice-btn-connect {
		color: #059669;
		border-color: rgba(5, 150, 105, 0.3);
	}
	
	:global(.light) .voice-btn-connect:hover {
		background: rgba(5, 150, 105, 0.1);
		border-color: #059669;
	}
	
	/* Unmuted button styling */
	.voice-btn-unmuted {
		color: #4ade80;
		border-color: rgba(74, 222, 128, 0.3);
	}
	
	.voice-btn-unmuted:hover {
		background: rgba(74, 222, 128, 0.1);
		border-color: #4ade80;
	}
	
	:global(.light) .voice-btn-unmuted {
		color: #059669;
		border-color: rgba(5, 150, 105, 0.3);
	}
	
	:global(.light) .voice-btn-unmuted:hover {
		background: rgba(5, 150, 105, 0.1);
		border-color: #059669;
	}
	
	/* Muted button styling */
	.voice-btn-muted {
		color: #ef4444;
		border-color: rgba(239, 68, 68, 0.3);
	}
	
	.voice-btn-muted:hover {
		background: rgba(239, 68, 68, 0.1);
		border-color: #ef4444;
	}
	
	/* Hang up button styling */
	.voice-btn-hangup {
		color: #ef4444;
		border-color: rgba(239, 68, 68, 0.3);
	}
	
	.voice-btn-hangup:hover {
		background: rgba(239, 68, 68, 0.1);
		border-color: #ef4444;
	}
</style>