(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Antonio\Desktop\NJSP Projekt\angular\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/advertisement.service */ "q/cA");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/category.service */ "fH6q");
/* harmony import */ var _shared_services_condition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/condition.service */ "daTr");
/* harmony import */ var _shared_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/place.service */ "nnIM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/filter.pipe */ "BhhM");
/* harmony import */ var _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/filter-price.pipe */ "JNpk");










function MainPageComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r3.categoryName);
} }
function MainPageComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const condition_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](condition_r4.conditionName);
} }
const _c0 = function (a1) { return ["oglas/", a1]; };
function MainPageComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const advertisement_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](advertisement_r5.categoryNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, advertisement_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](advertisement_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](advertisement_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](advertisement_r5.conditionNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](advertisement_r5.placeNameFK);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
class MainPageComponent {
    constructor(advertisementsService, categoriesService, conditionsService, placesService) {
        this.advertisementsService = advertisementsService;
        this.categoriesService = categoriesService;
        this.conditionsService = conditionsService;
        this.placesService = placesService;
        this.QueryCategory = '';
        this.QueryName = '';
        this.QueryMinimalPrice = null;
        this.QueryMaximalPrice = null;
        this.QueryCondition = '';
        this.QueryPlace = '';
    }
    ngOnInit() {
        this.advertisementsSubject = this.advertisementsService.getAdvertisements();
        this.advertisementsSubscription = this.advertisementsSubject
            .subscribe(res => {
            this.advertisements = res;
        });
        this.categoriesSubject = this.categoriesService.getCategories();
        this.categoriesSubscription = this.categoriesSubject
            .subscribe(res => {
            this.categories = res;
        });
        this.conditionsSubject = this.conditionsService.getConditions();
        this.conditionsSubscription = this.conditionsSubject
            .subscribe(res => {
            this.conditions = res;
        });
        this.placesSubject = this.placesService.getPlaces();
        this.placesSubscription = this.placesSubject
            .subscribe(res => {
            this.places = res;
        });
    }
}
MainPageComponent.??fac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_1__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_condition_service__WEBPACK_IMPORTED_MODULE_3__["ConditionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"])); };
MainPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 62, vars: 32, consts: [[1, "container-fluid"], [1, "row"], [1, "col-2"], [1, "form-group"], [1, "font-weight-bold"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["selected", "", "value", ""], [4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-10"], [1, "table", "table-striped"], ["scope", "col"], [3, "routerLink"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Odabir kategorije:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_select_ngModelChange_7_listener($event) { return ctx.QueryCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Sve kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MainPageComponent_option_10_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Pretraga po imenu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.QueryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Pretraga po cijeni:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Najni\u017Ea cijena:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.QueryMinimalPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Najvi\u0161a cijena:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.QueryMaximalPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Odabir stanja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_select_ngModelChange_32_listener($event) { return ctx.QueryCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Bilo koje stanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, MainPageComponent_option_35_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Pretraga po lokaciji:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MainPageComponent_Template_input_ngModelChange_40_listener($event) { return ctx.QueryPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Kategorija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Naziv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Stanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Lokacija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, MainPageComponent_tr_56_Template, 12, 8, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "filterPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](60, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](61, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryMinimalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryMaximalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.conditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.QueryPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](57, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](58, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](59, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](60, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](61, 25, ctx.advertisements, "name", ctx.QueryName), "categoryNameFK", ctx.QueryCategory), "price", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](29, _c1, ctx.QueryMinimalPrice, ctx.QueryMaximalPrice)), "conditionNameFK", ctx.QueryCondition), "placeNameFK", ctx.QueryPlace));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"], _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPricePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "1JYN":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _admin_components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-components/adminusers/adminusers.component */ "C0XJ");
/* harmony import */ var _admin_components_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-components/adminadvertisements/adminadvertisements.component */ "mfnd");
/* harmony import */ var _admin_components_admincategories_admincategories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-components/admincategories/admincategories.component */ "dwe5");
/* harmony import */ var _admin_components_adminconditions_adminconditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-components/adminconditions/adminconditions.component */ "22Xx");
/* harmony import */ var _admin_components_adminplaces_adminplaces_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-components/adminplaces/adminplaces.component */ "aDY+");







