# 📱 Floating Contact Button - Mobile

## ✅ **Nueva funcionalidad implementada:**

### 🎯 **Comportamiento:**

- **Solo visible en móvil**: Se oculta en desktop (md:hidden)
- **Aparece en scroll**: Cuando el usuario hace scroll más allá del botón "Get in Touch" original
- **Se oculta cerca del footer**: Desaparece cuando se acerca a la sección de contacto
- **Smooth scroll**: Al hacer clic, lleva suavemente a la sección de contacto

### 🎨 **Diseño:**

- **Botón circular**: 64x64px (w-16 h-16)
- **Icono de sobre**: Mail icon de Lucide React
- **Colores**: Golden/Dark-golden con hover a bottle
- **Posición**: Fixed bottom-right (bottom-6 right-6)
- **Efectos**:
  - Animate-pulse al aparecer
  - Ripple effect con animate-ping
  - Hover scale y shadow
  - Backdrop blur para efecto glassmorphism

### 🔧 **Implementación técnica:**

#### Archivos creados/modificados:

1. **`/src/components/atoms/FloatingContactButton.tsx`** - Componente principal
2. **`/src/components/atoms/index.ts`** - Export agregado
3. **`/src/App.tsx`** - Componente añadido
4. **`/src/components/molecules/hero.tsx`** - ID "hero" añadido

#### Lógica de visibilidad:

```typescript
const shouldShow = heroBottom < 100 && contactTop > 200;
```

- Se muestra cuando el hero está 100px fuera del viewport
- Se oculta cuando el contacto está a 200px del viewport

### 📱 **Experiencia móvil:**

- **Aparición**: Smooth transition con translate-y
- **Feedback**: Pulse animation y ripple effect
- **Accesibilidad**: aria-label para screen readers
- **Performance**: Scroll listener con passive: true

### 🚀 **Para probar:**

1. Abrir en móvil o DevTools responsive
2. Hacer scroll hacia abajo después del hero
3. Ver aparecer el botón floating con animaciones
4. Hacer clic para ir suavemente al contacto
5. Verificar que desaparece cerca del footer

¡La experiencia móvil ahora tiene un acceso rápido al contacto! 📧
