import type { MetaHook, ServerDataHook } from '@redwoodjs/web'

import { db } from '$api/src/lib/db'

export const serverData: ServerDataHook = async () => {
  const someDataFromDb = await db.userExample.findMany()
  return {
    sampleData: someDataFromDb,
  }
}

export const meta: MetaHook = async ({
  serverData,
  params,
  query,
  headers,
  appRouteHook,
}) => {
  console.log('Running meta from HelloPage.routeHooks.ts ~~~~~~~~~')

  console.log(
    `👉 \n ~ file: HelloPage.routeHooks.ts ~ appRouteHook:`,
    appRouteHook
  )
  console.log(`👉 \n ~ file: HelloPage.routeHooks.ts ~ serverData:`, serverData)
  console.log(`👉 \n ~ file: HelloPage.routeHooks.ts ~ headers:`, headers)
  console.log(`👉 \n ~ file: HelloPage.routeHooks.ts ~ query:`, query)
  console.log(`👉 \n ~ file: HelloPage.routeHooks.ts ~ params:`, params)
  console.log('~'.repeat(50))
  return [
    {
      title: 'Bazinga',
    },
  ]
}
