<script>
	import { theme } from '$lib/theme.js';
	const dk = (d, l) => $theme === 'dark' ? d : l;
</script>

<div
	class="w-full rounded-xl overflow-hidden select-none text-[11px] transition-all duration-300"
	style="
		font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
		border: 1px solid {dk('rgba(255,255,255,0.07)', 'rgba(0,0,0,0.10)')};
		box-shadow: 0 40px 100px {dk('rgba(0,0,0,0.75)', 'rgba(0,0,0,0.18)')};
		background: {dk('#14161b', '#f5f5f5')};
	"
>

	<!-- ══ App bar ══ -->
	<div
		class="flex items-center justify-between px-4 shrink-0 border-b"
		style="height:38px; background:{dk('#08090b','#ebebeb')}; border-color:{dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.09)')};"
	>
		<div class="flex items-center gap-3">
			<div class="flex gap-1.5">
				<div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
				<div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
				<div class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
			</div>
			<span class="text-[12px] font-medium tracking-tight" style="font-family:'JetBrains Mono',ui-monospace,monospace; color:{dk('#e5e7eb','#111')};">brogramming<span style="color:#c8ff3c;">.</span></span>
		</div>

		<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px]"
			style="color:{dk('#6b7280','#9ca3af')}; border-color:{dk('rgba(255,255,255,0.08)','rgba(0,0,0,0.1)')};">
			<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
			call · #x7k2m
		</div>

		<div class="flex items-center gap-2">
			<!-- 2 avatars only -->
			<div class="flex -space-x-1.5">
				<div class="w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] font-bold text-black z-20"
					style="background:#c8ff3c; border-color:{dk('#08090b','#ebebeb')};">A</div>
				<div class="w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] font-bold text-black z-10"
					style="background:#ff4dc4; border-color:{dk('#08090b','#ebebeb')};">B</div>
			</div>
			<span class="text-[10px]" style="color:{dk('#4b5563','#9ca3af')};">2 live</span>
			<div class="ml-2 flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-semibold"
				style="background:#c8ff3c; color:#000; box-shadow:0 0 10px rgba(200,255,60,0.25);">
				Ready, Set, Bro →
			</div>
		</div>
	</div>

	<!-- ══ 3-column body ══ -->
	<div class="flex" style="height:360px;">

		<!-- ── FILES panel ── -->
		<div class="flex flex-col shrink-0 border-r overflow-hidden"
			style="width:148px; background:{dk('#0d0e11','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
			<div class="flex items-center justify-between px-3 py-1.5 border-b shrink-0"
				style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<span class="text-[10px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">FILES</span>
			</div>
			<div class="px-2 py-2 flex flex-col gap-0.5 text-[11px]" style="color:{dk('#6b7280','#6b7280')};">
				<div class="px-1.5 py-0.5 font-medium" style="color:{dk('#9ca3af','#374151')};">wanderlust-site</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5" style="color:{dk('#4b5563','#9ca3af')};">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>package.json
				</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c8ff3c" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
					<span style="color:{dk('#d1d5db','#374151')};">src</span>
				</div>
				<div class="flex items-center gap-1 pl-5 py-0.5 rounded" style="background:rgba(200,255,60,0.07); color:#c8ff3c;">
					<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
					+page.svelte
				</div>
				<div class="flex items-center gap-1 pl-5 py-0.5" style="color:{dk('#4b5563','#9ca3af')};">
					<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
					+layout.svelte
				</div>
				<div class="flex items-center gap-1 pl-5 py-0.5" style="color:{dk('#4b5563','#9ca3af')};">
					<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
					app.css
				</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5" style="color:{dk('#4b5563','#9ca3af')};">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>svelte.config.js
				</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5" style="color:{dk('#4b5563','#9ca3af')};">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>vite.config.js
				</div>
			</div>
		</div>

		<!-- ── Center: browser preview ── -->
		<div class="flex flex-col flex-1 overflow-hidden relative">

			<!-- Browser chrome bar -->
			<div class="flex items-center gap-2 px-3 shrink-0 border-b"
				style="height:32px; background:{dk('#14161b','#f5f5f5')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<div class="flex gap-1 shrink-0">
					<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="{dk('#374151','#9ca3af')}" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
					<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="{dk('#374151','#9ca3af')}" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
					<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="{dk('#374151','#9ca3af')}" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
				</div>
				<div class="flex-1 flex items-center gap-1.5 rounded px-2.5 text-[10px]"
					style="height:20px; background:{dk('#1c1f26','#e8e8e8')}; color:{dk('#4b5563','#9ca3af')};">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
					wanderlust.vercel.app
				</div>
				<span class="text-[10px] shrink-0" style="color:{dk('#374151','#6b7280')};">watch</span>
			</div>

			<!-- ── Fake travel site preview ── -->
			<div class="flex-1 overflow-hidden relative" style="background:#0f1729;">

				<!-- Travel site nav -->
				<div class="flex items-center justify-between px-5 py-2.5" style="background:#0f1729; border-bottom:1px solid rgba(255,255,255,0.06);">
					<span style="font-family:'JetBrains Mono',ui-monospace,monospace; font-size:12px; font-weight:600; color:#f8fafc; letter-spacing:-0.02em;">wanderlust</span>
					<div class="flex items-center gap-4 text-[10px]" style="color:rgba(248,250,252,0.5);">
						<span>Destinations</span>
						<span>Tours</span>
						<span>About</span>
						<div class="px-3 py-1 rounded-full text-[10px] font-semibold" style="background:#f97316; color:#fff;">Book now</div>
					</div>
				</div>

				<!-- Hero section -->
				<div class="px-6 pt-5 pb-4 relative overflow-hidden">
					<!-- BG gradient blob -->
					<div class="absolute inset-0" style="background:linear-gradient(135deg, #1e3a5f 0%, #0f1729 50%, #1a1035 100%);"></div>
					<div class="absolute top-0 right-0 w-32 h-32 rounded-full" style="background:rgba(249,115,22,0.15); filter:blur(32px);"></div>
					<div class="absolute bottom-0 left-8 w-24 h-24 rounded-full" style="background:rgba(99,102,241,0.15); filter:blur(24px);"></div>
					<div class="relative z-10">
						<div class="text-[9px] font-semibold tracking-widest uppercase mb-1.5" style="color:#f97316;">✦ &nbsp;Summer 2026</div>
						<div style="font-size:20px; font-weight:700; line-height:1.15; color:#f8fafc; letter-spacing:-0.03em;">Discover the<br/><span style="color:#f97316;">World.</span></div>
						<p class="mt-1.5 text-[9px] leading-4" style="color:rgba(248,250,252,0.5); max-width:180px;">Curated journeys to 50+ destinations. Expert guides, zero hassle.</p>
						<div class="mt-3 flex items-center gap-2">
							<div class="px-3 py-1.5 rounded-lg text-[10px] font-bold" style="background:#f97316; color:#fff;">Explore trips →</div>
							<div class="px-3 py-1.5 rounded-lg text-[10px]" style="border:1px solid rgba(255,255,255,0.15); color:rgba(248,250,252,0.6);">See the map</div>
						</div>
					</div>
				</div>

				<!-- Destination cards row -->
				<div class="flex gap-2 px-5 pb-3 mt-1">
					{#each [
						{ name:'Kyoto', tag:'Japan', color:'#6366f1', icon:'⛩' },
						{ name:'Amalfi', tag:'Italy', color:'#0ea5e9', icon:'⛵' },
						{ name:'Marrakech', tag:'Morocco', color:'#f97316', icon:'🕌' }
					] as dest}
						<div class="flex-1 rounded-lg overflow-hidden" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);">
							<div class="flex items-center justify-center text-lg py-2.5" style="background:rgba(255,255,255,0.04);">{dest.icon}</div>
							<div class="px-2 py-1.5">
								<div class="text-[10px] font-semibold" style="color:#f8fafc;">{dest.name}</div>
								<div class="text-[9px]" style="color:{dest.color};">{dest.tag}</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- ── Cursors over preview ── -->

				<!-- Alice cursor: hero section -->
				<div class="absolute pointer-events-none" style="top:68px; left:165px;">
					<div class="absolute px-2 py-0.5 rounded text-[10px] font-bold text-black whitespace-nowrap"
						style="top:14px; left:12px; background:#c8ff3c; font-family:'Geist',ui-sans-serif,system-ui,sans-serif;">@alice</div>
					<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:relative; z-index:1; filter:drop-shadow(0 1px 3px rgba(0,0,0,0.6));">
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" fill="#c8ff3c"/>
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" stroke="rgba(0,0,0,0.3)" stroke-width="0.75"/>
					</svg>
				</div>

				<!-- Bob cursor: cards row -->
				<div class="absolute pointer-events-none" style="bottom:44px; left:96px;">
					<div class="absolute px-2 py-0.5 rounded text-[10px] font-bold text-black whitespace-nowrap"
						style="top:14px; left:12px; background:#ff4dc4; font-family:'Geist',ui-sans-serif,system-ui,sans-serif;">@bob</div>
					<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:relative; z-index:1; filter:drop-shadow(0 1px 3px rgba(0,0,0,0.6));">
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" fill="#ff4dc4"/>
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" stroke="rgba(0,0,0,0.3)" stroke-width="0.75"/>
					</svg>
				</div>
			</div>

			<!-- Terminal strip -->
			<div class="flex flex-col shrink-0 border-t overflow-hidden" style="height:64px; background:{dk('#08090b','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; font-family:'JetBrains Mono',ui-monospace,monospace;">
				<div class="flex items-center gap-3 px-3 border-b shrink-0" style="height:22px; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.07)')};">
					<span class="text-[9px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">TERMINAL</span>
					<span class="text-[9px]" style="color:{dk('#4b5563','#9ca3af')};">file</span>
					<span class="text-[9px] font-medium" style="color:{dk('#e5e7eb','#111')}; border-bottom:1px solid {dk('#c8ff3c','#8fcc1f')};">terminal</span>
				</div>
				<div class="px-4 pt-1.5 text-[10px] leading-5" style="color:{dk('#6b7280','#6b7280')};">
					<div><span style="color:{dk('#c8ff3c','#5e8c00')};">$</span> npm run dev</div>
					<div><span style="color:{dk('#c8ff3c','#5e8c00')};">✓</span> preview live → :5173 <span style="color:{dk('#374151','#9ca3af')};">(proxied)</span></div>
				</div>
			</div>
		</div>

		<!-- ── BRO CHAT ── -->
		<div class="hidden sm:flex flex-col shrink-0 border-l overflow-hidden"
			style="width:160px; background:{dk('#0d0e11','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
			<div class="flex items-center justify-between px-3 py-1.5 border-b shrink-0"
				style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<span class="text-[10px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">BRO CHAT</span>
			</div>

			<div class="flex-1 px-3 py-3 flex flex-col gap-3 overflow-hidden">
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#c8ff3c;">Alice</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						hero section looking 🔥
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#ff4dc4;">Bob</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						fixing cards rn 👀
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#c8ff3c;">Alice</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						Claude agrees 🤖 ship it
					</div>
				</div>
			</div>

			<div class="border-t px-3 py-2 shrink-0" style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<div class="rounded-md px-2 py-1.5 text-[10px]"
					style="background:{dk('#1c1f26','#e9e9e9')}; border:1px solid {dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; color:{dk('#374151','#9ca3af')};">
					message your bro...
				</div>
			</div>
		</div>
	</div>

	<!-- ══ Status bar ══ -->
	<div class="flex items-center justify-between px-4 border-t shrink-0"
		style="height:22px; background:{dk('#08090b','#e8e8e8')}; border-color:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.07)')}; font-family:'JetBrains Mono',ui-monospace,monospace;">
		<div class="flex items-center gap-3 text-[9px]" style="color:{dk('#374151','#9ca3af')};">
			<span>⎇ main</span>
			<span style="color:{dk('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">✓ synced</span>
		</div>
		<div class="flex items-center gap-3 text-[9px]" style="color:{dk('#374151','#9ca3af')};">
			<span>Svelte</span>
			<span class="flex items-center gap-1" style="color:{dk('rgba(200,255,60,0.6)','rgba(94,140,0,0.7)')};">
				<span class="w-1 h-1 rounded-full animate-pulse" style="background:{dk('#c8ff3c','#5e8c00')};"></span>
				CRDT live
			</span>
		</div>
	</div>
</div>
