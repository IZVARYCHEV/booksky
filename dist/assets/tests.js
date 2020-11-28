'use strict';

define("booksky/tests/integration/components/input-tags-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      this.tags = ['first', 'second'];
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <InputTags @tags={{this.tags}} />
      */
      {
        "id": "VJA8yk58",
        "block": "{\"symbols\":[],\"statements\":[[8,\"input-tags\",[],[[\"@tags\"],[[32,0,[\"tags\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      console.log(this.element);
      console.log(this.element.textContent);
      let tagElements = this.element.querySelectorAll("span.badge-info");
      assert.equal(tagElements.length, this.tags.length); // assert.equal(this.element.textContent.trim(), '');
      // Template block usage:
      // await render(hbs`
      //   <InputTags>
      //     template block text
      //   </InputTags>
      // `);
      // assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("booksky/tests/integration/modifiers/init-input-tags-events-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | init-input-tags-events', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.tags = ['first', 'second'];
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{init-input-tags-events this.tags}}></div>
      */
      {
        "id": "PbibwHy2",
        "block": "{\"symbols\":[],\"statements\":[[11,\"div\"],[4,[38,0],[[32,0,[\"tags\"]]],null],[12],[13]],\"hasEval\":false,\"upvars\":[\"init-input-tags-events\"]}",
        "meta": {}
      }));
      assert.ok(true);
    });
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
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("booksky/tests/unit/routes/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/routes/author/detail-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author/detail');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("booksky/tests/unit/services/data-service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | data-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:data-service');
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
