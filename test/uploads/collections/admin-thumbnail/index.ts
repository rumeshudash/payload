import type { CollectionConfig } from 'payload/types'

import path from 'path'

import { RegisterAdminThumbnailFn } from './RegisterThumbnailFn.js'

export const AdminThumbnailCol: CollectionConfig = {
  slug: 'admin-thumbnail',
  upload: {
    staticDir: path.resolve(process.cwd(), 'test/uploads/media'),
    adminThumbnail: RegisterAdminThumbnailFn,
  },
  fields: [],
}
