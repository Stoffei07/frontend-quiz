<script>
	export let data;
	import ListItem from '$lib/fonts/components/ListItem.svelte';
</script>

<h1>Welcome to <strong class="text-primary">Stefan's Frontend Quiz!</strong></h1>
<p>Pick a subject to get started.</p>

<div class="flex flex-col gap-4"></div>
{#each data.quizzes as quiz, index (quiz.title)}
	<a href="/{quiz.title.toLowerCase()}"> <ListItem title={quiz.title} {index} /></a>
{/each}

<!-- <hr />
{JSON.stringify(data)} -->
