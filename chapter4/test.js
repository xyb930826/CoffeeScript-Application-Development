// Generated by CoffeeScript 1.11.0
(function() {
  var alcohol, arr, bird, boatInfo, direction, drink, func, func2, func3, func4, i, k, languageName, left, mixer, prefix, race, ref, ref1, ref2, ref3, ref4, ref5, ref6, right, splits, test, time, yeti,
    slice = [].slice;

  yeti = 1;

  if (yeti != null) {
    console.log("I want to believe");
  }

  test = null;

  if (test == null) {
    test = 'a';
  }

  test || (test = 'm');

  k = yeti != null;

  bird = {
    verb: 'singing',
    time: 'midnight'
  };

  k = bird.time;

  ref = "CoffeeScript".match(/(.*)Script/), languageName = ref[0], prefix = ref[1];

  ref1 = ["Screwdriver", ["vodka", "orange juice", "m"]], drink = ref1[0], (ref2 = ref1[1], alcohol = ref2[0], mixer = ref2[1]);

  direction = [
    {
      type: 'boat',
      directions: ['port', 'starboard']
    }, {
      type: 'dogsled',
      directions: ['haw', 'gee']
    }
  ];

  boatInfo = direction[0], (ref3 = direction[1], (ref4 = ref3.directions, left = ref4[0], right = ref4[1]));

  func = function(a, b) {
    if (b == null) {
      b = 'KK';
    }
    return console.log(a + ':' + b);
  };

  func('a', 'v');

  func2 = function() {
    var a, b;
    a = arguments[0], b = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return console.log(b.length);
  };

  func2(1, 2, 3, 4);

  ref5 = ['10K', ['13:08', '13:09', '23:17']], race = ref5[0], (ref6 = ref5[1], splits = 2 <= ref6.length ? slice.call(ref6, 0, i = ref6.length - 1) : (i = 0, []), time = ref6[i++]);

  console.log(race);

  console.log(splits);

  func3 = function(a, b, c) {
    var len;
    len = arguments.length;
    console.log(len);
    if (len === 1) {
      return a;
    } else if (len === 2) {
      return a + ',' + b;
    } else if (len === 3) {
      return a + ',' + b + ',' + c;
    } else {
      return 'null';
    }
  };

  arr = [1, 2, 3];

  console.log(func3.apply(null, arr));

  func4 = function() {
    var a, b, j, len1, v;
    a = arguments[0], b = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    for (j = 0, len1 = b.length; j < len1; j++) {
      v = b[j];
      console.log(v);
    }
    return console.log(Math.min.apply(Math, b));
  };

}).call(this);
