import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Garage Subsolo",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/index' },
      { text: 'Introdução', link: '/introducao' },
      { text: 'Descrição', link: '/descricao' },
      { text: 'Conclusão', link: '/conclusao' }
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: '1. Introdução', link: '/introducao' },
          { text: '2. Descrição', link: '/descricao' },
          { text: '3. Recursos e Funcionalidades', link: '/recursos' },
          { text: '4. Diagrama de Caso de Uso', link: '/diagrcasos' },
          { text: '5. Diagramas de Classe', link: '/diagrclass' },
          { text: '6. Protótipos de Telas', link: '/prototipo' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Conclusão', link: '/conclusao' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alanbidanos/GarageSubsoloDocuemntacao' }
    ]
  }
})