import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  groups: [
    {name: 'pricing', title: 'Precios'},
    {name: 'status', title: 'Estado'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción (para modal / ficha)',
      type: 'text',
      rows: 4,
      description: 'Texto corto que se mostrará en el modal de "Ver detalles" y en la página del producto.',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube (URL opcional)',
      type: 'url',
      description: 'Pega la URL normal de YouTube (ej: https://www.youtube.com/watch?v=XXXX o https://youtu.be/XXXX).',
    }),
    defineField({
      name: 'gallery',
      title: 'Galería (opcional)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Imágenes adicionales para el modal o la página de detalles.',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      description: 'Ej: Estrategia, Party, Didácticos…',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      group: 'pricing',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'compareAtPrice',
      title: 'Precio tachado (opcional)',
      type: 'number',
      group: 'pricing',
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          {title: 'Nuevo', value: 'NUEVO'},
          {title: 'Oferta', value: 'OFERTA'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'stock',
      title: 'Estado de inventario',
      type: 'string',
      group: 'status',
      options: {
        list: [
          {title: 'En stock', value: 'in_stock'},
          {title: 'Preventa', value: 'preorder'},
          {title: 'Agotado', value: 'out_of_stock'},
        ],
      },
      initialValue: 'in_stock',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen principal',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Destacar en home',
      type: 'boolean',
      description: 'Si está activo, aparece en la rejilla de destacados.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
