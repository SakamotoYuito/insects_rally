"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 8715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T4": () => (/* binding */ useSignup),
/* harmony export */   "aU": () => (/* binding */ useLogout),
/* harmony export */   "f0": () => (/* binding */ useLogin)
/* harmony export */ });
/* unused harmony export auth */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyDUyPgNlr4K6cP_R0skzOtnW-BawgdOKE0",
    authDomain: "insect-rally.firebaseapp.com",
    projectId: "insect-rally",
    storageBucket: "insect-rally.appspot.com",
    messagingSenderId: "635528997469",
    appId: "1:635528997469:web:4bfbd3f0ebf51e29e8bbb4"
});
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const useSignup = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const password = "123456";
    const handleChangeEmail = (e)=>{
        setError(null);
        const tmp = e.currentTarget.value + "@example.com";
        setEmail(tmp);
    };
    const handleCreateUser = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email, password);
            router.push("/");
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
                setError(err.message);
            }
        }
    };
    console.log(error);
    return {
        handleChangeEmail,
        handleCreateUser,
        error
    };
};
const useLogin = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const password = "123456";
    const handleChangeEmail = (e)=>{
        setError(null);
        const tmp = e.currentTarget.value + "@example.com";
        setEmail(tmp);
    };
    const handleSignInUser = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, email, password);
            router.push("/");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };
    console.log(error);
    return {
        handleChangeEmail,
        handleSignInUser,
        error
    };
};
const useLogout = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleLogout = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);
            router.push("/login");
        } catch (err) {
            if (axios__WEBPACK_IMPORTED_MODULE_4___default().isAxiosError(err)) {
                console.log(err.message);
                router.push("/login");
            }
        }
    };
    return handleLogout;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;