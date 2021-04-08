const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");
test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});
test("Wrong command", () => {
    const main = spawn("node", ["main.js", "count", "0"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });
    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});