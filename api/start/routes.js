"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");

// Auth routes
Route.group(() => {
  Route.post("register", "AuthController.register").validator(
    "RegisterRequest"
  );
  Route.post("login", "AuthController.login").validator("LoginRequest");
  Route.post("update-password", "AuthController.updatePassword").validator(
    "UpdatePasswordRequest"
  );
  Route.post("/refresh-token", "AuthController.refreshAccessToken");
  Route.post("/logout", "AuthController.logout").middleware(["auth:jwt"]);
}).prefix("api/auth");

// User routes
Route.group(() => {
  Route.get("users", "UserController.index");
  Route.get("users/me", "UserController.show").middleware(["auth:jwt"]);
  Route.put("users/:user_id", "UserController.update").middleware(["auth:jwt"]);
}).prefix("api");
