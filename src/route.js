var app = angular.module("myModule", ["ngRoute"]);

//Chuyen trang
app.config(function ($routeProvider, $locationProvider) {
  //xoa tren duong dan
  $locationProvider.hashPrefix("");
  //chuyen trang $routeProvider
  $routeProvider
    .when("/home", {
      //noi dung trang chu
      //   template: "<section> <h1>Nội dung trang chủ</h1></section>",
      templateUrl: "./pages/home.html",
    })
    .when("/blog", {
      templateUrl: "./pages/blog.html",
    })
    .when("/contact", {
      templateUrl: "./pages/contact.html",
    })
    .when("/pages", {
      templateUrl: "./pages/pages.html",
    })
    .when("/shop", {
      templateUrl: "./pages/shop.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
