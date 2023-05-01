# Snapshot report for `test/e2e/world-acl.test.ts`

The actual snapshot is saved in `world-acl.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## snapshot - dcl help world-acl

> Snapshot 1

    `␊
      Usage: [1mdcl world-acl [world-name] SUBCOMMAND [options][22m␊
      ␊
        [2mSub commands:[22m␊
          show                          List all addresses allowed to deploy a scene to a specified world.␊
          grant  [addr 1] ... [addr n]  Grant permission to new addresses (separated by spaces) to deploy a scene to a specified world.␊
          revoke [addr 1] ... [addr n]  Remove permission for given addresses (separated by spaces) to deploy a scene to a specified world.␊
      ␊
    ␊
        [2mOptions:[22m␊
    ␊
          -h, --help                  Displays complete help␊
          -p, --port [port]           Select a custom port for the linker app (for signing with browser wallet)␊
          -t, --target-content [url]  Specifies the base URL for the target Worlds Content Server. Example: 'https://worlds-content-server.decentraland.org'.␊
    ␊
        [2mExamples:[22m␊
          - Show which addresses were given permission to deploy name.dcl.eth␊
          [32m$ dcl world-acl name.dcl.eth show[39m␊
    ␊
          - Grant addresses 0x1 and 0x2 permission to deploy name.dcl.eth␊
          [32m$ dcl world-acl name.dcl.eth grant 0x1 0x2[39m␊
    ␊
          - Revoke addresses 0x1 and 0x2 permission to deploy name.dcl.eth␊
          [32m$ dcl world-acl name.dcl.eth revoke 0x1 0x2[39m␊
    `