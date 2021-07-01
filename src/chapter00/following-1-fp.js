function createAuthorData(firstName, lastName, books) {
    return {
        firstName: firstName,
        lastName: lastName,
        books: books
    };
}

function fullName(data) {
    return data.firstName + " " + data.lastName;
}

function isProlific (data) {
    return data.books > 100;
}

var data = createAuthorData("Isaac", "Asimov", 500); // Isaac Asimov wrote 500 books!
fullName(data);
