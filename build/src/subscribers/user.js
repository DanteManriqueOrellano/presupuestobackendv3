"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typedi_1 = require("typedi");
var event_dispatch_1 = require("event-dispatch");
var events_1 = __importDefault(require("./events"));
var fireorm_1 = require("fireorm");
/*admin.initializeApp({
    credential: admin.credential.cert({
        
        projectId: "aquagratuitov1",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD3u/2hDe+ah/Nf\nxZp+TryrUbbuixuxDowsbmF62qTTdWrSF1EG+Bku47oNU5DBa8JU/EVVGXUqcIU0\nw4H4KIZ5RV1LgbMjtk6cBh6mAUdujUy2L8ziqL48FltorEdF0dxakNc35UNJY36b\nzFOgbx3HxljmIckkvQgb3/Bdq5fdd2M+uGqGpULmLC1h73jED5RoPJYQYtqGqVXq\nLxmbYAiitjZusaCbMqjJdUuZjWg8iU7x9jg1mKAU+WUhK6DWtVvUo5vSFYi9paDz\n7EYkEBvPO8igcoJx6FC9k4nZrdO4oDuDkudKuAJe3GGiERWzf/65x4gY0WD1Qiu+\nMdOxUTwTAgMBAAECggEAI+JaMbsICvVIXoYMA+G52IMEoXcK8tGtoj325snG+E5Y\nw8fW19CWLUGVUJrbK/lE8/R6woHmg9g6o1Lyf5S3LdfLVMWbwj+FEXqdc+RZiXz0\nMKup3Ocebyu53+aciFOGvKOgWRtfbMD5tO2a63FM+gQUGnmoXib3hrogYiEZ5V09\n0NQipEOHvNhrcfjAMSRkGKUGy9s2bwsmEVR9yTrGjGUK289LkgvahY6UxtEYoR8g\nNl2qjHdLbfQXvEF0e3lwGK47av6kAk2Li6pM0gUTK6xyivWqt7iLB3wm7ZQm20i9\n/7p0Z8GVmvCK1WSinpb3gpj5SmHQkP6ukW+7DqWjoQKBgQD833e1ZSoQ6JIotj3k\nzeTPnJo4PukrwbetAhX5gkXo1LADvISry4roklCS81DDbm8K+qetVwxXVnaCvFTi\nlm2Kjmcep0Ku3Vp3taY2iMyMvFYvtcNT+0JNEtYjvfUUrngtG2r+ecubHYQf0u8i\nXKwb/nyvbsLNqfbBJJ9zTaybkQKBgQD6zEFzL2RF6MdXo2jQ4isqtCR4tS+7DzkX\nz1qnE5zQPzCVbVL4R90hcrz/DNLdwQez+YV6Hn3VIQItmJxdvLyLE1AzBzmtU+oH\neX92C+HFQf3xYqEBZAi4ncpps8LELbyxKx3mpy2uaFzER0JPlokTa1JK1X+RygHH\n2XL5LOhjYwKBgQDUZsAeVYMoALIEEE+cyHTRDjFb3TvtzSGC6KWclpgyIbRW7xph\nUu6yu3OCe23zOed7yV7ecqejFLUmyxph2QjZwRNM5CFW0AcVVjbux6lI7UlXec0/\n1WSzaIcGLqCVZpb7DHSqm5MyD3DTalIDAuRt/yysDtUB+ymQwjpMl4nMgQKBgFNz\nice5GkWE2mfX8PWofDKedJBRwcsdmqLIlWKIzSIiFJl0IiqJRxRtKGQ5sSSmqViC\ni56B7N7xN9dSM52hQp+IUqRYICIDjRjlnbr64yoO9l/OsMJUte4wWvznGsTKb0II\nlc99C19ATLXm/DKdZYk3qc9K0UMCk6sbOP2eqsj/AoGAUtceqlefz3SHJmFoFASd\n0zqXHKu7La6xWcHIygMebEGpVAnZaRX94yMppukAoUk/DnhybN6rTjsAT6vJa1BN\nkY+xDIlzX5LeL5NPuiLi2siyu+UOlyjs28sdlGMwb1jTFxYE0mV5y2YeqVpUHK8c\nx2REYeMw3rc92cvQHQd6FaM=\n-----END PRIVATE KEY-----\n",
        clientEmail: "firebase-adminsdk-sr4ch@aquagratuitov1.iam.gserviceaccount.com"
        
}),

databaseURL: "https://aquagratuitov1.firebaseio.com",
});
const firestore = admin.firestore();
fireorm.initialize(firestore);
*/
var User = /** @class */ (function () {
    function User() {
    }
    User = __decorate([
        (0, fireorm_1.Collection)()
    ], User);
    return User;
}());
exports.User = User;
var UserSubscriber = /** @class */ (function () {
    function UserSubscriber() {
    }
    UserSubscriber.prototype.onUserSignIn = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typedi_1.Container.get('logger');
                        console.log(id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        userRepository = (0, fireorm_1.getRepository)(User);
                        return [4 /*yield*/, userRepository.findById("1")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, userRepository.update({ id: "1", lastLogin: new Date() })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error("\uD83D\uDD25 Error on event " + events_1.default.user.signIn + ": %o", e_1);
                        // Throw the error so the process die (check src/app.ts)
                        throw e_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserSubscriber.prototype.onUserSignUp = function (_a) {
        var name = _a.name, email = _a.email, id = _a.id;
        typedi_1.Container.get('logger');
        console.log(id);
        try {
            /**
             * @TODO implement this
             */
            // Call the tracker tool so your investor knows that there is a new signup
            // and leave you alone for another hour.
            // TrackerService.track('user.signup', { email, _id })
            // Start your email sequence or whatever
            // MailService.startSequence('user.welcome', { email, name })
        }
        catch (e) {
            console.error("\uD83D\uDD25 Error on event " + events_1.default.user.signUp + ": %o", e);
            // Throw the error so the process dies (check src/app.ts)
            throw e;
        }
    };
    __decorate([
        (0, event_dispatch_1.On)(events_1.default.user.signIn),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserSubscriber.prototype, "onUserSignIn", null);
    __decorate([
        (0, event_dispatch_1.On)(events_1.default.user.signUp),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserSubscriber.prototype, "onUserSignUp", null);
    UserSubscriber = __decorate([
        (0, event_dispatch_1.EventSubscriber)()
    ], UserSubscriber);
    return UserSubscriber;
}());
exports.default = UserSubscriber;
//# sourceMappingURL=user.js.map