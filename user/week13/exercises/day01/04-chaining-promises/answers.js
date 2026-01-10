/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value)/* IMPLEMENT ME! */=>{;
      resolve(asyncTransformer(value));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((value)/* IMPLEMENT ME! */=>{
    return slowAsyncProcess(value);
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    /* IMPLEMENT ME! */return getUserById(userId)
    .then((user) => {
      return getOrganizationById(user.organizationId)
          .then((organization) => {
            user.organization = organization;
            return user;
          })
    })
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};