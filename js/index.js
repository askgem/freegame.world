var searchBar = new Vue({
	el: "#search-bar",
	data: {
		message: 'Hello Vue!',
		keyword: ""
	},
	methods: {
		searchBtnOnClick() {
			googleSearch();
		}
	}
});

var searchResult = new Vue({
	el: "#search-result",
	data() {
		return {
			result: []
		}
	}
});


// Key 1: dbd26bf4d9f7408387421d019e8c7516
function googleSearch() {
	// const baseUrl = "http://localhost:5000/search?keyword=";
	const baseUrl = "https://api.cognitive.microsoft.com/bing/v7.0/search?q=";
	const sub_key = "dbd26bf4d9f7408387421d019e8c7516";
	let keyword = searchBar.$data.keyword;

	axios({
		method: "GET",
		url: baseUrl + encodeURIComponent(keyword),
		headers: {
			"Ocp-Apim-Subscription-Key": sub_key
		}
	}).then((result) => {
		searchResult.$data.result = result.data.webPages.value;
		console.log(result);
	})
}
