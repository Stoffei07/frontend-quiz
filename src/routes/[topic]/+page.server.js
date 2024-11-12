export async function load({ fetch, params }) {
	const response = await fetch('data.json');
	const data = await response.json();
	console.log(data);

	const filteredData = data.quizzes.filter((quiz) => quiz.title.toLowerCase() === params.topic)[0];

	return filteredData;
}
