<script>
	import { theme } from '$lib/theme.js';
	const dk = (d, l) => $theme === 'dark' ? d : l;
</script>

<!--
	Replicates the actual brogramming product UI:
	app bar / files panel / code+terminal split / bro chat panel
	with Figma-style mouse pointer cursors
-->
<div
	class="w-full rounded-xl overflow-hidden select-none text-[11px] transition-all duration-300"
	style="
		font-family: ui-sans-serif, system-ui, sans-serif;
		border: 1px solid {dk('rgba(255,255,255,0.07)', 'rgba(0,0,0,0.10)')};
		box-shadow: 0 40px 100px {dk('rgba(0,0,0,0.75)', 'rgba(0,0,0,0.18)')};
		background: {dk('#0e0e0e', '#f5f5f5')};
	"
>

	<!-- ══ App bar ══ -->
	<div
		class="flex items-center justify-between px-4 py-0 shrink-0 border-b"
		style="height:38px; background:{dk('#0a0a0a','#ebebeb')}; border-color:{dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.09)')};"
	>
		<!-- Traffic lights + wordmark -->
		<div class="flex items-center gap-3">
			<div class="flex gap-1.5">
				<div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
				<div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
				<div class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
			</div>
			<span class="font-mono text-[12px] font-medium tracking-tight" style="color:{dk('#e5e7eb','#111')};">brogramming</span>
		</div>

		<!-- Room pill -->
		<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px]"
			style="color:{dk('#6b7280','#9ca3af')}; border-color:{dk('rgba(255,255,255,0.08)','rgba(0,0,0,0.1)')};"
		>
			<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
			call · #x7k2m
		</div>

		<!-- CTA -->
		<div
			class="flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-semibold"
			style="background:{dk('#4ade80','#059669')}; color:{dk('#000','#fff')};"
		>
			Ready, Set, Bro →
		</div>
	</div>

	<!-- ══ 3-column body ══ -->
	<div class="flex" style="height:358px;">

		<!-- ── FILES panel ── -->
		<div
			class="flex flex-col shrink-0 border-r overflow-hidden"
			style="width:148px; background:{dk('#0c0c0c','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};"
		>
			<!-- Panel header -->
			<div class="flex items-center justify-between px-3 py-1.5 border-b"
				style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<span class="text-[10px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">FILES</span>
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="{dk('#374151','#9ca3af')}" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
			</div>

			<!-- File tree -->
			<div class="px-2 py-2 flex flex-col gap-0.5 text-[11px]" style="color:{dk('#6b7280','#6b7280')};">
				<div class="px-1.5 py-0.5 rounded font-medium" style="color:{dk('#9ca3af','#374151')};">brogramming-mark...</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
					<span style="color:{dk('#4b5563','#9ca3af')};">.gitignore</span>
				</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
					<span style="color:{dk('#4b5563','#9ca3af')};">package.json</span>
				</div>
				<!-- src folder open -->
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="{dk('#4ade80','#059669')}" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
					<span style="color:{dk('#d1d5db','#374151')};">src</span>
				</div>
				<div class="flex items-center gap-1 pl-5 py-0.5 rounded" style="background:{dk('rgba(74,222,128,0.08)','rgba(5,150,105,0.06)')}; color:{dk('#4ade80','#059669')};">
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
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
					<span style="color:{dk('#4b5563','#9ca3af')};">svelte.config.js</span>
				</div>
				<div class="flex items-center gap-1 px-1.5 py-0.5">
					<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
					<span style="color:{dk('#4b5563','#9ca3af')};">vite.config.js</span>
				</div>
			</div>
		</div>

		<!-- ── Center: code editor + terminal ── -->
		<div class="flex flex-col flex-1 overflow-hidden relative"
			style="font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;"
		>
			<!-- Editor tab bar -->
			<div class="flex items-end shrink-0 border-b" style="height:30px; background:{dk('#0e0e0e','#f5f5f5')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<div class="flex items-center gap-1.5 px-3 h-full border-r border-t text-[10px]"
					style="background:{dk('#111','#fff')}; border-color:{dk('rgba(255,255,255,0.07)','rgba(0,0,0,0.1)')}; color:{dk('#e5e7eb','#111')}; border-bottom:2px solid {dk('#4ade80','#059669')}; margin-bottom:-1px;"
				>
					<span class="w-1.5 h-1.5 rounded-full" style="background:{dk('#4ade80','#059669')};"></span>
					+page.svelte
				</div>
				<div class="flex items-center px-3 h-full text-[10px]" style="color:{dk('#4b5563','#9ca3af')};">
					HeroMockup.svelte
				</div>
			</div>

			<!-- Code editor area -->
			<div class="relative overflow-hidden" style="flex:0 0 60%; background:{dk('#111','#fafafa')};">
				<!-- line highlight row 4 -->
				<div class="absolute left-0 right-0" style="top:calc(16px + 3*24px); height:24px; background:{dk('rgba(74,222,128,0.07)','rgba(5,150,105,0.06)')}; border-left:2px solid {dk('rgba(74,222,128,0.3)','rgba(5,150,105,0.3)')};"></div>
				<!-- selection row 1 -->
				<div class="absolute left-0 right-0" style="top:calc(16px + 1*24px); height:24px; background:{dk('rgba(96,165,250,0.08)','rgba(37,99,235,0.07)')};"></div>

				<div class="flex h-full">
					<!-- line numbers -->
					<div class="w-8 shrink-0 pt-4 pr-2 text-right leading-6 border-r text-[10px]"
						style="background:{dk('#0f0f0f','#f3f4f6')}; border-color:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.07)')}; color:{dk('#374151','#9ca3af')};">
						{#each {length:9} as _, i}<div>{i+1}</div>{/each}
					</div>
					<!-- code -->
					<div class="flex-1 pt-4 px-4 leading-6 text-[11px] overflow-hidden">
						{#if $theme === 'dark'}
							<div class="text-gray-500">&lt;<span class="text-purple-400">script</span>&gt;</div>
							<div>&nbsp;&nbsp;<span class="text-purple-400">import</span> {'{'} <span class="text-blue-300">useRoom</span>, <span class="text-blue-300">useAI</span> {'}'} <span class="text-purple-400">from</span> <span class="text-green-300">'$lib/collab'</span></div>
							<div class="text-gray-700">&nbsp;</div>
							<div>&nbsp;&nbsp;<span class="text-gray-500">+</span> <span class="text-purple-400">const</span> <span class="text-blue-200">room</span> <span class="text-gray-400">=</span> <span class="text-blue-300">useRoom</span><span class="text-gray-400">()</span></div>
							<div>&nbsp;&nbsp;<span class="text-purple-400">const</span> <span class="text-blue-200">ai</span> <span class="text-gray-400">=</span> <span class="text-blue-300">useAI</span><span class="text-gray-400">({'{'} model: </span><span class="text-blue-200">room</span><span class="text-gray-400">.</span><span class="text-blue-200">user</span><span class="text-gray-400">.</span><span class="text-blue-200">model</span> <span class="text-gray-400">{'}'})</span></div>
							<div class="text-gray-700">&nbsp;</div>
							<div>&nbsp;&nbsp;<span class="text-purple-400">async function</span> <span class="text-blue-300">ask</span><span class="text-gray-400">(</span><span class="text-orange-300">prompt</span><span class="text-gray-400">) {'{'}</span></div>
							<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-blue-200">ai</span><span class="text-gray-400">.</span><span class="text-blue-300">stream</span><span class="text-gray-400">(</span><span class="text-orange-300">prompt</span><span class="text-gray-400">)</span></div>
							<div>&nbsp;&nbsp;<span class="text-gray-400">{'}'}</span></div>
						{:else}
							<div class="text-gray-400">&lt;<span class="text-purple-600">script</span>&gt;</div>
							<div>&nbsp;&nbsp;<span class="text-purple-600">import</span> {'{'} <span class="text-blue-600">useRoom</span>, <span class="text-blue-600">useAI</span> {'}'} <span class="text-purple-600">from</span> <span class="text-green-700">'$lib/collab'</span></div>
							<div class="text-gray-300">&nbsp;</div>
							<div>&nbsp;&nbsp;<span class="text-gray-400">+</span> <span class="text-purple-600">const</span> <span class="text-blue-700">room</span> <span class="text-gray-500">=</span> <span class="text-blue-600">useRoom</span><span class="text-gray-500">()</span></div>
							<div>&nbsp;&nbsp;<span class="text-purple-600">const</span> <span class="text-blue-700">ai</span> <span class="text-gray-500">=</span> <span class="text-blue-600">useAI</span><span class="text-gray-500">({'{'} model: </span><span class="text-blue-700">room</span><span class="text-gray-500">.</span><span class="text-blue-700">user</span><span class="text-gray-500">.</span><span class="text-blue-700">model</span> <span class="text-gray-500">{'}'})</span></div>
							<div class="text-gray-300">&nbsp;</div>
							<div>&nbsp;&nbsp;<span class="text-purple-600">async function</span> <span class="text-blue-600">ask</span><span class="text-gray-500">(</span><span class="text-orange-600">prompt</span><span class="text-gray-500">) {'{'}</span></div>
							<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-600">return</span> <span class="text-blue-700">ai</span><span class="text-gray-500">.</span><span class="text-blue-600">stream</span><span class="text-gray-500">(</span><span class="text-orange-600">prompt</span><span class="text-gray-500">)</span></div>
							<div>&nbsp;&nbsp;<span class="text-gray-500">{'}'}</span></div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Terminal -->
			<div class="flex flex-col border-t overflow-hidden" style="flex:1; background:{dk('#0a0a0a','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')};">
				<!-- terminal header -->
				<div class="flex items-center justify-between px-3 border-b shrink-0" style="height:26px; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.07)')};">
					<span class="text-[10px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">TERMINAL</span>
					<div class="flex gap-3 text-[10px]">
						<span style="color:{dk('#6b7280','#9ca3af')};">file</span>
						<span class="font-medium" style="color:{dk('#e5e7eb','#111')}; border-bottom: 1px solid {dk('#4ade80','#059669')};">terminal</span>
					</div>
				</div>
				<!-- terminal output -->
				<div class="px-4 pt-3 leading-6 text-[11px] font-mono" style="color:{dk('#6b7280','#6b7280')};">
					<div><span style="color:{dk('#4ade80','#059669')};">$</span> npm run dev</div>
					<div><span style="color:{dk('#4ade80','#059669')};">✓</span> preview live → :5173 <span style="color:{dk('#374151','#9ca3af')};">(proxied)</span></div>
				</div>
			</div>

			<!-- ── Cursors (absolute over whole center pane) ── -->

			<!-- Bob cursor: middle of code editor -->
			<div class="absolute pointer-events-none" style="top:88px; left:210px;">
				<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,0.5));">
					<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" fill="#60a5fa"/>
					<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" stroke="white" stroke-width="0.75"/>
				</svg>
				<div class="absolute top-4 left-4 px-2 py-0.5 rounded text-[10px] font-bold text-black whitespace-nowrap"
					style="background:#60a5fa;">@bob</div>
			</div>

			<!-- Alice cursor: terminal -->
			<div class="absolute pointer-events-none" style="bottom:40px; left:80px;">
				<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,0.5));">
					<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" fill="#4ade80"/>
					<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" stroke="white" stroke-width="0.75"/>
				</svg>
				<div class="absolute top-4 left-4 px-2 py-0.5 rounded text-[10px] font-bold text-black whitespace-nowrap"
					style="background:#4ade80;">@alice</div>
			</div>
		</div>

		<!-- ── BRO CHAT panel ── -->
		<div
			class="hidden sm:flex flex-col shrink-0 border-l overflow-hidden"
			style="width:160px; background:{dk('#0c0c0c','#f0f0f0')}; border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};"
		>
			<!-- header -->
			<div class="flex items-center justify-between px-3 py-1.5 border-b shrink-0"
				style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<span class="text-[10px] font-semibold tracking-widest uppercase" style="color:{dk('#4b5563','#9ca3af')};">BRO CHAT</span>
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="{dk('#374151','#9ca3af')}" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
			</div>

			<!-- messages -->
			<div class="flex-1 px-3 py-3 flex flex-col gap-3 overflow-hidden relative">

				<!-- Message from alice -->
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#4ade80;">Alice</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						ship it 🚀
					</div>
				</div>

				<!-- Message from bob -->
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#60a5fa;">Bob</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						on line 4 👀
					</div>
				</div>

				<!-- Message from carol -->
				<div class="flex flex-col gap-1">
					<span class="text-[9px] font-semibold" style="color:#a78bfa;">Carol</span>
					<div class="text-[10px] leading-5 rounded-lg px-2 py-1.5"
						style="background:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.05)')}; color:{dk('#d1d5db','#374151')};">
						GPT says merge it 💪
					</div>
				</div>

				<!-- Carol cursor: hovering over the chat -->
				<div class="absolute pointer-events-none" style="bottom:70px; right:18px;">
					<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,0.5));">
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" fill="#a78bfa"/>
						<path d="M0 0L0 14L3.5 10.5L6 16.5L8 15.5L5.5 9.5L10.5 9.5Z" stroke="white" stroke-width="0.75"/>
					</svg>
					<div class="absolute top-4 left-4 px-2 py-0.5 rounded text-[10px] font-bold text-black whitespace-nowrap"
						style="background:#a78bfa;">@carol</div>
				</div>
			</div>

			<!-- waiting state / input -->
			<div class="border-t px-3 py-2 shrink-0" style="border-color:{dk('rgba(255,255,255,0.05)','rgba(0,0,0,0.08)')};">
				<div class="rounded-md px-2 py-1.5 text-[10px]"
					style="background:{dk('#111','#e9e9e9')}; border:1px solid {dk('rgba(255,255,255,0.06)','rgba(0,0,0,0.08)')}; color:{dk('#374151','#9ca3af')};">
					message your bro...
				</div>
			</div>
		</div>
	</div>

	<!-- ══ Status bar ══ -->
	<div
		class="flex items-center justify-between px-4 border-t shrink-0"
		style="height:22px; background:{dk('#080808','#e8e8e8')}; border-color:{dk('rgba(255,255,255,0.04)','rgba(0,0,0,0.07)')}; font-family:'JetBrains Mono',ui-monospace,monospace;"
	>
		<div class="flex items-center gap-3 text-[9px]" style="color:{dk('#374151','#9ca3af')};">
			<span>⎇ main</span>
			<span style="color:{dk('rgba(74,222,128,0.55)','rgba(5,150,105,0.65)')};">✓ synced</span>
		</div>
		<div class="flex items-center gap-3 text-[9px]" style="color:{dk('#374151','#9ca3af')};">
			<span>Svelte</span>
			<span class="flex items-center gap-1" style="color:{dk('rgba(74,222,128,0.55)','rgba(5,150,105,0.65)')};">
				<span class="w-1 h-1 rounded-full animate-pulse" style="background:{dk('#4ade80','#059669')};"></span>
				CRDT live
			</span>
		</div>
	</div>
</div>
