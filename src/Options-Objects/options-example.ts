var alert = new Alert("app", "message", {
    width: 150, height: 100,
    title: "Error",
    titleColor: "blue", bgColor: "white", textColor: "black",
    icon: "error", modal: true
});

function Alert(parent, message, opts) {
    opts = opts || {}; // default to an empty options object
    this.width = opts.width === undefined ? 320 : opts.width;
    this.height = opts.height === undefined
        ? 240
        : opts.height;
    this.x = opts.x === undefined
        ? (parent.width / 2) - (this.width / 2)
        : opts.x;
    this.y = opts.y === undefined
        ? (parent.height / 2) - (this.height / 2)
        : opts.y;
    this.title = opts.title || "Alert";
    this.titleColor = opts.titleColor || "gray";
    this.bgColor = opts.bgColor || "white";
    this.textColor = opts.textColor || "black";
    this.icon = opts.icon || "info";
    this.modal = !!opts.modal;
    this.message = message;
}
