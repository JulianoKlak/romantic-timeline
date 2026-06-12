# Brainstorming de Design - Romantic Timeline

## Abordagem 1: Minimalismo Romântico Contemporâneo
**Probabilidade: 0.08**

### Design Movement
Minimalismo moderno com influências do design nórdico e sensibilidade romântica contemporânea.

### Core Principles
- **Espaço negativo generoso**: Cada elemento respira, nenhuma poluição visual
- **Tipografia como protagonista**: Fontes elegantes e hierarquia clara guiam a narrativa emocional
- **Paleta restrita, impactante**: Apenas 3-4 cores principais, cada uma com propósito
- **Movimento sutil**: Animações que sussurram, não gritam

### Color Philosophy
- **Fundo**: Branco puro ou creme muito claro (quase branco) para máxima legibilidade
- **Acentos principais**: Rosa dusty (rose mauve - `#C8A2C8`) e ouro suave (`#D4AF7A`)
- **Texto**: Cinza charcoal profundo (`#2C2C2C`) para contraste elegante
- **Secundário**: Bege quente (`#F5EFE7`) para cards e seções
- **Intenção emocional**: Sofisticação através da simplicidade, elegância através da restrição

### Layout Paradigm
- Timeline em linha vertical central com eventos alternando esquerda/direita
- Uso assimétrico de espaço: fotos grandes em um lado, texto minimalista no outro
- Seções com divisores sutis (linhas finas ou mudanças de background)
- Scroll horizontal ocasional para galerias (quebra a monotonia vertical)

### Signature Elements
- **Linhas delicadas conectando eventos**: Fio de ouro ou rosa conectando pontos na timeline
- **Números grandes e elegantes**: Datas em tipografia oversized, semitransparente
- **Ícones minimalistas customizados**: Coração, câmera, anel - em linhas finas

### Interaction Philosophy
- Fade-in suave ao scroll (opacity 0 → 1 em 400ms)
- Hover em fotos: zoom muito leve (1.02x) com blur sutil no fundo
- Cards de eventos: elevação sutil ao hover (shadow aumenta)
- Cliques revelam mais detalhes com transição suave

### Animation
- Entrada de elementos: fade-in + slide-up leve (20px) em 500ms com ease-out
- Timeline: números contam de 0 até o valor final em 2s ao entrar na viewport
- Parallax muito discreto: imagens se movem 5-10% do scroll
- Transições entre seções: fade suave de 300ms

### Typography System
- **Display**: Playfair Display (serif elegante) para títulos principais e nomes do casal
- **Heading**: Cormorant Garamond (serif clássico) para títulos de seções
- **Body**: Lora (serif legível) para textos longos, ou Poppins (sans-serif moderno) para um toque contemporâneo
- **Hierarquia**: H1 (48px), H2 (32px), H3 (24px), Body (16px), Small (14px)

---

## Abordagem 2: Scrapbook Digital Nostálgico
**Probabilidade: 0.07**

### Design Movement
Inspiração em scrapbooks analógicos dos anos 2000, reimaginado com sensibilidade digital contemporânea. Estética "handmade" mas polida.

### Core Principles
- **Autenticidade visual**: Texturas, padrões, e imperfeições que parecem genuínas
- **Camadas e profundidade**: Elementos sobrepostos, como colagem física
- **Variedade controlada**: Diferentes estilos de cards e frames, mas com unidade visual
- **Nostalgia com modernidade**: Elementos retrô executados com refinamento atual

### Color Philosophy
- **Paleta quente**: Rosa coral (`#E8A5A5`), creme (`#FFF8F0`), dourado envelhecido (`#C9A961`), vermelho vinho (`#8B3A3A`)
- **Secundária**: Tons pastéis suaves para backgrounds (rosa claro, bege, lavanda)
- **Intenção emocional**: Calor, intimidade, memória, nostalgia com sofisticação

### Layout Paradigm
- Composição assimétrica: elementos em ângulos leves (2-5 graus de rotação)
- Cards com diferentes tamanhos e orientações (portrait, landscape, quadrado)
- Uso de "fitas" e "clipes" visuais conectando elementos
- Seções com padrões de fundo (pequenos corações, pétalas, pontos)

