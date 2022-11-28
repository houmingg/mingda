$(function () {
  $(".header").after(
    '<div id="m-nav" class="m-nav"><div class="m-wrap"></div><div id="m-btn" class="m-btn"><i class="fa fa-remove"></i></div>'
  );
  $(".sub-menu").before(
    '<em class="dot"><i class="fa fa-angle-down"></i></em>'
  );
  $(".container .nav").clone(false).appendTo(".m-wrap");
  $(".m-btn").click(function () {
    $("#m-nav").toggleClass("m-open").siblings("#m-nav").removeClass("m-open");
    $("#mask").slideToggle(0).siblings("#mask").slideToggle(0);
    $("body").toggleClass("open").siblings("body").removeClass("open");
  });
  $(".dot").click(function (X) {
    e($(this), ".ul-subcates");
    X.stopPropagation();
  });
  function e(e, X) {
    e.next().slideToggle();
    e.parent().siblings().find(".fa").removeClass("open");
    e.parent().siblings().find(X).slideUp();
    var c = e.find(".fa");
    if (c.hasClass("open")) {
      c.removeClass("open");
    } else {
      c.addClass("open");
    }
  }
  $(".nav-bar li").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
  $(".s-btn").on("click", function () {
    var e = $(this);
    if (e.hasClass("off")) {
      e.removeClass("fa-search off").addClass("fa-remove no");
      $(".s-form").slideToggle(200);
    } else {
      e.removeClass("fa-remove no").addClass("fa-search off");
      $(".s-form").slideToggle(100);
    }
  });
  $("#mask").click(function () {
    $(this).hide();
    $(".search-bg").hide();
    $("#m-nav").removeClass("m-open");
    $("body").removeClass("open");
  });
});
jQuery(document).ready(function (e) {
  var X = e("#nav-box").attr("data-type");
  e(".nav>li").each(function () {
    try {
      var c = e(this).attr("id");
      if ("index" == X) {
        if (c == "nvabar-item-index") {
          e("#nvabar-item-index").addClass("active");
        }
      } else if ("category" == X) {
        var G = e("#nav-box").attr("data-infoid");
        if (G != null) {
          var b = G.split(" ");
          for (var Z = 0; Z < b.length; Z++) {
            if (c == "navbar-category-" + b[Z]) {
              e("#navbar-category-" + b[Z] + "").addClass("active");
            }
          }
        }
      } else if ("article" == X) {
        var G = e("#nav-box").attr("data-infoid");
        if (G != null) {
          var b = G.split(" ");
          for (var Z = 0; Z < b.length; Z++) {
            if (c == "navbar-category-" + b[Z]) {
              e("#navbar-category-" + b[Z] + "").addClass("active");
            }
          }
        }
      } else if ("page" == X) {
        var G = e("#nav-box").attr("data-infoid");
        if (G != null) {
          if (c == "navbar-page-" + G) {
            e("#navbar-page-" + G + "").addClass("active");
          }
        }
      } else if ("tag" == X) {
        var G = e("#nav-box").attr("data-infoid");
        if (G != null) {
          if (c == "navbar-tag-" + G) {
            e("#navbar-tag-" + G + "").addClass("active");
          }
        }
      }
    } catch (e) {}
  });
  e("#nav-box").delegate("a", "click", function () {
    e(".nav>li").each(function () {
      e(this).removeClass("active");
    });
    if (e(this).closest("ul") != null && e(this).closest("ul").length != 0) {
      if (e(this).closest("ul").attr("id") == "munavber") {
        e(this).addClass("active");
      } else {
        e(this).closest("ul").closest("li").addClass("active");
      }
    }
  });
});
(function (e) {
  if (typeof Object.create !== "function") {
    Object.create = function (e, X) {
      if (typeof e !== "object" && typeof e !== "function") {
        throw new TypeError("Object prototype may only be an Object: " + e);
      } else if (e === null) {
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
        );
      }
      if (typeof X != "undefined")
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support a second argument."
        );
      function c() {}
      c.prototype = e;
      return new c();
    };
  }
  var X = function (e, c) {
    if (c.length >= e.length) {
      return e.apply(e, c);
    }
    return function () {
      if (arguments.length == 0) arguments = [null];
      return X(e, c.concat([].slice.apply(arguments)));
    };
  };
  var c = function (e) {
    if (typeof e != "function") return null;
    return function () {
      if (arguments.length == 0) arguments = [null];
      return X(e, [].slice.apply(arguments));
    };
  };
  var G = function () {
    var e = arguments;
    return function (X) {
      for (var c = 0; c < e.length; c++) {
        if (typeof e[c] == "function") {
          X = e[c].call(null, X);
        }
      }
      return X;
    };
  };
  var b = c(function (e, X) {
    return String.prototype.match.call(X, e) || [];
  });
  var Z = c(function (e, X, c) {
    return String.prototype.replace.call(c, e, X);
  });
  var cB = Z(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  var a = c(function (e, X, c, G) {
    if (!d(e)) e = false;
    if (!d(X)) X = "0";
    G = parseInt(G);
    if (!eN(G)) G = G + "";
    var b = c - G.length;
    var Z = "";
    while (Z.length < b) {
      Z += X;
    }
    Z = Z.substring(0, b);
    return e ? G + Z : Z + G;
  });
  var I = c(function (e, X) {
    switch (e) {
      case "array":
        return Object.prototype.toString.call(X) === "[object Array]";
        break;
      case "object":
        return Object.prototype.toString.call(X) === "[object Object]";
        break;
      case "regexp":
        return Object.prototype.toString.call(X) === "[object RegExp]";
        break;
      default:
        return typeof X == e;
    }
  });
  var aH = I("object");
  var bB = I("function");
  var eN = I("string");
  var aA = I("number");
  var g = I("boolean");
  var i = I("array");
  var ga = I("regexp");
  var d = function (e) {
    return e != null;
  };
  var J = function (e) {
    if (!d(e)) return true;
    if (i(e)) e = e.toString();
    if (eN(e)) return cB(e).length === 0;
    if (aH(e)) {
      for (var X in e) {
        if (e.hasOwnProperty(X)) {
          return false;
        }
      }
      return true;
    }
    if (Math.abs(e - 0) === 0) return true;
    return false;
  };
  var cA = function (e) {
    return !J(e);
  };
  var cj = c(function (e, X) {
    return document.documentElement[e] || document.body[e] || 0;
  });
  var bF = c(function (e, X) {
    return cj("clientWidth", "") >= e;
  });
  var gX = G(b(/(iPhone|iPod|ios|iPad)/i), cA);
  var f = G(b(/Android/i), cA);
  var bg = G(
    b(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ),
    cA
  );
  var Xb = function () {
    var e = navigator.userAgent;
    if (gX(e)) return "ios";
    if (f(e)) return "android";
    if (bg(e)) return "mobile";
    return false;
  };
  var Ia = function (e) {
    var X;
    if (aH(e)) {
      X = {};
      for (var c in e) {
        if (e.hasOwnProperty(c)) {
          X[c] = this.deepCopy(e[c]);
        }
      }
    } else {
      X = e;
    }
    return X;
  };
  var P = function (e) {
    var X = [];
    if (aH(e)) {
      for (var c in e) {
        if (e.hasOwnProperty(c)) {
          if (aH(e[c])) {
            X.push(this.toArray(e[c]));
          } else {
            X.push(e[c]);
          }
        }
      }
    } else {
      X.push(e);
    }
    return X;
  };
  var gd = function (e) {
    return JSON.stringify(e);
  };
  var aQ = function (e) {
    var X;
    try {
      X = JSON.parse(e);
    } catch (e) {
      X = null;
      console.dir(e);
    }
    return X;
  };
  var aI = b(
    /^\d{4}[-\/][01]\d[-\/][0-3]\d(\s+[0-2]\d(:[0-5]\d(:[0-5]\d)?)?)?/gi
  );
  var ac = function (e, X, c) {
    if (!eN(X) || !eN(c) || !aI(X) || !aI(c)) {
      console.dir("date format is wrong");
      return null;
    }
    X = new Date(Z(/\-/g, "/", X)).getTime();
    c = new Date(Z(/\-/g, "/", c)).getTime();
    if (isNaN(X) || isNaN(c)) {
      console.dir("date format is wrong");
      return null;
    }
    var G = c - X;
    var b = 1;
    switch (e) {
      case "week":
        b = 7 * 24 * 3600 * 1e3;
        break;
      case "day":
        b = 24 * 3600 * 1e3;
        break;
      case "hour":
        b = 3600 * 1e3;
        break;
      case "minute":
        b = 60 * 1e3;
        break;
      case "second":
        b = 1e3;
        break;
      default:
        b = 1;
    }
    return Math.floor(G / b);
  };
  var bK = function (e) {
    var X,
      c = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    if ((X = document.cookie.match(c))) {
      return decodeURIComponent(X[2]);
    }
    return "";
  };
  var fb = function (e, X, c, G) {
    if (!d(c)) c = 1;
    c = c - 0;
    if (isNaN(c)) c = 1;
    if (!d(G)) {
      path = ";path=/";
    } else {
      path = "";
    }
    var b = new Date();
    b.setTime(b.getTime() + c * 24 * 60 * 60 * 1e3);
    var Z = "expires=" + b.toUTCString();
    document.cookie = e + "=" + encodeURIComponent(X) + "; " + Z + path;
  };
  var fY = function (e) {
    fb(e, "", -1);
  };
  var cF = function () {
    return true;
  };
  var ac_ = function () {
    return false;
  };
  var h = function (e) {
    return function () {
      return e;
    };
  };
  var j = function (e) {
    var X;
    return function () {
      return X || (X = e.apply(X, arguments));
    };
  };
  var k = {
    curry: c,
    flow: G,
    of: h,
    getSingle: j,
    returnFalse: ac_,
    returnTrue: cF,
    match: b,
    replace: Z,
    deepCopy: Ia,
    toArray: P,
    jsonEncode: gd,
    jsonDecode: aQ,
    lpad: a(),
    rpad: a(true),
    getCookie: bK,
    setCookie: fb,
    delCookie: fY,
    isObject: aH,
    isString: eN,
    isBoolean: g,
    isNumber: aA,
    isArray: i,
    isFunction: bB,
    isRegExp: ga,
    isExist: d,
    isEmpty: J,
    isNotEmpty: cA,
    dateDiff: ac,
    clientWidthBigThen: bF,
    getDocument: cj,
  };
  var k = Object.create(k);
  k.trim = cB;
  k.isMobile = Xb;
  k.sm = bF(768);
  k.md = bF(992);
  k.lg = bF(1200);
  k.st = cj("scrollTop");
  k.ct = cj("clientHeight");
  k.cl = cj("clientWidth");
  e.orz = k;
})(window);
(function (e) {
  orz.isjQuery = function (e) {
    return e instanceof jQuery;
  };
  orz.isScrolling = function () {
    if (e("body").hasClass("scrolling")) return true;
    return false;
  };
  orz.startScroll = function (X) {
    e("body").addClass("scrolling");
    if (orz.isjQuery(X)) {
      X.trigger("startScroll");
    }
  };
  orz.endScroll = function (X) {
    e("body").removeClass("scrolling");
    if (orz.isjQuery(X)) {
      X.trigger("endScroll");
    }
  };
})(jQuery);
(function (e) {
  orz.scrollTo = function (X, c, G) {
    if (orz.isMobile()) return;
    if (orz.isScrolling()) return;
    if (!orz.isjQuery(X)) return;
    var b = X;
    if (b.length < 1) return;
    var Z = e(this);
    var cB = c - 0;
    var a = 1e3;
    var I = orz.st();
    var c = b.offset();
    var aH = c.top;
    if (!isNaN(cB)) aH = aH + cB;
    var bB = Math.abs(I - aH);
    if (isNaN(G) || G <= 0) G = (a * bB) / 4e3;
    orz.startScroll(Z);
    e("html,body").animate({ scrollTop: aH }, G, function () {
      orz.endScroll(Z);
    });
    return false;
  };
})(jQuery);
jQuery(function (e) {
  function X(e) {
    var X = e.attr("data-href");
    if (!X) {
      X = e.attr("href");
    }
    var c = X.split("#");
    var G = location.href;
    var b = G.split("#");
    if (c[0] && c[0] != b[0]) {
      return "";
    }
    return c.pop();
  }
  e("body").on("click", ".auto-scroll", function () {
    if (orz.isMobile()) return;
    if (orz.isScrolling()) return;
    var c = X(e(this));
    if (!c) return;
    var G = e("#" + c);
    if (G.length < 1) return;
    var b = e(this);
    var Z = e(this).attr("data-offset") - 0;
    var cB = e(this).attr("data-speed") - 0;
    orz.scrollTo(G, Z, cB);
    return false;
  });
});
(function (e) {
  var X = e(".part");
  if (X.length < 1) return;
  var c = [];
  function G() {
    X.each(function () {
      var X = e(this).offset();
      c.push(Math.floor(X.top));
    });
  }
  function b(X) {
    var c = e("#goto dd");
    var G = e("#goto dt");
    if (c.length < 1) return;
    var b = c.outerHeight();
    if (!c.eq(X).hasClass("current")) {
      c.removeClass("current");
      c.eq(X).addClass("current");
      G.animate(
        { top: b * X + (c.outerHeight() - G.outerHeight()) / 2 + 1 },
        50
      );
    }
  }
  function Z() {
    var e =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var G = Math.ceil(e + 78);
    var Z = 0;
    for (var cB = 0; cB < c.length; cB++) {
      if (G >= c[cB]) {
        Z = cB;
      } else {
        break;
      }
    }
    if (Z < 0) Z = 0;
    if (!X.eq(Z).hasClass("current")) {
      X.removeClass("current");
      X.eq(Z).addClass("current");
      b(Z);
    }
  }
  G();
  setTimeout(Z, 0);
  e(window).on("scroll", Z);
})(jQuery);
(function (e) {
  var X = e(".quick-nav");
  if (X.length < 1) return;
  var c = X.children(".content-sidebar");
  if (c.length < 1) return;
  var G = X.parent();
  if (G.length < 1) return;
  var b = 0,
    Z = 0,
    cB = 0;
  function a() {
    var e = X.offset();
    b = e.top;
    Z = b + G.height();
    I();
  }
  function I() {
    cB = c.height();
  }
  function aH() {
    c.removeClass("fixed");
    c.removeClass("absolute");
  }
  function bB() {
    var e =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (e <= b) {
      aH();
    }
    if (e >= Z - cB) {
      c.removeClass("fixed");
      c.addClass("absolute");
      return;
    }
    if (e < Z - cB && e > b) {
      c.removeClass("absolute");
      c.addClass("fixed");
    }
  }
  var eN = e(".content-sidebar dl");
  if (eN.length < 1) return;
  var aA = e(".part");
  if (aA.length < 1) return;
  var g = [];
  aA.each(function () {
    var X = e(this).attr("data-title");
    var c = e(this).attr("id");
    if (X && c) {
      g.push({ title: X, id: c });
    }
  });
  var i = "";
  i += '<dt><span class="show-list"></span></dt>';
  for (var ga = 0; ga < g.length; ga++) {
    i +=
      '<dd><a href="#' +
      g[ga].id +
      '" class="auto-scroll" rel="nofollow" data-offset="-78" data-speed=500>' +
      g[ga].title +
      "</a></dd>";
  }
  eN.html(i);
  a();
  bB();
  e(window).on("resize", a);
  e(window).on("scroll", bB);
  window.onload = function () {
    a();
  };
})(jQuery);
(function (e) {
  var X = e(".focus");
  if (X.length < 1) return;
  var c = X.children("a");
  if (c.length < 1) return;
  c.each(function (X) {
    var c = X % 4;
    e(this).css("animation-delay", c * 0.1 + "s");
  });
  function G() {
    c.toggleClass("hide");
    setTimeout(G, 5e3);
  }
  setTimeout(G, 5e3);
})(jQuery);
(function (e) {
  var X = e(".primary-menus");
  if (X.length < 1) return;
  var c = X.find(".selects");
  if (c.length < 1) return;
  var G = c.children("li");
  if (G.length < 1) return;
  var b = X.find(".search");
  var Z = b.find(".s").val();
  G.on("click", function () {
    var X = e(this).attr("data-target");
    if (X) {
      G.removeClass("current");
      e(this).addClass("current");
      b.addClass("hidden");
      b.filter("#" + X).removeClass("hidden");
      b.filter("#" + X)
        .find(".s")
        .trigger("focusin");
    }
  });
  b.find(".s").on("focusin", function () {
    if (e(this).val() == Z) {
      e(this).val("");
    }
  });
  b.find(".s").on("focusout", function () {
    var X = e(this).val();
    if (orz.isEmpty(X)) {
      X = Z;
    }
    b.find(".s").val(X);
  });
})(jQuery);
(function (e) {
  e("input.s").on("focusin", function () {
    e(this).select();
  });
})(jQuery);
$(function () {
  var e = $("#flink a");
  e.addClass("fa fa-star-o");
});
$(function () {
  $(window).scroll(function () {
    var e = $(window).scrollTop();
    if (e > 1) {
      $("#backtop").fadeIn().css({ bottom: "170px" });
      $("#quick_submit").fadeIn().css({ bottom: "220px" });
    } else {
      $("#backtop").fadeOut();
      $("#quick_submit").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    $(this).animate({ bottom: "1500px" }, 500);
  });
});
$(document).ready(function () {
  var e = document.location;
  $("#divNavBar a").each(function () {
    if (this.href == e.toString().split("#")[0]) {
      $(this).addClass("on");
      return false;
    }
  });
});
$(document).ready(function () {
  if (
    document.cookie.replace(
      /(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) === ""
  ) {
    if (new Date().getHours() > 22 || new Date().getHours() < 6) {
      document.body.classList.add("night");
      document.cookie = "night=1;path=/";
    } else {
      document.body.classList.remove("night");
      document.cookie = "night=0;path=/";
    }
  } else {
    var e =
      document.cookie.replace(
        /(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      ) || "0";
    if (e == "0") {
      document.body.classList.remove("night");
    } else if (e == "1") {
      document.body.classList.add("night");
    }
  }
});
function switchNightMode() {
  var e =
    document.cookie.replace(
      /(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) || "0";
  if (e == "0") {
    document.body.classList.add("night");
    document.cookie = "night=1;path=/";
  } else {
    document.body.classList.remove("night");
    document.cookie = "night=0;path=/";
  }
}
/*!* jquery.tooltip.js 0.0.1 - https://github.com/yckart/jquery.tooltip.js*/ (function (
  e,
  X,
  c
) {
  var G = "tooltip",
    b = {
      fade: false,
      fallback: "",
      align: "autoTop",
      html: false,
      attr: "title",
      trigger: {
        show: "ontouchend" in c ? "touchstart" : "mouseenter",
        hide: "ontouchend" in c ? "touchend" : "mouseleave",
      },
      delay: { show: 0, hide: 0 },
    };
  function Z(G, Z) {
    Z = e.extend({}, b, Z);
    var cB = e(G),
      a;
    cB.on("tooltip:show " + Z.trigger.show, function () {
      e.data(this, "cancel.tooltip", true);
      var G = e.data(this, "active.tooltip");
      if (!G) {
        G = e('<div class="tooltip"><div class="tooltip-inner"/></div>').css({
          position: "absolute",
          zIndex: 1e5,
        });
        e.data(this, "active.tooltip", G);
      }
      if (cB.attr("title") || typeof cB.attr("original-title") !== "string") {
        cB.attr("original-title", cB.attr("title") || "").removeAttr("title");
      }
      var b;
      if (typeof Z.attr === "string") {
        b = cB.attr(Z.attr === "title" ? "original-title" : Z.attr);
      } else {
        if (typeof Z.attr == "function") {
          b = Z.attr.call(this);
        }
      }
      G.find(".tooltip-inner")[Z.html ? "html" : "text"](b || Z.fallback);
      var I = e.extend({}, cB.offset(), {
        width: this.offsetWidth,
        height: this.offsetHeight,
      });
      G[0].className = "tooltip";
      G.remove().css({ top: 0, left: 0, opacity: 0 }).appendTo(c.body);
      var aH = G[0].offsetWidth,
        bB = G[0].offsetHeight,
        eN =
          Z.align === "autoTop"
            ? I.top > e(c).scrollTop() + e(X).height() / 2
              ? "t"
              : "b"
            : I.left > e(c).scrollLeft() + e(X).width() / 2
            ? "l"
            : "r";
      switch (Z.align.charAt(0) === "a" ? eN : Z.align.charAt(0)) {
        case "b":
          G.css({
            top: I.top + I.height,
            left: I.left + I.width / 2 - aH / 2,
          }).addClass("tooltip-bottom");
          break;
        case "t":
          G.css({
            top: I.top - bB,
            left: I.left + I.width / 2 - aH / 2,
          }).addClass("tooltip-top");
          break;
        case "l":
          G.css({
            top: I.top + I.height / 2 - bB / 2,
            left: I.left - aH,
          }).addClass("tooltip-left");
          break;
        case "r":
          G.css({
            top: I.top + I.height / 2 - bB / 2,
            left: I.left + I.width,
          }).addClass("tooltip-right");
          break;
      }
      clearTimeout(a);
      G.stop()
        .delay(Z.delay.show)
        .fadeTo(
          Z.fade ? Z.fade.duration : 0,
          Z.fade.opacity || 0.8,
          Z.fade.complete
        );
    });
    cB.on("tooltip:hide " + Z.trigger.hide, function () {
      e.data(this, "cancel.tooltip", false);
      var X = this;
      a = setTimeout(function () {
        if (e.data(X, "cancel.tooltip")) {
          return;
        }
        var c = e.data(X, "active.tooltip");
        if (Z.fade) {
          c.stop().fadeTo(Z.fade.duration, 0, function () {
            c.remove();
            if (Z.fade.complete) {
              Z.fade.complete(true);
            }
          });
        } else {
          c.remove();
        }
      }, Z.delay.hide);
    });
  }
  e.fn[G] = function (X) {
    return this.each(function () {
      if (!e.data(this, "plugin_" + G)) {
        e.data(this, "plugin_" + G, new Z(this, X));
      }
    });
  };
})(jQuery, window, document);
!(function (e, X) {
  !(function () {
    for (
      var e = 0, c = ["ms", "moz", "webkit", "o"], G = 0;
      G < c.length && !X.requestAnimationFrame;
      ++G
    )
      (X.requestAnimationFrame = X[c[G] + "RequestAnimationFrame"]),
        (X.cancelAnimationFrame =
          X[c[G] + "CancelAnimationFrame"] ||
          X[c[G] + "CancelRequestAnimationFrame"]);
    X.requestAnimationFrame ||
      (X.requestAnimationFrame = function (c) {
        var G = new Date().getTime(),
          b = Math.max(0, 16 - (G - e)),
          Z = X.setTimeout(function () {
            c(G + b);
          }, b);
        return (e = G + b), Z;
      }),
      X.cancelAnimationFrame ||
        (X.cancelAnimationFrame = function (e) {
          clearTimeout(e);
        });
  })();
  var c = {
    POS_SCHEME_STATIC: 100,
    POS_SCHEME_FIXED: 200,
    POS_SCHEME_ABSOLUTE: 300,
    create: function (e, X) {
      return "undefined" == typeof X && (X = {}), Object.create(c).init(e, X);
    },
    init: function (e, G) {
      return (
        (this.constructor = c),
        (this.window = X),
        (this.element = e),
        (this.container = e.parentNode),
        (this.posScheme = c.POS_SCHEME_STATIC),
        (this.isTicking = !1),
        (this.threshold = null),
        (this.options = G),
        (this.boundingBoxHeight = null),
        (this.latestKnownScrollY = this.window.pageYOffset),
        this.validateContainerPosScheme(),
        this.setOffsetTop(),
        this.setOffsetBottom(),
        this.calcThreshold(),
        this.setElementWidth(),
        this.setBoundingBoxHeight(),
        this.createPlaceholder(),
        this.subscribeToWindowScroll(),
        this
      );
    },
    validateContainerPosScheme: function () {
      var e = this.container.style.position;
      "relative" != e &&
        "absolute" != e &&
        (this.container.style.position = "relative");
    },
    setOffsetTop: function () {
      if (
        "number" == typeof this.options.offsetTop &&
        this.options.offsetTop >= 0
      )
        this.offsetTop = this.options.offsetTop;
      else {
        var e = parseInt(
            this.window.getComputedStyle(this.container).borderTopWidth,
            10
          ),
          X = parseInt(
            this.window.getComputedStyle(this.container).paddingTop,
            10
          );
        this.offsetTop = e + X;
      }
    },
    setOffsetBottom: function () {
      var e = parseInt(
          this.window.getComputedStyle(this.container).borderBottomWidth,
          10
        ),
        X = parseInt(
          this.window.getComputedStyle(this.container).paddingBottom,
          10
        );
      this.offsetBottom = e + X;
    },
    calcThreshold: function () {
      this.threshold =
        this.getElementDistanceFromDocumentTop() - this.offsetTop;
    },
    setElementWidth: function () {
      var e = this.window.getComputedStyle(this.element).width;
      this.element.style.width = e;
    },
    setBoundingBoxHeight: function (e) {
      (this.boundingBoxHeight = this.element.getBoundingClientRect().height),
        e === !0 &&
          (this.placeholder.style.height = this.boundingBoxHeight + "px");
    },
    createPlaceholder: function () {
      var e = document.createElement("DIV"),
        X = this.element.getBoundingClientRect().width + "px",
        c = this.boundingBoxHeight + "px",
        G = this.window.getComputedStyle(this.element).margin,
        b = this.window.getComputedStyle(this.element).float;
      (e.style.display = "none"),
        (e.style.width = X),
        (e.style.height = c),
        (e.style.margin = G),
        (e.style.float = b),
        this.container.insertBefore(e, this.element),
        (this.placeholder = e);
    },
    subscribeToWindowScroll: function () {
      this.window.addEventListener("scroll", this.onScroll.bind(this));
    },
    onScroll: function () {
      this.isTicking ||
        ((this.latestKnownScrollY = this.window.pageYOffset),
        this.window.requestAnimationFrame(this.update.bind(this)),
        (this.isTicking = !0));
    },
    isStatic: function () {
      return this.posScheme === c.POS_SCHEME_STATIC;
    },
    makeStatic: function () {
      (this.element.style.position = "static"),
        (this.placeholder.style.display = "none"),
        (this.posScheme = c.POS_SCHEME_STATIC);
    },
    isFixed: function () {
      return this.posScheme === c.POS_SCHEME_FIXED;
    },
    makeFixed: function () {
      (this.element.style.bottom = null),
        (this.element.style.position = "fixed"),
        (this.element.style.top = this.offsetTop + "px"),
        (this.placeholder.style.display = "block"),
        (this.posScheme = c.POS_SCHEME_FIXED);
    },
    isAbsolute: function () {
      return this.posScheme === c.POS_SCHEME_ABSOLUTE;
    },
    makeAbsolute: function () {
      (this.element.style.top = null),
        (this.element.style.position = "absolute"),
        (this.element.style.bottom = this.offsetBottom + "px"),
        (this.placeholder.style.display = "block"),
        (this.posScheme = c.POS_SCHEME_ABSOLUTE);
    },
    update: function () {
      (this.isTicking = !1),
        this.isBelowThreshold()
          ? this.isStatic() || this.makeStatic()
          : this.canStickyFitInContainer()
          ? this.isFixed() || this.makeFixed()
          : this.isAbsolute() || this.makeAbsolute();
    },
    isBelowThreshold: function () {
      return this.latestKnownScrollY < this.threshold ? !0 : !1;
    },
    canStickyFitInContainer: function () {
      return this.getAvailableSpaceInContainer() >= this.boundingBoxHeight;
    },
    getAvailableSpaceInContainer: function () {
      return (
        this.container.getBoundingClientRect().bottom -
        this.offsetBottom -
        this.offsetTop
      );
    },
    getElementDistanceFromDocumentTop: function () {
      var e = this.isStatic() ? this.element : this.placeholder,
        X = this.latestKnownScrollY + e.getBoundingClientRect().top;
      return X;
    },
    refresh: function () {
      this.calcThreshold(), this.setBoundingBoxHeight(!0);
    },
  };
  e.fn.positionSticky = function (X) {
    return this.each(function () {
      var G = e(this),
        b = G.data("positionSticky");
      b || G.data("positionSticky", (b = c.create(this, X))),
        "string" == typeof X && b[X]();
    });
  };
})(jQuery, window);