class AdministrationComponent {
    constructor(authorizationGuardService) {
        this.authorizationGuardService = authorizationGuardService;
    }
    ngOnInit() {
        this.authorizationGuardService.canAccessAdmin();
    }
}
AdministrationComponent.??fac = function AdministrationComponent_Factory(t) { return new (t || AdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationGuardService"])); };
AdministrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AdministrationComponent, selectors: [["app-administration"]], decls: 9, vars: 0, template: function AdministrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-adminusers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-adminadvertisements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-admincategories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-adminconditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-adminplaces");
    } }, directives: [_admin_components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_2__["AdminusersComponent"], _admin_components_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_3__["AdminadvertisementsComponent"], _admin_components_admincategories_admincategories_component__WEBPACK_IMPORTED_MODULE_4__["AdmincategoriesComponent"], _admin_components_adminconditions_adminconditions_component__WEBPACK_IMPORTED_MODULE_5__["AdminconditionsComponent"], _admin_components_adminplaces_adminplaces_component__WEBPACK_IMPORTED_MODULE_6__["AdminplacesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _ConfirmedValidator_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmedValidator.validator */ "zoz+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _shared_services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/place.service */ "nnIM");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function RegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Molimo Vas upi\u0161ite \u0161ifru ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function RegisterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Molimo Vas ponovite upis \u0161ifre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function RegisterComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u0160ifre se ne popudaraju ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function RegisterComponent_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const place_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](place_r4.placeName);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class RegisterComponent {
    constructor(authorizationGuardService, placesService, userService, formBuilder, router) {
        this.authorizationGuardService = authorizationGuardService;
        this.placesService = placesService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.authorizationGuardService.canNotAcessWhileLogged();
        this.placesSubject = this.placesService.getPlaces();
        this.placesSubscription = this.placesSubject
            .subscribe(res => {
            this.places = res;
        });
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            admin: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            streetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            placeNameFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        }, {
            validator: Object(_ConfirmedValidator_validator__WEBPACK_IMPORTED_MODULE_2__["confirmedValidator"])('password1', 'password2')
        });
    }
    get username() { return this.registerForm.get("username"); }
    get email() { return this.registerForm.get("email"); }
    get admin() { return this.registerForm.get("admin"); }
    get password1() { return this.registerForm.get("password1"); }
    get password2() { return this.registerForm.get("password2"); }
    get name() { return this.registerForm.get("name"); }
    get surname() { return this.registerForm.get("surname"); }
    get dateOfBirth() { return this.registerForm.get("dateOfBirth"); }
    get streetName() { return this.registerForm.get("streetName"); }
    get streetNumber() { return this.registerForm.get("streetNumber"); }
    get placeNameFK() { return this.registerForm.get("placeNameFK"); }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.newUser.username = this.registerForm.value.username;
        this.newUser.email = this.registerForm.value.email;
        this.newUser.password = this.registerForm.value.password1;
        if (this.registerForm.value.admin) {
            this.newUser.admin = this.registerForm.value.admin;
        }
        else {
            this.newUser.admin = false;
        }
        this.newUser.name = this.registerForm.value.name;
        this.newUser.surname = this.registerForm.value.surname;
        this.newUser.dateOfBirth = this.registerForm.value.dateOfBirth;
        this.newUser.streetName = this.registerForm.value.streetName;
        this.newUser.streetNumber = this.registerForm.value.streetNumber;
        this.newUser.placeNameFK = this.registerForm.value.placeNameFK;
        console.log(this.newUser);
        this.userService.addUser(this.newUser);
        this.router.navigate(["/prijava"]);
    }
    ngOnDestroy() {
        this.placesSubscription.unsubscribe();
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 89, vars: 46, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], ["routerLink", "/prijava", "routerLinkActive", "active"], [2, "text-align", "center"], [3, "formGroup", "submit"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "password1"], ["type", "password", "name", "password1", "id", "password1", "formControlName", "password1", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "password2"], ["type", "password", "name", "password2", "id", "password2", "formControlName", "password2", 1, "form-control", 3, "ngClass"], [1, "form-check"], ["type", "checkbox", "name", "admin", "id", "admin", "formControlName", "admin", 1, "form-check-input"], ["for", "admin", 1, "form-check-label"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "surname"], ["type", "text", "name", "surname", "id", "surname", "formControlName", "surname", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-12", "col-lg-8"], ["for", "streetName"], ["type", "text", "name", "streetName", "id", "streetName", "formControlName", "streetName", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-12", "col-lg-4"], ["for", "streetNumber"], ["type", "text", "name", "streetNumber", "id", "streetNumber", "formControlName", "streetNumber", 1, "form-control", 3, "ngClass"], ["for", "placeNameFK"], ["name", "placeNameFK", "id", "placeNameFK", "formControlName", "placeNameFK", 1, "form-control", 3, "ngClass"], ["selected", ""], [4, "ngFor", "ngForOf"], [1, "col", "text-center"], ["type", "submit", "value", "Registriraj me", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-lg-4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Registracija");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " Ve\u0107 imate korisni\u010Dki profil? Idite na prijavu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function RegisterComponent_Template_form_submit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Korisni\u010Dko ime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Korisnicko ime mora biti dulje od 4 znaka");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "Molimo Vas upi\u0161ite valjanu email adresu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "\u0160ifra:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](31, RegisterComponent_div_31_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "Ponovljena \u0161ifra:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, RegisterComponent_div_37_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, RegisterComponent_div_38_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Ime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Molimo Vas upi\u0161ite Va\u0161e ime");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "Prezime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "Molimo Vas upi\u0161ite Va\u0161e prezime");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58, "Datum ro\u0111enja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](59, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "Molimo Vas odaberite Va\u0161 datum ro\u0111enja");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Ime ulice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](66, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68, "Molimo Vas upi\u0161ite ime Va\u0161e ulice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](71, "Ku\u0107ni broj:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, "Molimo Vas upi\u0161ite broj Va\u0161e adrese");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Naziv mjesta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "Odabir mjesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](81, RegisterComponent_option_81_Template, 2, 1, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, "Molimo Vas odaberite Va\u0161e mjesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](87, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](16, _c0, (ctx.username.dirty || ctx.username.touched) && ctx.username.invalid, (ctx.username.dirty || ctx.username.touched) && ctx.username.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](19, _c0, (ctx.email.dirty || ctx.email.touched) && ctx.email.invalid, (ctx.email.dirty || ctx.email.touched) && ctx.email.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](22, _c0, (ctx.password1.dirty || ctx.password1.touched) && (ctx.password1.invalid || ctx.password1.value != ctx.password2.value), (ctx.password1.dirty || ctx.password1.touched) && ctx.password1.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", (ctx.password1.dirty || ctx.password1.touched) && ctx.password1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](25, _c0, (ctx.password2.dirty || ctx.password2.touched) && (ctx.password2.invalid || ctx.password1.value != ctx.password2.value), (ctx.password2.dirty || ctx.password2.touched) && ctx.password2.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", (ctx.password2.dirty || ctx.password2.touched) && ctx.password2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", (ctx.password2.dirty || ctx.password2.touched) && ctx.password1.value != ctx.password2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](28, _c0, (ctx.name.dirty || ctx.name.touched) && ctx.name.invalid, (ctx.name.dirty || ctx.name.touched) && ctx.name.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](31, _c0, (ctx.surname.dirty || ctx.surname.touched) && ctx.surname.invalid, (ctx.surname.dirty || ctx.surname.touched) && ctx.surname.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](34, _c0, (ctx.dateOfBirth.dirty || ctx.dateOfBirth.touched) && ctx.dateOfBirth.invalid, (ctx.dateOfBirth.dirty || ctx.dateOfBirth.touched) && ctx.dateOfBirth.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](37, _c0, (ctx.streetName.dirty || ctx.streetName.touched) && ctx.streetName.invalid, (ctx.streetName.dirty || ctx.streetName.touched) && ctx.streetName.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](40, _c0, (ctx.streetNumber.dirty || ctx.streetNumber.touched) && ctx.streetNumber.invalid, (ctx.streetNumber.dirty || ctx.streetNumber.touched) && ctx.streetNumber.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](43, _c0, (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && (ctx.placeNameFK.invalid || ctx.placeNameFK.value == "Odabir mjesta"), (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && ctx.placeNameFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.places);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "1tl6":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/advertisement-detail.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdvertisementDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementDetailService", function() { return AdvertisementDetailService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/advertisement.model */ "PNYx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "iiaH");




class AdvertisementDetailService {
    constructor(dataService) {
        this.dataService = dataService;
        this.advertisement = new _models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__["Advertisement"];
        this.advertisementSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    getAdvertisement(_id) {
        this.dataService.getAdvertisement(_id)
            .subscribe((res) => {
            console.log(res);
            this.advertisement = res.advertisement;
            this.advertisementSubject.next(this.advertisement);
        });
        return this.advertisementSubject;
    }
}
AdvertisementDetailService.??fac = function AdvertisementDetailService_Factory(t) { return new (t || AdvertisementDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
AdvertisementDetailService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AdvertisementDetailService, factory: AdvertisementDetailService.??fac, providedIn: 'root' });


/***/ }),

/***/ "22Xx":
/*!**********************************************************************************************!*\
  !*** ./src/app/administration/admin-components/adminconditions/adminconditions.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminconditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminconditionsComponent", function() { return AdminconditionsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_condition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/condition.service */ "daTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AdminconditionsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminconditionsComponent_tr_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.getCondition(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Ispi\u0161i stanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminconditionsComponent_tr_20_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const condition_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.sendToEdit(condition_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Uredi stanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminconditionsComponent_tr_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.deleteCondition(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Izbri\u0161i stanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const condition_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](condition_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](condition_r1.conditionName);
} }
class AdminconditionsComponent {
    constructor(conditionService) {
        this.conditionService = conditionService;
        this.conditionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.conditionsSubject = this.conditionService.getConditions();
        this.subscription = this.conditionsSubject
            .subscribe(res => {
            this.conditions = res;
        });
    }
    addCondition() {
        this.conditionService.addCondition({ conditionName: this.newConditionName });
        this.newConditionName = "";
    }
    sendToEdit(condition) {
        this.edit_id = condition._id;
        this.editConditionName = condition.conditionName;
    }
    editCondition(condition) {
        this.conditionService.editCondition(condition);
    }
    getCondition(i) {
        let c = this.conditions[i];
        console.log(this.conditionService.getCondition(c._id));
    }
    deleteCondition(i) {
        let c = this.conditions[i];
        this.conditionService.deleteCondition(c._id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AdminconditionsComponent.??fac = function AdminconditionsComponent_Factory(t) { return new (t || AdminconditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_services_condition_service__WEBPACK_IMPORTED_MODULE_2__["ConditionService"])); };
AdminconditionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminconditionsComponent, selectors: [["app-adminconditions"]], decls: 39, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-6"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminconditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Stanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "conditionName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "getCondition(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "sendToEdit(condition)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "deleteCondition(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AdminconditionsComponent_tr_20_Template, 16, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Novo stanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminconditionsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newConditionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminconditionsComponent_Template_button_click_29_listener() { return ctx.addCondition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Dodaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminconditionsComponent_Template_input_ngModelChange_35_listener($event) { return ctx.editConditionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminconditionsComponent_Template_button_click_37_listener() { return ctx.editCondition({ _id: ctx.edit_id, conditionName: ctx.editConditionName }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Uredi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.conditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.newConditionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Uredi stanje: ", ctx.edit_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.editConditionName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "5b6r":
/*!************************************************************************!*\
  !*** ./src/app/advertisement-detail/advertisement-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: AdvertisementDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementDetailComponent", function() { return AdvertisementDetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/advertisement.model */ "PNYx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_advertisement_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/advertisement-detail.service */ "1tl6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "OOuX");







function AdvertisementDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Cijena: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Opis: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Stanje: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Lokacija: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.advertisement.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx_r0.advertisement.price, " HRK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.advertisement.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.advertisement.conditionNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.advertisement.placeNameFK);
} }
function AdvertisementDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "app-user-detail", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("_id", ctx_r1.advertisement.seller_idFK);
} }
class AdvertisementDetailComponent {
    constructor(route, advertisementDetailService) {
        this.route = route;
        this.advertisementDetailService = advertisementDetailService;
        this._id = null;
        this.advertisement = new _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__["Advertisement"];
        this.advertisementSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this._id = params['id'];
        });
        this.advertisementSubject = this.advertisementDetailService.getAdvertisement(this._id);
        this.advertisementSubscription = this.advertisementSubject
            .subscribe(res => {
            this.advertisement = res;
        });
    }
}
AdvertisementDetailComponent.??fac = function AdvertisementDetailComponent_Factory(t) { return new (t || AdvertisementDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_advertisement_detail_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementDetailService"])); };
AdvertisementDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AdvertisementDetailComponent, selectors: [["app-advertisement-detail"]], decls: 7, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-12"], [4, "ngIf"], [2, "font-weight", "lighter"], [2, "font-weight", "bold"], [3, "_id"]], template: function AdvertisementDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, AdvertisementDetailComponent_div_3_Template, 23, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, AdvertisementDetailComponent_div_6_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.advertisement);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.advertisement);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZlcnRpc2VtZW50LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiRoot: "http://localhost:8081/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, field, value) {
        if (!items || !value || !field) {
            return items;
        }
        return items.filter(item => item[field].toLowerCase().includes(value.toLowerCase()));
    }
}
FilterPipe.??fac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "C0XJ":
/*!************************************************************************************!*\
  !*** ./src/app/administration/admin-components/adminusers/adminusers.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusersComponent", function() { return AdminusersComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AdminusersComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminusersComponent_tr_34_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.getUser(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Ispi\u0161i korisnika");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminusersComponent_tr_34_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.deleteUser(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Izbri\u0161i korisnika");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.streetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.streetNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r1.placeNameFK);
} }
class AdminusersComponent {
    constructor(userService) {
        this.userService = userService;
        this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.usersSubject = this.userService.getUsers();
        this.subscription = this.usersSubject
            .subscribe(res => {
            this.users = res;
        });
    }
    getUser(i) {
        let u = this.users[i];
        console.log(this.userService.getUser(u._id));
    }
    deleteUser(i) {
        let u = this.users[i];
        this.userService.deleteUser(u._id);
    }
    ngOnDestory() {
        this.subscription.unsubscribe();
    }
}
AdminusersComponent.??fac = function AdminusersComponent_Factory(t) { return new (t || AdminusersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AdminusersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminusersComponent, selectors: [["app-adminusers"]], decls: 35, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminusersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Korisnici");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "dateOfBirth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "streetName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "streetNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "placeNameFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "getUser(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "deleteUser(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, AdminusersComponent_tr_34_Template, 29, 11, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JNpk":
/*!********************************************!*\
  !*** ./src/app/pipes/filter-price.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPricePipe", function() { return FilterPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPricePipe {
    transform(ulaz, field, prices) {
        let minimalPrice = prices[0];
        let maximalPrice = prices[1];
        let filtered = [];
        if (minimalPrice != undefined && maximalPrice != undefined) {
            filtered = ulaz.filter(a => a.price >= minimalPrice);
            filtered = filtered.filter(a => a.price <= maximalPrice);
        }
        else if (minimalPrice != undefined) {
            filtered = ulaz.filter(a => a.price >= minimalPrice);
        }
        else if (maximalPrice != undefined) {
            filtered = ulaz.filter(a => a.price <= maximalPrice);
        }
        else {
            return ulaz;
        }
        ;
        return filtered;
    }
}
FilterPricePipe.??fac = function FilterPricePipe_Factory(t) { return new (t || FilterPricePipe)(); };
FilterPricePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "filterPrice", type: FilterPricePipe, pure: true });


/***/ }),

