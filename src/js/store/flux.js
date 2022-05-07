import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/billy")
					.then(response => response.json())
					.then(result => setStore({ list: result }))
					.catch(error => console.log('error', error));
			},

			addContact: (contact) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: 'POST',
					headers: { "content-type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response.ok ? getActions.getData() : console.log("error"))
			},
			editContact: (contact_id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
					method: 'PUT',
					headers: { "content-type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response.ok ? getActions.getData() : console.log("error"))
			},
			deleteContact: (contact_id) => {

				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
					method: 'DELETE',
				})
					.then(response.ok ? getActions.getData() : console.log("error"))
			}
		}
	};
};

export default getState;
