import Sticky from '../models/sticky'

//Function that calls the mongoose model and pass any filter which is JS object which returns a promise
const search =  (filter) => {
        const promise =  Sticky.find(filter).exec();
        return promise;
}

//Get function to fetch the json data searched by id
const get = (id) => {
        const promise = Sticky.findById(id).exec();
        return promise;
}

//Create function to create the json body with data in the db.
const create = (newSticky) => {
        const sticky = new Sticky(newSticky);
        const promise = sticky.save();
        return promise;
}

//Update function to update the json body in the db.
const update = (id, updatedSticky) => {
        let currentdate = new Date();
        updatedSticky.lastmodifiedDate = currentdate.toLocaleString();
        const promise = Sticky.findByIdAndUpdate(
            { _id: id },
            updatedSticky,
            { new: true }
        ).exec();
        return promise;
    }

//Delete function to delete the data in the db searched by id..
const remove = (id) => {
        const promise = Sticky.remove({ _id: id }).exec();
        return promise;
}

export default {
        search: search,
        get: get,
        create: create,
        update: update,
        remove: remove
}