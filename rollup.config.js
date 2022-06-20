import typescript from 'rollup-plugin-typescript2';
export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.es.js",
            format: "es",
        },
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            exports: "default"
        }
    ],
    plugins: [
        typescript(
            {
                tsconfigDefaults: { compilerOptions: { declaration: true }, include: ['src/index.ts'] },
            }
        )
    ]
}
