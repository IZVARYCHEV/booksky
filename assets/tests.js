'use strict';

define("booksky/tests/integration/components/input-tags-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var tagElements;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Set any properties with this.set('myProperty', 'value');
                // Handle any actions with this.set('myAction', function(val) { ... });
                this.tags = ['first', 'second'];
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <InputTags @tags={{this.tags}} />
                */
                {
                  "id": "VJA8yk58",
                  "block": "{\"symbols\":[],\"statements\":[[8,\"input-tags\",[],[[\"@tags\"],[[32,0,[\"tags\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  "meta": {}
                }));

              case 3:
                console.log(this.element);
                console.log(this.element.textContent);
                tagElements = this.element.querySelectorAll("span.badge-info");
                assert.equal(tagElements.length, this.tags.length); // assert.equal(this.element.textContent.trim(), '');
                // Template block usage:
                // await render(hbs`
                //   <InputTags>
                //     template block text
                //   </InputTags>
                // `);
                // assert.equal(this.element.textContent.trim(), 'template block text');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("booksky/tests/integration/modifiers/init-input-tags-events-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Modifier | init-input-tags-events', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.tags = ['first', 'second'];
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <div {{init-input-tags-events this.tags}}></div>
                */
                {
                  "id": "PbibwHy2",
                  "block": "{\"symbols\":[],\"statements\":[[11,\"div\"],[4,[38,0],[[32,0,[\"tags\"]]],null],[12],[13]],\"hasEval\":false,\"upvars\":[\"init-input-tags-events\"]}",
                  "meta": {}
                }));

              case 3:
                assert.ok(true);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("booksky/tests/test-helper", ["booksky/app", "booksky/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("booksky/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("booksky/tests/unit/routes/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/routes/author/detail-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:author/detail');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/services/data-service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | data-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data-service');
      assert.ok(service);
    });
  });
});
define('booksky/config/environment', [], function() {
  var prefix = 'booksky';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('booksky/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
