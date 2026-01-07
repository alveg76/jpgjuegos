/**
 * This configuration powers the Sanity Studio mounted on `/admin`.
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  schema,
  plugins: [structureTool({structure}), visionTool({defaultApiVersion: apiVersion})],
})
