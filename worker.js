export const api = {
  icon: '🚀',
  name: 'iterate.do',
  description: 'Simple Data Iteration API',
  url: 'https://iterate.do/api',
  type: 'https://apis.do/data',
  endpoints: {
    listCategories: 'https://iterate.do/api',
    getCategory: 'https://iterate.do/:type',
  },
  site: 'https://iterate.do',
  login: 'https://iterate.do/login',
  signup: 'https://iterate.do/signup',
  subscribe: 'https://iterate.do/subscribe',
  repo: 'https://github.com/drivly/iterate.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://iterate.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
