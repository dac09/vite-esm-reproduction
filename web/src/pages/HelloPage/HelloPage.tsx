import { Link, routes } from '@redwoodjs/router'
// 👇 Sorry about this, but we need to import from the dist folder
import { useServerData } from '@redwoodjs/web/dist/serverContext'

const HelloPage = () => {
  const dataFromServer = useServerData()

  console.log('dataFromServer', dataFromServer)

  return (
    <>
      <h1>Welcome to the Redwood rendermodes experiment</h1>
      <p>
        Find me in <code>./web/src/pages/HelloPage/HelloPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hello</code>, link to me with `
        <Link to={routes.hello()}>Hello</Link>`
      </p>
    </>
  )
}

export default HelloPage
