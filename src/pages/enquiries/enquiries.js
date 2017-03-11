var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { EnquiryDetailsPage } from '../enquiry-details/enquiry-details';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Enquiries page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EnquiriesPage = (function () {
    function EnquiriesPage(navCtrl, navParams, af, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.storage = storage;
        storage.ready().then(function () {
            storage.get('currentuser').then(function (val) {
                _this.currentuser = JSON.parse(val);
                _this.segment = "received";
                _this.updateEnquiryList();
                //this.enquiryList = af.database.list('/users/' + this.currentuser.uid + '/enquiries');
            })
                .catch(function (err) {
                return console.log(err);
            });
        }).catch(function (err) {
            return console.log(err);
        });
    }
    EnquiriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiriesPage');
    };
    EnquiriesPage.prototype.openenquirypage = function (enquiry) {
        this.navCtrl.push(EnquiryDetailsPage, { enquiry: enquiry });
    };
    EnquiriesPage.prototype.updateEnquiryList = function () {
        console.log(this.segment);
        this.enquiryList = this.af.database.list('/users/' + this.currentuser.uid + '/enquiries', {
            query: {
                orderByChild: "type",
                equalTo: this.segment
            }
        });
    };
    return EnquiriesPage;
}());
EnquiriesPage = __decorate([
    Component({
        selector: 'page-enquiries',
        templateUrl: 'enquiries.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AngularFire, Storage])
], EnquiriesPage);
export { EnquiriesPage };
//# sourceMappingURL=enquiries.js.map