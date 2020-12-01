import stickyService from './../services/sticky.service';

//index function used to search all the todo items  with error handling.
const index = (request , response) => {
    stickyService.search({})
        .then((promise) => {
            response.status(200);
            response.json(promise);
        })
        .catch(handleError(response));
};        

//get function used to fetch the required todo item searched by the id passed in the request and returns status 200.
const get = (request , response) => {
    const id = request.params.id;
    stickyService.get(id)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));

};

//create function used to create the todo item in the database returns status 201.
const create = (request , response) => {
    const newSticky = Object.assign({}, request.body);
    stickyService.create(newSticky)
        .then((sticky) => {
            response.status(201);
            response.json(sticky);
        })
        .catch(handleError(response));

};

//update function used to update the todo item in the database returns status 200
const update = (request , response) => {
    const id = request.params.id;
    const updateSticky = Object.assign({}, request.body);
    stickyService.update(id, updateSticky)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));

};

//delete function used to delete the todo item in the database returns status 200
const remove = (request , response) => {
    const id = request.params.id;
    stickyService.remove(id)
        .then((sticky) => {
            response.status(200);
            response.json({
                message: "Delete Successful"
            });
        })
        .catch(handleError(response));

};

//error handling for response
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}

