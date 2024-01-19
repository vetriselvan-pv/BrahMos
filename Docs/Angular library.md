# To Generate the angular lib using nx

`nx g @nx/angular:library <lib-name> --directory=<directory-name> --publishable --buildable --import-path=<lib-import-path>`

# To generate the angular component using nx

`nx g @nx/angular:component <component-name> --project=<project-name>`

-   To find the project name open the project.json of respective library <b> <i>name </i></b> is the project name.

# To generate a component inside library

`nx g @nx/angular:component tad-step --project=tad-stepper --dry-run`

-   Option "project" is deprecated: Provide the `directory` option instead and use the `as-provided` format. The project will be determined from the directory provided. It will be removed in Nx v18.
    ✔ Where should the component be generated? · libs/tad/stepper/src/lib/tad-step/tad-step.component.ts

-   In Nx 18, generating a component will no longer support providing a project and deriving the directory.
    Please provide the exact directory in the future.
-   Example: `nx g @nx/angular:component tad-step --directory=libs/tad/stepper/src/lib/tad-step`
-   NOTE: The example above assumes the command is being run from the workspace root. If the command is being run from a subdirectory, the directory option should be adjusted accordingly.
