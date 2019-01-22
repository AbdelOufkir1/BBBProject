




















































// defineUsers is for internal usage only. it doesn't return anything.
// defineUsers takes no arguments, console logs an Object with the list of Id's as keys and the full name of the user of the corresponding ID as the value.

const defineUsers = () => {
    // this is the Obkect that will hold the 'ID's' as keys.
    const fellowsIDs = {};

    return firebase.database().ref('/cohort5_0/class5_2/fellows/').once('value').then(function(snapshot) {
        return snapshot.val();
    })
    .then(data => {
        // id retreived from the array of the keys of the data Object
        const id = Object.keys(data);
        id.forEach(ele => {
        // full name retrieved by concatenating first name and last name;
         const userWithId = `${data[ele].firstName} ${data[ele].lastName}`;
         fellowsIDs[ele] = userWithId;
        })
    
        console.log('Ids and UserNames Retrieved: \n', fellowsIDs);
        
    })
    .catch(e => {
        console.log('Something went wrong', e.toString());
    });
}

defineUsers();
