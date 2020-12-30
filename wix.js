export function submitButton_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	let q1 = $w('#q1').value;
	let q2 = $w('#q2').value;
	let q3 = $w('#q3').value;
	let q4 = $w('#q4').value;
	let q5 = $w('#q5').value;
	let q6 = $w('#q6').value;
	let q7 = $w('#q7').value;
	let q8 = $w('#q8').value;
	let q9 = $w('#q9').value;
	let q10 = $w('#q10').value;
	let q11 = $w('#q11').value;
	let q12 = $w('#q12').value;
	let q13 = $w('#q13').value;
	let q14 = $w('#q14').value;
	let q15 = $w('#q15').value;
	let q16 = $w('#q16').value;
	let q17 = $w('#q17').value;
	let q18 = $w('#q18').value;
	let q19 = $w('#q19').value;
	let q20 = $w('#q20').value;
	let q21 = $w('#q21').value;
	let q22 = $w('#q22').value;
	let q23 = $w('#q23').value;
	let q24 = $w('#q24').value;
	let q25 = $w('#q25').value;
	let q26 = $w('#q26').value;
	let q27 = $w('#q27').value;
	let q28 = $w('#q28').value;
	let q29 = $w('#q29').value;
	let q30 = $w('#q30').value;
	let q31 = $w('#q21').value;
	let q32 = $w('#q22').value;
	let q33 = $w('#q23').value;
	let q34 = $w('#q24').value;
	let q35 = $w('#q25').value;
	let q36 = $w('#q26').value;
	let q37 = $w('#q27').value;
	let q38 = $w('#q28').value;

	const payload = {
		q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29,
		q30, q31, q32, q34, q35, q36, q37, q38}

	console.log("got payload", payload);

	let url = "https://fast-shelf-76150.herokuapp.com/predict"
	fetch(url, {method: 'post', body: JSON.stringify(payload), headers: {'Content-Type': 'application/json'}})
    	.then(response => response.json())
    	.then(json => $w("#response").text = json.result)
		.catch(err=> console.log(err))

}
