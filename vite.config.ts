import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const publishedFrontendPaths = [
    'resources/js/actions/**',
    'resources/js/cockpit/**',
    'resources/js/components/financial/**',
    'resources/js/components/NumberInputWithKeypad.vue',
    'resources/js/components/NumericKeypad.vue',
    'resources/js/components/x-change/**',
    'resources/js/components/x-rider/**',
    'resources/js/composables/useClipboard.ts',
    'resources/js/composables/useFormFlowSummary.ts',
    'resources/js/composables/useIssuanceFundingPreflight.ts',
    'resources/js/composables/usePayCodeApi.ts',
    'resources/js/composables/usePayCodeCostEstimate.ts',
    'resources/js/composables/usePayCodeForm.ts',
    'resources/js/composables/usePublicClaimAppearance.ts',
    'resources/js/composables/useVoucherPreview.ts',
    'resources/js/config/**',
    'resources/js/data/**',
    'resources/js/layouts/PublicLayout.vue',
    'resources/js/layouts/x-change/**',
    'resources/js/pages/form-flow/**',
    'resources/js/pages/x-change/**',
    'resources/js/pages/x-rider/**',
    'resources/js/routes/**',
    'resources/js/types/voucher.d.ts',
    'resources/js/vendor/**',
    'resources/js/wayfinder/**',
];

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    server: {
        watch: {
            ignored: [
                '**/.agents/**',
                '**/.claude/**',
                '**/.cursor/**',
                '**/.junie/**',
                '**/vendor/**',
            ],
        },
    },
    lint: {
        ignorePatterns: [
            'vendor/**',
            'node_modules/**',
            'public/**',
            'bootstrap/ssr/**',
            'tailwind.config.js',
            'resources/js/components/ui/*',
            ...publishedFrontendPaths,
        ],
        options: {
            denyWarnings: true,
            typeAware: true,
        },
    },
    fmt: {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        ignorePatterns: [
            '**/*.md',
            '**/*.yaml',
            '.agents/**',
            '.junie/**',
            '.github/**',
            'composer.json',
            'public/**',
            'resources/documents/**',
            'resources/report-drivers/**',
            'resources/js/components/ui/*',
            ...publishedFrontendPaths,
            'resources/views/mail/*',
        ],
        sortTailwindcss: {
            functions: ['clsx', 'cn', 'cva'],
            entryPoint: 'resources/css/app.css',
        },
    },
});
