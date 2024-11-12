<script>
	import { page } from '$app/stores';
	import ListItem from '$lib/fonts/components/ListItem.svelte';
	let { data } = $props();
	let currentQuestion = $state(0);
	let score = $state(0);
	let selectedAnswer = $state('');
	let submitted = $state(false);
	let progressValue = $state(0);

	function handleSubmit() {
		submitted = true;
		data.questions[currentQuestion].selectedAnswer = selectedAnswer;
		if (selectedAnswer === data.questions[currentQuestion].answer) {
			score++;
		}
	}

	function nextQuestion() {
		currentsQuestion++;
		submitted = false;
	}
</script>

<h1>{data.title}</h1>

{#each data.questions as question, index (question.question)}
	{#if index === currentQuestion}
		<p>Question {index + 1} of {data.questions.length}</p>
		<h2>{question.question}</h2>
		{#each question.options as option, index (option)}
			{#key submitted}
				<ListItem
					title={option}
					{index}
					correctAnswer={}
					focusAction={() => (selectedAnswer = option)}
					correctAnswer={question.selectedAnswer && question.answer === option}
				></ListItem>
			{/key}
		{/each}
	{/if}
{/each}

{#if !submitted}
	<button class="btn btn-primary" onclick={handleSubmit}> Submit </button>
{:else}
	<button class="btn btn-primary" onclick={nextQuestion}> Next Question </button>
{/if}
{selectedAnswer}
{score}
{#key submitted}
	{JSON.stringify(data.questions[currentQuestion])}
{/key}