### Signature Elements
- **Frames estilo polaroid**: Bordas brancas grossas em fotos, com sombra suave
- **Anotações manuscritas**: Datas e títulos em fonte script elegante
- **Elementos decorativos**: Flores prensadas (ilustradas), fitas, selos, clipes
- **Texturas sutis**: Papel envelhecido, leve ruído, efeito de papel amassado

### Interaction Philosophy
- Ao hover: cards levantam levemente (como se fossem físicos)
- Clique em foto: abre em modal com efeito de "desdobrar"
- Scroll revela elementos como se estivessem sendo descobertos
- Microinterações: clipe gira ao hover, fita se move

### Animation
- Entrada: scale-up suave (0.9 → 1) + fade-in em 600ms com bounce leve
- Ao scroll: elementos giram levemente (1-3 graus) enquanto entram
- Parallax: imagens se movem em velocidades diferentes, criando profundidade
- Transições: 400-500ms, sempre com ease-out suave

### Typography System
- **Display**: Playfair Display (serif elegante) para títulos
- **Anotações**: Caveat ou Pacifico (script elegante) para datas e pequenas notas
- **Body**: Lora ou Merriweather (serif quente) para textos
- **Hierarquia**: Títulos grandes (40px), subtítulos (24px), anotações (18px), body (16px)

---

## Abordagem 3: Modernismo Luxuoso com Toque Artístico
**Probabilidade: 0.09**

### Design Movement
Art Deco contemporâneo encontra design de luxo moderno. Geométrico, sofisticado, com influências de joalharia e design de alta moda.

### Core Principles
- **Geometria intencional**: Linhas, ângulos, e formas que criam ritmo visual
- **Luxo através da precisão**: Cada pixel tem propósito, nada é acidental
- **Contraste dramático**: Luz e sombra, cores vibrantes com neutros
- **Movimento dinâmico**: Animações que dão sensação de fluidez e energia

### Color Philosophy
- **Paleta luxuosa**: Ouro profundo (`#D4AF7A`), burgundy (`#8B3A3A`), preto elegante (`#1A1A1A`), branco puro (`#FFFFFF`)
- **Acentos**: Rosa mauve (`#C8A2C8`), champagne (`#F7E7D8`)
- **Intenção emocional**: Sofisticação, poder, romance, exclusividade

### Layout Paradigm
- Grid com quebras estratégicas: alguns elementos saem da grid para criar tensão visual
- Divisores geométricos: linhas diagonais, triângulos, formas abstratas
- Uso de "frames" geométricos ao redor de fotos (hexágonos, retângulos com ângulos)
- Seções com backgrounds em gradientes sutis ou padrões geométricos

### Signature Elements
- **Linhas de ouro**: Divisores e destaques em ouro ou rose gold
- **Formas geométricas abstratas**: Triângulos, linhas, círculos como elementos decorativos
- **Ícones art-deco**: Estilizados, geométricos, sofisticados
- **Padrões de fundo**: Linhas finas, pontos, ou padrões geométricos sutis

### Interaction Philosophy
- Hover: elementos ganham glow sutil de ouro ou mudança de cor
- Clique: transição com efeito de "reveal" (cortina geométrica)
- Scroll: elementos se reorganizam ou revelam com movimento fluido
- Microinterações: linhas se desenham, formas se transformam

### Animation
- Entrada: elementos aparecem com desenho de linhas (stroke animation) em 800ms
- Ao scroll: rotação leve (0-2 graus) e fade-in combinados
- Parallax: movimento mais pronunciado, criando profundidade dramática
- Transições: 500-600ms com ease-in-out, sempre elegante

### Typography System
- **Display**: Playfair Display (serif elegante, clássico) para títulos
- **Heading**: Montserrat Bold (sans-serif geométrico) para subtítulos
- **Body**: Lora (serif legível) ou Montserrat Light (sans-serif moderno)
- **Hierarquia**: H1 (56px), H2 (36px), H3 (24px), Body (16px), Small (13px)

---

## Decisão Final

Será implementada a **Abordagem 1: Minimalismo Romântico Contemporâneo** porque:
- Transmite sofisticação e elegância sem excessos
- Permite que as fotos e histórias sejam o foco principal
- Animações sutis criam emoção sem distrair
- Tipografia elegante reforça o tom romântico
- Paleta restrita (branco, rosa dusty, ouro) é timeless e sofisticada
- Melhor experiência mobile (minimalismo escala bem)
- Fácil de personalizar e manter
