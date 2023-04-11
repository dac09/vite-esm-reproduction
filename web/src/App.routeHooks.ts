import { MetaHook, ServerDataHook, TagDescriptor } from '@redwoodjs/web'

export const serverData: ServerDataHook = () => {
  console.log('Running serverData from App.routeHooks.ts')
  return {
    topLevel: 'Top Level Server data from App.routeHooks.ts',
  }
}

export const meta: MetaHook = (): TagDescriptor[] => {
  console.log('Running meta from App.routeHooks.ts')
  return [
    {
      name: 'description',
      content: 'Description from App routeHook',
    },
  ]
}
