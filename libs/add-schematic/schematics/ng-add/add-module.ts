import { SchematicContext, Tree } from '@angular-devkit/schematics';

export function addModule(tree: Tree, context: SchematicContext) {
    console.log(tree, context);
}
