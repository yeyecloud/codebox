define([
    "hr/hr",
    "core/socket"
], function(hr, Socket) {
    var logging = hr.Logger.addNamespace("events");

    var events = new Socket({
        service: "events"
    });

    events.on("do:report", function(e) {
        events.trigger("e:"+e.event, e.data);
    });

    return events;
});