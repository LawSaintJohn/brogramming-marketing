<script>
	import { theme } from '$lib/theme.js';
	import HeroMockup from '$lib/HeroMockup.svelte';

	const D = (d, l) => $theme === 'dark' ? d : l;

	const steps = [
		{
			number: '01',
			title: 'Bring your own API key',
			desc: 'Connect Claude, GPT-4, Gemini — whatever model you trust. Your key, your data, never stored.'
		},
		{
			number: '02',
			title: 'Share a room link',
			desc: 'One click generates a shareable session URL. Invite your bro instantly — no accounts required to join.'
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
			desc: "See where your bro is, what they're editing, and watch AI completions flow in real-time."
		}
	];
</script>

<svelte:head>
	<title>brogramming — code together. ai included.</title>
	<meta name="description" content="Real-time collaborative coding where every developer brings their own AI. Yjs-powered sync, multiplayer cursors, no lock-in." />
</svelte:head>

<!-- ── Nav ── -->
<header
	class="fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300"
	style="
		border-color: {D('rgba(255,255,255,0.06)', 'rgba(0,0,0,0.08)')};
		background: {D('rgba(13,14,17,0.85)', 'rgba(248,248,245,0.85)')};
		backdrop-filter: blur(12px);
	"
>
	<div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
		<span
			class="font-mono text-sm font-bold tracking-tight transition-colors duration-300"
			style="color:{D('#f4f4f5','#0f0f0e')}; letter-spacing:-0.02em;"
		>brogramming<span style="color:#c8ff3c;">.</span></span>

		<div class="flex items-center gap-4">
			<button onclick={theme.toggle} class="theme-toggle" aria-label="Toggle theme"></button>

			<a
				href="https://start.brogramming.io"
				class="font-mono text-xs font-semibold px-3 py-1.5 rounded-md transition-all duration-200"
				style="
					color: {D('#c8ff3c','#5e8c00')};
					border: 1px solid {D('rgba(200,255,60,0.3)','rgba(94,140,0,0.3)')};
					background: {D('rgba(200,255,60,0.04)','rgba(94,140,0,0.06)')};
				"
			>ready, set, bro →</a>
		</div>
	</div>
</header>

