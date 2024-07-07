const z = require("zod");

const todovalidate = z.object({
    title: z.string(),
    description: z.string()
});

module.exports = todovalidate;
