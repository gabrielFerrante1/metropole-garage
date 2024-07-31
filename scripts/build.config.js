const { build } = require("esbuild");

build({
    entryPoints: ["./src/client/*.ts"],
    outdir: "./build/client",
    bundle: true,
    target: "ES6",
}).catch(() => process.exit(1));

build({
    entryPoints: ['./src/server/*.ts'],
    outdir: "./build/server",
    bundle: true,
    platform: "node",
    target: "ES6",
    packages: 'external',
}).catch(() => process.exit(1))