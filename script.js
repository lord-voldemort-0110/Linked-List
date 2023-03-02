// Code to handle form submission
<script>
document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	const listInput = document.getElementById("list");
	const subsetInput = document.getElementById("subset");
	const list = listInput.value;
	const subset = subsetInput.value;

	fetch("find_components.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			list: list,
			subset: subset
		})
	})
	.then(response => response.json())
	.then(data => {
		const numComponents = data.num_components;
		const result = document.createElement("p");
		result.textContent = "Number of connected components in linked list subset: " + numComponents;
		document.querySelector(".container").appendChild(result);
	})
	.catch(error => console.error(error));
});
</script>
<script>
		// JavaScript code to send request to PHP script and display result
		let form = document.getElementById("input-form");
		let result = document.getElementById("result");

		document.getElementById("submit-button").addEventListener("click", function() {
			let list = document.getElementById("list").value;
			let subset = document.getElementById("subset").value;

			let xhr = new XMLHttpRequest();
			xhr.open("POST", "process.php");
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let response = JSON.parse(this.responseText);
					result.innerHTML = "Number of connected components: " + response.num_components;
				}
			};
			xhr.send("list=" + list + "&subset=" + subset);
		});
	</script>
<script>
		// JavaScript code to send request to PHP script and display result
		let form = document.getElementById("input-form");
		let result = document.getElementById("result");

		document.getElementById("submit-button").addEventListener("click", function() {
			let list = document.getElementById("list").value;
			let subset = document.getElementById("subset").value;

			let xhr = new XMLHttpRequest();
			xhr.open("POST", "action.php");
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let response = JSON.parse(this.responseText);
					result.innerHTML = "Number of connected components: " + response.num_components;
				}
			};
			xhr.send("list=" + list + "&subset=" + subset);
		});
	</script>