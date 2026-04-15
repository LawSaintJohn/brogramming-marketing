<script>
	import { theme } from '$lib/theme.js';

	const steps = [
		{
			number: '01',
			title: 'Bring your own API key',
			desc: 'Connect Claude, GPT-4, Gemini — whatever model you trust. Your key, your data, never stored.'
		},
		{
			number: '02',
			title: 'Share a room link',
			desc: 'One click generates a shareable session URL. Invite your team instantly — no accounts required to join.'
		},
		{
			number: '03',
			title: 'Build together in real-time',
			desc: 'Everyone codes, everyone has AI. Multiplayer cursors, live sync, and no merge conflicts to fight later.'
		}
	];

	const features = [
		{
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
			title: 'Real-time sync',
			badge: 'Yjs CRDTs',
			desc: 'Conflict-free replicated data types keep every cursor, every keystroke perfectly in sync across the globe.'
		},
		{
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
			title: 'AI-native',
			badge: 'Your model, your key',
			desc: 'No vendor lock-in. Plug in any LLM API. Each collaborator can use their own model simultaneously.'
		},
		{
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.85"/></svg>`,
			title: 'Multiplayer cursors',
			badge: 'Live presence',
			desc: "See where your teammates are, what they're editing, and watch AI completions flow in real-time."
		}
	];
</script>

<svelte:head>
	<title>brogramming — Code together. AI included.</title>
	<meta name="description" content="Real-time collaborative coding where every developer brings their own AI. Yjs-powered sync, multiplayer cursors, no lock-in." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Nav -->
<header class="fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04] bg-[#0a0a0a]/80' : 'border-black/[0.08] bg-white/80'}"
	style="backdrop-filter: blur(12px);">
	<div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
		<span class="font-mono text-sm font-medium tracking-tight transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">brogramming</span>

		<div class="flex items-center gap-4">
			<!-- Theme toggle -->
			<button
				on:click={theme.toggle}
				class="theme-toggle"
				aria-label="Toggle theme"
			></button>

			<a
				href="https://start.brogramming.io"
				class="text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 {$theme === 'dark' ? 'text-[#4ade80] border-[#4ade80]/30 hover:bg-[#4ade80]/10' : 'text-[#059669] border-[#059669]/30 hover:bg-[#059669]/10'}"
				style="border: 1px solid;"
			>
				Start brogramming →
			</a>
		</div>
	</div>
</header>

