import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create theme store with default to 'dark'
function createThemeStore() {
	const { subscribe, set, update } = writable('dark');

	return {
		subscribe,
		toggle: () => update(theme => {
			const newTheme = theme === 'dark' ? 'light' : 'dark';
			
			if (browser) {
				// Update document attribute
				document.documentElement.setAttribute('data-theme', newTheme);
				// Store in localStorage
				localStorage.setItem('theme', newTheme);
			}
			
			return newTheme;
		}),
		set: (theme) => {
			if (browser) {
				document.documentElement.setAttribute('data-theme', theme);
				localStorage.setItem('theme', theme);
			}
			set(theme);
		},
		init: () => {
			if (browser) {
				// Check localStorage first, then system preference
				const stored = localStorage.getItem('theme');
				const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const theme = stored || (systemPrefersDark ? 'dark' : 'light');
				
				document.documentElement.setAttribute('data-theme', theme);
				set(theme);
				
				// Listen for system theme changes
				window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
					if (!localStorage.getItem('theme')) {
						const newTheme = e.matches ? 'dark' : 'light';
						document.documentElement.setAttribute('data-theme', newTheme);
						set(newTheme);
					}
				});
			}
		}
	};
}

export const theme = createThemeStore();