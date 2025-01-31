import path from 'path'
import test from 'ava'

import commands from '../../src/commands'
import { isDebug } from '../../src/utils/env'
import Commando from '../helpers/commando'

test('snapshot - dcl commands', (t) => {
  t.snapshot(commands)
})

test('help command', async (t) => {
  // dcl help
  const allDataDclHelpPromise = new Promise((resolve) => {
    let allData = ''
    new Commando(
      `node ${path.resolve('dist', 'index.js')} help`,
      { silent: !isDebug(), workingDir: '.', env: { NODE_ENV: 'development' } },
      (data) => (allData += data)
    ).on('end', async () => {
      resolve(allData)
    })
  })

  // dcl # no command
  const allDataDclPromise = new Promise((resolve) => {
    let allData = ''
    new Commando(
      `node ${path.resolve('dist', 'index.js')}`,
      { silent: !isDebug(), workingDir: '.', env: { NODE_ENV: 'development' } },
      (data) => (allData += data)
    ).on('end', async () => {
      resolve(allData)
    })
  })

  const [allDataDclHelp, allDataDcl] = await Promise.all([
    allDataDclHelpPromise,
    allDataDclPromise
  ])
  t.is(allDataDcl, allDataDclHelp)
  t.snapshot(allDataDcl)
})
