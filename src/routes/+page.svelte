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
	<title>Brogramming — Code together. AI included.</title>
	<meta name="description" content="Real-time collaborative coding where every developer brings their own AI. Yjs-powered sync, multiplayer cursors, no lock-in." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Nav -->
<header class="fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300" 
	class:border-white/[0.04]={$theme === 'dark'}
	class:border-black/[0.08]={$theme === 'light'}
	class:bg-[#0a0a0a]/80={$theme === 'dark'}
	class:bg-white/80={$theme === 'light'}
	style="backdrop-filter: blur(12px);">
	<div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
		<span class="font-mono text-sm font-medium tracking-tight transition-colors duration-300"
			class:text-white={$theme === 'dark'}
			class:text-gray-900={$theme === 'light'}>brogramming</span>
		
		<div class="flex items-center gap-4">
			<!-- Theme toggle -->
			<button 
				on:click={theme.toggle}
				class="theme-toggle"
				aria-label="Toggle theme"
			></button>
			
			<a
				href="https://start.brogramming.io"
				class="text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200"
				class:text-[#4ade80]={$theme === 'dark'}
				class:border-[#4ade80]/30={$theme === 'dark'}
				class:hover:bg-[#4ade80]/10={$theme === 'dark'}
				class:text-[#059669]={$theme === 'light'}
				class:border-[#059669]/30={$theme === 'light'}
				class:hover:bg-[#059669]/10={$theme === 'light'}
				style="border: 1px solid;"
			>
				Start Brogramming →
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
		<div class="absolute inset-0 pointer-events-none transition-opacity duration-300"
			class:opacity-[0.025]={$theme === 'dark'}
			class:opacity-[0.04]={$theme === 'light'}
			style="background-image: linear-gradient({$theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, {$theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px); background-size: 80px 80px;">
		</div>

		<div class="relative z-10 text-center max-w-3xl mx-auto">
			<!-- eyebrow -->
			<div class="inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1 mb-8 transition-all duration-300"
				class:text-[#4ade80]/70={$theme === 'dark'}
				class:bg-[#4ade80]/[0.04]={$theme === 'dark'}
				class:text-[#059669]/70={$theme === 'light'}
				class:bg-[#059669]/[0.08]={$theme === 'light'}>
				<span class="w-1.5 h-1.5 rounded-full animate-pulse"
					class:bg-[#4ade80]={$theme === 'dark'}
					class:bg-[#059669]={$theme === 'light'}></span>
				Real-time · AI-native · CRDT-powered
			</div>

			<h1 class="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 transition-colors duration-300"
				class:text-white={$theme === 'dark'}
				class:text-gray-900={$theme === 'light'}>
				Brogrammers Brogramming <span class:text-[#4ade80]={$theme === 'dark'} class:text-[#059669]={$theme === 'light'}>Brogramming.</span>
			</h1>

			<p class="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-colors duration-300"
				class:text-gray-400={$theme === 'dark'}
				class:text-gray-600={$theme === 'light'}>
				How much clearer could we be?
			</p>

			<div class="flex flex-col sm:flex-row items-center justify-center gap-3">
				<a
					href="https://start.brogramming.io"
					class="group inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
					class:bg-[#4ade80]={$theme === 'dark'}
					class:text-black={$theme === 'dark'}
					class:hover:bg-[#86efac]={$theme === 'dark'}
					class:bg-[#059669]={$theme === 'light'}
					class:text-white={$theme === 'light'}
					class:hover:bg-[#047857]={$theme === 'light'}
				>
					Start Brogramming
					<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
				</a>
				<a
					href="#how-it-works"
					class="text-sm px-4 py-3 transition-colors duration-200"
					class:text-gray-500={$theme === 'dark'}
					class:hover:text-gray-300={$theme === 'dark'}
					class:text-gray-600={$theme === 'light'}
					class:hover:text-gray-800={$theme === 'light'}
				>
					See how it works
				</a>
			</div>
		</div>

		<!-- Terminal mockup -->
		<div class="relative z-10 mt-20 w-full max-w-2xl mx-auto">
			<div class="rounded-xl border overflow-hidden shadow-2xl transition-all duration-300"
				class:border-white/[0.06]={$theme === 'dark'}
				class:bg-[#111111]/80={$theme === 'dark'}
				class:shadow-black/60={$theme === 'dark'}
				class:border-gray-300={$theme === 'light'}
				class:bg-white/90={$theme === 'light'}
				class:shadow-gray-900/20={$theme === 'light'}
				style="backdrop-filter: blur(12px);">
				<!-- Title bar -->
				<div class="flex items-center gap-1.5 px-4 py-3 border-b transition-all duration-300"
					class:border-white/[0.05]={$theme === 'dark'}
					class:bg-[#0d0d0d]={$theme === 'dark'}
					class:border-gray-200={$theme === 'light'}
					class:bg-gray-50={$theme === 'light'}>
					<div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
					<span class="ml-3 font-mono text-xs transition-colors duration-300"
						class:text-gray-600={$theme === 'dark'}
						class:text-gray-500={$theme === 'light'}>session://room-a3f9b2</span>
					<div class="ml-auto flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full"
							class:bg-[#4ade80]={$theme === 'dark'}
							class:bg-[#059669]={$theme === 'light'}></span>
						<span class="font-mono text-xs transition-colors duration-300"
							class:text-[#4ade80]/60={$theme === 'dark'}
							class:text-[#059669]/60={$theme === 'light'}>3 connected</span>
					</div>
				</div>
				<!-- Code lines -->
				<div class="px-5 py-5 font-mono text-xs sm:text-sm leading-7 text-left overflow-hidden">
					<div class="flex gap-4">
						<div class="select-none text-right w-4 shrink-0 leading-7 transition-colors duration-300"
							class:text-gray-700={$theme === 'dark'}
							class:text-gray-400={$theme === 'light'}>
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
					<div class="mt-4 pt-4 border-t flex items-center gap-3 transition-colors duration-300"
						class:border-white/[0.04]={$theme === 'dark'}
						class:border-gray-200={$theme === 'light'}>
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full"
								class:bg-[#4ade80]={$theme === 'dark'}
								class:bg-[#059669]={$theme === 'light'}></span>
							<span class="text-[10px] font-mono transition-colors duration-300"
								class:text-gray-600={$theme === 'dark'}
								class:text-gray-500={$theme === 'light'}>@alice · Claude</span>
						</div>
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-blue-400"></span>
							<span class="text-[10px] font-mono transition-colors duration-300"
								class:text-gray-600={$theme === 'dark'}
								class:text-gray-500={$theme === 'light'}>@bob · GPT-4o</span>
						</div>
						<div class="flex items-center gap-1.5">
							<span class="w-2 h-2 rounded-full bg-violet-400"></span>
							<span class="text-[10px] font-mono transition-colors duration-300"
								class:text-gray-600={$theme === 'dark'}
								class:text-gray-500={$theme === 'light'}>@carol · Gemini</span>
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
				<p class="font-mono text-xs mb-3 tracking-widest uppercase transition-colors duration-300"
					class:text-[#4ade80]/60={$theme === 'dark'}
					class:text-[#059669]/60={$theme === 'light'}>Process</p>
				<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300"
					class:text-white={$theme === 'dark'}
					class:text-gray-900={$theme === 'light'}>How it works</h2>
			</div>

			<div class="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border transition-all duration-300"
				class:bg-white/[0.04]={$theme === 'dark'}
				class:border-white/[0.04]={$theme === 'dark'}
				class:bg-gray-200={$theme === 'light'}
				class:border-gray-300={$theme === 'light'}>
				{#each steps as step, i}
					<div class="relative p-8 sm:p-10 group transition-all duration-300"
						class:bg-[#0a0a0a]={$theme === 'dark'}
						class:hover:bg-[#0e0e0e]={$theme === 'dark'}
						class:bg-white={$theme === 'light'}
						class:hover:bg-gray-50={$theme === 'light'}>
						<!-- connector line -->
						{#if i < steps.length - 1}
							<div class="hidden sm:block absolute top-10 right-0 w-px h-8 translate-x-px transition-colors duration-300"
								class:bg-gradient-to-b={$theme === 'dark'}
								class:from-white/10={$theme === 'dark'}
								class:to-transparent={$theme === 'dark'}
								style={$theme === 'light' ? 'background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%);' : ''}>
							</div>
						{/if}
						<div class="font-mono text-xs mb-6 tracking-widest transition-colors duration-300"
							class:text-[#4ade80]/40={$theme === 'dark'}
							class:text-[#059669]/40={$theme === 'light'}>{step.number}</div>
						<h3 class="text-base font-semibold mb-3 leading-snug transition-colors duration-300"
							class:text-white={$theme === 'dark'}
							class:text-gray-900={$theme === 'light'}>{step.title}</h3>
						<p class="text-sm leading-relaxed transition-colors duration-300"
							class:text-gray-500={$theme === 'dark'}
							class:text-gray-600={$theme === 'light'}>{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── Features ─── -->
	<section id="features" class="py-28 px-6 border-t transition-colors duration-300"
		class:border-white/[0.04]={$theme === 'dark'}
		class:border-gray-200={$theme === 'light'}>
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<p class="font-mono text-xs mb-3 tracking-widest uppercase transition-colors duration-300"
					class:text-[#4ade80]/60={$theme === 'dark'}
					class:text-[#059669]/60={$theme === 'light'}>Under the hood</p>
				<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300"
					class:text-white={$theme === 'dark'}
					class:text-gray-900={$theme === 'light'}>Built differently</h2>
			</div>

			<div class="grid sm:grid-cols-3 gap-4">
				{#each features as feature}
					<div class="group relative rounded-xl border p-7 transition-all duration-300 overflow-hidden"
						class:border-white/[0.06]={$theme === 'dark'}
						class:bg-[#111111]={$theme === 'dark'}
						class:hover:border-[#4ade80]/20={$theme === 'dark'}
						class:hover:bg-[#111a13]={$theme === 'dark'}
						class:border-gray-200={$theme === 'light'}
						class:bg-white={$theme === 'light'}
						class:hover:border-[#059669]/30={$theme === 'light'}
						class:hover:bg-gray-50={$theme === 'light'}>
						<!-- glow on hover -->
						<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
							style="background: radial-gradient(ellipse 80% 50% at 50% 0%, {$theme === 'dark' ? '#4ade8008' : '#05966908'} 0%, transparent 70%);">
						</div>

						<!-- glass shimmer top edge -->
						<div class="absolute top-0 inset-x-0 h-px transition-colors duration-300"
							class:bg-gradient-to-r={$theme === 'dark'}
							class:from-transparent={$theme === 'dark'}
							class:via-white/[0.08]={$theme === 'dark'}
							class:to-transparent={$theme === 'dark'}
							style={$theme === 'light' ? 'background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%);' : ''}>
						</div>

						<div class="relative">
							<div class="w-9 h-9 rounded-lg border flex items-center justify-center mb-5 transition-all duration-300"
								class:bg-[#4ade80]/10={$theme === 'dark'}
								class:border-[#4ade80]/20={$theme === 'dark'}
								class:text-[#4ade80]={$theme === 'dark'}
								class:bg-[#059669]/10={$theme === 'light'}
								class:border-[#059669]/30={$theme === 'light'}
								class:text-[#059669]={$theme === 'light'}>
								{@html feature.icon}
							</div>

							<div class="flex items-start gap-2 mb-2 flex-wrap">
								<h3 class="text-sm font-semibold transition-colors duration-300"
									class:text-white={$theme === 'dark'}
									class:text-gray-900={$theme === 'light'}>{feature.title}</h3>
								<span class="font-mono text-[10px] border rounded-full px-2 py-0.5 transition-all duration-300"
									class:text-[#4ade80]/60={$theme === 'dark'}
									class:border-[#4ade80]/20={$theme === 'dark'}
									class:bg-[#4ade80]/[0.04]={$theme === 'dark'}
									class:text-[#059669]/60={$theme === 'light'}
									class:border-[#059669]/30={$theme === 'light'}
									class:bg-[#059669]/[0.08]={$theme === 'light'}>{feature.badge}</span>
							</div>

							<p class="text-sm leading-relaxed transition-colors duration-300"
								class:text-gray-500={$theme === 'dark'}
								class:text-gray-600={$theme === 'light'}>{feature.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── CTA strip ─── -->
	<section class="py-28 px-6 border-t transition-colors duration-300"
		class:border-white/[0.04]={$theme === 'dark'}
		class:border-gray-200={$theme === 'light'}>
		<div class="max-w-2xl mx-auto text-center">
			<div class="relative rounded-2xl border p-12 sm:p-16 overflow-hidden transition-all duration-300"
				class:border-white/[0.06]={$theme === 'dark'}
				class:bg-[#111111]={$theme === 'dark'}
				class:border-gray-200={$theme === 'light'}
				class:bg-white={$theme === 'light'}>
				<!-- Background glow -->
				<div class="absolute inset-0 pointer-events-none">
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px] transition-colors duration-300"
						class:bg-[#4ade80]/[0.05]={$theme === 'dark'}
						class:bg-[#059669]/[0.08]={$theme === 'light'}></div>
				</div>
				<div class="absolute top-0 inset-x-0 h-px transition-colors duration-300"
					class:bg-gradient-to-r={$theme === 'dark'}
					class:from-transparent={$theme === 'dark'}
					class:via-[#4ade80]/20={$theme === 'dark'}
					class:to-transparent={$theme === 'dark'}
					style={$theme === 'light' ? 'background: linear-gradient(to right, transparent 0%, rgba(5, 150, 105, 0.2) 50%, transparent 100%);' : ''}>
				</div>

				<div class="relative">
					<p class="font-mono text-xs mb-4 tracking-widest uppercase transition-colors duration-300"
						class:text-[#4ade80]/60={$theme === 'dark'}
						class:text-[#059669]/60={$theme === 'light'}>Open your terminal, then</p>
					<h2 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 transition-colors duration-300"
						class:text-white={$theme === 'dark'}
						class:text-gray-900={$theme === 'light'}>
						Start brogramming.
					</h2>
					<p class="text-sm mb-8 max-w-sm mx-auto transition-colors duration-300"
						class:text-gray-500={$theme === 'dark'}
						class:text-gray-600={$theme === 'light'}>
						No waitlist. No setup fee. Create a room in seconds and invite your whole team.
					</p>
					<a
						href="https://start.brogramming.io"
						class="group inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
						class:bg-[#4ade80]={$theme === 'dark'}
						class:text-black={$theme === 'dark'}
						class:hover:bg-[#86efac]={$theme === 'dark'}
						class:bg-[#059669]={$theme === 'light'}
						class:text-white={$theme === 'light'}
						class:hover:bg-[#047857]={$theme === 'light'}
					>
						Start Brogramming
						<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- ─── Footer ─── -->
<footer class="border-t px-6 py-8 transition-colors duration-300"
	class:border-white/[0.04]={$theme === 'dark'}
	class:border-gray-200={$theme === 'light'}>
	<div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
		<span class="font-mono text-sm font-medium tracking-tight transition-colors duration-300"
			class:text-white={$theme === 'dark'}
			class:text-gray-900={$theme === 'light'}>brogramming</span>
		<p class="text-xs transition-colors duration-300"
			class:text-gray-600={$theme === 'dark'}
			class:text-gray-500={$theme === 'light'}>© 2026 Brogramming. Code together.</p>
	</div>
</footer>