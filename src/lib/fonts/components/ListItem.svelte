<script>
	let { icon, title, index, focusAction, correctAnswer, incorrectlySelected, disabled } = $props();
	let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<button
	class="alert flex focus:outline focus:outline-primary
	{correctAnswer ? 'outline outline-success' : ''}
	{incorrectlySelected ? 'outline outline-error' : ''}"
	onfocus={focusAction}
	{disabled}
>
	{#if icon}
		<img src={icon} alt={title + '-Icon'} />
	{:else}
		<span>{ABC[index]}</span>
	{/if}
	<span> {title} - {correctAnswer}</span>
</button>

<!-- <div class="alert flex">
	<img src={icon} alt={title + '-Icon'} />
	<span>{title}</span>
</div> -->

<!-- <button class="alert flex focus:outline focus:outline-primary">
	<img src={icon} alt={title + '-Icon'} />
	<span>{title}</span>
</button> -->
