webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n    max-width: 15rem !important;\n    max-height: 15rem !important;\n}\n.modal-body{\n    padding: 5rem;\n    overflow: hidden;\n}\n.main{\n    margin-top:4vh;\n}\ntbody{\n    max-height:80vh;\n    overflow-x:hidden;\n}\n.col{\n    margin-bottom:4px;\n}\nth{\n    padding: 13px;\n}\ninput[type=\"file\"] {\n    display: none;\n}\n.thing{\n    max-height:70vh;\n    overflow-x: scroll;\n}\n.tb {\n    max-height: 60vh;\n    overflow-y: auto;\n    width: 100%;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top:4vh;\">\n  <div class=\"col-sm-7\">\n    <div class=\"fixed-table-toolbar\">\n      <div class=\"pull-left\">\n        <h4>{{participantcount}} Registered Participants</h4>\n      </div>\n      <div class=\"bars pull-left\"></div>\n      <div class=\"pull-right search\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchText\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"tb\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Designation</th>\n            <th scope=\"col\">Gender</th>\n            <th scope=\"col\">Size</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr (mouseover)=\"editparticipant(participant)\" *ngFor=\"let participant of participants | async | filter : searchText;let i = index\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{participant.from}}</td>\n            <td>{{participant.designation}}</td>\n            <td>{{participant.gender}}</td>\n            <td>{{participant.size}}</td>\n            <td>\n              <a hidden (click)=\"delete()\" rel=\"tooltip\" title=\"Remove\" class=\"table-action remove\" href=\"javascript:void(0)\">\n                <i class=\"fa fa-remove\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div class=\"col-sm-5\">\n    <div class=\"text-center\">\n      <img class=\"img-fluid img-round\" [src]=\"model.image\" width=\"25%\">\n      <input type=\"file\" #fileInput (change)=\"onFileChanged($event)\" />\n      <br>\n      <button class=\"btn btn-light btn-small\" (click)=\"fileInput.click()\">Change Avatar</button>\n      <hr>\n    </div>\n\n    <form (ngSubmit)=\"updaterecord()\" #form01 [ngFormOptions]=\"{updateOn: 'submit'}\">\n      <div class=\"col-md-12\" style=\"margin-top:3vh;\">\n        <button type=\"submit\" class=\"btn btn-primary btn-small\">Update Record </button>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label>Full Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.from\" name=\"from\" #from=\"ngModel\">\n        </div>\n        <div class=\"col-md-6\">\n          <label>Name On Label</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.badge\" name=\"badge\" #badge=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-6\">\n          <label>Institution</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.institution\" name=\"institution\" #firstname=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-6\">\n          <label>Designation</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.designation\" name=\"designation\" #designation=\"ngModel\">\n        </div>\n        <div class=\"col-md-4\">\n          <label>Country</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.country\" name=\"country\" #country=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-4\">\n          <label>City</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.city\" name=\"city\" #city=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-4\">\n          <label>State</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.state\" name=\"state\" #state=\"ngModel\">\n        </div>\n        <div class=\"col-md-4\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.telephone\" name=\"telephone\" #telephone=\"ngModel\">\n        </div>\n        <div class=\"col-md-4\">\n          <label>Whatsapp</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.whatsapp\" name=\"whatsapp\" #whatsapp=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-4\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-4\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.address\" name=\"address\" #address=\"ngModel\">\n        </div>\n\n        <div class=\"col-md-4\">\n            <label>Size</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.size\" name=\"size\" #size=\"ngModel\">\n          </div>\n\n          <div class=\"col-md-4\">\n              <label>Age</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.age\" name=\"age\" #age=\"ngModel\">\n            </div>\n      </div>\n\n\n    </form>\n  </div>\n\n</div>\n\n\n\n<!--\n      <div class=\"table-responsive-lg\">\n      <table class=\"table table-fixed\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Designation</th>\n            <th>Image</th>\n            <th>delete</th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n\n<div class=\"tb\">\n    <div class=\"table-responsive-lg\">\n      <table class=\"table table-hover\">\n        <tbody>\n          <tr (click)=\"editparticipant(participant)\" *ngFor=\"let participant of participants | async | filter : searchText;let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{participant.from}}</td>\n            <td>{{participant.designation}}</td>\n            <td>\n              <img class=\"img-fluid img-round\" width=\"30%\" src=\"{{participant.image}}\" />\n            </td>\n            <td>\n              <a (click)=\"delete()\" rel=\"tooltip\" title=\"Remove\" class=\"table-action remove\" href=\"javascript:void(0)\">\n                <i class=\"fa fa-remove\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(afs, storage) {
        var _this = this;
        this.afs = afs;
        this.storage = storage;
        this.numbering = new Array;
        this.model = {
            address: "",
            age: "",
            badge: "",
            body: "",
            city: "",
            country: "",
            date: "",
            designation: "",
            email: "",
            from: "",
            image: "assets/img/placeholder.png",
            institution: "",
            label: "",
            medical: "",
            member: "",
            nationality: "",
            paymentmode: "",
            pin: "",
            space: "",
            state: "",
            subject: "",
            subject2: "",
            telephone: "",
            whatsapp: "",
            size: "",
        };
        this.url = "../assets/img/placeholder.png";
        this.participantsCollectionRef = this.afs.collection('participants');
        this.participants = this.participantsCollectionRef.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        this.participantsCollectionRef.valueChanges().subscribe(function (val) {
            _this.participantcount = val.length;
            for (var i = 0; i <= _this.participantcount; i++) {
                _this.numbering.push(i);
            }
        });
    }
    AdminComponent.prototype.editparticipant = function (participant) {
        this.model = participant;
        this.selectedId = participant.id;
    };
    AdminComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onloadend = function (event) {
                alert("image uploaded successfully");
                _this.updaterecord();
                _this.model.image = reader.result;
            };
        }
    };
    AdminComponent.prototype.uploadpic = function () {
        var _this = this;
        var uniquekey = 'avi' + Math.floor(Math.random() * 1000000);
        var uploadtask = this.storage.upload('/participants/' + uniquekey, this.file);
        uploadtask.percentageChanges().subscribe(function (value) {
            _this.progressBarValue = value.toFixed(0);
            var progressbar = document.getElementById('progressbar');
            progressbar.style.width = _this.progressBarValue + '%';
            uploadtask.then(function (result) {
                _this.model.image = result.downloadURL;
                _this.updaterecord();
            });
            uploadtask.catch(function (err) {
                console.log(err);
            });
        });
    };
    AdminComponent.prototype.updaterecord = function () {
        this.participantsCollectionRef.doc(this.selectedId).update(this.model)
            .then(function (data) {
            alert("updated successfully");
        })
            .catch(function (err) {
            console.log(err);
            alert("could not update...");
        });
    };
    AdminComponent.prototype.delete = function () {
        this.participantsCollectionRef.doc(this.selectedId).delete();
    };
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_15__list_list_component__["a" /* ListComponent */] }
];
var firebaseConfig = {
    apiKey: "AIzaSyDjagTPm5KGprC8CCmBOQ8CndQ_MccoUJE",
    authDomain: "barcodescan-51b54.firebaseapp.com",
    databaseURL: "https://barcodescan-51b54.firebaseio.com",
    projectId: "barcodescan-51b54",
    storageBucket: "barcodescan-51b54.appspot.com",
    messagingSenderId: "642227896150"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_15__list_list_component__["a" /* ListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body }),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuth */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.participantsCollection = afs.collection('participants');
        this.participants = this.participantsCollection.valueChanges();
    }
    FirebaseService.prototype.login = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    FirebaseService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    FirebaseService.prototype.upload = function (data) {
        return this.participantsCollection.add(data);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-table-container thead th {\r\n    height: 0;\r\n    padding: 1vh;\r\n    margin: 1vh;\r\n    border-left: 1px solid #dddddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div>\n    <div class=\"fixed-table-toolbar\">\n      <div class=\"pull-right search\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\n      </div>\n    </div>\n\n    <div class=\"bootstrap-table\">\n      <div class=\"fixed-table-container\" style=\"padding-bottom: 0px;\">\n        <div class=\"fixed-table-body\">\n          <table id=\"fresh-table\" class=\"table table-hover table-striped thing\">\n            <thead style=\"background-color:azure\">\n              <td></td>\n              <th>Name</th>\n              <th>Email Address</th>\n              <th>Phone Number</th>\n              <th>Nationality</th>\n              <th>Country</th>\n              <th>City</th>\n              <th>Registration Date</th>\n              <th></th>\n            </thead>\n            <tbody class=\"thing\">\n              <tr *ngFor=\"let participant of participants | async | filter : searchText; let i = index\">\n                <td>{{i+1}}</td>\n                <td>{{participant.from}}</td>\n                <td>{{participant.email}}</td>\n                <td>{{participant.telephone}}</td>\n                <td>{{participant.nationality}}</td>\n                <td>{{participant.country}}</td>\n                <td>{{participant.city}}</td>\n                <td>{{participant.date}}</td>\n                <td>\n                  <img class=\"img-fluid img-round\" width=\"30%\" src=\"{{participant.image}}\" /> </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(afs) {
        this.afs = afs;
        this.participantsCollectionRef = this.afs.collection('participants');
        this.participants = this.participantsCollectionRef.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md\">\n    <div class=\"container\">\n      <form (ngSubmit)=\"convert()\" #form01 [ngFormOptions]=\"{updateOn: 'submit'}\">\n        <div class=\"form-row\">\n          <div class=\"form-group\">\n            <label>First Name</label>\n            <textarea  rows=\"23\" class=\"form-control\"   [(ngModel)]=\"model.data\" name=\"firstname\" #data=\"ngModel\"></textarea>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-success btn-block\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fs, router) {
        this.fs = fs;
        this.router = router;
        this.model = {
            data: ""
        };
        this.mod = {
            date: "",
            subject: "",
            from: "",
            subject2: "",
            body: "",
            space: "",
            badge: "",
            age: "",
            label: "",
            nationality: "",
            institution: "",
            designation: "",
            member: "",
            medical: "",
            address: "",
            city: "",
            state: "",
            pin: "",
            country: "",
            telephone: "",
            whatsapp: "",
            email: "",
            paymentmode: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.fs.login().then(function (data) {
            _this.router.navigate(['/admin']);
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.convert = function () {
        var _this = this;
        var string = this.model.data;
        var newdate = string.split(/\r\n|\r|\n/)[0].replace(/:/g, ".").replace("+0000", "").replace(/,/, "").replace("ate.", "");
        var string = string.replace(/,/g, "");
        var string = string.replace(/"/g, "");
        var string = string.replace(/""/g, "");
        var string = string.replace('Message Body:', "");
        var string = string.replace('From:', "");
        var string = string.replace('Subject:', "");
        var string = string.replace('Preferred Name on Badge:', "");
        var string = string.replace('Age :', "");
        var string = string.replace('Label :', "");
        var string = string.replace('Nationality :', "");
        var string = string.replace('Institution :', "");
        var string = string.replace('Designation :', "");
        var string = string.replace('Member :', "");
        var string = string.replace('Medical :', "");
        var string = string.replace('Address :', "");
        var string = string.replace('City :', "");
        var string = string.replace('State :', "");
        var string = string.replace('Pin :', "");
        var string = string.replace('Country :', "");
        var string = string.replace('Telephone :', "");
        var string = string.replace('Whatsapp :', "");
        var string = string.replace('Email :', "");
        var string = string.replace('Mode of Payment :', "");
        var string = string.replace(/:/g, ",");
        // string = string.trim();
        var string = string.replace(/.*/, newdate).substr(1);
        //console.log(string);
        var newsubject2 = string.split(/\r\n|\r|\n/)[3];
        var newsubject2 = newsubject2.replace("Subject,", "");
        var string = string.replace('Subject,', "");
        var arr = new Array;
        var length = string.split(/\r\n|\r|\n/).length;
        arr.push(string.split(/\r\n|\r|\n/));
        console.log(arr);
        var ar = arr[0];
        var l = ar.length;
        //console.log(l); 
        if (l != 23) {
            console.log("data incomplete");
        }
        else {
            for (var i = 0; i < l; i++) {
                this.mod.date = ar[0];
                this.mod.subject = ar[1];
                this.mod.from = ar[2];
                this.mod.subject2 = ar[3];
                this.mod.body = ar[4];
                this.mod.space = ar[5];
                this.mod.badge = ar[6];
                this.mod.age = ar[7];
                this.mod.label = ar[8];
                this.mod.nationality = ar[9];
                this.mod.institution = ar[10];
                this.mod.designation = ar[11];
                this.mod.member = ar[12];
                this.mod.medical = ar[13];
                this.mod.address = ar[14];
                this.mod.city = ar[15];
                this.mod.state = ar[16];
                this.mod.pin = ar[17];
                this.mod.country = ar[18];
                this.mod.telephone = ar[19];
                this.mod.whatsapp = ar[20];
                this.mod.email = ar[21];
                this.mod.paymentmode = ar[22];
            }
            ;
            this.fs.upload(this.mod)
                .then(function (res) {
                // console.log(res);
                _this.model.data = "";
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map