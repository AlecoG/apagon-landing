# Conceptos de Diseño para Apagones en La Habana

## Respuesta 1: Minimalismo Informativo con Énfasis en Datos (Probabilidad: 0.08)

**Movimiento de Diseño:** Data Visualization Modernism

**Principios Centrales:**
- Claridad radical: cada píxel comunica información
- Jerarquía tipográfica fuerte para guiar la lectura
- Paleta de dos colores contrastantes (verde/rojo) para estados
- Espaciado generoso para reducir carga cognitiva

**Filosofía de Color:**
- Fondo: blanco puro (oklch(1 0 0)) para máxima legibilidad
- Verde vivo (#10b981 - emerald-500) para "con corriente"
- Rojo intenso (#ef4444 - red-500) para "sin corriente"
- Grises neutros para texto secundario

**Paradigma de Layout:**
- Grid asimétrico: mapa ocupa 70% izquierda, panel de información 30% derecha
- Bloques de La Habana como tarjetas interactivas con estado visual claro
- Tipografía grande (3xl-4xl) para números/estados

**Elementos Distintivos:**
- Iconos de rayo para apagones
- Líneas divisorias sutiles entre bloques
- Badges circulares con estado (ON/OFF)

**Filosofía de Interacción:**
- Hover: cambio de escala suave (1.05x) y sombra elevada
- Click: transición de color suave (200ms)
- Feedback inmediato sin animaciones distractoras

**Animación:**
- Transiciones de color: 200ms ease-out
- Scale en hover: 150ms ease-out
- Pulse suave en estado "sin corriente" (2s loop)

**Sistema Tipográfico:**
- Encabezados: Poppins Bold (700) para contraste
- Cuerpo: Inter Regular (400) para legibilidad
- Números: Courier New (monoespaciado) para datos

---

## Respuesta 2: Realismo Urbano con Sensibilidad Social (Probabilidad: 0.07)

**Movimiento de Diseño:** Social Realism meets Digital Design

**Principios Centrales:**
- Narrativa visual que humaniza la crisis energética
- Contraste dramático entre luz y oscuridad
- Tipografía expresiva y asimétrica
- Paleta cálida que refleja la realidad habanera

**Filosofía de Color:**
- Fondo: gris oscuro (oklch(0.25 0.01 286)) para simular atardecer
- Amarillo cálido (#fbbf24 - amber-400) para "con corriente" (luz cálida)
- Azul profundo (#1e40af - blue-800) para "sin corriente" (oscuridad)
- Acentos naranjas para urgencia

**Paradigma de Layout:**
- Asimétrico: mapa diagonal con ángulo de 15°
- Bloques de La Habana como edificios 3D con perspectiva
- Texto superpuesto sobre el mapa con sombras legibles

**Elementos Distintivos:**
- Ilustración de silueta de La Habana
- Luces parpadeantes en bloques activos
- Textura de ruido sutil en fondo

**Filosofía de Interacción:**
- Hover: bloques "iluminados" con glow
- Click: reveal de información detallada
- Animación de "apagón" que simula corte de luz

**Animación:**
- Glow effect: 300ms ease-in-out
- Parpadeo suave: 1.5s loop
- Transición de estado: 400ms ease-out

**Sistema Tipográfico:**
- Encabezados: Playfair Display (serif elegante)
- Cuerpo: Lato Regular para calidez
- Datos: IBM Plex Mono para precisión

---

## Respuesta 3: Abstracción Geométrica Contemporánea (Probabilidad: 0.06)

**Movimiento de Diseño:** Neo-Brutalism meets Generative Design

**Principios Centrales:**
- Formas geométricas puras y audaces
- Paleta limitada pero vibrante (3-4 colores máximo)
- Tipografía sans-serif fuerte y moderna
- Movimiento constante pero controlado

**Filosofía de Color:**
- Fondo: negro profundo (oklch(0.1 0 0))
- Verde neón (#00ff88) para "con corriente"
- Púrpura intenso (#b024ff) para "sin corriente"
- Blanco para contraste máximo

**Paradigma de Layout:**
- Grid hexagonal o circular para los 6 bloques
- Centro: estadísticas agregadas
- Periferia: bloques individuales
- Rotación sutil del mapa (5°)

**Elementos Distintivos:**
- Hexágonos o círculos para representar bloques
- Líneas conectoras que muestran interdependencia
- Gradientes dinámicos

**Filosofía de Interacción:**
- Hover: rotación suave del bloque
- Click: expansión con información
- Estados visuales muy claros y contrastantes

**Animación:**
- Rotación continua sutil: 20s loop linear
- Pulse de energía: 2s loop
- Transiciones: 250ms cubic-bezier(0.34, 1.56, 0.64, 1) (bounce)

**Sistema Tipográfico:**
- Encabezados: Space Mono Bold para futurismo
- Cuerpo: Roboto Mono para precisión
- Números: Courier New para datos

---

## Decisión Final

**Se elige: Respuesta 1 - Minimalismo Informativo**

Este enfoque prioriza la claridad y la comunicación efectiva de la información crítica sobre los apagones. La paleta verde/rojo es intuitiva, el layout asimétrico permite tanto visualización como detalles, y las interacciones son responsivas sin ser distractoras. Es la opción más accesible y profesional para una herramienta de información pública.
