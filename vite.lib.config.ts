import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { readFileSync, copyFileSync, mkdirSync } from "fs"

// Read peerDependencies from package.json - these get externalized
const pkg = JSON.parse(readFileSync("./package.json", "utf-8"))

// Externalize all peer dependencies - they won't be bundled
const external = [
    // React must be external to share context with host app
    "react",
    "react-dom",
    /^react\/.*/,
    /^react-dom\/.*/,

    // All peer dependencies from package.json
    ...Object.keys(pkg.peerDependencies || {}),

    // Radix UI subpaths
    /^@radix-ui\/.*/,
    /^radix-ui\/.*/,

    // react-icons subpaths
    /^react-icons\/.*/,

    // lucide-react subpaths
    /^lucide-react\/.*/,
]

// Library build configuration for spectra package
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ["src/spectra/**/*"],
            outDir: "lib",
            tsconfigPath: "./tsconfig.app.json",
            rollupTypes: false, // api-extractor has path issues on Windows
        }),
        // Copy static CSS file to lib output
        {
            name: 'copy-styles',
            closeBundle() {
                mkdirSync('lib', { recursive: true })
                copyFileSync('src/spectra/styles.css', 'lib/styles.css')
            }
        },
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: {
                "input-primitives": path.resolve(__dirname, "src/spectra/ui/input-primitives/index.ts"),
                "dialogs": path.resolve(__dirname, "src/spectra/ui/dialogs/index.ts"),
                "fragments": path.resolve(__dirname, "src/spectra/ui/fragments/index.ts"),
                "group": path.resolve(__dirname, "src/spectra/ui/group/index.ts"),
                "state": path.resolve(__dirname, "src/spectra/ui/state/index.ts"),
                "labeled-input": path.resolve(__dirname, "src/spectra/ui/labeled-input/index.ts"),
            },
            formats: ["es", "cjs"],
            fileName: (format, entryName) => {
                const ext = format === "es" ? "js" : "cjs"
                return `${entryName}.${ext}`
            },
        },
        rollupOptions: {
            external,
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        outDir: "lib",
        emptyOutDir: true,
    },
})
