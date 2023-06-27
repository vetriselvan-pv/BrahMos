import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addModule } from './add-module';

export function ngAdd(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('Adding node dependency');
        addModule(tree, context);
        context.addTask(new NodePackageInstallTask());
        return tree;
    };
}
