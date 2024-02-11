fetch("https://vikas-plnm.onrender.com/user/65c77ffb411c731eeb1299f9")
	.then((response) => response.json())
	.then((data) => {
		console.log(data); // Prints result from `response.json()` in getRequest
		document.getElementById("balance").innerHTML += data.data.balance;
	})
	.catch((error) => console.error(error));

chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
	document.getElementById("list").innerHTML = "Loading...";
	// tabs[0] will contain information about the active tab
	const currentUrl = tabs[0].url;
	// get params from url by breaking the url into parts
	const params2 = currentUrl.split("keywords=")[1];
	const params3 = params2.split("&")[0] + "under+30+dollar";
	console.log(params3);
	const params = currentUrl.split("?")[1].split("&")[0].split("=")[1];
	let results = [];
	console.log(params);
	var myHeaders = new Headers();
	myHeaders.append(
		"X-RapidAPI-Key",
		"7c1a60fef4mshd626de822882eb6p1dfcf8jsn6efae269683a"
	);
	myHeaders.append("X-RapidAPI-Host", "google-data-scraper.p.rapidapi.com");

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(
		`https://google-data-scraper.p.rapidapi.com/search/shop/${params3}?api_key=ac8a2cd282a3d034ffce653b02278663`,
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			document.getElementById("list").innerHTML = "";

			console.log(result.shopping_results);
			results = result.shopping_results;
			for (let i = 0; i < 10; i++) {
				let title = results[i].title.substring(0, 30);
				document.getElementById("list").innerHTML += `
				<div class="apnabox">
					<a href="${results[i].link}">
					<img src="${results[i].thumbnail}" class="apnaimg" width="100px" height="100px">
					${title} ${results[i].price}
					</a>
				</div>
				`;
			}
		})
		.catch((error) => console.log("error", error));
});