/***/ "KJJU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "OOuX":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/user.model */ "KJJU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_user_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-detail.service */ "eHr0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Prodava\u010D: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Kontakt: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.user.email);
} }
class UserDetailComponent {
    constructor(userDetailService) {
        this.userDetailService = userDetailService;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.userSubject = this.userDetailService.getUser(this._id);
        this.userSubscription = this.userSubject
            .subscribe(res => {
            this.user = res;
        });
    }
}
UserDetailComponent.??fac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_user_detail_service__WEBPACK_IMPORTED_MODULE_3__["UserDetailService"])); };
UserDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], inputs: { _id: "_id" }, decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], [4, "ngIf"], [2, "font-weight", "lighter"], [2, "font-weight", "bold"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, UserDetailComponent_div_3_Template, 10, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "PNYx":
/*!******************************************************!*\
  !*** ./src/app/shared/models/advertisement.model.ts ***!
  \******************************************************/
/*! exports provided: Advertisement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advertisement", function() { return Advertisement; });
class Advertisement {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/authentication.service */ "TTF2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(authenticationService, title) {
        this.authenticationService = authenticationService;
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle("PRODAJ BRZO");
        this.authenticationService.getUser();
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TTF2":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthenticationService {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.authenticationChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.authenticationErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    loginUser(username, password) {
        this.dataService
            .authenticateUser(username, password)
            .subscribe((res) => {
            if (res.status == 200) {
                this.user = res.user;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.authenticationChangeSubject.next(true);
                this.router.navigate(['/']);
            }
            else {
                this.authenticationErrorSubject.next(res.description);
            }
        });
    }
    logoutUser() {
        this.user = null;
        localStorage.removeItem('user');
        this.authenticationChangeSubject.next(false);
        this.router.navigate(['']);
    }
    getUser() {
        if (this.user) {
            return this.user;
        }
        else {
            this.user = JSON.parse(localStorage.getItem('user'));
            return this.user;
        }
    }
    checkIfAuthenticated() {
        if (this.user) {
            return true;
        }
        else {
            return false;
        }
    }
    checkIfAdmin() {
        if (this.checkIfAuthenticated()) {
            if (this.user.admin) {
                return true;
            }
            else if (this.user.admin) {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
AuthenticationService.??fac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.??fac, providedIn: 'root' });


/***/ }),

/***/ "XUH1":
/*!******************************************************************!*\
  !*** ./src/app/new-advertisement/new-advertisement.component.ts ***!
  \******************************************************************/
