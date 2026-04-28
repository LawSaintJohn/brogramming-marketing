<script>
	import { theme } from '$lib/theme.js';

	// line-height = 24px (leading-6), pt-4 = 16px top padding
	// cursor top = 16 + lineIndex * 24
	const LINE_H = 24;
	const PAD_TOP = 16;
	const t = (lineIndex) => PAD_TOP + lineIndex * LINE_H;

	const dark = (v, l) => $theme === 'dark' ? v : l;
</script>

<div
	class="w-full rounded-xl overflow-hidden shadow-2xl select-none transition-all duration-300"
	style="
		border: 1px solid {$theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.10)'};
		box-shadow: 0 32px 80px {$theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.18)'};
		font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
	"
>
	<!-- ── Title bar ── -->
	<div
		class="flex items-center h-10 px-4 gap-3 border-b transition-colors duration-300"
		style="background:{$theme === 'dark' ? '#0c0c0c' : '#f5f5f5'}; border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'};"
	>
		<!-- Traffic lights -->
		<div class="flex gap-1.5 shrink-0">
			<div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
			<div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
			<div class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
		</div>

		<!-- Tabs -->
		<div class="flex items-end h-full gap-px text-[11px] overflow-hidden">
			<div
				class="flex items-center gap-1.5 px-3 h-full border-t border-x transition-colors duration-300"
				style="
					background:{$theme === 'dark' ? '#111' : '#fff'};
					border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.1)'};
					color:{$theme === 'dark' ? '#e5e7eb' : '#111'};
					border-bottom: 2px solid {$theme === 'dark' ? '#4ade80' : '#059669'};
					margin-bottom: -1px;
				"
			>
				<span
					class="w-1.5 h-1.5 rounded-full"
					style="background:{$theme === 'dark' ? '#4ade80' : '#059669'};"
				></span>
				+page.svelte
			</div>
			<div
				class="flex items-center px-3 h-full text-[11px] transition-colors duration-300"
				style="color:{$theme === 'dark' ? '#4b5563' : '#9ca3af'};"
			>
				room.ts
			</div>
		</div>

		<!-- Presence avatars -->
		<div class="ml-auto flex items-center gap-2 shrink-0">
			<div class="flex -space-x-1.5">
				<div class="w-5 h-5 rounded-full bg-[#4ade80] border-2 flex items-center justify-center text-[8px] font-bold text-black z-30"
					style="border-color:{$theme === 'dark' ? '#0c0c0c' : '#f5f5f5'};">A</div>
				<div class="w-5 h-5 rounded-full bg-blue-400 border-2 flex items-center justify-center text-[8px] font-bold text-black z-20"
					style="border-color:{$theme === 'dark' ? '#0c0c0c' : '#f5f5f5'};">B</div>
				<div class="w-5 h-5 rounded-full bg-violet-400 border-2 flex items-center justify-center text-[8px] font-bold text-black z-10"
					style="border-color:{$theme === 'dark' ? '#0c0c0c' : '#f5f5f5'};">C</div>
			</div>
			<span
				class="text-[10px] transition-colors duration-300"
				style="font-family: ui-sans-serif, system-ui, sans-serif; color:{$theme === 'dark' ? '#4b5563' : '#9ca3af'};"
			>3 live</span>
		</div>
	</div>

	<!-- ── Editor body ── -->
	<div class="flex" style="height: 316px;">

		<!-- Code pane -->
		<div
			class="flex flex-1 overflow-hidden relative transition-colors duration-300"
			style="background:{$theme === 'dark' ? '#111111' : '#fafafa'};"
		>
			<!-- Line numbers -->
			<div
				class="w-9 shrink-0 pt-4 pb-4 pr-2 text-right text-[11px] leading-6 border-r transition-colors duration-300"
				style="
					background:{$theme === 'dark' ? '#0f0f0f' : '#f3f4f6'};
					border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.07)'};
					color:{$theme === 'dark' ? '#374151' : '#9ca3af'};
				"
			>
				{#each {length: 13} as _, i}
					<div>{i + 1}</div>
				{/each}
			</div>

			<!-- Code + cursors -->
			<div class="relative flex-1 overflow-hidden text-[11px] leading-6">
				<!-- Diff highlight: line index 7 -->
				<div
					class="absolute left-0 right-0 transition-colors duration-300"
					style="
						top: {t(7)}px; height: {LINE_H}px;
						background: {$theme === 'dark' ? 'rgba(74,222,128,0.07)' : 'rgba(5,150,105,0.06)'};
						border-left: 2px solid {$theme === 'dark' ? 'rgba(74,222,128,0.35)' : 'rgba(5,150,105,0.35)'};
					"
				></div>

				<!-- Selection highlight: line index 1 (alice) -->
				<div
					class="absolute left-0 right-0 transition-colors duration-300"
					style="
						top: {t(1)}px; height: {LINE_H}px;
						background: {$theme === 'dark' ? 'rgba(74,222,128,0.08)' : 'rgba(5,150,105,0.07)'};
					"
				></div>

				<!-- Code lines -->
				<div class="px-4 pt-4 pb-4">
					{#if $theme === 'dark'}
						<div class="text-gray-500">&lt;<span class="text-purple-400">script</span>&gt;</div>
						<div>&nbsp;&nbsp;<span class="text-purple-400">import</span> {'{'} <span class="text-blue-300">useRoom</span> {'}'} <span class="text-purple-400">from</span> <span class="text-green-300">'$lib/collab'</span></div>
						<div>&nbsp;&nbsp;<span class="text-purple-400">import</span> {'{'} <span class="text-blue-300">AI</span> {'}'} <span class="text-purple-400">from</span> <span class="text-green-300">'$lib/ai'</span></div>
						<div class="text-gray-700">&nbsp;</div>
						<div>&nbsp;&nbsp;<span class="text-purple-400">const</span> <span class="text-blue-200">room</span> <span class="text-gray-400">=</span> <span class="text-blue-300">useRoom</span><span class="text-gray-400">()</span></div>
						<div>&nbsp;&nbsp;<span class="text-purple-400">const</span> {'{'} <span class="text-blue-200">members</span><span class="text-gray-400">,</span> <span class="text-blue-200">doc</span> {'}'} <span class="text-gray-400">=</span> <span class="text-blue-200">room</span></div>
						<div class="text-gray-700">&nbsp;</div>
						<div>&nbsp;&nbsp;<span class="text-gray-500">+</span>&nbsp;<span class="text-purple-400">async function</span> <span class="text-blue-300">ask</span><span class="text-gray-400">(</span><span class="text-orange-300">prompt</span><span class="text-gray-400">) {'{'}</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-blue-300">AI</span><span class="text-gray-400">.</span><span class="text-blue-300">stream</span><span class="text-gray-400">(</span><span class="text-orange-300">prompt</span><span class="text-gray-400">, {'{'}</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-200">model</span><span class="text-gray-400">:</span> <span class="text-blue-200">room</span><span class="text-gray-400">.</span><span class="text-blue-200">user</span><span class="text-gray-400">.</span><span class="text-blue-200">model</span> &nbsp;<span class="text-gray-600">// your key</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-400">{'}'}</span><span class="text-gray-400">)</span></div>
						<div>&nbsp;&nbsp;<span class="text-gray-400">{'}'}</span></div>
						<div class="text-gray-500">&lt;/<span class="text-purple-400">script</span>&gt;</div>
					{:else}
						<div class="text-gray-500">&lt;<span class="text-purple-600">script</span>&gt;</div>
						<div>&nbsp;&nbsp;<span class="text-purple-600">import</span> {'{'} <span class="text-blue-600">useRoom</span> {'}'} <span class="text-purple-600">from</span> <span class="text-green-700">'$lib/collab'</span></div>
						<div>&nbsp;&nbsp;<span class="text-purple-600">import</span> {'{'} <span class="text-blue-600">AI</span> {'}'} <span class="text-purple-600">from</span> <span class="text-green-700">'$lib/ai'</span></div>
						<div class="text-gray-300">&nbsp;</div>
						<div>&nbsp;&nbsp;<span class="text-purple-600">const</span> <span class="text-blue-700">room</span> <span class="text-gray-500">=</span> <span class="text-blue-600">useRoom</span><span class="text-gray-500">()</span></div>
						<div>&nbsp;&nbsp;<span class="text-purple-600">const</span> {'{'} <span class="text-blue-700">members</span><span class="text-gray-500">,</span> <span class="text-blue-700">doc</span> {'}'} <span class="text-gray-500">=</span> <span class="text-blue-700">room</span></div>
						<div class="text-gray-300">&nbsp;</div>
						<div>&nbsp;&nbsp;<span class="text-gray-400">+</span>&nbsp;<span class="text-purple-600">async function</span> <span class="text-blue-600">ask</span><span class="text-gray-500">(</span><span class="text-orange-600">prompt</span><span class="text-gray-500">) {'{'}</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-600">return</span> <span class="text-blue-600">AI</span><span class="text-gray-500">.</span><span class="text-blue-600">stream</span><span class="text-gray-500">(</span><span class="text-orange-600">prompt</span><span class="text-gray-500">, {'{'}</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-700">model</span><span class="text-gray-500">:</span> <span class="text-blue-700">room</span><span class="text-gray-500">.</span><span class="text-blue-700">user</span><span class="text-gray-500">.</span><span class="text-blue-700">model</span> &nbsp;<span class="text-gray-400">// your key</span></div>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500">{'}'}</span><span class="text-gray-500">)</span></div>
						<div>&nbsp;&nbsp;<span class="text-gray-500">{'}'}</span></div>
						<div class="text-gray-500">&lt;/<span class="text-purple-600">script</span>&gt;</div>
					{/if}
				</div>

				<!-- ── Cursors ── -->

				<!-- Alice: line 1 -->
				<div class="absolute pointer-events-none" style="top:{t(1)}px; right: 12px;">
					<div class="relative flex items-start">
						<div class="w-0.5 bg-[#4ade80]" style="height:{LINE_H}px;">
							<div
								class="absolute -top-5 left-0 text-black text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap"
								style="background:#4ade80; font-family: ui-sans-serif, system-ui, sans-serif;"
							>@alice</div>
						</div>
					</div>
				</div>

				<!-- Bob: line 5 -->
				<div class="absolute pointer-events-none" style="top:{t(5)}px; left: 220px;">
					<div class="relative">
						<div class="w-0.5 bg-blue-400" style="height:{LINE_H}px;">
							<div
								class="absolute -top-5 left-0 text-black text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap"
								style="background:#60a5fa; font-family: ui-sans-serif, system-ui, sans-serif;"
							>@bob</div>
						</div>
					</div>
				</div>

				<!-- Carol: line 9 -->
				<div class="absolute pointer-events-none" style="top:{t(9)}px; left: 300px;">
					<div class="relative">
						<div class="w-0.5 bg-violet-400" style="height:{LINE_H}px;">
							<div
								class="absolute -top-5 left-0 text-black text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap"
								style="background:#a78bfa; font-family: ui-sans-serif, system-ui, sans-serif;"
							>@carol</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ── AI Panel (hidden on mobile) ── -->
		<div
			class="hidden sm:flex w-52 shrink-0 flex-col border-l transition-colors duration-300"
			style="
				background:{$theme === 'dark' ? '#0d0d0d' : '#f9fafb'};
				border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'};
			"
		>
			<!-- Header -->
			<div
				class="flex items-center gap-2 px-3 py-2.5 border-b transition-colors duration-300 shrink-0"
				style="border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)'};"
			>
				<div
					class="w-4 h-4 rounded flex items-center justify-center text-[9px] shrink-0 transition-colors duration-300"
					style="
						background:{$theme === 'dark' ? 'rgba(74,222,128,0.15)' : 'rgba(5,150,105,0.12)'};
						border: 1px solid {$theme === 'dark' ? 'rgba(74,222,128,0.25)' : 'rgba(5,150,105,0.2)'};
						color:{$theme === 'dark' ? '#4ade80' : '#059669'};
					"
				>✦</div>
				<div style="font-family: ui-sans-serif, system-ui, sans-serif;">
					<div class="text-[10px] font-medium transition-colors duration-300" style="color:{$theme === 'dark' ? '#d1d5db' : '#374151'};">Claude</div>
					<div class="text-[9px] transition-colors duration-300" style="color:{$theme === 'dark' ? '#4b5563' : '#9ca3af'};">@alice's key</div>
				</div>
			</div>

			<!-- Prompt bubble -->
			<div
				class="mx-3 mt-3 rounded-lg px-2.5 py-2 text-[10px] transition-colors duration-300 shrink-0"
				style="
					background:{$theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)'};
					color:{$theme === 'dark' ? '#9ca3af' : '#6b7280'};
					font-family: ui-sans-serif, system-ui, sans-serif;
				"
			>
				explain <span style="color:{$theme === 'dark' ? '#93c5fd' : '#2563eb'};">useRoom()</span>
			</div>

			<!-- Response -->
			<div class="px-3 mt-2.5 flex-1 overflow-hidden" style="font-family: ui-sans-serif, system-ui, sans-serif;">
				<div class="text-[9px] mb-1.5 transition-colors duration-300" style="color:{$theme === 'dark' ? 'rgba(74,222,128,0.5)' : 'rgba(5,150,105,0.6)'};">Claude</div>
				<p class="text-[10px] leading-[1.6] transition-colors duration-300" style="color:{$theme === 'dark' ? '#6b7280' : '#4b5563'};">
					Returns a shared <span style="color:{$theme === 'dark' ? '#93c5fd' : '#2563eb'};">Yjs doc</span>. All members sync automatically — no merge conflicts, ever.
				</p>
				<!-- Inline code snippet -->
				<div
					class="mt-2 rounded-md px-2 py-2 text-[10px] leading-5 transition-colors duration-300"
					style="background:{$theme === 'dark' ? '#111' : '#f3f4f6'}; border: 1px solid {$theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'};"
				>
					{#if $theme === 'dark'}
						<span class="text-purple-400">const</span> <span class="text-blue-200">doc</span> <span class="text-gray-500">=</span> <span class="text-blue-200">room</span><span class="text-gray-500">.</span><span class="text-blue-300">getYDoc</span><span class="text-gray-500">()</span><br/>
						<span class="text-blue-200">doc</span><span class="text-gray-500">.</span><span class="text-blue-300">on</span><span class="text-gray-500">(</span><span class="text-green-300">'update'</span><span class="text-gray-500">, sync)</span>
					{:else}
						<span class="text-purple-600">const</span> <span class="text-blue-700">doc</span> <span class="text-gray-500">=</span> <span class="text-blue-700">room</span><span class="text-gray-500">.</span><span class="text-blue-600">getYDoc</span><span class="text-gray-500">()</span><br/>
						<span class="text-blue-700">doc</span><span class="text-gray-500">.</span><span class="text-blue-600">on</span><span class="text-gray-500">(</span><span class="text-green-700">'update'</span><span class="text-gray-500">, sync)</span>
					{/if}
				</div>
			</div>

			<!-- Input -->
			<div class="px-3 py-2.5 border-t shrink-0 transition-colors duration-300"
				style="border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)'};"
			>
				<div
					class="rounded-md px-2.5 py-1.5 text-[10px] flex items-center gap-1 transition-colors duration-300"
					style="
						background:{$theme === 'dark' ? '#111' : '#f3f4f6'};
						border: 1px solid {$theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'};
						color:{$theme === 'dark' ? '#374151' : '#9ca3af'};
						font-family: ui-sans-serif, system-ui, sans-serif;
					"
				>
					ask anything...
					<span class="ml-auto opacity-40" style="color:{$theme === 'dark' ? '#4ade80' : '#059669'};">↵</span>
				</div>
			</div>
		</div>
	</div>

	<!-- ── Status bar ── -->
	<div
		class="flex items-center justify-between px-4 py-1.5 border-t transition-colors duration-300"
		style="
			background:{$theme === 'dark' ? '#0c0c0c' : '#f0f0f0'};
			border-color:{$theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.07)'};
			font-family: ui-sans-serif, system-ui, sans-serif;
		"
	>
		<div class="flex items-center gap-3 text-[9px]" style="color:{$theme === 'dark' ? '#374151' : '#9ca3af'};">
			<span>⎇ main</span>
			<span style="color:{$theme === 'dark' ? 'rgba(74,222,128,0.5)' : 'rgba(5,150,105,0.6)'};">✓ synced</span>
		</div>
		<div class="flex items-center gap-3 text-[9px]" style="color:{$theme === 'dark' ? '#374151' : '#9ca3af'};">
			<span>Svelte</span>
			<span>UTF-8</span>
			<span class="flex items-center gap-1" style="color:{$theme === 'dark' ? 'rgba(74,222,128,0.55)' : 'rgba(5,150,105,0.65)'};">
				<span class="w-1 h-1 rounded-full animate-pulse" style="background:{$theme === 'dark' ? '#4ade80' : '#059669'};"></span>
				CRDT live
			</span>
		</div>
	</div>
</div>
