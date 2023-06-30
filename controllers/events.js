const Event = require("../models/event");

module.exports = {
    index,
    new: newEvent,
    create,
    show,
    edit,
    update,
    delete: deleteEvent,
};

async function index(req, res) {
    try {
        const events = await Event.find({});
        res.render("events/index", {
            events,
            errorMsg: ""
        })
    } catch (err) {
        res.render(`/events/index`, { errorMsg: err.message });
    }
}

function newEvent(req, res) {
    res.render("events/new", { errorMsg: ""});
}

async function create(req, res) {
    try {
        await Event.create(req.body);
        res.redirect("/events");
    } catch (err) {
        console.log(err);
        res.render("events/new", { errorMsg: err.message });
    }
}

async function show(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        res.render("events/show", {
            event,
            errorMsg: ""
        })
    } catch (err) {
        res.render(`/events/show`, { errorMsg: err.message });
    }
}

async function edit(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        res.render("events/edit", {
            event,
            errorMsg: ""
        })
    } catch (err) {
        res.render(`/events/edit`, { errorMsg: err.message });
    }
}

async function update(req, res) {
    try {
        await Event.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/events/" + req.params.id)
    } catch (err) {
        res.render(`/events/${req.params.id}/edit`, { errorMsg: err.message });
    }
}

async function deleteEvent(req, res) {
    try {
        await Event.findByIdAndRemove(req.params.id);
        res.redirect("/events")
    } catch (err) {
        res.render("/events", { errorMsg: err.message });
    }
}