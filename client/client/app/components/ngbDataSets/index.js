// Import Style
import './ngbDataSets.scss';
import './internal/ngbPermissionsForm/ngbPermissionsForm.scss';
// Import internal modules
import angular from 'angular';
import component from './ngbDataSets.component';
import controller from './ngbDataSets.controller';
import service from './ngbDataSets.service';
import ngbPermissionsFormService from './internal/ngbPermissionsForm/ngbPermissionsForm.service';
import indeterminateCheckbox from './internal/ngbDataSets.indeterminateCheckbox';
import ngbContextMenu from './internal/ngbDataSetContextMenu/ngbContextMenu';
import ngbDataSetContextMenu from './internal/ngbDataSetContextMenu';

export default angular.module('ngbDataSets', [ngbContextMenu, ngbDataSetContextMenu])
    .directive('indeterminateCheckbox', indeterminateCheckbox)
    .service('ngbPermissionsFormService', ngbPermissionsFormService)
    .service('ngbDataSetsService', service.instance)
    .controller(controller.UID, controller)
    .component('ngbDataSets', component)
    .name;
