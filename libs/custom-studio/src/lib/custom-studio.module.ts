import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBMenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { DBMenuBarListComponent } from './components/menu-bar-list/menu-bar-list.component';
import { DBStudioBoardComponent } from './components/studio-board/studio-board.component';
import { DBStudioContainerComponent } from './components/studio-container/studio-container.component';
import { DBTemplateComponent } from './components/template/template.component';
import { RouterModule } from '@angular/router';
import { routes } from './custom-studio.routes';
import { DBDroppableDirective } from './directives/dropable.directive';
import { DBDraggableDirective } from './directives/dragable.directive';
import { DragService } from './services/drag.service';

@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        MatCardModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        DBMenuBarComponent,
        DBMenuBarListComponent,
        DBStudioBoardComponent,
        DBStudioContainerComponent,
        DBTemplateComponent,
        DBDroppableDirective,
        DBDraggableDirective,
    ],
    exports: [
        DBMenuBarComponent,
        DBMenuBarListComponent,
        DBStudioBoardComponent,
        DBStudioContainerComponent,
        DBTemplateComponent,
    ],
    providers: [DragService],
})
export class CustomStudioModule {}
