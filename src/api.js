export const serverLogin = (email, password) => {
	return fetch(
		`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`,
	)
		.then(res => res.json())
		.then(data => data.success)
		.catch(error => console.log(error.message));
};

// export const serverRegister = ( email, password, name, lastName ) => {
// 	return fetch(
// 		`https://loft-taxi.glitch.me/register?email=${email}&password=${password}&userName=${name}&userLastName=${lastName}`,
// 	)
// 		.then(res => res.json())
// 		.then(data => data.success)
// 		.catch(error => console.log(error.message))
// }