/*! exports provided: NewAdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdvertisementComponent", function() { return NewAdvertisementComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/advertisement.model */ "PNYx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/advertisement.service */ "q/cA");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/category.service */ "fH6q");
/* harmony import */ var _shared_services_condition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/condition.service */ "daTr");
/* harmony import */ var _shared_services_place_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/place.service */ "nnIM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function NewAdvertisementComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const condition_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](condition_r3.conditionName);
} }
function NewAdvertisementComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](category_r4.categoryName);
} }
function NewAdvertisementComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const place_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](place_r5.placeName);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class NewAdvertisementComponent {
    constructor(authenticationService, authorizationGuardService, advertisementService, categoriesService, conditionsService, placesService, formBuilder, router) {
        this.authenticationService = authenticationService;
        this.authorizationGuardService = authorizationGuardService;
        this.advertisementService = advertisementService;
        this.categoriesService = categoriesService;
        this.conditionsService = conditionsService;
        this.placesService = placesService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.authenticationService.getUser();
        this.authorizationGuardService.canAcess();
        this.categoriesSubject = this.categoriesService.getCategories();
        this.categoriesSubscription = this.categoriesSubject
            .subscribe(res => {
            this.categories = res;
        });
        this.conditionsSubject = this.conditionsService.getConditions();
        this.conditionsSubscription = this.conditionsSubject
            .subscribe(res => {
            this.conditions = res;
        });
        this.placesSubject = this.placesService.getPlaces();
        this.placesSubscription = this.placesSubject
            .subscribe(res => {
            this.places = res;
        });
        this.newAdvertisementForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(255)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            conditionFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            placeNameFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            categoryNameFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    get name() { return this.newAdvertisementForm.get("name"); }
    get description() { return this.newAdvertisementForm.get("description"); }
    get price() { return this.newAdvertisementForm.get("price"); }
    get conditionFK() { return this.newAdvertisementForm.get("conditionFK"); }
    get placeNameFK() { return this.newAdvertisementForm.get("placeNameFK"); }
    get categoryNameFK() { return this.newAdvertisementForm.get("categoryNameFK"); }
    get f() {
        return this.newAdvertisementForm.controls;
    }
    onSubmit() {
        this.newAdvertisement = new _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__["Advertisement"]();
        this.newAdvertisement.name = this.newAdvertisementForm.value.name;
        this.newAdvertisement.description = this.newAdvertisementForm.value.description;
        this.newAdvertisement.price = this.newAdvertisementForm.value.price;
        this.newAdvertisement.conditionNameFK = this.newAdvertisementForm.value.conditionFK;
        this.newAdvertisement.placeNameFK = this.newAdvertisementForm.value.placeNameFK;
        this.newAdvertisement.categoryNameFK = this.newAdvertisementForm.value.categoryNameFK;
        this.newAdvertisement.sellerUsernameFK = this.user.username;
        this.newAdvertisement.seller_idFK = this.user._id;
        this.advertisementService.addAdvertisement(this.newAdvertisement);
        console.log(this.newAdvertisement);
        this.router.navigate(["/"]);
    }
}
NewAdvertisementComponent.??fac = function NewAdvertisementComponent_Factory(t) { return new (t || NewAdvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_condition_service__WEBPACK_IMPORTED_MODULE_7__["ConditionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
NewAdvertisementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: NewAdvertisementComponent, selectors: [["app-new-advertisement"]], decls: 70, vars: 30, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [3, "formGroup", "submit"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "description"], ["name", "description", "id", "description", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-12", "col-lg-6"], ["type", "number", "name", "price", "id", "price", "min", "0", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "conditionFK"], ["name", "conditionFK", "id", "conditionFK", "formControlName", "conditionFK", 1, "form-control", 3, "ngClass"], ["selected", ""], [4, "ngFor", "ngForOf"], ["for", "categoryNameFK"], ["name", "categoryNameFK", "id", "categoryNameFK", "formControlName", "categoryNameFK", 1, "form-control", 3, "ngClass"], ["for", "placeNameFK"], ["name", "placeNameFK", "id", "placeNameFK", "formControlName", "placeNameFK", 1, "form-control", 3, "ngClass"], ["type", "text", "readonly", "", 1, "form-control", 3, "placeholder"], [1, "col", "text-center"], ["type", "submit", "value", "Objavi oglas", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/", "routerLinkActive", "active"], [1, "col-lg-4"]], template: function NewAdvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Novi oglas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("submit", function NewAdvertisementComponent_Template_form_submit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Ime oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Molimo upi\u0161ite ime oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Opis oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Molimo upi\u0161ite opis oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Cijena oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Molimo upi\u0161ite cijenu oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Odabir stanja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Odabir stanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, NewAdvertisementComponent_option_33_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "Molimo Vas odaberite stanje proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "Odabir kategorije:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Odabir kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](43, NewAdvertisementComponent_option_43_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "Molimo Vas odaberite kategoriju proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Lokacija proizvoda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Odabir mjesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](52, NewAdvertisementComponent_option_52_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, "Molimo Vas odaberite lokaciju proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "Korisni\u010Dko ime prodava\u010Da:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Odustani");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.newAdvertisementForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](12, _c0, (ctx.name.dirty || ctx.name.touched) && ctx.name.invalid, (ctx.name.dirty || ctx.name.touched) && ctx.name.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](15, _c0, (ctx.description.dirty || ctx.description.touched) && ctx.description.invalid, (ctx.description.dirty || ctx.description.touched) && ctx.description.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](18, _c0, (ctx.price.dirty || ctx.price.touched) && ctx.price.invalid, (ctx.price.dirty || ctx.price.touched) && ctx.price.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](21, _c0, (ctx.conditionFK.dirty || ctx.conditionFK.touched) && (ctx.conditionFK.invalid || ctx.conditionFK.value == "Odabir stanja"), (ctx.conditionFK.dirty || ctx.conditionFK.touched) && ctx.conditionFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.conditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](24, _c0, (ctx.categoryNameFK.dirty || ctx.categoryNameFK.touched) && (ctx.categoryNameFK.invalid || ctx.categoryNameFK.value == "Odabir kategorije"), (ctx.categoryNameFK.dirty || ctx.categoryNameFK.touched) && ctx.categoryNameFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](27, _c0, (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && (ctx.placeNameFK.invalid || ctx.placeNameFK.value == "Odabir mjesta"), (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && ctx.placeNameFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.places);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.newAdvertisementForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Z3lc":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/authorization-guard.service.ts ***!
  \****************************************************************/
/*! exports provided: AuthorizationGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuardService", function() { return AuthorizationGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "TTF2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthorizationGuardService {
    constructor(authenticationServicervice, router) {
        this.authenticationServicervice = authenticationServicervice;
        this.router = router;
    }
    canAcess() {
        if (!this.authenticationServicervice.checkIfAuthenticated()) {
            this.router.navigate(['/']);
        }
        else {
            return true;
        }
    }
    canAccessAdmin() {
        if (!this.authenticationServicervice.checkIfAdmin()) {
            this.router.navigate(['/']);
        }
        else {
            return true;
        }
    }
    canNotAcessWhileLogged() {
        if (this.authenticationServicervice.checkIfAuthenticated()) {
            this.router.navigate(['/']);
        }
        else {
            return true;
        }
    }
}
AuthorizationGuardService.??fac = function AuthorizationGuardService_Factory(t) { return new (t || AuthorizationGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthorizationGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthorizationGuardService, factory: AuthorizationGuardService.??fac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _new_advertisement_new_advertisement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-advertisement/new-advertisement.component */ "XUH1");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/filter-price.pipe */ "JNpk");
/* harmony import */ var _advertisement_detail_advertisement_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advertisement-detail/advertisement-detail.component */ "5b6r");
/* harmony import */ var _administration_admin_components_admincategories_admincategories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./administration/admin-components/admincategories/admincategories.component */ "dwe5");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./administration/administration.component */ "1JYN");
/* harmony import */ var _administration_admin_components_adminconditions_adminconditions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./administration/admin-components/adminconditions/adminconditions.component */ "22Xx");
/* harmony import */ var _administration_admin_components_adminplaces_adminplaces_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./administration/admin-components/adminplaces/adminplaces.component */ "aDY+");
/* harmony import */ var _administration_admin_components_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./administration/admin-components/adminadvertisements/adminadvertisements.component */ "mfnd");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "OOuX");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "kMBp");
/* harmony import */ var _my_advertisements_my_advertisements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-advertisements/my-advertisements.component */ "yQPF");
/* harmony import */ var _administration_admin_components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./administration/admin-components/adminusers/adminusers.component */ "C0XJ");
/* harmony import */ var _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./advertisement-edit/advertisement-edit.component */ "xfDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
        _new_advertisement_new_advertisement_component__WEBPACK_IMPORTED_MODULE_9__["NewAdvertisementComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
        _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPricePipe"],
        _advertisement_detail_advertisement_detail_component__WEBPACK_IMPORTED_MODULE_12__["AdvertisementDetailComponent"],
        _administration_admin_components_admincategories_admincategories_component__WEBPACK_IMPORTED_MODULE_13__["AdmincategoriesComponent"],
        _administration_administration_component__WEBPACK_IMPORTED_MODULE_14__["AdministrationComponent"],
        _administration_admin_components_adminconditions_adminconditions_component__WEBPACK_IMPORTED_MODULE_15__["AdminconditionsComponent"],
        _administration_admin_components_adminplaces_adminplaces_component__WEBPACK_IMPORTED_MODULE_16__["AdminplacesComponent"],
        _administration_admin_components_adminadvertisements_adminadvertisements_component__WEBPACK_IMPORTED_MODULE_17__["AdminadvertisementsComponent"],
        _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_19__["MyProfileComponent"],
        _my_advertisements_my_advertisements_component__WEBPACK_IMPORTED_MODULE_20__["MyAdvertisementsComponent"],
        _administration_admin_components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_21__["AdminusersComponent"],
        _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_22__["AdvertisementEditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "aDY+":
/*!**************************************************************************************!*\
  !*** ./src/app/administration/admin-components/adminplaces/adminplaces.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminplacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminplacesComponent", function() { return AdminplacesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/place.service */ "nnIM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AdminplacesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminplacesComponent_tr_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.getPlace(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Ispi\u0161i mjesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminplacesComponent_tr_20_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const place_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.sendToEdit(place_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Uredi mjesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminplacesComponent_tr_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.deletePlace(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Obri\u0161i mjesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const place_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](place_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](place_r1.placeName);
} }
class AdminplacesComponent {
    constructor(placeService) {
        this.placeService = placeService;
        this.placesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.placesSubject = this.placeService.getPlaces();
        this.subscription = this.placesSubject
            .subscribe(res => {
            this.places = res;
        });
    }
    addPlace() {
        this.placeService.addPlace({ placeName: this.newPlaceName });
        this.newPlaceName = "";
    }
    sendToEdit(place) {
        this.edit_id = place._id;
        this.editPlaceName = place.placeName;
    }
    editPlace(place) {
        this.placeService.editPlace(place);
    }
    getPlace(i) {
        let p = this.places[i];
        console.log(this.placeService.getPlace(p._id));
    }
    deletePlace(i) {
        let p = this.places[i];
        this.placeService.deletePlace(p._id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AdminplacesComponent.??fac = function AdminplacesComponent_Factory(t) { return new (t || AdminplacesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"])); };
AdminplacesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminplacesComponent, selectors: [["app-adminplaces"]], decls: 39, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-6"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminplacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Mjesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "placeName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "getPlace(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "sendToEdit(place)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "deletePlace(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AdminplacesComponent_tr_20_Template, 16, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Novo mjesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminplacesComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newPlaceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminplacesComponent_Template_button_click_29_listener() { return ctx.addPlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Dodaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdminplacesComponent_Template_input_ngModelChange_35_listener($event) { return ctx.editPlaceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminplacesComponent_Template_button_click_37_listener() { return ctx.editPlace({ _id: ctx.edit_id, placeName: ctx.editPlaceName }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Uredi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.places);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.newPlaceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Uredi mjesto: ", ctx.edit_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.editPlaceName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnBsYWNlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "daTr":
/*!******************************************************!*\
  !*** ./src/app/shared/services/condition.service.ts ***!
  \******************************************************/
/*! exports provided: ConditionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionService", function() { return ConditionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");



class ConditionService {
    constructor(dataService) {
        this.dataService = dataService;
        this.conditions = null;
        this.conditionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ngOnInit();
    }
    ngOnInit() {
        this.dataService.getConditions()
            .subscribe((res) => {
            console.log(res);
            this.conditions = res.conditions;
            this.conditionsSubject.next(this.conditions);
        });
    }
    getConditions() {
        return this.conditionsSubject;
    }
    addCondition(newCondition) {
        this.dataService.addCondition(newCondition)
            .subscribe((res) => {
            console.log(res);
            newCondition._id = res.insertedId;
            this.conditions.push(newCondition);
            this.conditionsSubject.next(this.conditions);
        });
    }
    editCondition(editedCondition) {
        this.dataService.editCondition(editedCondition)
            .subscribe(((res) => {
            console.log(res);
            this.conditions[this.conditions.findIndex(c => c._id == editedCondition._id)] = editedCondition;
        }), error => {
            console.log(error);
        });
    }
    getCondition(_id) {
        return this.conditions.find(c => c._id == _id);
    }
    deleteCondition(_id) {
        this.dataService.deleteCondition(_id)
            .subscribe((res) => {
            console.log(res);
            this.conditions = this.conditions.filter(c => c._id != _id);
            this.conditionsSubject.next(this.conditions);
        });
    }
}
ConditionService.??fac = function ConditionService_Factory(t) { return new (t || ConditionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ConditionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ConditionService, factory: ConditionService.??fac, providedIn: 'root' });


/***/ }),

/***/ "dwe5":
/*!**********************************************************************************************!*\
  !*** ./src/app/administration/admin-components/admincategories/admincategories.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdmincategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincategoriesComponent", function() { return AdmincategoriesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/category.service */ "fH6q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AdmincategoriesComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdmincategoriesComponent_tr_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.getCategory(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Ispi\u0161i kategoriju");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdmincategoriesComponent_tr_20_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const category_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.sendToEdit(category_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Uredi kategoriju");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdmincategoriesComponent_tr_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.deleteCategory(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Izbri\u0161i kategoriju");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](category_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](category_r1.categoryName);
} }
class AdmincategoriesComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.categoriesSubject = this.categoryService.getCategories();
        this.subscription = this.categoriesSubject
            .subscribe(res => {
            this.categories = res;
        });
    }
    addCategory() {
        this.categoryService.addCategory({ categoryName: this.newCategoryName });
        this.newCategoryName = "";
    }
    sendToEdit(category) {
        this.edit_id = category._id;
        this.editCategoryName = category.categoryName;
    }
    editCategory(category) {
        this.categoryService.editCategory(category);
    }
    getCategory(i) {
        let c = this.categories[i];
        console.log(this.categoryService.getCategory(c._id));
    }
    deleteCategory(i) {
        let c = this.categories[i];
        this.categoryService.deleteCategory(c._id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AdmincategoriesComponent.??fac = function AdmincategoriesComponent_Factory(t) { return new (t || AdmincategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
AdmincategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdmincategoriesComponent, selectors: [["app-admincategories"]], decls: 39, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-6"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AdmincategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "categoryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "getCategory(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "sendToEdit(category)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "deleteCategory(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, AdmincategoriesComponent_tr_20_Template, 16, 3, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Nova kategorija");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdmincategoriesComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newCategoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdmincategoriesComponent_Template_button_click_29_listener() { return ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Dodaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AdmincategoriesComponent_Template_input_ngModelChange_35_listener($event) { return ctx.editCategoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdmincategoriesComponent_Template_button_click_37_listener() { return ctx.editCategory({ _id: ctx.edit_id, categoryName: ctx.editCategoryName }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Uredi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.newCategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Uredi kategoriju: ", ctx.edit_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.editCategoryName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "eHr0":
/*!********************************************************!*\
  !*** ./src/app/shared/services/user-detail.service.ts ***!
  \********************************************************/
/*! exports provided: UserDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailService", function() { return UserDetailService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "KJJU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "iiaH");




class UserDetailService {
    constructor(dataService) {
        this.dataService = dataService;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    getUser(_id) {
        this.dataService.getUser(_id)
            .subscribe((res) => {
            console.log(res);
            this.user = res.user;
            this.userSubject.next(this.user);
        });
        return this.userSubject;
    }
}
UserDetailService.??fac = function UserDetailService_Factory(t) { return new (t || UserDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
UserDetailService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: UserDetailService, factory: UserDetailService.??fac, providedIn: 'root' });


/***/ }),

/***/ "fH6q":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");



class CategoryService {
    constructor(dataService) {
        this.dataService = dataService;
        this.categories = null;
        this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ngOnInit();
    }
    ngOnInit() {
        this.dataService.getCategories()
            .subscribe((res) => {
            console.log(res);
            this.categories = res.categories;
            this.categoriesSubject.next(this.categories);
        });
    }
    getCategories() {
        return this.categoriesSubject;
    }
    addCategory(newCategory) {
        this.dataService.addCategory(newCategory)
            .subscribe((res) => {
            console.log(res);
            newCategory._id = res.insertedId;
            this.categories.push(newCategory);
            this.categoriesSubject.next(this.categories);
        });
    }
    editCategory(editedCategory) {
        this.dataService.editCategory(editedCategory)
            .subscribe(((res) => {
            console.log(res);
            this.categories[this.categories.findIndex(c => c._id == editedCategory._id)] = editedCategory;
        }), error => {
            console.log(error);
        });
    }
    getCategory(_id) {
        /*this.dataService.getCategory(_id)
            .subscribe((res: {status : number, description? : string, category : Category}) => {
                console.log(res.category);
            });*/
        return this.categories.find(c => c._id == _id);
    }
    deleteCategory(_id) {
        this.dataService.deleteCategory(_id)
            .subscribe((res) => {
            console.log(res);
            this.categories = this.categories.filter(c => c._id != _id);
            this.categoriesSubject.next(this.categories);
        });
    }
}
CategoryService.??fac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
CategoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CategoryService, factory: CategoryService.??fac, providedIn: 'root' });


/***/ }),

/***/ "iiaH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this.apiRoot = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiRoot;
        this.authenticationRoot = '/authentication';
        this.advertisementsRoot = '/advertisements';
        this.categoriesRoot = '/categories';
        this.conditionsRoot = '/conditions';
        this.placesRoot = '/places';
        this.usersRoot = '/users';
    }
    authenticateUser(username, password) {
        return this.http.post(this.apiRoot + this.authenticationRoot, {
            username: username,
            password: password,
        });
    }
    getAdvertisements() { return this.http.get(this.apiRoot + this.advertisementsRoot); }
    addAdvertisement(advertisement) { return this.http.post(this.apiRoot + this.advertisementsRoot, advertisement); }
    editAdvertisement(advertisement) { return this.http.put(this.apiRoot + this.advertisementsRoot, advertisement); }
    getAdvertisement(id) { return this.http.get(this.apiRoot + this.advertisementsRoot + `/${id}`); }
    deleteAdvertisement(id) { return this.http.delete(this.apiRoot + this.advertisementsRoot + `/${id}`); }
    getCategories() { return this.http.get(this.apiRoot + this.categoriesRoot); }
    addCategory(category) { return this.http.post(this.apiRoot + this.categoriesRoot, category); }
    editCategory(category) { return this.http.put(this.apiRoot + this.categoriesRoot, category); }
    getCategory(id) { return this.http.get(this.apiRoot + this.categoriesRoot + `/${id}`); }
    deleteCategory(id) { return this.http.delete(this.apiRoot + this.categoriesRoot + `/${id}`); }
    getConditions() { return this.http.get(this.apiRoot + this.conditionsRoot); }
    addCondition(condition) { return this.http.post(this.apiRoot + this.conditionsRoot, condition); }
    editCondition(condition) { return this.http.put(this.apiRoot + this.conditionsRoot, condition); }
    getCondition(id) { return this.http.get(this.apiRoot + this.conditionsRoot + `/${id}`); }
    deleteCondition(id) { return this.http.delete(this.apiRoot + this.conditionsRoot + `/${id}`); }
    getPlaces() { return this.http.get(this.apiRoot + this.placesRoot); }
    addPlace(place) { return this.http.post(this.apiRoot + this.placesRoot, place); }
    editPlace(place) { return this.http.put(this.apiRoot + this.placesRoot, place); }
    getPlace(id) { return this.http.get(this.apiRoot + this.placesRoot + `/${id}`); }
    deletePlace(id) { return this.http.delete(this.apiRoot + this.placesRoot + `/${id}`); }
    getUsers() { return this.http.get(this.apiRoot + this.usersRoot); }
    addUser(user) { return this.http.post(this.apiRoot + this.usersRoot, user); }
    editUser(user) { return this.http.put(this.apiRoot + this.usersRoot, user); }
    getUser(id) { return this.http.get(this.apiRoot + this.usersRoot + `/${id}`); }
    deleteUser(id) { return this.http.delete(this.apiRoot + this.usersRoot + `/${id}`); }
}
DataService.??fac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: DataService, factory: DataService.??fac, providedIn: 'root' });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavigationComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Administracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Novi oglas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Moji oglasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Moji profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavigationComponent_div_6_div_1_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Odjava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Novi oglas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Moji oglasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Moji profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavigationComponent_div_6_ng_template_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Odjava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NavigationComponent_div_6_div_1_Template, 16, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NavigationComponent_div_6_ng_template_2_Template, 12, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userIsAdmin)("ngIfElse", _r4);
} }
function NavigationComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Registracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class NavigationComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.userIsLogged = false;
        this.userIsAdmin = false;
    }
    ngOnInit() {
        this.userIsLogged = this.authenticationService.checkIfAuthenticated();
        this.userIsAdmin = this.authenticationService.checkIfAdmin();
        this.authenticationChangeSubscription = this.authenticationService.authenticationChangeSubject
            .subscribe((res) => {
            console.log(res);
            this.userIsLogged = res;
            this.userIsAdmin = this.authenticationService.checkIfAdmin();
            /*if (this.isUserAuthenticated) {
                this.user = this.authService.getUser();
            }*/
        });
    }
    logout() {
        this.authenticationService.logoutUser();
    }
    ngOnDestroy() {
        this.authenticationChangeSubscription.unsubscribe();
    }
}
NavigationComponent.??fac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
NavigationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 9, vars: 2, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-danger"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand"], ["src", "assets/img/logo.png", "height", "30", "alt", "", 1, "d-inline-block", "align-top"], [1, "navbar-nav", "ml-auto", 2, "float", "right"], [4, "ngIf", "ngIfElse"], ["userIsNotLogged", ""], ["userIsNotAdmin", ""], [1, "nav-item", 2, "float", "left"], ["routerLink", "/administracija", "routerLinkActive", "active", 1, "nav-link", "text-light"], [1, "nav-item", 2, "float", "left", "border-left", "1px solid rgb(255,255,255)"], ["routerLink", "/novioglas", "routerLinkActive", "active", 1, "nav-link", "text-light"], ["routerLink", "/mojioglasi", "routerLinkActive", "active", 1, "nav-link", "text-light"], ["routerLink", "/mojiprofil", "routerLinkActive", "active", 1, "nav-link", "text-light"], [1, "nav-link", "text-light", 3, "click"], ["routerLink", "/prijava", "routerLinkActive", "active", 1, "nav-link", "text-light"], ["routerLink", "/registracija", "routerLinkActive", "active", 1, "nav-link", "text-light"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, NavigationComponent_div_6_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, NavigationComponent_ng_template_7_Template, 6, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userIsLogged)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kMBp":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MyProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Korisni\u010Dko ime: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Admin: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Ime: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Prezime: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Datum ro\u0111enja: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Adresa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", ctx_r0.user.streetName, " ", ctx_r0.user.streetNumber, ", ", ctx_r0.user.placeNameFK, "");
} }
class MyProfileComponent {
    constructor(authorizationGuardService, authenticationService) {
        this.authorizationGuardService = authorizationGuardService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.authorizationGuardService.canAccessAdmin();
        this.user = this.authenticationService.getUser();
    }
}
MyProfileComponent.??fac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
MyProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], [4, "ngIf"], [2, "font-weight", "lighter"], [2, "font-weight", "bold"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MyProfileComponent_div_3_Template, 35, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");



class UserService {
    constructor(dataService) {
        this.dataService = dataService;
        this.users = null;
        this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ngOnInit();
    }
    ngOnInit() {
        this.dataService.getUsers()
            .subscribe((res) => {
            console.log(res);
            this.users = res.users;
            this.usersSubject.next(this.users);
        });
    }
    getUsers() {
        return this.usersSubject;
    }
    addUser(newUser) {
        this.dataService.addUser(newUser)
            .subscribe((res) => {
            console.log(res);
            newUser._id = res.insertedId;
            this.users.push(newUser);
            this.usersSubject.next(this.users);
        });
    }
    editUser(editedUser) {
        this.dataService.editUser(editedUser)
            .subscribe(((res) => {
            console.log(res);
            this.users[this.users.findIndex(u => u._id == editedUser._id)] = editedUser;
        }), error => {
            console.log(error);
        });
    }
    getUser(_id) {
        return this.users.find(u => u._id == _id);
    }
    deleteUser(_id) {
        this.dataService.deleteUser(_id)
            .subscribe((res) => {
            console.log(res);
            this.users = this.users.filter(u => u._id != _id);
            this.usersSubject.next(this.users);
        });
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


/***/ }),

/***/ "mfnd":
/*!******************************************************************************************************!*\
  !*** ./src/app/administration/admin-components/adminadvertisements/adminadvertisements.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdminadvertisementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminadvertisementsComponent", function() { return AdminadvertisementsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/advertisement.service */ "q/cA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["../oglas/", a1]; };
function AdminadvertisementsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminadvertisementsComponent_tr_32_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.getAdvertisement(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Ispi\u0161i oglas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AdminadvertisementsComponent_tr_32_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.deleteAdvertisement(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Izbri\u0161i oglas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const advertisement_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](11, _c0, advertisement_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.conditionNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.categoryNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.placeNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.sellerUsernameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r1.seller_idFK);
} }
class AdminadvertisementsComponent {
    constructor(advertisementService) {
        this.advertisementService = advertisementService;
        this.advertisementsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.advertisementsSubject = this.advertisementService.getAdvertisements();
        this.subscription = this.advertisementsSubject
            .subscribe(res => {
            this.advertisements = res;
        });
    }
    getAdvertisement(i) {
        let a = this.advertisements[i];
        console.log(this.advertisementService.getAdvertisement(a._id));
    }
    deleteAdvertisement(i) {
        let a = this.advertisements[i];
        this.advertisementService.deleteAdvertisement(a._id);
    }
    ngOnDestory() {
        this.subscription.unsubscribe();
    }
}
AdminadvertisementsComponent.??fac = function AdminadvertisementsComponent_Factory(t) { return new (t || AdminadvertisementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"])); };
AdminadvertisementsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AdminadvertisementsComponent, selectors: [["app-adminadvertisements"]], decls: 33, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminadvertisementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Oglasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "conditionNameFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "categoryNameFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "placeNameFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "sellerUsernameFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "seller_idFK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "getAdvertisement(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "deleteAdvertisement(i)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, AdminadvertisementsComponent_tr_32_Template, 28, 13, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.advertisements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmFkdmVydGlzZW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "nnIM":
/*!**************************************************!*\
  !*** ./src/app/shared/services/place.service.ts ***!
  \**************************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");



class PlaceService {
    constructor(dataService) {
        this.dataService = dataService;
        this.places = null;
        this.placesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ngOnInit();
    }
    ngOnInit() {
        this.dataService.getPlaces()
            .subscribe((res) => {
            console.log(res);
            this.places = res.places;
            this.placesSubject.next(this.places);
        });
    }
    getPlaces() {
        return this.placesSubject;
    }
    addPlace(newPlace) {
        this.dataService.addPlace(newPlace)
            .subscribe((res) => {
            console.log(res);
            newPlace._id = res.insertedId;
            this.places.push(newPlace);
            this.placesSubject.next(this.places);
        });
    }
    editPlace(editedPlace) {
        this.dataService.editPlace(editedPlace)
            .subscribe(((res) => {
            console.log(res);
            this.places[this.places.findIndex(c => c._id == editedPlace._id)] = editedPlace;
        }), error => {
            console.log(error);
        });
    }
    getPlace(_id) {
        return this.places.find(p => p._id == _id);
    }
    deletePlace(_id) {
        this.dataService.deletePlace(_id)
            .subscribe((res) => {
            console.log(res);
            this.places = this.places.filter(c => c._id != _id);
            this.placesSubject.next(this.places);
        });
    }
}
PlaceService.??fac = function PlaceService_Factory(t) { return new (t || PlaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PlaceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: PlaceService, factory: PlaceService.??fac, providedIn: 'root' });


/***/ }),

/***/ "q/cA":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/advertisement.service.ts ***!
  \**********************************************************/
/*! exports provided: AdvertisementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementService", function() { return AdvertisementService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "iiaH");



class AdvertisementService {
    constructor(dataService) {
        this.dataService = dataService;
        this.advertisements = null;
        this.advertisementsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ngOnInit();
    }
    ngOnInit() {
        this.dataService.getAdvertisements()
            .subscribe((res) => {
            console.log(res);
            this.advertisements = res.advertisements;
            this.advertisementsSubject.next(this.advertisements);
        });
    }
    getAdvertisements() {
        return this.advertisementsSubject;
    }
    addAdvertisement(newAdvertisement) {
        this.dataService.addAdvertisement(newAdvertisement)
            .subscribe((res) => {
            console.log(res);
            newAdvertisement._id = res.insertedId;
            this.advertisements.push(newAdvertisement);
            this.advertisementsSubject.next(this.advertisements);
        });
    }
    editAdvertisement(editedAdvertisement) {
        this.dataService.editAdvertisement(editedAdvertisement)
            .subscribe(((res) => {
            console.log(res);
            this.advertisements[this.advertisements.findIndex(a => a._id == editedAdvertisement._id)] = editedAdvertisement;
        }), error => {
            console.log(error);
        });
    }
    getAdvertisement(_id) {
        return this.advertisements.find(a => a._id == _id);
    }
    deleteAdvertisement(_id) {
        this.dataService.deleteAdvertisement(_id)
            .subscribe((res) => {
            console.log(res);
            this.advertisements = this.advertisements.filter(a => a._id != _id);
            this.advertisementsSubject.next(this.advertisements);
        });
    }
}
AdvertisementService.??fac = function AdvertisementService_Factory(t) { return new (t || AdvertisementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AdvertisementService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AdvertisementService, factory: AdvertisementService.??fac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _advertisement_detail_advertisement_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertisement-detail/advertisement-detail.component */ "5b6r");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _new_advertisement_new_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-advertisement/new-advertisement.component */ "XUH1");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administration/administration.component */ "1JYN");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "OOuX");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "kMBp");
/* harmony import */ var _my_advertisements_my_advertisements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-advertisements/my-advertisements.component */ "yQPF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: "", component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: "prijava", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "registracija", component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "novioglas", component: _new_advertisement_new_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["NewAdvertisementComponent"] },
    { path: "mojioglasi", component: _my_advertisements_my_advertisements_component__WEBPACK_IMPORTED_MODULE_9__["MyAdvertisementsComponent"] },
    { path: "mojiprofil", component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__["MyProfileComponent"] },
    { path: "oglas/:id", component: _advertisement_detail_advertisement_detail_component__WEBPACK_IMPORTED_MODULE_1__["AdvertisementDetailComponent"] },
    { path: "korisnik/:id", component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailComponent"] },
    { path: "administracija", component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_6__["AdministrationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.errorMessage);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class LoginComponent {
    constructor(authorizationGuardService, formBuilder, authenticationService) {
        this.authorizationGuardService = authorizationGuardService;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.errorMessage = null;
    }
    ngOnInit() {
        this.authorizationGuardService.canNotAcessWhileLogged();
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.authenticationService.authenticationErrorSubject
            .subscribe((error) => {
            this.errorMessage = error;
            console.log(this.errorMessage);
        });
    }
    get username() { return this.registerForm.get("username"); }
    get password() { return this.registerForm.get("password"); }
    onSubmit() {
        this.authenticationService.loginUser(this.registerForm.value.username, this.registerForm.value.password);
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 11, consts: [[1, "container"], [1, "row", 2, "height", "75vh"], [1, "d-none", "d-lg-block", "col-lg-1"], [1, "col-12", "col-lg-4", "align-self-center"], [1, "text-center"], ["routerLink", "/registracija", "routerLinkActive", "active"], [2, "text-align", "center"], [3, "formGroup", "submit"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "col", "text-center"], ["type", "submit", "value", "Prijavi me", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "d-none", "d-lg-block", "col-lg-5", "align-self-center"], ["src", "assets/img/login.webp", "alt", "", 2, "width", "100%"], [2, "text-align", "center", "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Prijava");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Nemate korisni\u010Dki profil? Idite na registraciju");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("submit", function LoginComponent_Template_form_submit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Korisni\u010Dko ime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Molimo Vas upi\u0161ite Va\u0161e korisni\u010Dko ime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Lozinka:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Molimo Vas upi\u0161ite Va\u0161u \u0161ifru");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, LoginComponent_div_27_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](5, _c0, (ctx.username.dirty || ctx.username.touched) && ctx.username.invalid, (ctx.username.dirty || ctx.username.touched) && ctx.username.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](8, _c0, (ctx.password.dirty || ctx.password.touched) && ctx.password.invalid, (ctx.password.dirty || ctx.password.touched) && ctx.password.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "xfDm":
/*!********************************************************************!*\
  !*** ./src/app/advertisement-edit/advertisement-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: AdvertisementEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementEditComponent", function() { return AdvertisementEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/advertisement.model */ "PNYx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/advertisement.service */ "q/cA");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/category.service */ "fH6q");
/* harmony import */ var _shared_services_condition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/condition.service */ "daTr");
/* harmony import */ var _shared_services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/place.service */ "nnIM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function AdvertisementEditComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const condition_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](condition_r3.conditionName);
} }
function AdvertisementEditComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](category_r4.categoryName);
} }
function AdvertisementEditComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const place_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](place_r5.placeName);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class AdvertisementEditComponent {
    constructor(advertisementService, categoriesService, conditionsService, placesService, formBuilder, router) {
        this.advertisementService = advertisementService;
        this.categoriesService = categoriesService;
        this.conditionsService = conditionsService;
        this.placesService = placesService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.editedAdvertisement = new _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__["Advertisement"]();
    }
    ngOnInit() {
        this.categoriesSubject = this.categoriesService.getCategories();
        this.categoriesSubscription = this.categoriesSubject
            .subscribe(res => {
            this.categories = res;
        });
        this.conditionsSubject = this.conditionsService.getConditions();
        this.conditionsSubscription = this.conditionsSubject
            .subscribe(res => {
            this.conditions = res;
        });
        this.placesSubject = this.placesService.getPlaces();
        this.placesSubscription = this.placesSubject
            .subscribe(res => {
            this.places = res;
        });
        this.newAdvertisementForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(255)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.description, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.price, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            conditionFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.conditionNameFK, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            placeNameFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.placeNameFK, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            categoryNameFK: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.advertisement.conditionNameFK, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    get name() { return this.newAdvertisementForm.get("name"); }
    get description() { return this.newAdvertisementForm.get("description"); }
    get price() { return this.newAdvertisementForm.get("price"); }
    get conditionFK() { return this.newAdvertisementForm.get("conditionFK"); }
    get placeNameFK() { return this.newAdvertisementForm.get("placeNameFK"); }
    get categoryNameFK() { return this.newAdvertisementForm.get("categoryNameFK"); }
    get f() {
        return this.newAdvertisementForm.controls;
    }
    onSubmit() {
        this.editedAdvertisement = new _shared_models_advertisement_model__WEBPACK_IMPORTED_MODULE_1__["Advertisement"]();
        this.editedAdvertisement._id = this.advertisement._id;
        this.editedAdvertisement.name = this.newAdvertisementForm.value.name;
        this.editedAdvertisement.description = this.newAdvertisementForm.value.description;
        this.editedAdvertisement.price = this.newAdvertisementForm.value.price;
        this.editedAdvertisement.conditionNameFK = this.newAdvertisementForm.value.conditionFK;
        this.editedAdvertisement.placeNameFK = this.newAdvertisementForm.value.placeNameFK;
        this.editedAdvertisement.categoryNameFK = this.newAdvertisementForm.value.categoryNameFK;
        this.editedAdvertisement.sellerUsernameFK = this.advertisement.sellerUsernameFK;
        this.editedAdvertisement.seller_idFK = this.advertisement.seller_idFK;
        this.advertisementService.editAdvertisement(this.editedAdvertisement);
        console.log(this.editedAdvertisement);
        this.router.navigate(["/"]);
    }
}
AdvertisementEditComponent.??fac = function AdvertisementEditComponent_Factory(t) { return new (t || AdvertisementEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_condition_service__WEBPACK_IMPORTED_MODULE_5__["ConditionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AdvertisementEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AdvertisementEditComponent, selectors: [["app-advertisement-edit"]], inputs: { advertisement: "advertisement" }, decls: 70, vars: 30, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [3, "formGroup", "submit"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "description"], ["name", "description", "id", "description", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-12", "col-lg-6"], ["type", "number", "name", "price", "id", "price", "min", "0", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "conditionFK"], ["name", "conditionFK", "id", "conditionFK", "formControlName", "conditionFK", 1, "form-control", 3, "ngClass"], ["selected", ""], [4, "ngFor", "ngForOf"], ["for", "categoryNameFK"], ["name", "categoryNameFK", "id", "categoryNameFK", "formControlName", "categoryNameFK", 1, "form-control", 3, "ngClass"], ["for", "placeNameFK"], ["name", "placeNameFK", "id", "placeNameFK", "formControlName", "placeNameFK", 1, "form-control", 3, "ngClass"], ["type", "text", "readonly", "", 1, "form-control", 3, "placeholder"], [1, "col", "text-center"], ["type", "submit", "value", "Izmjeni oglas", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/", "routerLinkActive", "active"], [1, "col-lg-4"]], template: function AdvertisementEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Novi oglas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("submit", function AdvertisementEditComponent_Template_form_submit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Ime oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Molimo upi\u0161ite ime oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Opis oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Molimo upi\u0161ite opis oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Cijena oglasa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Molimo upi\u0161ite cijenu oglasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Odabir stanja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Odabir stanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, AdvertisementEditComponent_option_33_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "Molimo Vas odaberite stanje proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "Odabir kategorije:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Odabir kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](43, AdvertisementEditComponent_option_43_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "Molimo Vas odaberite kategoriju proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Lokacija proizvoda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Odabir mjesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](52, AdvertisementEditComponent_option_52_Template, 2, 1, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, "Molimo Vas odaberite lokaciju proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "Korisni\u010Dko ime prodava\u010Da:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Odustani");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.newAdvertisementForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](12, _c0, (ctx.name.dirty || ctx.name.touched) && ctx.name.invalid, (ctx.name.dirty || ctx.name.touched) && ctx.name.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](15, _c0, (ctx.description.dirty || ctx.description.touched) && ctx.description.invalid, (ctx.description.dirty || ctx.description.touched) && ctx.description.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](18, _c0, (ctx.price.dirty || ctx.price.touched) && ctx.price.invalid, (ctx.price.dirty || ctx.price.touched) && ctx.price.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](21, _c0, (ctx.conditionFK.dirty || ctx.conditionFK.touched) && (ctx.conditionFK.invalid || ctx.conditionFK.value == "Odabir stanja"), (ctx.conditionFK.dirty || ctx.conditionFK.touched) && ctx.conditionFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.conditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](24, _c0, (ctx.categoryNameFK.dirty || ctx.categoryNameFK.touched) && (ctx.categoryNameFK.invalid || ctx.categoryNameFK.value == "Odabir kategorije"), (ctx.categoryNameFK.dirty || ctx.categoryNameFK.touched) && ctx.categoryNameFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](27, _c0, (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && (ctx.placeNameFK.invalid || ctx.placeNameFK.value == "Odabir mjesta"), (ctx.placeNameFK.dirty || ctx.placeNameFK.touched) && ctx.placeNameFK.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.places);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", ctx.advertisement.sellerUsernameFK);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.newAdvertisementForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZlcnRpc2VtZW50LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "yQPF":
/*!******************************************************************!*\
  !*** ./src/app/my-advertisements/my-advertisements.component.ts ***!
  \******************************************************************/
/*! exports provided: MyAdvertisementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdvertisementsComponent", function() { return MyAdvertisementsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authorization-guard.service */ "Z3lc");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/authentication.service */ "TTF2");
/* harmony import */ var _shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/advertisement.service */ "q/cA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advertisement-edit/advertisement-edit.component */ "xfDm");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/filter.pipe */ "BhhM");









const _c0 = function (a1) { return ["../oglas/", a1]; };
function MyAdvertisementsComponent_div_6_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MyAdvertisementsComponent_div_6_tr_23_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const advertisement_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r5.userWantsToEdit(advertisement_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Uredi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MyAdvertisementsComponent_div_6_tr_23_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r7.deleteAdvertisement(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Izbri\u0161i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const advertisement_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](9, _c0, advertisement_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.conditionNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.categoryNameFK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](advertisement_r3.placeNameFK);
} }
function MyAdvertisementsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Naziv");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Opis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Cijena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Stanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Kategorija");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Lokacija");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Ure\u0111ivanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Brisanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, MyAdvertisementsComponent_div_6_tr_23_Template, 24, 11, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](24, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](24, 1, ctx_r0.advertisements, "seller_idFK", ctx_r0.user._id));
} }
function MyAdvertisementsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "app-advertisement-edit", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("advertisementChange", function MyAdvertisementsComponent_div_7_Template_app_advertisement_edit_advertisementChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.advertisementForEdit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("advertisement", ctx_r1.advertisementForEdit);
} }
class MyAdvertisementsComponent {
    constructor(authorizationGuardService, authenticationService, advertisementService) {
        this.authorizationGuardService = authorizationGuardService;
        this.authenticationService = authenticationService;
        this.advertisementService = advertisementService;
        this.advertisementsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.editMode = false;
    }
    ngOnInit() {
        this.authorizationGuardService.canAccessAdmin();
        this.user = this.authenticationService.getUser();
        this.advertisementsSubject = this.advertisementService.getAdvertisements();
        this.subscription = this.advertisementsSubject
            .subscribe(res => {
            this.advertisements = res;
        });
    }
    deleteAdvertisement(i) {
        let a = this.advertisements[i];
        this.advertisementService.deleteAdvertisement(a._id);
    }
    ngOnDestory() {
        this.subscription.unsubscribe();
    }
    userWantsToEdit(selectedAdvertisement) {
        this.editMode = true;
        this.advertisementForEdit = selectedAdvertisement;
    }
}
MyAdvertisementsComponent.??fac = function MyAdvertisementsComponent_Factory(t) { return new (t || MyAdvertisementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_authorization_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"])); };
MyAdvertisementsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: MyAdvertisementsComponent, selectors: [["app-my-advertisements"]], decls: 8, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-12"], [4, "ngIf"], [1, "table", "table-striped", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "advertisement", "advertisementChange"]], template: function MyAdvertisementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Oglasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, MyAdvertisementsComponent_div_6_Template, 25, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, MyAdvertisementsComponent_div_7_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.editMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_7__["AdvertisementEditComponent"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hZHZlcnRpc2VtZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zoz+":
/*!**********************************************************!*\
  !*** ./src/app/register/ConfirmedValidator.validator.ts ***!
  \**********************************************************/
/*! exports provided: confirmedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmedValidator", function() { return confirmedValidator; });
function confirmedValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map