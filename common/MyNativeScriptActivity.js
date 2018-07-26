"use strict";
/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var MyNativeScriptActivity = /** @class */ (function (_super) {
    __extends(MyNativeScriptActivity, _super);
    function MyNativeScriptActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyNativeScriptActivity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
    };
    MyNativeScriptActivity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    MyNativeScriptActivity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    MyNativeScriptActivity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    MyNativeScriptActivity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    MyNativeScriptActivity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    MyNativeScriptActivity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    MyNativeScriptActivity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    MyNativeScriptActivity = __decorate([
        JavaProxy("org.nativescript.currencyconversion.MyNativeScriptActivity")
    ], MyNativeScriptActivity);
    return MyNativeScriptActivity;
}(android.app.Activity));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlOYXRpdmVTY3JpcHRBY3Rpdml0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk15TmF0aXZlU2NyaXB0QWN0aXZpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtFQUErRTs7QUFFL0Usa0NBQXdFO0FBR3hFO0lBQXFDLDBDQUFvQjtJQUF6RDs7SUFzQ0EsQ0FBQztJQW5DVSx5Q0FBUSxHQUFmLFVBQWdCLGtCQUFxQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLDRCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsaUJBQU0sUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLG9EQUFtQixHQUExQixVQUEyQixRQUEyQjtRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsaUJBQU0sbUJBQW1CLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU0sd0NBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxpQkFBTSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sdUNBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxpQkFBTSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sMENBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsaUJBQU0sU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLDhDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGlCQUFNLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSwyREFBMEIsR0FBakMsVUFBa0MsV0FBbUIsRUFBRSxXQUEwQixFQUFFLFlBQTJCO1FBQzFHLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFFTSxpREFBZ0IsR0FBdkIsVUFBd0IsV0FBbUIsRUFBRSxVQUFrQixFQUFFLElBQTRCO1FBQ3pGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGlCQUFNLGdCQUFnQixDQUFDLENBQUM7SUFDbEcsQ0FBQztJQXJDQyxzQkFBc0I7UUFEM0IsU0FBUyxDQUFDLDREQUE0RCxDQUFDO09BQ2xFLHNCQUFzQixDQXNDM0I7SUFBRCw2QkFBQztDQUFBLEFBdENELENBQXFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQXNDeEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL3Rucy1wbGF0Zm9ybS1kZWNsYXJhdGlvbnMvYW5kcm9pZC5kLnRzXCIgLz5cblxuaW1wb3J0IHtzZXRBY3Rpdml0eUNhbGxiYWNrcywgQW5kcm9pZEFjdGl2aXR5Q2FsbGJhY2tzfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuQEphdmFQcm94eShcIm9yZy5uYXRpdmVzY3JpcHQuY3VycmVuY3ljb252ZXJzaW9uLk15TmF0aXZlU2NyaXB0QWN0aXZpdHlcIilcbmNsYXNzIE15TmF0aXZlU2NyaXB0QWN0aXZpdHkgZXh0ZW5kcyBhbmRyb2lkLmFwcC5BY3Rpdml0eSB7XG4gICAgcHJpdmF0ZSBfY2FsbGJhY2tzOiBBbmRyb2lkQWN0aXZpdHlDYWxsYmFja3M7XG5cbiAgICBwdWJsaWMgb25DcmVhdGUoc2F2ZWRJbnN0YW5jZVN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrcykge1xuICAgICAgICAgICAgc2V0QWN0aXZpdHlDYWxsYmFja3ModGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25DcmVhdGUodGhpcywgc2F2ZWRJbnN0YW5jZVN0YXRlLCBzdXBlci5vbkNyZWF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2F2ZUluc3RhbmNlU3RhdGUob3V0U3RhdGU6IGFuZHJvaWQub3MuQnVuZGxlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblNhdmVJbnN0YW5jZVN0YXRlKHRoaXMsIG91dFN0YXRlLCBzdXBlci5vblNhdmVJbnN0YW5jZVN0YXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uU3RhcnQodGhpcywgc3VwZXIub25TdGFydCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uU3RvcCh0aGlzLCBzdXBlci5vblN0b3ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkRlc3Ryb3kodGhpcywgc3VwZXIub25EZXN0cm95KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CYWNrUHJlc3NlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQmFja1ByZXNzZWQodGhpcywgc3VwZXIub25CYWNrUHJlc3NlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVxdWVzdFBlcm1pc3Npb25zUmVzdWx0KHJlcXVlc3RDb2RlOiBudW1iZXIsIHBlcm1pc3Npb25zOiBBcnJheTxTdHJpbmc+LCBncmFudFJlc3VsdHM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uUmVxdWVzdFBlcm1pc3Npb25zUmVzdWx0KHRoaXMsIHJlcXVlc3RDb2RlLCBwZXJtaXNzaW9ucywgZ3JhbnRSZXN1bHRzLCB1bmRlZmluZWQgLypUT0RPOiBFbmFibGUgaWYgbmVlZGVkKi8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFjdGl2aXR5UmVzdWx0KHJlcXVlc3RDb2RlOiBudW1iZXIsIHJlc3VsdENvZGU6IG51bWJlciwgZGF0YTogYW5kcm9pZC5jb250ZW50LkludGVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25BY3Rpdml0eVJlc3VsdCh0aGlzLCByZXF1ZXN0Q29kZSwgcmVzdWx0Q29kZSwgZGF0YSwgc3VwZXIub25BY3Rpdml0eVJlc3VsdCk7XG4gICAgfVxufSJdfQ==