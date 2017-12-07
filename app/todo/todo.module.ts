import * as angular from 'angular';
import { TodoComponent } from './todo.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { coreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { TodoFooterModule } from './todo-footer/todo-footer.module';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { downgradeComponent } from '@angular/upgrade/static';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoFormModule } from './todo-form/todo-form.module';
import { LoggerModule } from '../blocks/logger/logger.module';
import { TodoApiModule } from '../todo-api/todo-api.module';

export const todoModule = angular
  .module('todo.todo', [
    coreModule.name
  ])
  .directive('todo', downgradeComponent({ component: TodoComponent }))
  .run(['routerHelper', (routerHelper) => {
    routerHelper.configureStates([
      {
        state: 'todo',
        config: {
          url: '/todo',
          component: 'todo',
          title: 'Todo'
        }
      }
    ]);
  }]);

@NgModule({
  imports: [
    LoggerModule,
    TodoApiModule,
    TodoFooterModule,
    TodoListModule,
    TodoFormModule,
  ],
  declarations: [TodoComponent],
  entryComponents: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
