<script>
	import '../app.css';
	import 'iconify-icon';

	let theme = 'dark';
	function switchtheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<div data-theme={theme} class="min-h-screen p-4">
	<div class="flex justify-end">
		<div class="flex-gap-1">
			<iconify-icon icon="lucide-sun" class="text-2*1"> </iconify-icon>
			<input
				type="checkbox"
				class="toggle border-blue-500 bg-blue-500 [--tglbg:[primary]] hover:bg-blue-700"
				checked="checked"
				on:click={switchtheme}
			/>
			<iconify-icon icon="lucide-moon" class="text-2*1"> </iconify-icon>
		</div>
	</div>
	<slot />
</div>
