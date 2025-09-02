# 🚀 Apoia-Tec  

MicroSaaS desenvolvido para **técnicos autônomos** e **pequenos prestadores de serviços**, com foco em **gestão de pagamentos online**.  
Construído com **Next.js, Stripe, TypeScript e tecnologias modernas**, o sistema oferece **performance, design moderno e navegação intuitiva**, proporcionando uma experiência excepcional tanto para os técnicos quanto para seus clientes.  

---

## 📋 Funcionalidades  

- 💳 **Integração com Stripe**: gestão simplificada de pagamentos e assinaturas.  
- 🔐 **Autenticação segura** com NextAuth e Prisma Adapter.  
- 📊 **Dashboard intuitivo** para técnicos acompanharem recebimentos e clientes.  
- 🎨 **Design moderno e responsivo** com TailwindCSS e Radix UI.  
- ⚡ **Alta performance** com React 19, Next.js 15 e React Query.  
- 🛠 **Formulários dinâmicos** com React Hook Form + Zod (validação).  
- 🔔 **Notificações em tempo real** com Sonner.  

---

## 🛠️ Tecnologias Utilizadas  

- **Frontend & Framework**: [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)  
- **Estilização**: [TailwindCSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)  
- **Banco de Dados**: [Prisma ORM](https://www.prisma.io/)  
- **Autenticação**: [NextAuth v5](https://next-auth.js.org/)  
- **Pagamentos**: [Stripe](https://stripe.com/)  
- **Gerenciamento de Estado / Dados**: [TanStack React Query](https://tanstack.com/query)  
- **Validações & Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)  

---

## ⚙️ Como Rodar o Projeto  

### 1. Clone o repositório  
```bash
git clone https://github.com/seu-usuario/apoia-tec.git
cd apoia-tec
```


### 2. Instale as dependências  
```bash
npm install
```

### 3. Configure as variáveis de ambiente  

Crie um arquivo **.env** na raiz do projeto e adicione:  

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/apoia_tec"
NEXTAUTH_SECRET="sua_chave_segura"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sua_chave_secreta_stripe"
STRIPE_WEBHOOK_SECRET="seu_webhook_secret"
```

### 4. Configure o banco de dados
```cmd
npx prisma migrate dev
````
### 5. Inicie o servidor de desenvolvimento
```cmd
npm run dev
```
Acesse em: http://localhost:3000

## 🔗 Scripts Disponíveis  

- `npm run dev` → inicia o servidor Next.js em modo desenvolvimento.  
- `npm run build` → cria a versão otimizada para produção.  
- `npm run start` → roda o app em produção.  
- `npm run lint` → executa o linter.  
- `npm run stripe:listen` → escuta eventos do Stripe e encaminha para o webhook.  

---

## 📌 Roadmap  

- [ ] Implementar área do cliente com histórico de pagamentos.  
- [ ] Criar planos de assinatura flexíveis para técnicos.  
- [ ] Adicionar relatórios financeiros com gráficos interativos.  
- [ ] Melhorar acessibilidade (A11y).  

---

## 📄 Licença  

Este projeto está sob a licença **MIT** – sinta-se livre para usar e modificar.  



