/**
 * Basically nx.json is like a configuration file to the entire nx monorepo
 *
 */

/**
       * this schematic is reponsible for the angular library cli
       * if the buildable is true this will make sure all the library you creating inside the library is buildable
          *  "@nx/angular:library": {
            "linter": "eslint",
            "unitTestRunner": "jest",
            "buildable":true
      }, */

/**
   * @example  nx g @nx/angular:library  tab/form-components --dry-run
   * if you create the angular library now you can see the files required to build the angular library is getting created
   * Files are :
   *  CREATE libs/tab/form-components/project.json
      CREATE libs/tab/form-components/README.md
      CREATE libs/tab/form-components/ng-package.json
      CREATE libs/tab/form-components/package.json
      CREATE libs/tab/form-components/tsconfig.json
      CREATE libs/tab/form-components/tsconfig.lib.json
      CREATE libs/tab/form-components/tsconfig.lib.prod.json
      CREATE libs/tab/form-components/src/index.ts
      CREATE libs/tab/form-components/src/lib/tab-form-components.module.ts
      CREATE libs/tab/form-components/jest.config.ts
      CREATE libs/tab/form-components/src/test-setup.ts
      CREATE libs/tab/form-components/tsconfig.spec.json
      CREATE libs/tab/form-components/.eslintrc.json
   */
