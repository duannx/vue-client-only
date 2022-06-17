export default {
    input: "src/index.js",
    output: [
        {
            file: "lib/vue-client-only.es.js",
            format: "es"
        },
        {
            file: "lib/vue-client-only.cjs.js",
            format: "cjs"
        }
    ],
    external: []
}
