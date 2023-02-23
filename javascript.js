
	class UserStorage{
		loginUser(id, password, onSuccess, onError) {
			setTimeout(() => {
				if (id === "superAdmin" && password === "1234") {
          onSuccess(id);
        } else {
          onError(new Error("not found"));
        }
			}, 2000);
		}
		getRoles(user, onSuccess, onError) {
			setTimeout(() => {
				if (user === 'superAdmin') {
					onSuccess({ name: "superAdmin", role: "admin" });
				}
				else {
					onError(new Error("no Acess"))
				}
					
			}, 1000);
		}

	}


	const userStorge = new UserStorage();
	const id = prompt("enter your id")
	const password = prompt('enter yout password')
	userStorge.loginUser(id, password, (user) => {
		userStorge.getRoles(user, userWithRole => {
			alert(`Hello ${userWithRole.name} you have a ${userWithRole.role} role`);
		}, error => { console.log(error) });
		error =>console.log(error);	
	}
	)
	

