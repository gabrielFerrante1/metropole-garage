const esbuild = require("esbuild");

/** @type {import('esbuild').BuildOptions} */
const options = {
    bundle: true,
    target: "ES6",
}

/** @type {import('esbuild').BuildOptions} */
const serverBuildOpts = {
    ...options,
    entryPoints: ['./src/server/*.ts'],
    outdir: './build/server',
    platform: 'node',
    packages: 'external'
}

/** @type {import('esbuild').BuildOptions} */
const clientBuildOpts = {
    ...options,
    entryPoints: ['./src/client/*.ts'],
    outdir: './build/client',
}

async function watch() {
    const serverCtx = await esbuild.context(serverBuildOpts)
    const clientCtx = await esbuild.context(clientBuildOpts)

    await Promise.all([serverCtx.watch(), clientCtx.watch()])

    console.log("✅ Watching...")
}

watch();