<main>
	<!-- ── Hero ── -->
	<section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden">
		<!-- Radial glow -->
		<div class="absolute inset-0 pointer-events-none" style="z-index:0;">
			<div
				class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
				style="background:radial-gradient(ellipse 50% 40% at 50% 50%, {D('rgba(200,255,60,0.07)','rgba(94,140,0,0.06)')}, transparent 70%); filter:blur(40px);"
			></div>
		</div>

		<!-- Dot grid (already on body::before but add local one for hero density) -->
		<div
			class="absolute inset-0 pointer-events-none"
			style="
				z-index: 0;
				opacity: {D('0.6','0.7')};
				background-image: radial-gradient(circle, {D('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')} 1px, transparent 1px);
				background-size: 28px 28px;
			"
		></div>

		<div class="relative z-10 text-center max-w-3xl mx-auto">
			<!-- eyebrow pill -->
			<div
				class="inline-flex items-center gap-2 font-mono text-[11px] font-medium rounded-full px-3 py-1 mb-8 transition-all duration-300"
				style="
					color: {D('rgba(200,255,60,0.7)','rgba(94,140,0,0.8)')};
					border: 1px solid {D('rgba(200,255,60,0.2)','rgba(94,140,0,0.25)')};
					background: {D('rgba(200,255,60,0.04)','rgba(94,140,0,0.06)')};
					letter-spacing: 0.02em;
				"
			>
				<span
					class="w-1.5 h-1.5 rounded-full"
					style="background:{D('#c8ff3c','#5e8c00')}; box-shadow:0 0 6px {D('rgba(200,255,60,0.6)','rgba(94,140,0,0.4)')}; animation: pulse-dot 1.6s ease-in-out infinite;"
				></span>
				real-time · ai-native · crdt-powered
			</div>

			<h1
				class="font-mono font-bold tracking-tight leading-[0.98] mb-6 transition-colors duration-300"
				style="
					font-size: clamp(42px, 7vw, 96px);
					letter-spacing: -0.045em;
					color: {D('#f4f4f5','#0f0f0e')};
					text-transform: lowercase;
				"
			>
				brogrammers<br/>brogramming<br/><span style="color:#c8ff3c;">brogramming.</span>
			</h1>

			<p
				class="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-colors duration-300"
				style="color:{D('#a1a1aa','#5a5a58')};"
			>
				how much clearer could we be?
			</p>

			<div class="flex flex-col sm:flex-row items-center justify-center gap-3">
				<a
					href="https://start.brogramming.io"
					class="group inline-flex items-center gap-2 font-mono font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
					style="
						background: #c8ff3c;
						color: #08090b;
						box-shadow: 0 0 0 1px #8fcc1f, 0 8px 24px rgba(200,255,60,0.2);
					"
					onmouseenter="{e => e.currentTarget.style.transform='translateY(-1px)'}"
					onmouseleave="{e => e.currentTarget.style.transform='translateY(0)'}"
				>
					ready, set, bro
					<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
				</a>
				<a
					href="#how-it-works"
					class="font-mono text-sm px-4 py-3 transition-colors duration-200"
					style="color:{D('#71717a','#8a8a88')};"
				>
					see how it works
				</a>
			</div>
		</div>

		<!-- Mockup -->
		<div class="relative z-10 mt-20 w-full max-w-4xl mx-auto">
			<HeroMockup />
		</div>
	</section>

	<!-- ── How it works ── -->
	<section id="how-it-works" class="py-28 px-6" style="position:relative; z-index:1;">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 font-mono text-[11px] mb-4" style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">
					<span>◆</span> section_01 :: process
				</div>
				<h2
					class="font-mono font-bold tracking-tight transition-colors duration-300"
					style="font-size:clamp(28px,4vw,48px); letter-spacing:-0.04em; color:{D('#f4f4f5','#0f0f0e')}; text-transform:lowercase;"
				>how it <span style="color:#c8ff3c;">works.</span></h2>
			</div>

			<div
				class="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
				style="background:{D('rgba(255,255,255,0.04)','rgba(0,0,0,0.07)')}; border:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')};"
			>
				{#each steps as step, i}
					<div
						class="relative p-8 sm:p-10 transition-all duration-300 group"
						style="background:{D('#0d0e11','#ffffff')};"
						onmouseenter="{e => e.currentTarget.style.background = D('#14161b','#f8f8f5')}"
						onmouseleave="{e => e.currentTarget.style.background = D('#0d0e11','#ffffff')}"
					>
						{#if i < steps.length - 1}
							<div
								class="hidden sm:block absolute top-10 right-0 w-px h-8 translate-x-px"
								style="background:linear-gradient(to bottom, {D('rgba(255,255,255,0.08)','rgba(0,0,0,0.08)')} 0%, transparent 100%);"
							></div>
						{/if}
						<div
							class="font-mono text-xs mb-6 tracking-widest"
							style="color:{D('rgba(200,255,60,0.4)','rgba(94,140,0,0.4)')};"
						>{step.number}</div>
						<h3
							class="font-mono text-sm font-semibold mb-3 leading-snug transition-colors duration-300"
							style="color:{D('#f4f4f5','#0f0f0e')}; letter-spacing:-0.01em;"
						>{step.title}</h3>
						<p class="text-sm leading-relaxed" style="color:{D('#71717a','#5a5a58')};">{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ── Live Video & Audio ── -->
	<section
		class="py-28 px-6"
		style="border-top:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; position:relative; z-index:1;"
	>
		<div class="max-w-5xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div>
					<div class="inline-flex items-center gap-2 font-mono text-[11px] mb-4" style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">
						<span>◆</span> section_02 :: live communication
					</div>
					<h2
						class="font-mono font-bold tracking-tight mb-6 transition-colors duration-300"
						style="font-size:clamp(26px,3.5vw,44px); letter-spacing:-0.04em; color:{D('#f4f4f5','#0f0f0e')}; text-transform:lowercase;"
					>
						bro to bro,<br/><span style="color:#c8ff3c;">face to face.</span>
					</h2>
					<p class="text-base leading-relaxed mb-8" style="color:{D('#a1a1aa','#5a5a58')};">
						why type when you can talk? built-in video and audio chat means you can see your bro's reaction when the ai suggests something brilliant (or questionable). debug together, brainstorm live.
					</p>
					<div class="space-y-4">
						{#each [
							{ label:'hd video calls', desc:'crystal-clear video chat integrated right into your coding session', icon:'<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>' },
							{ label:'spatial audio', desc:'high-quality audio that adapts to your team size and setup', icon:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>' },
							{ label:'smart controls', desc:'push-to-talk, auto-mute, and noise cancellation built-in', icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/>' }
						] as item}
							<div class="flex items-start gap-3">
								<div
									class="w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-all duration-300"
									style="background:{D('rgba(200,255,60,0.08)','rgba(94,140,0,0.08)')}; border-color:{D('rgba(200,255,60,0.25)','rgba(94,140,0,0.3)')}; color:{D('#c8ff3c','#5e8c00')};"
								>
									<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">{@html item.icon}</svg>
								</div>
								<div>
									<h3 class="font-mono text-xs font-semibold mb-1 lowercase" style="color:{D('#f4f4f5','#0f0f0e')}; letter-spacing:-0.01em;">{item.label}</h3>
									<p class="text-sm" style="color:{D('#71717a','#5a5a58')};">{item.desc}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="relative">
					<!-- Video chat mockup -->
					<div
						class="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
						style="border:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.1)')}; background:{D('#14161b','#ffffff')}; box-shadow:0 32px 80px {D('rgba(0,0,0,0.6)','rgba(0,0,0,0.12)')};"
					>
						<!-- Header -->
						<div
							class="flex items-center justify-between px-4 py-3 border-b"
							style="border-color:{D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; background:{D('#08090b','#f0f0ec')};"
						>
							<div class="flex items-center gap-2">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="{D('#c8ff3c','#5e8c00')}" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
								<span class="font-mono text-xs" style="color:{D('#f4f4f5','#0f0f0e')};">room-a3f9b2</span>
							</div>
							<div class="flex items-center gap-1">
								<span class="w-1.5 h-1.5 rounded-full" style="background:#c8ff3c; box-shadow:0 0 6px rgba(200,255,60,0.5);"></span>
								<span class="font-mono text-xs" style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">live</span>
							</div>
						</div>

						<!-- Video grid -->
						<div class="p-4">
							<div class="grid grid-cols-2 gap-3">
								{#each [
									{ id:'A', name:'alice', color:'#c8ff3c', bg:'rgba(200,255,60,0.12)', border:'rgba(200,255,60,0.35)', muted:false },
									{ id:'B', name:'bob', color:'#ff4dc4', bg:'rgba(255,77,196,0.12)', border:'rgba(255,77,196,0.35)', muted:false },
									{ id:'C', name:'carol', color:'#4dd6ff', bg:'rgba(77,214,255,0.12)', border:'rgba(77,214,255,0.35)', muted:true },
									{ id:'you', name:'you', color:'#ff5722', bg:'rgba(255,87,34,0.12)', border:'rgba(255,87,34,0.35)', muted:false }
								] as p}
									<div
										class="relative rounded-lg overflow-hidden"
										style="aspect-ratio:16/10; background:{p.bg}; border:1px solid {p.border};"
									>
										<div class="absolute inset-0 flex items-center justify-center">
											<div
												class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold"
												style="background:{p.bg}; border-color:{p.color}; color:{p.color};"
											>{p.id}</div>
										</div>
										<div
											class="absolute bottom-1.5 left-2 font-mono text-[9px] font-semibold px-1.5 py-0.5 rounded"
											style="background:rgba(0,0,0,0.6); color:#f4f4f5;"
										>{p.name}</div>
										<div
											class="absolute top-1.5 right-1.5 w-4 h-4 rounded-full border flex items-center justify-center"
											style="background:{p.muted ? 'rgba(255,87,34,0.15)' : p.bg}; border-color:{p.muted ? '#ff5722' : p.color}; color:{p.muted ? '#ff5722' : p.color}; opacity:{p.muted ? '0.6' : '1'};"
										>
											<svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
												{#if p.muted}
													<path d="M1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2"/>
												{:else}
													<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
												{/if}
											</svg>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- Controls -->
						<div
							class="flex items-center justify-center gap-3 px-4 py-3 border-t"
							style="border-color:{D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; background:{D('#08090b','#f0f0ec')};"
						>
							{#each ['mic','video','hang'] as ctrl}
								<button
									class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200"
									style="background:{ctrl === 'hang' ? 'rgba(255,87,34,0.1)' : D('rgba(200,255,60,0.08)','rgba(94,140,0,0.08)')}; border-color:{ctrl === 'hang' ? 'rgba(255,87,34,0.3)' : D('rgba(200,255,60,0.25)','rgba(94,140,0,0.3)')}; color:{ctrl === 'hang' ? '#ff5722' : D('#c8ff3c','#5e8c00')};"
								>
									<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										{#if ctrl === 'mic'}<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
										{:else if ctrl === 'video'}<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
										{:else}<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.42 19.42 0 0 1 3.07 9.12 19.79 19.79 0 0 1 0 .5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11z"/>
										{/if}
									</svg>
								</button>
							{/each}
						</div>
					</div>

					<!-- Floating chat bubble -->
					<div
						class="absolute -bottom-4 -right-4 rounded-lg border shadow-xl p-3 max-w-[180px]"
						style="border-color:{D('rgba(255,255,255,0.06)','rgba(0,0,0,0.1)')}; background:{D('#14161b','#ffffff')}; backdrop-filter:blur(8px);"
					>
						<div class="flex items-center gap-2 mb-1">
							<span class="w-1.5 h-1.5 rounded-full" style="background:#ff4dc4;"></span>
							<span class="font-mono text-[10px]" style="color:#ff4dc4;">bob</span>
						</div>
						<p class="text-xs" style="color:{D('#d4d4d8','#2a2a28')};">"this ai suggestion is actually fire 🔥"</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Features ── -->
	<section
		id="features"
		class="py-28 px-6"
		style="border-top:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; position:relative; z-index:1;"
	>
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 font-mono text-[11px] mb-4" style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">
					<span>◆</span> section_03 :: under the hood
				</div>
				<h2
					class="font-mono font-bold tracking-tight transition-colors duration-300"
					style="font-size:clamp(28px,4vw,48px); letter-spacing:-0.04em; color:{D('#f4f4f5','#0f0f0e')}; text-transform:lowercase;"
				>built <span style="color:#c8ff3c;">differently.</span></h2>
			</div>

			<div class="grid sm:grid-cols-3 gap-4">
				{#each features as feature}
					<div
						class="group relative rounded-xl border p-7 transition-all duration-300 overflow-hidden"
						style="border-color:{D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; background:{D('#14161b','#ffffff')};"
						onmouseenter="{e => { e.currentTarget.style.borderColor = D('rgba(200,255,60,0.2)','rgba(94,140,0,0.25)'); e.currentTarget.style.background = D('#1c1f26','#f8f8f5'); }}"
						onmouseleave="{e => { e.currentTarget.style.borderColor = D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)'); e.currentTarget.style.background = D('#14161b','#ffffff'); }}"
					>
						<!-- top shimmer -->
						<div
							class="absolute top-0 inset-x-0 h-px pointer-events-none"
							style="background:linear-gradient(to right, transparent, {D('rgba(255,255,255,0.07)','rgba(0,0,0,0.05)')} 50%, transparent);"
						></div>

						<div class="relative">
							<div
								class="w-9 h-9 rounded-lg border flex items-center justify-center mb-5 transition-all duration-300"
								style="background:{D('rgba(200,255,60,0.08)','rgba(94,140,0,0.08)')}; border-color:{D('rgba(200,255,60,0.2)','rgba(94,140,0,0.25)')}; color:{D('#c8ff3c','#5e8c00')};"
							>
								{@html feature.icon}
							</div>

							<div class="flex items-start gap-2 mb-2 flex-wrap">
								<h3
									class="font-mono text-xs font-semibold lowercase"
									style="color:{D('#f4f4f5','#0f0f0e')}; letter-spacing:-0.01em;"
								>{feature.title}</h3>
								<span
									class="font-mono text-[10px] border rounded-full px-2 py-0.5"
									style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')}; border-color:{D('rgba(200,255,60,0.2)','rgba(94,140,0,0.25)')}; background:{D('rgba(200,255,60,0.04)','rgba(94,140,0,0.06)')};"
								>{feature.badge}</span>
							</div>

							<p class="text-sm leading-relaxed" style="color:{D('#71717a','#5a5a58')};">{feature.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ── CTA ── -->
	<section
		class="py-28 px-6"
		style="border-top:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; position:relative; z-index:1;"
	>
		<div class="max-w-2xl mx-auto text-center">
			<div
				class="relative rounded-2xl border p-12 sm:p-16 overflow-hidden transition-all duration-300"
				style="border-color:{D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; background:{D('#14161b','#ffffff')};"
			>
				<!-- glow -->
				<div
					class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
					style="background:radial-gradient(ellipse, {D('rgba(200,255,60,0.06)','rgba(94,140,0,0.05)')} 0%, transparent 70%); filter:blur(40px);"
				></div>
				<!-- top gradient line -->
				<div
					class="absolute top-0 inset-x-0 h-px pointer-events-none"
					style="background:linear-gradient(to right, transparent, {D('rgba(200,255,60,0.25)','rgba(94,140,0,0.2)')} 50%, transparent);"
				></div>

				<div class="relative">
					<div
						class="inline-flex items-center gap-2 font-mono text-[11px] mb-6"
						style="color:{D('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};"
					>
						<span>◆</span> eof :: ready_to_bro.md
					</div>
					<h2
						class="font-mono font-bold tracking-tight mb-4 transition-colors duration-300"
						style="font-size:clamp(28px,4vw,52px); letter-spacing:-0.045em; color:{D('#f4f4f5','#0f0f0e')}; text-transform:lowercase;"
					>
						code together<span style="color:#c8ff3c;">.</span>
					</h2>
					<p
						class="font-mono text-sm mb-8 max-w-sm mx-auto"
						style="color:{D('#71717a','#5a5a58')};"
					>
						// no waitlist. no setup fee. create a room in seconds.
					</p>
					<a
						href="https://start.brogramming.io"
						class="group inline-flex items-center gap-2 font-mono font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
						style="background:#c8ff3c; color:#08090b; box-shadow:0 0 0 1px #8fcc1f, 0 8px 24px rgba(200,255,60,0.2);"
						onmouseenter="{e => e.currentTarget.style.transform='translateY(-1px)'}"
						onmouseleave="{e => e.currentTarget.style.transform='translateY(0)'}"
					>
						ready, set, bro
						<span class="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- ── Footer ── -->
<footer
	class="px-6 py-8 transition-colors duration-300"
	style="border-top:1px solid {D('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; position:relative; z-index:1;"
>
	<div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
		<span
			class="font-mono text-sm font-bold tracking-tight transition-colors duration-300"
			style="color:{D('#f4f4f5','#0f0f0e')}; letter-spacing:-0.02em;"
		>brogramming<span style="color:#c8ff3c;">.</span></span>
		<p class="font-mono text-xs" style="color:{D('#71717a','#8a8a88')};">© 2026 brogramming. // code together.</p>
	</div>
</footer>
