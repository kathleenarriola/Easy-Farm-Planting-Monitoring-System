'use strict';

( () => {
	angular
		.module('app')
		.factory('UserService', UserService);

	UserService.$inject = ['$http', '$q'];

	const headers = {
		'content-type' : 'application/x-www-form-urlencoded'
	}

	function UserService($http, $q) {
		const service = {
			addAdmin: addAdmin,
			viewUsers: viewUsers

			/*--------DON'T FORGET ME!!!!!----------*/
		}


		return service;

		function addAdmin(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/admin/sign-up',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function viewUsers() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/users',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		
	}
}) ();
