/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // necessário para gerar arquivos estáticos
  basePath: '/ProjetoShadcnReact', // nome EXATO do seu repositório
  images: {
    unoptimized: true,              // Next não otimiza imagens no export
  },
};

module.exports = nextConfig;