<main>
	<!-- ─── Hero ─── -->
	<section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden">
		<!-- Background glow -->
		<div class="absolute inset-0 pointer-events-none">
			{#if $theme === 'dark'}
				<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#4ade80]/[0.04] blur-[120px]"></div>
				<div class="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[80px]"></div>
			{:else}
				<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#059669]/[0.08] blur-[120px]"></div>
				<div class="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gray-900/[0.03] blur-[80px]"></div>
			{/if}
		</div>

		<!-- Grid lines decoration -->
		<div class="absolute inset-0 pointer-events-none transition-opacity duration-300 {$theme === 'dark' ? 'opacity-[0.025]' : 'opacity-[0.04]'}"
			style="background-image: linear-gradient({$theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, {$theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px); background-size: 80px 80px;">
		</div>

		<div class="relative z-10 text-center max-w-3xl mx-auto">
			<!-- eyebrow -->
			<div class="inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 mb-8 transition-all duration-300 {$theme === 'dark' ? 'text-[#4ade80]/70 bg-[#4ade80]/[0.04]' : 'text-[#059669]/70 bg-[#059669]/[0.08]'}">
				<span class="w-1.5 h-1.5 rounded-full animate-pulse {$theme === 'dark' ? 'bg-[#4ade80]' : 'bg-[#059669]'}"></span>
				Real-time · AI-native · CRDT-powered
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">
				brogrammers brogramming <span class="{$theme === 'dark' ? 'text-[#4ade80]' : 'text-[#059669]'}">brogramming.</span>
			</h1>

			<p class="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-colors duration-300 {$theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}">
				How much clearer could we be?
			</p>

			<div class="flex flex-col sm:flex-row items-center justify-center gap-3">
				<a
					href="https://start.brogramming.io"
					class="group inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 {$theme === 'dark' ? 'bg-[#4ade80] text-black hover:bg-[#86efac]' : 'bg-[#059669] text-white hover:bg-[#047857]'}"
				>
					Start brogramming
					<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
				</a>
				<a
					href="#how-it-works"
					class="text-sm px-4 py-3 transition-colors duration-200 {$theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}"
				>
					See how it works
				</a>
			</div>
		</div>

		<!-- Terminal mockup -->
		<div class="relative z-10 mt-20 w-full max-w-2xl mx-auto">
			<div class="rounded-xl border overflow-hidden shadow-2xl transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.06] bg-[#111111]/80 shadow-black/60' : 'border-gray-300 bg-white/90 shadow-gray-900/20'}"
				style="backdrop-filter: blur(12px);">
				<!-- Title bar -->
				<div class="flex items-center gap-1.5 px-4 py-3 border-b transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.05] bg-[#0d0d0d]' : 'border-gray-200 bg-gray-50'}">
					<div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
					<span class="ml-3 font-mono text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">session://room-a3f9b2</span>
					<div class="ml-auto flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full {$theme === 'dark' ? 'bg-[#4ade80]' : 'bg-[#059669]'}"></span>
						<span class="font-mono text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">3 connected</span>
					</div>
				</div>
				<!-- Code lines -->
				<div class="px-5 py-5 font-mono text-xs sm:text-sm leading-7 text-left overflow-hidden">
					<div class="flex gap-4">
						<div class="select-none text-right w-4 shrink-0 leading-7 transition-colors duration-300 {$theme === 'dark' ? 'text-gray-700' : 'text-gray-400'}">
							{#each [1,2,3,4,5,6,7] as n}
								<div>{n}</div>
							{/each}
						</div>
						<div class="overflow-x-auto transition-colors duration-300">
							{#if $theme === 'dark'}
								<div><span class="text-purple-400">async function</span> <span class="text-blue-300">buildTogether</span><span class="text-gray-400">(</span><span class="text-orange-300">session</span><span class="text-gray-400">) {`{`}</span></div>
								<div class="pl-4"><span class="text-purple-400">const</span> <span class="text-blue-200">room</span> <span class="text-gray-400">= await</span> <span class="text-blue-300">session.join</span><span class="text-gray-400">(</span><span class="text-green-300">'room-a3f9b2'</span><span class="text-gray-400">);</span></div>
								<div class="pl-4"><span class="text-purple-400">const</span> <span class="text-blue-200">ai</span> <span class="text-gray-400">= new</span> <span class="text-blue-300">BringYourOwnAI</span><span class="text-gray-400">({`{`}</span> <span class="text-blue-200">apiKey</span><span class="text-gray-400">: process.env.</span><span class="text-orange-300">CLAUDE_KEY</span> <span class="text-gray-400"> {`}`});</span></div>
								<div class="pl-4 text-gray-600">&nbsp;</div>
								<div class="pl-4"><span class="text-gray-500">// real-time sync via Yjs CRDTs</span></div>
								<div class="pl-4"><span class="text-purple-400">return</span> <span class="text-blue-300">room.collaborate</span><span class="text-gray-400">({`{`}</span> <span class="text-blue-200">ai</span><span class="text-gray-400">, </span><span class="text-blue-200">cursors</span><span class="text-gray-400">: true {`}`});</span></div>
								<div><span class="text-gray-400">{`}`}</span></div>
							{:else}
								<div><span class="text-purple-600">async function</span> <span class="text-blue-600">buildTogether</span><span class="text-gray-600">(</span><span class="text-orange-600">session</span><span class="text-gray-600">) {`{`}</span></div>
								<div class="pl-4"><span class="text-purple-600">const</span> <span class="text-blue-700">room</span> <span class="text-gray-600">= await</span> <span class="text-blue-600">session.join</span><span class="text-gray-600">(</span><span class="text-green-600">'room-a3f9b2'</span><span class="text-gray-600">);</span></div>
								<div class="pl-4"><span class="text-purple-600">const</span> <span class="text-blue-700">ai</span> <span class="text-gray-600">= new</span> <span class="text-blue-600">BringYourOwnAI</span><span class="text-gray-600">({`{`}</span> <span class="text-blue-700">apiKey</span><span class="text-gray-600">: process.env.</span><span class="text-orange-600">CLAUDE_KEY</span> <span class="text-gray-600"> {`}`});</span></div>
								<div class="pl-4 text-gray-400">&nbsp;</div>
								<div class="pl-4"><span class="text-gray-500">// real-time sync via Yjs CRDTs</span></div>
								<div class="pl-4"><span class="text-purple-600">return</span> <span class="text-blue-600">room.collaborate</span><span class="text-gray-600">({`{`}</span> <span class="text-blue-700">ai</span><span class="text-gray-600">, </span><span class="text-blue-700">cursors</span><span class="text-gray-600">: true {`}`});</span></div>
								<div><span class="text-gray-600">{`}`}</span></div>
							{/if}
						</div>
					</div>
					<!-- Cursor indicators -->
					<div class="mt-4 pt-4 border-t flex items-center gap-3 transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-200'}">
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full {$theme === 'dark' ? 'bg-[#4ade80]' : 'bg-[#059669]'}"></span>
							<span class="text-[10px] font-mono transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">@alice · Claude</span>
						</div>
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-blue-400"></span>
							<span class="text-[10px] font-mono transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">@bob · GPT-4o</span>
						</div>
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-violet-400"></span>
							<span class="text-[10px] font-mono transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">@carol · Gemini</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ─── How it works ─── -->
	<section id="how-it-works" class="py-28 px-6">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<p class="font-mono text-xs mb-3 tracking-widest uppercase transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">Process</p>
				<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">How it works</h2>
			</div>

			<div class="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border transition-all duration-300 {$theme === 'dark' ? 'bg-white/[0.04] border-white/[0.04]' : 'bg-gray-200 border-gray-300'}">
				{#each steps as step, i}
					<div class="relative p-8 sm:p-10 group transition-all duration-300 {$theme === 'dark' ? 'bg-[#0a0a0a] hover:bg-[#0e0e0e]' : 'bg-white hover:bg-gray-50'}">
						<!-- connector line -->
						{#if i < steps.length - 1}
							<div class="hidden sm:block absolute top-10 right-0 w-px h-8 translate-x-px transition-colors duration-300"
								style={$theme === 'dark' ? 'background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%);' : 'background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%);'}>
							</div>
						{/if}
						<div class="font-mono text-xs mb-6 tracking-widest transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/40' : 'text-[#059669]/40'}">{step.number}</div>
						<h3 class="text-base font-semibold mb-3 leading-snug transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">{step.title}</h3>
						<p class="text-sm leading-relaxed transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── Live Video & Audio Chat ─── -->
	<section class="py-28 px-6 border-t transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-200'}">
		<div class="max-w-5xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div>
					<p class="font-mono text-xs mb-3 tracking-widest uppercase transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">Live communication</p>
					<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">
						Bro to bro, <span class="{$theme === 'dark' ? 'text-[#4ade80]' : 'text-[#059669]'}">face to face</span>
					</h2>
					<p class="text-base leading-relaxed mb-8 transition-colors duration-300 {$theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}">
						Why type when you can talk? Built-in video and audio chat means you can see your bro's reaction when the AI suggests something brilliant (or questionable). Debug together, brainstorm live, and celebrate those "aha!" moments in real-time.
					</p>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/30 text-[#4ade80]' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669]'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M23 7l-7 5 7 5V7z"/>
									<rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
								</svg>
							</div>
							<div>
								<h3 class="text-sm font-semibold mb-1 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">HD video calls</h3>
								<p class="text-sm transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">Crystal-clear video chat integrated right into your coding session</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/30 text-[#4ade80]' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669]'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
									<path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
									<line x1="12" y1="19" x2="12" y2="23"/>
									<line x1="8" y1="23" x2="16" y2="23"/>
								</svg>
							</div>
							<div>
								<h3 class="text-sm font-semibold mb-1 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">Spatial audio</h3>
								<p class="text-sm transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">High-quality audio that adapts to your team size and setup</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/30 text-[#4ade80]' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669]'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<circle cx="12" cy="12" r="3"/>
									<path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
								</svg>
							</div>
							<div>
								<h3 class="text-sm font-semibold mb-1 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">Smart controls</h3>
								<p class="text-sm transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">Push-to-talk, auto-mute, and noise cancellation built-in</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative">
					<!-- Video chat mockup -->
					<div class="relative rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.06] bg-[#111111] shadow-black/60' : 'border-gray-300 bg-white shadow-gray-900/20'}">
						<!-- Header -->
						<div class="flex items-center justify-between px-4 py-3 border-b transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.05] bg-[#0d0d0d]' : 'border-gray-200 bg-gray-50'}">
							<div class="flex items-center gap-2">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]' : 'text-[#059669]'}">
									<path d="M23 7l-7 5 7 5V7z"/>
									<rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
								</svg>
								<span class="font-mono text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">room-a3f9b2</span>
							</div>
							<div class="flex items-center gap-1">
								<span class="w-1.5 h-1.5 rounded-full {$theme === 'dark' ? 'bg-[#4ade80]' : 'bg-[#059669]'}"></span>
								<span class="font-mono text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">Live</span>
							</div>
						</div>

						<!-- Video grid -->
						<div class="p-4">
							<div class="grid grid-cols-2 gap-3">
								<!-- Participant 1 -->
								<div class="relative aspect-video rounded-lg overflow-hidden transition-all duration-300 {$theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'}">
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/20 border-[#4ade80] text-[#4ade80]' : 'bg-[#059669]/20 border-[#059669] text-[#059669]'}">
											<span class="font-mono text-xs font-semibold">A</span>
										</div>
									</div>
									<div class="absolute bottom-2 left-2 px-2 py-1 rounded text-[10px] font-mono transition-all duration-300 {$theme === 'dark' ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'}">alice</div>
									<div class="absolute top-2 right-2 w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/20 border-[#4ade80]' : 'bg-[#059669]/20 border-[#059669]'}">
										<svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" class="transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]' : 'text-[#059669]'}">
											<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
											<path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
										</svg>
									</div>
								</div>

								<!-- Participant 2 -->
								<div class="relative aspect-video rounded-lg overflow-hidden transition-all duration-300 {$theme === 'dark' ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/50' : 'bg-gradient-to-br from-blue-100 to-blue-200'}">
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="w-12 h-12 rounded-full border-2 flex items-center justify-center bg-blue-400/20 border-blue-400 text-blue-400">
											<span class="font-mono text-xs font-semibold">B</span>
										</div>
									</div>
									<div class="absolute bottom-2 left-2 px-2 py-1 rounded text-[10px] font-mono transition-all duration-300 {$theme === 'dark' ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'}">bob</div>
									<div class="absolute top-2 right-2 w-4 h-4 rounded-full border flex items-center justify-center bg-blue-400/20 border-blue-400">
										<svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" class="text-blue-400">
											<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
											<path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
										</svg>
									</div>
								</div>

								<!-- Participant 3 -->
								<div class="relative aspect-video rounded-lg overflow-hidden transition-all duration-300 {$theme === 'dark' ? 'bg-gradient-to-br from-violet-900/50 to-violet-800/50' : 'bg-gradient-to-br from-violet-100 to-violet-200'}">
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="w-12 h-12 rounded-full border-2 flex items-center justify-center bg-violet-400/20 border-violet-400 text-violet-400">
											<span class="font-mono text-xs font-semibold">C</span>
										</div>
									</div>
									<div class="absolute bottom-2 left-2 px-2 py-1 rounded text-[10px] font-mono transition-all duration-300 {$theme === 'dark' ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'}">carol</div>
									<div class="absolute top-2 right-2 w-4 h-4 rounded-full border flex items-center justify-center opacity-50 transition-all duration-300 {$theme === 'dark' ? 'bg-red-400/20 border-red-400' : 'bg-red-500/20 border-red-500'}">
										<svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" class="transition-colors duration-300 {$theme === 'dark' ? 'text-red-400' : 'text-red-500'}">
											<path d="M1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
											<path d="M17 16.95A7 7 0 0 1 5 12v-2"/>
										</svg>
									</div>
								</div>

								<!-- You (empty for "your" view) -->
								<div class="relative aspect-video rounded-lg overflow-hidden border-2 border-dashed transition-all duration-300 {$theme === 'dark' ? 'border-gray-700 bg-gray-900/50' : 'border-gray-300 bg-gray-100'}">
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="text-center">
											<div class="w-8 h-8 rounded-full border flex items-center justify-center mx-auto mb-1 transition-all duration-300 {$theme === 'dark' ? 'border-gray-600 text-gray-600' : 'border-gray-400 text-gray-400'}">
												<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
													<path d="M23 7l-7 5 7 5V7z"/>
													<rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
												</svg>
											</div>
											<span class="text-[10px] font-mono transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">you</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Controls -->
						<div class="flex items-center justify-center gap-3 px-4 py-3 border-t transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.05] bg-[#0d0d0d]' : 'border-gray-200 bg-gray-50'}">
							<button class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/30 text-[#4ade80] hover:bg-[#4ade80]/20' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669] hover:bg-[#059669]/20'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
									<path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
								</svg>
							</button>
							<button class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/30 text-[#4ade80] hover:bg-[#4ade80]/20' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669] hover:bg-[#059669]/20'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M23 7l-7 5 7 5V7z"/>
									<rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
								</svg>
							</button>
							<button class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 {$theme === 'dark' ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20' : 'bg-red-500/10 border-red-500/30 text-red-600 hover:bg-red-500/20'}">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
									<path d="M21 6H3l1.5 15h15L21 6zM10 11v6M14 11v6"/>
								</svg>
							</button>
						</div>
					</div>

					<!-- Floating chat bubble -->
					<div class="absolute -bottom-4 -right-4 rounded-lg border shadow-xl p-3 max-w-[180px] transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.06] bg-[#111111] shadow-black/40' : 'border-gray-300 bg-white shadow-gray-900/20'}"
						style="backdrop-filter: blur(8px);">
						<div class="flex items-center gap-2 mb-1">
							<span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
							<span class="font-mono text-[10px] transition-colors duration-300 {$theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}">bob</span>
						</div>
						<p class="text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}">"This AI suggestion is actually fire 🔥"</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ─── Features ─── -->
	<section id="features" class="py-28 px-6 border-t transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-200'}">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<p class="font-mono text-xs mb-3 tracking-widest uppercase transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">Under the hood</p>
				<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">Built differently</h2>
			</div>

			<div class="grid sm:grid-cols-3 gap-4">
				{#each features as feature}
					<div class="group relative rounded-xl border p-7 transition-all duration-300 overflow-hidden {$theme === 'dark' ? 'border-white/[0.06] bg-[#111111] hover:border-[#4ade80]/20 hover:bg-[#111a13]' : 'border-gray-200 bg-white hover:border-[#059669]/30 hover:bg-gray-50'}">
						<!-- glow on hover -->
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
							style="background: radial-gradient(ellipse 80% 50% at 50% 0%, {$theme === 'dark' ? '#4ade8008' : '#05966908'} 0%, transparent 70%);">
						</div>

						<!-- glass shimmer top edge -->
						<div class="absolute top-0 inset-x-0 h-px"
							style={$theme === 'dark' ? 'background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);' : 'background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%);'}>
						</div>

						<div class="relative">
							<div class="w-9 h-9 rounded-lg border flex items-center justify-center mb-5 transition-all duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/10 border-[#4ade80]/20 text-[#4ade80]' : 'bg-[#059669]/10 border-[#059669]/30 text-[#059669]'}">
								{@html feature.icon}
							</div>

							<div class="flex items-start gap-2 mb-2 flex-wrap">
								<h3 class="text-sm font-semibold transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">{feature.title}</h3>
								<span class="font-mono text-[10px] border rounded-full px-2 py-0.5 transition-all duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60 border-[#4ade80]/20 bg-[#4ade80]/[0.04]' : 'text-[#059669]/60 border-[#059669]/30 bg-[#059669]/[0.08]'}">{feature.badge}</span>
							</div>

							<p class="text-sm leading-relaxed transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">{feature.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── CTA strip ─── -->
	<section class="py-28 px-6 border-t transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-200'}">
		<div class="max-w-2xl mx-auto text-center">
			<div class="relative rounded-2xl border p-12 sm:p-16 overflow-hidden transition-all duration-300 {$theme === 'dark' ? 'border-white/[0.06] bg-[#111111]' : 'border-gray-200 bg-white'}">
				<!-- Background glow -->
				<div class="absolute inset-0 pointer-events-none">
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px] transition-colors duration-300 {$theme === 'dark' ? 'bg-[#4ade80]/[0.05]' : 'bg-[#059669]/[0.08]'}"></div>
				</div>
				<div class="absolute top-0 inset-x-0 h-px"
					style={$theme === 'dark' ? 'background: linear-gradient(to right, transparent 0%, rgba(74, 222, 128, 0.2) 50%, transparent 100%);' : 'background: linear-gradient(to right, transparent 0%, rgba(5, 150, 105, 0.2) 50%, transparent 100%);'}>
				</div>

				<div class="relative">
					<p class="font-mono text-xs mb-4 tracking-widest uppercase transition-colors duration-300 {$theme === 'dark' ? 'text-[#4ade80]/60' : 'text-[#059669]/60'}">Open your terminal, then</p>
					<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">
						Start brogramming.
					</h2>
					<p class="text-sm mb-8 max-w-sm mx-auto transition-colors duration-300 {$theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}">
						No waitlist. No setup fee. Create a room in seconds and invite your whole team.
					</p>
					<a
						href="https://start.brogramming.io"
						class="group inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 {$theme === 'dark' ? 'bg-[#4ade80] text-black hover:bg-[#86efac]' : 'bg-[#059669] text-white hover:bg-[#047857]'}"
					>
						Start brogramming
						<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- ─── Footer ─── -->
<footer class="border-t px-6 py-8 transition-colors duration-300 {$theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-200'}">
	<div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
		<span class="font-mono text-sm font-medium tracking-tight transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-gray-900'}">brogramming</span>
		<p class="text-xs transition-colors duration-300 {$theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}">© 2026 brogramming. Code together.</p>
	</div>
</footer>