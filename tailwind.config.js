// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.html',
    './src/**/*.css'
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        'itana-gray': '#d8d8d8',
        'itana-blue': '#00345d',
        'itana-green': '#43ac45;',
        'itana-red': '#d40000'
      }
    }
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')]
}
